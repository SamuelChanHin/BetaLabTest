import React from "react";

function useRenderCounter() {
  const renderCountRef = React.useRef(0);
  React.useEffect(() => {
    renderCountRef.current += 1;
  });

  return { renderCount: renderCountRef.current };
}

export default useRenderCounter;
