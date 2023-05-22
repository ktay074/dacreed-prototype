import {  useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// import { api } from "~/utils/api";
// import type {RouterOutputs} from "~/utils/api"

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
// import Image from 'next/image';
// import { LoadingPage } from "../components/loading";
// import { useState } from "react";

dayjs.extend(relativeTime);

// // Component for logging in the new user and creating a post - input field appears after you have signed in
// const CreatePostWizard = () => {
//   const {user} = useUser();
//   const [input, setInput] = useState("")

//   const ctx = api.useContext();

//   const {mutate, isLoading: isPosting} = api.posts.create.useMutation({
//     onSuccess: () => {
//       setInput("");
//       void ctx.posts.getAll.invalidate();
    
//     }
//   });
  

//   console.log(user)

//   if (!user) return null;

//   return (
//   <div className="flex gap-3 w-full">
//     <Link href="/upload">
//     <Image src={user.profileImageUrl} 
//     className="w-14 h-14 rounded-full"
//     alt="your profilr picture"
//     width={56}
//     height={56}
//     /></Link>
//     <input placeholder="Type some emojis!" 
//     className="grow bg-transparent outline-none"
//     type="text"
//     value={input}
//     onChange={(e) => setInput(e.target.value)}
//     disabled={isPosting}
//     />
//     <button onClick={() => mutate({ content: input})}>Post</button>

//   </div>)
// }

// // Component showing the feed of emoji posts 
// type PostWithUser = RouterOutputs["posts"]["getAll"][number];
// const PostView = (props: PostWithUser) => {
//   const {post, author} = props;
// return (
//   <div className="p-4 border-b border-slate-400 flex gap-3" 
//           key={post.id}>
//             <Image src={author.profileImageUrl} className="w-14 h-14 rounded-full" 
//             alt={`@${author.username ?? 'unknown'}'s Profile Picture`}
//             width={56}
//             height={56}
//             />
//             <div className="flex flex-col">
//               <div className="flex text-slate-300 gap-1"> <span >{`@${author.username ?? 'unknown'}`} </span>
              
//                <span className="font-thin">{` · ${dayjs(
//                 post.createdAt 
//                 ).fromNow()}`}</span> 
//                 </div>
//               <span className="text-xl">{post.content}</span>
//               </div>
//             </div>
// )
// }

// // Component that maps through the post data in the database and displays them in a feed 
// const Feed = () => {
//   const {data, isLoading: postsLoading} = api.posts.getAll.useQuery()

//   if (postsLoading) return <LoadingPage/>

//   if (!data) return <div>Something went wrong!</div>

//   return (
// <div className="flex flex-col">
//           {data.map((fullPost) => (
//             <PostView {...fullPost} key={fullPost.post.id} />
//           ))}
//         </div>
//   )
// }


// Main home page 
const Home: NextPage = () => {
  


  // const getUser = api.findUser.getUser.useQuery(); 
  
  
  return (
    <>
      <Head>
        <title>Dacreed Interns</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f3f0f7] to-[#303F9F]">
        {/* <div className="h-full w-full border-slate-400  md:max-w-2xl border-x">
          <div className="border-b border-slate-400 p-4 flex ">
            {!isSignedIn && (
            <div className="flex justify-center">
              <SignInButton />
            </div>
            )}
            
            {isSignedIn && <CreatePostWizard/>}
          </div>
              
            <div>
                <Feed/>
            </div>
          <SignOutButton/>
        </div> */}

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-bold tracking-tight text-[#303F9F] sm:text-[5rem]">
            Welcome to Dacreed User Content Prototype
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/prototype1/fileupload"
              target="_blank"
            >
              <h2 className="text-2xl font-bold text-[white]">Prototype 1</h2>
            
              <div className="text-lg">
                Proceed to Content Creation page
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/prototype2/upload"
            >
              <h2 className="text-2xl font-bold text-[white]">Prototype 2</h2>
            
              <div className="text-lg">
                Proceed to Content Creation page
              </div>
            </Link>
            <div>

            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
