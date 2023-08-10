import { useDataContext } from "@/context/context";

const Edit_Form = () => {

    const {setedit} = useDataContext();

    return (
        <form className="flex gap-8 text-center shadow-md border-2 rounded-md p-3">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Scrips Value</p>
                <input className="w-12 h-8 text-sm" type="text" placeholder="Rs." />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Priced at</p>
                <input className="w-12 h-8 text-sm" type="text" placeholder="Rs." />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Net Scrips Value</p>
                <input className="w-12 h-8 text-sm" type="text" placeholder="Rs." />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Expiry Date</p>
                <input className="w-12 h-8 text-sm" type="text" placeholder="Rs." />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Scrips Type</p>
                <input className="w-12 h-8 text-sm" type="text" placeholder="Rs." />
            </div>
            <div className="flex flex-col gap-2">
                <button className="px-2 py-1 rounded-lg border border-blue-300 hover:bg-green-600 hover:text-white">Submit</button>
                <button onClick={() => {setedit(false)}} className="px-2 py-1 rounded-lg border border-blue-300 hover:bg-red-600 hover:text-white">Cancel</button>
            </div>
        </form>
    );
}

export default Edit_Form;