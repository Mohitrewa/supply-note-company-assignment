// short-link-app/src/components/Analytics.js
import React from 'react';
import LinkService from './LinkService';

const Analytics = () => {
  const linkId = 'shortlink123'; // Set the linkId from your application logic

  const handleGetAnalytics = async () => {
    try {
      const analytics = await LinkService.getAnalytics(linkId);
      // Handle analytics data
      console.log('Analytics Data:', analytics);
    } catch (error) {
      // Handle error
      console.error('Failed to Fetch Analytics:', error);
    }
  };

  return (
    <div className="analytics-container">
      <button onClick={handleGetAnalytics}>Get Analytics</button>
    </div>
  );
};

export default Analytics;
