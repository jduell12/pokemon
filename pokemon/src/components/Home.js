import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import Form from './Form'
import {regionFormSchema} from '../validation/formSchema'
import {StyledHome} from '../styles/StyledHome'

export default function Home(){
    const initialFormValues = {
        region: '',
    }

    const initialFormErrors = {
        regions: '',
    }

    const [form, setForm] = useState(initialFormValues);
    const [formErrors, setErrors] = useState(initialFormErrors); 

    const onInputChange = event => {
        const {name, value} = event.target;

        Yup
            .reach(regionFormSchema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...formErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })

        setForm({
            ...form,
            [name]: value
        })
        
    }

    const onSubmit = event =>{
        event.preventDefault()
        const {name, value} = event.target;
        console.log(name);
        console.log(value);
    }

    return(
        <StyledHome>
            <Form  
                value={form} 
                onInputChange={onInputChange}
                onSubmit = {onSubmit}
            />
        </StyledHome>
    )
}