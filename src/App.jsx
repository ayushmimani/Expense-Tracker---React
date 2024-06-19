import Form from "./components/Form";
import Table from "./components/Table";
import { store } from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
