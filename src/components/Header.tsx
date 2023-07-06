import { FC, useContext } from 'react'
import { Typography, Container, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../contexts/ThemeContext';
import logo from '../images/bookshelf-log.svg';

interface HeaderProps {
    toggleColorMode: () => void
}

const Header: FC<HeaderProps> = ({ toggleColorMode }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <Container
            maxWidth='md'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={logo} alt="logo " />
            <Typography
                variant='h3'
                align='center'
                sx={{
                    fontSize: {
                        sm: 32,
                        md: 48
                    },
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}
            >
                Seamlessly manage your book collection online
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                {themeContext === 'light' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
        </Container>
    )
}

export default Header