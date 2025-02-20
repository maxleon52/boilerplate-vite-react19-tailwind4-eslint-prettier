import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <section className="flex h-screen overflow-hidden border-2 border-red-500 antialiased">
      <aside className="w-[320px] border-4 border-yellow-500">SIDEBAR</aside>

      <div className="flex h-full w-full flex-col overflow-hidden border-4 border-purple-500">
        <header className="h-20 border-4 border-blue-500">HEADER</header>
        <main className="h-full overflow-hidden border-4 border-green-500">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
