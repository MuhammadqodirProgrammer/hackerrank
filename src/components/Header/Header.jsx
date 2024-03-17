import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className='flex gap-4'>
			<NavLink
				to='/'
				className={({ isActive }) => {
					return isActive
						? 'text-red-600 text-center text-[20px]'
						: 'text-blue-600';
				}}
			>
				home
			</NavLink>
			<NavLink
				to='/product'
				className={({ isActive }) => {
					return isActive
						? 'text-red-600 text-center text-[20px]'
						: 'text-blue-600 ';
				}}
			>
				product
			</NavLink>
		</div>
	);
};

export default Header;
