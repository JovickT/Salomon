import './assets/css/App.css'
import { RouterProvider } from 'react-router-dom';
import Rooter from './services/Rooter';

const App = () => <RouterProvider router={Rooter} />


export default App;

