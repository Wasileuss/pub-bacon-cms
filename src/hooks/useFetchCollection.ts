import { useEffect, useState } from "react"
import { db } from "@/firebase/firebaseConfig.js"
import { collection, onSnapshot } from "firebase/firestore"

function useFetchCollection<T>(collectionName: string) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
            const updatedData = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as T[];

            setData(updatedData)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [collectionName])

    return { data, loading }
}

export default useFetchCollection
