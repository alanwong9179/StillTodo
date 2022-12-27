import { doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { firestoreDB } from "./firebaseSetting";

export async function updateTaskContent(uid, content){
    const targetRef = doc(firestoreDB, 'Notes', uid)
    
    let updated = await updateDoc(targetRef, {
        task: content
    }).then(()=>{
        return true
    }).catch(error => {
        console.log(error)
        return false
    })

    return updated
}

export async function doneTask(uid){
    const targetRef = doc(firestoreDB, 'Notes', uid)

    let updated = await updateDoc(targetRef, {
        done: true,
        doneDateTime: moment().format('YYYY-MM-DD HH:mm:ss')
    }).then(()=>{
        return true
    }).catch(error => {
        console.log(error)
        return false
    })

    return updated
}