import { ReactNode } from 'react';

export function Content({ children }: { children?: ReactNode }) {
  return (
    <div className='main flex-1 flex flex-col'>
      <div className='hidden lg:block heading flex-2'>
        <h1 className='text-3xl text-gray-700 mb-4'>Chat</h1>
      </div>
      <div className='flex-1 flex h-full'>{children}</div>
    </div>
  );
}
