import FirebaseAuth from "../../components/auth/FirebaseAuth";
import Link from "next/link";
const Auth = () => {
  return (
    <div>
      <div>
        <FirebaseAuth />
        <p>
          <Link href="/">Go Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
