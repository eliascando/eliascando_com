import { useEffect, useState } from 'react'
import Nav from './layout/Nav'
import Content from './layout/Content'
import { LanguageContext } from './contexts/LanguageContext'
import './App.css'
import { FormControl } from '@mui/material'

function App() {

  const [location, setLocation] = useState('about');
  const [language, setLanguage] = useState(()=>{
    const languageStorage = localStorage.getItem('language');
    const languageNavigator = window.navigator.language.split(/[-_]/)[0];
    return existEngOrSpa(languageStorage) 
          ? languageStorage 
          : existEngOrSpa(languageNavigator) 
            ? languageNavigator 
            : 'en';
  });

  const [onMouseLanguage, setOnMouseLanguage] = useState();

  const lang_spa = {
    es: 'ES',
    en: 'EN'
  }

  const lang_eng = {
    es: 'ES',
    en: 'EN'
  }

  useEffect(() => {
    localStorage.setItem('language', language);
    let selected = document.getElementById(language);
    selected.classList.add('selected');
  }, [language]);

  //obtener anchos de pantalla
  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      console.log(width);
      if(width < 890){
        let pipe = document.getElementById('pipe');
        let en = document.getElementById('en');
        let es = document.getElementById('es');
        pipe.style.display = 'none';
        en.style.display = 'none';
        es.classList.add('selected');
      }else{
        let pipe = document.getElementById('pipe');
        let en = document.getElementById('en');
        pipe.style.display = 'block';
        en.style.display = 'block';
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  function existEngOrSpa(lang){
    return lang === 'es' || lang === 'en';
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={{language, setLanguage}}>
        <div className='language-switch fixed-bottom-div'>
          <button 
            id='language-switch-button' 
            onClick={
              ()=>{
                let sel = language === 'es' ? 'en' : 'es';
                setLanguage(sel);
                //manejar el handleResize
                if(window.innerWidth < 890){
                  let selected = document.getElementById('es');
                  selected.classList.add('selected');
                  let span = document.getElementById('es');
                  span.innerHTML = language === 'es' ? lang_eng[sel] : lang_spa[sel];
                }else{
                  let selected = document.getElementById(sel);
                  let notSelected = document.getElementById(language);
                  selected.classList.add('selected');
                  notSelected.classList.remove('selected');
                }
              }
            }
          >
            <span 
              id='es'
            >
              ES
            </span>
            <span 
              id='pipe'
            >
              |
            </span>
            <span 
              id='en'
            >
             EN
            </span>
          </button>
        </div>
        <Nav 
          location={location}
          setLocation={setLocation}
        />
        <Content
          location={location}
          setLocation={setLocation}
        /> 
      </LanguageContext.Provider>
    </div>
  )
}

export default App
