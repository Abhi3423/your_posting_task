import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/postings');
  };


  return (
    <main
      className={`flex min-h-screen flex-col gap-10 items-center p-24`}
    >
      <div className='text-4xl'>DUTY CENTRAL</div>
      <button className='p-2 bg-blue-400 rounded-lg font-bold hover:text-white hover:scale-125 hover:transition-transform hover:duration-700' onClick={handleButtonClick}>
        YOUR POSTINGS
      </button>
    </main>
  )
}
