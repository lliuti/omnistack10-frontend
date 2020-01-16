import React from 'react';
import './styles.css';

function DevItem({ dev }) {
  return(
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github/${dev.github_username}`}>Acessar Github</a>
    </li>
  );
}

export default DevItem;