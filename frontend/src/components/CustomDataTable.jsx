import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import CustomModal from './CustomModal';


const FeatureModal = ({ value }) => {
    return (
        <CustomModal title={'Features'} values={value.subcategories} />
    );
};

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    {
        field: 'category_features',
        headerName: 'Category Features',
        description: 'This column has modals which open up category features.',
        sortable: false,
        width: 160,
        renderCell: (params) => <FeatureModal value={params.row} />,
    },
];

export default function CustomDataTable(props) {
    return (
        <Container>
            <DataGrid
                rows={props.data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </Container>
    );
}