import React from "react";

function Contact() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            contact us
          </h1>
          <p className="col-lg-10 fs-4">
            Feel free to reach out if you have any questions, collaboration
            ideas, or just want to connect. I'd love to hear from you! You can
            get in touch via:
          </p>
          <ul>
            <li> Email : </li>
            <li>
              LinkedIn:
            </li>
            <li>
              WhatsApp: 
            </li>
          </ul>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary needs-validation" novalidate>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="enter full name"
                required
              />
              <label for="name">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
              <label for="floatingInput">write any querry</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
