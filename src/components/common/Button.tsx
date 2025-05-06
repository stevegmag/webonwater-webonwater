import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
};

export default function Button({ children, primary = false, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-md font-medium transition duration-300 ${
        primary
          ? 'bg-accent text-white hover:bg-accent/90'
          : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}