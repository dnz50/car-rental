import { ICarProps } from "../../types";
import { generateImage } from "../../utils/utils";

interface DetailModalProps {
    isOpen: boolean;
    closeModal: () => void;
    car: ICarProps;
}

const DetailModal = ({
    isOpen,
    closeModal,
    car,
}: DetailModalProps
) => {
    return (
        <div className="w-full h-full">
            {isOpen &&
                <div className="fixed inset-0 bg-indigo-950 bg-opacity-25 z-20 flex justify-center items-center ">
                    <div className="p-6 relative bg-white w-4/5 h-full rounded-2xl flex flex-col gap-2 overflow-auto max-w-[500px]">
                        <button
                            onClick={closeModal}
                            className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
                            <img src="/close.svg" alt="" />
                        </button>
                        {/* resimler kısmı */}
                        <div className="flex-1 flex-col gap-3">
                            <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                <img className="h-full object-contain mx-auto" src={generateImage(car)} alt="" />
                            </div>
                            <div className="flex justify-between gap-3 mt-3">
                                <div className="relative w-full h-24 bg-indigo-300 rounded-lg">
                                    <img className="h-full object-contain mx-auto"
                                     src={generateImage(car , "29")}  alt="" />
                                     {/* buradaki 29 angle */}
                                </div>
                                <div className="relative w-full h-24 bg-indigo-300 rounded-lg">
                                    <img className="h-full object-contain mx-auto" src={generateImage(car,"33")}  alt="" />
                                </div>
                                <div className="relative w-full h-24 bg-indigo-300 rounded-lg">
                                    <img className="h-full object-contain mx-auto" src={generateImage(car,"13")}  alt="" />
                                </div>
                            </div>
                        </div>
                        {/* bilgiler kısmı */}
                        <div className="m-3 flex flex-wrap gap-4">
                            {/* burada object entries metodu ile objeyi dizi şeklinde yazdırıp map ile döndük
                            dizi şeklinde yazınca bilgiler key value şeklinde oluştu bizde bunu
                            map içine key ve value yazıp ekrana yansıttık*/}

                            {Object.entries(car).map(([key, value]) => (
                                <div className="flex justify-between w-full">
                                    <h4 className="text-gray capitalize">{key.split("_").join(" ")} </h4>
                                    <p className="font-semibold">{value} </p>
                                </div>
                            )

                            )
                            }
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default DetailModal
