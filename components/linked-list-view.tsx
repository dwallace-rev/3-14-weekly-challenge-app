import styles from "./styles";
import { Button, FlatList, Pressable, Text, TextInput, View } from "react-native";
import LinkedList from "../entities/linked-list";
import { createRef, useEffect, useState } from "react";


export default function LinkedListView(props:{list: LinkedList, setIntersect: Function, refresh: any}){

    const {list, setIntersect, refresh: clear} = props;
    const [listArray, setListArray] = useState(list.toArray());
    const [addItem, setAddItem] = useState("");

    function addToList(newNode: any){
        if (addItem !== "") {
            list.addNode(newNode);
            setListArray(list.toArray());
            setAddItem("");
        }
    }

    function clearList(){
        list.clearList();
        setListArray(list.toArray());
        setIntersect(null);
    }

    useEffect(()=>{
        setListArray(list.toArray());
    },[clear])

    return(<View style={styles.listContainer}>
    
        <View style={styles.listView}>

            <Button title="Clear List" onPress={()=>{clearList()}}/>

            <FlatList 
                data={listArray}
                style={{width:"100%", marginTop:2}}
                keyExtractor={(item, index) => index + item.valueOf()}
                renderItem={({item})=>(
                    <Text style={styles.listItemText}>{item}</Text>
                )}
            />
        </View>
        <TextInput value={addItem} placeholder={"Enter New Item"} style={styles.addItemTextEntry} onChangeText={text=>setAddItem(text)}/>
        <Pressable style={styles.addItemButton} onPress={()=>addToList(addItem)}>
            <Text style={styles.addItemButtonText}>Add Node to List</Text>
        </Pressable>

    </View>)
}