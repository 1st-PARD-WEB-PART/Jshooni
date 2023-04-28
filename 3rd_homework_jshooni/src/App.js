import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './routes/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;



