// // import React, { createContext, useContext, useState } from 'react';

// // export const LanguageContext = createContext();

// // export const LanguageProvider = ({ children }) => {
// //   const [language, setLanguage] = useState('en'); // 'en' for English, 'hi' for Hindi

// //   const switchLanguage = () => {
// //     setLanguage(prevLanguage => (prevLanguage === 'en' ? 'hi' : 'en'));
// //   };

// //   return (
// //     <LanguageContext.Provider value={{ language, switchLanguage }}>
// //       {children}
// //     </LanguageContext.Provider>
// //   );
// // };

// // export const useLanguage = () => {
// //   return useContext(LanguageContext);
// // };

// import React, { createContext, useContext, useState } from 'react';

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('hi'); // Set to 'hi' for Hindi

//   const switchLanguage = () => {
//     setLanguage(prevLanguage => (prevLanguage === 'en' ? 'hi' : 'en'));
//   };

//   // Translate content based on selected language
//   const translations = {
//     en: {
//       searchPlaceholder: 'Search',
//       languageButton: 'हिन्दी', // Hindi
//       otherText: 'Other English Content',
//       // Add more translations for other text
//     },
//     hi: {
//       searchPlaceholder: 'खोजें', // Search
//       languageButton: 'English',
//       otherText: 'अन्य हिन्दी सामग्री', // Other Hindi Content
//       // Add more translations for other text
//     },
//   };

//   return (
//     <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   return useContext(LanguageContext);
// };
