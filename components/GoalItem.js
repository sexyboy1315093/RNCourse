import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props){
    return(
        <View>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color:'#dddddd'}}>
                <Text style={styles.goalItem}>
                    {props.item}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        color: 'white'
    }
})

export default GoalItem;