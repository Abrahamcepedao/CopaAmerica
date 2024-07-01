'use client'

//react
import { useState } from 'react'

//Mui
import { IconButton, ListItemIcon, MenuItem, Tooltip } from '@mui/material';

//react-icons
import { 
    TbLogout, 
    TbLockSquareRounded, 
    TbReportMoney, 
    TbQuestionMark,
    TbBuildingStore,
    TbCalendar, 
    TbUser, 
    TbMail, 
    TbUserShield, 
    TbUserCheck, 
    TbXboxX  
} from "react-icons/tb";

//components
import { MenuWrapper } from '@/components/ui';

//interfaces
import { IFilterOpt } from '@/utils/interfaces/types';

interface Props {
    label: string,
    icon: JSX.Element,
    options: IFilterOpt[],
    handleInputChange: (num: number) => void,
}

//icons
const icons = {
    'remove': <TbXboxX/>,
    'person': <TbUser/>,
    'company': <TbBuildingStore/>,
    'payment': <TbReportMoney/>,
    'question': <TbQuestionMark/>,
    'date': <TbCalendar/>,
    'password': <TbLockSquareRounded/>,
    'logout': <TbLogout/>,
    'email': <TbMail/>,
    'role': <TbUserShield/>,
    'status': <TbUserCheck/>
}

export const SelectIcon = ({ label, icon, options, handleInputChange }: Props) => {
    //useState - mode (rubro)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    /* handle mode menu click */
    const handleModeClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

    /* handle mode menu close */
    const handleModeClose = () => setAnchorEl(null)


    return (
        <>
            <Tooltip title={label} placement='top'>
                <IconButton
                    className='dark_icon'
                    onClick={(e) => {handleModeClick(e)}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    {icon}
                </IconButton>
            </Tooltip>

            <MenuWrapper
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleModeClose}

            >
                {options.map((option, i) => (
                    <MenuItem key={i} onClick={() => {handleInputChange(i); setAnchorEl(null)}}>
                        <ListItemIcon className='primary_text text-xl'>
                            {icons[option.id as keyof typeof icons]}
                        </ListItemIcon>
                        <p>{option.label}</p>
                    </MenuItem>
                ))}
            </MenuWrapper>
        </>
    )
}