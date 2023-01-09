import "./Navigation.css";
import NavigationSidebar from "./NavigationSidebar";

function Navigation({ content }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <NavigationSidebar />
            <div className="navigation-content">
                {content}
            </div>
        </div>
    )
}

export default Navigation;