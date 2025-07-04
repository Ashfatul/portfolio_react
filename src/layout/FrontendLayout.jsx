import { Outlet } from "react-router-dom"
import Header from "../frontend/Header"
import Footer from "../frontend/Footer"
import ThemeSettings from "../frontend/ThemeSettings"

function FrontendLayout() {

  return (
    <>
      <Header />
      <div className={`main container ${window.location.pathname === '/' ? 'home' : ''}`}>
        <Outlet />
      </div>
      <ThemeSettings />
      <Footer />
    </>
  )
}

export default FrontendLayout
