import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Image from "next/image";

const plPrice: Record<string, string> = {
    about: "Add '+' if need reverse",
};

const plWeight: Record<string, string> = {
    about: "Add '+' if need reverse",
};

const plInfo3: Record<string, string> = {
    reviews: "Stars",
};

const ModalForm: React.FC<ModalFormProps> = ({
         title,
         setTitle,
         categoryName,
         setCategoryName,
         selectedCategory,
         num,
         setNum,
         link,
         setLink,
         desc,
         setDesc,
         price,
         setPrice,
         weight,
         setWeight,
         info1,
         setInfo1,
         info2,
         setInfo2,
         info3,
         setInfo3,
         img,
         setImg,
         handleUpload,
         fileInputRef,
         handleClick,
         editItem,
         handleDeleteImage
    }) => {
    const [loading, setLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleSubmit = async () => {
        if (isUploading) return;
        setLoading(true);
        await handleClick();
        setLoading(false);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsUploading(true);
        await handleUpload(e);
        setIsUploading(false);
    };

    return (
        <form id="form" className="w-full flex flex-col items-center gap-2 pt-6 overflow-y-auto">
            <Input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title*"
            />
            <Input
                type="text"
                onChange={(e) => setCategoryName(e.target.value)}
                value={categoryName}
                placeholder="CategoryName"
            />
            <Input
                type="text"
                onChange={(e) => setNum(e.target.value)}
                value={num}
                placeholder="Number"
            />
            <Input
                type="text"
                onChange={(e) => setLink(e.target.value)}
                value={link}
                placeholder="Link"
            />
            <textarea
                className="w-full border-2 border-gray-300 rounded-md px-2 py-[4px]"
                onChange={(e) => setDesc(e.target.value)} value={desc}
                placeholder="Description"
            />
            <Input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder={plPrice[selectedCategory] || "Price"}
            />
            <Input
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                placeholder={plWeight[selectedCategory] || "Weight"}
            />
            <Input
                type="text"
                onChange={(e) => setInfo1(e.target.value)}
                value={info1}
                placeholder="Info 1"
            />
            <Input
                type="text"
                onChange={(e) => setInfo2(e.target.value)}
                value={info2}
                placeholder="Info 2"
            />
            <Input
                type="text"
                onChange={(e) => setInfo3(e.target.value)} value={info3}
                placeholder={plInfo3[selectedCategory] || "Info 3"}
            />
            <Input
                type="file"
                onChange={handleFileUpload}
                ref={fileInputRef}
            />
            <Input
                type="text"
                onChange={(e) => setImg(e.target.value)}
                value={img}
                placeholder="Image URL"
            />

            {img && (
                <div className="relative w-1/2 h-auto overflow-hidden">
                    <Image
                        src={img}
                        alt="Uploaded Image"
                        width={150}
                        height={100}
                        className="w-full h-auto object-contain rounded-md"
                    />
                    <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full"
                        onClick={handleDeleteImage}
                    >
                        ✕
                    </button>
                </div>
            )}

            <Button
                className="w-full"
                variant={isUploading ? "disabled" : editItem ? "secondary" : "success"}
                type="button"
                onClick={handleSubmit}
                disabled={loading || isUploading}
            >
                {loading ? (editItem ? "Updating..." : "Adding...") : editItem ? "Update" : "Add"}
            </Button>
        </form>
    );
};

export default ModalForm;
