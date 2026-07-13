export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__container">
          <span className="footer__logo">Ashfatul</span>
          <span className="footer__tagline">Built with React</span>
          <span className="footer__copy">
            &copy; {new Date().getFullYear()} Ashfatul Islam
          </span>
        </div>
      </div>
    </footer>
  );
}
