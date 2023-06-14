import DefaultCoursePic from '../../images/prototype1/defaultcoursepic.png'     
import Image from 'next/image'
import { SecondaryButton } from './buttons'

interface CourseCardProps {
    file_name: string;
    file_content: string  
} 

const CourseCard: React.FC<CourseCardProps> = (props) => {

    return (
        <div className='bg-[#D7D8F9] rounded-lg px-4 py-4 border-2 border-[#898989] hover:cursor-pointer'>
            <Image src={DefaultCoursePic} alt='default course pic'></Image>

            <div className='py-4'>
                <h3 className='font-semibold'>{props.file_name}</h3>
                <p>{props.file_content}</p>
            </div>

            <div className='flex justify-end items-center text-[#393DE3]'>
                <SecondaryButton text='EDIT'/>
            </div>
        </div>
    )
}

export default CourseCard