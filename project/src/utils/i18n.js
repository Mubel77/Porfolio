export const getStoredLanguage = () => {
  return localStorage.getItem('lang') || 'es';
};

export const setStoredLanguage = (lang) => {
  localStorage.setItem('lang', lang);
};

export const getOppositeLanguage = (currentLang) => {
  return currentLang === 'es' ? 'en' : 'es';
};