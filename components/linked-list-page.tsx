import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import LinkedList, { findIntersect } from "../entities/linked-list";
import LinkedListView from "./linked-list-view";
import styles from "./styles";


export default function LinkedListPage(){

    // const A = new LinkedList();
    // const B = new LinkedList();

    const prevA: string[] = [];
    const prevB: string[] = [];

    const [A, setA] = useState<LinkedList>(new LinkedList());
    const [B, setB] = useState<LinkedList>(new LinkedList());

    const [refresh, setRefresh] = useState<{}>();
    const [intersect, setIntersect] = useState<any>(null);

    return(<View style={{flex:1}}>
        <Text style={styles.listTitle}>Linked List Intersection</Text>

    <View style={styles.listsPageContainer}>
        <LinkedListView list={A} setIntersect={setIntersect} refresh={refresh}/>
        <LinkedListView list={B} setIntersect={setIntersect} refresh={refresh}/>
    </View>
    {/* <Text style={{textAlign:"center", color:"gray"}}>
        Known bug: when intersection is successfully found, lists get cleared. Click "Clear list" to view accurate data.
    </Text> */}
    <View style={styles.resultsContainer}>
        <Pressable style={styles.findIntersectButton}>
            <Text style={styles.findIntersectButtonText} onPress={()=>{setIntersect(findIntersect(A, B)); setRefresh({...refresh})}}>Find Intersection</Text>
        </Pressable>
        {intersect ? <Text style={styles.resultTextFound}>Intersect Found: {intersect}</Text>
            : 
            <Text style={styles.resultTextNotFound}>No Intersection</Text>}
    </View>
        
    </View>)
    
}