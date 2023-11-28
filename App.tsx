import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Navigator from "app/navigations/main-stack";
import { store } from "app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
