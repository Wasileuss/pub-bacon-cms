export const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-start w-screen h-screen bg-[url(/images/burger.jpg)] bg-cover bg-center">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 px-10 pt-20">
                    <h1 className="text-4xl sm:text-5xl text-[#f7f7f7] font-bold">
                        <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Бекон</span>
                        {" "}Паб біля дому
                    </h1>
                    <div className="flex flex-col w-fit text-2xl text-[#f7f7f7] bg-white/20 rounded-[16px] shadow-lg shadow-black/10 backdrop-blur-[6.9px] p-6">
                        <p>не спробуєш -</p>
                        <p>не дізнаєшся</p>
                        <p>[*як це смачно!]</p>
                    </div>
                </div>
            </div>
        </>
    );
}
