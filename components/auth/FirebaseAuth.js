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
          // <>
          //   <div class="flex h-screen  grid-flow-row-dense gap-2 place-items-center">
          //     <div class="m-auto inline-block text-center">
          //       <button
          //         class="px-4 py-2 border w-full place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
          //         onClick={() => handleLoginGoogle()}
          //       >
          //         <img
          //           class="w-6 h-6"
          //           src="https://www.svgrepo.com/show/475656/google-color.svg"
          //           loading="lazy"
          //           alt="google logo"
          //         />
          //         <span>Login with Google</span>
          //       </button>
          //       <button
          //         class="px-4 py-2 border w-full place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-200 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150 bg-black"
          //         onClick={() => handleLoginGithub()}
          //       >
          //         <div class="w-6 h-6">
          //           <SvgGithub />
          //         </div>
          //         <span>Login with GitHub</span>
          //       </button>
          //       <button
          //         class="px-4 py-2 border w-full place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150"
          //         onClick={() => handleLoginMicrosoft()}
          //       >
          //         <div class="w-6 h-6">
          //           <SvgMicrosoft />
          //         </div>
          //         <span>Login with Microsoft</span>
          //       </button>
          //     </div>
          //   </div>
          // </>
          <>
          <div className="bg-[#e9f0ff] ">
          <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40  transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          </div>
          </div>

          
          <div class="max-w-sm rounded overflow-hidden shadow-lg flex h-auto m-auto my-10 block text-center bg-[#ffffffff] z-999">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Login using any of the following:</div>
            <button
                  class="px-4 py-2 border w-11/12 relative place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 bg-white"
                  onClick={() => handleLoginGoogle()}
                >
                  <div class="w-6 h-6">
                    <SvgGoogle />
                  </div>
                  <span>Login with Google</span>
                </button>
                <button
                  class="px-4 py-2 border w-11/12 relative place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-200 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150 bg-black outline-black"
                  onClick={() => handleLoginGithub()}
                >
                  <div class="w-6 h-6">
                    <SvgGithub />
                  </div>
                  <span>Login with GitHub</span>
                </button>
                <button
                  class="px-4 py-2 border w-11/12 relative place-content-center flex gap-2 m-5 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-0 hover:shadow transition duration-150 bg-white"
                  onClick={() => handleLoginMicrosoft()}
                >
                  <div class="w-6 h-6">
                    <SvgMicrosoft />
                  </div>  
                  <span>Login with Microsoft</span>
                </button>
                <span>We currently support logging in only using external providers, in order to create a more secure environment.</span>
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
