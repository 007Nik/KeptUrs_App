import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Signup from './Components/SignUp/signup';
import Categories from './Components/Categories/categories';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="*" element={<Login />} />
 </Routes>
  )
}

export default App;
