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
    user?: string;
}

interface MenuItemProps {
    data: Item[];
    selectedCategory: string;
    expandedItem: string | null;
    toggleAccordion: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (id: string, publicId?: string) => void;
}

interface ModalFormProps {
    title: string;
    setTitle: (value: string) => void;
    categoryName: string;
    setCategoryName: (value: string) => void;
    num: string;
    setNum: (value: string) => void;
    link: string;
    setLink: (value: string) => void;
    desc: string;
    setDesc: (value: string) => void;
    price: string;
    setPrice: (value: string) => void;
    weight: string;
    setWeight: (value: string) => void;
    info1: string;
    setInfo1: (value: string) => void;
    info2: string;
    setInfo2: (value: string) => void;
    info3: string;
    setInfo3: (value: string) => void;
    img: string;
    setImg: (value: string) => void;
    handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    handleClick: () => Promise<void>;
    editItem: string | null;
    handleDeleteImage: () => void;
    selectedCategory: string
}