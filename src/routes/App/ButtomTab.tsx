import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import {TABS} from '../../utils/screens';
import Shows from '../../views/App/Tabs/Shows';
import Movies from '../../views/App/Tabs/Movies';

import {HomeIcon, MovieIcon, ShowIcon} from '../../utils/icons';
import {ThemedText} from '../../components/themed';

const Tab = createBottomTabNavigator();

const AppTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <StyledTabBarContainer>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;
        return (
          <StyledBottomTabItem
            onPress={() => {
              navigation.navigate(route.name);
            }}>
            {getIcon(index, isFocused)}
            {
              <ThemedText
                color={isFocused ? 'primaryLight' : 'primaryLighter'}
                fontSize="sm"
                mt={6}
                fontWeight="semibold">
                {label}
              </ThemedText>
            }
          </StyledBottomTabItem>
        );
      })}
    </StyledTabBarContainer>
  );
};

const ButtomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, lazy: false}}
      tabBar={AppTabBar}>
      <Tab.Screen name={TABS.MOVIES} component={Movies} />
      <Tab.Screen name={TABS.SHOWS} component={Shows} />
      {/* <Tab.Screen name={TABS.SETTINGS} component={More} /> */}
    </Tab.Navigator>
  );
};

const StyledTabBarContainer = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.background};
  height: 72px;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.lightGray};
`;

const StyledBottomTabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const ICONS = [
  <HomeIcon width={24} height={24} />,
  <MovieIcon />,
  <ShowIcon />,
  // <MoreIcon />,
];
const getIcon = (index: number, isFocused: boolean) => {
  const focusedColor = '#316EDB';

  return React.cloneElement(ICONS[index], {
    style: {
      color: isFocused ? focusedColor : '#316EDB99',
    },
  });
};

export default ButtomTab;
