
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";


const contactSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "This name id too Short!")
        .max(50, "This name is too Long!")
        .required("Sorry! Name is required"),
    number: Yup
        .string()
        .matches(/^\d{3}-\d{3}-\d{4}$/, 'Sorry! The phone number format is XXX-XXX-XXXX')
        .required("Sorry! Phone number is required")
});


const INITIAL_VALUES = { id: "", name: "", number: "" };

const ContactForm = () => {

    const dispatch = useDispatch();
    
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}>
            <Form className={css.formSection}>
                <label className={css.formLabel} htmlFor={nameFieldId}>Name</label>
                <Field className={css.inputField} type="text" name="name" id={nameFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='name'/>

                <label className={css.formLabel} htmlFor={numberFieldId}>Number</label>
                <Field className={css.inputField} type="tel" name="number" id={numberFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='number'/>
                <button className={css.formButton} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm