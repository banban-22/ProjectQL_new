const ProjectCard = ({ project }) => {
  const { name, status, id } = project;

  return (
    <div className="p-3 rounded-lg bg-white shadow-xl">
      <div className="flex justify-between items-end">
        <h1 className="text-xl font-bold">{name}</h1>
        <a
          href={`/projects/${id}`}
          className="cursor-pointer hover:text-orange-500 hover:translate-y-1 hover:translate-x-1"
        >
          View More
        </a>
      </div>
      <p className="text-sm">Status: {status}</p>
    </div>
  );
};
export default ProjectCard;
