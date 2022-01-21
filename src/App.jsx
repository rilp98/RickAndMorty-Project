import React,{ useState,useEffect} from 'react';

import Cards from './Cards';

function App() {
  const [item, setItem] = useState([]);
  const [data,setData] = useState('rick');
  const [darkMode,setDarkMode] = useState(false);
  
  const handleData = (e) =>{
  setData(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetchData();
    setData('');
  }

  const handleDarkMode = ()=>{
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  }
  
  const mode= darkMode ? 'Light Mode' : 'Dark Mode';

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
    <div className='min-h-screen flex flex-col justify-between items-center text-gray-800 dark:bg-slate-900'>

      <h1  className='mt-10 text-4xl font-semibold dark:text-indigo-200' >Rick and Morty Search App</h1>
      
      <main >

      <input placeholder='Search a character' type='text' onChange={handleData} value={data}  
      className='w-96 h-10 bg-indigo-200 mt-12 placeholder-slate-600 rounded-l-lg px-5 pr-10 
      text-sm font-semibold  focus: outline-none dark:bg-gray-700 dark:opacity-50 dark:text-indigo-100 '/>

      <button onClick={handleSubmit} className='bg-indigo-600 text-indigo-100 w-14 h-10 
      rounded-r-lg hover:bg-indigo-700 '> Add </button>
      
      <button onClick={handleDarkMode} className=' w-24 h-10 ml-4 rounded-lg font-semibold
      outline outline-offset-2 outline-indigo-900 text-indigo-900 hover:translate-y-0.5 transfrom transition
      dark:outline-indigo-200 dark:text-indigo-200'>{mode}</button>
    
      </main>

     <div className='mt-12 grid grid-cols-5 gap-8 pb-12'>

      {item.map( (i)=>{
        return <Cards key={i.id} image={i.image} name={i.name} alt='imagen'/> 
      } )}
      
      </div>


    <footer className='w-full h-800px bg-indigo-600' >

    <p>Footer</p>
    
    </footer>

    </div>
  )
}

export default App;
