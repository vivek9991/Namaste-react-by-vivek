import * as React from "react";
export const userContext = React.createContext({
  loggedInUser: "Dummy user",
  loggedInTime: "00:00:00",
  loggedInPlace: "Dummy location",
});
