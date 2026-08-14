import axios from "axios";
import { useQuery } from "react-query";
import EduCard from "./Edu_Card";
import ExpCard from "./Exp_Card";
import ParagraphSkeleton from "../Common/ParagraphSkeleton";

const BackgroundSection = ({ stacked = false }) => {
    const { isLoading, isError, data } = useQuery('background', () =>
        axios.get('/api/background').then(({ data }) => data)
    );

    const education = data?.[0]?.eduCards || [];
    const experience = data?.[1]?.expCards || [];

    if (stacked) {
        return (
            <section className="px-4 pb-2 pt-10" aria-label="Experience and education">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-xl text-Snow font-semibold">Experience</h2>
                    {isLoading
                        ? [1, 2, 3].map((item) => <ParagraphSkeleton key={`experience-${item}`} className="p-8 h-full w-full relative" />)
                        : experience.map((experienceItem) => <ExpCard key={experienceItem.id} data={experienceItem} />)}
                </div>
                <div className="flex flex-col gap-y-4 mt-10">
                    <h2 className="text-xl text-Snow font-semibold">Education</h2>
                    {isLoading
                        ? [1, 2, 3].map((item) => <ParagraphSkeleton key={`education-${item}`} className="p-8 h-full w-full relative" />)
                        : education.map((educationItem) => <EduCard key={educationItem.id} data={educationItem} />)}
                </div>
                {isError && <p className="mt-4 text-LightGray">Experience and education could not be loaded right now.</p>}
            </section>
        );
    }

    return (
        <section className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10" aria-label="Experience and education">
            <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
                <h2 className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</h2>
                {isLoading
                    ? [1, 2, 3].map((item) => <ParagraphSkeleton key={item} className="p-8 h-full w-full relative" />)
                    : education.map((educationItem) => <EduCard key={educationItem.id} data={educationItem} />)}
            </div>
            <div className="order-1 md:order-2">
                <div className="flex flex-col gap-y-4 md:ml-12">
                    <h2 className="md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</h2>
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
