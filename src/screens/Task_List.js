import React, { Component } from "react";
import {StyleSheet, View, Text, ImageBackground, FlatList, TouchableWithoutFeedback} from "react-native";
import moment from "moment"
import "moment/locale/pt-br"

import today_Image from "../../assets/imgs/today.jpg"
import Task from "../components/task"


export default class TaskList extends Component{
    state = {
        tasks:[
            {
                id: Math.random(),
                description: "Terminar TCC",
                estimate_at: new Date (),
                done_at: new Date ()
            },
            {
                id: Math.random(),
            description: "Fazer",
            estimate_at: new Date (),
            done_at: null ()
            }, 
            {
                id: Math.random(),
                description: "Tarefa 3",
                estimate_at: new Date (),
                done_at: null ()
            }
        ]
    }

 toggle_task = task_id => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
        if(task.id === task_id){
            task.done_at = task,done_at ? null : new Date()
           
        }
    })
    this.setState({tasks})
 }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style = {styles.container}>
            
            <ImageBackground source={today_image}  style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subTitle}> {today} </Text>
          </View>
            </ImageBackground>
            <View style={styles.taskList}>
            <FlatList>
                data = {this.state.tasks}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => {<Task{...item} toggle_task ={this.toggle_task}/>}  }
            </FlatList>





           // <Task description={"Terminar TCC"}>
             //   estimate_at={moment(new Date ()).add (30, "days")} 
              //  donet_at={new Date()}
           // </Task>
            //<Task description={"Apresentar TCC"}>
            //    estimate_at={moment(new Date()).add (63, "days")}
             //   done_at=(null)
           // </Task>
          //     <Text>Lista de Tarefas</Text>
           //     </View>
           // </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }, 
    background:{
    flex:3
    }, 
    taskList:{
    flex:7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50, 
        color: '#FFF', 
        marginLeft: 20, 
        marginBottom: 20

    },
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 20, 
        color: '#FFF', 
        marginLeft: 20, 
        marginBottom: 30
    }
})