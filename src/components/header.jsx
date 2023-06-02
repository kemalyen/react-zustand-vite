
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookList from '../pages/BookList';

const Header = () => {
    return (
        <>

            <ul className="nav nav-tabs" id="navId" role="tablist">
 
                <li className="nav-item" role="presentation">
                    <Link to='/' className="nav-link" data-bs-toggle="tab">Home</Link>     </li>
                <li className="nav-item" role="presentation">
                    <Link to='/books' className="nav-link" data-bs-toggle="tab">Books</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/create' className="nav-link" data-bs-toggle="tab">Create</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/members' className="nav-link" data-bs-toggle="tab">Members</Link>
                </li>
            </ul>
 


        </>
    );
};

export default Header;