import './App.css'
import AddBook from './Components/AddBooks/addBooks';
import Home from './Components/Display/display';
import ManageBooks from './Components/ManageBooks/manageBooks';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ManageBookId from './Components/ManageBookId/manageBookId';

function App() {
  return(
    <div className='App'>
        <h1>React.js routing</h1>
        <BrowserRouter>
          <button><Link to="/home" style={{textDecoration:"none"}}>Home</Link></button>
          <button><Link to="/add-books" style={{textDecoration:"none"}}>Add Books</Link></button>
          <button><Link to="/manage-books" style={{textDecoration:"none"}}>Manage Books</Link></button>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/add-books' element={<AddBook />}></Route>
            <Route path='/manage-books' element={<ManageBooks />}></Route>
            <Route path='/manage-books/:bookId' element={<ManageBookId />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
