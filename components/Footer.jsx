const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Yogesh Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
