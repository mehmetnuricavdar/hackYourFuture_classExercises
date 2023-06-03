import "./App.css";

import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider, themes } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Background hidden={false}>
        <div className="App">
          <h1>Hello CodeSandbdsdox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Counter initial={1} />

          <Footer />
        </div>
      </Background>
    </ThemeProvider>
  );
}

function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={clickHandler}>{count}</button>
    </div>
  );
}

function Footer({}) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const themesOptions = Object.keys(themes).map(aTheme=>{
    
  })

  return (
    <div className="footer">
      <p>hello there from footer</p>
      <select value={theme} onChange={toggleTheme}>
        Switch theme
        <option value={"dark"}>Dark</option>
        <option value={"light"}>Light</option>
        <option value={"halloween"}>Halloween</option>
      </select>
    </div>
  );
}

function Background({ children, hidden }) {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === themes.light ? "white" : "black";
  const color = theme === themes.light ? "black" : "white";
  

  if (hidden) {
    return null;
  }

  return <div style={{ backgroundColor: bgColor, color }}>{children}</div>;
}
