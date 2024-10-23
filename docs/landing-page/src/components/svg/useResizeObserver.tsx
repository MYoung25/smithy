import React, { useState, useEffect } from "react";

export const useResizeObserver = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      }
    });

    if (document) {
      observer.observe(document.body);
    }

    return () => {
      if (document) {
        observer.unobserve(document.body);
      }
    };
  }, [document]);

  return size;
};
