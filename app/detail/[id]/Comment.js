'use client'
import {useState, useEffect} from "react"
export default function Comment(props){
    let [comment, setComment] =useState('')
    let [data, setData] =useState([])

    useEffect(() =>{
        fetch('/api/comment/list?id=' + props._id).then(r => r.json())
        .then((result)=>{
            setData(result) //이것보다
            console.log(data) //여기가 먼저 실행되어 [] 빈배열이 보임
        })
    },[])
    return (
        <div>
            <hr />
            {
                data.length>0 ?
                data.map((a, i)=>
                  
                        <p key={i}>{a.comtent}</p>
                    
                ):"로딩중"
            }
            <input onChange={(e) => {setComment(e.target.value)}}/>
            <button onClick={()=>{
               // console.log(comment)
                fetch('/api/comment/new', {method: 'POST', body:JSON.stringify({comtent:comment, _id:props._id})})
            }}>댓글전송</button>
        </div>
    )
}