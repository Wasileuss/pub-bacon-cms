import {capitalize} from "@/utils/capitalize";
import Image from "next/image";
import Button from "./ui/Button";

interface MenuItemProps {
    data: Item[];
    selectedCategory: string;
    expandedItem: string | null;
    toggleAccordion: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (id: string, publicId?: string) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
      data,
      expandedItem,
      toggleAccordion,
      handleEdit,
      handleDelete
  }) => {
    return (
        <>
            {data.sort((a, b) => parseInt(a.num) - parseInt(b.num)).map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col border border-gray-300 rounded p-2 mt-4"
                >
                    <h2
                        onClick={() => toggleAccordion(item.id)}
                        className={`cursor-pointer text-lg ${expandedItem === item.id ? " border-b-2 border-gray-300 pb-2" : ""}`}
                    >
                        No. {item.num} <strong>{capitalize(item.categoryName)}:</strong> {item.title}
                    </h2>
                    <div
                        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden flex flex-col gap-2 ${expandedItem === item.id ? "max-h-[500px] py-2" : "max-h-0"}`}
                    >
                        <div>
                            <p><strong>Назва*: </strong>{item.title}</p>
                            <p><strong>Категорія: </strong>{item.categoryName}</p>
                            <p><strong>Посилання: </strong>{item.link}</p>
                            <p><strong>Опис: </strong>{item.desc}</p>
                            <p><strong>Ціна: </strong>{item.price} грн</p>
                            <p><strong>Вага/кількість: </strong>{item.weight}</p>
                            {item.imgUrl &&
                              <div className="w-32 h-auto mb-4 overflow-hidden">
                                <Image
                                  className="w-full h-full object-cover"
                                  width={300}
                                  height={200}
                                  style={{width: "auto", height: "auto"}}
                                  priority={true}
                                  loading={"eager"}
                                  src={item.imgUrl}
                                  alt="img"
                                />
                              </div>
                            }
                            <div>
                                <p><strong>Інфо 1: </strong>{item.info1}</p>
                                <p><strong>Інфо 2: </strong>{item.info2}</p>
                                <p><strong>Інфо 3: </strong>{item.info3}</p>
                            </div>
                            <p>
                                <strong>Створено: </strong> {item.timestamp ? new Date(item.timestamp.seconds * 1000).toLocaleString() : "N/A"}
                            </p>
                            <p>
                                <strong>Оновлено: </strong> {item.lastEdited ? new Date(item.lastEdited.seconds * 1000).toLocaleString() : "N/A"}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => handleEdit(item.id)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="delete"
                                type="button"
                                onClick={() => handleDelete(item.id, item.publicId)}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}