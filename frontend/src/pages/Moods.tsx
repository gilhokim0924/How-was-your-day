import react from 'react';
import Navbar from '../components/Navbar';

const Moods: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="moods-page">
        <div className="moods-content">
          <h1>Moods Page</h1>
          {/* Additional moods content can go here */}
        </div>
      </div>
    </>
  );
}

export default Moods;