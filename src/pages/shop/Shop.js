import React from 'react';

import SHOP_DATA from './ShopData';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>
        <h2>Shop Page!</h2>
      </div>
    );
  }
}

export default Shop;
