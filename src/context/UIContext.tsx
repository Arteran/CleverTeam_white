import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface UIState {
  activeService: string | null;
  mobileNavOpen: boolean;
  scrolledPastHero: boolean;
  language: 'UA' | 'EN' | 'CH';
}
interface UIActions {
  setActiveService: (slug: string | null) => void;
  setMobileNavOpen: (open: boolean) => void;
  setScrolledPastHero: (scrolled: boolean) => void;
  setLanguage: (lang: 'UA' | 'EN' | 'CH') => void;
}
type UIContextValue = UIState & UIActions;

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [activeService, setActiveServiceState] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [language, setLanguage] = useState<'UA' | 'EN' | 'CH'>('UA');

  const setActiveService = useCallback((slug: string | null) => setActiveServiceState(slug), []);
  const handleSetMobileNavOpen = useCallback((open: boolean) => setMobileNavOpen(open), []);
  const handleSetScrolledPastHero = useCallback((v: boolean) => setScrolledPastHero(v), []);
  const handleSetLanguage = useCallback((lang: 'UA' | 'EN' | 'CH') => setLanguage(lang), []);

  return (
    <UIContext.Provider value={{
      activeService, mobileNavOpen, scrolledPastHero, language,
      setActiveService,
      setMobileNavOpen: handleSetMobileNavOpen,
      setScrolledPastHero: handleSetScrolledPastHero,
      setLanguage: handleSetLanguage,
    }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}
