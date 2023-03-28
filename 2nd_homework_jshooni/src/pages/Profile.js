//  : 경로.  --> 이렇게 함으로써 주소를 하나하나 해주는거를 해결해줌. ㅇㅇ 

// "react-router-dom" 라이브러리에서 "useParams" 훅을 import 합니다.
// useParams url 파리미터 정보를 가져오는 역항르 합니다. 
// c에서는 = 을 많이쓰는데 (뭘 집어 넣기 위해서)
// 리액트에서는 훅을 많이 씁니다. 
import { useParams } from 'react-router-dom';
import image from './image_Trumph.jpg';
import image1 from './Obama.jpg';
import image2 from './Biden.jpg';

// 사용자 정보를 담은 객체입니다.
const img_src = image;
const img_src1 = image1;
const img_src2 = image2;
const data = {
  Kyj: {
    name: '김유진',
    description: '파드의 웹파트 파트장',
    image : img_src1,
  },
  Pjk: {
    name: '웹파트',
    description: '파드의 웹 개발 파트',
    image : img_src2,
  },
  Jsh: {
    name: '정승훈',
    description : '파드 웹 개발 파트에서 폭풍성장중',
    image : img_src,
  },
};

// 프로필 정보를 표시하는 컴포넌트입니다.
function Profile() {
  // "useParams" 훅을 사용하여 URL에서 전달된 username 파라미터를 가져옵니다.
  const params = useParams();
  // useParams를 가져오면 데이터 타입이 map 형식임. 

  // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 가져옵니다.
  const profile = data[params.username];

  // 사용자 정보가 존재하면 해당 정보를 화면에 표시하고, 그렇지 않으면 존재하지 않는 프로필임을 알리는 메시지를 표시합니다.
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <img src = {profile.image} alt = "응애"/> 
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

// Profile 컴포넌트를 모듈의 기본 내보내기(default export)로 내보냅니다.
export default Profile;