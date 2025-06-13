import PageTitle from "@/components/PageTitle";
import NotificationList from "@/components/NotificationList";

export default function NotificacoesPage() {
  return (
    <div className="px-4 py-8">
      <PageTitle title="Notificações" />
      <div className="max-w-6xl mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Olá, User!</h2>
        <NotificationList />
      </div>
    </div>
  );
}
