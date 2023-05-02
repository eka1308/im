
import './App.css';
import { Outlet } from "react-router-dom";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header"
 
function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
  </>
  )
}

export default App;
