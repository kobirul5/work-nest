import { useContext } from 'react';

import Spinner from '../pages/Shared/Spinner/Spinner';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import useVerifyAdmin from '../hooks/useVerifyAdmin';

const AdminPrivate = ({children}) => {
    const {loading} = useContext(AuthContext)
    const [verifyAdmin, isLoading] = useVerifyAdmin()
    console.log(verifyAdmin)
    if( isLoading){
        return <Spinner></Spinner>;
    }
    if(verifyAdmin){
        return children;
    }

    return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default AdminPrivate;