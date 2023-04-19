import { useEffect, useState } from 'react';

export const useLightningState = () => {
  const [lightningState, setLightningState] = useState();

  useEffect(() => {
    const unsubscribe = window.LightningState?.subscribe(setLightningState);
console.log('window cretaed')
    return unsubscribe;
  }, []);

  const updateLightningState = window.LightningState?.next;

  return {
    lightningState,
    updateLightningState,
  };
};
