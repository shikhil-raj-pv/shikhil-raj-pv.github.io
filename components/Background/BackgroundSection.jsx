import EduCard from "./Edu_Card";
import ExpCard from "./Exp_Card";
import ParagraphSkeleton from "../Common/ParagraphSkeleton";
import { background } from "../../constants/portfolioData";

const BackgroundSection = ({ stacked = false }) => {
    const data = background;
    const isLoading = false;
    const isError = false;

    const education = data?.[0]?.eduCards || [];
    const experience = data?.[1]?.expCards || [];

    if (stacked) {
        return (
            <section className="px-2 md:px-8 py-4" aria-label="Experience and education">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-lg font-bold text-Snow mb-2">Experience</h2>
                    {isLoading
                        ? [1, 2, 3].map((item) => <ParagraphSkeleton key={`experience-${item}`} className="p-8 h-full w-full relative" />)
                        : experience.map((experienceItem) => <ExpCard key={experienceItem.id} data={experienceItem} />)}
                </div>
                <div className="flex flex-col gap-y-4 mt-8">
                    <h2 className="text-lg font-bold text-Snow mb-2">Education</h2>
                    {isLoading
                        ? [1, 2, 3].map((item) => <ParagraphSkeleton key={`education-${item}`} className="p-8 h-full w-full relative" />)
                        : education.map((educationItem) => <EduCard key={educationItem.id} data={educationItem} />)}
                </div>
                {isError && <p className="mt-4 text-LightGray">Experience and education could not be loaded right now.</p>}
            </section>
        );
    }

    return (
        <section className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green/30 px-2 md:px-8 py-4" aria-label="Experience and education">
            <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-8">
                <h2 className="mt-6 md:mt-0 text-lg font-bold text-Snow mb-2">Education</h2>
                {isLoading
                    ? [1, 2, 3].map((item) => <ParagraphSkeleton key={item} className="p-8 h-full w-full relative" />)
                    : education.map((educationItem) => <EduCard key={educationItem.id} data={educationItem} />)}
            </div>
            <div className="order-1 md:order-2">
                <div className="flex flex-col gap-y-4 md:ml-8">
                    <h2 className="md:pt-0 pt-4 text-lg font-bold text-Snow mb-2">Experience</h2>
                    {isLoading
                        ? [1, 2, 3].map((item) => <ParagraphSkeleton key={item} className="p-8 h-full w-full relative" />)
                        : experience.map((experienceItem) => <ExpCard key={experienceItem.id} data={experienceItem} />)}
                </div>
            </div>
            {isError && <p className="col-span-full mt-4 text-LightGray">Experience and education could not be loaded right now.</p>}
        </section>
    );
};

export default BackgroundSection;
