import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useSession, signOut } from 'next-auth/react'
// import { GoSign} from "react-icons/go";
import { useRouter } from "next/router";



const Feed = () => {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!session) {
      router.push('/auth/signup')
    }
  })
    return (
      <>
        <main>
          <div className="h-screen flex justify-center bg-gradient-to-b from-indigo-500 via-sky-500 to-pink-500">
            <div className="w-full sm:w-[400px] h-full bg-white overflow-y-scroll">
              {/* profile holder */}

              <header className="bg-indigo-300 p-3 flex flex-row justify-between ">
                <Image
                  className="h-20"
                  width={58}
                  height={58}
                  src="/facepal_logo.png"
                  alt="profile photo"
                />
                <Image
                  className="rounded-full"
                  width={58}
                  height={58}
                  src={session ?.user.image}
                  alt="profile photo"
                />
              </header>

              {/* previous posts holder */}

              <div className="flex flex-col gap-2 p-3">
                <div className="border border-gray-100 rounded-md p-3">
                  {" "}
                  {/* single post */}
                  <ul className="flex  justify-between">
                    <li className="flex flex-row gap-1 items-center">
                      <Image
                        className="rounded-full"
                        src="/image/opeyemi.png"
                        width={40}
                        height={40}
                        alt="profile photo"
                      />
                      <small className="text-gray-700">yaradua</small>
                    </li>
                    <li>
                      <small className="text-gray-700">24 minutes ago</small>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, tenetur. Natus provident id quae delectus ab.
                    Asperiores, veritatis!
                  </p>
                  <ul className="flex flex-row justify-between mt-2">
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>comments</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>likes</span>
                    </li>
                    <li className="text-sm text-gray-500 ">
                      <span>5</span>
                      <span>hearts</span>
                    </li>
                    <li className="text-sm text-gray-500 ">
                      <span>5</span>
                      <span>wows</span>
                    </li>
                  </ul>
                </div>{" "}
                {/*end of single post*/}
                <div className="border border-gray-100 rounded-md p-3">
                  {" "}
                  {/* single post */}
                  <ul className="flex justify-between">
                    <li className="flex flex-row gap-1 items-center">
                      <Image
                        className="rounded-full"
                        src="/image/opeyemi.png"
                        width={40}
                        height={40}
                        alt="profile photo"
                      />
                      <small className="text-gray-700">yaradua</small>
                    </li>
                    <li>
                      <small className="text-gray-700">24 minutes ago</small>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, tenetur. Natus provident id quae delectus ab.
                    Asperiores, veritatis!
                  </p>
                  <ul className="flex flex-row justify-between mt-2">
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>comments</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>likes</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>hearts</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>wows</span>
                    </li>
                  </ul>
                </div>{" "}
                {/*end of single post*/}
                <div className="border border-gray-100 rounded-md p-3">
                  {" "}
                  {/* single post */}
                  <ul className=" flex justify-between">
                    <li className="flex flex-row gap-1 items-center">
                      <Image
                        className="rounded-full"
                        src="/image/opeyemi.png"
                        width={40}
                        height={40}
                        alt="profile photo"
                      />
                      <small className="text-gray-700">yaradua</small>
                    </li>
                    <li>
                      <small className="text-gray-700">24 minutes ago</small>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, tenetur. Natus provident id quae delectus ab.
                    Asperiores, veritatis!
                  </p>
                  <ul className="flex flex-row justify-between mt-2">
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>comments</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>likes</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>hearts</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>wows</span>
                    </li>
                  </ul>
                </div>{" "}
                {/*end of single post*/}
                <div className="border border-gray-100 rounded-md p-3">
                  {" "}
                  {/* single post */}
                  <ul className="flex justify-between">
                    <li className="flex flex-row gap-1 items-center">
                      <Image
                        className="rounded-full"
                        src="/image/opeyemi.png"
                        width={40}
                        height={40}
                        alt="profile photo"
                      />
                      <small className="text-gray-700">yaradua</small>
                    </li>
                    <li>
                      <small className="text-gray-700">24 minutes ago</small>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, tenetur. Natus provident id quae delectus ab.
                    Asperiores, veritatis!
                  </p>
                  <ul className="flex flex-row justify-between mt-2">
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>comments</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>likes</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>hearts</span>
                    </li>
                    <li className="text-sm text-gray-500">
                      <span>5</span>
                      <span>wows</span>
                    </li>
                  </ul>
                </div>{" "}
                {/*end of single post*/}
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Feed;
