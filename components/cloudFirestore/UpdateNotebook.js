import { db } from "@/lib/firebase/initFirebase";
import { doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";

async function UpdateNotebook(name, id, content) {
  // eslint-disable-next-line react/prop-types
  const notebookRef = doc(db, id, name);
  await updateDoc(notebookRef, {
    content,
    modified: Timestamp.fromDate(new Date()),
  });

  return 0;
}

export default UpdateNotebook;
