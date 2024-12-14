import { auth } from "@/app/security/auth"
//import { User } from "@/app/types/types";
 
export default async function Username() {
	const session = await auth()
 
	if (!session?.user) {
		console.log('No user session found')
		return null
	}

	const user = session.user;

	console.log('User:', user)
 
	return (
		<div>
			<p>{user.name}</p>
		</div>
  	)
}