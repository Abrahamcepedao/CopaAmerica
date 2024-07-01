'use client'

//react
import { useState } from 'react';

//Next.js
import Link from 'next/link'

//components
import { Button, Form, Typography } from '@/components/ui';

//react-icons
import { TbMail } from "react-icons/tb";

//firebase
import { triggerResetEmail } from '@/database/functions/auth';

//antd
import { message } from 'antd';

//interfaces
import { IInput } from '@/utils/interfaces/types';

const Recover = () => {

    //useState - loading
    const [loading, setLoading] = useState(false);

    //useState - form data
    const [formData, setFormData] = useState<IInput[]>([
        {
            name: "mail",
            value: "",
            type: "mail",
            placeholder: "Correo electrónico",
            variant: "filled",
            icon: <TbMail/>
        },
    ])

    /* input change */
    const handleInputChange = (index: number, value: string | string[]) => {
        const temp = formData
        temp[index].value = value as string
        setFormData([...temp])
    }

    /* handle login */
    const handleEmailSend = async () => {
        setLoading(true)
        const res = await triggerResetEmail(formData[0].value as string);
        if (res !== 'envio_correcto') message.error(res);
        else message.success('Se ha enviado un correo a tu bandeja de entrada');
        setLoading(false)
    }

    return (
        <div className='p-4'>
            <Typography text='Recuperar contraseña' variant='title' className='text-center mb-4' />
            <Form grid='grid-cols-1 gap-4' form={formData} handleInputChange={handleInputChange} onSubmit={handleEmailSend}>
                <div className='text-right text-white'>
                    <p className='mb-1'><span className="opacity-50">¿Te acordaste?</span> <Link href={"/"} className="underline">inicia sesión</Link></p>
                </div>

                <div className='w-full'>
                    <Button text='Recuperar' variant='primary' type='submit' loading={loading} />
                </div>
            </Form>
        </div>
    )
}

export default Recover