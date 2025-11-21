import React from 'react';
import { ThemeType } from '../src/types';
import { Palette, Monitor, Terminal } from 'lucide-react';

interface Props {
  currentTheme: ThemeType;
  setTheme: (t: ThemeType) => void;
}

export const ThemeSelector: React.FC<Props> = ({ currentTheme, setTheme }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setTheme(ThemeType.MINIMALIST)}
        className={`p-2 rounded-full transition-all ${currentTheme === ThemeType.MINIMALIST ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
        title="Minimalist (Academic)"
      >
        <Palette size={20} />
      </button>
      <button
        onClick={() => setTheme(ThemeType.MODERN)}
        className={`p-2 rounded-full transition-all ${currentTheme === ThemeType.MODERN ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
        title="Modern (Tech)"
      >
        <Monitor size={20} />
      </button>
      <button
        onClick={() => setTheme(ThemeType.CYBER)}
        className={`p-2 rounded-full transition-all ${currentTheme === ThemeType.CYBER ? 'bg-emerald-900 text-emerald-400' : 'text-gray-500 hover:text-emerald-400'}`}
        title="Cyber (Hacker)"
      >
        <Terminal size={20} />
      </button>
    </div>
  );
};
