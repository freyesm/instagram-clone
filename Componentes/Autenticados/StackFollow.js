import { createStackNavigator} from "react-navigation";
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import TabFollow from "./TabFollow";

const StackFollow = createStackNavigator(
    {
        TabFollow:{
            screen: TabFollow,
            navigationOptions:{
                header: null,
            }
        },
        Publicacion: Publicacion,
        Autor: Autor,
        Comentarios: {
            screen: Comentarios,
            navigationOptions:{
                tabBarVisible: false
            }
        }
    }
);

StackFollow.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === "Comentarios") {
                tabBarVisible = false;
            } else {
                tabBarVisible = true;
            }
        });
    }

    return {
        tabBarVisible
    };
};
export default StackFollow;
