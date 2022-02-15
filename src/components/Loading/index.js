const Loading = ({ src }) => {
    return (
        <div className="fixed w-full h-full bg-black z-50 after:content-[''] after:absolute top:w-1/2 left:h-1/2 after:bg-spinner after:bg-contain after:bg-no-repeat after:-scroll-mt-37.5 after:-scroll-ml-17.5 after:w-37.5 after:h-37.5 after:animate-spin">
            <img
                className="w-12.5 h-12.5 absolute top-1/2 left-1/2 -mt-24 -ml-6"
                src={require(`../../assets/images/users/${src}.png`)}
                alt="Profile"
            />
        </div>
    );
};

export default Loading;
