'use client'

//react
import { useState } from 'react';

//Next.js
import { useRouter } from 'next/navigation'
import Link from 'next/link'

//components
import { Button, Form, Typography } from '@/components/ui';

//react-icons
import { TbMail, TbPhone, TbUser, TbLock } from "react-icons/tb";

//firebase
import { signup } from '@/database/functions/auth';

//redux
import { useDispatch } from 'react-redux';
import { setReduxUser } from '@/app/GlobalRedux/Features/auth/authSlice';

//antd
import { message } from 'antd';

//interfaces
import { IInput } from '@/utils/interfaces/types';


const Register = () => {
    //Router
    const router = useRouter()

    //redux
    const dispatch = useDispatch();

    //useState - loading
    const [loading, setLoading] = useState(false);

    //useState - form data
    const [formData, setFormData] = useState<IInput[]>([
        { name: "name", value: "", type: "text", placeholder: "Nombre", variant: "filled", required: true, icon: <TbUser /> },
        { name: "nickname", value: "", type: "text", placeholder: "Apodo", variant: "filled", required: true, icon: <TbUser /> },
        { name: "mail", value: "", type: "mail", placeholder: "Correo electrónico", variant: "filled", required: true, icon: <TbMail /> },
        { name: "phone", value: "", type: "phone", placeholder: "Teléfono", variant: "filled", required: true, icon: <TbPhone /> },
        { name: "password", value: "", type: "password", placeholder: "Contraseña", variant: "filled", required: true, icon: <TbLock /> },
    ])

    /* input change */
    const handleInputChange = (index: number, value: string | string[]) => {
        const temp = formData
        temp[index].value = value as string
        setFormData([...temp])
    }


    /* handle login */
    const handleRegister = async () => {
        setLoading(true)
        const res = await signup(formData[0].value as string, formData[1].value as string, formData[2].value as string, formData[3].value as string, formData[4].value as string)
        console.log(res)
        if (res.status !== 200) {
            //alert message
            message.error('Hubo un error al crear el usuario.')
        } else {
            router.push('/app')
            dispatch(setReduxUser(res.user))
        }
        setLoading(false)
    }

    return (
        <div className='p-4 pb-8 space-y-8'>
            <Typography text='Crea una cuenta' variant='title' className='text-center mb-4' />
            <Form grid='grid-cols-1 gap-4' form={formData} handleInputChange={handleInputChange} onSubmit={handleRegister}>
                {/* links */}
                <div className='text-right text-white'>
                    <p className='mb-1'><span className="opacity-40">¿Ya tienes un cuenta?</span> <Link href={"/"} className="underline">Inicia sesión</Link></p>
                </div>

                {/* submit */}
                <div className='w-full'>
                    <Button text='Ingresar' variant='primary' type='submit' loading={loading} />
                </div>
            </Form>

        </div>
    )
}

export default Register