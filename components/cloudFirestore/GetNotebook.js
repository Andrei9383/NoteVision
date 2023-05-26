import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/initFirebase";

async function GetNotebook(name, id) {
  const docRef = doc(db, id, name);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    //console.log("from fasdj", docSnap.data());
    return docSnap.data();
  } else {
    return 0;
  }
}
export default GetNotebook;
