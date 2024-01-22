import React,{useEffect, useState} from "react";
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import useLocalStorage from 'use-local-storage';



function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn)
  }

  useEffect(() => {
    if(theme === "dark") {
      setSwitchBtn(true)
    }
    //whenever we are in dark mode, set state back to true when the page rerender's(when we refresh page, reload page).
  },[theme])
  

  return (
    <div>
      <Header 
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
      />
      <Hero 
        myTheme={theme}
      />
      <Footer 
        myTheme={theme}
      />
    </div>
  );
}

export default App;


//We saved the theme(light and dark state) to local-storage.
//Data Persistence

