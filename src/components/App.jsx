// src/App.jsx

import MailBox from "./MailBox";
import Product from "./Product";

const meestExpressUsers = [
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

    </div>
  );
}