import { FaLock, FaCheckCircle, FaUserPlus, FaMoneyCheckAlt } from "react-icons/fa";

const notifications = [
  {
    icon: <FaCheckCircle className="text-green-500 text-2xl" />,
    title: "Arquivo enviado",
    description: "Seu arquivo foi enviado com sucesso.",
    time: "1 dia",
    color: "bg-black-50"
  },
  {
    icon: <FaLock className="text-orange-400 text-2xl" />,
    title: "Senha redefinida",
    description: "Sua senha foi redefinida com sucesso.",
    time: "2 dias",
    color: "bg-black-50"
  },
  {
    icon: <FaUserPlus className="text-blue-500 text-2xl" />,
    title: "Novo usuário",
    description: "Um novo usuário foi cadastrado.",
    time: "3 dias",
    color: "bg-blue-50"
  },
  {
    icon: <FaMoneyCheckAlt className="text-indigo-500 text-2xl" />,
    title: "Pagamento realizado",
    description: "Pagamento do mês confirmado.",
    time: "4 dias",
    color: "bg-indigo-50"
  },
];

export default function NotificationList() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <div className="rounded-t-xl bg-blue-100 px-4 py-3 font-semibold text-lg text-center text-blue-900">
        Notificações
      </div>
      <ul className="divide-y divide-gray-200 bg-white rounded-b-xl shadow">
        {notifications.map((n, idx) => (
          <li key={idx} className={`flex items-center gap-4 px-6 py-5 ${n.color}`}>
            <div>{n.icon}</div>
            <div className="flex-1">
              <div className="font-medium text-gray-800">{n.title}</div>
              <div className="text-gray-500 text-sm">{n.description}</div>
            </div>
            <div className="text-xs text-gray-400 whitespace-nowrap">{n.time}</div>
          </li>
        ))}
      </ul>
      <div className="text-center py-3 bg-blue-100 rounded-b-xl cursor-pointer text-blue-700 font-medium hover:underline">
        Ver todas
      </div>
    </div>
  );
} 