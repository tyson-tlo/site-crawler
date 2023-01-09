import { useNavigate } from "react-router-dom";

function useNavigationRoutes() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/")
    }

    const navigateToCrawler = () => {
        navigate("/crawler")
    }

    return {
        navigateHome,
        navigateToCrawler
    }
}

export default useNavigationRoutes;