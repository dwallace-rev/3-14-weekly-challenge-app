import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import LinkedList, { findIntersect } from "../entities/linked-list";
import LinkedListView from "./linked-list-view";
import styles from "./styles";


export default function LinkedListPage(){

    const A = new LinkedList();
    const B = new LinkedList();

    const [intersect, setIntersect] = useState<any>(null);

    return(<View style={{flex:1}}>

    <View style={styles.listsPageContainer}>
        <LinkedListView list={A} setIntersect={setIntersect}/>
        <LinkedListView list={B} setIntersect={setIntersect}/>
    </View>
    <Text style={{textAlign:"center", color:"gray"}}>
        Known bug: when intersection is successfully found, lists get cleared. Click "Clear list" to view accurate data.
    </Text>
    <View style={styles.resultsContainer}>
        <Pressable style={styles.findIntersectButton}>
            <Text style={styles.findIntersectButtonText} onPress={()=>setIntersect(findIntersect(A, B))}>Find Intersection</Text>
        </Pressable>
        {intersect ? <Text style={styles.resultTextFound}>Intersect Found: {intersect}</Text>
            : 
            <Text style={styles.resultTextNotFound}>No Intersection</Text>}
    </View>
        
    </View>)
    
}