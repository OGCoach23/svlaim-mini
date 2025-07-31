import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';
import { useEffect, useState } from 'react';

const Dashboard = ({ session }: { session: any }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, [session, router]);

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.replace('/login');
        }}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;