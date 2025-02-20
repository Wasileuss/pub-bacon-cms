import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

export async function getItems(category: string): Promise<Item[]> {
    const q = query(collection(db, category));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => doc.data());
    console.log("Дані з Firebase:", items);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Item[];
}
