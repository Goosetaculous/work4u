import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://d30y9cdsu7xlg0.cloudfront.net/png/466667-200.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const HomePageGridList = () => (
  <div style={styles.root}>
    12345
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default HomePageGridList;