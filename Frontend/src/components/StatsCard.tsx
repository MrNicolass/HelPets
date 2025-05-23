// src/components/StatsCard.tsx
type StatsCardProps = {
  label: string;
  value: number | string;
};

export default function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-stroke-700 rounded-2xl shadow p-4">
      <h4 className="text-gray-500 text-sm">{label}</h4>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
