import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [isPC, setPC] = useState(null);

  useEffect(() => {
    const handleScreenWidth = () => {
      if (document.body.clientWidth >= 768) {
        setPC(true);
      } else {
        setPC(false);
      }
    };

    handleScreenWidth();

    window.addEventListener('resize', handleScreenWidth);

    return () => {
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, []);

  return isPC;
};

export default useScreenWidth;
