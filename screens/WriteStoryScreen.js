import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
 
export default class WriteStoryScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'lightblue'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 32}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    placeholderTextColor='black'
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    placeholderTextColor='black'
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    placeholderTextColor='black'
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 10,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 15,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 10,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,
      color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  }
});