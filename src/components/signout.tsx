"use client";

import { PiSignOutLight } from "react-icons/pi";
import { logout } from "~/app/actions/auth";

const SignOut = () => {
  return (
    <PiSignOutLight onClick={() => logout()} className="h-6 w-6" />
  );
};

export default SignOut;