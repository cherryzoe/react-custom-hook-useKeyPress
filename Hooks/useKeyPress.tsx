import { useState, useEffect } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const keyDown = ({ key }) => {
    targetKey === key ? setKeyPressed(true) : null;
  };

  const keyUp = ({ key }) => {
    targetKey === key ? setKeyPressed(false) : null;
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, []);

  return keyPressed; //return true only when the key is pressed down and before keyUp
};

export default useKeyPress;
