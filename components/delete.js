import { Fragment, React } from "react";
import cancel from "../public/cancel.svg"
import Image from "next/image";


const Delete = ({setdisplay, index }) => {

    async function deleteData(number) {
        try {
            const res = await fetch(`/api/data?index=${number}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message);
            }

            console.log("Item deleted successfully");
        } catch (err) {
            console.error("Error deleting item:", err.message);
        }
    }


    const handleDelete = () => {
        deleteData(index)
        setdisplay(false);
    };


    return (
        <Fragment>
            <div className="flex flex-col gap-4 items-center font-bold text-lg">
                <Image src={cancel} alt="" />
                <p>Are you sure ?</p>
                <p>do you really want to delete this post ?</p>
                <div className="flex gap-4">
                    <button onClick={() => setdisplay(false)} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white">Cancel</button>
                    <button onClick={handleDelete} className="p-1 bg-red-400 rounded-lg hover:bg-red-700 hover:text-white">Delete</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Delete;
