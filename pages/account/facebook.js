import { TextField, Button, Input } from "@mui/material";
import { PastTransactions } from "../components/PastTransactions";
import { Card } from "@mui/material";
import { FaVideo, FaShare,  FaImage, FaSmile } from "react-icons/fa"
import { BiLike,BiComment, BsMessenger } from "react-icons/bi"
import { MdOutlineAccountCircle } from "react-icons/md"
import { PiShareFatFill } from "react-icons/pi"
import { HiOutlinePhotograph } from "react-icons/hi"
import { BsFillGrid3X3GapFill} from "react-icons/bs"
import Link from "next/link";
import Image from "next/image";

export default function Facebook() {
  return (
    <main className="bg-[#e7f3ff] ">
    

      <Card className="flex flex-row justify-between items-center">
        <div className="flex flex-row container justify-between items-center h-20">
          <div className="mx-40 h-10">
          <Image
            className=""
            width={100}
            height={100}
            src="/facepal_logo.png"
            alt="profile photo"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div><BsFillGrid3X3GapFill/></div>
          <div></div>
          <div></div>
            <div>
              <div><Image
                className=""
                width={58}
                height={58}
                src="/facepal_logo.png"
                alt="profile photo"
              /></div>
          </div>
        </div>
        </div>
        
      </Card>

      {/* body  */}
      <div className="grid grid-cols-3 bg-[#e7f3ff] mt-5">
        <div className=""></div>
        <div className="">
          <Card className="p-4">
            <div className="grid grid-cols-7">
              <Image
                className=" rounded-full col-span-1"
                width={30}
                height={30}
                src="/chi.JPG"
                alt="profile photo"
              />
              <TextField className="h-2 col-span-6"
                id="outlined-basic"
                placeholder="What's on your mind, Chioma"
                variant="outlined"
              />
            </div>
            <div class="grid grid-cols-3 pt-4">
              <div className="flex items-center">
                <FaVideo/>
                Live video</div>
              <div className="flex items-center">
                <HiOutlinePhotograph/>
                Photo/video</div>
              <div className="flex items-center">
                <FaSmile/>
                Feeling/activity</div>
            </div>
          </Card>

          <Card className="mt-7">
            <div className="flex flex-row justify-between p-5">
              <div className="flex flex-row justify-between items-center ">
                <div><Image
                  className=""
                  width={58}
                  height={58}
                  src="/facepal_logo.png"
                  alt="profile photo"
                /></div>
                <div className="mx-3">
                  <b>Ifeoma Gift</b>
                  <p>22hrs</p>
                </div>
              </div>
              <div>...</div>
            </div>
            <div className="w-100 my-auto mx-auto p-5">
              <Image
                className=" w-full"
                width={100}
                height={100}
                src="/chi.JPG"
                alt="profile photo"
              />
            </div>
            <div className="grid grid-cols-3 align-center mx-9">
              <div className="flex  items-center">
               <BiLike/>
                <h3>Like</h3>
              </div>
              <div className="flex items-center">
                <BiComment/>
                <h3>Comment</h3>
              </div>
              <div className="flex items-center">
                <PiShareFatFill/>
                <h3>Share</h3>
              </div>
              
            </div>
          </Card>
        </div>
        <div>3</div>
      </div>
      <div className="grid grid-cols-3 bg-[#e7f3ff]">
        <div className="">1</div>
        <div className="">
          <Card className="p-4">
            <div className="grid grid-cols-4">
              <Image
                className=" rounded-full col-span-1"
                width={30}
                height={30}
                src="/chi.JPG"
                alt="profile photo"
              />
              <TextField className="h-2 col-span-3"
                id="outlined-basic"
                placeholder="What's on your mind, Chioma"
                variant="outlined"
              />
            </div>
            
          </Card>

         
        </div>
        <div>3</div>
      </div>
      <div className="grid grid-cols-3 bg-[#e7f3ff]">
        <div className="">1</div>
        <div className="">
          <Card className="p-4">
            <div className="grid grid-cols-4">
              <Image
                className=" rounded-full col-span-1"
                width={30}
                height={30}
                src="/chi.JPG"
                alt="profile photo"
              />
              <TextField className="h-2 col-span-3"
                id="outlined-basic"
                placeholder="What's on your mind, Chioma"
                variant="outlined"
              />
            </div>
            <div class="grid grid-cols-3">
              <div className="flex items-center">
                <FaVideo />
                Live video</div>
              <div className="flex items-center">
                <HiOutlinePhotograph />
                Photo/video</div>
              <div className="flex items-center">
                <FaSmile />
                Feeling/activity</div>
            </div>
          </Card>

          <Card className="mt-7">
            <div className="flex flex-row justify-between p-5">
              <div className="flex flex-row justify-between items-center ">
                <div><Image
                  className=""
                  width={58}
                  height={58}
                  src="/facepal_logo.png"
                  alt="profile photo"
                /></div>
                <div className="mx-3">
                  <b>Ifeoma Gift</b>
                  <p>22hrs</p>
                </div>
              </div>
              <div>...</div>
            </div>
            <div className="w-100 my-auto mx-auto p-5">
              <Image
                className=" w-full"
                width={100}
                height={100}
                src="/chi.JPG"
                alt="profile photo"
              />
            </div>
            <div className="grid grid-cols-3 align-center mx-9">
              <div className="flex  items-center">
                <BiLike />
                <h3>Like</h3>
              </div>
              <div className="flex items-center">
                <BiComment />
                <h3>Comment</h3>
              </div>
              <div className="flex items-center">
                <PiShareFatFill />
                <h3>Share</h3>
              </div>

            </div>
          </Card>
        </div>
        <div>3</div>
      </div>
    </main>
  );
}
