import React, { useEffect } from "react";
import "./FeedComponent.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { render } from "@testing-library/react";
import booksImage from "../../images/gotbooks.jpg";
import houseImage from "../../images/gotmap.jpg";
import charImage from "../../images/gotchar.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function cardImage (name) {
  if (name === "Characters") {
    return charImage;
  } else if (name === "Books") {
    return booksImage;
  } else {
    return houseImage;
  } 
}

export const FeedComponent = ({feedResults, dataChoice}) => {
  function renderList() {
    if (feedResults.length > 0) {
      return feedResults.map((result) => {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} 
                image={cardImage(dataChoice.name)}

               />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {result.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {dataChoice === "houses"
                    ? "📜       " + result.words
                    : ""}
                  {dataChoice === "characters"
                    ? "👀       " + result.aliases
                    : ""}
                  {dataChoice === "books"
                   ? "✍️       " + result.authors : ""}
                </Typography>
                <Typography variant="body3" color="textSecondary" component="p">
                {dataChoice === "houses"
                 ? "🏞️        " + result.region : ""}
                  {dataChoice === "characters"
                    ? "🚻       " + result.gender
                    : ""}
                  {dataChoice === "books"
                    ? "📚       " + result.publisher
                    : ""}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        );
      });
    }
    return null;
  }

  const classes = useStyles();

  return <div class="grid">{renderList()}</div>;
};
