import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryList } from '../redux/slices/category/Service';
import CustomDataTable from '../components/CustomDataTable'

const Category = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.categoryList);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchCategoryList());
        };

        fetchData();

        return () => {
            console.log('Cleanup logic executed');
        };
    }, [dispatch]);

    return (
        <>
            <CustomDataTable data={categoryList.data} />
        </>
    )
}

export default Category