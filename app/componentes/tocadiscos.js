import React from 'react';
import { View,Image} from 'react-native';

export default function Tocadiscos({ onPress }) {

    
    return(
        <>
            <View style={{ position: 'absolute',width: '50%', height: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray',boxShadow: 'rgba(0, 0, 0, 0.53) 0px 5px 15px', borderRadius: 20}}>
                <Image source={require('../../assets/images/webs/tocadisco.png') } style={{width:'100%', height:'100%', zIndex:2, top:185}}  />
                <Image source={require('../../assets/images/webs/vinilo.png') } style={{width:'100%', height:'100%', zIndex:1, top:-220, right:20}}  />                         
            </View>
        </>
    );
}