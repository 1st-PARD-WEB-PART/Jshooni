import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import Articles_Layout from './pages/Articles_layout';
import Profile_Layout from './pages/Profile_layout';

function App() {
  return (

    <Routes>

    <Route path="/" element={<Layout />}>

      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/profiles" element= {<Profile_Layout/>} >
        <Route path="/profiles/:username" element={<Profile />} />
      </Route> 

      <Route path="/articles" element={<Articles_Layout />} >
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>  
      </Route>

    </Route>
    
  </Routes>
  );
};

export default App;
