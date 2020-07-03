import React from 'react';
import {StyledButton} from '../styles/StyledHome'

export default function Form (props){
    const {value, onInputChange} = props;
    return(
        <div>
            <label htmlFor='regionInput'>
                Region: &nbsp;
                <select id='regionInput' name='region' value={value.region} onChange={onInputChange}>
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
        </div>
    )
}