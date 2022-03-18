import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";
import Stack from "../entities/stack";
import { useEffect, useState } from "react";

export default function StackPage(){

    const [stack, setStack] = useState<Stack<number>>(new Stack([]));
    const [addItem, setAddItem] = useState<string>("");
    const [refresh, setRefresh] = useState<{}>();
    const [max, setMax] = useState<number>(0);

    function addToStack(){
        const toAdd = Number(addItem.replace(/[^0-9]/g, ''));
        stack.push(toAdd);
        setStack(stack);
        setAddItem("");
    }
    function clearStack(){
        setStack(new Stack([]));
        setMax(0)
    }
    function popOff(){
        try {
            stack.pop();
            if(stack.getStack().length === 0) {
                setMax(0);
            }
            setRefresh({...refresh});
        } catch (error) {
            alert(error);
        }
    }
    function displayMax(){
        try {
            const maxValue = stack.max();
            setMax(maxValue);
        } catch (error) {
            alert(error);
        }
    }
    useEffect(()=>{
        if (!refresh) return;
        setStack(stack);
    },[refresh])

    return(<View style={{flex:1}}>
        <Text style={{fontSize:24, fontWeight:"bold", textAlign:"center",}}>Interactive Stack</Text>
        <View style={{flex:1, flexDirection:"row"}}>

            <View style={{flex:1, height:"70%"}}>
                <Text style={styles.textInputLabel}>Add new item to stack:</Text>
                <TextInput keyboardType="numeric" style={styles.stackTextInput} value={addItem} onChangeText={(text)=>setAddItem(text)}/>
                <Pressable style={[styles.addItemButton, {marginTop:10}]} onPress={()=>addToStack()}>
                    <Text style={styles.addItemButtonText}>Add Item</Text>
                </Pressable>
                <Pressable style={[styles.addItemButton, {backgroundColor:"red", marginTop:20}]} onPress={()=>{popOff()}}>
                    <Text style={styles.addItemButtonText}>Pop Off Stack Item</Text>
                </Pressable>
                <Pressable style={[styles.addItemButton, {backgroundColor:"#4A4", marginTop:20}]} onPress={()=>displayMax()}>
                    <Text style={styles.addItemButtonText}>Get Max Value</Text>
                </Pressable>

                <Text style={{fontSize:18, fontWeight:"bold", marginTop:30, textAlign:"center"}}>Max Value: </Text>
                <Text style={{fontSize:28, color:"#4A4", fontWeight:"bold", textAlign:"center"}}>{max}</Text>
            </View>
            <View style={styles.stackView}>
                <FlatList 
                    data={stack.render()}
                    style={{flexDirection:"column-reverse"}}
                    keyExtractor={(item, index) => `${item} + ${index}`}
                    renderItem={({item})=>(<View style={{flex: 1,justifyContent:"flex-end"}}>
                        <Text style={styles.stackItem}>{item}</Text>
                    </View>
                    )}
                />
            </View>
        </View>
        <Pressable style={styles.clearStackButton}>
            <Text style={styles.findIntersectButtonText} onPress={()=>clearStack()}>Clear Stack</Text>
        </Pressable>
        

    </View>)
}