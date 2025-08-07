import react from 'react';
import Navbar from '../components/Navbar';

const Calendar: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="calendar-page">
        <div className="calendar-content">
          <h1>Calendar Page</h1>
          {/* Additional calendar content can go here */}
        </div>
      </div>
    </>
  );
}

export default Calendar;