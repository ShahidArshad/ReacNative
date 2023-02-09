import { View,Text,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';

export default function App ()  {

    
  return(

   <ScrollView style={{marginTop:30,marginBottom:50}}>
       <View style={
      {flex:2,}
   }>
  <View style={{
   flex:0.5,justifyContent:"center",alignItems:"center",
   
  }}>
     <Text style={{color:"red",fontSize:30,marginBottom:5}}>SinUp</Text>
     <Image source={require("./assets/logo.png")}  style={{width:250,height:250,marginTop:10}}/>
     
  </View>


<View style={{flex:1.5,padding:40}}>

   <TextInput placeholder='FirstName' style={{borderWidth:1,padding:10,marginVertical:5,borderTopRightRadius:10,borderTopLeftRadius:10}}></TextInput>
 
   <TextInput placeholder='LastName' style={{borderWidth:1,padding:10,marginVertical:5,borderTopRightRadius:10,borderTopLeftRadius:10}}></TextInput>

   <TextInput placeholder='Email' style={{borderWidth:1,padding:10,marginVertical:5,borderTopRightRadius:10,borderTopLeftRadius:10}}></TextInput>

   <TextInput placeholder='Password' style={{borderWidth:1,padding:10,marginVertical:5,borderTopRightRadius:10,borderTopLeftRadius:10}}></TextInput>
<TouchableOpacity style={{
   width:"100%",height:40,backgroundColor:"red",borderRadius:10,justifyContent:"center",alignItems:"center",padding:10
}}>
   <Text style={{color:"white",textAlign:"center"}}> Create New Account</Text>

   </TouchableOpacity>
</View>



   </View>
   </ScrollView>
  
  );
}
