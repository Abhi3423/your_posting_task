import { useState } from "react";
import { Fragment } from "react";
import SuccessModal from "./modal";
import { useDataContext } from "@/context/context";
import Delete from "./delete";
import Edit_Form from "./form";
import edit from "../public/edit.svg"
import Image from "next/image";
import delet from "../public/delete.svg"

const Card = ({ Data, index}) => {

    const { popup, setpopup } = useDataContext()
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
                <div className='flex flex-col sm:flex-row  gap-8 text-center shadow-md border-4 rounded-md px-6 py-8 border-[#F7F7F7]'>
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
                            className="flex items-center justify-center rounded-full w-8 h-8"
                            onClick={handleEditClick}
                        >
                            <Image src={edit} alt="edit"/>
                        </button>

                        <button
                            className="flex items-center justify-center rounded-full w-8 h-8"
                            onClick={() => setpopup(true)}
                        >
                            <Image src={delet} alt="delete"/>
                        </button>

                    </div>
                </div>
            }

            {popup && (
                <SuccessModal successState={popup}>
                    <Delete index={index} />
                </SuccessModal>
            )}
        </Fragment>

    );
}

export default Card;