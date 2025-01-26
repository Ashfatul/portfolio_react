import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {

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

export default Layout
