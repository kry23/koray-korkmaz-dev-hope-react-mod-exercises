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
        {(language) => <h1>{language}</h1>}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;
