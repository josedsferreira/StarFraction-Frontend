import Logo from '@/app/components/logo';
import Link from 'next/link'

export default function Splash() {
	return (
		<div className='flex flex-col items-center'>
			<Logo width={300} height={300}/>
			<div>
				<Link className="btn m-2 " href="/pages/login">Login</Link>
				<Link className="btn m-2 " href="/pages/register">Sign up</Link>
			</div>
		</div>
	);
}
