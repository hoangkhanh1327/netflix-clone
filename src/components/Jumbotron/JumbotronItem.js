const JumbotronItem = ({ item }) => {
    return (
        <div className="flex px-1/20 py-12 border-b-8 border-gray-600 text-white overflow-hidden">
            <div
                className={`flex items-center justify-between m-auto max-w-5xl w-full flex-col  lg:flex-${item.direction}`}
            >
                <div className="w-full pt-0 px-11 text-center lg:p-0 lg:w-1/2 lg:text-left">
                    <h2 className="text-4xl md:text-5xl leading-tight mb-2">
                        {item.title}
                    </h2>
                    <h3 className="text-lg sm:text-2xl font-normal leading-normal">
                        {item.subTitle}
                    </h3>
                </div>
                <div className="w-full pt-0 px-11 text-center lg:p-0 lg:w-1/2">
                    <img src={require(`../../assets${item.image}`)} alt="" />
                </div>
            </div>
        </div>
    );
};
export default JumbotronItem;
