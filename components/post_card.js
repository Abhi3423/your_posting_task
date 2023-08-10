import { useState } from "react";
import { Fragment } from "react";
import SuccessModal from "./modal";
import { useDataContext } from "@/context/context";
import Delete from "./delete";
import Edit_Form from "./form";

const Card = ({ Data, index}) => {

    const { popup, setpopup } = useDataContext();
    const [isCardEditing, setIsCardEditing] = useState(false);

    function handleEditClick() {
        setIsCardEditing(true);
    }

    return (
        <Fragment>
            {isCardEditing
                ?
                <Edit_Form setCard={setIsCardEditing} Data={Data} index={index}/>
                :
                <div className='flex gap-8 text-center shadow-md border-2 rounded-md p-3'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold'>Scrips Value</p>
                        <p className='text-sm'>Rs. {Data.scrips}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold'>Priced at</p>
                        <p className='text-sm'>Rs. {Data.priced}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold'>Net Scrips Value</p>
                        <p className='text-sm'>Rs. {Data.net_scripts}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold'>Expiry Date</p>
                        <p className='text-sm'>{Data.expiry}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold'>Scrips Type</p>
                        <p className='text-sm'>{Data.type}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>

                        <button
                            className="flex items-center justify-center rounded-full w-6 h-6 bg-purple-200"
                            onClick={handleEditClick}
                        >
                            <svg
                                width="14"
                                height="20"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.3946 1.44704L7.6782 6.16344C7.4345 6.40679 7.2683 6.71684 7.20054 7.05451L6.76489 9.23524L8.94562 8.79876C9.28327 8.73123 9.59292 8.5657 9.83669 8.32193L14.5531 3.60553C14.6948 3.4638 14.8072 3.29555 14.8839 3.11037C14.9606 2.92519 15.0001 2.72672 15.0001 2.52628C15.0001 2.32585 14.9606 2.12738 14.8839 1.9422C14.8072 1.75702 14.6948 1.58877 14.5531 1.44704C14.4114 1.30531 14.2431 1.19288 14.0579 1.11618C13.8728 1.03948 13.6743 1 13.4738 1C13.2734 1 13.0749 1.03948 12.8898 1.11618C12.7046 1.19288 12.5363 1.30531 12.3946 1.44704Z"
                                    stroke="#219EBC"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M13.3531 10.8824V13.353C13.3531 13.7899 13.1795 14.2088 12.8706 14.5177C12.5618 14.8266 12.1428 15.0001 11.706 15.0001H2.64708C2.21024 15.0001 1.7913 14.8266 1.48242 14.5177C1.17353 14.2088 1 13.7899 1 13.353V4.29411C1 3.85728 1.17353 3.43834 1.48242 3.12945C1.7913 2.82056 2.21024 2.64703 2.64708 2.64703H5.11769"
                                    stroke="#219EBC"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            className="flex flex-row w-fit h-fit gap-2 border-[#9E0000] text-[#9E0000] hover:text-[#9E0000]"
                            onClick={() => setpopup(true)}
                        >
                            <div className="flex rounded-full bg-red-300 p-1">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.75 3.25C4.75 2.65326 4.98705 2.08097 5.40901 1.65901C5.83097 1.23705 6.40326 1 7 1V1C7.59674 1 8.16903 1.23705 8.59099 1.65901C9.01295 2.08097 9.25 2.65326 9.25 3.25V3.25M4.75 3.25H9.25M4.75 3.25H2.5M9.25 3.25H11.5M13 3.25H11.5M1 3.25H2.5M2.5 3.25V11.5C2.5 11.8978 2.65804 12.2794 2.93934 12.5607C3.22064 12.842 3.60218 13 4 13H10C10.3978 13 10.7794 12.842 11.0607 12.5607C11.342 12.2794 11.5 11.8978 11.5 11.5V3.25"
                                        stroke="#9E0000"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>

                    </div>
                </div>
            }

            {popup && (
                <SuccessModal successState={popup}>
                    <Delete no={index} />
                </SuccessModal>
            )}
        </Fragment>

    );
}

export default Card;