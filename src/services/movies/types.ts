export interface TitleList {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface TitleDetails {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
}

export interface IGetMovieListByTitleProps {
  search: string;
  page: number;
}

export interface IGetMovieByIdProps {
  imdbID: string;
}
