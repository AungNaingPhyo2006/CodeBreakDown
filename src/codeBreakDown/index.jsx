import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { data } from '../model';

const index = () => {
 const [updatedList , setUpdatedList] = useState([])
  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    if(Array.isArray(data)){
      const updatedItems = data.map((item) => {
        if(item.ApproverDetail) {
          const approverDetails = item.ApproverDetail?.split('||').map((detail)=>{
            const [name , status , action] = detail.split(' $$ ')
            return {
              ApproverName : name.trim(),
              ApproverStatus: status.trim(),
              ApproverAction : action.trim()
            }
          })
        return {
          ...item,
          ApproverDetail : approverDetails
        }
        }else {
          return item;
        }
     
      })   
      setUpdatedList(updatedItems)
    }else{
      console.log("No Array format!")
    }
 
  }

  console.log('UpdatedItems=>', updatedList)

  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Code Breakdown</Text>
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
