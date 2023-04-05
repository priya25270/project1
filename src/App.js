import './App.css';
import AppointmentForm from './Components/AppointmentForm';
import Login from './Components/Login';
import Register from './Components/Register';
function App() {
  return (
    <>
    <div className="App">
    <Login/>
    <Register/>
    <AppointmentForm/>
    </div>
    </>
  );
}

export default App;
