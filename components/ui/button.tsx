import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  link: string;
}

const Button: FC<ButtonProps> = ({ link, children }) => {
  return (
    <Link href={link}>
      <button className="flex items-center justify-between rounded-md bg-emerald-500 p-2 text-white">
        {children}
      </button>
    </Link>
  );
};

export default Button;
