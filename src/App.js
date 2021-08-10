import { Provider } from "react-redux";
import { HomeScreen } from "./components/HomeScreen";
import { store } from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
}

export default App;
