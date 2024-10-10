import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutPage from './Pages/AboutPage'; 
import HomePage from './Pages/HomePage';
import RecipeListPage from './Pages/RecipeListPage';
import RecipePage from './Pages/RecipePage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
