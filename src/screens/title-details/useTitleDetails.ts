import { useState, useEffect } from 'react';
import { getMovieById } from '../../services/movies/movies';
import { TitleDetails, IGetMovieByIdProps } from '../../services/movies/types';

export const useMovieById = (props: IGetMovieByIdProps): TitleDetails => {
  const [data, setData] = useState({});

  useEffect(() => {
    getMovieById(props)
      .then(res => {
        if (res.data.Poster === 'N/A') {
          res.data.Poster =
            'https://placehold.co/200x275/404040/9f9f9f.png?text=No+Poster';
        }
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return data as TitleDetails;
};
