import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-colgap-2">
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
}
