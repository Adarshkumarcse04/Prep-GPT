import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionAnswering from './components/QuestionAnswering/QuestionAnswering';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SubjectSelectionPage from './components/SubjectSelection/SubjectSelectionPage';
import Importantques from './components/ImportantQuestion/Importantques';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/subsel" element={<SubjectSelectionPage />}/>
      <Route path="/impques" element={<Importantques />}/>
      <Route path="/quesans" element={<QuestionAnswering />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;