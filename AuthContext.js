//import { createContext, useState  } from 'react';
import React from 'react';


export const AuthContext = React.createContext()

/*
export const Authcontext = React.useContext()
*/


/*
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  role: null,
  login: () => {},
  logout: () => {},
});

const login = (username, password, role, setUser, setIsAuthenticated, setRole) => {
  // make an API call to authenticate the user
  // if the user is authenticated, update the state
  const user = { username, role };
  setUser(user);
  setIsAuthenticated(true);
  setRole(role);
};

const logout = (setUser, setIsAuthenticated, setRole) => {
  setUser(null);
  setIsAuthenticated(false);
  setRole(null);
};
export { AuthContext, login, logout };
*/

/*
export const AuthContext = createContext({
  userToken: null,
  isLaoding: false,
  login: () => {},
  logout: () => {},
  setUserToken: () => {},
})

const AuthProvider = ({Children}) => {
  const [isLaoding, setIsLaoding] = useState(true)
  const [userToken, setUserToken] = useState("fe")
  const [test, setTest] = useState("test 123")

  const login = (userToken) => {
    setUserToken(userToken);
    setIsLaoding(true);
  }
  const logout = () => {
    setUserToken("2");
    setIsLaoding(false);
  }

  return (
    <AuthContext value = {{login, logout, userToken, setUserToken}}>
      {Children}
    </AuthContext>
  )
}*/


/*
const AuthContext = createContext({
  user: "testt",
  isAuthenticated: false,
  role: null,
  login: () => {},
  logout: () => {},
});

const login = (username, password, role, setUser, setIsAuthenticated, setRole) => {
  // make an API call to authenticate the user
  // if the user is authenticated, update the state
  const user = { username, role };
  setUser(user);
  setIsAuthenticated(true);
  setRole(role);
};

const logout = (setUser, setIsAuthenticated, setRole) => {
  setUser(null);
  setIsAuthenticated(false);
  setRole(null);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Vérifiez les informations d'identification ici et définissez l'utilisateur en conséquence
    setUser({ email: email, role: 'user' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, login, logout };*/
