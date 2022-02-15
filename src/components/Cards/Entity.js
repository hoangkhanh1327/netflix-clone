const Entity = ({ item, category, setItemFeature, setShowFeature }) => {
    return (
        <div
            className="group flex flex-col mr-1 relative cursor-pointer transition-transform duration-200 hover:scale-125 hover:z-999"
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
        >
            <img
                className="border-none w-full max-w-xs cursor-pointer h-auto p-0 m-0"
                src={require(`../../assets/images/${category}/${item.genre}/${item.slug}/small.jpg`)}
                alt=""
            />

            <div className="hidden absolute bottom-0 p-2.5 bg-meta group-hover:block group-hover:z-999">
                <p className="text-sm text-white font-bold my-0 select-none hidden group-hover:block z-999">
                    {item?.title}
                </p>
                <p className="mt-1 text-xs text-gray-50 mb-0 select-none hidden group-hover:block z-999 leading-normal">
                    {item?.description}
                </p>
            </div>
        </div>
    );
};

export default Entity;
