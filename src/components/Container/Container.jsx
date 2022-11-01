import React from 'react';
import Card from '../Card/Card';

import './container.css';

const Container = () => {
    let contador = 5;
    
  return (
    <div id='container'>
      <Card name="Lionel Messi" img='https://assets-es.imgfoot.com/media/cache/642x382/lionel-messi-2223-goat.jpg' />
      <Card name="Cristiano Ronaldo" img='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RAQECNSLAQDJZFJPSBDKCYBOOU.jpg' />
      <Card name="Neymar" img='https://imagenes.elpais.com/resizer/B9PHqy1z6p-EHDPw7y8lKowfz38=/1960x1470/filters:focal(1690x586:1700x596)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/FCGE3FZSEXQZ2IBUEKSGGLH6HQ.jpg' />
    </div>
  );
};

export default Container;
