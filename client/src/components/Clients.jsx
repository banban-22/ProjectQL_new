import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';
import Spinner from './Spinner';
import ClientRow from './ClientRow';

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  const clients = data?.clients || [];

  return (
    <div>
      {!loading && !error && (
        <table className="table-auto w-[90%] items-center justify-center mt-5 mx-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">
                <div className="items-center flex gap-2 justify-center">
                  <FaIdBadge />
                  Name
                </div>
              </th>
              <th className="border px-4 py-2">
                <div className="items-center flex gap-2 justify-center">
                  <FaEnvelope />
                  Email
                </div>
              </th>
              <th className="border px-4 py-2">
                <div className="items-center flex gap-2 justify-center">
                  <FaPhone />
                  Phone Number
                </div>
              </th>
              <th className="border px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Clients;
