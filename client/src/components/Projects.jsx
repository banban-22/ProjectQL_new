import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import Spinner from '../components/Spinner';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex justify-center items-center text-center gap-10 mx-5">
      {data.projects.length > 0 ? (
        <div className="grid grid-cols-3 gap-5 w-full">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </div>
  );
};
export default Projects;
