/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Footer = () => (
  <footer className="footer p-7 bg-base-200 text-base-content">
    <div>
      <span className="footer-title">Services</span>
      <a href="#link" className="link link-hover">
        Branding
      </a>
      <a href="#link" className="link link-hover">
        Design
      </a>
      <a href="#link" className="link link-hover">
        Marketing
      </a>
      <a href="#link" className="link link-hover">
        Advertisement
      </a>
    </div>
    <div>
      <span className="footer-title">Company</span>
      <a href="#link" className="link link-hover">
        About us
      </a>
      <a href="#link" className="link link-hover">
        Contact
      </a>
      <a href="#link" className="link link-hover">
        Jobs
      </a>
      <a href="#link" className="link link-hover">
        Press kit
      </a>
    </div>
    <div>
      <span className="footer-title">Legal</span>
      <a
        href="https://www.marvel.com/"
        target="_blank"
        className="link link-hover"
        rel="noreferrer"
      >
        Data provided by Marvel. © 2023 MARVEL
      </a>
      <a href="#link" className="link link-hover">
        Terms of use
      </a>
      <a href="#link" className="link link-hover">
        Privacy policy
      </a>
      <a href="#link" className="link link-hover">
        Cookie policy
      </a>
    </div>
    <div>
      <span className="footer-title">Newsletter</span>
      <div className="form-control w-80" data-theme="light">
        <label className="label" htmlFor="name">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="relative">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="username@site.com"
            className="input input-bordered w-full pr-16"
          />
          <button
            type="submit"
            className="btn bg-red-500 absolute top-0 right-0 rounded-l-none"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
