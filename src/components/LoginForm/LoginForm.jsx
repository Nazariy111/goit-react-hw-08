import { useId } from 'react';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import css from './LoginForm.module.css'
import * as Yup from 'yup'
import toast from 'react-hot-toast';


const userSchema = Yup.object().shape({
    email: Yup
        .string()
        .required("Sorry! email is required"),
    password: Yup
        .string()
        .required("Sorry! Password is required")
});


const INITIAL_VALUES = { email: "", password: "" };

const LoginForm = () => {
    const dispatch = useDispatch();
    
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then((data) => {
                toast.success(`Welcome back, ${data.user.name}!`);
            })
            .catch();
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={userSchema}>
            <Form className={css.formSection}>
                <label className={css.formLabel} htmlFor={emailFieldId}>Email</label>
                <Field className={css.inputField} type="email" name="email" id={emailFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='email'/>

                <label className={css.formLabel} htmlFor={passwordFieldId}>Password</label>
                <Field className={css.inputField} type="tel" name="password" id={passwordFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='password'/>
                <button className={css.formButton} type="submit">Log in</button>
            </Form>
        </Formik>
    )
}

export default LoginForm