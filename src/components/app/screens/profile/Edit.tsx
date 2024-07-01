'use client';

//react
import { useState } from "react";

//next
import { useRouter } from "next/navigation";

//components
import { Button, Form } from "@/components/ui";

//redux
import { useDispatch } from "react-redux";
import { setReduxUser,selectUser } from "@/app/GlobalRedux/Features/auth/authSlice";
import { useSelector } from "react-redux";

//interfaces
import { IInput, IUser } from "@/utils/interfaces/types";

//react-icons
import { TbUser, TbMail, TbDeviceMobile } from "react-icons/tb";

//antd
import { message } from "antd";


//lib
import { participantService } from "@/database/functions/DbService";


const EditProfile = () => {
    //router
    const { push } = useRouter();

    //redux
    const dispatch = useDispatch();

    //redux
    const user: IUser | null = useSelector(selectUser);
    
    //useState - form
    const [form, setForm] = useState<IInput[]>([
        {name: 'email', type: 'email', placeholder: 'Correo', label: 'Correo', value: user?.mail ?? '', variant: 'filled', startIcon: <TbMail/>, readOnly: true },
        {name: 'phone', type: 'tel', placeholder: 'Teléfono', label: 'Teléfono', value: user?.phone ?? '', variant: 'filled', startIcon: <TbDeviceMobile/> },
        {name: 'name', type: 'text', placeholder: 'Nombre', label: 'Nombre', value: user?.name ?? '', variant: 'filled', startIcon: <TbUser/>},
        {name: 'nickname', type: 'text', placeholder: 'Apodo', label: 'Apodo', value: user?.nickname ?? '', variant: 'filled', startIcon: <TbUser/>},
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
        setLoading(true);
        
        if (!user) {
            console.error('User is null');
            setLoading(false);
            return;
        }
        
        // Using a generic object for updates
        const updates: Record<string, any> = {};
    
        form.forEach((inp) => {
            if (inp.name in user) {
                updates[inp.name] = inp.value;
            }
        });

    
        // Merge updates with the original user data
        const updatedUser: IUser = { ...user, ...updates };
    
        // Update the user in the database
        try {
            const res = await participantService.update(user.uid, updatedUser);
            console.log('User updated:', res);
            dispatch(setReduxUser(updatedUser));
            message.success('Datos actualizados');
            push('/app/profile');
            
        } catch (error) {
            console.error('Error updating the user:', error);
            message.success('Error al actualizar');
        }
    
        setLoading(false);
    };
    
    return (
        <div>
            <div className="p-4">
                <Form grid="grid-cols-2 md:grid-cols-2 gap-2" form={form} handleInputChange={(n, v) => handleInputChange(n, v as string)} onSubmit={handleSubmit}>
                    <div className="col-span-2">
                        <div className="grid gap-2 mt-4">
                            <Button text="Actualizar datos" variant="primary" type="submit" loading={loading} disabled={loading}/>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default EditProfile