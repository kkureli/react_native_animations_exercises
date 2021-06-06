/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

const ThirddAnimations = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const translateX = useState(new Animated.Value(0))[0];
  const rotateY = useState(new Animated.Value(0))[0];

  const doAFlip = () => {
    if (isFlipped) {
      Animated.timing(rotateY, {
        duration: 600,
        toValue: 0,
        useNativeDriver: true
      }).start();
      Animated.timing(translateX, {
        duration: 600,
        toValue: 0,
        useNativeDriver: true
      }).start(() => {
        setIsFlipped(!isFlipped);
      });
    } else {
      Animated.timing(rotateY, {
        duration: 600,
        toValue: 60,
        useNativeDriver: true
      }).start();
      Animated.timing(translateX, {
        duration: 600,
        toValue: -Dimensions.get('window').width * 0.24,
        useNativeDriver: true
      }).start(() => {
        setIsFlipped(!isFlipped);
      });
    }
  };

  const interpolatedValueFront = rotateY.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  console.log(rotateY);

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.child,
            {
              transform: [
                {
                  perspective: responsiveHeight(100),
                  translateX: translateX,
                  rotateY: interpolatedValueFront
                }
              ]
            }
          ]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam
            facere provident vero voluptatem quas non voluptatum perferendis
            suscipit cupiditate error voluptates consequuntur ratione explicabo
            ipsa, veritatis modi dicta iste eligendi tempore. Asperiores
            cupiditate similique provident nesciunt et. Odio sequi sapiente
            nulla aperiam doloribus alias quibusdam facilis tempora, ut iusto
            eos illo at, rem magni error, veritatis quae ullam molestias quia
            voluptates deserunt consequatur? Saepe architecto vel nesciunt iste
            dolore error, minima incidunt quaerat adipisci corrupti. Perferendis
            earum ducimus quod ipsa fugit magnam nisi ut temporibus, quis at
            amet quas debitis voluptate voluptatum facere, obcaecati asperiores
            beatae aliquid sequi maxime iusto doloremque porro eos vitae.
            Laudantium, impedit neque non blanditiis alias doloremque corrupti
            cumque voluptatibus vel aliquid id voluptate quisquam dolorem,
            sapiente quaerat. Corporis optio nisi asperiores placeat provident.
            Quia rem sunt beatae consectetur, quae cum amet eius laudantium in
            voluptatem excepturi dolorem non. Amet magnam eaque culpa pariatur
            nulla obcaecati repudiandae at consequatur optio incidunt,
            asperiores, ad porro voluptates ea, ipsa reiciendis maiores. Odio
            ullam odit vero, sunt eaque necessitatibus optio illo fugit
            architecto itaque quae. Blanditiis aliquam libero impedit cum
            sapiente obcaecati voluptatum eos saepe harum accusantium sit
            perspiciatis debitis nostrum doloribus quis natus nemo quaerat, quod
            nisi necessitatibus sed tempora culpa hic. Dolorum fugiat commodi
            officiis optio tempore quae amet aliquam delectus. Itaque quis
            voluptate cum! Iure atque cupiditate, molestias fugiat voluptates
            perferendis quaerat rerum, qui id accusamus libero nisi itaque porro
            vitae quas. Molestiae velit facere labore, ducimus unde doloribus in
            eius, vitae omnis facilis provident quis? Laboriosam, quidem
            tempora. Illum illo excepturi suscipit eius non ut blanditiis
            similique laborum. Placeat vel iste hic repudiandae, numquam iusto,
            autem perferendis facere aliquam, in omnis fuga. Nesciunt vitae
            sequi voluptas aspernatur maiores quibusdam exercitationem minima
            voluptatibus eum officia quisquam placeat, velit quos amet at harum
            molestiae pariatur! Neque exercitationem, alias laborum temporibus
            quisquam vitae, corrupti laboriosam minima esse expedita officiis
            est eaque architecto nam, quas quidem fugit eligendi aut delectus
            illum! Non veniam dignissimos quo ab consequuntur laboriosam quas,
            eius quos nam et vitae, aliquid totam. Consequatur consequuntur
            illum distinctio, sit eos numquam facere cum ducimus tempora
            perferendis esse aliquid ab adipisci expedita fugit sed saepe fugiat
            eligendi id. Excepturi, officiis voluptas. Est ea, perferendis
            excepturi repellat cum, dolore voluptatem libero odio qui hic sequi,
            repellendus doloribus laboriosam. Fuga architecto dignissimos
            nesciunt maiores ullam, unde, amet incidunt quo quae quos sunt
            libero, laboriosam nulla dolor odit eos tempora!
          </Text>
        </Animated.View>
        <TouchableOpacity
          onPress={doAFlip}
          style={{
            position: 'absolute',
            bottom: 10,
            backgroundColor: 'red',
            alignSelf: 'center',
            padding: 10
          }}>
          <Text>Bas</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1
  },
  child: {
    flex: 1,
    backgroundColor: 'blue'
  }
});

export default ThirddAnimations;
