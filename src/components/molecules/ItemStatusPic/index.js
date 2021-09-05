import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ItemStatusPic = ({ image, name }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 72,
        width: 57,
        marginHorizontal: 8,
      }}>
      <View
        style={{
          height: 57,
          width: 57,
          borderWidth: 2,
          borderColor: 'red',
          borderRadius: 57,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </View>
      <Text style={{ textAlign: 'center', fontSize: 11 }}>{name}</Text>
    </View>
  );
};

export default ItemStatusPic;

const styles = StyleSheet.create({});
