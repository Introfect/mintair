import { SiweMessage } from "siwe";


export async function POST(req, res){
 const {message, signature}= req.body;
 try{
    const siweMessage=new SiweMessage(message);
    const result= await siweMessage.verify({signature})
    if(result.success){
        console.log(result)
        return new Response(result.success,{status:200})
        
    }
 }catch(error){
    console.log("Error",error)
    return new Response("Error",{status:500})

 }

}