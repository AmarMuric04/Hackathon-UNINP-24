import React from "react";

const TeacherContext = React.createContext({});

export const TeacherProvider = ({ children }: { children: any }) => {
  return (
    <TeacherContext.Provider value={{}}>{children}</TeacherContext.Provider>
  );
};
