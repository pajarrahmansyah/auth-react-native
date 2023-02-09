import React, {Fragment, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Scenes
import ProfileScene from 'scenes/main/profile';

const Tab = createBottomTabNavigator();

const MainNav = props => {
  const {navigation, route, session, store} = props;

  // Render
  return (
    <Tab.Navigator initialRouteName="MainProfile">
      <Tab.Screen
        name="MainProfile"
        component={ProfileScene}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNav;
