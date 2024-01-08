// short-link-app/src/components/CreateLink.js
import React, { useState } from 'react';
import LinkService from './LinkService';

const CreateLink = () => {
  const [linkData, setLinkData] = useState({ url: '' });

  const handleCreateLink = async () => {
    try {
      const response = await LinkService.createLink(linkData);
      // Handle link creation success
      console.log('Link Created Successfully:', response);
    } catch (error) {
      // Handle link creation failure
      console.error('Link Creation Failed:', error);
    }
  };

  return (
    <div className="create-link-container">
      <label>URL:</label>
      <input type="text" value={linkData.url} onChange={(e) => setLinkData({ ...linkData, url: e.target.value })} />

      <button onClick={handleCreateLink}>Create Link</button>
    </div>
  );
};

export default CreateLink;
