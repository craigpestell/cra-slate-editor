import * as BrowserFS from 'browserfs';
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import HeaderAppBar from './components/Header';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

import { theme } from './theme/theme';
import configureStore from './store/config/configureStore';
import { login, logout } from './store/actions/auth';

require('dotenv').load();

// Installs globals onto window:
// * Buffer
// * require (monkey-patches if already defined)
// * process
// You can pass in an arbitrary object if you do not wish to pollute
// the global namespace.
BrowserFS.install(window);

BrowserFS.configure(
  {
    fs: 'MountableFileSystem',
    options: {
      '/tmp': { fs: 'InMemory' },
      '/home': { fs: 'IndexedDB', options: {} },
      //'/mnt/usb0': { fs: 'LocalStorage' },
    },
  },
  function(e) {},
);

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  </Provider>
);

store.dispatch(logout());

export default App;
