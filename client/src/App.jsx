import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Signup} from "./pages/Signup.jsx";
import {Login} from "./pages/Login.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";
import {Navbar} from "./components/features/Navbar.jsx";
import {Home} from "./pages/Home.jsx";
import {PayWindow} from "./pages/PayWindow.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/home'} element={<Home />} />
              <Route path={'/signup'} element={<Signup />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/dashboard'} element={<Dashboard />} />
              <Route path={'/transfer'} element={<PayWindow />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
