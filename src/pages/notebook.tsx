import { Excalidraw } from "@excalidraw/excalidraw";
import Header from "@/components/header/header";
import { withRouter } from "next/router";
import { useUser } from "@/lib/firebase/useUser";
import { exportToBlob } from "@excalidraw/excalidraw";
import {MainMenu} from "@excalidraw/excalidraw";
import IUser from "@/interfaces/user";
function Notebook(props) {
  const { user } = useUser() as unknown as {
    user: IUser;
    logout: () => void;
  };
  return (
    <div className="bg-white" style={{background: "white"}}>
      <Header />
      <div style={{ height: "100%", marginTop: "100px" }}>
        <Excalidraw>
        <MainMenu>
          <MainMenu.Item onSelect={() => window.alert("Item1")}>
            Item1
          </MainMenu.Item>
          <MainMenu.Item onSelect={() => window.alert("Item2")}>
            Item 2
          </MainMenu.Item>
        </MainMenu>
        </Excalidraw>

      </div>
    </div>
  );
}
export default withRouter(Notebook);
