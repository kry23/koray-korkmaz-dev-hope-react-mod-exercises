import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
const Strings = {
  en: {
    current: "Welcome",
  },
  tr: {
    current: "Hoşgeldin",
  },
  it: {
    current: "Benvenuto",
  },
};
function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>{language}</h1>
    </div>
  );
}

export default DisplayLanguage;
