<h2>About Switch-Mode: A Toggle Theme React Component</h2>
<p>This custom React component seamlessly integrates a toggle theme functionality into projects, allowing developers to persist the chosen theme using localStorage. Leveraging the React Context API, this component enables the passing of props values to specific components that require the necessary data.</p>

<h3>Installation</h3>
<p>To install Switch-Mode, use the following command:</p>
<pre><code>npm install switch-mode</code></pre>
<ul>
  <li>Import <code>{ThemeProvider}</code> from <code>"switch-mode"</code> and wrap your root component that will be rendered.</li>
  <li>In the consuming component, import <code>{useTheme}</code> and <code>ToggleSwitch</code> from <code>"switch-mode"</code>.</li>
  <li>Before the <code>return</code> statement of your consuming component, destructure <code>{theme}</code> from <code>useTheme()</code>.</li>
  <li>In your parent <code>div</code> tag, customize the <code>backgroundColor</code> and <code>color</code> using the syntax:
    <pre><code>style = {{backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black"}}</code></pre></li>
</ul>

<h3>Sample Codes</h3>
<h4>App.js</h4>
<pre><code>import React from "react";
import { useTheme, ToggleSwitch } from "switch-mode";

function App() {
  const { theme } = useTheme();
  return (
    <div 
      style={{ 
        backgroundColor: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
      }}
    >
      <ToggleSwitch />
      <h2> Details** </h2>
      <Main>
        "switch-mode" is a custom component used in React for enhancing user interfaces with dark/light themes
      </Main>
      <small>Created by Israel Abazie on February 22, 2023</small>
    </div>


<p>If you encounter any bugs or issues, please refer to our <a href="https://github.com/vintage-creator/switch-mode/issues">GitHub repository</a> for queries and assistance.</p>
