import JavaScriptLogo from './LanguagesContainer/javascript_logo.png';
import JavaLogo from './LanguagesContainer/java_logo.svg';
import HTMLLogo from './LanguagesContainer/html_logo.png';
import PythonLogo from './LanguagesContainer/python_logo.png';
import RubyLogo from './LanguagesContainer/ruby_logo.png';
import PHPLogo from './LanguagesContainer/php_logo.png';
import CSSLogo from './LanguagesContainer/css_logo.png';
import CPPLogo from './LanguagesContainer/cpp_logo.png';


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

const normalSupportedLanguages = Object.keys(APP_LANGUAGES);
const prettySupportedLanguages = Object.values(APP_LANGUAGES).map(lang => lang.pretty.toLowerCase());

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
