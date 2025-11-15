import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MemeApp() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const API = 'https://api.imgflip.com/get_memes';

    async function fetchMemes() {
      try {
        const resp = await axios.get(API);
        const memesData = resp.data?.data?.memes;
        setMemes(memesData || []);
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    }

    fetchMemes();
  }, []);

  return (
    <div>
      <h1>Memes List</h1>
      {memes.length === 0 ? (
        <p>Loading memes...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {memes.map((meme) => (
            <div key={meme.id} style={{ width: '200px' }}>
              <img src={meme.url} alt={meme.name} style={{ width: '100%' }} />
              <p>{meme.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MemeApp;
