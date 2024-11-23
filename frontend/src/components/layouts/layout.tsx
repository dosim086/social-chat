import { ReactNode } from 'react';

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className='w-full h-screen'>
      <div className='flex h-full'>{children}</div>
    </div>
  );
}
