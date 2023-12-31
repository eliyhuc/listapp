import React from 'react'
import geodist from 'geodist';
import { View, Text, StyleSheet } from 'react-native'

const User = (props) => {

const dist = geodist(
    {lat: 31.25094733825941, lon: 34.79088792713059}, 
    {lat: props.user.address.geo.lat, lon: props.user.address.geo.lng}
    )

  return (
    <>
        <View key={props.user.id} style={appstyle.row}>
            <View style={appstyle.left}>
                <Text style={appstyle.title}>{props.user.name}</Text>
                <Text>{props.user.email}</Text>
            </View>
            <View style={appstyle.right}>
                <Text style={appstyle.title}>
                    {dist}km
                </Text>
            </View>
        </View>
    </>
  )
}

const appstyle = StyleSheet.create({
    title:{fontSize:18, fontWeight:'800'},
    left:{width:'70%'},
    right: {width:'30%', justifyContent:'center', alignItems:'center'},
    row: {
        flexDirection: 'row',
        width:'100%',
        padding:20,
        backgroundColor:'#ffffff',
        marginBottom:12,
        borderRadius:12
    },
})

export default User