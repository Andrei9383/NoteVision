import Demo from "@/components/tiptap/tiptap";
import { useUser } from "@/lib/firebase/useUser";

const Testing = () => {
  const { user, logout } = useUser();
  return (
    <div>
      <Demo />
      testing
    </div>
  );
};

export default Testing;
