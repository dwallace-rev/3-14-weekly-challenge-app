import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import LinkedList, { findIntersect } from "../entities/linked-list";
import LinkedListView from "./linked-list-view";
import styles from "./styles";


export default function LinkedListPage(){

    const [intersect, setIntersect] = useState<any>(null);

    const A = new LinkedList();
    const B = new LinkedList();

    return(<View style={{flex:1}}>

    <View style={styles.listsPageContainer}>
        <LinkedListView list={A} setIntersect={setIntersect}/>
        <LinkedListView list={B} setIntersect={setIntersect}/>
    </View>
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