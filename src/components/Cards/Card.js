import { useState, useEffect } from 'react';

import FeatureContext from '../../contexts/FeatureContext';
import Entity from './Entity';
import Feature from './Feature';
const Card = ({ slideItem, category }) => {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState();

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <div className="flex flex-col mb-12.5 box-border first-of-type:lg:-mt-40 last-of-type:mb-0">
                <p className="md:text-3xl text-2xl font-bold mx-14 mb-4">
                    {slideItem.title}
                </p>
                <div className="flex flex-row">
                    {slideItem?.data?.map((item) => (
                        <Entity
                            key={item.id}
                            item={item}
                            category={category}
                            setItemFeature={setItemFeature}
                            setShowFeature={setShowFeature}
                        />
                    ))}
                </div>
                <Feature category={category} />
            </div>
        </FeatureContext.Provider>
    );
};

export default Card;
