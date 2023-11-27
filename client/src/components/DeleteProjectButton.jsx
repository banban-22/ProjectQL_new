import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { DELETE_PROJECT } from '../queries/projectQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="absolute bottom-5 right-5 gap-5 items-end justify-end text-center">
      <button
        onClick={deleteProject}
        className="flex items-center gap-3 px-5 py-3 bg-red-400 rounded-xl"
      >
        <FaTrash />
        Delete Project
      </button>
    </div>
  );
};
export default DeleteProjectButton;
