import React from 'react';
import MenuItem from '../menu-item/MenuItem';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/DirectorySelectors';
import { createStructuredSelector } from 'reselect';

import './Directory.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>      
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

/*
{
  this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
  ))
}


es6 tricks 
{
  this.state.sections.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ))
}
*/

export default connect(mapStateToProps)(Directory);
