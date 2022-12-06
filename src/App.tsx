import React from 'react';

//!!!Warning wrong!!! 
// import { Avatar, Button } from 'oddbox-frontend-common'

// @ts-ignore
import { Avatar } from 'oddbox-frontend-common/dist/es/general-ui/avatar/avatar.component'
// @ts-ignore
import {  Button } from 'oddbox-frontend-common/dist/es/general-ui/button/button.component'

function App() {
	return (
		<div >
			<Button name='hello' variant='orange'>Orange</Button>
			<Avatar firstName='John' lastName='Dest'></Avatar>
		</div>
	);
}

export default App;
