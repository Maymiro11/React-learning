import React from "react";

import LoginForm from './LoginForm';
import SearchBar from "./SearchBar";
import LangSwitcher from './LangSwitcher';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import FeedbackForm from './FeedbackForm';

const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <FeedbackForm />
     
    </div>
  );
};

export default App;

/*const meestExpressUsers = [
  { id: 1, userEmail: "alex@gmail.com" },
  { id: 2, userEmail: "anna@gmail.com" },
  { id: 3, userEmail: "qwerty@gmail.com" },
];

const novaPoshtaUsers = [
  { id: 11, userEmail: "maja99@gmail.com" },
  { id: 22, userEmail: "kark@gmail.com" },
  { id: 33, userEmail: "iryna@gmail.com" },
];

const ukrPoshtaUsers = [
  { id: 12, userEmail: "sasa@gmail.com" },
  { id: 24, userEmail: "krane@gmail.com" },
  { id: 36, userEmail: "tymek@gmail.com" },
];

export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product />
      <Product />
      <Product />

      <MailBox boxUsers={meestExpressUsers} 
        boxtitle="Meest expres" 
        mailBoxCount={3}/>
      <MailBox boxUsers={novaPoshtaUsers}
        boxtitle="Nova poshta"  
        mailBoxCount={5}/>
      <MailBox boxUsers={ukrPoshtaUsers}
        boxtitle="Ukrposhta" />

      <Button />
    </div>
  );
}
*/
