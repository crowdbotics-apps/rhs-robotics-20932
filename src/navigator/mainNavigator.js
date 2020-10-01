import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList119772Navigator from '../features/ArticleList119772/navigator';
import ArticleList119771Navigator from '../features/ArticleList119771/navigator';
import ArticleList119770Navigator from '../features/ArticleList119770/navigator';
import ArticleList119753Navigator from '../features/ArticleList119753/navigator';
import ArticleList119752Navigator from '../features/ArticleList119752/navigator';
import ArticleList119751Navigator from '../features/ArticleList119751/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList119772: { screen: ArticleList119772Navigator },
ArticleList119771: { screen: ArticleList119771Navigator },
ArticleList119770: { screen: ArticleList119770Navigator },
ArticleList119753: { screen: ArticleList119753Navigator },
ArticleList119752: { screen: ArticleList119752Navigator },
ArticleList119751: { screen: ArticleList119751Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
