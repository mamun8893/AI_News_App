import { Grid, Grow } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./style.css";

const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            style={{ display: "flex" }}
          >
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
