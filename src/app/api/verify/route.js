import { SiweMessage } from "siwe";


export async function POST(req, res){
 const {message, signature}= req.body;
 try{
    const siweMessage=new SiweMessage(message);
    const result= await siweMessage.verify({signature})
    if(result.success){
        console.log(result)
        res.status(200).json({ok:success})
    }
 }catch(error){
    console.log("Error",error)
    res.status(500).json({error:error.message})
 }

}