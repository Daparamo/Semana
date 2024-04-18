import { RiGoogleLine } from "@remixicon/react";
import { Button } from "@tremor/react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const { user, handleUser } = useAuth();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    handleUser({
      fullName: user?.user.displayName ?? "Unknow user",
      image: user?.user.photoURL ?? null,
    });
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <Button icon={RiGoogleLine} onClick={handleLogin}>
        Sign In with Google
      </Button>
    </div>
  );
};
