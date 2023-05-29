import './index.css';
import { Outlet } from "react-router-dom";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        theme="dark"
        limit={3}
      />
  </>
  )
}

export default App;
