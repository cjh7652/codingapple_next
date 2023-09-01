'use client'

import Link from "next/link"


export default function ListItem({result}){
    return (
        <div>
            {
                result.map((a, i) =>{
                    return(
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={'/detail/'+result[i]._id.toString()}>
                                <h4>{result[i].title}</h4>
                            </Link>
                            {/*    <DetailLink /> */}
                            <Link href={'/edit/'+result[i]._id.toString()}>수정</Link>
                            <span onClick={(e) => { fetch('/api/post/delete', {method : 'DELETE', body : result[i]._id})
                            .then((r)=>{
                                if(r.status == 200) {
                                  return r.json()
                                } 
                              })
                              .then((result)=>{ 
                                //성공시 실행할코드
                                e.target.parentElement.style.opacity=0;
                                setTimeout(()=>{
                                    e.target.parentElement.style.display='none';
                                },1000)
                              })
                            }}> &nbsp; &nbsp; &nbsp; 삭제버튼</span>
                            <p>1월 1일</p>
                        </div>
                    )
                })
            }
        </div>
    )
}