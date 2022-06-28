import { useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

//ScrollView는 코틀린 List처럼 모든 항목을 로딩한다
//FlatList는 코틀린 RecyclerView와 같다

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => 
      [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])

    setModalIsVisible(false)

     //ScrollView 사용할때
    // setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal)=>goal.id !== id)
    })
  }

  console.log(enteredGoalText)

  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}/>
        <GoalInput
          goalInput = {goalInputHandler}
          addGoal = {addGoalHandler}
          endGoal = {endAddGoalHandler}
          visible = {modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            keyExtractor={(item, index)=> {
              return item.id
            }}
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem item={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
            }}/>
            
            {/* //ScrollView 사용할때
            <ScrollView>
              {courseGoals.map((goal, idx)=>(
                <Text 
                  key={idx}
                  style={styles.goalItem}>
                  {goal}
                </Text>
              ))} 
            </ScrollView> */}
        </View> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'orange'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white'
  }
});