import DashboardCard from "../../components/admin/DashboardCard";

export default function Dashboard() {
  return (
    <div>

      <h2 className="text-3xl font-bold text-white mb-8">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Gallery Images"
          value="15"
        />

        <DashboardCard
          title="Food Items"
          value="32"
        />

        <DashboardCard
          title="Room Images"
          value="8"
        />

        <DashboardCard
          title="Pending Reviews"
          value="4"
        />

      </div>

    </div>
  );
}