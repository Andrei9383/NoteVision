/* eslint-disable react/jsx-key */
import React, { Fragment, useState, useEffect } from 'react'

import Header from '@/components/header/header'
import type IUser from '@/interfaces/user'
import { useUser } from '@/lib/firebase/useUser'
import { Menu, Transition } from '@headlessui/react'
import CreateNotebook from '@/components/cloudFirestore/CreateNotebook'
import ReadNotebooks from '@/components/cloudFirestore/ReadNotebooks'
import { useRouter } from 'next/router'
import { PencilIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Profile(): JSX.Element {
  const { user } = useUser() as unknown as {
    user: IUser
    logout: () => void
  }
  const [newNotebookName, setNewNotebookname] = useState('')
  const [notebooks, setNotebooks] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (!user) return
    void ReadNotebooks(user).then((notebooks) => {
      setNotebooks(notebooks)
    })
  }, [user])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCreateNotebook = async () => {
    if (newNotebookName === '') {
      alert('Please enter a name')
    } else {
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const returnCode = CreateNotebook(newNotebookName, user)
      if (returnCode === 0) {
        void router.push('/notebooks')
      }
      setNewNotebookname('')
    }
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!user) return <div>loading...</div>

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setMobileMenuOpen(arg0: boolean): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <Header />
      <div className="flex flex-row h-full">
        <div className="h-screen grid grid-rows-3 place-items-center border-gray-400 border-r drop-shadow-md shadow-gray shadow-2xl">
          <div className="p-10">
            <h1 className="text-5xl font-bold text-center align-middle ">
              Profile
              <button onClick={() => { void ReadNotebooks(user) }}>Read Notebooks</button>
            </h1>
            <div className="flex align-middle place-items-center mt-10">
              <img
                src={user.profilePic}
                className="rounded-full w-8 h-8 mr-2"
              />
              <h1 className="text-2xl font-bold  ">{user.name}</h1>
            </div>
          </div>

          <p className="text-sm text-gray-500">Content.</p>
          <p>Footer</p>
        </div>

        <div className="h-screen grid grid-rows-3 place-items-center  w-full">
          <div className="text-6xl font-bold mb-20">Notebooks</div>
          <div className="flex mb-96">
            <label className="block mr-2">
              <span className="text-gray-700">Name</span>
              <input
                type="search"
                placeholder="Search"
                className="rounded-lg block"
              />
            </label>
            <label className="block mr-2">
              <span className="text-gray-700 ">Sort</span>
              <select className="block w-full rounded-lg">
                <option>Date created</option>
                <option>Date modified</option>
                <option>Alphabetically</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Sort order</span>
              <select className="block w-full rounded-lg  ">
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </label>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="font-bold py-2 px-4 w-20 h-10 mt-6 ml-20 inline-flex  items-center justify-center gap-x-1.5 rounded-md bg-[#ffffff50]    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {/* <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
        /> */}{' '}
                  New
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <input
                      type="text"
                      className="form-input outline-none border-none w-full px-4 py-2 text-sm rounded-md placeholder-gray-500 focus:ring-0 focus:border-transparent"
                      onChange={(e) => {
                        setNewNotebookname(e.target.value)
                      }}
                      value={newNotebookName}
                    ></input>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-green-100 text-gray-900 '
                              : 'text-green-700 ',
                            'block px-4 py-2 text-sm h-full w-full'
                          )}
                          onClick={() => {
                            void handleCreateNotebook()
                          }}
                        >
                          Create
                        </a>
                      )}
                    </Menu.Item>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

          </div>
          <div className="grid  grid-flow-col gap-4 mb-[75vh]">

            {notebooks.map((notebook) => (
              <div className="bg-white rounded-lg shadow-lg p-5">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <PencilSquareIcon className="rounded-lg w-8 h-8 mr-2" />

                    <h1 className="text-xl font-bold  ">{notebook.name}</h1>
                  </div>
                  {/* <div className="flex flex-row">
                    <button className="mr-2">
                      <PencilIcon className="h-5 w-5 text-gray-400" />
                    </button>
                    <button>
                      <TrashIcon className="h-5 w-5 text-gray-400" />
                    </button>
            </div> */}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
      <div>

      </div>
    </>
  )
}
