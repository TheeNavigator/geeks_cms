import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    useEffect(() => {
        document.title = `Page Not Found`;
    }, []);

    return (
        <div className="container pt-3" style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <h1 className="mb-3">404 Not Found</h1>
            <p>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <p>
                Please <Link to="/" className="btn btn-primary">Click here</Link> to go back to the homepage.
            </p>
        </div>
    );
}

export default ErrorPage;