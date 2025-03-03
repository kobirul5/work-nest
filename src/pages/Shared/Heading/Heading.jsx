
const Heading = ({ title, subtile }) => {
    return (
        <div className="container mx-auto">
            <h1 className="mb-5  text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-[#777777]">{subtile}</p>
        </div>
    );
};

export default Heading;