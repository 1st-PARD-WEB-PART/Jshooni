import { Link, Outlet } from 'react-router-dom';

const Profile_Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgreen', padding: 10, fontSize: 24 }}>
        Profile Header
      </header>
      <main>
      <ul>
            <li>
            <Link to="/profiles/Jsh">정승훈의 프로필</Link>
            </li>
            <li>
            <Link to="/profiles/Kyj">김유진의 프로필</Link>
            </li>
            <li>
            <Link to="/profiles/Pjk">웹파트의 프로필</Link>
            </li>
            <li>
            <Link to="/profiles/void">존재하지 않는 프로필</Link>
            </li>
            <li>
            <Link to="/articles">게시글 목록</Link>
            </li>
        </ul>
        <Outlet />
      </main>
    </div>
  );
};

export default Profile_Layout;