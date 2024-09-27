import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Course from './Courses/Course';
import Contact from './Contact/Contact';
import Login from './Components/Login';

import PrivateRoute from './Components/PrivateRoute'; 

const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course'
          element={ <PrivateRoute> <Course /> </PrivateRoute> }/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
