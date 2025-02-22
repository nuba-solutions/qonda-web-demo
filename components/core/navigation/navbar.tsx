'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './nav-link';
import { useDictionaryStore } from '@/stores/core/dictionary-store';
import { company } from '@/qonda.config';

const Navbar = () => {
	const { dictionary, language } = useDictionaryStore();

	return (
		<nav className='hidden h-full flex-col font-medium md:flex-row md:items-center lg:flex'>
			<Link
				href={`/${language}/dashboard`}
				className='flex h-full items-center justify-center bg-primary pl-4 pr-6 font-semibold md:text-base 2xl:pl-5 2xl:pr-8 3xl:pl-6 3xl:pr-9'
			>
				<Image
					src={company.company_logo_white_url}
					alt='Company logo'
					width={120}
					height={80}
					className='max-h-[50px]'
				/>
			</Link>
			<NavLink
				name={dictionary?.core?.navigation?.links?.dashboard['name']}
				text={dictionary?.core?.navigation?.links?.dashboard['text']}
				path={`/${language}/dashboard`}
			/>
			<NavLink
				name={dictionary?.core?.navigation?.links?.hr_funnel['name']}
				text={dictionary?.core?.navigation?.links?.hr_funnel['text']}
				path=''
				childrenLinks={[
					{
						name: dictionary?.core?.navigation?.links?.candidates['name'],
						// text: dictionary?.core?.navigation?.links?.candidates[
						//     'text'
						// ],
						text: 'New applicants',
						path: `/${language}/candidates/applicants`
					},
					{
						// name: dictionary?.core?.navigation?.links?.staff[
						//     'name'
						// ],
						// text: dictionary?.core?.navigation?.links?.staff[
						//     'text'
						// ],
						name: 'Employees',
						text: 'Hired personnel',
						path: `/${language}/candidates/employees`
					},
					{
						// name: dictionary?.core?.navigation?.links
						//     ?.former_employees['name'],
						// text: dictionary?.core?.navigation?.links
						//     ?.former_employees['text'],
						name: 'Former Employees',
						text: 'No longer working',
						path: `/${language}/candidates/former-employees`
					}
				]}
			/>
			<NavLink
				// name={dictionary?.core?.navigation?.links?.units['name']}
				// text={dictionary?.core?.navigation?.links?.units['text']}
				name='Locations'
				text='Manage units'
				path={`/${language}/locations`}
			/>
			{/* <NavLink
                name={dictionary?.core?.navigation?.links?.analytics['name']}
                text={dictionary?.core?.navigation?.links?.analytics['text']}
                path="/analytics"
            /> */}
			<NavLink
				name={dictionary?.core?.navigation?.links?.users['name']}
				text={dictionary?.core?.navigation?.links?.users['text']}
				path={`/${language}/users`}
			/>
		</nav>
	);
};

export default Navbar;
