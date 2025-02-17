import { Outlet } from "react-router-dom"
import Header from "../frontend/Header"
import Footer from "../frontend/Footer"

function FrontendLayout() {

  return (
    <>
      <Header />
      <div className={`main container ${window.location.pathname === '/' ? 'home' : ''}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default FrontendLayout
