import { Link } from 'react-router-dom';
import { useSavedWords } from '../hooks/useSavedWords';

function Header() {
  const { totalSavedWords } = useSavedWords();

  return (
    <header className="fixed flex align-center justify-between w-full py-2 px-6 text-slate-800">
      <Link to="/" className="text-xl self-center">
        Dictionary
      </Link>
      <Link
        to="/saved"
        className="flex align-center text-md py-2 px-4 border-b-2 border-b-slate-400 hover:border-b-slate-800"
      >
        Saved Words{' '}
        <span className="flex items-center justify-center text-white text-sm ml-2 bg-orange-600 rounded-full w-[24px] h-[24px]">
          {totalSavedWords}
        </span>
      </Link>
    </header>
  );
}
export default Header;
