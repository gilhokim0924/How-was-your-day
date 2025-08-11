import React from 'react';
import PreNavbar from '../components/PreNavbar';
/*import AboutUs from '../components/Aboutus';*/
/*import OurDiary from '../components/OurDiary';*/

const Home: React.FC = () => {
  return (
    <div>
      <PreNavbar />
      <main style={{ padding: '40px', paddingTop: '80px' }}>
        <h1>Welcome to the Home Page</h1>
      </main>
    </div>
  );
}

export default Home;