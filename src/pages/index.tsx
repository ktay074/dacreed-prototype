import { SignInButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import type {RouterOutputs} from "~/utils/api"

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import Image from 'next/image';
import { LoadingPage } from "../components/loading";
import { useState } from "react";

dayjs.extend(relativeTime);

const CreatePostWizard = () => {
  const {user} = useUser();
  const [input, setInput] = useState("")

  const {mutate} = api.posts.create.useMutation();

  console.log(user)

  if (!user) return null;

  return (
  <div className="flex gap-3 w-full">
    <Image src={user.profileImageUrl} 
    className="w-14 h-14 rounded-full"
    alt="your profilr picture"
    width={56}
    height={56}
    />
    <input placeholder="Type some emojis!" 
    className="grow bg-transparent outline-none"
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={() => mutate({ content: input})}>Post</button>
  </div>)
}


type PostWithUser = RouterOutputs["posts"]["getAll"][number];
const PostView = (props: PostWithUser) => {
  const {post, author} = props;
return (
  <div className="p-4 border-b border-slate-400 flex gap-3" 
          key={post.id}>
            <Image src={author.profileImageUrl} className="w-14 h-14 rounded-full" 
            alt={`@${author.username}'sProfile Picture`}
            width={56}
            height={56}
            />
            <div className="flex flex-col">
              <div className="flex text-slate-300 gap-1"> <span >{`@${author.username}`} </span>
              
               <span className="font-thin">{` · ${dayjs(
                post.createdAt
                ).fromNow()}`}</span> 
                </div>
              <span className="text-xl">{post.content}</span>
              </div>
            </div>
)
}

const Feed = () => {
  const {data, isLoading: postsLoading} = api.posts.getAll.useQuery()

  if (postsLoading) return <LoadingPage/>

  if (!data) return <div>Something went wrong!</div>

  return (
<div className="flex flex-col">
          {data.map((fullPost) => (
            <PostView {...fullPost} key={fullPost.post.id} />
          ))}
        </div>
  )
}

const Home: NextPage = () => {
  const {user, isLoaded: userLoaded, isSignedIn} = useUser();

  const {data} = api.posts.getAll.useQuery();

  if (!userLoaded) return <div/>


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-screen">
        <div className="h-full w-full border-slate-400  md:max-w-2xl border-x">
          <div className="border-b border-slate-400 p-4 flex ">
          {!isSignedIn && (
          <div className="flex justify-center">
            <SignInButton />
            </div>
            )}
          {isSignedIn && <CreatePostWizard/>}
        </div>
        <Feed/>
        </div>
      </main>
    </>
  );
};

export default Home;
