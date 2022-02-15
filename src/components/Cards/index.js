import Card from './Card';

const Cards = ({ slideRows, category }) => {
    return (
        <div className="flex flex-col">
            {slideRows?.map((slideItem) => (
                <Card
                    key={`${category}-${slideItem.title.toLowerCase()}`}
                    slideItem={slideItem}
                    category={category}
                />
            ))}
        </div>
    );
};

export default Cards;
