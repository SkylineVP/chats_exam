import React                   from 'react';
import { connect }             from 'react-redux';
import { sendMessage }         from '../../../api/ws/chats'
import { Field, Formik, Form } from 'formik';

let SendMessageForm = props => {

	const handleSubmit = ( values, resetForm ) => {
		debugger;
		sendMessage(props.currentChat, {body: values.message, authorId: props.authorId});
		values.messages = '';
	};

	return (
		<Formik onSubmit={handleSubmit}
				initialValues={{
					message: '',
				}}>
			{
				( {values, isSubmiting, formProps} ) => (
					<Form style={{marginTop: "auto"}}>
						<Field name={'message'} type={'text'} value={values.message}/>
						<button type={'submit'}>send Message</button>
					</Form>
				)
			}
		</Formik>
	);
};
const mapStateToProps = state => {
	return {
		currentChat: state.chats.currentChat,
		authorId: state.auth.user.id
	}
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);
