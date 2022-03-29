import Link from 'next/link';
import { VFC } from 'react';

const MainHeader: VFC = () => {
  return (
    <header className="flex justify-between bg-slate-800 px-14 py-4 text-white">
      <div>
        <Link href="/">Next Events</Link>
      </div>
      <nav>
        <li className="list-none">
          <Link href="/events">Browse All Events</Link>
        </li>
      </nav>
    </header>
  );
};

export default MainHeader;
