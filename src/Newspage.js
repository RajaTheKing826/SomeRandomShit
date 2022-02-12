import React,{useState,useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Newspage = () => {
    const [data,setData] = useState([]);

    const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos/?=5');
            setData(await res.json());
    }
    useEffect(() => {
        fetchData();
    },[])
    return(
        <div className='d-flex flex-row '>
                {data.map((curelem) => {
                    return(
                        <div key={curelem.id} className="cardinnerdiv ">
                            <button className='carddiv'>✖️</button>
                            <h1 className='card-heading'>{curelem.title}</h1>
                            <p className='card-para2'>this is your news feed </p>
                            <p className='card-para2'> mon 21 2022 GST </p>
                            <img className="card-image" src = "" />
                        </div>   
                    )
                })}
        </div>   
    )
}

export default Newspage;