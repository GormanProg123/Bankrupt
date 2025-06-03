import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
