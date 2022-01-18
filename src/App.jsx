import { useState,useEffect} from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState([]);
  const [data,setData] = useState('Yaarb');
  
  const handleData = (e) =>{
  setData(e.target.value);
   console.log(data);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetchData();
    setData('');
  }

  const fetchData = ()=>{
    fetch(`https://rickandmortyapi.com/api/character/?name=${data}`)
    .then(resp =>resp.json())
    .then((resp)=>{
      setItem(resp.results);
     })
  }

  useEffect( ()=>{
      
      fetchData();
       console.log(item);

   },[]);
  
  
  return (
    <div >

      <div>

      <input placeholder="search" type="text" onChange={handleData} value={data} />
      <button onClick={handleSubmit} >Add</button>

      </div>

     {item.map( (i)=>{
       return <img key={i.id} src={i.image} alt="imagen" />
     } )}
    </div>
  )
}

export default App;
