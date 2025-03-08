import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading-primary">
              Ecomotive Motors
            </h3>
            <p className="mb-4 font-body-primary">
              Pioneering sustainable mobility solutions for a greener future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading-primary">
              Quick Links
            </h3>
            <ul className="space-y-2 font-body-secondary">
              <li>
                <Link
                  href="/#home"
                  className="hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading-primary">
              Our Services
            </h3>
            <ul className="space-y-2 font-body-secondary">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  EV Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Charging Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Battery Replacement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Customization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading-primary">
              Contact Us
            </h3>
            <ul className="space-y-3 font-body-primary">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent" />
                <span>24-7-172/4, Magunta Layout, Nellore, A.P. 524003</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent" />
                <span>info@ecomotivemotors.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container-custom text-center">
          <p className="font-body-secondary text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Ecomotive Motors. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
