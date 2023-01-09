import { range } from "lodash";
import React, { useState } from "react";
import { Card, Container, Header, List, Placeholder } from "semantic-ui-react";
import CrawlerDestination from "../CrawlerDestination";
import CrawlerProvider from "../providers/CrawlerProvider";
import CrawlSummary from "./CrawlSummary/CrawlSummary";
import PagesContainer from "./PagesContainer/PagesContainer";

function CrawlingPlaceholder({ pagesBeingCrawled }) {
  return (
    <React.Fragment>
      <Card.Group itemsPerRow={1}>
        <Card>
          <Card.Content>
            <Card.Header>Crawl In Progress....</Card.Header>
          </Card.Content>
          <Card.Content>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          </Card.Content>
        </Card>
        {range(pagesBeingCrawled).map((page, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>
                <Placeholder>
                  <Placeholder.Line />
                </Placeholder>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </React.Fragment>
  );
}

function CrawlerDashboard() {
  const [crawlInProgress, setCrawlInProgress] = useState(false);
  const [crawlDetails, setCrawlDetails] = useState({});
  const [pages, setPages] = useState([]);
  const [data, setData] = useState({});

  return (
    <CrawlerProvider>
      <Container>
        <Header as="h2">Crawler</Header>
        <CrawlerDestination
          onResolvedData={(response) => {
            setPages(response.data.pages);
            setData(response.data);
            setCrawlInProgress(false);
          }}
          onCrawlStart={({ pagesDeep, siteUrl }) => {
            setCrawlInProgress(true);
            setCrawlDetails({ pagesDeep, siteUrl });
          }}
        />
        {crawlInProgress ? (
          <CrawlingPlaceholder pagesBeingCrawled={crawlDetails.pagesDeep} />
        ) : (
          <React.Fragment>
            <CrawlSummary data={data} />
            <PagesContainer pages={pages} />
          </React.Fragment>
        )}
      </Container>
    </CrawlerProvider>
  );
}

export default CrawlerDashboard;
