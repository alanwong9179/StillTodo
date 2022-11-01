import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "./firebaseSetting";

export async function updateTaskContent(uid, content, date){
    const targetRef = doc(firestoreDB, date, uid)
    
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

export async function doneTask(uid, date){
    const targetRef = doc(firestoreDB, date, uid)

    let updated = await updateDoc(targetRef, {
        done: true
    }).then(()=>{
        return true
    }).catch(error => {
        console.log(error)
        return false
    })

    return updated
}