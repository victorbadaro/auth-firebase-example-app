import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { auth, googleAuthProvider } from './config/firebase';

type User = {
	name: string;
	email: string;
	avatarUrl: string;
};

export function App() {
	const [user, setUser] = useState<User | null>(null);

	async function signInWithGoogle() {
		try {
			await signInWithPopup(auth, googleAuthProvider);

			setUser({
				name: auth.currentUser?.displayName ?? '',
				email: auth.currentUser?.email ?? '',
				avatarUrl: auth.currentUser?.photoURL ?? ''
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-zinc-950 text-zinc-50">
			<div>
				{user ? (
					<div className="flex flex-col items-center justify-center gap-y-4">
						<img src={user.avatarUrl} alt="User Avatar" className="size-24 rounded-full grayscale-100 cursor-pointer transition hover:grayscale-0" />

						<div className="flex flex-col items-center justify-center">
							<h2 className="font-semibold text-xl">{user.name}</h2>
							<p className="text-sm text-zinc-400">{user.email}</p>
						</div>
					</div>
				) : (
					<Button type="button" variant="secondary" onClick={signInWithGoogle} className="cursor-pointer">
						Google
					</Button>
				)}
			</div>
		</div>
	);
}
