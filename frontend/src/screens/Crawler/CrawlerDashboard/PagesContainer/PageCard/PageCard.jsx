import React, { useState } from "react";
import { Card, Icon, List, Modal } from "semantic-ui-react";
import UniqueExternalLinks from "./UniqueExternalLinks/UniqueExternalLinks";
import UniqueImages from "./UniqueImages/UniqueImages";

function PageCard({ page }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>{page.url}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Header as="h4">Page Details</Card.Header>

          <React.Fragment>
            <List>
              <List.Item>
                Page Heading: <h5>{page.heading}</h5>
              </List.Item>
              <List.Item>Status Code: {page.status_code}</List.Item>
              <List.Item>Word Count: {page.word_count}</List.Item>
              <List.Item>
                Unique Internals Links: {page?.internal_links_count}
                <Icon
                  name="external alternate"
                  style={{
                    fontSize: "15px",
                    paddingBottom: "6px",
                    marginLeft: "10px",
                  }}
                  link
                  onClick={() => setModalOpen(true)}
                />
              </List.Item>
              <UniqueExternalLinks page={page} />
              <UniqueImages page={page} />
              <List.Item>
                Response Time: {page?.response_time.toFixed(2)} s
              </List.Item>
            </List>
          </React.Fragment>
        </Card.Content>
      </Card>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpen={() => setModalOpen(true)}
        closeIcon
        closeOnEscape
      >
        <Modal.Header>Unique Links Found</Modal.Header>
        <Modal.Content>
          <List>
            <List.Item>
              {page?.internal_links
                ?.filter((link) => link !== "")
                .sort((a, b) => {
                  const l1 = a.substring(1, 2);
                  const l2 = b.substring(1, 2);
                  if (l1 === l2) {
                    return 0;
                  }
                  return l1 > l2 ? 1 : -1;
                })
                .map((link) => {
                  return (
                    <List.Item key={link} link>
                      <a
                        href={page.base_url + link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link}
                      </a>
                    </List.Item>
                  );
                })}
            </List.Item>
          </List>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  );
}

export default PageCard;
