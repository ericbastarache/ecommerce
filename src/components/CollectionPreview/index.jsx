import React from 'react';
import CollectionItem from '../CollectionItem';
import './styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...collectionItems }) => (
            <CollectionItem key={id} {...collectionItems} />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview; 