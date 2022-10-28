import { collection, getDocs } from "firebase/firestore"; 
import { firestoreDB } from "./firebaseSetting" 
import moment from "moment"

export async function getTodayTask () {

    const querySnapshot = await getDocs(collection(firestoreDB, moment().format('YYYY-MM-DD')));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}
