import React, { useState } from "react";
import { Card, Icon, List, Modal } from "semantic-ui-react";

function PageHeadings({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Card.Meta>
        View Page Headings{" "}
        <Icon name="external alternate" link onClick={() => setOpen(true)} />
      </Card.Meta>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        closeIcon
      >
        <Modal.Header>Page Headings</Modal.Header>
        <Modal.Content>
          <List>
            {data.headings?.sort().map((heading) => {
              return <List.Item key={heading}>{heading}</List.Item>;
            })}
          </List>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  );
}

export default PageHeadings;
