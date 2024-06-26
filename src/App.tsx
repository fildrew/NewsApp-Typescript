import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleArticle from "./components/SingleArticle"
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/articles/:id" element={<SingleArticle/>} />
        </Routes>
        <MyFooter />
      </> 
    </BrowserRouter>
  );
}

export default App;
