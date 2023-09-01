import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){
    if(요청.method == 'POST'){
      /*   console.log(요청.body)  확인하고 싶으면 밑에 내용 주석후 확인 */
        let rebody={
            title : 요청.body.title, content : 요청.body.content
        }
        const client = await connectDB;
        const db=client.db("forum")
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(요청.body._id)}, 
            { $set : rebody} 
          );
          console.log(result)
      
          응답.redirect(302, '/list')
    }
}