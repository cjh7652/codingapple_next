import {connectDB} from "@/util/database";

export const revalidate=60; //60초가 지나면 다시 캐싱함

export default async function Home() {
  
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>hello</div>
  )
}
