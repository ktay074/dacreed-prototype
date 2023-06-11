import DefaultCoursePic from '../../images/prototype1/defaultcoursepic.png'     
import Image from 'next/image'
import { SecondaryButton } from './buttons'

const CourseCard: React.FC = () => {

    return (
        <div className='bg-[#D7D8F9] rounded-lg px-4 py-4 border-2 border-[#898989] hover:cursor-pointer'>
            <Image src={DefaultCoursePic} alt='default course pic'></Image>

            <div className='py-4'>
                <h3 className='font-semibold'>Course Title</h3>
                <p>Course Description</p>
            </div>

            <div className='flex justify-end items-center text-[#393DE3]'>
                <SecondaryButton text='EDIT'/>
            </div>
        </div>
    )
}

export default CourseCard