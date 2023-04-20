'use client';
import { useEffect, useState } from 'react';

export const useLightningState = () => {
  const [lightningState, setLightningState] = useState();

  useEffect(() => {
    console.log(window);
    if (typeof window !== 'undefined') {
      // const unsubscribe = window.LightningState?.subscribe(setLightningState);

      // return unsubscribe;
      return "";
    }
  }, []);

  const updateLightningState = window.LightningState?.next;

  return {
    lightningState,
    updateLightningState,
  };
};