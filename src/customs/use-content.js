import { useContext,useState,useEffect } from "react";
import {FirebaseContext} from "../context/firebase"

export function useContent(target){
    const [content,setContent] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    // filling alll our series,movies into this useContent hook
    useEffect(()=>{
        firebase.
        firestore()
        .collection(target).
        get()
        .then((snapshot)=>{
            const allContent = snapshot.docs.map((contentObj)=>({
                ...contentObj.data(),
                docId: contentObj.id,
            }));

            setContent(allContent);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    // content will have 2 things-> series, movies
    // whatever we want, we can return
    return {[target]:content};
}