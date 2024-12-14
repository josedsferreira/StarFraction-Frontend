import Link from 'next/link'

export default function Splash() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className="m-5 text-xl">StarFraction</h1>
			<div>
				<Link className="btn m-2 " href="/pages/login">Login</Link>
				<Link className="btn m-2 " href="/pages/register">Sign up</Link>
			</div>
		</div>
	);
}
