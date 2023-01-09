import React, { useState } from "react";
import { Card, Icon, List, Modal } from "semantic-ui-react";

function UniqueInternalLinks({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Card.Meta>
        Unique internal links: {data.unique_internal_links_count}{" "}
        <Icon name="external alternate" onClick={() => setOpen(true)} link />
      </Card.Meta>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        closeIcon
      >
        <Modal.Header>Unique Internal Links</Modal.Header>
        <Modal.Content>
          <List>
            {data.unique_internal_links?.sort().map((link) => {
              return (
                <List.Item key={link}>
                  <a
                    href={data.base_url + link}
                    target="_blank"
                    rel="noreferrer"
                  >
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

export default UniqueInternalLinks;
