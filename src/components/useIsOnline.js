import React from "react";
const useIsOnline = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    function a() {
      setIsOnline(true);
    }
    function b() {
      setIsOnline(false);
    }
    window.addEventListener("online", a);
    window.addEventListener("offline", b);

    return () => {
      window.removeEventListener("online", a);
      window.removeEventListener("offline", b);
    };
  }, []);
  return isOnline;
};

export default useIsOnline;
