'use client';

//react
import { useState } from "react";

//next
import Link from "next/link";
import { useRouter } from "next/navigation";

//components
import { Button, Form, Typography } from "@/components/ui";

//antd
import { message } from "antd";

//react-icons
import { TbUser, TbLock } from "react-icons/tb";

//redux
import { useDispatch } from "react-redux";
import { setReduxUser } from "@/app/GlobalRedux/Features/auth/authSlice";

//lib
import { login } from "@/database/functions/auth";

//interfaces
import { IInput, IUser } from "@/utils/interfaces/types";

const Login = () => {
    //router
    const { push } = useRouter()

    //redux
    const dispatch = useDispatch();

    //useState - form
    const [form, setForm] = useState<IInput[]>([
        {name: 'email', type: 'email', placeholder: 'Correo', value: '', variant: 'filled', startIcon: <TbUser/>},
        {name: 'password', type: 'password', placeholder: 'Contraseña', value: '', variant: 'filled', startIcon: <TbLock/>}
    ])

    //useState - loading
    const [loading, setLoading] = useState<boolean>(false);

    //handle input change
    const handleInputChange = (n: number, val: string) => {
        const newForm = [...form];
        newForm[n].value = val;
        setForm(newForm);
    }

    //handle submit
    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        try {
            setLoading(true);
            const res = await login(form[0].value as string, form[1].value as string)
            console.log(res);
            setLoading(false);
            if(res && res.status === 200) {
                dispatch(setReduxUser(res.data as IUser));
                push('/app');
            } else if(res && res.status === 400) message.error(res.data);
            else message.error('Ocurrió un error inesperado');
        } catch (error) {
            console.error(error);
            message.error('Ocurrió un error inesperado');
            setLoading(false);
        }
    }

    return (
        <div className="p-4 pb-8 space-y-8">
            <Typography variant="title" text="Iniciar sesión" className="text-white text-center"/>
            <Form grid="grid-cols-1 md:grid-cols-1 gap-2" form={form} handleInputChange={(n, v) => handleInputChange(n, v as string)} onSubmit={handleSubmit}>
                <div className="space-y-8">
                    <div className='text-right text-white'>
                        <p className='mb-1'><span className="opacity-50">¿Olvidaste tu contraseña?</span> <Link href={"/forgot"} className="underline">Recupérala</Link></p>
                    </div>
                    <div className="grid gap-2">
                        <Button text="Iniciar sesión" variant="primary" type="submit" loading={loading} disabled={loading}/>
                        <Button text="Registrarse" variant="tertiary" onClick={() => push('/register')}/>
                    </div>
                    
                </div>
            </Form>
        </div>
    )
}

export default Login