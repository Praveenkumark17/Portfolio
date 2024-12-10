import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener('load', () => { sessionStorage.clear(); });
    // Save the current scroll position
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition-' + pathname, window.scrollY);
    };

    // Restore the scroll position
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition-' + pathname);
      if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      } else {
        window.scrollTo(0, 0); // Scroll to top if no saved position
      }
    };

    restoreScrollPosition();

    // Save the scroll position when the component unmounts
    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      // Ensure we save the scroll position when the route changes
      saveScrollPosition();
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;

