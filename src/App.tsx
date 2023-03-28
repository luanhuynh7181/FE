import { useRoutes } from 'react-router-dom';
import router from 'src/route/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { store } from './app/store';
import { Provider } from 'react-redux';
function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <Provider store={store}>
        {content}
      </Provider>
    </ThemeProvider>
  );
}
export default App;
