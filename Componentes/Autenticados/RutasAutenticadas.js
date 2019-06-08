import {createBottomTabNavigator, createAppContainer} from "react-navigation"
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import StackFollow from './StackFollow';
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator(
    {
        Home:{
            screen: StackHome
        },
        Search:{
            screen: StackSearch
        },
        Add:{
            screen: Add
        },
        Follow: {
            screen: StackFollow
        },
        Profile: {
            screen: Profile
        }
    }
);

export default createAppContainer(RutasAutenticadas);
