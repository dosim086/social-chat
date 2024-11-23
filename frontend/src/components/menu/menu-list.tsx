import { ReactNode } from 'react';

export function MenuList({ children }: { children?: ReactNode }) {
  return <div className='menu mt-8'>{children}</div>;
}
