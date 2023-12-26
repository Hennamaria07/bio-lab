import React from 'react'
import "./contact.css";
import { BsGeoFill,BsTelephoneFill,BsEnvelopeAtFill ,BsGlobeAmericas} from "react-icons/bs"


const Contact = () => {
  return (
<section class="contact" id="contact">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-12">
<div class="wrapper">
<div class="row no-gutters">
<div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
<div class="contact-wrap w-100 p-md-5 p-4">
<h3 class="mb-4">Let's get in touch</h3>
<div id="form-message-warning" class="mb-4"></div>
<div id="form-message-success" class="mb-4">
We're open for any suggestion or just to have a chat
</div>
<form method="POST" id="contactForm" name="contactForm" class="contactForm">
<div class="row">
<div class="col-md-6">
<div class="form-group">
<label class="label" for="name">Full Name</label>
<input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label class="label" for="email">Email Address</label>
<input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<label class="label" for="subject">Subject</label>
<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<label class="label" for="#">Message</label>
<textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<input type="submit" value="Send Message" class="btn-primary"/>
<div class="submitting"></div>
</div>
</div>
</div>
</form>
</div>
</div>

<div class="col-lg-4 col-md-5 d-flex align-items-stretch">
<div class="info-wrap w-100 p-md-5 p-4">
<h3>Let's get in touch</h3>
<p class="mb-4">We're open for any suggestion or just to have a chat</p>

<div class="dbox w-100 d-flex align-items-start">
    <div class="icon d-flex align-items-center justify-content-center">
        <BsGeoFill className="icon-img"/>
    </div>
    <div class="text pl-3">
        <p><span>Address:</span>Karthikeyan Vasudevan
Chief Scientist
Laboratory for the Conservation of Endangered Species (LaCONES)
CSIR-Centre for Cellular and Molecular Biology
162 Pillar, PVNR Expressway, Attapur Ring Road,
Hyderguda, Hyderabad 500 048</p>
    </div>
</div>

<div class="dbox w-100 d-flex align-items-center">
    <div class="icon d-flex align-items-center justify-content-center">
        <BsTelephoneFill className="icon-img"/>
    </div>
    <div class="text pl-3">
        <p><span>Phone:</span> <a href="tel://1234567920">+91-40-24006443</a></p>
    </div>
</div>

<div class="dbox w-100 d-flex align-items-center">
<div class="icon d-flex align-items-center justify-content-center">
<BsEnvelopeAtFill className="icon-img"/>

</div>
<div class="text pl-3">
<p><span>Email:</span> <a href=""><span class="__cf_email__" >karthik@ccmb.res.in </span></a></p>
</div>
</div>
<div class="dbox w-100 d-flex align-items-center">
<div class="icon d-flex align-items-center justify-content-center">
<span class="fa fa-globe"></span>
<BsGlobeAmericas className="icon-img"/>
</div>
<div class="text pl-3">
<p><span>Website</span> <a href="#">https://www.ccmb.res.in/ </a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Contact