const axios = require('axios');

const useAxiosLove= async (prompt,text)=>{

    const fetch1 = await fetch(new Request(
        "https://api.neural.love/v1/ai-art/generate", 
        {
            headers: { 
                Authorization: "Bearer v1.c5a905899d689bab68c2c171e500878faabf71de87db14f91d9b5324cf4c8801",
                accept: 'application/json',
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                style: prompt,
                layout: 'square',
                amount: 4,
                isPublic: true,
                isPriority: false,
                isHd: false,
                steps: 25,
                cfgScale: 7.5,
                prompt: text
            }),
        }
    ));   
    const response = await fetch1.json();
    console.log(response["orderId"])
    const url = 'https://api.neural.love/v1/ai-art/orders/'+response["orderId"]
    const fetch2 = new Request(
        url, 
        {
            headers: { 
                Authorization: "Bearer v1.c5a905899d689bab68c2c171e500878faabf71de87db14f91d9b5324cf4c8801",
                accept: 'application/json',
            },
            method: "GET",
        }
    );   
    const response2 = await fetch2.json();
    console.log(response2);
    return response2["thumbnails"][Math.floor(Math.random()*2)]["url"]  
}

export default useAxiosLove;