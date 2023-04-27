import { useUser } from "@/lib/firebase/useUser";
import { onAuthStateChanged } from "firebase/auth";

export default function Profile() {
  const { user, logout } = useUser();
  return !user ? (
    <div>
      <h1>Not logged in</h1>
    </div>
  ) : (
    <div>
      <h1>Logged in</h1>
    </div>
  );
}
