import { FC, useState } from 'react'
import { Box, Rating } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { IBook } from '../interfaces/book.interface';
import BookPopup from './BookPopup';

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 200, cellClassName: 'title' },
    { field: 'authors', headerName: 'Author', width: 100 },
    { field: 'genres', headerName: 'Genre', width: 150 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 500, cellClassName: 'description' },
    {
        field: 'image_url',
        headerName: 'Image',
        width: 80,
        renderCell: (params) => (
            <img
                src={params.row.image_url}
                alt={params.row.title}
                style={{ width: 60 }}
            />
        ),
        sortable: false,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        width: 140,
        renderCell: (params) => (
            <Rating name="read-only" value={params.row.rating} readOnly />
        ),
    },
];

interface SpreadsheetProps {
    booksData: IBook[]
}
const Spreadsheet: FC<SpreadsheetProps> = ({ booksData }) => {
    const theme = useTheme()
    console.log(theme)
    const [openBook, setOpenBook] = useState<IBook | null>(null);

    const handleClickOpen = (book: IBook) => {
        setOpenBook(book);
    };
    const handleClose = () => {
        setOpenBook(null);
    };
    return (
        <Box
            sx={{
                height: 'calc(100vh - 215px)',
                width: '100%',
                '& .title': {
                    fontWeight: 700,
                    fontSize: 16
                },
                '& .description': {
                    fontSize: 12
                },
                '& .MuiToolbar-root': {
                    color: theme.palette.primary.contrastText
                }
            }} >
            <DataGrid
                columns={columns}
                rows={booksData}
                getRowId={(row) => row.id}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 25, 50]}
                getEstimatedRowHeight={() => 100}
                getRowHeight={() => 'auto'}
                onCellClick={(params) => {
                    handleClickOpen(params.row)
                }}
                sx={{
                    color: 'inherit'
                }}
            />
            {openBook && (
            <BookPopup
                book={openBook}
                open={!!openBook}
                handleClose={handleClose}
            />
            )}
        </Box>
    )
}

export default Spreadsheet