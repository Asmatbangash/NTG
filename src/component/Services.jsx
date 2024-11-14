import React from "react";
import { useEffect } from "react";
import national from "../assets/images/NationalCard.png";
import Juvenile from "../assets/images/JunilaCard.png";
import origin from "../assets/images/originCard.png";
import cancelation from "../assets/images/CancelCard.png";
import overseas from "../assets/images/overses.png";
import child from "../assets/images/child.png";
import family from "../assets/images/family.png";
import success from "../assets/images/success.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  const servicesCard = [
    {
      picture: national,
      title: "National Identity Card",
      desc: "National Identity Card (NIC) is issued to the citizens of Pakistan.",
    },
    {
      picture: Juvenile,
      title: "Juvenile Card",
      desc: "Juvenile card is an identity card issued to children under the age of 18 years.",
    },
    {
      picture: origin,
      title: "Pakistan Origin Card",
      desc: "Pakistan Origin Card (POC) program endeavors to provide eligible foreigners.",
    },
    {
      picture: cancelation,
      title: "Cancellation Certificate",
      desc: "Cancellation Certificate (CC) program endeavors to provide Cancellation Certificate",
    },
    {
      picture: overseas,
      title: "National Identity Card for Overseas",
      desc: "National Identity Card for Overseas Pakistanis is issued to the overseas of Pakistan.",
    },
    {
      picture: child,
      title: "Child Registration Certificate",
      desc: "Child Registration Certificate is a means of registering a new born with your NADRA record",
    },
    {
      picture: family,
      title: "Family Registration Certificate",
      desc: "Family Registration Certificate (FRC) is a means of being identified with NADRA’s record",
    },
    {
      picture: success,
      title: "Succession Certificate",
      desc: "Succession Certificate and Letter of Administration is issued to successor on behalf of deceased person",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="px-4 py-2 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Identity <span style={{ color: "#006600" }}>Documents</span>
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            NADRA has gained international recognition for its success in
            providing solutions for identification, e-governance and secure
            documents that deliver multiple goals of mitigating identity theft,
            safe-guarding the interests of our clients and facilitating the
            public.
          </p>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center" >
        {servicesCard.map((res) => (
          <div className="card m-2" style={{ width: "18rem" }} data-aos="fade-down">
            <img src={res.picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>{res.title}</h3>
              <p className="card-text">{res.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
