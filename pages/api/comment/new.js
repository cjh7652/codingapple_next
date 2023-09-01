import {connectDB} from "@/util/database"
import {getServerSession} from "next-auth"  
import {ObjectId} from 'mongodb'
import { authOptions } from "../auth/[...nextauth]"  
export default async function handler(요청, 응답){
    if(요청.method =='POST'){
        let session=await getServerSession(요청, 응답, authOptions)
        //console.log(요청.body)
        요청.body =JSON.parse(요청.body)
        console.log(session.user.email)
        let dbs={
            comtent: 요청.body.comment,
            parent:new ObjectId(요청.body._id),
            author: session.user.email
        }
        const db= (await connectDB).db('forum')
        let result=await db.collection('comment').insertOne(dbs) 
        응답.status(200).json('저장완료')
    }
}