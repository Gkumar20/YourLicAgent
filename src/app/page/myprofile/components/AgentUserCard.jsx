

const agentuserUserCard = (props) => {
  const { agentuser } = props;
  return(

  <div className="bg-blue-50 rounded-xl shadow-md px-4 py-5 mb-6 flex flex-col gap-2 animate-fade-in-down">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-2xl">🧑‍💼</span>
      <span className="text-lg font-bold text-blue-700">{agentuser.name}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <span>📞</span>
      <span>{agentuser.contact}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <span>📧</span>
      <span>{agentuser.email}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <span>🏢</span>
      <span>{agentuser.branch}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <span>🆔</span>
      <span>agentuser Code: {agentuser.code}</span>
    </div>
  </div>
)};

export default agentuserUserCard;