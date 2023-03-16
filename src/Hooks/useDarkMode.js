import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { demoAction } from "../redux/actions/index";
const useDarkMode = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("");

  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme) {
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      window.localStorage.setItem("Mode", theme);
      dispatch(demoAction(theme));
    }
  }, [theme, colorTheme, dispatch]);
  return [colorTheme, setTheme];
};

export default useDarkMode;
