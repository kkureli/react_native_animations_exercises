/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

const HomeScreen = () => {
  // const value = useState(new Animated.Value(0))[0]
  const [value, setValue] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 0
    })
  );

  const [count, setCount] = useState(0);

  const moveBall = () => {
    if (count === 0) {
      Animated.timing(value, {
        toValue: {x: 10, y: responsiveHeight(50)},
        duration: 2000
      }).start();
      setCount(1);
    } else {
      Animated.timing(value, {
        toValue: {x: 0, y: 0},
        duration: 1000
      }).start();
      setCount(0);
    }
  };

  // useEffect(() => {
  //   moveBall();
  // }, []);

  return (
    <View>
      <Animated.View style={[value.getLayout(), {alignSelf: 'center'}]}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'red'
          }}
        />
      </Animated.View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 60,
          marginTop: 100,
          borderRadius: 10,
          backgroundColor: 'silver'
        }}
        onPress={moveBall}>
        <Text>BAS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
