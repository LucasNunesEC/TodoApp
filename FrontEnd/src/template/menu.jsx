import React from 'react'

export default props =>(
    <nav className='navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                <i className='fa fa-user-circle-o'></i> HULW
                </a>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/todos'>A Completar</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                    <li><a href='#/aval'>Avaliação</a></li>
                </ul>
            </div>
        </div>
    </nav>
)