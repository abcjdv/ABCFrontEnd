import React from "react";
import { Link } from "react-router-dom";
export default function Mainwhite() {
    return (
        <main id="main" className="main-page">

            {/*<!-- ======= Speaker Details Sectionn ======= -->*/}
            <section id="speakers-details">
                <div className="container">

                    <div className="row justify-content-between mt-5 pt-lg-5">
                        <div className="col-md-5">
                            <img src="/img/dress-1.jpg" alt="Speaker 1" className="img-fluid" />
                        </div>

                        <div className="col-md-6">
                            <div className="details">
                                <h2>White Lace Dress</h2>
                                <h4><strong>$35</strong></h4>
                                <Link to="" className="mb-5">@xoxocutiegirl &nbsp<i className="far fa-check-circle mb-4"></i></Link>
                                <p>Voluptatem perferendis sed assumenda voluptatibus. Laudantium molestiae sint. Doloremque odio dolore dolore sit. Quae labore alias ea omnis ex expedita sapiente molestias atque. Optio voluptas et.</p>

                                <p>Aboriosam inventore dolorem inventore nam est esse. Aperiam voluptatem nisi molestias laborum ut. Porro dignissimos eum. Tempore dolores minus unde est voluptatum incidunt ut aperiam.</p>

                                <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>
                                <div className="">
                                    <Link to="#about" className="btn btn-outline spk-btn">Add to Cart</Link>
                                    <Link to="#about" className="btn btn-outline spk-btn">Chat with Agent</Link>
                                    <Link to=""><i className="fas fa-heart spk-heart"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </main>
    )
}