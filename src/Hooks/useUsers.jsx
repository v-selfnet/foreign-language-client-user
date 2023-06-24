import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../ProviderContext/AuthProvider';

const useUsers = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: mongoUsers = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`)
            return res.json()
        },
    })
    return [refetch, mongoUsers]

};

export default useUsers;