// app/providers.tsx
'use client';

import { UserProvider } from './context/UserContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
