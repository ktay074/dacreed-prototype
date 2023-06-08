
import { useState } from 'react';
import { SecondaryButton } from "~/components/prototype1/buttons";

interface ModalProps {
    children: React.ReactNode
}

const SectionModal: React.FC<ModalProps> = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
        // Modal Container
        <div className={`z-${open ? '40' : '0'} opacity-${open ? '20' : '0'} `}>

            {/* Content */}
            <div className="position: absolute bg-white px-40 py-40">
                {children}
                <div>
                    <SecondaryButton text="Close"/>
                </div>
            </div>
        </div> 
    )
}

export default SectionModal