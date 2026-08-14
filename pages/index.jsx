import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import ProfileSummary from '../components/HomeComponents/ProfileSummary';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import PortfolioList from '../components/Portfolio/PortfolioList';
import BackgroundSection from '../components/Background/BackgroundSection';

const Home = () => (
    <div className="Home-Page -z-10">
        <Banner />
        <ProfileSummary />
        <MyExpertise />
        <BackgroundSection stacked />
        <PortfolioList showTitle />
        <Footer />
    </div>
);

export default Home;
