import React from "react";
import { Provider } from "react-redux";
import generateStore from './redux/store'
import Articles from "./components/Articles";


const App = () => {

  const store = generateStore()
  return (
    
    <Provider store={store}>
      <Articles />
    </Provider>
  );
};

export default App;
