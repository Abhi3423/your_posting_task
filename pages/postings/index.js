import Image from 'next/image'
import { useState, useEffect } from 'react'
import Card from '@/components/post_card';
import { useDataContext } from "@/context/context";
import Navbar from '@/components/navbar';
import { Fragment } from 'react';

export default function Home() {

    const [Data, setData] = useState([])
    const { edit, setedit } = useDataContext();

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
    }, [])


    return (
        <Fragment>
            <main className="flex min-h-screen flex-col gap-6 items-center p-24">
                <h1 className='font-bold text-2xl'> Your Postings</h1>
                <div className='flex flex-col gap-4 bg-white rounded-3xl shadow-[#E2ECF940] shadow-2xl px-5 pt-8 pb-16'>
                    {Data.map((data, index) => (
                        <Card Data={data} index={index} />
                    ))}
                </div>
            </main>
        </Fragment>

    )
}
