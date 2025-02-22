import { getItems } from "@/server/getData.server";

export async function fetchData(category: string): Promise<Item[]> {
    const [data] = await Promise.all([
        getItems(category),
    ]);

    return data.map((item: Item) => ({
        ...item,
        timestamp: item.timestamp?.seconds ? { seconds: item.timestamp.seconds } : undefined,
        lastEdited: item.lastEdited?.seconds ? { seconds: item.lastEdited.seconds } : undefined,
        imgStyle: {},
    }));
}
