import React from "react";
import Header from "../../common/header/Header";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import "../../common/moviesData";
import "./Home.css";
import moviesData from "../../common/moviesData";
import ImageListItem from "@material-ui/core/ImageListItem";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ImageList from "@material-ui/core/ImageList";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import genres from "../../common/genre";
import artists from "../../common/artists";
import moment from 'moment';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
    return (
      <div className="movie">
        <GridList cellHeight={250}>
          {moviesData.map((tile) => {
            return (
              <GridListTile>
                <img src={tile.poster_url} alt={tile.title} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}
export class Left extends React.Component {
  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: "rgba(255, 255, 255, 0.54)",
      },
    }));
    return (
      <div>
        <ImageList rowHeight={350} className={{ useStyles }.imageList}>
          <ImageListItem key="Subheader" cols={4}></ImageListItem>
          {moviesData.map((item) => (
            <ImageListItem>
              <img src={item.poster_url} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <span>
                    Release Date: {moment(item.release_date).format("ddd ll")}
                  </span>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing(1),
    width: "25ch",
  },
  Control: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },

  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
    marginLeft: 10,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function OutlinedCard() {
  const classes = useStyles();
  const [genreName, setgenre] = React.useState([]);

  const handleChange = (event) => {
    setgenre(event.target.value);
  };
  const [artistName, setartist] = React.useState([]);

  const handleChange1 = (event) => {
    setartist(event.target.value);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Movie Name" />
        </form>
        <FormControl className={classes.Control} id="formcontrol">
          <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={genreName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {genres.map((names) => (
              <MenuItem key={names.name} value={names.name}>
                <Checkbox checked={genreName.indexOf(names.name) > -1} />
                <ListItemText primary={names.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.Control} id="formcontrol">
          <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={artistName}
            onChange={handleChange1}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {artists.map((names) => (
              <MenuItem
                key={names.first_name + names.last_name}
                value={names.first_name + names.last_name}
              >
                <Checkbox
                  checked={
                    artistName.indexOf(names.first_name + names.last_name) > -1
                  }
                />
                <ListItemText
                  primary={names.first_name + " " + names.last_name}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Release Date Start"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <form
          className={classes.container}
          noValidate
          style={{ marginTop: "8px" }}
        >
          <TextField
            id="date"
            label="Release Date End"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </CardContent>
      <div className="button">
        <Button variant="contained" color="primary">
          APPLY
        </Button>
      </div>
    </Card>
  );
}
