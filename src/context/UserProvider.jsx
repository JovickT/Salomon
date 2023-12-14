import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: " ",
        password: "",
    });

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
};

export { UserContext, UserProvider };