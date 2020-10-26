import React, { useState, useEffect } from 'react';

export const useQueryLoading = loading => {
  const [isLoading, setIsLoading] = useState(loading);
  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);
  return isLoading;
};
