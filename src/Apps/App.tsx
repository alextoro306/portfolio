import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NotFound from '../components/sites/notfound/notfound';
import styles from './App.module.scss'
import Menubar from '../components/navbar/menubar';
import Navbar from '../components/navbar/navbar';
import { useDarkmodeContext } from "../darkmode/darkmodeContextProvider"
import Home from '../components/sites/home/home';
import Projects from '../components/sites/projects/projects';
import Cv from '../components/sites/cv/cv';

const App: React.FC = () => {
  const { useDarkmode } = useDarkmodeContext();
  return (
      <div className={ useDarkmode ? styles.darkmode : styles.lightmode }>
        <Router basename='/portfolio'>
          <Navbar/>
          <Menubar/>
          {}
          <Switch >
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/projects"} component={Projects}/>
            <Route exact path={"/cv"} component={Cv}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
  )
}

export default App
