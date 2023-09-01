'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(){
   let router= useRouter()
   /* router.prefetch  페이지 미리 로드 장점 : 실행 속도가 빨라짐*/
   /* router도 링크태그랑 비슷함 router에는 다른 기능들이 추가적으로 있음 */
   /* 사용하지 않아도됨 알려주기 위한것 */
    return(
        <button onClick={() =>{router.prefetch('/detail/dsds')}}>버튼</button>
    )
}