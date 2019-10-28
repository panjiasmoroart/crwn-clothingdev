import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  //sections dari state array objectnya 
  directorydata => directorydata.sections
)

