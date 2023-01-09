import React from "react";
import { Card } from "semantic-ui-react";
import PageCard from "./PageCard/PageCard";

function PagesContainer({ pages }) {
  return (
    <React.Fragment>
      <Card.Group itemsPerRow={1}>
        {pages.map((page) => {
          return <PageCard page={page} key={page.url} />;
        })}
      </Card.Group>
    </React.Fragment>
  );
}

export default PagesContainer;
