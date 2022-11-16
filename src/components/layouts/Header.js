import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
    <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block"
>
  <div className="row gx-0 align-items-center">
    <div className="col-lg-7 px-5 text-start">
      <div className="h-100 d-inline-flex align-items-center me-4">
        <small className="fa fa-phone-alt me-2"></small>
        <small>+012 345 6789</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center me-4">
        <small className="far fa-envelope-open me-2"></small>
        <small>info@example.com</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center me-4">
        <small className="far fa-clock me-2"></small>
        <small>Sun - Thr : 09 AM - 09 PM</small>
      </div>
    </div>
    <div className="col-lg-5 px-5 text-end">
      <div className="h-100 d-inline-flex align-items-center">
        <a className="text-white-50 ms-4" href=""
          ><i className="fab fa-facebook-f"></i
        ></a>
        <a className="text-white-50 ms-4" href=""
          ><i className="fab fa-twitter"></i
        ></a>
        <a className="text-white-50 ms-4" href=""
          ><i className="fab fa-linkedin-in"></i
        ></a>
        <a className="text-white-50 ms-4" href=""
          ><i className="fab fa-instagram"></i
        ></a>
      </div>
    </div>
  </div>
</div>



<nav
  className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
>
  <a href="index.html" className="navbar-brand d-flex align-items-center">
    <h1 className="m-0">
      <img
        className="img-fluid me-3"
        src="img/icon/icon-02-primary.png"
        alt=""
      />Insure
    </h1>
  </a>
  <button
    type="button"
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
      <a href="index.html" className="nav-item nav-link active">Home</a>
      <a href="about.html" className="nav-item nav-link">About Us</a>
      <a href="service.html" className="nav-item nav-link">Our Services</a>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          >Pages</a
        >
        <div className="dropdown-menu bg-light border-0 m-0">
          <a href="feature.html" className="dropdown-item">Features</a>
          <a href="appointment.html" className="dropdown-item">Appointment</a>
          <a href="team.html" className="dropdown-item">Team Members</a>
          <a href="testimonial.html" className="dropdown-item">Testimonial</a>
          <a href="404.html" className="dropdown-item">404 Page</a>
        </div>
      </div>
      <a href="contact.html" className="nav-item nav-link">Contact Us</a>
    </div>
  </div>
  <a href="" className="btn btn-primary px-3 d-none d-lg-block">Get A Quote</a>
</nav>
</div>

   )
}

export default Header