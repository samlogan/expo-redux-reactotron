import React, { useState, useEffect } from 'react';

export const useViewWidth = (listenToVw = true) => {
  const [vw, setVw] = useState(0);

  const getViewportWidth = () => {
    const newVw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setVw(newVw);
  };

  useEffect(() => {
    if (listenToVw) {
      getViewportWidth();
      window.addEventListener('resize', getViewportWidth);
    }
    return () => {
      if (listenToVw) window.removeEventListener('resize', getViewportWidth);
    };
  }, []);

  return vw;
};
