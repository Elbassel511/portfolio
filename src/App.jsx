import classes from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Background from './UI/Background/Background';

function App() {

  return (
    <>
      <div className={classes.background} >
        <Background />
      </div>
      <div className={classes.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
