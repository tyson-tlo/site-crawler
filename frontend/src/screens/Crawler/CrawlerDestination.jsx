import { Button, Form, Grid, Icon, Popup, Segment } from "semantic-ui-react";
import useCrawlerDestination from "./hooks/useCrawlerDestination";

function CrawlerDestination({ onResolvedData, onCrawlStart = () => {} }) {
  const { startCrawl, setValue, data, loading } =
    useCrawlerDestination(onResolvedData);

  return (
    <Segment>
      <Grid columns={1}>
        <Grid.Column>
          <Form>
            <Form.Field>
              <label>Domain URL</label>
              <input
                type="text"
                placeholder="https://site-to-crawl.com/"
                value={data.siteUrl}
                onChange={setValue("siteUrl")}
              />
            </Form.Field>
            <Form.Field>
              <label>
                Specify Pages Depth
                <Popup trigger={<Icon name="info circle" />}>
                  <p>
                    How many pages deep would you like the crawler to crawl?
                    This will only apply to links within the domain
                  </p>
                </Popup>
              </label>
              <input
                type="number"
                step="1"
                min="1"
                max="10"
                value={data.pagesDeep}
                onChange={setValue("pagesDeep")}
              />
            </Form.Field>
            <Button
              disabled={loading}
              onClick={() => {
                startCrawl();
                onCrawlStart(data);
              }}
            >
              Start Crawling
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default CrawlerDestination;
