import React, { createContext, useState, useCallback, useContext } from 'react';

interface UserContextDTO {
  name: string;
  setUserName(name: string): void;
}

const UserNameContext = createContext<UserContextDTO>({} as UserContextDTO);

const UserNameProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userName = localStorage.getItem('@FranciscoVazWebsite:user');

    if (userName) {
      return userName;
    }

    return '';
  });

  const setUserName = useCallback(name => {
    localStorage.setItem('@FranciscoVazWebsite:user', name);
    setUser(name);
  }, []);

  return (
    <UserNameContext.Provider value={{ name: user, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};

function useUserName(): UserContextDTO {
  const context = useContext(UserNameContext);

  if (!context) {
    throw new Error('useUserName must be used within an UserNameProvider');
  }

  return context;
}

export { UserNameProvider, useUserName };
