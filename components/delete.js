import { Fragment, React } from "react";
import cancel from "../public/cancel.svg"
import side_cancel from "../public/side_cancel.svg"
import Image from "next/image";
import { useDataContext } from "@/context/context";


const Delete = ({ index }) => {

    const { setpopup } = useDataContext()

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
            else{
                window.location.reload();
            }

            console.log("Item deleted successfully");
        } catch (err) {
            console.error("Error deleting item:", err.message);
        }
    }


    const handleDelete = () => {
        deleteData(index)
        setpopup(false);
    };


    return (
        <Fragment>
            <div className="flex justify-end p-2">
                <div className="hover:cursor-pointer" onClick={() => setpopup(false)}>
                    <Image width={20} height={20} src={side_cancel} alt="" />
                </div>
            </div>
            <div className="flex flex-col py-10 px-16  gap-2 items-center">
                <Image width={60} height={60} src={cancel} alt="" />
                <p className="font-semibold text-lg">Are you sure ?</p>
                <p className="">do you really want to delete this post ?</p>
                <div className="flex gap-4 pt-4">
                    <button onClick={() => setpopup(false)} className="px-3 bg-[#D9D9D9]">Cancel</button>
                    <button onClick={handleDelete} className="px-3 bg-[#E9352AE5] text-white">Delete</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Delete;
