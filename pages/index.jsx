import Link from 'next/link';

// eslint-disable-next-line no-extra-parens
const HomePage = () => (
    <div>
        <p>Welcome to this &ldquo;Helper Functions&rdquo; site.</p>
        <p>Functions can be access through the links below, or via links in the page header.</p>
        <ul>
            <li>
                <Link href="/">
                    <a>Companies House Lookup (to come)</a>
                </Link>
            </li>
            <li>
                <Link href="/latlong">
                    <a>Lat/Long Lookup</a>
                </Link>
            </li>
        </ul>
    </div>
);

export default HomePage;
