import { useMutation, useQueryClient } from 'react-query';
import { auth } from '../services';


 export const useRegister = () => {

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: auth.login,
        onSuccess: (response) => {
          console.info('>mutation response', response)
          if(response.success) 
          queryClient.invalidateQueries({ queryKey: ['user'] })
        },
    })
   return mutate
};