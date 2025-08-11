import Navbar from '../components/Navbar';
import CalendarUnit from 'react-calendar'
import {ChevronLeft, ChevronRight} from 'lucide-react';
import '../css/Calendar.css';

const Calendar: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="calendar-page">
        <div className="calendar-container">
          <div className="calendar-header">
            <h1>Calendar</h1>
            <p>Click on any day with an entry to view your diary</p>
          </div>
          <div className="calendar-content">
            <div className="calendar">
              <CalendarUnit
                className="react-calendar"
                onChange={() => {}}
                locale="en-US"
                next2Label={null}
                prev2Label={null}
                nextLabel={<ChevronRight className="arrow"/>}
                prevLabel={<ChevronLeft className="arrow"/>}
                showNeighboringMonth={false}
                maxDate={new Date()}
                minDate={new Date('2021-01-01')}
              />
            </div>
            <div className="calendar-diary">

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calendar;