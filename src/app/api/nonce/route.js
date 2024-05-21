const { generateNonce } = require("siwe");


export async function GET(get){
    try{
        const nonce= generateNonce()
        return new Response(JSON.stringify(nonce),{status:200})

    }catch(error){
        console.log(error)
    }

}