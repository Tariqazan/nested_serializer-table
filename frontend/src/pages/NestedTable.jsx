import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const rows = [
    {
        category: 'Category 1',
        subCategories: [
            {
                id: 1,
                name: 'Subcategory 1-1',
                subSubCategories: [
                    {
                        subCategoryId: 1,
                        name: 'Subsubcategory 1-1-1'
                    },
                    {
                        subCategoryId: 1,
                        name: 'Subsubcategory 1-1-2'
                    },
                    {
                        subCategoryId: 1,
                        name: 'Subsubcategory 1-1-3'
                    },
                ],
            },
            {
                id: 2,
                name: 'Subcategory 1-2',
                subSubCategories: [
                    {
                        subCategoryId: 2,
                        name: 'Subsubcategory 1-2-1'
                    },
                    {
                        subCategoryId: 2,
                        name: 'Subsubcategory 1-2-2'
                    }
                ],
            },
        ],
    },
    {
        category: 'Category 2',
        subCategories: [
            {
                id: 3,
                name: 'Subcategory 2-1',
                subSubCategories: [
                    {
                        subCategoryId: 3,
                        name: 'Subsubcategory 2-1-1'
                    },
                    {
                        subCategoryId: 3,
                        name: 'Subsubcategory 2-1-2'
                    }
                ]
            },
            {
                id: 4,
                name: 'Subcategory 2-2',
                subSubCategories: [
                    {
                        subCategoryId: 4,
                        name: 'Subsubcategory 2-2-1'
                    },
                    {
                        subCategoryId: 4,
                        name: 'Subsubcategory 2-2-2'
                    },
                    {
                        subCategoryId: 4,
                        name: 'Subsubcategory 2-2-3'
                    }
                ],
            },
        ],
    },
];

export default function NestedTable() {
    return (
        <Container maxWidth="lg">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Category</StyledTableCell>
                            <StyledTableCell align="left">Sub Category</StyledTableCell>
                            <StyledTableCell align="left">Sub SubCategory</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row" style={{ borderRight: '1px solid #000000de' }}>
                                    {row.category}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.subCategories.map((subCategory) => (
                                        <>
                                            <Box display={'flex'} justifyContent={'space-between'}>
                                                <p>{subCategory.name}</p>
                                                <Box style={{ borderRight: '1px solid #000000de' }}></Box>
                                                <Box display={'flex'} flexDirection={'column'}>
                                                    {
                                                        subCategory.subSubCategories.map((subSubCategory) => (
                                                            <>
                                                                {subCategory.id === subSubCategory.subCategoryId ?
                                                                    <p>{subSubCategory.name}</p> :
                                                                    <></>}
                                                            </>
                                                        ))
                                                    }
                                                </Box>
                                            </Box>
                                            <Divider />
                                        </>
                                    ))}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row"></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}