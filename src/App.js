import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Movielist from './components/Movielist';
import { Route, Routes } from 'react-router-dom';
import Moviedetails from './components/Moviedetails';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Movielist/>}/>
      <Route path='/details/:id' element={<Moviedetails/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
