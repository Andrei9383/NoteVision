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
import SvgGoogle from "../icons/GoogleLogo.js";

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
  const microsoftProvider = new OAuthProvider("microsoft.com");
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
        const credential = GithubAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const user = result.user;
        console.log(user);
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
          <div className="flex items-center justify-center h-screen">
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex h-auto m-auto my-10 text-center bg-[#ffffff80] z-999">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Login using any of the following:
                </div>
                <button
                  className="px-4 py-2 border w-11/12 relative place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 bg-white"
                  onClick={() => handleLoginGoogle()}
                >
                  <div className="w-6 h-6">
                    <SvgGoogle />
                  </div>
                  <span>Login with Google</span>
                </button>
                <button
                  className="px-4 py-2 border w-11/12 relative place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-200 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150 bg-black outline-black"
                  onClick={() => handleLoginGithub()}
                >
                  <div className="w-6 h-6">
                    <SvgGithub />
                  </div>
                  <span>Login with GitHub</span>
                </button>
                <button
                  className="px-4 py-2 border w-11/12 relative place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150 bg-white"
                  onClick={() => handleLoginMicrosoft()}
                >
                  <div className="w-6 h-6">
                    <SvgMicrosoft />
                  </div>
                  <span>Login with Microsoft</span>
                </button>
                <span>
                  We currently support logging in only using external providers,
                  in order to create a more secure environment.
                </span>
              </div>
            </div>
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-purple-500 to-blue-500 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
      {/*{renderAuth ? (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      ) : null}*/}
    </>
  );
};

export default FirebaseAuth;
