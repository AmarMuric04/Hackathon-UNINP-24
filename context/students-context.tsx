import React from "react";

const StudentContext = React.createContext({});

export const StudentProvider = ({ children }: { children: any }) => {
  return (
    <StudentContext.Provider value={{}}>{children}</StudentContext.Provider>
  );
};
