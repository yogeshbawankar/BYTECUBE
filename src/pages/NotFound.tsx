import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-3 text-foreground">404</h1>
        <p className="text-lg text-[#555555] mb-6">We couldn't find the page you're looking for.</p>
        <Link to="/" className="font-medium">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
