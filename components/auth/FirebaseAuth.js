import { initFirebase } from "../../lib/firebase/initFirebase";
import { useEffect, useState } from "react";
//import StyledFirebaseAuth from "../lib/react-firebaseui/StyledFirebaseAuth";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";
import { setUserCookie } from "../../lib/firebase/userCookies";
import { mapUserData } from "../../lib/firebase/mapUserData";
import { signInWithPopup } from "firebase/auth";
import { Router, useRouter } from "next/router";

initFirebase(); // initialize firebase

const auth = getAuth();

const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    // add additional auth flows below
    GoogleAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user);
      setUserCookie(userData);
    },
  },
};

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const router = useRouter();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userData = mapUserData(user);
        setUserCookie(userData);
        console.log(userData);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        {renderAuth ? (
          <>
            <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
              <div class="col-span-2">01</div>
              <div class="col-span-2">02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
            </div>
            // center the div
            <div class="grid grid-flow-row-dense place-items-center">
              <button
                class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                onClick={() => handleLogin()}
              >
                <img
                  class="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
            <div class="grid  grid-flow-row-dense gap-2 place-items-center">
              <button
                class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                onClick={() => handleLogin()}
              >
                <img
                  class="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
              <button
                class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                onClick={() => handleLogin()}
              >
                <img
                  class="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
          </>
        ) : null}
      </div>
      {/*{renderAuth ? (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      ) : null}*/}
    </>
  );
};

export default FirebaseAuth;
