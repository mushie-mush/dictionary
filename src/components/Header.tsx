import { Link } from 'react-router-dom';
import { useSavedWords } from '../hooks/useSavedWords';

function Header() {
  const { totalSavedWords } = useSavedWords();

  return (
    <header className="flex align-center justify-between py-4 px-6 text-slate-500">
      <Link to="/" className="text-xl self-center">
        Dictionary
      </Link>
      <Link
        to="/saved"
        className="flex align-center text-md border-2 border-slate-300 rounded-md py-2 px-4"
      >
        Saved Words{' '}
        <span className="flex items-center justify-center text-white text-sm ml-2 bg-slate-700 rounded-full w-[24px] h-[24px]">
          {totalSavedWords}
        </span>
      </Link>
    </header>
  );
}
export default Header;
