import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FaUser } from 'react-icons/fa';
import { ADD_CLIENT, GET_CLIENTS } from '../queries/clientQueries';

const AddClientModel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const handleFormOpen = () => {
    setIsFormOpen(() => !isFormOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      return alert('Please fill out all fields');
    }

    addClient(name, email, phone);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
      <button
        className="flex items-center gap-3 bg-orange-100 px-5 py-2 rounded-xl mt-5"
        onClick={() => handleFormOpen()}
      >
        <FaUser />
        <div>Add Client</div>
      </button>

      {isFormOpen && (
        <div className="flex justify-center items-center text-center bg-orange-50 rounded-lg px-10 py-5 w-1/2 mx-auto">
          {/* Input Name */}
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="pr-5">
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
            <div className="mb-3">
              <label htmlFor="" className="pr-6">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Input Phone */}
            <div className="mb-3">
              <label htmlFor="" className="pr-5">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                className="border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-300"
                onChange={(e) => setPhone(e.target.value)}
              />
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
export default AddClientModel;
