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
        content: '[{"id":"_roEyPQerFpG_9oBZdeZ9","type":"freedraw","x":908,"y":-547,"width":0.0001,"height":0.0001,"angle":0,"strokeColor":"#000000","backgroundColor":"transparent","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"roundness":null,"seed":238948578,"version":3,"versionNonce":1473094818,"isDeleted":false,"boundElements":null,"updated":1685147206085,"link":null,"locked":false,"points":[[0,0],[0.0001,0.0001]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[0.0001,0.0001]}]'
        ,
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
