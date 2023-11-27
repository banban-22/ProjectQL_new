import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-auto h-screen text-center items-center justify-center mt-20">
      <div className="flex items-center text-center gap-3 justify-center w-auto">
        <FaExclamationTriangle
          style={{ alignItems: 'center', textAlign: 'center', width: 'auto' }}
          size="7rem"
        />{' '}
        <h1 className="text-9xl">404</h1>
      </div>
      <p className="text-5xl mb-5">Sorry, there is nothing here :(</p>
      <Link to="/" className="cursor underline mt-5">
        Go Back to Home
      </Link>
    </div>
  );
};
export default NotFound;
