import React, { useEffect, useState } from 'react';

function DevForm({ onSubmit }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState([]);  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },  
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });
    
    setGithubUsername('');
    setTechs('');
  };

  return(
    <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input value={github_username} onChange={(e) => setGithubUsername(e.target.value)} name="github_username" id="github_username" required type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Skils</label>
            <input value={techs} onChange={(e) => setTechs(e.target.value)} name="techs" id="techs" required type="text"/>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input onChange={(e) => setLatitude(e.target.value)} name="latitude" id="latitude" required type="number" value={latitude}/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input onChange={(e) => setLongitude(e.target.value)} name="longitude" id="longitude" required type="number" value={longitude}/>
            </div>
          </div>
          <button>Salvar</button>
        </form>
  );  
};

export default DevForm;