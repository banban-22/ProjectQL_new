import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FaProjectDiagram } from 'react-icons/fa';

import { GET_PROJECT } from '../queries/projectQueries';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {!loading && !error && (
        <>
          <div className="pt-10 px-10">
            <Link
              to="/"
              className="underline hover:font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              &laquo; Back
            </Link>
          </div>
          <div className="flex flex-col gap-5 text-center items-start justify-center w-1/2 mx-auto mt-10 shadow-xl rounded-lg p-10 bg-white relative">
            <div className="rounded-full bg-slate-300 p-5">
              <FaProjectDiagram
                size="5rem"
                style={{ background: 'center', paddingTop: '0.8rem' }}
              />
            </div>

            <h1 className="text-4xl font-bold">{data.project.name}</h1>
            <p className="text-xl text-slate-500 text-start">
              {data.project.description}
            </p>
            <p className="text-sm text-slate-600">
              Project Status:{' '}
              <span className="font-bold">{data.project.status}</span>
            </p>
            <EditProjectForm project={data.project} />
            <ClientInfo client={data.project.client} />
            <DeleteProjectButton projectId={data.project.id} />
          </div>
        </>
      )}
    </>
  );
};
export default Project;
