export default function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">KrishiMitra</h3>
            <p className="text-gray-100">
              Empowering Indian farmers with technology, data-driven insights, and access to government schemes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-200 transition-colors">Home</a></li>
              <li><a href="/soil" className="hover:text-green-200 transition-colors">Soil</a></li>
              <li><a href="/scheme" className="hover:text-green-200 transition-colors">Schemes</a></li>
              <li><a href="/about" className="hover:text-green-200 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: support@krishimitra.in</p>
            <p>Phone: +91 12345 67890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-green-200 transition-colors"><i className="ri-facebook-line text-xl"></i></a>
              <a href="#" className="hover:text-green-200 transition-colors"><i className="ri-twitter-line text-xl"></i></a>
              <a href="#" className="hover:text-green-200 transition-colors"><i className="ri-instagram-line text-xl"></i></a>
              <a href="#" className="hover:text-green-200 transition-colors"><i className="ri-linkedin-line text-xl"></i></a>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} KrishiMitra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
