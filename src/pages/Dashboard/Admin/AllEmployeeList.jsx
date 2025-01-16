import useVerifiedUser from "../../../hooks/useVerifiedUser";

const AllEmployeeList = () => {
    const [verifiedUser] = useVerifiedUser()
    console.log(verifiedUser)
    return (
        <div>
            All verifiedUser
        </div>
    );
};

export default AllEmployeeList;