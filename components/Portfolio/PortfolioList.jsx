import PortfolioCard from "./PortfolioCard";
import { portfolio } from "../../pages/api/portfolio";

const PortfolioList = ({ showTitle = false }) => {
    const data = portfolio;
    const isLoading = false;
    const isError = false;

    return (
        <section aria-labelledby="projects-heading" className="px-2 md:px-8 py-4">
            {showTitle && <h2 id="projects-heading" className="text-lg font-bold text-Snow mb-4">Projects</h2>}
            {isError ? (
                <p className="text-LightGray">Projects could not be loaded right now.</p>
            ) : (
                <div className="grid justify items-stretch grid-flow-row md:grid-cols-2 grid-rows-auto gap-4">
                    {isLoading
                        ? [1, 2, 3, 4].map((item) => <ImageAndParagraphSkeleton key={item} className="w-full" />)
                        : data?.map((project) => <PortfolioCard key={project.id} data={project} />)}
                </div>
            )}
        </section>
    );
};

export default PortfolioList;
