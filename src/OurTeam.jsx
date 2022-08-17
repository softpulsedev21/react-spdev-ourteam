import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function OurTeam() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const empData = [
        {
            image: 'https://image.ibb.co/gE7cc5/user_4.jpg',
            name: 'Emily',
            position: 'Web Designer',
            contact: '+880-995-001',
            email: 'emaily@gmail.com'
        },
        {
            image: 'https://image.ibb.co/czhXAQ/user_1.jpg',
            name: 'Abram',
            position: 'Web Designer',
            contact: '+580-000-001',
            email: 'abram@gmail.com'
        },
        {
            image: 'https://image.ibb.co/hnYLh5/team_member01.jpg',
            name: 'Ami Jaction',
            position: 'Web Designer',
            contact: '+111-995-001',
            email: 'AmiJ@gmail.com'
        },
        {
            image: 'https://image.ibb.co/gE7cc5/user_4.jpg',
            name: 'Emily',
            position: 'Web Designer',
            contact: '+880-995-001',
            email: 'emaily@gmail.com'
        },
        {
            image: 'https://image.ibb.co/gE7cc5/user_4.jpg',
            name: 'Emily',
            position: 'Web Designer',
            contact: '+880-995-001',
            email: 'emaily@gmail.com'
        },
        {
            image: 'https://image.ibb.co/gE7cc5/user_4.jpg',
            name: 'Emily',
            position: 'Web Designer',
            contact: '+880-995-001',
            email: 'emaily@gmail.com'
        },
        {
            image: 'https://image.ibb.co/czhXAQ/user_1.jpg',
            name: 'Abram',
            position: 'Web Designer',
            contact: '+580-000-001',
            email: 'abram@gmail.com'
        },
        {
            image: 'https://image.ibb.co/hnYLh5/team_member01.jpg',
            name: 'Ami Jaction',
            position: 'Web Designer',
            contact: '+111-995-001',
            email: 'AmiJ@gmail.com'
        },
        {
            image: 'https://image.ibb.co/gE7cc5/user_4.jpg',
            name: 'Emily',
            position: 'Web Designer',
            contact: '+880-995-001',
            email: 'emaily@gmail.com'
        },
        {
            image: 'https://image.ibb.co/gE7cc5/user_4.jpg',
            name: 'Emily',
            position: 'Web Designer',
            contact: '+880-995-001',
            email: 'emaily@gmail.com'
        }
    ]

    return (
        <div className='container'>
            <h2>Our Team</h2>
            <div className="physicianList">
                <ul id="pagingBox">
                    <Slider {...settings}>
                        {empData.map((item, index) => {
                            return (

                                <li key={index} className="item">
                                    <div className="physicianBox">
                                        <div className="physicianPic">
                                            <img src={item.image} alt="user_4" border="0" />
                                        </div>

                                        <div className="physicianInfo">
                                            <div className="info">
                                                <h6><strong>{item.name}</strong></h6>
                                                <p className="text-info">{item.position}</p>
                                                <p>{item.contact}</p>
                                                <p>{item.email}</p>
                                            </div>

                                        </div>

                                        <div className="physicianBio">
                                            <a className="showBioBtn" href="#">Show BIO</a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </Slider>
                </ul>
            </div>

        </div>
    )
}

