import { View,Text, Alert, TextInput } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { FlatList } from "react-native";
import { TaskDTO } from "../../dtos/taskDTO";
import { useRef, useState } from "react";
import { Empty } from "../../components/Empty";
import { uuid } from "../../utils/uuid";



export function Home(){
  const[tasks,setTasks] =useState<TaskDTO[]>([])
  const[newTask,setNewTask] = useState('')
  const newTaskInputRef = useRef<TextInput>(null)

  function handleTaskAdd(){
    if(newTask !=='' && newTask.length >=5)
    {
      setTasks((tasks) => [
        ...tasks,
        {id:uuid(),isCompleted: false,title:newTask.trim()},
      ])

      setNewTask('')
      
      newTaskInputRef.current?.blur()
    }
  }

  function handleTaskDone(id: string){
    
    setTasks((task) => 
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted): null
        return task
      }),
    )
  }
  function handleTaskDelete(id: string){
    Alert.alert('Excluir Tarefa', 'Deseja excluir essa tarefa?',[{
      text: 'Sim',
      style:'default',
      onPress: () => 
        setTasks((task) =>
          task.filter((task) =>
            task.id !== id
          )
        )
      },
      {
        text:'Não',
        style:'cancel'
      }
    ])
  }
  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(({isCompleted}) => isCompleted).length
  return(
    <View style={styles.container}>
      <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd} textInputRef={newTaskInputRef}/>
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>
                {totalTasksCreated}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>
                {totalTasksCompleted
              }</Text>
            </View>
          </View>
        </View>
        <FlatList 
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({item}) => (
            <Task 
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDelete={() => handleTaskDelete(item.id)}
              {...item}
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