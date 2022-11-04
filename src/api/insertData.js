import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestoreDB } from "./firebaseSetting" 
import moment from "moment"

export async function insertDailyTask(uid, color, createDateTime) {
    try{
        const taskRef = await setDoc(doc(firestoreDB, 'Notes', uid ), {
            task: '',
            detailDateTime: createDateTime,
            color: color,
            done: false,
            doneDateTime: ''
        })

        if (taskRef !== null) {
            return true 
        }else{
            return false
        }
    }catch(e){
        console.log(e)
        return false
    }
}

