>### This is a custom react component that allows developers to add a toggle theme functionality in their projects seamlessly with its value persisted over the localStorage. Here, with the aid of react context API, values of props are able to be passed down to the specific components that need the required data.

### <h3>How to Install:</h3>
> <h4>Run npm install switch-mode</h4> || <br> <h4>yarn add switch-mode</h4>
> <ul>
> <li>import {ThemeProvider} from "switch-mode" and wrap your root component that will be rendered</li>
> <li>In the consuming component, import {useTheme, ToggleSwitch} from "switch-mode"</li>
> <li>Just before the return keyword of your consuming component, destructure `{theme}` from useTheme()</li>
> <li>And finally in your parent `div` tag, customize your backgroundColor and color </li>
> <li>Use the syntax: div style = {{backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black"}}</li>

<h3>See sample codes below:</h3>

### App.js<br>
>import React from "react";<br>
>import { useTheme, ToggleSwitch } from "switch-mode";<br>

>function App() {<br>
>  const { theme } = useTheme();<br>
>  return (<br>
>    <div 
>      style={{ 
>        backgroundColor: theme === "light" ? "black" : "white",
>        color: theme === "light" ? "white" : "black",
>        minHeight: "100vh",
>        display: "flex",
>        flexDirection: "column",
>        paddingTop: "20px",
>      }}
>
>      <ToggleSwitch />
>      <h2> Some text here** </h2>
>      <Main>
>        `switch-mode` is a custom component used in react for enhancing user
>        interfaces with dark/light themes
>      </Main>
>      <small>Created by Israel Abazie on February 22, 2023</small>
>    </div>
>  );<br>
>}<br>

>export default App;<br>


### Index.js<br>
>import React from 'react';<br>
>import ReactDOM from 'react-dom/client';<br>
>import './index.css';<br>
>import App from './App';<br>
>import {ThemeProvider} from "switch-mode";<br>

>const root = ReactDOM.createRoot(document.getElementById('root'));<br>
>root.render(<br>
>  <React.StrictMode><br>
>   <ThemeProvider> <App /> </ThemeProvider>
>  </React.StrictMode><br>
>);<br>

>// If you want to start measuring performance in your app, pass a function<br>
>// to log results (for example: reportWebVitals(console.log))<br>
>// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals<br>
>reportWebVitals();<br>



### If you are encountering bugs, send your queries: https://github.com/vintage-creator/switch-mode/issues
