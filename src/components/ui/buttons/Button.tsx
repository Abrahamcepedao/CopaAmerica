'use client'

//mui
import { CircularProgress } from "@mui/material"

//interfaces
interface Props {
    text: string,
    onClick?: () => void,
    variant: 'primary' | 'secondary' | 'tertiary' | 'green' | 'blue' | 'purple',
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
    iconEnd?: JSX.Element,
    iconStart?: JSX.Element,
    loading?: boolean,
    compressed?: boolean,
}

let variants = {
    'primary': 'bg-white',
    'secondary': 'bg-card-primary',
    'tertiary': 'bg-purple',
    'green': 'bg-green/70 hover:bg-green',
    'blue': 'bg-blue/70 hover:bg-blue',
    'purple': 'bg-purple/70 hover:bg-purple',
}

let texts = {
    'primary': 'text-black',
    'secondary': 'text-white',
    'tertiary': 'text-white',
    'green': 'text-white',
    'blue': 'text-white',
    'purple': 'text-white',
}

export const Button = ({ text, onClick, variant, type, disabled = false, iconEnd, iconStart, loading = false, compressed = true }: Props) => {
    return (
        <button 
            type={type ? type : 'button'} 
            disabled={disabled}
            className={`w-full ${compressed ? 'py-2 px-4' : 'p-4'} text-sm pointer rounded-md bold ${texts[variant as 'primary']} ${variants[variant as 'primary']} ${disabled ? 'opacity-50 cursor-not-allowed hover' : ''} ${iconEnd ? 'flex_c_center' : ''}`} 
            onClick={onClick}>
                {loading ? <div className="flex_c_center"><CircularProgress color="inherit" size={20} className={`${texts[variant as 'primary']} h-12 w-12`}/></div> : <>{iconStart ? iconStart : ''} {text} {iconEnd ? iconEnd : ''}</>}
        </button>
    )
}