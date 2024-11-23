import { ReactNode } from 'react';

export function Sidebar({ children }: { children?: ReactNode }) {
  return (
    <div className='hidden xl:block sm:flex-2 w-64 bg-gray-200'>{children}</div>
  );
}
