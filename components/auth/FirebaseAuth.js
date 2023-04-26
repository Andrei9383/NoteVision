import { initFirebase } from "../../lib/firebase/initFirebase";
import { useEffect, useState } from "react";
//import StyledFirebaseAuth from "../lib/react-firebaseui/StyledFirebaseAuth";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { setUserCookie } from "../../lib/firebase/userCookies";
import { mapUserData } from "../../lib/firebase/mapUserData";
import { signInWithPopup } from "firebase/auth";
import { Router, useRouter } from "next/router";

import SvgGithub from "../icons/GithubLogo.js";
import SvgMicrosoft from "../icons/MicrosoftLogo.js";

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

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const microsoftProvider = new OAuthProvider('microsoft.com');
  const auth = getAuth();
  const router = useRouter();

  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleLoginGithub = () => {
    signInWithPopup(auth, githubProvider)
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

  const handleLoginMicrosoft = () => {
    signInWithPopup(auth, microsoftProvider)
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
            <div class="flex h-screen  grid-flow-row-dense gap-2 place-items-center">
              <div class="m-auto">
                <button
                  class="px-4 py-2 border flex gap-2 m-5  border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                  onClick={() => handleLoginGoogle()}
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
                  class="px-4 py-2 border flex gap-2 m-5 border-slate-200 rounded-lg text-slate-200 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150 bg-black"
                  onClick={() => handleLoginGithub()}
                >
                  <div class="w-6 h-6">
                    <SvgGithub />
                  </div>
                  <span>Login with GitHub</span>
                </button>
                <button
                  class="px-4 py-2 border flex gap-2 m-5 border-slate-200 rounded-lg text-slate-200 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150"
                  onClick={() => handleLoginMicrosoft()}
                  >
                    <div class="w-6 h-6">
                      <SvgMicrosoft />
                    </div>
                    <span>Login with Microsoft</span>
                  </button>
              </div>
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
