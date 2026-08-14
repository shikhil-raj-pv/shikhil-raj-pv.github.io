import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioList from "../components/Portfolio/PortfolioList";

const Projects = () => (
    <BannerLayout>
        <PortfolioList showTitle />
        <Footer />
    </BannerLayout>
);

export default Projects;
