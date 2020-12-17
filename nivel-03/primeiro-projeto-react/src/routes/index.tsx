import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
    {/* O "+"" serve para indicar que é tudo apartir da variável.
    Se o "+"" não for colocado, como há "/" no nome do repositório,
    o que vier depois da "/" será uma extenção da rota ":repository". */}
  </Switch>
);

export default Routes;
