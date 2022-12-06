import React from "react";

//!!!Warning wrong!!!
// import { Avatar, Button } from 'oddbox-frontend-common' - problem with tree-shaking - bundle over 1-2mbs

// !!!Right!!!
import { Avatar } from "oddbox-frontend-common/dist/general-ui/avatar/avatar.component";
import { Button } from "oddbox-frontend-common/dist/general-ui/button/button.component";
import { SocialButtons } from "oddbox-frontend-common/dist/general-ui/social/social.component";

function App() {
  return (
    <div>
      <Button name="hello" variant="orange">
        Orange
      </Button>
		  <Avatar firstName="John" lastName="Dest"></Avatar>
		  <SocialButtons authentication={'x' as any} showFacebook showGoogle/>
    </div>
  );
}

export default App;
