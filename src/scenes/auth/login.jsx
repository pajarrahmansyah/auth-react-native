import React, { useEffect, useState } from 'react';
import { withSession } from '@mile-hi-labs/react-native-session';
import { withStore } from '@mile-hi-labs/react-data';
import Axios from 'axios';
import { ScrollView, View, Text } from 'react-native';
import { Button, ButtonText } from 'components/basics/buttons';
import { Form, FormGroup, FormLabel } from 'components/basics/forms';
import { TextInputWrapper } from 'components/basics/inputs';
import { BasicScene } from 'components/basics/scenes';

const LOGIN_URL = 'https://library-api.milehilabs.dev/auth/login';

const LoginScene = (props) => {
	const { navigation, route, session, store } = props;
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ taskRunning, setTaskRunning ] = useState(false);


  // Methods
  const submitForm = async () => {
    try {
      setTaskRunning(true);
      let data = store.serializerFor('app').serialize({ email: email, password: password });
      let response = await Axios.post(LOGIN_URL, data);
      let user = store.serializerFor('app').normalize(response.data.data);
      await session.authenticate('user', user);
      navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
    } catch (e) {
      console.log('error: ', e);
    } finally {
      setTaskRunning(false);
    }
  }


  // Render
  return (
    <BasicScene>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={{flex: 1, width: '100%', padding: 15, backgroundColor: '#FFFFFF'}}>
          <Form>
            <FormGroup label='Email'>
              <TextInputWrapper
                value={email}
                placeholder='robert@hollywood.com'
                onChangeText={value => setEmail(value)}
              />
            </FormGroup>

            <FormGroup label='Password'>
              <TextInputWrapper
                value={password}
                secureTextEntry={true}
                placeholder='••••••••'
                onChangeText={value => setPassword(value)}
              />
            </FormGroup>

            <FormGroup style={{paddingTop: 15}}>
              <Button taskRunning={taskRunning} onPress={() => submitForm()}>Login</Button>
            </FormGroup>

            <FormGroup>
              <View style={{paddingTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Text style={{marginRight: 5}}>Don't have an account?</Text>
                <ButtonText onPress={() => navigation.navigate('Register')}>Register</ButtonText>
              </View>
            </FormGroup>

          </Form>
        </View>
      </ScrollView>
    </BasicScene>
  );
};

export default withSession(withStore(LoginScene));
