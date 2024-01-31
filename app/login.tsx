// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Login() {
  return (
    <>
      <h1>Page protected by login 👋</h1>
    </>
  );
}

export default withAuthenticator(Login);