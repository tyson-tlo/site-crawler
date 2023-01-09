import React, { useState } from "react";
import { Card, Icon, List, Modal } from "semantic-ui-react";

function UniqueExternalLinks({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Card.Meta>
        Unique external links: {data.unique_external_links_count}{" "}
        <Icon name="external alternate" onClick={() => setOpen(true)} link />
      </Card.Meta>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        closeIcon
      >
        <Modal.Header>Unique External Links</Modal.Header>
        <Modal.Content>
          <List>
            {data.unique_external_links?.sort().map((link) => {
              return (
                <List.Item key={link}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {link}
                  </a>
                </List.Item>
              );
            })}
          </List>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  );
}

export default UniqueExternalLinks;
