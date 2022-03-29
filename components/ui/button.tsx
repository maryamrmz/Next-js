import Link from 'next/link';
import { FC } from 'react';

interface ButtonProps {
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ link, onClick, children }) => {
  if (link) {
    return (
      <Link href={link}>
        <button className="flex items-center justify-between rounded-md bg-emerald-500 p-2 text-white">
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className="flex items-center justify-between rounded-md bg-emerald-500 p-2 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
