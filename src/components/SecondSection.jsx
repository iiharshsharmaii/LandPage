import React from 'react'
import Rect1 from '../img/rect1.png'
import Rect2 from '../img/rect2.png'
import Rect3 from '../img/rect3.png'
import Rect4 from '../img/rect4.png'
import Rect5 from '../img/rect5.png'

export const SecondSection = () => {
    return (
        <>
            <div className='secondSectionContainer'>

                <div>In a world grappling with the environmental impact of rapid delivery demands, traditional shipping methods contribute significantly to carbon pollution. SK offers a novel solution by harnessing the existing travel routes of individuals to streamline package deliveries. By optimizing the unused capacity of travelers' journeys, SK minimizes the need for additional transportation vehicles, effectively reducing carbon emissions. However, despite strides towards sustainability, the challenge of carbon pollution persists in the logistics industry, necessitating innovative approaches like SK to mitigate its effects. Join us in revolutionizing the delivery landscape and forging a greener future with SK.</div>

            </div>

            <div className="seeMore">
                <div className="heading">
                    <div className='head'><h1>why carbon neutralization is important !</h1></div>
                    <div className='para'>
                        <div>
                            <svg width="7" height="20" viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="7" height="20" fill="#FFCC00" />
                            </svg>
                        </div>
                        <div><p>see more</p></div>

                    </div>
                </div>
            </div>
            <div className="rectImg">
                <img src={Rect1} alt="" />
                <img src={Rect2} alt="" />
                <img src={Rect3} alt="" />
                <img src={Rect4} alt="" />
                <img src={Rect5} alt="" />
            </div>
            <div className="solution">
                <p>We have a solution</p>
                <svg width="200" height="4" viewBox="0 0 200 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L198 2.00002" stroke="#FFCC00" strokeWidth="4" strokeLinecap="round" />
                </svg>

            </div>
        </>
    )
}
