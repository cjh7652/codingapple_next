import {connectDB} from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink"
import ListItem from "./ListItem";

export const dynamic='force-dynamic'  /* 항상 다이나닉하게 렌더링해서 보여줌  */
/* 기본적으로 빌드하면 빌드된 부분만 나타나는데 그것을 해결하기 위한것임 */
export default async function List() {

    const client = await connectDB;
    const db=client.db("forum")
    let result = await db.collection('post').find().toArray();
    console.log(result);
    return (
      <div className="list-bg">
        <ListItem result={result} />
       
      </div>
    )
  } 