import { useState } from "react";

function useToggleState(initialVal = false) {
  const [state, setstate] = useState(initialVal);

  const toggle = () => {
    setstate(!state);
  };

  return [state, toggle];
}

export default useToggleState;
