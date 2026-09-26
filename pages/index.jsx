import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import ProfileSummary from '../components/HomeComponents/ProfileSummary';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import PortfolioList from '../components/Portfolio/PortfolioList';
import BackgroundSection from '../components/Background/BackgroundSection';
import HomeContact from '../components/HomeComponents/HomeContact';

const Home = () => (
    <div className="Home-Page -z-10">
        <Banner />
        <ProfileSummary />
        <MyExpertise />
        <PortfolioList showTitle />
        <BackgroundSection stacked />
        <HomeContact />
        <Footer />
    </div>
);

export default Home;
