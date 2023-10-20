import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,Feather,FontAwesome5,Ionicons} from 'react-native-vector-icons/'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react'
import HomeStack from './Home/HomeStack';
import StackAccount from './Account/StackAccount';
import MyAcademyStack from './Academy_admin/myAcademyStack'
import CoachStack from './Coach_interface/CoachStack';
import LoginStack from './Login/LoginStack';
const Tab = createBottomTabNavigator()
const listRoute = ["Feed", "HomePage", "AccountDetails", "HomeRoot", "AcademyList", "Map", "PoolList", "Login","SignUp", "ForgotPassword"]

export default function UserInterface({role, token}) {

  return (    
    <>
      {token == null ?
        <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {backgroundColor:'#F8F8F8', paddingBottom:10,paddingTop:10,height:60},
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = "search"
                return <Feather name={iconName} size={size} color={color} />;

              } 
              else if (route.name === 'Account') {
                iconName = "login-variant" 
                const sizeAccount = 25
                return <MaterialCommunityIcons name={iconName} size={sizeAccount} color={color} />;
              }
            },
            style: {
              backgroundColor: '#888',
            },
            tabBarActiveTintColor: '#55A9FF',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
            name="Home"
            component={HomeStack}
            options={({route}) => ({
              tabBarStyle: {display: 
                getTabBarVisibility(route),
                backgroundColor:'#F8F8F8',
                paddingBottom:10,paddingTop:10,height:60
              }
            })}
          />
        
          <Tab.Screen 
            name="Account"
            component={LoginStack}

            options={({route}) => ({
              tabBarStyle: {display: 
                getTabBarVisibility(route),
                backgroundColor:'#F8F8F8',
                paddingBottom:10,paddingTop:10,height:60
              }
            })}
          />

        </Tab.Navigator>
      :
        <>
        {role == "user" ?
          <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {backgroundColor:'#F8F8F8', paddingBottom:10,paddingTop:10,height:60},
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = "search"
                  return <Feather name={iconName} size={size} color={color} />;
                }
                if (route.name === 'My courses') {
                  iconName = "clipboard-list-outline"
                  const sizeicon = 27
                  return <MaterialCommunityIcons name={iconName} size={sizeicon} color={color} />;
                } 
                else if (route.name === 'Account') {
                  iconName = "account" 
                  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                }
              },
              style: {
                backgroundColor: '#888',
              },
              tabBarActiveTintColor: '#55A9FF',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen 
                name="Home"
                component={HomeStack}
                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />
            <Tab.Screen 
                name="My courses"
                component={HomeStack}
                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />
            <Tab.Screen 
                name="Account"
                component={StackAccount}

                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />

            
          </Tab.Navigator>
          :
          <></>
        }
        { role == "academyAdmin" ?
          <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {backgroundColor:'#F8F8F8', paddingBottom:10,paddingTop:10,height:60},
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = "search"
                  return <Feather name={iconName} size={size} color={color} />;

                } else if (route.name === 'My academy') {
                  let sizehotel = 20
                  iconName = "hotel" 
                  return <FontAwesome5 name={iconName} size={sizehotel} color={color} />;
                }
                else if (route.name === 'Account') {
                  iconName = "account" 
                  const sizeAccount = 28
                  return <MaterialCommunityIcons name={iconName} size={sizeAccount} color={color} />;
                }
              },
              style: {
                backgroundColor: '#888',
              },
              tabBarActiveTintColor: '#55A9FF',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen 
                name="Home"
                component={HomeStack}
                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />
            <Tab.Screen 
              name="My academy"
              component={MyAcademyStack}

              options={({route}) => ({
                tabBarStyle: {display: 
                  getTabBarVisibility(route),
                  backgroundColor:'#F8F8F8',
                  paddingBottom:10,paddingTop:10,height:60
                }
              })}
            />
            <Tab.Screen 
                name="Account"
                component={StackAccount}

                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />

          </Tab.Navigator>
        :<></>
        }
        {role == "coach" ?
          <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {backgroundColor:'#F8F8F8', paddingBottom:10,paddingTop:10,height:60},
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = "search"
                  return <Feather name={iconName} size={size} color={color} />;
                } 

                if (route.name === 'My students') {
                  iconName = "people"
                  return <Ionicons name={iconName} size={size} color={color} />;
                } 

                else if (route.name === 'Account') {
                  iconName = "account" 
                  const sizeAccount = 28
                  return <MaterialCommunityIcons name={iconName} size={sizeAccount} color={color} />;
                }
              },
              style: {
                backgroundColor: '#888',
              },
              tabBarActiveTintColor: '#55A9FF',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen 
                name="Home"
                component={HomeStack}
                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />
            <Tab.Screen 
              name="My students"
              component={CoachStack}

              options={({route}) => ({
                tabBarStyle: {display: 
                  getTabBarVisibility(route),
                  backgroundColor:'#F8F8F8',
                  paddingBottom:10,paddingTop:10,height:60
                }
              })}
            />
            <Tab.Screen 
                name="Account"
                component={StackAccount}

                options={({route}) => ({
                  tabBarStyle: {display: 
                    getTabBarVisibility(route),
                    backgroundColor:'#F8F8F8',
                    paddingBottom:10,paddingTop:10,height:60
                  }
                })}
            />

          </Tab.Navigator>
          :
          <></>
        }
        </>
      }
    </>
  );
}

 const getTabBarVisibility = (route) => {
  //console.log(route)
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  const  found = listRoute.find(e => e == routeName);

  if (found)
    return 'flex'
  else
    return 'none'

 }

