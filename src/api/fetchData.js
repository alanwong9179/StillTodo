import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { firestoreDB } from "./firebaseSetting";
import moment from "moment";

export async function getKeys(){
  let keysRef = collection(firestoreDB, 'Keys')

  const unRemoveQuery = query(keysRef, where("remove", "==", false))

  const querySnapshot = await getDocs(unRemoveQuery)

  let keysList = []

  querySnapshot.forEach(k => {
    keysList.push({
      id: k.id,
      desc: k.data().desc,
      id: k.data().id,
      password: k.data().password
    })
  })

  return keysList
}

export async function getUndoneTask(){

  let notesRef = collection(firestoreDB, "Notes")

  const unDoneQuery = query(notesRef, where("done", "==", false), orderBy("detailDateTime", "desc")) 

  const querySnapshot = await getDocs(unDoneQuery)

  let taksList = [];
  let lastRecordCreateDate = ''

  querySnapshot.forEach(t => {
      let createDate = moment(t.data().detailDateTime).format('YYYY-MM-DD')
      if (createDate !== lastRecordCreateDate){
        taksList.push({
          date: createDate, 
          data: [{
            uid: t.id,
            color: t.data().color,
            datetime: t.data().detailDateTime,
            content: t.data().task,
            done: t.data().done,
            doneDateTime: t.data().dateDateTime
          }]
        })
      }else{
        for (let tisd of taksList){
          if (tisd.date === createDate) {
            let curr = tisd.data
            curr.push({
              uid: t.id,
              color: t.data().color,
              datetime: t.data().detailDateTime,
              content: t.data().task,
              done: t.data().done,
              doneDateTime: t.data().dateDateTime
            })
            tisd.data = curr
          }
        }
      }
      lastRecordCreateDate = createDate
  })

  return taksList
}


