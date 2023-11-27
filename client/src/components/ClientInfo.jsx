import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

const ClientInfo = ({ client }) => {
  return (
    <div className="flex flex-col items-start border p-5 rounded-xl">
      <h5 className="font-bold flex items-center gap-5">
        <FaIdBadge />
        {client.name}
      </h5>
      <p className="flex items-center gap-5">
        <FaEnvelope />
        {client.email}
      </p>
      <p className="flex items-center gap-5">
        <FaPhone />
        {client.phone}
      </p>
    </div>
  );
};
export default ClientInfo;
