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

export async function insertKeys(keyObj){
    try{
        const keyRef = await addDoc(collection(firestoreDB, 'Keys'),{
            desc: keyObj.desc,
            id: keyObj.id,
            password: keyObj.password,
            createDate: moment().format('YYYY-MM-DD HH:mm:ss'),
            remove: false
        })
        if (keyRef !== null) {
            return true 
        }else{
            return false
        }
    }catch(e){
        console.log(e)
        return false
    }
}
