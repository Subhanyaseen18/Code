import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
const styles=StyleSheet.create({
img:{
width:wp(100),
height:hp(30),
},
dot:{
backgroundColor:'green',
height:hp(1),
width:wp(2),
borderRadius:150,
marginHorizontal:hp( 1)
},
dots:{
    backgroundColor:'red',
    height:hp(1),
    width:wp(2),
    borderRadius:150,
    marginHorizontal:hp( 1)
    },
containerDot:{
   flexDirection:"row" ,
   justifyContent:'center',
   marginTop:hp(2)
}






}

)
export default styles