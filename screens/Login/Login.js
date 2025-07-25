import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Pressable, View, Text } from 'react-native';
import Input from '../../components/Input/Input';

import style from './style';
import globalStyle from '../../assets/styles/globalstyle';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import Routes from '../../navigation/Routes';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/User';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 6}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully logged in');
                dispatch(logIn(user.data));
                setTimeout(() => navigation.navigate(Routes.Home), 3000);
              }
            }}
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}
        >
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
