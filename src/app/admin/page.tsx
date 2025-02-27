'use client';

import React, {useEffect, useState, useRef, useCallback} from "react";
import { db } from "@/firebase/firebaseConfig";
import { addDoc, collection, onSnapshot, serverTimestamp, updateDoc, doc, deleteDoc } from "firebase/firestore";
import Modal from "@/components/ui/Modal";
import {MenuItem} from "@/components/MenuItem";
import Select from "@/components/ui/Select";
import ModalForm from "@/components/ModalForm";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { User } from 'firebase/auth';

const AddItems: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [title, setTitle] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [num, setNum] = useState("");
    const [link, setLink] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [weight, setWeight] = useState("");
    const [info1, setInfo1] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [img, setImg] = useState("");
    const [publicId, setPublicId] = useState("");
    const [data, setData] = useState<Item[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("menu");
    const [editItem, setEditItem] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const handleShowModal = useCallback(() => setShowModal(true), [setShowModal]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, selectedCategory), (snapshot) => {
            const updatedData = snapshot.docs.map((val) => ({
                ...val.data(),
                id: val.id,
            })) as Item[];
            setData(updatedData);
        });
        document.body.classList.toggle('overflow-hidden', showModal)
        return () => {
            unsubscribe();
            document.body.classList.remove('lock')
        }
    }, [selectedCategory, showModal]);

    const toggleAccordion = (id: string) => {
        setExpandedItem(prev => (prev === id ? null : id))
    }

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "bacon_preset");
        formData.append("folder", "bacon");

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setImg(data.secure_url);
            setPublicId(data.public_id);
        } catch (error) {
            console.error("Error uploading to Cloudinary", error);
        }
    };

    const saveItem = async () => {
        const dataToSave = {
            category: selectedCategory,
            categoryName: categoryName,
            title: title,
            num: num,
            link: link,
            desc: desc,
            price: price,
            weight: weight,
            info1: info1,
            info2: info2,
            info3: info3,
            imgUrl: img,
            publicId: publicId,
            lastEdited: serverTimestamp()
        };

        try {
            if (editItem) {
                await updateDoc(doc(db, selectedCategory, editItem), dataToSave);
                setEditItem(null);
            } else {
                await addDoc(collection(db, selectedCategory), {
                    ...dataToSave,
                    timestamp: serverTimestamp()
                });
            }
            setTitle("");
            setCategoryName("");
            setNum("");
            setLink("");
            setDesc("");
            setPrice("");
            setWeight("");
            setInfo1("");
            setInfo2("");
            setInfo3("");
            setImg("");
            setPublicId("");
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("Error saving document", error);
        }
    };

    const handleClick = async () => {
        setLoading(true);
        if (!title) {
            alert("Please complete the required fields");
            setLoading(false);
            return;
        }

        await saveItem();
        setLoading(false);
        setShowModal(false)
    };

    const handleEdit = (id: string) => {
        const itemToEdit = data.find((item) => item.id === id);
        if (itemToEdit) {
            setTitle(itemToEdit.title);
            setCategoryName(itemToEdit.categoryName);
            setNum(itemToEdit.num);
            setLink(itemToEdit.link);
            setDesc(itemToEdit.desc);
            setPrice(itemToEdit.price);
            setWeight(itemToEdit.weight);
            setInfo1(itemToEdit.info1);
            setInfo2(itemToEdit.info2);
            setInfo3(itemToEdit.info3);
            setImg(itemToEdit.imgUrl);
            setPublicId(itemToEdit.publicId || "");
            setEditItem(id);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setTitle('')
        setCategoryName('')
        setNum('')
        setLink('')
        setDesc('')
        setPrice('')
        setWeight('')
        setInfo1('')
        setInfo2('')
        setInfo3('')
        setImg('')
        setPublicId('')
        setEditItem(null)
        setShowModal(false)
    }

    const handleDelete = async (id: string, publicId?: string) => {
        if (confirm("Are you sure you want to delete this item?")) {
            try {
                if (publicId) {
                    await fetch("/api/deleteImage", {
                        method: "DELETE",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({publicId}),
                    });
                }

                await deleteDoc(doc(db, selectedCategory, id));

            } catch (error) {
                console.error("Error deleting item:", error);
                alert("Failed to delete item");
            }
        }
    };

    const handleDeleteImage = async () => {
        if (!publicId) return;

        if (confirm("Are you sure you want to delete this image?")) {
            try {
                await fetch("/api/deleteImage", {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({publicId}),
                });

                setImg("");
                setPublicId("");

                if (editItem) {
                    await updateDoc(doc(db, selectedCategory, editItem), {
                        imgUrl: "",
                        publicId: "",
                        lastEdited: serverTimestamp(),
                    });
                }
            } catch (error) {
                console.error("Error deleting image:", error);
                alert("Failed to delete image");
            }
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.replace("/admin/login");
            } else {
                setUser(user);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <p className="text-center mt-10">Завантаження...</p>;
    }

    return user ? (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col py-10 px-2.5">
            <h1 className="text-3xl sm:text-4xl font-bold self-center sm:text-left mb-10">
                Welcome to{" "}
                <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Bacon</span>
                {" "}Admin Panel
            </h1>
            <div className="flex flex-col gap-2.5">
                <div className="flex gap-5">
                    <Select
                        className="border border-[#485887] rounded py-[5px] px-2"
                        id="admin-select"
                        name="admin-select"
                        value={selectedCategory}
                        selectedCategory={selectedCategory}
                        setSelectedCategoryAction={setSelectedCategory}
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={handleShowModal}
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add new item'}
                    </Button>
                </div>
                <Modal
                    isOpen={showModal}
                    editItem={editItem}
                    onClose={handleCloseModal}
                >
                    <ModalForm
                        title={title}
                        setTitle={setTitle}
                        categoryName={categoryName}
                        setCategoryName={setCategoryName}
                        selectedCategory={selectedCategory}
                        num={num}
                        setNum={setNum}
                        link={link}
                        setLink={setLink}
                        desc={desc}
                        setDesc={setDesc}
                        price={price}
                        setPrice={setPrice}
                        weight={weight}
                        setWeight={setWeight}
                        info1={info1}
                        setInfo1={setInfo1}
                        info2={info2}
                        setInfo2={setInfo2}
                        info3={info3}
                        setInfo3={setInfo3}
                        img={img}
                        setImg={setImg}
                        handleUpload={handleUpload}
                        fileInputRef={fileInputRef}
                        handleClick={handleClick}
                        editItem={editItem}
                        handleDeleteImage={handleDeleteImage}
                    />
                </Modal>
            </div>
            <MenuItem
                data={data}
                selectedCategory={selectedCategory}
                expandedItem={expandedItem}
                toggleAccordion={toggleAccordion}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    ) : null;
};

export default AddItems;
