import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../configs/firestore';
import { useEffect, useState } from 'react';

function useFetch({
    collectionTitle = '',
    dataCategory = '',
    itemCategory = '',
    collectionField = 'categoryName',
    currentPage,
}) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);

    const getData = async () => {
        let q;
        itemCategory !== ''
            ? (q = query(collection(db, dataCategory), where(collectionField, '==', itemCategory)))
            : (q = collection(db, dataCategory));
        const querySnapshot = await getDocs(q);

        console.log(querySnapshot.docs);
        const dataResult = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setResult(dataResult);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, [currentPage]);

    return [result, loading];
}

export default useFetch;
