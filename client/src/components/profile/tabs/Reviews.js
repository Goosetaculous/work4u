import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1000,

        overflowY: 'auto',
    },
};

/*const tilesData = [
    {
        img: 'https://pixy.org/images/placeholder.png',
        title: 'Mow my Law',
        author: 'UCSD',
        featured: true,
    },
    {
        img: 'https://pixy.org/images/placeholder.png',
        title: 'Clean my car',
        author: 'Carlsbad',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'images/grid-list/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'images/grid-list/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];*/




class Reviews extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.API.getReviews(localStorage.getItem("db_id"))
    }

    render(){
        return(
            <div style={styles.root}>
                {console.log(localStorage.getItem("db_id"))}
                {/*<GridList*/}
                    {/*cellHeight={180}*/}
                    {/*style={styles.gridList}*/}
                    {/*cols={4}*/}
                    {/*padding={3}*/}
                {/*>*/}
                    {/*{tilesData.map((tile) => (*/}
                        {/*<GridTile*/}
                            {/*title={tile.title}*/}
                            {/*titlePosition="top"*/}
                            {/*subtitle={tile.author}*/}
                            {/*actionIcon={ <FlatButton label="Apply" backgroundColor="#a4c639" primary={true} />}*/}
                        {/*>*/}
                        {/*</GridTile>*/}
                    {/*))}*/}
                {/*</GridList>*/}
            </div>

        )
    }

}

export default Reviews;