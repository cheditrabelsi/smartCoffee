import React, { useState } from 'react';

function ServerManagement() {
  const [servers, setServers] = useState(['Ali', 'Mehdi']);
  const [newServer, setNewServer] = useState('');

  const addServer = () => {
    if (newServer.trim()) {
      setServers([...servers, newServer.trim()]);
      setNewServer('');
    }
  };

  const removeServer = (name) => {
    setServers(servers.filter(s => s !== name));
  };

  return (
    <div>
      <h3>Gestion des serveurs</h3>
      <input
        type="text"
        placeholder="Nom du serveur"
        value={newServer}
        onChange={(e) => setNewServer(e.target.value)}
      />
      <button onClick={addServer}>Ajouter</button>
      <ul>
        {servers.map((server, idx) => (
          <li key={idx}>
            {server} <button onClick={() => removeServer(server)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerManagement;
