import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Topbar from './components/Topbar/Topbar';


function App() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener to track window resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="main">
      {width >= 992 && <Sidebar/>}
      <div className="container">
        {width < 992 && <Topbar/>}
        <Home/>
        <About/>
        <Portfolio/>
        <Resume/>
        <News/>
        <Contact/>

      </div>
    </div>
    </>
  )
}

export default App
