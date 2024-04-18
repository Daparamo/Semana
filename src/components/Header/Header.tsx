import { Button } from "@tremor/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const { user, resetUser } = useAuth();

  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end gap-4">
      <nav className="flex gap-4 items-center">
        {user && user ? (
          <>
            <div className="flex gap-2 items-center">
              <img
                className="size-10 bg-yellow-300 rounded-full"
                src={user.image ? user.image : `/avatar.svg`}
                alt="notion avatar"
              />
              <p>{user.fullName}</p>
            </div>
            <Link to="/owners">Owners</Link>
            <Link to="/posts">Posts</Link>
            <Button onClick={resetUser} variant="primary">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/posts">Posts</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};
