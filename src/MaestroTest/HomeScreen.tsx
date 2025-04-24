import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation, route }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.title}</Text>

      <View style={styles.card}>
        <Text style={styles.motto}>
          "The only way to do great work is to love what you do."
        </Text>
        <Text style={styles.author}>— Steve Jobs</Text>
      </View>

      <Button
        testID='Finish'
        title="Finish"
        onPress={() => navigation.navigate('OnboardingScreen')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 50,
    marginBottom: 30,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  motto: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    fontWeight:'bold'
  },
  author: {
    marginTop: 10,
    textAlign: 'right',
    fontWeight: '500',
    color: '#666'
  }
})
