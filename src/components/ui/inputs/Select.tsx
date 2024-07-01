'use client'

//react
import { useState } from 'react'

//Mui
import { MenuItem } from '@mui/material';

//react - icons
import { TbChevronDown } from 'react-icons/tb';

//components
import { MenuWrapper } from '@/components/ui';

//interfaces
import { IOption, IInput } from '@/utils/interfaces/types';

interface Props {
    inp: IInput,
    onChange: (val: string, name: string) => void,
}

const variants = {
    outlined: 'border border-primary',
}

const text = {
    outlined: 'text-black',
}

export const Select = ({ inp, onChange }: Props) => {
    //useState - mode (rubro)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    /* handle mode menu click */
    const handleModeClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

    /* handle mode menu close */
    const handleModeClose = () => setAnchorEl(null)

    const getValueLabel = (value: string) => {
        const option = inp.options?.find((opt: IOption) => opt.value === value)
        return option ? option.label.length > 30 ? option.label.slice(0, 30) + '...' : option.label : ''
    }

    return (
        <div className=' flex justify-between items-center gap-8'>
            {inp.label && <p className='label text-white'>{inp.label}{inp.required ? '*' : ''}</p>}
            <div className='w-2/3'>
                <div 
                    className={`text-sm mr-4 bg-input-primary w-full rounded-lg p-2 flex_b_center cursor-pointer ${variants[inp.variant as 'outlined']}`}
                    onClick={(e) => {handleModeClick(e)}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    {inp.startIcon ? (
                        <div className='flex_s_center'>
                            {inp.startIcon}
                            <p className={`text-sm ml-2 label ${text[inp.variant  as 'outlined']}`}>{getValueLabel(inp.value as string)}</p>
                        </div>
                    ) : <p className={`text-sm ml-2 label text-white ${text[inp.variant  as 'outlined']}`}>{getValueLabel(inp.value as string)}</p>}
                    <TbChevronDown className={`${text[inp.variant  as 'outlined']}`}/>
                </div>
            </div>

            <MenuWrapper
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleModeClose}
            >
                {inp.options?.map((option: IOption, i: number) => (
                    <MenuItem key={`select_${i}`} disableRipple className='px-2 py-0 h-[10px]' onClick={() => {onChange(option.value, inp.name); setAnchorEl(null)}}>
                        <p className=''>{option.label}</p>
                    </MenuItem>
                ))}
            </MenuWrapper>
        </div>
    )
}