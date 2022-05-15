import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme } from "./components/Themes"
import { darkTheme } from "./components/Themes"


function App() {
  return <>
  <GlobalStyle/>

  <ThemeProvider theme={darkTheme}>
  App file
  </ThemeProvider>
  
  </>
    
}

export default App

