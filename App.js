import AppNavigator from './Navigation/Navigator';
import { Provider, DefaultTheme } from 'react-native-paper'
import Home from './screens/Home';
import Detail from './screens/NewsDetail'; // Ensure the path is correct


export default function App() {
  return (
    <Provider >
      <AppNavigator />
    </Provider>
  );
}


