import { useState } from 'react';

export const useFetch = (name='')=>{
    const [item, setItem] = useState([]);
    const fetchData = ()=>{
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .then(resp =>resp.json())
            .then((resp)=>{
                setItem(resp.results);
            });
    };

    return{
        item,
        fetchData
    };
};