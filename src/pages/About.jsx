import React from "react";
import Boxes from "../component/Boxes";

function About() {
  return (
    <>
    <div className="px-4 text-start">
      <h4 className="mt-5 text-center">--- Nadra ---</h4>
      <h1 className="display-5 text-center">
        National Database & Registration Authority
      </h1>
      <div className="col-lg-8 mx-auto">
        <p className="lead mb-4">
          National Database and Registration Authority (NADRA) was established
          as National Database Organization (NDO), an attached department under
          the Ministry of Interior, Government of Pakistan in 1998. On 10 March,
          2000, NDO & Directorate General of Registration (DGR) merged to form
          NADRA; an independent corporate body with requisite autonomy to
          operate independently and facilitate good governance. National
          Database & Registration Authority (NADRA) has gained international
          recognition for its success in providing solutions for identification,
          e-governance and secure documents that deliver multi-pronged goals of
          mitigating identity theft; safe-guarding the interests of our clients
          and facilitating the public.
        </p>
        <p className="lead">
          NADRA set out on the journey of Civil Registration of all Pakistanis
          in March 2000 and in a short span of time NADRA’s team indigenously
          created a state of the art centralized Data Warehouse, Network
          Infrastructure and
        </p>
        <p className="lead">
          Interactive Data Acquisition Systems to issue secure National Identity
          Cards (NIC). With the introduction of this new fool-proof,
          comprehensive and highly sophisticated computerized system; NADRA has
          been successful in mitigating risk of identity theft
        </p>
      </div>
    </div>
    <div className="container">
    <Boxes />
    </div>
    </>
  );
}

export default About;
