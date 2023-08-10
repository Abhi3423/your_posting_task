import { Fragment, React } from "react";
import cancel from "../public/cancel.svg"
import Image from "next/image";
import { useDataContext } from "@/context/context";


const Delete = () => {

    const { setpopup } = useDataContext();

    return (
        <Fragment>
            <div className="flex flex-col gap-4 items-center font-bold text-lg">
                <Image src={cancel} alt="" />
                <p>Are you sure ?</p>
                <p>do you really want to delete this post ?</p>
                <div className="flex gap-4">
                    <button onClick={() => { setpopup(false) }} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white">Cancel</button>
                    <button className="p-1 bg-red-400 rounded-lg hover:bg-red-700 hover:text-white">Delete</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Delete;
