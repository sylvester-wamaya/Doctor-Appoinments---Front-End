import { useState } from 'react';
import User from './components/authentication/User';
//import PrivateText from './components/authentication/PrivateText';
import { Route, Routes } from 'react-router-dom';
import DoctorsContainer from './components/doctors/DoctorsContainer';
import DoctorForm from './components/doctors/DoctorForm';
import ShowDoctor from './components/doctors/ShowDoctor';
import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';
import Header from './components/doctors/Header';
import Logout from './components/authentication/Logout';

// import Main_page from './components/main_page'
// import Set_appoiment from './components/set_appoiment'
// import Show from './components/show'
// import './App.css'
import './App.css';

function App() {
  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("user")));
  if(currUser)
  return (
  // <Routes>
  //   <Route path="/" element={<Main_page />} />
  //   <Route path="/show" element={<Show />} />
  //   <Route path="/doctor:id" element={<Main_page />} />
  //   <Route path="/set_appoinment" element={<Set_appoiment  />} />
  // </Routes>
    <>
            <h1>Hello {currUser.name}</h1>
            {console.log(currUser)}
            <Header />
            <Logout setCurrUser={setCurrUser} />
      <Routes>
        <Route path="/" element={<DoctorsContainer />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
        <Route path="/doctors/:doctorId" element={<ShowDoctor />} />
        <Route path="/delete-doctor" element={<DeleteDoctorContainer />} />
      </Routes>
    </>
  );
  return(
    <User setCurrUser={setCurrUser} />
  )
}

export default App;
