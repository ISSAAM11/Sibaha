import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState,} from 'react'
import UserInterface from './Components/UserInterface';
import SplashScreen from './Components/SplashScreen'
import LoginStack from "./Components/Login/LoginStack"
import { AuthContext } from './AuthContext';
import * as SecureStore from 'expo-secure-store';

export default function App() {
  
  const [userToken, setUserToken] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [isloading, setIsLoading] = useState(true)
  const [role, setRole] = useState("")

  useEffect( () => {
    const bootstrapAsync = async () => {
      let userToken;
      let Role;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
        Role = await SecureStore.getItemAsync('role');
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken, userRole: Role });
    };
    bootstrapAsync();  
    setTimeout( async ()=> {  
      setIsLoading (false)
    }, 5000)
  },[])

  const [loginState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userRole: action.userRole,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userRole: action.userRole,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userRole: null,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userRole: null,
      userToken: null, 
    }
  );

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password ) => {
      // setUserToken("test")
      // setIsLoading(false)    
      let userToken = "token 123"
      let role = null;
      if( userName == "admin")
          role = "academyAdmin"
      else if( userName == "user")
          role = "user"
      else if( userName == "coach")
           role = "coach"
      else {
        userToken = null; 
        role = null
        alert( "Email or password invalid" )
      }
      try {
        await SecureStore.setItemAsync('userToken',  userToken)  
        await SecureStore.setItemAsync('role',  role)  
      }catch(e) {
        console.log(e)
      } 
      dispatch({ type: 'SIGN_IN', token: userToken, userRole: role  });
    },
    signOut: async () => {
      try{
        await SecureStore.deleteItemAsync('userToken')
      }catch(e){
        console.log(e)
      }
      dispatch({ type: 'SIGN_OUT' })
    },
    signUp: () => {
      let userToken = "test token"
      let role = "1"
      dispatch({ type: 'SIGN_IN', token: userToken , userRole: role})
    }
  }), [])

  if(loginState.isloading){
    return (
      <SplashScreen/>
    )
  }
  
  return (    
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          
            <UserInterface role={loginState.userRole} token={loginState.userToken}/>

      </NavigationContainer>
    </AuthContext.Provider> 
  );

  /*
  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }
  const loginReducer = (prevState, action) => {
    switch( action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userName: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  };
 
  const [loginState, dispatch] = React.useReducer()
  */ 



  // const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [role, setRole] = useState(null);
  // const {userToken} = useContext(AuthContext)

/*
  const [isSignedIn ,setIsSignedIn ] = useState(false);
  const [isLoading ,setIsLoading ] = useState(false);
  const [userToken ,setUserToken] = useState(false);

  const [dispatchState, dispatch] = React.useReducer(
    (prevState, action) => {

      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  const AuthContext = React.createContext();
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) { 
        console.log( "token error" )
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      console.log(userToken)
      console.log(dispatchState)
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

*/

  
 /* 
  const isAuthenticated = false
  return (
      <NavigationContainer>
          {userToken == null
            ? <LoginStack/>
            : <UserInterface/>
          }
      </NavigationContainer>
  )*/
}