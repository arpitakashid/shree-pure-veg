export default function Header() {
  return (
    <header className="h-20 bg-[#121212] border-b border-yellow-500/20 flex items-center justify-between px-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="text-right">
        <p className="text-yellow-400 font-semibold">
          SHREE PURE VEG
        </p>

        <p className="text-gray-500 text-sm">
          Restaurant CMS
        </p>
      </div>

    </header>
  );
}