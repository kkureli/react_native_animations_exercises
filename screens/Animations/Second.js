/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

const SecondAnimations = () => {
  const leftValue = useState(new Animated.Value(0))[0];
  const opacityValue = useState(new Animated.Value(0))[0];
  const textValue = useState(new Animated.Value(0))[0];
  const textOpacity = useState(new Animated.Value(1))[0];

  const [count, setCount] = useState(0);

  const moveBall = () => {
    if (count === 0) {
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      }).start();
      setTimeout(() => {
        Animated.spring(leftValue, {
          toValue: 100,
          speed: 0.5,
          useNativeDriver: true
        }).start();
        setCount(1);
      }, 1500);
    } else {
      Animated.timing(leftValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }).start();
      setTimeout(() => {
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        }).start();
      }, 400);

      setCount(0);
    }
  };
  //   const moveBall = () => {
  //     if (count === 0) {
  //       Animated.spring(leftValue, {
  //         toValue: 100,
  //         speed: 0.5,
  //         useNativeDriver: true
  //       }).start();
  //       setCount(1);
  //     } else {
  //       Animated.timing(leftValue, {
  //         toValue: 0,
  //         duration: 400,
  //         useNativeDriver: true
  //       }).start();
  //       setCount(0);
  //     }
  //   };

  // useEffect(() => {
  //   moveBall();
  // }, []);

  const translateText = () => {
    Animated.timing(textValue, {
      toValue: 15,
      duration: 800,
      useNativeDriver: true
    }).start();
    setTimeout(() => {
      Animated.timing(textValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }).start();
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }).start();
    }, 1200);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323232'
      }}>
      <Animated.View
        style={[
          {
            alignSelf: 'center',
            transform: [{translateX: leftValue}],
            opacity: opacityValue
          }
        ]}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'orange'
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{scale: textValue, rotate: textValue}],
          opacity: textOpacity
        }}>
        <Text style={{color: 'white'}}>aa</Text>
      </Animated.View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 60,
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: 'silver'
        }}
        onPress={translateText}
        // onPress={moveBall}
      >
        <Text>BAS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondAnimations;

const styles = StyleSheet.create({});
