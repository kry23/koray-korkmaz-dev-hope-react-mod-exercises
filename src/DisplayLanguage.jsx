import React from "react";
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
  return (
    <div>
      <LanguageContext.Consumer>
        {(language) => Strings[language].current + " Koray"}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;
