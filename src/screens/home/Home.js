import React from 'react';
import Header from '../../common/header/Header';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import '../../common/moviesData';
import './Home.css';
import moviesData from '../../common/moviesData';
import ImageListItem from '@material-ui/core/ImageListItem';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageList from '@material-ui/core/ImageList';
class Home extends React.Component {
    render() {
        return (
            <div>
               
                <heading>
                    <span>Upcoming Movies</span>
                </heading>
            </div>
        );
    }
}
export default Home;

export class GridList1 extends React.Component {
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: theme.palette.background.paper,
            },
            imageList: {
              width: 500,
              height: 450, 
            },
            icon: {
              color: 'rgba(255, 255, 255, 0.54)',
            },
          }));
          
        return (
            <div className="movie">
                <GridList
                    cellHeight={250}

                >

                    {moviesData.map((tile) => {
                        return (
                            <GridListTile>
                                <img src={tile.poster_url} alt={tile.title} />
                                <GridListTileBar title={tile.title} />

                            </GridListTile>
                        );
                    })}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                          <div>
      <ImageList rowHeight={350} className={{useStyles}.imageList} id="image" >
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
        </ImageListItem>
        {moviesData.map((item) => (
          <ImageListItem>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date: {item.release_date}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
 
                    </div>
                  
                </div>

            </div>

        );
    }
}