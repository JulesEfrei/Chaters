import React, { useState } from "react";

import { Input, Button } from "../atoms/";

const LoginTemplate: React.FC = () => {
  const [test, setTest] = useState("");

  return (
    <>
      <h1>Login Screen</h1>

      <Button onClick={() => alert("Click !")}>Sign In</Button>
    </>
  );
};

export default LoginTemplate;
