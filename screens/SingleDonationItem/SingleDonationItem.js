import React from 'react';

import style from './style';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyle from '../../assets/styles/globalstyle';
import BackButton from '../../components/BackButton/BackButton';

const SingleDonationItem = ({ navigation }) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(donationItemInformation);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
