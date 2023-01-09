import React from "react";
import { List } from "semantic-ui-react";
import useNavigationRoutes from "../../hooks/navigation/useNavigationRoutes";

function NavigationSidebar() {
  const { navigateToCrawler, navigateHome } = useNavigationRoutes();

  return (
    <div className="sidebar-container">
      <List verticalAlign="middle" style={{ paddingLeft: 10 }}>
        <List.Item>
          <List.Content>
            <List.Header as="h2" onClick={navigateHome}>
              Home
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as="h2" onClick={navigateToCrawler}>
              Crawler
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default NavigationSidebar;
