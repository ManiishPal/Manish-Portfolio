import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  initializeFirestore,
  onSnapshot,
  persistentLocalCache,
  persistentMultipleTabManager,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJssXF2gjjhkNNog68loVeEfRNjBb6-uA",
  authDomain: "manishportfolio-a8feb.firebaseapp.com",
  projectId: "manishportfolio-a8feb",
  storageBucket: "manishportfolio-a8feb.firebasestorage.app",
  messagingSenderId: "610731527157",
  appId: "1:610731527157:web:6ffd56d02fca0acdbfeebc",
  measurementId: "G-3RYE2F3GQJ",
};

export const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export const storage = getStorage(app);

const defaultAboutMe =
  "I'm Manish Pal, a Computer Science student passionate about AI, Machine Learning, and Full Stack Development. I build practical applications, explore modern technologies, and aim to create impactful solutions to real-world problems.";

export function useGetCount(recordName: string) {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const collectionRef = collection(db, "count");
    const recordRef = doc(collectionRef, recordName);

    const unsubscribe = onSnapshot(
      recordRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setCount(data.count);
          setError(false);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [recordName]);

  return { count, loading, error };
}
export async function updateCount(number: number, recordName: string) {
  const collectionRef = collection(db, "count");
  const recordRef = doc(collectionRef, recordName);

  try {
    await setDoc(recordRef, {
      count: number,
    });
  } catch (error) {
    console.error("Error updating count:", error);
  }
}

export const useContactSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitContactForm = async (data: {
    name?: string;
    email?: string;
    message?: string;
  }) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage(null);

    try {
      const collectionRef = collection(db, "submissions");
      await addDoc(collectionRef, {
        ...data,
        createdAt: new Date().toISOString(),
      });
      setIsSuccess(true);
    } catch (error) {
      const errorCode =
        typeof error === "object" && error !== null && "code" in error
          ? String((error as { code?: string }).code)
          : "";

      if (errorCode === "permission-denied") {
        setErrorMessage(
          "Firebase is blocking the message write. Please allow writes to the submissions collection in Firestore rules.",
        );
      } else if (errorCode === "unavailable") {
        setErrorMessage("Firebase is temporarily unavailable. Please try again in a moment.");
      } else {
        setErrorMessage(
          "Your message could not be sent right now. Please try again shortly.",
        );
      }

      setIsError(true);
      console.error("Contact submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, isError, isSuccess, errorMessage, submitContactForm };
};

export default function useGeneralInfo() {
  const [publicAnnouncement, setPublicAnnouncement] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const getLocalHoliday = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    if (month === 1 && day === 1) return "Happy New Year!";
    if (month === 2 && day === 14) return "Happy Valentine's Day!";
    if (month === 3 && day === 14) return "PI Day!";
    if (month === 4 && day === 1) return "April Fools!";
    if (month === 5 && day === 1) return "May Day!";
    if (month === 7 && day === 3) return "My Best Friend's Birthday!";
    if (month === 6 && day === 22) return "It's my Birthday!";
    if (month === 10 && day === 31) return "Happy Halloween!";
    if (month === 12 && day === 18) return "Qatar National Day!";
    if (month === 12 && day === 24) return "Christmas Eve!";
    if (month === 12 && day === 25) return "Merry Christmas!";
    if (month === 12 && day === 31) return "Happy New Year's Eve!";

    return "";
  };

  useEffect(() => {
    const fetchGeneralInfo = async () => {
      try {
        const docRef = doc(db, "link", "general");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setPublicAnnouncement(data.publicAnnouncement || getLocalHoliday());
          setAboutMe(data.aboutMe || defaultAboutMe);
        } else {
          setPublicAnnouncement(getLocalHoliday());
          setAboutMe(defaultAboutMe);
        }
      } catch (error) {
        console.error(error);
        setPublicAnnouncement(getLocalHoliday());
        setAboutMe(defaultAboutMe);
      }
    };

    fetchGeneralInfo();
  }, []);

  return { publicAnnouncement, aboutMe };
}
