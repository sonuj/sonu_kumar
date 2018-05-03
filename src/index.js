import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/table.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
	<MuiThemeProvider>
		<Task />
	</MuiThemeProvider>
    ),
    document.getElementById('root')
  );