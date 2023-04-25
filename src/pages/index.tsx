import Head from "next/head";
import WriteToCloudFirestore from "@/components/cloudFirestore/Write";
import ReadDataFromCloudFirestore from "@/components/cloudFirestore/Read";
import { useUser } from "@/lib/firebase/useUser";
import Counter from "@/components/realtimeDatabase/Counter";
import UploadFile from "@/components/storage/UploadFile";

export default function Home() {
  const { user, logout } = useUser();

  if (user) {
    return <>Hello user, {user.name}</>;
  } else
    return (
      <div>
        <p>
          <a href="/auth">Log In!</a>
        </p>

        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    );
}
