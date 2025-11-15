import React, { useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import axios from 'axios';

function Body() {
  const [allMemes, setAllMemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchMemes() {
      try {
        const resp = await axios.get('https://api.imgflip.com/get_memes');
        const memes = resp.data?.data?.memes || [];
        setAllMemes(memes);
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    }

    fetchMemes();
  }, []);

  const filteredMemes = allMemes.filter(meme =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-grey-50">

      <div className="text-center py-6 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-blue-800">Meme Template Viewer</h1>
      </div>

      <div className="px-4 py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <input
            type="text"
            placeholder="Search Memes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
          />
        </div>
      </div>

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredMemes.map(meme => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
