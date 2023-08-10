import Image from 'next/image'
import { useState, useEffect } from 'react'
import Card from '@/components/post_card';

export default function Home() {

    const [Data, setData] = useState([])

    async function getData() {
        try {
            const res = await fetch("/api/data");
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
        console.log(Data)
    }, [])


    return (
        <main className="flex min-h-screen flex-col gap-6 items-center p-24">
            <h1 className='font-bold text-2xl'> Your Postings</h1>
            <div className='flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4'>
                {Object.keys(Data).map((index) => (
                    <Card Data={Data[index]} key={index} />
                ))}
            </div>
        </main>
    )
}
