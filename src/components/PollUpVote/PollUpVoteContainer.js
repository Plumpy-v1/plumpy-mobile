import React from 'react';
import { View , Text ,StyleSheet, FlatList, Dimensions ,} from 'react-native';
import UpVoteButton from './UpVoteButton';

const dataList = [
    { key: 'react native' },
    { key: 'Flutter' },
    { key: 'Movie' },
    { key: 'Drama' },
    { key: 'JavaScript' },
    { key: 'react native' },
    { key: 'react native' },
    { key: 'react native' },
    { key: 'react native' },
    { key: 'react native' },
    { key: 'react native' },
    
  ];

const numColumns = 2;
const WIDTH =  Dimensions.get('window').width

const formatData = (dataList,numColumns) => {
    const totalRows = Math.floor(dataList.length/numColumns)
    let totalLastRow = dataList.length - (totalRows * numColumns )

    while(totalLastRow !== 0 && totalLastRow !== numColumns){
        dataList.push({key:`blank-${totalLastRow}`,empty:true})
        totalLastRow++
    }
    return dataList;
}
const PollUpVoteContainer = (props) => {


 
    let _renderItem = ({item,index}) =>   {
        let {itemStyle,itemText,itemInvisible} = styles
        if(item.empty === true){
            return <View style={[itemStyle,itemInvisible]} />

         
        }
        return(
            <View style={itemStyle}>
                <Text style={itemText}>{item.key}</Text>
                <Text style={{color:"#343434",fontSize:15,margin:8}} >62 up Votes</Text>
                <UpVoteButton  colorbg="#FF7C7C" textcolor="#fff" />
            </View>
        )
    }

  return(
     
        <FlatList
        data={formatData(dataList,numColumns)}
        style={styles.container}
        renderItem={_renderItem}
        keyExtractor={(item,index) => index.toString() }
        numColumns={numColumns}
         />

  );
}

const styles = StyleSheet.create({
 container: {
     flex:1,
     marginVertical: 10,
     backgroundColor:'#FBE7E3',
      
 },
 itemStyle:{
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    margin:20,
    borderRadius:10,
    height: (WIDTH) / (numColumns)
 },
 itemText:{
    fontSize:22,
    color:'#393939'
 },
 itemInvisible:{
    backgroundColor: 'transparent',
 }

});

export default PollUpVoteContainer;