import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
export default function BtnScroll() {
  const [activeIndex, setactiveIndex] = useState(0);
  const ref = useRef();
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
    {
      id: 4,
      image: require('../../assets/image/pic1.jpeg'),
    },
    {
      id: 5,
      image: require('../../assets/image/pic2.jpg'),
    },
    {
      id: 6,
      image: require('../../assets/image/pic3.jpeg'),
    },
  ];

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: hp(6),
        }}>
        {activeIndex == 0 ? null : (
          <TouchableOpacity
            onPress={() => {
              setactiveIndex(activeIndex - 1);
              ref.current.scrollToIndex({
                index: activeIndex - 1,
                animation: true,
              });
            }}
            style={styles.containerBtn}>
            <Text style={styles.text}>Previous</Text>
          </TouchableOpacity>
        )}
        {carouselData.length - 1 == activeIndex ? null : (
          <TouchableOpacity
            onPress={() => {
              setactiveIndex(activeIndex + 1);
              ref.current.scrollToIndex({
                index: activeIndex + 1,
                animation: true,
              });
            }}
            style={styles.containerBtn}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
