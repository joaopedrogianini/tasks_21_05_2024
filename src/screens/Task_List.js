import React, { Component } from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";
import moment from "moment"
import "moment/locale/pt-br"

import today_Image from "../../assets/imgs/today.jpg"


export default class TaskList extends Component{
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
                <Text>Lista de Tarefas</Text>
                </View>
            </View>
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