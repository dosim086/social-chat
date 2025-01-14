import { ReactNode } from 'react';

export function ChatList({ children }: { children?: ReactNode }) {
  return (
    <div className='sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6'>
      <div className='search flex-2 pb-6 px-2'>
        <input
          type='text'
          className='outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200'
          placeholder='Search'
        />
      </div>
      <div className='flex-1 h-full overflow-auto px-2'>{children}</div>
    </div>
  );
}
