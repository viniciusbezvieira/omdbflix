import { useState, useEffect } from 'react';
import { getMovieListByTitle } from '../../services/movies/movies';
import {
  TitleList,
  IGetMovieListByTitleProps,
} from '../../services/movies/types';

export const useSearchMoviesByTitle = (props: IGetMovieListByTitleProps) => {
  const [data, setData] = useState<TitleList[]>([]);

  useEffect(() => {
    if (props.search.trim().length >= 3) {
      getMovieListByTitle(props)
        .then(res => {
          setData(oldData => [...oldData, ...res.data.Search]);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [props.search, props.page]);

  return [data, setData] as const;
};
