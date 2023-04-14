import React from "react";
import {InputForm, Label} from "./styles";

export function Input({label, type, placeholder}) {
    return(
        <>
        <Label>{label}*</Label>
        <InputForm type={type} placeholder={placeholder}/>
        </>
    );
}
