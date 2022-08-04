import React from "react"
import "./headline.scss"


const Headline = () => {
    return (
        <div className="headline-news">
            <div className="news-content">
                <h1>Kansas Vote Galvanizes Democrats to Campaign on Abortion Rights</h1>
                <p> a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <hr></hr>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions </p>
            </div>
            <div className="news-image">
                <img src="https://static01.nyt.com/images/2022/08/03/us/kansas-abortion-vote-county-map-promo/kansas-abortion-vote-county-map-promo-threeByTwoMediumAt2X-v7.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"></img>
            </div>
        </div>
    )
}


export default Headline;