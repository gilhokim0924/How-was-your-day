import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import type { Session } from '@supabase/supabase-js'
import '../css/Login.css'

/* key for supabase */
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

/* sign out button */
export const signOut = async () => {
    await supabase.auth.signOut();
}

function Login() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for session changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Redirect when logged in
  useEffect(() => {
    if (session) {
      navigate("/dashboard/today"); // need to check for today or post today
    }
  }, [session, navigate]);

  const signUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard/today`,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
      },
    });
  };

  // Receiving user information
  console.log(session?.user?.email);

  if (!session) {
    return (
      <section className="login-page">
        <div className="login-container">
          <h1 className="site-title">How Was Your Day?</h1>
          <p className="subtitle">Sign in to share and save your day</p>
          <button className="google-signUp-btn" onClick={signUp}>
            <img
              src="src/images/google-logo.svg"
              alt="Google Logo"
              className="google-icon"
            />
            Sign in with Google
          </button>
          <Link to="/" className="back-btn">
            Back to main page
          </Link>
        </div>
      </section>
    );
  }
  return null;
}

export default Login;