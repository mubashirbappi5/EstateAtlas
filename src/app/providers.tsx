'use client';

import { UserProvider } from './context/UserContext';


// const SITE_KEY = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';
// console.log('ReCaptcha Site Key:', SITE_KEY);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    
      <UserProvider>{children}</UserProvider>
    
  );
}
