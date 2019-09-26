import React from 'react';
import SHOP_DATA from './ShopData';

// Styles
import './Shop.scss';

// Components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h2>TEMP SHOP PAGE TITLE</h2>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
