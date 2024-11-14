import React from "react";

function SignUp() {
  return (
    <div className="col-md-10 mx-auto col-lg-5 position-absolute top-50 start-50 translate-middle">
    <form className="p-4 p-md-5 border rounded-3 bg-dark-subtle">
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
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign-in
      </button>
    </form>
  </div>
  );
}

export default SignUp;
