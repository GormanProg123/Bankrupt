import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
