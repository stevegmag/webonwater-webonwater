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
      className={`px-8 py-3 rounded-md font-medium transition duration-300 w-full sm:w-auto border-2 border-white ${
        primary
          ? 'bg-[var(--color-text-dark)] text-white hover:bg-[var(--color-dark-blue)]'
          : 'bg-transparent text-white hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}
