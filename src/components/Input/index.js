import React from "react";
import {InputContainer} from './styles'
import ItemRepo from "../ItemRepo";

export function Input ({value, onChange}) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange} />
        </InputContainer>
    )
}

export default Input