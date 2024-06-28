'use client';

import { useScroller } from '../hooks/use-scroller';

export default function Header() {
  const scrolled = useScroller();

  return (
    <div className="pt-4 sticky top-0">
      <nav className="flex items-center max-w-[800px] m-auto justify-between">
        <div className="flex">LOGO</div>
        <ul>
          <li>
            <div>ADD</div>
          </li>
        </ul>
      </nav>
      {scrolled && (
        <div className="h-[1px] mt-4 bg-white w-full underline"></div>
      )}
    </div>
  );
}
