import Image from "next/image"
import Avatar from "../../images/prototype1/avatarplaceholder.png"

const UserAvatar: React.FC = () => {
    return (
        <div className="flex flex-grow border-b-2 border-b-white py-4 w-40">
            <div className="mr-4">
                <Image src={Avatar} alt="avatar"></Image>
            </div>
            <div className="">
                <h5>Good Day!</h5>
                <h4 className="text-xlg">John Smith</h4>
            </div>
        </div>
    )
}

export { UserAvatar }