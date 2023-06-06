import Api from './api';

export const getMovieListByTitle = async (title = '') => {
  return await Api({
    s: title,
  });
};

export const getMovieById = async (id = '') => {
  return await Api({
    i: id,
  });
};
