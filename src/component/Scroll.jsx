import React from 'react';
import FollowMouse from 'react-smart-mouse'

const Scroll = () => {
  return (
    <div>
      {/* Your other components */}
      <FollowMouse
        // Props for customizing the mouse follower appearance(optional)
        // Customize the styles for different elements
        pStyle={{ color: '#ff1749', height: '40px', width: '40px' }}
        aStyle={{ color: '#ff1749', height: '20px', width: '20px' }}
        liStyle={{ color: '#ff1749', height: '20px', width: '20px' }}

        buttonStyle={{ color: '#ff1749', height: '20px', width: '20px' }}
        // Specify default width and height for the mouse follower
        defaultWidth="35px"
        defaultHeight="35px"
        // Other optional props
        debug={true}
      />
    </div>
  );
};

export default Scroll;