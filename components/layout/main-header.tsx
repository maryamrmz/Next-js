import Link from 'next/link';
import { VFC } from 'react';

const MainHeader: VFC = () => {
  return (
    <header>
      <div>
        <Link href="/">Next Events</Link>
      </div>
      <nav>
        <li>
          <Link href="/events">Browse All Events</Link>
        </li>
      </nav>
    </header>
  );
};

export default MainHeader;
