import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Login} from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Welcome} from "./components/Welcome";
import {Logout} from "./components/Logout";
import {Error} from "./components/Error";
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Login />
                } />
                <Route path='/login' element={
                    <Login />
                } />
                <Route path='/register' element={
                    <SignUp />
                } />
                <Route path='/logout' element={
                    <Logout />
                } />
                <Route path='/welcome' element={
                    <Welcome />
                } />
                <Route path='*' element={
                    <Error />
                } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
