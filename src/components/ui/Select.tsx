import useFetchCollection from "@/hooks/useFetchCollection";
import { capitalize } from "@/utils/capitalize";

interface MenuItem {
    id: string;
    title: string;
    num: string;
}

interface SelectProps {
    value: string;
    selectedCategory: string;
    setSelectedCategoryAction: React.Dispatch<React.SetStateAction<string>>;
    className: string;
    id: string;
    name: string;
}

export default function Select({ selectedCategory, setSelectedCategoryAction, className, id, name }: SelectProps) {
    const { data, loading } = useFetchCollection<MenuItem>('menu');

    return (
        <select
            aria-labelledby="Select category"
            name={name}
            id={id}
            className={className}
            onChange={(e) => setSelectedCategoryAction(e.target.value)}
            value={selectedCategory}
        >
            {loading ? (
                <option value="">Loading...</option>
            ) : (
                <>
                    <option value="menu">Menu</option>
                    {data
                        .filter((item) => item.num)
                        .sort((a, b) => parseInt(a.num) - parseInt(b.num))
                        .map((option) => (
                            <option key={option.id} value={option.title}>
                                {capitalize(option.title)}
                            </option>
                        ))
                    }
                </>
            )}
        </select>
    );
}

