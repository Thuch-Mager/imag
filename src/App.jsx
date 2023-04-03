import {Routes, Route} from 'react-router-dom'
import Appbar from './components/Appbar';
import Account from './pages/Account';
import Categories from './pages/Categories';
import HomePage from './pages/home-page';
import Products from './pages/Products';


function App() {

  return (
    <div className=''>
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