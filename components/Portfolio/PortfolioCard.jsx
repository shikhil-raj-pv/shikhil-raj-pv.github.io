import Badge from "../Common/Badge";

const PortfolioCard = ({ data }) => (
    <article className="card_stylings h-full p-6">
        <h3 className="mb-2 text-2xl font-semibold text-Snow leading-tight sm:leading-normal">
            {data?.projectName}
        </h3>
        <p className="text-xs text-LightGray font-normal">{data?.projectDetail}</p>
        <div className="text-sm flex flex-wrap gap-3 py-2">
            {data?.technologiesUsed?.map((technology) => (
                <Badge key={technology.tech} title={technology.tech} />
            ))}
        </div>
    </article>
);

export default PortfolioCard;
