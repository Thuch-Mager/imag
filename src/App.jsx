import {Routes, Route} from 'react-router-dom'
import Appbar from './components/Appbar';
import { useGlobalContext } from './contexts/GlobalContextProvider';
import Account from './pages/Account';
import Categories from './pages/Categories';
import Login from './pages/forms/Login';
import Signup from './pages/forms/Signup';
import HomePage from './pages/home-page';
import Products from './pages/Products';


function App() {

  const { openModal, setOpenModal } = useGlobalContext()

  
  return (
    <div className=''>
      {openModal === 'login' && <Login setOpenModal={setOpenModal} />}
      {openModal === 'signup' && <Signup setOpenModal={setOpenModal} />}
      <Appbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </div>
  );
}


export default App;