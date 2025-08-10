import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './pages/Search';
import { SavedWordsProvider } from './contexts/SavedWordsProvider';
import Saved from './pages/Saved';

function App() {
  return (
    <SavedWordsProvider>
      <BrowserRouter>
        <Header />
        <main className="flex flex-col flex-auto">
          <Routes>
            <Route index element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </SavedWordsProvider>
  );
}

export default App;
