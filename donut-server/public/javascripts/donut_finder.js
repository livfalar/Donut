class DonutFinder {
    async findDonutTest (id) {
        return id;
    }

   
    async getDonutNumberThroughEmotion (textValue){
        //const textValue = textObject.emotionText;

        for (let word of textValue.split(" ")){
            if(word === "uneasy"){return 0;}
            else if(word === "happy"){return 1;}
            else if(word === "sad" || word === "unhappy"){return 2;}
            //else if(word == "stressed"){return 3;}
        }
        return textValue.split(" ").length % 3;
    }
    

    async setDonut(donutNumber){
        switch(donutNumber){
            case 0:
                return{
                setDonutSource:"https://www.seekpng.com/png/detail/293-2933924_chocolate-glazed-doughnut.png",
                setDonutAlt:"Chocolate Glazed - Doughnut@seekpng.com",
                setDonutname:"You got: Chocolate Glaze",
                }
            case 1:
                return{
                setDonutSource:"https://www.seekpng.com/png/detail/152-1524619_transparent-donut-cinnamon-mini-donuts-transparent.png",
                setDonutAlt:"Transparent Donut Cinnamon - Mini Donuts Transparent@seekpng.com",
                setDonutname:"You got: Cinamon Sugar"
                }
            case 2:
                return{
                setDonutSource:"https://www.seekpng.com/png/detail/227-2275728_maple-iced-glazed-chocolate-custard-filled-donut.png",
                setDonutAlt:"Maple Iced Glazed - Chocolate Custard Filled Donut@seekpng.com",
                setDonutname:"You got: Creame Filled"
                }

        }
    }

}

module.exports = {DonutFinder};
