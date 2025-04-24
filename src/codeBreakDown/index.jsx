import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { data } from '../model';

const index = () => {

  return (
    <View style={{flex:1, backgroundColor: 'blue'}}>

     <View style={{ height:100 , backgroundColor:'cyan'}}>
      <View style={{flexDirection:'row'}}>
       <Text style={{color:'blue'}}>Header</Text>
       <Text style={{color:'blue'}}>Title</Text>
      </View>
     </View>

     <View style={{flex:1, backgroundColor:'red'}}>
      <Text style={{color:'white'}}>Content</Text>
     </View>

     <View style={{ height: 100, backgroundColor:'green'}}>
      <Text style={{color:'white'}}>Footer</Text>
     </View> 

    </View>
  );
};

export default index;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txtStyle: {
      fontSize:24,
      color: 'blue'
    }
});
