import { SiweMessage } from "siwe";


export async function POST(req, res){
 const body= await req.json()
 const {message, signature}=body
 try{
    const siweMessage=new SiweMessage(message);
    const result= await siweMessage.verify({signature})
    return new Response(JSON.stringify(result.success),{status:200})
 }catch(error){
    console.log("Error",error.message)
    return new Response("Error",{status:500})
 }
}