import './App.scss';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Temp from './components/temp'

function App() {

  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      {/* <Button onClick={notify}>Click me</Button>
      <ToastContainer /> */}
      <Temp />

    </div>
  );
}

export default App;
