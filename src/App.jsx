import { useState,useEffect} from 'react';

function App() {
  const [item, setItem] = useState([]);
  const [data,setData] = useState('rick');
  
  const handleData = (e) =>{
  setData(e.target.value);
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
   },[]);
  
  
  return (
    <div className='h-screen  flex flex-col items-center'>

      <h1  className='mt-10 text-3xl' >Rick and Morty Search App</h1>

      <div>

      <input placeholder='Search' type='text' onChange={handleData} value={data}  
      className='w-96 h-10 bg-indigo-100 rounded-l-lg  px-5 pr-10 text-sm my-12 focus:outline-none' />

      <button onClick={handleSubmit} className='bg-[#5554d4] w-12 h-10 rounded-r-lg' >Add</button>

      </div>
    
    <div className='grid grid-cols-6 gap-6 pb-12'>

     {item.map( (i)=>{
       return <img key={i.id} src={i.image} alt="imagen" className='w-40 h-40 rounded-lg' />
     } )}
    
    </div>

    </div>
  )
}

export default App;
