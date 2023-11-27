import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModel from '../components/AddClientModel';
import AddProjectModel from '../components/AddProjectModel';

const Home = () => {
  return (
    <>
      <div className="flex gap-5 text-center items-center justify-center mb-10">
        <AddClientModel />
        <AddProjectModel />
      </div>
      <Projects />
      <Clients />
    </>
  );
};
export default Home;
