import { useContext } from 'react';
import { MatchContext } from './MatchContext.jsx';

export function useMatch() {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error('useMatch must be used inside MatchProvider.');
  }

  return context;
}
