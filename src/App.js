import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme } from "./components/Themes"
import { darkTheme } from "./components/Themes"
import { Route, Switch, useLocation } from "react-router"

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import Contact from './components/Contact'

import { AnimatePresence } from "framer-motion";
import PowerButton from "./subComponents/PowerButton"



function App() {
  const location = useLocation();
  return <>
  <GlobalStyle/>

  <ThemeProvider theme={lightTheme}>
  <PowerButton />
  <AnimatePresence exitBeforeEnter>

    <Switch  location={location} key={location.pathname}>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
    </AnimatePresence>

  </ThemeProvider>
  
  </>
    
}

export default App

