import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioItem";

function Portfolio () {
    
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-col-5 gap-7">
                {portfolio.map(project => (
                    <PortfolioItem 
                    imgUrl={project.imgURL}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}/>
                ))}
            </div>

        </div>
    )
}

export default Portfolio;