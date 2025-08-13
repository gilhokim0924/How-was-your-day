import react from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import {signOut} from '../components/Login'

const Settings: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="settings-page">
        <div className="settings-content">
          <h1>Settings</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
        <Link to="/">back to main</Link>
      </div>
    </>
   
  );
}

export default Settings;