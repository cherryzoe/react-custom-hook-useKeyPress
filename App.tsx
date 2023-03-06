import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import useKeyPress from './Hooks/useKeyPress';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const shiftKey = useKeyPress('Shift');
  const enterKey = useKeyPress('Enter');

  useEffect(() => {
    shiftKey && enterKey === true
      ? toast.success('Enter and shift key pressed!')
      : null;
  }, [shiftKey, enterKey]);

  return (
    <div className="container">
      <Toaster />
      <h1>Shift+Enter</h1>
      <p>Hit shift + enter to show a toast! :)</p>
    </div>
  );
}
