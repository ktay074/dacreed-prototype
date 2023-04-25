import Link from 'next/link';
import Slider from '~/components/slider';
import uploadbackground from '../images/uploadbackground.svg'

export default function UploadPage() {
  return (
    <div className=' sm:my-10 md:mx-32 '>
      <div className='flex' >
        <div className="m-10 bg-indigo-500 text-slate-100 rounded-full flex flex-col justify-center items-center w-2/4">
            <p className='mb-5 text-xl'>Drag and drop files here</p>
            <p className='text-2xl underline'>Click to Upload</p>
            <p className='text-base underline pt-10'>How to?</p>
        </div>
        <div className='flex flex-col w-2/4 mb-20'>
            <h1 className='font-bold text-5xl pb-10'>Course Name</h1>
            <p className='text-indigo-700 font-semibold pb-6'>Dial your preferences</p>
            
            <Slider />
            <Slider />
            <Slider />
            <div className='w-4/5 flex flex-col '>
            <button className='text-2xl text-slate-100 bg-indigo-700 rounded-3xl px-4 py-2 mt-5 w-2/4 self-end'>Generate</button>
            <div className='w-full bg-red-200'></div>
            </div>
        </div>
      </div>
      <div className='flex w-full bg-indigo-700 justify-around h-20 items-center text-slate-100'>
        <div className='flex gap-3'>
            <div className='bg-indigo-400 px-4 py-2 rounded-full'>1</div>
            <div className='self-center'>Upload</div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-indigo-300 px-4 py-2 rounded-full'>2</div>
            <div className='self-center '>Generate</div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-indigo-200 px-4 py-2 rounded-full'>3</div>
            <div className='self-center'>Edit</div>
        </div>
      </div>

    </div>
  );
}