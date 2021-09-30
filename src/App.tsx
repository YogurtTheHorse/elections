import React from 'react';
import {Route} from 'react-router';

import './App.css';
import {Layout} from "./Shared/Layout";
import {MainPage} from "./Pages/Main";
import {ShortPage} from "./Pages/Short";
import { Switch } from 'react-router-dom';

function App() {
    return <Layout>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/short' component={ShortPage}/>
            <Route path="*" component={MainPage}/>
        </Switch>
    </Layout>;
}

export default App;
