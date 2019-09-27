/* eslint-disable no-useless-constructor */
import React from 'react';
import SECTION_DATA from './DirectoryData';

// Styles
import './Directory.scss';

// Components
import MenuItem from '../menu-item/MenuItem';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTION_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
