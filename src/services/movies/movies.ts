import Api from '../api';
import { IGetMovieListByTitleProps, IGetMovieByIdProps } from './types';

export const getMovieListByTitle = async ({
  search = '',
  page = 1,
}: IGetMovieListByTitleProps): Promise<any> => {
  return await Api({
    s: search,
    page: page,
  });
};

export const getMovieById = async ({
  imdbID = '',
}: IGetMovieByIdProps): Promise<any> => {
  return await Api({
    i: imdbID,
  });
};
