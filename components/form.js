import { useState } from "react";

const Edit_Form = ({ setCard, Data, index }) => {

    const [cardDetails, setcardDetails] = useState({
        scrips: Data.scrips,
        priced: Data.priced,
        net_scripts: Data.net_scripts,
        expiry: Data.expiry,
        type: Data.type,
    });

    const handleInput = (key, value) => {
        setcardDetails({
            ...cardDetails,
            [key]: value,
        });
    };


    async function updateData(index) {
        try {
            const res = await fetch(`/api/data/?index=${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardDetails),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error updating item:', error);
                });

            console.log("Item updated successfully");
        } catch (err) {
            console.error("Error updating item:", err.message);
        }
    }


    function handlesubmit() {
        updateData(index);
        setCard(false);
        window.location.reload();
    }

    const input_class = `bg-white border-b-2 border-gray-200 w-20 h-8 text-sm indent-2 focus:outline-none`

    return (
        <form className="flex flex-col bg-[#F6F8FF] border-[#03AFFF] items-center sm:flex-row gap-8 text-center shadow-md border-2 rounded-md px-6 py-8" onSubmit={handlesubmit}>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Scrips Value</p>
                <input className={input_class} type="text" placeholder="Rs." value={cardDetails.scrips} onChange={(event) => handleInput("scrips", event.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Priced at</p>
                <input className={input_class} type="text" placeholder="Rs." value={cardDetails.priced} onChange={(event) => handleInput("priced", event.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Net Scrips Value</p>
                <input className={input_class} type="text" placeholder="Rs." value={cardDetails.net_scripts} onChange={(event) => handleInput("net_scripts", event.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Expiry Date</p>
                <input className={input_class} type="text" placeholder="dd/mm/yyyy" value={cardDetails.expiry} onChange={(event) => handleInput("expiry", event.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Scrips Type</p>
                <input className={input_class} type="text" placeholder="Rs." value={cardDetails.type} onChange={(event) => handleInput("type", event.target.value)} />
            </div>
            <div className="flex gap-2">
                <button onClick={handlesubmit} type="submit" className="px-4 py-1 rounded-lg border text-[#00AEFF] border-[#00AEFF] shadow-[#4676FB2B] shadow-lg hover:bg-green-600 hover:text-white">Submit</button>
                <button onClick={() => { setCard(false) }} type="button" className="px-4 py-1 rounded-lg text-[#00AEFF] border border-[#00AEFF] shadow-[#4676FB2B] shadow-lg hover:bg-red-600 hover:text-white">Cancel</button>
            </div>
        </form>
    );
}

export default Edit_Form;