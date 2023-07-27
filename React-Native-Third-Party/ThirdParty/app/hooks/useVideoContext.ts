import { useState } from 'react';

const useVideContext = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  return [currentVideo, setCurrentVideo];
};

export default useVideContext;
