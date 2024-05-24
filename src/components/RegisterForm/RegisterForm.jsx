import  { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import css from "./RegisterForm.module.css";
import { register } from '../../redux/auth/operations';

const registerSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "This name is too Short!")
        .max(50, "This name is too Long!")
        .required("Name is required"),
    email: Yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup
        .string()
        .min(3, "The password is too Short!")
        .max(30, "The password is too Long!")
        .required("Password is required"),
});

const INITIAL_VALUES = { name: "", email: "", password: "" };



const RegisterForm = () => {

    const dispatch = useDispatch();

    const usernameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={registerSchema}>
            <Form className={css.formSection}>
                <label className={css.formLabel} htmlFor={usernameFieldId}>Username</label>
                <Field className={css.inputField} type="text" name="name" id={usernameFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='name'/>

                <label className={css.formLabel} htmlFor={emailFieldId}>Email</label>
                <Field className={css.inputField} type="email" name="email" id={emailFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='email'/>
                
                <label className={css.formLabel} htmlFor={passwordFieldId}>Password</label>
                <Field className={css.inputField} type="text" name="password" id={passwordFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='password'/>
                <button className={css.formButton} type="submit">Register</button>
            </Form>
        </Formik>
    )
}

export default RegisterForm