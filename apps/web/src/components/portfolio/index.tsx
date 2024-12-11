import PortfolioView from "./view";

export default function Portfolio() {
    return (
        <div className="grid grid-cols-[1fr_8fr_1fr]">
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 my-20 flex">
                <PortfolioView />
            </div>
        </div>
    );
};