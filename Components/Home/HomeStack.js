import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage'
import DetailsPool from './Pool/DetailsPool'
import AcademyDetails from'./Academy/AcademyDetails'
import Review from './Pool/Review';
import CoachList from './Coach/CoachList';
import PoolAcademy from './Pool/PoolAcademy';
import AcademyCoach from './Coach/AcademyCoach';
import CoachDetails from './Coach/CoachDetails';
import HomeRoot from './HomeRoot';
import Search from './Search';
import AcademyList from './Academy/AcademyList';
import SearchBar from './SearchBar';
import PoolList from './Pool/PoolList';
import Map from './Academy/Map';
const Stack = createNativeStackNavigator();

export default HomeStack = () => {
  return(
    <Stack.Navigator >
      <Stack.Screen name="HomeRoot" component={HomeRoot} options={{headerShown: false,}} />
      <Stack.Screen name="Search" component={Search} options={{headerShown: false,}}/>
      <Stack.Screen name="DetailsPool" component={DetailsPool} options={{headerShown: false,}}/>
      <Stack.Screen name="AcademyDetails" component={AcademyDetails} options={{headerShown: false,}}/>
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="AcademyCoach" component={AcademyCoach} />
      <Stack.Screen name="PoolAcademy" component={PoolAcademy} />
      <Stack.Screen name="CoachDetails" component={CoachDetails}  />
      
      <Stack.Screen name="AcademyList" component={AcademyList} options={{headerShown: false,}} />
      <Stack.Screen name="PoolList" component={PoolList} options={{headerShown: false,}} />
      <Stack.Screen name="CoachList" component={CoachList} options={{headerShown: false,}} />
      <Stack.Screen name="Map" component={Map} options={{headerShown: false,}} />
      
      <Stack.Screen name="SearchBar" component={SearchBar} options={{headerShown: false,}} />
    </Stack.Navigator>
  )
}