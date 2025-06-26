import {useState} from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import AppContext from './AppContext';

const App = () =>{
  const [darkTheme, setTheme] = useState(true)

  const toggleTheme = () => setTheme(pre => !pre)
  return(
    <AppContext.Provider value={{darkTheme, toggleTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
)
}

export default App;
