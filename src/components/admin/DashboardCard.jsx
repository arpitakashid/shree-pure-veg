export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-[#161616] border border-yellow-500/20 rounded-2xl p-6 shadow-lg">

      <h3 className="text-gray-400 text-lg">
        {title}
      </h3>

      <p className="text-5xl font-bold text-yellow-400 mt-4">
        {value}
      </p>

    </div>
  );
}