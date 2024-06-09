import React, { useState, useEffect } from 'react';

const ViewportDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Viewport Width: {width}px</p>
      <p>Viewport Height: {height}px</p>
    </div>
  );
};

export default ViewportDimensions;
