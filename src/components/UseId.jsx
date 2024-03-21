import { useState } from 'react';

let id = 0;

const useId = () => {
  const [currentId] = useState(() => `id-${id++}`);
  return currentId;
};

export default useId;