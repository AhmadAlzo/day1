const colors={
    "blue_button":"#01a1df",
    "red_but":"#c82816",
    "graduint":"#020685  #0197d6"
}

// const a = "v1.c5a905899d689bab68c2c171e500878faabf71de87db14f91d9b5324cf4c8801"

export const DATA=[
    [
        {
            model:"nitrosocke/mo-di-diffusion",
            image1:require("./images/disny1.jpg"),
            image2:require("./images/disny2.jpg"),
            name:"disny",
            id:0,
            prompt:" modern disney style"
        },
        {
            model:"SG161222/Realistic_Vision_V1.4",
            image1:require("./images/real1.jpg"),
            image2:require("./images/real2.png"),
            name:"Realistic",
            id:1,
            prompt:" (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3"
        },
        {
            model:"prompthero/openjourney",
            image1:require("./images/journy1.png"),
            image2:require("./images/journy2.jpg"),
            name:"mdjrny",
            id:2,
            prompt:" mdjrny-v4 style"
        },
        
        {
            model:"runwayml/stable-diffusion-v1-5",
            image1:require("./images/diffusion2.png"),
            image2:require("./images/diffusion1.jpg"),
            name:"stableDiff",
            id:3,
            prompt:""
        },
        {
            model:"wavymulder/Analog-Diffusion",
            image1:require("./images/analog1.jpg"),
            image2:require("./images/analog2.jpg"),
            name:"Analog ",
            id:4,
            prompt:" analog style"
        },
        {
            model:"darkstorm2150/Protogen_x5.8_Official_Release",
            image1:require("./images/protogen1.jpg"),
            image2:require("./images/protogen2.jpg"),
            name:"protogen",
            id:5,
            prompt:"modelshoot style, analog style, mdjrny-v4 style, nousr robot"
        },
        {
            model:"22h/vintedois-diffusion-v0-1",
            image1:require("./images/face1.jpg"),
            image2:require("./images/face2.jpg"),
            name:"fidelity faces",
            id:6,
            prompt:"estilovintedois "
        },
        {
            model:"hakurei/waifu-diffusion",
            image1:require("./images/waifu1.jpg"),
            image2:require("./images/waifu2.jpg"),
            name:"waifu",
            id:7,
            prompt:" masterpiece, best quality"
        },
        {
            model:"prompthero/openjourney-v4",
            image1:require("./images/discord1.png"),
            image2:require("./images/discord2.png"),
            name:"mdjourney-v4",
            id:8,
            prompt:""
        },
    ],
    [
        {
            model:"love",
            image1:require("./images2/anime1.jpg"),
            image2:require("./images2/anime2.jpg"),
            name:"anime",
            id:0,
            prompt:"anime"
        },
        {
            model:"love",
            image1:require("./images2/creepy1.jpg"),
            image2:require("./images2/creepy2.jpg"),
            name:"creepy",
            id:1,
            prompt:"creepy"
        },
        {
            model:"love",
            image1:require("./images2/cyberpunk1.jpg"),
            image2:require("./images2/cyberpunk2.jpg"),
            name:"cyberpunk",
            id:2,
            prompt:"cyberpunk"
        },
        {
            model:"love",
            image1:require("./images2/fantasy1.jpg"),
            image2:require("./images2/fantasy2.jpg"),
            name:"fantasy",
            id:3,
            prompt:"fantasy"
        },
        {
            model:"love",
            image1:require("./images2/nature1.jpg"),
            image2:require("./images2/nature2.jpg"),
            name:"nature",
            id:4,
            prompt:"nature"
        },
        {
            model:"love",
            image1:require("./images2/painting1.jpg"),
            image2:require("./images2/painting2.jpg"),
            name:"painting",
            id:5,
            prompt:"painting"
        },
        {
            model:"love",
            image1:require("./images2/scifi1.jpg"),
            image2:require("./images2/scifi2.jpg"),
            name:"scifi",
            id:6,
            prompt:"sci-fi "
        },
        {
            model:"love",
            image1:require("./images2/space1.jpg"),
            image2:require("./images2/space2.jpg"),
            name:"space",
            id:7,
            prompt:"space"
        },
        {
            model:"love",
            image1:require("./images2/steampunk1.jpg"),
            image2:require("./images2/steampunk2.jpg"),
            name:"steampunk",
            id:8,
            prompt:"steampunk "
        },
        {
            model:"love",
            image1:require("./images2/tatoo1.jpg"),
            image2:require("./images2/tatoo2.jpg"),
            name:"tatoo",
            id:9,
            prompt:"tatoo "
        },
    ]
]