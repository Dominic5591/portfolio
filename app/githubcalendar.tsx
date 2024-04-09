import React, { useEffect } from 'react';
import GitHubCalendar from 'github-calendar';

const MyGitHubCalendar = () => {
  useEffect(() => {
    GitHubCalendar('#github-calendar', 'Dominic5591', {
      responsive: true,
      cache: true,
      summary_text: 'Summary',
      global_stats: false,
      tooltips: true,
      colors: {
        // background: 'transparent',
        text: '#c9d1d9',
        grade4: '#196127',
        grade3: '#239a3b',
        grade2: '#7bc96f',
        grade1: '#c6e48b',
        grade0: '#ebedf0',
      },
      size: 'large',
    });
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />
      <div id="github-calendar"></div>
    </>
  );
};

export default MyGitHubCalendar;
