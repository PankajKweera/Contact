import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AddBook from './pages/AddContact';
import './index.css';
import EditBook from './pages/Edit';
import Book from './pages/Contact';
import AddContact from './pages/AddContact';
import Contact from './pages/Contact';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>      
        <Routes>
          <Route element={<HomePage />} path="/" exact />                    
        <Route element={<AddContact />} path="/addcontact" />
          <Route element={<Edit />} path="/edit/:id" />
          <Route element={<Contact/>} path='/contact'/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

