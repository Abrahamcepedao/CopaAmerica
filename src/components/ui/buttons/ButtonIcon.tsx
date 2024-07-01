'use client'

//Material UI
import { IconButton, Tooltip, Badge } from '@mui/material'

interface Props {
    onClick?: () => void,
    title?: string,
    icon: JSX.Element,
    badge?: number,
}

export const ButtonIcon = ({ onClick, title, icon, badge }: Props) => {
    return (
        <Tooltip title={title} placement='top' onClick={onClick}>
            {badge ? (
                <Badge badgeContent={badge} color="error">
                    {icon}
                </Badge>
            ) : (
                <IconButton>{icon}</IconButton>
            )}
        </Tooltip>
    )
}