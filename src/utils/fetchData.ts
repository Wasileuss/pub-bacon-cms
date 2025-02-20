import { getItems } from "@/server/getData.server";

interface DataItem {
    id: string;
    imgUrl: string;
    title: string;
    categoryName: string;
    timestamp?: { seconds: number };
    lastEdited?: { seconds: number };
}

export async function fetchData(category: string): Promise<DataItem[]> {
    const [data] = await Promise.all([
        getItems(category),
    ]);

    return data.map((item: DataItem) => ({
        ...item,
        timestamp: item.timestamp?.seconds ? { seconds: item.timestamp.seconds } : undefined,
        lastEdited: item.lastEdited?.seconds ? { seconds: item.lastEdited.seconds } : undefined,
        imgStyle: {},
    }));
}
