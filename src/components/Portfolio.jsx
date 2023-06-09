import React from 'react';
import portfolio from './data/Portfolio';
import PortfolioItem from './Portfolioitem';

function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        lnk={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
