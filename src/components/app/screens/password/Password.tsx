'use client';

//react
import { useState } from "react";

//components
import { Button, Form } from "@/components/ui";

//react-icons
import { TbLock } from "react-icons/tb";

//antd
import { message } from "antd";

//lib
import { changePassword } from "@/database/functions/auth";

//interfaces
import { IInput } from "@/utils/interfaces/types";

const Password = () => {
    //useState - form
    const [form, setForm] = useState<IInput[]>([
        { name: 'password', type: 'password', placeholder: 'Contraseña actual', value: '', variant: 'filled', startIcon: <TbLock/> },
        { name: 'new_password', type: 'password', placeholder: 'Nueva contraseña', value: '', variant: 'filled', startIcon: <TbLock/>},
        { name: 'confirm_password', type: 'password', placeholder: 'Confirmar contraseña', value: '', variant: 'filled', startIcon: <TbLock/>}
    ])

    //useState - loading
    const [loading, setLoading] = useState<boolean>(false)

    //handle input change
    const handleInputChange = (n: number, val: string) => {
        const newForm = [...form];
        newForm[n].value = val;
        setForm(newForm);
    }

    //handle submit
    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        //check if passwords match
        if(form[1].value !== form[2].value) return message.error('Las contraseñas no coinciden')

        try {
            setLoading(true)
            const res = await changePassword(form[0].value as string, form[1].value as string)
            console.log(res);
            setLoading(false)
            if(res === true) {
                message.success('Contraseña actualizada exitosamente')
                setForm([
                    { name: 'password', type: 'email', placeholder: 'Contraseña actual', value: '', variant: 'filled', startIcon: <TbLock/> },
                    { name: 'new_password', type: 'password', placeholder: 'Nueva contraseña', value: '', variant: 'filled', startIcon: <TbLock/>},
                    { name: 'confirm_password', type: 'password', placeholder: 'Confirmar contraseña', value: '', variant: 'filled', startIcon: <TbLock/>}
                ])
            } else if (res) message.error(res)
            else message.error('Error al actualizar contraseña')
            
        } catch(error) {
            message.error('Error al actualizar contraseña')
            setLoading(false)
        }
    }

    return (
        <div className="p-4">
            <Form form={form} grid="grid-cols-1 gap-4" classname="max-w-xl mx-auto" handleInputChange={(n, v) => handleInputChange(n, v as string)} onSubmit={handleSubmit}>
                <div className="mt-4">
                    <Button text='Guardar contraseña' variant='primary' type="submit" loading={loading} disabled={loading}/>
                </div>
            </Form>
        </div>
    )
}

export default Password