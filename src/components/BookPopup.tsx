import { FC } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IBook } from '../interfaces/book.interface'


interface BookPopupProps {
    book: IBook
    handleClose: () => void
    open: boolean
}

const BookPopup: FC<BookPopupProps> = ({ book, handleClose, open }) => {
    const theme = useTheme()
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{
                m: 0,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }}>
                {book.title}
                <Button
                    autoFocus
                    onClick={handleClose}
                    sx={{
                        color: theme.palette.primary.contrastText,
                    }}
                >
                    Close
                </Button>
            </DialogTitle>
            <DialogContent
                dividers
                sx={{
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.main
                }} >
                <img
                    style={{
                        margin: '10px auto',
                        display: 'block',
                        maxWidth: '100%',
                    }}
                    src={book.image_url}
                    alt={book.title} />
                <Typography gutterBottom>
                    {book.description}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default BookPopup;
