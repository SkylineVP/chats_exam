import React                        from 'react';
import { connect }                  from 'react-redux';
import { createLoginRequestAction } from '../../../actions';
import { Field, Formik, Form }      from 'formik';

let SendMessageForm = props => {

	const handleSubmit = ( values ) => {
		props.login(props.currentChat, values.message);
	};

	return (
		<Formik onSubmit={handleSubmit}
				initialValues={{
					message: '',
				}}>
			{
				( {} ) => (
					<Form>
						<Field name={'message'} type={'text'} value={values.message}/>
						<button type={'submit'}>send Message</button>
					</Form>
				)
			}
		</Formik>
	);
};
const mapStateToProps = state => {
	return state.chats.currentChat
};
const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(SendMessageForm);
