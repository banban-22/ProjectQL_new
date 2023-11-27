import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { GET_CLIENTS } from '../queries/clientQueries';
import { DELETE_CLIENT } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueies: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <tr>
      <td className="border px-4 py-2 text-center">{client.name}</td>
      <td className="border px-4 py-2 text-center">{client.email}</td>
      <td className="border px-4 py-2 text-center">{client.phone}</td>
      <td className="border px-4 py-2 text-center">
        <button onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};
export default ClientRow;
