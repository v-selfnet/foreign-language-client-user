
const SectionTitle = ({head, subHead}) => {
    return (
        <div className="text-center my-10">
            <p>{subHead}</p>
            <p className="py-4 mx-auto border-y-4 w-6/12 uppercase text-2xl text-center">{head}</p>
            
        </div>
    );
};

export default SectionTitle;