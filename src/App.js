import './App.css';
import Routing from './routing';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Routing />
      </div>

    </Provider>
  );
}

export default App;
