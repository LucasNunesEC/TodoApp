import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'


import Todo from '../todo/todo'
import About from '../about/about'
import Aval from '../avaliacao/avaliacao'

export default props =>(
    <Router history ={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Route path='/aval' component={Aval}/>
        <Redirect from ='*' to='/todos' />
    </Router>
)