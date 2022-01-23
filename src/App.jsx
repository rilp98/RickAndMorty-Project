import React,{ useState,useEffect} from 'react';

import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { useFetch } from './hooks/useFetch';

import githubIcon from './assets/icons/github.svg';
import linkedInIcon from './assets/icons/linkedIn.svg';
import twitterIcon from './assets/icons/twitter.svg';



const ICONS_FOOTER=[
  {name:'Github',icon:githubIcon, link:'https://github.com/rilp98'},
  {name:'LinkedIn',icon:linkedInIcon, link:'https://www.linkedin.com/in/paola-anttonela-rossi-querales/'},
  {name:'Twitter',icon:twitterIcon, link:'https://twitter.com/Paola94331726'}
]


function App() {
  
  const [data,setData] = useState(' ');
  const [darkMode,setDarkMode] = useState(false);
  
  const handleData = (e) =>{
    setData(e.target.value);
  }
  
  const {item,fetchData}=useFetch(data);

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetchData();
    setData('');
  }

  useEffect( ()=>{
      fetchData(data);
   },[]);

  const handleDarkMode = ()=>{
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  }
  
  const mode= darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <div className='min-h-screen flex flex-col justify-between items-center text-gray-800 dark:bg-slate-900 appContainer'>

      <h1  className='my-12 text-4xl font-semibold dark:text-indigo-200' >Rick and Morty Search App</h1>
      
      <main className='min-w-full flex justify-center items-center'>

      <input placeholder='Search a character' type='text' onChange={handleData} value={data}  
      className='w-2/6 h-10 bg-indigo-200  placeholder-slate-600 rounded-l-lg px-5 pr-10 
      text-sm font-semibold  focus: outline-none dark:bg-gray-700 dark:opacity-50 dark:text-indigo-100 
      dark:placeholder-slate-400'/>

      <button onClick={handleSubmit} className='bg-indigo-600 text-indigo-100 w-14 h-10 
      rounded-r-lg hover:bg-indigo-700 '> Add </button>
      
      <button onClick={handleDarkMode} className=' w-24 h-10 ml-4 rounded-lg font-semibold
      outline outline-offset-2 outline-indigo-900 text-indigo-900 hover:translate-y-0.5 transfrom transition
      dark:outline-indigo-200 dark:text-indigo-200'>{mode}</button>
    
      </main>

     <section className='mt-12 grid grid-cols-5 gap-8 pb-12 gridContainer'>

      {item.map( (i)=>{
        return <Cards key={i.id} image={i.image} name={i.name} alt='imagen'/> 
      } )}
      
      </section>


    <footer className='w-full h-36 flex justify-center items-center bg-indigo-400 ' >

    {ICONS_FOOTER.map((iconFooter)=>{
      return <Footer key={iconFooter.name} name={iconFooter.name} icon={iconFooter.icon} link={iconFooter.link} />
    })}

    </footer>

    </div>
  )
}

export default App;
