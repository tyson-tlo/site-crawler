import React, { useState } from "react";
import { Icon, List, Modal } from "semantic-ui-react";

function UniqueImages({ page }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <List.Item>
        Unique Images: {page.unique_images_count}{" "}
        <Icon name="external alternate" onClick={() => setOpen(true)} link />
      </List.Item>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        closeIcon
      >
        <Modal.Header>Unique Images</Modal.Header>
        <Modal.Content>
          <List>
            {page.unique_images?.map((image) => {
              console.log();
              return (
                <List.Item key={image}>
                  <a
                    href={
                      Array.from(image)[0] === "/"
                        ? page.base_url + image
                        : image
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {image}
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

export default UniqueImages;
