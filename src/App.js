import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabWeb from './TabBar';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <TabWeb/>
            </MuiThemeProvider>
        );
    }
}

export default App;
