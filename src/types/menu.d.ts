interface Item {
    id: string;
    value: string;
    category: string;
    categoryName: string;
    title: string;
    num: string;
    link: string;
    desc: string;
    price: string;
    weight: string;
    info1: string;
    info2: string;
    info3: string;
    imgUrl: string;
    timestamp?: { seconds: number };
    lastEdited?: { seconds: number };
    publicId?: string;
    expanded?: boolean;
    // children?: Item[];
    // items?: Item[];
    user?: string;
}
