import React, { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import 'firebaseui/dist/firebaseui.css'
import { type auth } from 'firebaseui'

interface Props {
  // The Firebase UI Web UI Config object.
  // See: https://github.com/firebase/firebaseui-web#configuration
  uiConfig: auth.Config
  // Callback that will be passed the FirebaseUi instance before it is
  // started. This allows access to certain configuration options such as
  // disableAutoSignIn().
  uiCallback?: (ui: auth.AuthUI) => void
  // The Firebase App auth instance to use.
  firebaseAuth: any // As firebaseui-web
  className?: string
}

const StyledFirebaseAuth = ({
  uiConfig,
  firebaseAuth,
  className,
  uiCallback
}: Props): JSX.Element => {
  const [firebaseui, setFirebaseui] = useState<
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  typeof import('firebaseui') | null
  >(null)
  const [userSignedIn, setUserSignedIn] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    // Firebase UI only works on the Client. So we're loading the package only after
    // the component has mounted, so that this works when doing server-side rendering.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    setFirebaseui(require('firebaseui'))
  }, [])

  useEffect(() => {
    if (firebaseui === null) return

    // Get or Create a firebaseUI instance.
    const firebaseUiWidget =
      (firebaseui.auth.AuthUI.getInstance() != null) ||
      new firebaseui.auth.AuthUI(firebaseAuth)

    // check if the firebaseuiWidget is of type firebaseui.auth.AuthUI
    if (!(firebaseUiWidget instanceof firebaseui.auth.AuthUI)) return

    if (uiConfig.signInFlow === 'popup') firebaseUiWidget.reset()

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if ((user == null) && userSignedIn) firebaseUiWidget.reset()
      setUserSignedIn(!(user == null))
    })

    // Trigger the callback if any was set.
    if (uiCallback != null) uiCallback(firebaseUiWidget)

    // Render the firebaseUi Widget.
    // @ts-expect-error no types on the unknown firebaseui object
    firebaseUiWidget.start(elementRef.current, uiConfig)

    return () => {
      unregisterAuthObserver()
      firebaseUiWidget.reset()
    }
  }, [firebaseui, uiConfig])

  return <div className={className} ref={elementRef} />
}

export default StyledFirebaseAuth
