const FooterSection = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-300">ServiceSystem</h2>
          <p className="mt-4 text-sm text-slate-300">
            Connecting you with trusted professionals. Fast. Reliable.
            Affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-slate-300 text-sm">
            Kathmandu, Nepal
            <br />
            Email: support@servicesystem.com
            <br />
            Phone: +977-123456789
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} ServiceSystem. All rights reserved.
      </div>
    </footer>
  );
};
export default FooterSection;
