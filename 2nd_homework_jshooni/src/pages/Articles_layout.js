import { Link, Outlet } from 'react-router-dom';

const Articles_Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightblue', padding: 10, fontSize: 24 }}>
        Aricle Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Articles_Layout;