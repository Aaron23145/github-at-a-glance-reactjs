import React from 'react';

import { storiesOf } from '@storybook/react';

import '@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/index.css';

import Navbar from '../src/Navbar/Navbar';
import LanguagesContainer from '../src/LanguagesContainer/LanguagesContainer';
import LanguagesItem from '../src/LanguagesContainer/LanguagesItem';
import LoadingCircle from '../src/LoadingCircle';

import JavaScriptLogo from '../src/LanguagesContainer/javascript_logo.png';
import JavaLogo from '../src/LanguagesContainer/java_logo.svg';
import HTMLLogo from '../src/LanguagesContainer/html_logo.png';
import PythonLogo from '../src/LanguagesContainer/python_logo.png';


storiesOf('Navbar', module).add('Default', () => <Navbar />);
storiesOf('LanguagesContainer', module).add('Default', () => <LanguagesContainer />);
storiesOf('LanguagesItem', module)
  .add('JavaScript', () => <LanguagesItem logo={JavaScriptLogo} language="JavaScript" />)
  .add('Java', () => <LanguagesItem logo={JavaLogo} language="Java" />)
  .add('HTML', () => <LanguagesItem logo={HTMLLogo} language="HTML" />)
  .add('Python', () => <LanguagesItem logo={PythonLogo} language="Python" />);
storiesOf('LoadingCircle', module).add('Default', () => <LoadingCircle />);
