import { db } from "@/lib/firebase/initFirebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

function CreateNotebook(name, user) {
  // eslint-disable-next-line react/prop-types
  if (name === "") {
    console.log("Please enter a name for your notebook");
    return;
  }
  if (!user) return;
  const sendData = async () => {
    try {
      const userDoc = doc(db, user.id, name);
      await setDoc(userDoc, {
        // eslint-disable-next-line react/prop-types
        name,
        created: Timestamp.fromDate(new Date()),
        modified: Timestamp.fromDate(new Date()),
        content: "",
      });
      return 0;
    } catch (error) {
      console.log(error);
      return 1;
    }
  };
  sendData();
  return 0;
}

export default CreateNotebook;
