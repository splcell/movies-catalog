import { useMemo } from 'react';

//хук для фильтрации данных с помощью выбора опций в селекте. Если фильтр не выбран, возвращается обычная data, если выбран, то отфильтрованная
export const useSelectedMovies = (data, filter) => {
    const filteredMovies = useMemo(() => {
        if(filter){
            return data.filter(item => item.Type === filter);
        } else {
            return data
        }
        
    }, [data, filter]);

    return filteredMovies;

};