import JavaScriptLogo from './images/languages/javascript_logo.png';
import JavaLogo from './images/languages/java_logo.svg';
import HTMLLogo from './images/languages/html_logo.png';
import PythonLogo from './images/languages/python_logo.png';
import RubyLogo from './images/languages/ruby_logo.png';
import PHPLogo from './images/languages/php_logo.png';
import CSSLogo from './images/languages/css_logo.png';
import CPPLogo from './images/languages/cpp_logo.png';


export const APP_LANGUAGES = Object.freeze({
  'javascript': { img: JavaScriptLogo, pretty: 'JavaScript' },
  'java': { img: JavaLogo, pretty: 'Java' },
  'html': { img: HTMLLogo, pretty: 'HTML' },
  'python': { img: PythonLogo, pretty: 'Python' },
  'ruby': { img: RubyLogo, pretty: 'Ruby' },
  'php': { img: PHPLogo, pretty: 'PHP' },
  'css': { img: CSSLogo, pretty: 'CSS' },
  'cpp': { img: CPPLogo, pretty: 'C++' },
})

export const normalSupportedLanguages = Object.keys(APP_LANGUAGES);
export const prettySupportedLanguages = Object.values(APP_LANGUAGES).map(lang => lang.pretty.toLowerCase());

export function isLanguageSupported(language) {
  const languageLower = language.toLowerCase();

  if (normalSupportedLanguages.includes(languageLower)) return true;
  if (prettySupportedLanguages.includes(languageLower)) return true;

  return false;
}

export function prettyFormatLanguage(language) {
  if (!isLanguageSupported(language)) throw new Error('Language is not supported');

  const languageLower = language.toLowerCase();

  return APP_LANGUAGES[languageLower].pretty;
}

export function normalFormatLanguage(language) {
  if (!isLanguageSupported(language)) throw new Error('Language is not supported');

  const languageLower = language.toLowerCase();
  const languageIndex = prettySupportedLanguages.indexOf(languageLower);

  return normalSupportedLanguages[languageIndex];
}


export function getApiUrl(type, value) {
  switch (type) {
    case 'repositories':
      return `https://api.github.com/search/repositories?q=language:${value}&sort=stars`;
    case 'repository':
      return `https://api.github.com/repos/${value}`;
    default:
      throw new Error('Specified type doesn\'t exist.');
  }
}
