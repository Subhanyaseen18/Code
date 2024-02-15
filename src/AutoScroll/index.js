import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import styles from './style.';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function AutoScroll() {
  const [activeIndex, setactiveIndex] = useState(0);
  const ref = useRef();
  const screenWidth = Dimensions.get('window').width;
  const carouselData = [
    {
      id: 1,
      image: require('../../assets/image/pic1.jpeg'),
    },
    {
      id: 2,
      image: require('../../assets/image/pic2.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/image/pic3.jpeg'),
    },
  ];
  //   autoScroll
  useEffect(() => {
    //   if active index===last index =>jump back to the first index
    //  else  activeindex +1
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        ref.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        ref.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  });
  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  //   render dot indicators
  const dotIndicators = () => {
    return carouselData.map((dot, index) => {
      return (
        <View
          key={index}
          style={[activeIndex == index ? styles.dot : styles.dots]}></View>
      );
    });
  };
// get index current image show 
  const handleScroll = event => {
    const scrollPossition = event.nativeEvent.contentOffset.x;
    const index = scrollPossition / wp(100);
    setactiveIndex(index);
  };
  return (
    <View>
      <FlatList
        onScroll={handleScroll}
        horizontal
        pagingEnabled={true}
        data={carouselData}
        showsHorizontalScrollIndicator={false}
        ref={ref}
        getItemLayout={getItemLayout}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <Image source={item.image} style={styles.img} />
            </View>
          );
        }}
      />
      <View style={styles.containerDot}>{dotIndicators()}</View>
    </View>
  );
}
