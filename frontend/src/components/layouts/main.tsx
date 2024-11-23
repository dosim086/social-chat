import { ReactNode } from 'react';

export function Main({ children }: { children?: ReactNode }) {
  return (
    <div className='flex-1 bg-gray-100 w-full h-full'>
      <div className='main-body container m-auto w-11/12 h-full flex flex-col'>
        {children}
      </div>
    </div>
  );
}
