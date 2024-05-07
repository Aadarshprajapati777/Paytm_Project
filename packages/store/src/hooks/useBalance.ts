import { useRecoilValue } from "recoil";
import { balanceAtom } from "../atoms/balance";


export const useBalalnce =()=>{
    const value= useRecoilValue(balanceAtom);
    return value;
    
}