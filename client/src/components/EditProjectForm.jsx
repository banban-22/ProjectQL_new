import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import { UPDATE_PROJECT } from '../queries/projectQueries';

const EditProjectForm = ({ project }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(() => {
    switch (project.status) {
      case 'Not Started':
        return 'new';
      case 'In Progress':
        return 'progress';
      case 'Completed':
        return 'completed';
      default:
        throw new Error(`Unknown status: ${project.status}`);
    }
  });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert('Please fill out all fields');
    }

    updateProject(name, description, status);
  };

  const handleFormOpen = () => {
    setIsFormOpen(() => !isFormOpen);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
    setIsFormOpen(false);
  };

  return (
    <div>
      <button
        className="rounded-xl bg-orange-200 py-3 px-5 shadow-xl"
        onClick={() => handleFormOpen()}
      >
        UpdateProject
      </button>

      {isFormOpen && (
        <div className="flex flex-col items-center justify-center gap-5 mt-5 rounded-lg w-full mx-auto p-x-5">
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
            <button
              type="submit"
              className="py-3 px-5 border border-orange-400 rounded-xl shadow-xl hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default EditProjectForm;
