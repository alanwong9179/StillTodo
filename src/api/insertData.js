import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "./firebaseSetting" 
import moment from "moment"

export async function insertDailyTask() {
    try{
        const taskRef = await addDoc(collection(firestoreDB, moment().format('YYYY-MM-DD')), {
            task: 'testing',
            detailDateTime: moment().format('YYYY-MM-DD HH:mm:ss')
        })
        if (taskRef !== null) {
            return true 
        }else{
            return false
        }
    }catch(e){
        return false
    }
}