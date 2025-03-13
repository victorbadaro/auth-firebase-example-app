import { type FormEvent, useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log({
			email,
			password
		});
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-zinc-950 text-zinc-50">
			<form onSubmit={handleFormSubmit} className="space-y-4">
				<div className="space-y-2">
					<Input type="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
					<Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
				</div>
				<Button type="submit" variant="secondary" className="w-full cursor-pointer">
					Submit
				</Button>
			</form>
		</div>
	);
}
