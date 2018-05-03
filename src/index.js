import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/table.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

ReactDOM.render((
	<MuiThemeProvider>
		<Task />
	</MuiThemeProvider>
    ),
    document.getElementById('root')
  );