import React, { useState, useEffect } from 'react';

const Time = () => {
const [now, setNow] = useState(new Date());

useEffect(() => {
    const id = setInterval(() => {
setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
}, []);

return (
    <div style={containerStyle}>
    <h1>Welcome To Live Product Feedback</h1>
    <h2>Current Local Date & Time:</h2>
    <p style={timeStyle}>{now.toLocaleString()}</p>
    </div>
);
};

// styles

const containerStyle = {
fontFamily: 'Segoe UI, Arial, sans-serif',
textAlign: 'center',
marginTop: '50px',
backgroundColor: '#ADD8E6',
padding: '30px',
borderRadius: '10px',
};
const timeStyle = {
fontSize: '2rem',
color: '#333',
};

export default Time;
