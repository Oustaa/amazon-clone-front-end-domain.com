import ReactDOM from "react-dom/client";
import App from "./App";
import { getIds } from "./features/cart-slice";
import { getCategories } from "./features/categories-slice";
import { isLoggedIn } from "./features/auth-slice";

import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_ENV === "production") disableReactDevTools();

store.dispatch(getCategories());
store.dispatch(getIds());
store.dispatch(isLoggedIn());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </>
);

/*
  const searchFunction = useCallback(a function to be remembered, [])
*/
