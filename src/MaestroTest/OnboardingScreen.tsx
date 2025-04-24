import { ImageURISource, SafeAreaView, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useCallback } from 'react'
import ListItem from './ListItem';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import PaginationElement from './PaginationElement';
import Button from './Button';

const pages = [
    {
      text: 'Trusted by millions of people, part of one part',
      image: require('../assets/image1.png'),
    },
    {
      text: 'Spend money abroad, and track your expense',
      image: require('../assets/image2.png'),
    },
    {
      text: 'Receive Money From Anywhere In The World',
      image: require('../assets/image3.png'),
    },
  ];

const OnboardingScreen = ({navigation}: any) => {
    const x = useSharedValue(0);
    const flatListIndex = useSharedValue(0);
    const flatListRef = useAnimatedRef<
      Animated.FlatList<{
        text: string;
        image: ImageURISource;
      }>
    >();
  
    const onViewableItemsChanged = useCallback(
      ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        flatListIndex.value = viewableItems[0].index ?? 0;
      },
      []
    );
    const scrollHandle = useAnimatedScrollHandler({
      onScroll: (event) => {
        x.value = event.contentOffset.x;
      },
    });
  
    const renderItem = useCallback(
      ({
        item,
        index,
      }: {
        item: { text: string; image: ImageURISource };
        index: number;
      }) => {
        return <ListItem item={item} index={index} x={x} />;
      },
      [x]
    );
    
    return (
        <SafeAreaView style={styles.container}>
          <Animated.FlatList
            ref={flatListRef}
            onScroll={scrollHandle}
            horizontal
            scrollEventThrottle={16}
            pagingEnabled={true}
            data={pages}
            keyExtractor={(_, index) => index.toString()}
            bounces={true}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
          />
          <View style={styles.bottomContainer}>
            <PaginationElement length={pages.length} x={x} />
            <Button
              currentIndex={flatListIndex}
              length={pages.length}
              flatListRef={flatListRef}
              navigation={navigation}
            />
          </View>
        </SafeAreaView>
      );
    }
    
export default OnboardingScreen

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'gray'
      },
      bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
    });

