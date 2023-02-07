import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Login} from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Welcome} from "./components/Welcome";
import {Logout} from "./components/Logout";
import {Error} from "./components/Error";
import { SignUp } from './components/SignUp';
import {AuthContextProvider} from "./components/security/AuthContextProvider";
import {AuthenticatedRoute} from "./components/security/AuthenticatedRoute";

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
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
                        <AuthenticatedRoute> <Logout /> </AuthenticatedRoute>
                    } />
                    <Route path='/welcome' element={
                        <AuthenticatedRoute> <Welcome /> </AuthenticatedRoute>
                    } />
                    <Route path='*' element={
                        <Error />
                    } />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    </div>
  );
}

export default App;
