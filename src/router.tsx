import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/default-layout';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<h1>Hello</h1>} />
			</Route>
		</Routes>
	);
}
