import { memo, useContext, useEffect, useState } from 'react';

import { ToggleContext } from '../../contexts/toggleContext';

// Icons
import closeIcon from '../../assets/images/icons/close-slim.png';
import openIcon from '../../assets/images/icons/add.png';

const AccordionItem = ({ item }) => {
    const { currentItemOpen, setCurrentItemOpen } = useContext(ToggleContext);
    const [toggleShow, setToggleShow] = useState(false);

    const handleClick = (id) => {
        setToggleShow(!toggleShow);
        setCurrentItemOpen(id);
    };

    useEffect(() => {
        // Close if another Accordion open
        if (toggleShow && currentItemOpen !== item.id) {
            setToggleShow(!toggleShow);
        }
    }, [currentItemOpen, item.id, toggleShow]);

    return (
        <div className="accordion-item text-white mt-0 mb-3 max-w-2xl w-full mx-auto first-of-type:mt-12 ">
            {/* Header */}
            <div
                className="flex justify-between items-center cursor-pointer mb-1 text-base sm:text-2xl font-normal px-8 py-5 select-none bg-gray-800"
                onClick={() => handleClick(item.id)}
            >
                {item.header}
                {toggleShow === true ? (
                    <img
                        src={closeIcon}
                        className="w-4 sm:w-6 brightness-0 invert"
                        alt="Close"
                    />
                ) : (
                    <img
                        src={openIcon}
                        className="w-4 sm:w-6 brightness-0 invert"
                        alt="Open"
                    />
                )}
            </div>
            {/* Body */}
            {toggleShow ? (
                <div className="text-base leading-5 sm:text-2xl sm:leading-normal font-normal bg-gray-800 py-3 pl-9 pr-5 select-none whitespace-pre-wrap max-h-fit transition-all duration-300">
                    {item.body}
                </div>
            ) : null}
        </div>
    );
};

export default memo(AccordionItem);
