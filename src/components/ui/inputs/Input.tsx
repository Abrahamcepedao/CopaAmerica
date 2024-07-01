'use client'

//react
import React, { useState, useRef } from 'react';

//react-icons
import { TbEye, TbEyeOff } from "react-icons/tb";

//utils
import { validateEmail } from '@/utils/functions/utility_functions';

//interfaces
import { IInput } from '@/utils/interfaces/types';

interface Props {
    inp: IInput;
    index?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValuesChange?: (i: number, v: string) => void;
}

let variants = {
    'filled': 'bg-white',
    'outlined': 'border border-gray-700',
    'orange_filled': 'bg-orange-200',
};

let rings = {
    'outlined': 'ring-none',
    'orange_filled': 'ring-2 ring-orange-500',
}
let text = {
    'filled': 'text-black',
    'outlined': 'text-white',
    'orange_filled': 'text-orange-700 placeholder-orange-400',
}

export const Input = ({ inp, index, onChange, onValuesChange }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false); 
    const [emailError, setEmailError] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onFocus = () => {
        setFocused(true);
        setEmailError(false);
    };

    const onBlur = () => {
        setFocused(false);
        if (inp.type === 'email' && inp.value && !validateEmail(inp.value as string)) setEmailError(true);
        else setEmailError(false);
    };

    return (
        <div>
            {(inp.label !== undefined && inp.type !== 'array') && <p className={`label mb-2`}>{inp.label}{inp.required ? '*' : ''}</p>}
            <div
                className={`relative p-2 rounded-md flex justify-center items-center ${variants[inp.variant as 'outlined']} ${
                    focused ? ` ${rings[inp.variant as 'outlined']}` : ''} ${emailError ? 'border ring-2 !border-red-500 !ring-red-500' : ''}`}
            >
                {inp.startIcon && (
                    <div className={`mr-2 ${text[inp.variant as 'outlined']}`}>
                        {inp.startIcon}
                    </div>
                )}
                {inp.icon && (
                    <div className={`mr-2 ${text[inp.variant as 'outlined']}`}>
                        {inp.icon}
                    </div>
                )}
                <input
                    autoComplete='new-password'
                    ref={inputRef}
                    type={showPassword ? 'text' : inp.type}
                    name={inp.name}
                    placeholder={inp.placeholder}
                    value={inp.value as string}
                    onChange={onChange ? onChange : onValuesChange ? (e) => onValuesChange(index as number, e.target.value) : () => {}}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={inp.readOnly}
                    className={`${text[inp.variant as 'outlined']} text-sm bg-transparent outline-none w-full ${inp.type === 'password' ? 'pr-10' : ''}`}
                />
                {inp.type === 'password' && (
                    <>
                        {showPassword ? <TbEyeOff className={`${text[inp.variant as 'outlined']} pointer text-xl`} onClick={togglePasswordVisibility}/> : <TbEye className={`${text[inp.variant as 'outlined']} pointer text-xl`} onClick={togglePasswordVisibility}/>}
                    </>
                )}
            </div>
            {(emailError) && (
                <span className="text-red-500 text-xs">{'Introduzca un correo válido'}</span>
            )}
        </div>
    );
}