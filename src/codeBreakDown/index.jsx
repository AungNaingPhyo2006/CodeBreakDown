import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { data } from '../model';

const index = () => {
  const [updatedList, setUpdatedList]= useState([])

  useEffect(() => {
    getData()
  }, [])

  console.log("Data =>", data)

  const getData = () => {
      if (Array.isArray(data)) {
      const updatedItems = data.map((item) => {
          if (item.ApproverDetail) {
              const approverDetails = item.ApproverDetail.split(
                  '||',
              ).map((detail) => {
                  const [name, status, action] =
                      detail.split(' $$ ');
                  let color = 'gold'; 
                  switch (action.trim().toLowerCase()) {
                      case 'pending':
                          color = 'blue';
                          break;
                      case 'approved':
                          color = 'green';
                          break;
                      case 'rejected':
                          color = 'red';
                          break;
                      case 'inaction':
                          color = 'gold';
                          break;
                      default:
                          color = 'gold';
                  }
                  return {
                      ApproverName: name.trim(),
                      ApproverComment: action.trim(),
                      ApproverStatus: status.trim(),
                      color: color,
                  };
              });

              return {
                  ...item,
                  ApproverDetail: approverDetails,
              };
          } else {
              return item;
          }
      });
      setUpdatedList(updatedItems);
  } else {
       console.log('Unexpected response format:', data);
  }
  }
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
