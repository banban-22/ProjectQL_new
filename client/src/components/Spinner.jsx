import { useEffect, useState } from 'react';

const Spinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      //   setIsLoading(false);
    };
  }, []);

  return (
    <div className="w-full h-screen items-center text-center">
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
export default Spinner;
