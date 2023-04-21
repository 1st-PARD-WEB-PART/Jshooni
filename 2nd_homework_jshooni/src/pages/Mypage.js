import { Navigate } from 'react-router-dom';

function MyPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />; //뒤로가기가 안된다. 
  }

  return <div>마이 페이지</div>;
};

export default MyPage;