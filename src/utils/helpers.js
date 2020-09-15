import { LISTS, CSV_DELIMITER, YT_THUMBNAIL_QUALITY } from "utils/constants";


// Calculating the average ratings of all movies
export const calcMoviesAvgsRates = movies => {
  const { rankProp, rateProp} = LISTS["average"];
  const listsCount = Object.keys(LISTS).length;
  const moviesCount = movies.length;

  // cacl rates avg
  const moviesWithAvgRates = movies.map(movie => {
    let totalRates = 0;
    
    for(const listId in LISTS) {
      if(listId === "average") continue
      const rate = Number(movie[LISTS[listId].rateProp]);
      totalRates += rate > 10 ? rate : rate * 10;
    }

    return {
      ...movie,
      [rankProp]: 0,
      [rateProp]: (totalRates / (listsCount - 1)).toFixed(2),
    };
  });

  // sort movies by avg rates
  moviesWithAvgRates.sort((a, b) => b[rateProp] - a[rateProp]);

  // give rank value to movies
  for(let i = 0; i < moviesCount ; ++i) {
    moviesWithAvgRates[i][rankProp] = i + 1;
  }

  return moviesWithAvgRates;
};


// Filter movies by a given listid
export const filterMoviesByListName = (movies, listId) => {
  if (movies.length === 0) return [];
  if (listId === "average") return movies;
  
  // rank property name
  const rankProp = LISTS[listId].rankProp;

  // remove out of rank movies rank == 0
  const filtredMovies = movies.filter((m) => parseInt(m[rankProp]) > 0);

  // sort movies
  filtredMovies.sort((a, b) => a[rankProp] - b[rankProp]);

  // select only consecutive ranked movies
  const result = [filtredMovies[0]];
  for (let i = 1; i < filtredMovies.length; ++i) {
    if (filtredMovies[i][rankProp] - filtredMovies[i - 1][rankProp] > 1) break;
    result.push(filtredMovies[i]);
  }

  return result;
};

// Youtube helpers
export const Youtube = {
  getThumbnailById: (id, quality = YT_THUMBNAIL_QUALITY.MEDIUM) => `http://img.youtube.com/vi/${id}/${quality}.jpg`,
  getUrlById: (id) => `https://www.youtube.com/watch?v=${id}`,
  getEmbedUrl: (id) => `https://www.youtube.com/embed/${id}`,
};


// Get image path
export const getImagePath = (name) => {
  return `/images/${name}`;
};


// Detecting WebP support
// https://stackoverflow.com/questions/5573096/detecting-webp-support
export function canUseWebP() {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  
  // very old browser like IE 8, canvas not supported
  return false;
}


/* CSV Object
-------------
* Parse <=> Stringify CSV Data, jut like what JSON do for json data 
* I think this will be my next project, A simple interface to deal with CSV data, 
* jut like what JSON do for json data  :) 
*/
export const CSV = {
  stringify: (objArray) => console.log("To do -_-", objArray),
  parse: (text, delimiter = CSV_DELIMITER) => {
    const rows = text.split("\n");

    if (rows.length < 2) {
      return [];
    }

    let rowIndex = 0;
    const result = [];
    const headers = rows[rowIndex++].split(delimiter).map((h) => h.trim());
    const nbColumns = headers.length;

    while (rows[rowIndex]) {
      const rowCells = rows[rowIndex++].split(delimiter);
      if (rowCells.length !== nbColumns) {
        console.error(
          `Error at line ${
            rowIndex + 1
          }: Number of cells at this row not equal to the number of header cells (${nbColumns})`
        );
        continue;
      }

      const parsedRow = {};
      for (let i = 0; i < nbColumns; ++i) {
        parsedRow[headers[i]] = rowCells[i];
      }

      result.push(parsedRow);
    }

    return result;
  },
};