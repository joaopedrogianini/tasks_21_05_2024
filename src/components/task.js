import React from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import moment from "moment"
import 'moment/locale/pt-br'

export default props => { 
    const done_or_not = props.done_at != null? {textDecorationLine: "line-through"}: {}
    const date =props.date_at != null ? props.donet_at : props.estimate_at 
    const formated_date = moment(date).format('ddd, D [de] MMM')
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => this.props.toggle_task(props.id)}>
                <View style={styles.checkContainer}>
                    {get_Check_View(props.done_at)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, done_or_not]}>{props.description}</Text>
                <Text style={styles.date}>{formated_date}</Text>
              
            </View>
        </View>
    )
}
function get_Check_View(done_at){
    if (done_at != null){
        return(
        <View style={styles.done}>
        <Icon name="check" size={20}></Icon>
    </View>
        )
    }else{
        <View style={styles.pending}>

        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    desc: {
        fontFamily: 'Arial',
        fontSize: 20
    },
    date: {
        fontFamily: 'Arial'
    },
    checkContainer:{
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth:1,
        backgroundColor: "#4D7031",
        alignItems: "center",
        justifyContent: "center"
    },
    pending:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth:1,
        borderColor: "#555555"
    }
})