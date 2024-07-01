'use client'
//Material UI
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';

const LightMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: '10px !important',
    borderRadius: 15,
    minWidth: 100,
    maxHeight: 300,
    color: '#0C1B2A',
    background: '#fff',
    padding: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 10px 15px',
    '& .MuiMenu-list': {
      padding: '0px',

    },
    '& .MuiMenuItem-root': {
        borderRadius: '10px',
        fontSize: 14,
        padding: '20px 16px',
        '& .MuiSvgIcon-root': {
            fontSize: 12,
            marginRight: theme.spacing(1.1),
        },
        '&:hover': {
            backgroundColor: '#f2f6f9',
        },
    },
  },
}));

export const MenuWrapper = (props: MenuProps) => {
  const MenuComponent = LightMenu;
  
  return <MenuComponent {...props} />;
};