import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/firestore';

import SliderBody from './SliderBody';
import SliderHead from './SliderHead';
import SliderItem from './SliderItem';

function Slider() {
    const [data, setData] = useState([]);

    const getData = async () => {
        let q = query(collection(db, 'dresses_Jumpsuits'), where('status', '==', 'low in stock'));
        const querySnapshot = await getDocs(q);

        const dataResult = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(dataResult);
        setData(dataResult);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="m-[16px] overflow-hidden rounded-[8px] border border-[#ccc]">
            <SliderHead />
            <SliderBody>
                {data.map((product, idx) => (
                    <SliderItem data={product} key={idx} />
                ))}
            </SliderBody>
        </div>
    );
}

export default Slider;
