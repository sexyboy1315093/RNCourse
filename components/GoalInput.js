import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import House from '../assets/images/house.png'

function GoalInput(props){
    return(
        <>
        <StatusBar style='light'/>
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                {/* <Image source={House} */}
                <Image style={styles.image} source={require('../assets/images/house.png')}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal!!'
                    onChangeText={props.goalInput}
                />
                <View style={styles.bottomContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal'
                            onPress={props.addGoal}/>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancle'
                            color={'#cecece'}
                            onPress={props.endGoal}/>
                    </View>
                </View>
            </View>
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',   
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'orange'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 8
      },
      bottomContainer: {
          marginTop: 16,
          flexDirection:'row'
      },
      button: {
          width: '30%',
          marginHorizontal: 8
      },
      image: {
          width: 100,
          height: 100,
          margin: 20
      }
})

export default GoalInput;