import "./assets/scss/footer.scss"

function Footer() {

    return (
      <footer>
        <div className="container">
          <div className="footerTop">

          </div>
          <div className="footerBottom text-center">
            Copyright &copy; Ashfatul | {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  