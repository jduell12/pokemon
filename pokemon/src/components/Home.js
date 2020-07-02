import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import {regionFormSchema} from '../validation/formSchema'
import {StyledHome, StyledButton} from '../styles/StyledHome'

export default function Home(){
    const initialRegion = '';

    const initialFormErrors = {
        regions: '',
    }

    const [region, setRegion] = useState(initialRegion);
    const [formErrors, setErrors] = useState(initialFormErrors); 

    return(
        <StyledHome>
            <label htmlFor='regionInput'>
                Region: &nbsp;
                <select id='regionInput' name='region'>
                    <option value=''>-- Select a Region--</option>
                    <option value='Alola'>Alola</option>
                    <option value='Galar'>Galar</option>
                    <option value='Hoenn'>Hoenn</option>
                    <option value='Johto'>Johto</option>
                    <option value='Kanto'>Kanto</option>
                    <option value='Sinnoh'>Sinnoh</option>
                    <option value='Unova'>Unova</option>
                </select>
            </label>
            <StyledButton>Submit</StyledButton>
        </StyledHome>
    )
}