import { user } from "../services";
import { useQuery } from "react-query";

export const useUser = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: user.info
     })
     return { data, isLoading }
};
