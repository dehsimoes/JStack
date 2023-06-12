import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts'
import Post from './pages/Post';
import NotFound from './pages/NotFound';

/*
Esses dois casos "fazem a mesma coisa", o path="*" serve para quando for digitado "qualquer coisa" e se nao passar o path também. (São uns fallback)
<Route path="*" component={NotFound} />
<Route  component={NotFound} />

Já o Switch, serve para que ele retorne somente uma página, ele vai entrar olhando os Route, um por um, de a cordo com a ordem que foi criada,
 portando, cuidado ao colocar o path="*" ou vazio antes de algo, pois ela deve ser sempre a ultima, para nao ficar renderizando sempre
*/
export default function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={Post} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}