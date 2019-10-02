import { iconPath, FILE_TYPES } from './constants';

export const getFileTypes = (TYPE) => {
  console.log(TYPE, FILE_TYPES.css);
  switch(TYPE) {
    case FILE_TYPES.html: return `${iconPath}/html-icon.svg`;
    case FILE_TYPES.css: return `${iconPath}/css-icon.svg`;
    default: return `${iconPath}/sticky-note-solid.svg`;
  }
}

