import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import SobreMi from './SobreMi'
import MisProyectos from './MisProyectos'
import Home from './Home'

document.title = 'Presentación';

const TabWeb = () => (
    <Tabs initialSelectedIndex={0}>
        <Tab label={'Home'}>
            <Home/>
        </Tab>
        <Tab label={'Sobre mi'}>
            <SobreMi/>
        </Tab>
        <Tab label={'Proyectos'}>
            <MisProyectos/>
        </Tab>
    </Tabs>
);

export default TabWeb;