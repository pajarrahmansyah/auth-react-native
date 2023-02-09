import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { withSession } from '@mile-hi-labs/react-native-session';
import { withStore } from '@mile-hi-labs/react-data';
import { useFocusEffect } from '@react-navigation/native';
import { Button } from 'components/basics/buttons';
import { BasicScene } from 'components/basics/scenes';

const ProfileScene = (props) => {
	const { navigation, route, session, store } = props;
  const [ user, setUser ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ taskRunning, setTaskRunning ] = useState(false);


  // Hooks
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  )


  // Methods
  const fetchData = async () => {
    try {
      setLoading(true);
      let model = await store.findRecord('user', session.user.id);
      setUser(model);
    } catch (e) {
      console.log('error: ', e);
    } finally {
      setLoading(false);
    }
  }

  const logout = async () => {
    setTaskRunning(true);
    await session.logout();
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
    setTaskRunning(false);
  }


  // Render
  return (
    <BasicScene>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={{flex: 1, justifyContent: 'center', width: '100%', height: '100%', padding: 15}}>
          <Text style={{fontSize: 24, marginBottom: 10}}>Hi, {user.name}</Text>
          <Text style={{fontSize: 16, marginBottom: 16}}>You are now logged in! This session will persist across app closures and coming/ going from the app.</Text>
          <Text style={{fontSize: 16, marginBottom: 16}}>Go ahead and test it out. When you're done, simply click logout.</Text>
          <Button taskRunning={taskRunning} onPress={() => logout()}>Logout</Button>
        </View>
      </ScrollView>
    </BasicScene>
  );
};

export default withSession(withStore(ProfileScene));
