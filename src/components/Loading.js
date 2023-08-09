import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const Loading = () => {
  const [progress, setProgress] = useState(25);
  useEffect(() => {
    setProgress(100);
  }, []);
  return (
      <LoadingBar color="#6254F3" progress={progress} height={4}/>
  );
};

export default Loading;
