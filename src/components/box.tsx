import { ReactNode } from 'react';

type BoxType = {
  className?: string;
  children: ReactNode;
};

export const Box = ({ children, className }: BoxType) => (
  <div
    className={
      className
        ? 'bg-white rounded-lg shadow-2xl shadow-gray-500/40 p-2 ' + className
        : 'bg-white rounded-lg shadow-2xl shadow-gray-500/40 p-2'
    }
  >
    {children}
  </div>
);
