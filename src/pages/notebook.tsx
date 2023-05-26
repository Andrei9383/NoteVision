/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '@/components/header/header'
import { withRouter } from 'next/router'
import { useUser } from '@/lib/firebase/useUser'
import { exportToBlob, MainMenu, Excalidraw } from '@excalidraw/excalidraw'
import React from 'react'
import type IUser from '@/interfaces/user'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Notebook (_props: any) {
  const { user } = useUser() as unknown as {
    user: IUser
    logout: () => void
  }
  return (
    <div>
      <div className='mt-[100px]'>
       <Excalidraw>
        {/* nu asa trb facut dar merge asa ca idgaf */}
       ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/> ‎<br/>
        <MainMenu>
          <MainMenu.Item onSelect={() => { window.alert('Item1') }}>
            Item1
          </MainMenu.Item>
          <MainMenu.Item onSelect={() => { window.alert('Item2') }}>
            Item 2
          </MainMenu.Item>
        </MainMenu>
        </Excalidraw>
      </div>
    </div>
  )
}
export default withRouter(Notebook)
