import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bg-base-200'>
            <div className=' relative h-auto xl:container mx-auto '>
                <footer className="footer p-10 bg-base-200 text-base-content ">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                </footer>
                <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                    <div className="box-border	">
                        <div className='flex items-center'>
                            <i className="fa-regular fa-copyright text-4xl mr-2"></i>
                            <p>Volunteer Network Ltd. </p>
                        </div>
                        <p>Providing charity service since 1970</p>
                    </div>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Link>
                                <i className="fa-brands fa-twitter text-xl"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-facebook-f text-xl"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-youtube text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
       
    );
};

export default Footer;