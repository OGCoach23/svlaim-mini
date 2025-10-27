import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <Component {...pageProps} session={session} />;
}

export default MyApp;