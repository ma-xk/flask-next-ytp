import React from 'react';

const Spacer = () => {
    const style = {
        height: '125px', // Sets the height of the spacer to 50 pixels
        width: '100%',  // Ensures the spacer takes the full width of its container
        // You can add additional styles if needed, like background color, etc.
    };

    return <div style={style} />;
}

export default Spacer;