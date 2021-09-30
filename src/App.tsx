import React from 'react';
import {Route} from 'react-router';

import './App.css';
import {Layout} from "./Shared/Layout";
import {MainPage} from "./Pages/Main";
import {ShortPage} from "./Pages/Short";

function App() {
    return <Layout>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/short' component={ShortPage}/>
    </Layout>;
}

export default App;
