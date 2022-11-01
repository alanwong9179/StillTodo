import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "./firebaseSetting";

export async function getTask(date, type) {
  const querySnapshot = await getDocs(collection(firestoreDB, date));
  let serverTask = [];
  querySnapshot.forEach((doc) => {
    if (!doc.data().done) {
      serverTask.push({
        uid: doc.id,
        color: doc.data().color,
        datetime: doc.data().detailDateTime,
        content: doc.data().task,
      });
    }
  });

  return serverTask;
}
