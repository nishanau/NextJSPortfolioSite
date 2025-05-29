"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "./ToastContext";

export default function ToastHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const loggedIn = searchParams.get("loggedIn");
    const loggedOut = searchParams.get("loggedOut");

    if (loggedIn) {
      showToast("Successfully Logged in.", "success");
      setHasShown(true);
      router.replace(window.location.pathname, undefined, { shallow: true });
    } else if (loggedOut) {
      showToast("Successfully Logged Out.", "success");
      setHasShown(true);
      router.replace(window.location.pathname, undefined, { shallow: true });
    } 
  }, [searchParams, router, showToast, hasShown]);
  return null;
}
