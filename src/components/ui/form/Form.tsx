'use client'

//react
import { FormEvent } from "react";

// Date
import { Dayjs } from 'dayjs';

//antd
import { message } from "antd";

//comopnents
import { Input, TextArea, Select } from "@/components/ui";

//utils
import { validateEmail } from "@/utils/functions/utility_functions";

//interfaces
import { IInput } from "@/utils/interfaces/types";

interface Props {
    classname?: string;
    grid?: string;
    form: IInput[];
    handleInputChange?: (n: number, value: string) => void;
    onSubmit: (e?: FormEvent<HTMLFormElement>) => void;
    children?: React.ReactNode;
}

export const Form = ({ classname, grid, form, handleInputChange, onSubmit, children }: Props) => {
    //validate form
    const validateForm = () => {
        let err = ''
        form.forEach((inp) => {
            if (inp.required && inp.value === '' && inp.name !== 'birthday') err = `El campo "${inp.placeholder}" es requerido`
            if (inp.type === 'email' && !validateEmail(inp.value as string)) err = `El campo "${inp.placeholder}" no es un email válido`
            //if (inp.required && inp.value === '' && inp.name === 'birthday' && (inp.dates.startDate === null || inp.dates.startDate === '')) err = `El campo "${inp.placeholder}" no tiene una fecha válida`
        })
        if (err !== '') message.error(err)
        return err === ''
    }

    //handle submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateForm()) onSubmit()
    }

    return (
        <form autoComplete="off" className={`grid ${classname} ${grid ? grid : 'grid-cols-1 sm:grid-cols-2 gap-4'}`} onSubmit={handleSubmit}>
            {form.map((inp, index) => (
                <div className={`${inp.hidden === true ? 'hidden': inp.colSpan}`} key={`form_${index}`}>
                    {inp.hidden ? null : (
                        <>
                            {inp.type === 'select' ? (
                                <Select inp={inp} onChange={(val) => handleInputChange!(index, val)}/>
                            ) : inp.type === 'textarea' ? (
                                <TextArea inp={inp} onChange={(e) => handleInputChange!(index, e.target.value)}/>
                            ) : 
                                <Input inp={inp} onChange={(e) => handleInputChange!(index, e.target.value)}/>
                            }
                        </>
                    )}
                </div>
            ))}
            {children}
        </form>
    );
}