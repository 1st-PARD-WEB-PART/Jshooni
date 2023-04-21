import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import Articles_Layout from './pages/Articles_layout';
import Profile_Layout from './pages/Profile_layout';
import MyPage from './pages/Mypage';
import Login from './pages/Login';
import styled from 'styled-components';
// import Button from './Button';
// import DangerButton from './DangerButton';


// function App() {
//   return (

//     <Routes>
//       <Route path="/login" element={<Login />}></Route>
//       <Route path="/mypage" element={<MyPage />}></Route>

//       <Route path="/" element={<Layout />}>

//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />

//         <Route path="/profiles" element={<Profile_Layout />} >
//           <Route path="/profiles/:username" element={<Profile />} />
//         </Route>

//         <Route path="/articles" element={<Articles_Layout />} >
//           <Route path="/articles" element={<Articles />}>
//             <Route path=":id" element={<Article />} />
//           </Route>
//         </Route>

//       </Route>

//     </Routes>
//   );
// };

const Button = styled.button`
  background-color: ${props => props.kkk || 'blue'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
`;

function App() {
  return (
    <div>
      <Button kkk="green">Green Button</Button>
      <Button>Blue Button</Button>
      {/* <Button>Click Me!</Button> */}
      {/* <DangerButton>Danger Button</DangerButton> */}
    </div>
  );
}

export default App;
