import react from 'react';
import Navbar from '../components/Navbar';

const Settings: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="settings-page">
        <div className="settings-content">
          <h1>Settings</h1>
          {/* Settings content goes here */}
        </div>
      </div>
    </>
   
  );
}

export default Settings;