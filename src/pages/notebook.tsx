//@ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '@/components/header/header'
import { withRouter } from 'next/router'
import { useUser } from '@/lib/firebase/useUser'
import { exportToBlob, MainMenu, Excalidraw, useHandleLibrary } from '@excalidraw/excalidraw'
import React, {useState, useEffect} from 'react'
import type IUser from '@/interfaces/user'
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types'
import UpdateNotebook from "../../components/cloudFirestore/UpdateNotebook"
import GetNotebook from "../../components/cloudFirestore/GetNotebook"
import { useRouter } from 'next/router'
import { restoreElements } from "@excalidraw/excalidraw";
import { DeviceFloppy } from 'tabler-icons-react'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function getthing(name, id) {
  return await GetNotebook(name, id);
}

function Notebook (props) {
  const { user } = useUser() as unknown as {
    user: IUser
    logout: () => void
  }
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const [Elements, setElements] = useState([]);

  const [existingElements, setExistingElements] = useState(null);

  //HAHAHAAHAHHAHAHAHAAHHAHAHHHAHAHAHHA
  const user_id = localStorage.getItem("last_userd");
  const notebook_name = localStorage.getItem("last_notebook_name");

  useHandleLibrary({ excalidrawAPI });

  getthing(notebook_name, user_id).then((res) => setExistingElements(res.content));

  //restoreElements(existingElements);
  console.log("elements:", JSON.parse(existingElements));

  const updateScene = () => {
    const sceneData = {
      elements: restoreElements(
        JSON.parse(existingElements)
      ),
      appState: {
        viewBackgroundColor: "#edf2ffab"
      }
    };
    excalidrawAPI?.updateScene(sceneData);
  };

  useEffect(() => {
    updateScene();
  }, [existingElements]);

  const [value, setValue] = useState("");
  const [prompt, setPrompt] = useState("");
  const [completion, setCompletion] = useState("");
  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);
  const handleKeyDown = React.useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setPrompt(value);
        setCompletion('Loading...');
        const response = await fetch('/api/hello', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: value }),
        });
        const data = await response.json();
        setValue('');
        setCompletion(data.result.choices[0].text);
      }
    }, [value]);
  return (
    <>
      <div className="flex flex-row h-full ">
        <div className="h-screen grid grid-rows-3 place-items-center">
          <div className="p-10 mt-[50vh] w-[400px]">
            <h1 className="text-5xl font-bold text-center align-middle">
              {notebook_name}
            </h1>
            <div className=" align-middle place-items-center mt-16">
            <label className="block mr-2 text-center">
              <span className="text-gray-700">What would you like to know?</span>
              <input
                value={value}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                type="search"
                placeholder="Prompt"
                className="rounded-lg block ml-[2.8rem]"
              />
            </label>
              <div className="overflow-y-auto h-64 mt-12"><div className="font-bold mb-4">{prompt}</div> {completion.split('\n').map(item => <>{item}</>)}</div>
            </div>
          </div>
        </div>
      <div className='mr-16 w-full mt-24 rounded-xl border-2 border-[#5f5f5f]'>
       <Excalidraw onChange={(elements, state) => {
            }}
            ref={(api) => setExcalidrawAPI(api)}>
        <MainMenu>
        <MainMenu.Item onSelect={async () => {
              const elements = excalidrawAPI.getSceneElements();
              UpdateNotebook(notebook_name, user_id, JSON.stringify(elements));
            }}>
             Save
          </MainMenu.Item>
        </MainMenu>
        </Excalidraw>
      </div>
    </div>
    <div
            className="absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-600 to-green-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-400 to-cyan-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-green-800 to-yellow-400 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

  </>
  ) 

}
export default (Notebook)



/*
  const { user } = useUser() as unknown as {
    user: IUser
    logout: () => void
  }
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const [Elements, setElements] = useState([]);

  const [existingElements, setExistingElements] = useState(null);

  useHandleLibrary({ excalidrawAPI });

  const [notebook, setNotebook] = useState(null);

  useEffect( () => {
    setNotebook(JSON.parse(props.router.query.notebook));
    console.log(notebook);
    //GetNotebook(notebook.name, user);
    
  }, [])

  return (
    <div>
      <div className='mt-[100px]'>
       <Excalidraw onChange={(elements, state) => {
            }}
            ref={(api) => setExcalidrawAPI(api)}>
        ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>
        <MainMenu>
          <MainMenu.Item onSelect={async () => {
              const elements = excalidrawAPI.getSceneElements();
              console.log(JSON.stringify(elements));
              //UpdateNotebook(notebook.name, user, JSON.stringify(elements));
            }}>
            Save
          </MainMenu.Item>
          <MainMenu.Item onSelect={() => { window.alert('Item2') }}>
            Item 2
          </MainMenu.Item>
        </MainMenu>
        </Excalidraw>
      </div>
    </div>
  ) 
  */