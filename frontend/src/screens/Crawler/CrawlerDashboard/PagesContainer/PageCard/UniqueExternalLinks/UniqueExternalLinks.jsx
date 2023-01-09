import React, { useState } from "react";
import { Icon, List, Modal } from "semantic-ui-react";

function UniqueExternalLinks({ page }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <List.Item>
        External Links: {page.external_links_count}{" "}
        <Icon name="external alternate" />
      </List.Item>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>External Links</Modal.Header>
        <Modal.Content>
          <List>
            {page.external_links?.map((link) => {
              return <List.Item key={link}>{link}</List.Item>;
            })}
          </List>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  );
}

export default UniqueExternalLinks;
