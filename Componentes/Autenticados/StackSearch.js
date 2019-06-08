import { createStackNavigator} from "react-navigation";import Search from './Search';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackSearch = createStackNavigator(
    {
        Search: Search,
        Publicacion: Publicacion,
        Autor: Autor,
        Comentarios: {
            screen: Comentarios,
            navigationOptions:{
                tabBarVisible: false
            }
        }
    },
    {
        headerMode: "screen"
    }
);

StackSearch.navigationOptions = ({ navigation }) => {
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
export default StackSearch;
