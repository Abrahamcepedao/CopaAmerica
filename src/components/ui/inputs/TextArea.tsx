'use client'

//react
import React, { useState, useRef } from 'react';

//interfaces
import { IInput } from '@/utils/interfaces/types';

interface Props {
    inp: IInput;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

let variants = {
    'outlined': 'border border-gray-700',
};

let rings = {
    'outlined': 'ring-white',
}
let text = {
    'outlined': 'text-white',
}

export const TextArea = ({ inp, onChange }: Props) => {
    const [focused, setFocused] = useState(false); 
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onFocus = () => setFocused(true)

    return (
        <div className={`${inp.colSpan}`}>
            {inp.label && <p className={`label ${text[inp.variant as 'outlined']} mb-2`}>{inp.label}{inp.required ? '*' : ''}</p>}
            <div className={`relative p-2 rounded-md flex_b_start ${variants[inp.variant as 'outlined']} ${focused ? ` ${rings[inp.variant as 'outlined']}` : ''}`}>
                {inp.startIcon && <div className={`mr-2 mt-1 ${text[inp.variant as 'outlined']}`}>{inp.startIcon}</div>}
                <textarea
                    ref={inputRef as React.Ref<HTMLTextAreaElement>}
                    name={inp.name}
                    placeholder={inp.placeholder}
                    value={inp.value as string}
                    onChange={onChange}
                    onFocus={onFocus}
                    rows={6}
                    className={`${text[inp.variant as 'outlined']} bg-transparent outline-none w-full ${inp.type === 'password' ? 'pr-10' : ''}`}
                />
            </div>
        </div>
    );
}