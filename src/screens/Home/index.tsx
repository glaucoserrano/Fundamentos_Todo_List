import { View,Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { FlatList } from "react-native";
import { TaskDTO } from "../../dtos/taskDTO";
import { useState } from "react";
import { Empty } from "../../components/Empty";
import { uuid } from "../../utils/uuid";



export function Home(){
  const[tasks,setTasks] =useState<TaskDTO[]>([])
  const[newTask,setNewTask] = useState('')


  function handleTaskAdd(){
    if(newTask !=='' && newTask.length >=5)
    {
      setTasks((tasks) => [
        ...tasks,
        {id:uuid(),isCompleted: false,title:newTask.trim()},
      ])

      setNewTask('')
    }
  }

  return(
    <View style={styles.container}>
      <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd}/>
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View>
        <FlatList 
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({item}) => (
            <Task 
              key={item.id} 
              isCompleted={item.isCompleted} 
              title={item.title}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
        {/* <Task title="Estudar React Native" isCompleted />
        <Task title="Estudar React Native" isCompleted={false} />
        <Task title="Estudar React Native" isCompleted /> */}
      </View>
    </View>
  )
}