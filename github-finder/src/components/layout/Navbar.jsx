import PropTypes from 'prop-types'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-3xl' />
					<Link to='/' className='text-lg font-bold align-middle'>
						{ title }
					</Link>
				</div>

				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
							Home
						</Link>
						<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
  );
}

//프랍스 타이틀을 입력 안했을때 기본 깃허브 파인드로 설정
// Navbar.defaultProps = {
//     title: 'Github Finder',
// };

// 프랍스 title 타입은 문자열이어야 한다.
Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar
