import Link from "next/link";
import RotatingText from "@/components/ui/RotatingText/RotatingText";

const GoToMenu = () => {
    return (
        <div className="w-full">
            <div className="flex mb-10 w-full max-w-[1440px] mx-auto px-2.5 sm:px-5">
                <Link
                    href="/menu"
                    className="menu-button w-full text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center text-primary bg-active transform transition duration-300 ease-in-out hover:bg-darkActive hover:text-white hover:scale-[1.01] hover:translate-y-[-5px] rounded"
                >
                    <RotatingText
                        texts={['Перейти в меню', 'Авторська кухня', 'Крафтове пиво', 'Ласкаво просимо!']}
                        mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-1 sm:py-2 md:py-3 justify-center"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={4000}
                    />
                </Link>
            </div>
        </div>
    );
}

export default GoToMenu;