import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className="m-5">StarFraction</h1>
			<div>
				<Link className="btn m-2 " href="/login">Login</Link>
				<Link className="btn m-2 " href="/register">Sign up</Link>
			</div>
		</div>
	);
}
