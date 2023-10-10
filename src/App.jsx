import { Route, Routes } from 'react-router-dom';
import DoctorsContainer from './components/doctors/DoctorsContainer';
import DoctorForm from './components/doctors/DoctorForm';
import Header from './components/doctors/Header';
import ShowDoctor from './components/doctors/ShowDoctor';
// import Main_page from './components/main_page'
// import Set_appoiment from './components/set_appoiment'
// import Show from './components/show'
// import './App.css'
import './App.css';

function App() {
  return (
  // <Routes>
  //   <Route path="/" element={<Main_page />} />
  //   <Route path="/show" element={<Show />} />
  //   <Route path="/doctor:id" element={<Main_page />} />
  //   <Route path="/set_appoinment" element={<Set_appoiment  />} />
  // </Routes>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DoctorsContainer />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
        <Route path="/doctors/:doctorId" element={<ShowDoctor />} />
      </Routes>
    </>
  );
}

export default App;
