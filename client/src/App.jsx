import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Signup} from "./pages/Signup.jsx";
import {Login} from "./pages/Login.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={'/signup'} element={<Signup />}></Route>
              <Route path={'/login'} element={<Login />}></Route>
              <Route path={'/dashboard'} element={<Dashboard />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
