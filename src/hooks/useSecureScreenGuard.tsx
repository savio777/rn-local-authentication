import { useCallback, useEffect, useState } from "react";
import { useNavigationState, useFocusEffect } from "@react-navigation/native";
import * as LocationAuthentication from "expo-local-authentication";

export default function useSecureScreenGuard(screenName: string) {
  const navigationState = useNavigationState((state) => state);

  const [sessionTime, setSessionTime] = useState(0);

  async function handleAuth() {
    const auth = await LocationAuthentication.authenticateAsync({
      promptMessage: "Sessão expirada",
    });

    if (auth.success) {
      setSessionTime(0);
    } else {
      handleAuth();
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (sessionTime < 10) {
        const timer = setTimeout(() => {
          setSessionTime((oldValue) => oldValue + 1);
          console.log(sessionTime);
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        if (navigationState.routes) {
          const currentScreen = navigationState.routes[navigationState.index];

          if (currentScreen.name === screenName) {
            handleAuth();
          }
        }
      }
    }, [sessionTime])
  );
}
