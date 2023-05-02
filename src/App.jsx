import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/zinch/Login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
