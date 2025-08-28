import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar () {
    return (
    <div className="navbar_container flex items-center place-content-around p-5">
    <i className='bg-teal-500 rounded-md p-1'><FontAwesomeIcon icon={faChessKnight}/></i>
    <div className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faSearch} />
        <p className='bg-teal-100 rounded-full pl-3 pr-3 pt-1 pb-1'>0</p>
    </div>
    </div>
    )
}