
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider>
      <div className='themee' id={theme} >
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <RouterProvider router={routes} ></RouterProvider>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
