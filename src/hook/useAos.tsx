import AOS from 'aos';
import React from 'react';

import 'aos/dist/aos.css';

export const useAOS = (options?: AOS.AosOptions) => {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
      // easing: 'ease-in-out',
      once: false,
      ...options,
    });

    return () => {
      AOS.refresh();
    };
  }, [options]);
};
