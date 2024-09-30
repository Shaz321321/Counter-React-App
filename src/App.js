import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./store/counter/Counter";
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
