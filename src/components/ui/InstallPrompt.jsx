import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const isDismissed = sessionStorage.getItem('pwa-prompt-dismissed');
      if (!isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="install-prompt"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="install-prompt__content">
            <div className="install-prompt__icon-wrapper">
              <img src="/pwa-icon.jpg" alt="App Icon" className="install-prompt__img" />
            </div>
            <div className="install-prompt__text">
              <h4 className="install-prompt__title">Install App</h4>
              <p className="install-prompt__desc">Add to Home Screen for offline access.</p>
            </div>
          </div>
          <div className="install-prompt__actions">
            <button onClick={handleInstall} className="install-prompt__btn install-prompt__btn--primary">
              <FaDownload /> Install
            </button>
            <button onClick={handleDismiss} className="install-prompt__close" aria-label="Dismiss">
              <IoClose />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
