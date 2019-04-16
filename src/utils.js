import JavaScriptLogo from './LanguagesContainer/javascript_logo.png';
import JavaLogo from './LanguagesContainer/java_logo.svg';
import HTMLLogo from './LanguagesContainer/html_logo.png';
import PythonLogo from './LanguagesContainer/python_logo.png';
import RubyLogo from './LanguagesContainer/ruby_logo.png';
import PHPLogo from './LanguagesContainer/php_logo.png';
import CSSLogo from './LanguagesContainer/css_logo.png';
import CPPLogo from './LanguagesContainer/cpp_logo.png';


export const APP_LANGUAGES = Object.freeze({
  'JavaScript': JavaScriptLogo,
  'Java': JavaLogo,
  'HTML': HTMLLogo,
  'Python': PythonLogo,
  'Ruby': RubyLogo,
  'PHP': PHPLogo,
  'CSS': CSSLogo,
  'C++': CPPLogo,
});

export function isLanguageSupported(language) {
  const supportedLanguages = Object.keys(APP_LANGUAGES).map(lang => lang.toLowerCase());
  return supportedLanguages.includes(language);
}

export function formatLanguage(language) {
  const languagesList = Object.keys(APP_LANGUAGES);
  const lowercaseLanguages = languagesList.map(lang => lang.toLowerCase());

  const indexOfLanguage = lowercaseLanguages.indexOf(language.toLowerCase());
  return languagesList[indexOfLanguage];
}
