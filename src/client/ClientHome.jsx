import React, { useState } from 'react';
import './client.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClientHome() {
  const [menu, setMenu] = useState({
    'Petit Déjeuner': [
      { name: 'Croissant', price: 1.5, selected: false },
      { name: 'Café', price: 2.0, selected: false },
    ],
    'Chicha': [
      { name: 'Double Pomme', price: 10, selected: false },
      { name: 'Menthe', price: 10, selected: false },
    ],
  });

  const toggleItem = (category, index) => {
    const updatedCategory = [...menu[category]];
    updatedCategory[index].selected = !updatedCategory[index].selected;
    setMenu({ ...menu, [category]: updatedCategory });
  };

  const accept = () => {
    const selectedItems = [];
    Object.entries(menu).forEach(([category, items]) => {
      items.forEach(item => {
        if (item.selected) {
          selectedItems.push(`${item.name} (${category})`);
        }
      });
    });
    toast("Votre commande a été envoyée !");
  };

  const callWaiter = () => {
    toast("le serveur est arrive");
  };

  return (
    <div className="container">
      <header>
        <img src="vkus.jpg" alt="VKUS Coffee" className="logo" />
        <h1>Bienvenue chez VKUS Coffee</h1>
        <p>“We believe that our coffee has the power to turn your day in the best way”</p>
      </header>
      <div className="menu-columns">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category} className="category">
            <h2>{category}</h2>
            {items.map((item, idx) => (
              <label key={idx} className="item">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleItem(category, idx)}
                />
                {item.name} — {item.price} €
              </label>
            ))}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={accept}>✅ Accepter</button>
        <button onClick={callWaiter}>🔔 Appeler le serveur</button>
      </div>

      {/* ✅ Affiche les toasts ici */}
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default ClientHome;
