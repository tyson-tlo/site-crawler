import { Card, Segment } from "semantic-ui-react";
import { isEmpty } from "lodash";
import UniqueInternalLinks from "./UniqueInternalLinks/UniqueInternalLinks";
import UniqueExternalLinks from "./UniqueExternalLinks/UniqueExternalLinks";
import PageHeadings from "./PageHeadings/PageHeadings";

function CrawlSummary({ data }) {
  if (isEmpty(data)) return null;

  return (
    <Card.Group itemsPerRow={1}>
      <Card>
        <Card.Content>
          <Card.Header>Crawl Summary</Card.Header>
          <Card.Meta>Number of pages crawled: {data.pages?.length}</Card.Meta>
          <Card.Meta>Average word count: {data.average_word_count}</Card.Meta>
          <Card.Meta>
            Average heading length: {data.average_heading_word_count}
          </Card.Meta>
          <UniqueInternalLinks data={data} />
          <UniqueExternalLinks data={data} />
          <PageHeadings data={data} />
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default CrawlSummary;
