import './App.css';
import Form from './components/Form';
import Meal from './components/Meal';
import NavBar from './components/NavBar';
import {AuthContextProvider} from './components/store/auth-context';

function App() {
  //we put the AuthContextProvider in the App so that all the child components within it can acess the context!
  return (
    <AuthContextProvider>
    <div className="App">
     <NavBar></NavBar>
<Form></Form>
<Meal></Meal>
    </div>
    </AuthContextProvider>
  );
}

export default App;
