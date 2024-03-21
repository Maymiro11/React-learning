import React from 'react';

const Button = () => {
    const handleClick = () => {
		alert("I'm a button!");
	};

    return <button onClick={handleClick}>Click me!</button>;
}

export default Button;