import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FaList } from 'react-icons/fa';
import Spinner from '../components/Spinner';
import { GET_PROJECTS, ADD_PROJECT } from '../queries/projectQueries';
import { GET_CLIENTS } from '../queries/clientQueries';

const AddProductModel = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('new');
  const [clientId, setClientId] = useState('');

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const handleFormOpen = () => {
    setIsFormOpen(() => !isFormOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || status === '') {
      return alert('Please fill out all fields');
    }

    addProject(name, description, status, clientId);

    setName('');
    setDescription('');
    setStatus('');
    setClientId('');
  };

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <button
        className="flex items-center gap-3 bg-orange-100 px-5 py-2 rounded-xl mt-5"
        onClick={() => handleFormOpen()}
      >
        <FaList />
        <div>Add Project</div>
      </button>

      {isFormOpen && (
        <div className="flex justify-center items-center text-center bg-orange-50 rounded-lg px-10 py-5 w-1/2 mx-auto">
          {/* Input Name */}
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="pr-14">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                className="border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-300"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Input Email */}
            <div className="mb-3 flex items-center">
              <label
                htmlFor=""
                className="pr-6 items-center align-center h-auto"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                value={description}
                className="border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-300"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Input Phone */}
            <div className="mb-3 flex items-center">
              <label htmlFor="" className="pr-5 mr-10">
                Status
              </label>
              <select
                className="border-2 border-gray-200 p-3 outline-none rounded-xl"
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="new">Not Started</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mb-3 flex items-center">
              <label htmlFor="" className="pr-5 mr-10">
                Client
              </label>
              <select
                className="border-2 border-gray-200 p-3 outline-none rounded-xl"
                name="clientId"
                id="clientId"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              >
                <option value="">Select a Client</option>
                {data.clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="py-3 px-5 border border-orange-400 rounded-xl shadow-xl hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default AddProductModel;
