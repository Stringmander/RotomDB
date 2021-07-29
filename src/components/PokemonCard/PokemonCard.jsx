import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CapitalCase } from "../../util";
import StatGraph from "../StatGraph";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function PokemonCard({ result, handleAddToTeam }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id, name, types, abilities, stats } = result;

  return name ? (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
            alt="pokemon"
          />
        }
        title={CapitalCase(name)}
        subheader={types.map((i) => (
          <img
            src={`/icons/${i.type.name}_icon.png`}
            alt="type icon"
            height={25}
          />
        ))}
      />
      <CardMedia
        className={classes.media}
        image={types.map((i) => `/img/${i.type.name}.png`)[0]}
        title={CapitalCase(name)}
      />
      <CardContent>
        <h4>Types</h4>
        <ul>
          {types.map((i) => (
            <li>{CapitalCase(i.type.name)}</li>
          ))}
        </ul>
        <h4>Abilities</h4>
        <ul>
          {abilities.map((i) => (
            <li>{CapitalCase(i.ability.name)}</li>
          ))}
        </ul>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => { handleAddToTeam(result) }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h4>Statistics</h4>
          <StatGraph stats={stats} types={types} />
        </CardContent>
      </Collapse>
    </Card>
  ) : null;
}
