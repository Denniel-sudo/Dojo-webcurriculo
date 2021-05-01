import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';


export default function Routes(){
  return (
    <>
      <Switch>
        <Route component={Login} exact path="/"/>
        <Route component={HomePage} exact path="/Home"/>
        <Route component={Projects} path="/project"/>
      </Switch>
    </>
  );

}