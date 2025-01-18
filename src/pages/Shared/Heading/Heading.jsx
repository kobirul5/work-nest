
const Heading = ({ title, subtile }) => {
    return (
        <div>
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subtile}</p>
        </div>
    );
};

export default Heading;