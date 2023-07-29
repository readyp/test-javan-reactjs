import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

const el = document.getElementById("root");

if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
