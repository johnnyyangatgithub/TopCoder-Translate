import './styles.css';
import React, { useState } from 'react';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div className="translate-wrapper">
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
