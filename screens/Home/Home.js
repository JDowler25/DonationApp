import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import globalStyle from '../../assets/styles/globalstyle';
import style from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    const initialList = pagination(categories.categories, 1, categoryPageSize);
    setCategoryList(initialList);
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, [categories.categories]);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        globalStyle.padding,
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search placeholder={'Search'} />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
            style={style.highlightedImage}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              console.log(
                'User has reached the end and we are getting more data for page number ',
                categoryPage,
              );
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={id =>
                    dispatch(updateSelectedCategoryId({ categoryId: id }))
                  }
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
