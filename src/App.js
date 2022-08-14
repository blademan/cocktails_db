import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useGlobalContext } from './context';

import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import Loading from './components/loading/Loading';

function App() {
 const { loading } = useGlobalContext();

 if (loading) {
  return (
   <Router>
    <NavBar /> <Loading />
   </Router>
  );
 }

 return (
  <Router>
   <NavBar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="cocktail/:id" element={<SingleCocktail />} />
    <Route path="*" element={<Error />} />
   </Routes>
  </Router>
 );
}

export default App;
