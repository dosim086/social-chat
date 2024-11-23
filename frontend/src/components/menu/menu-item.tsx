import { ReactNode } from 'react';

export function MenuItem({
  active,
  icon,
  children,
}: {
  active?: boolean;
  icon: ReactNode;
  children: ReactNode;
}) {
  const activeClass = active
    ? 'border-gray-800 bg-gray-300 text-black'
    : 'text-gray-600';

  return (
    <a
      className={`block py-4 px-12 border-l-4 hover:bg-gray-300 hover:text-black ${activeClass}`}
      href='#'
    >
      <span className='inline-block align-text-bottom mr-2'>{icon}</span>
      {children}
    </a>
  );
}
