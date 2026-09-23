import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="border-b-4 border-slate-700 p-4 sticky top-0 z-50 bg-slate-300 dark:bg-slate-950 flex w-full justify-between items-center flex-wrap">
      <h1 className="text-3xl font-bold">Quentin Rampteau</h1>
      <div className="flex gap-4">
        <button onClick={toggleLanguage} className="w-15 flex items-center justify-center aspect-square px-4 py-2 border-2 border-slate-500 font-pixel text-xl hover:bg-slate-200 dark:hover:bg-slate-800 active:translate-y-1 transition-transform cursor-pointer" aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'} title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}>
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
        <button onClick={toggleTheme} className="w-15 flex items-center justify-center aspect-square px-4 py-2 border-2 border-slate-500 font-pixel text-xl hover:bg-slate-200 dark:hover:bg-slate-800 active:translate-y-1 transition-transform cursor-pointer" aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'} title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}