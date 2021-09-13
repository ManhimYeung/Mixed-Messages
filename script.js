const message1 = ["Manhim", "Josh", "Khalid"];
const message2 = ["is a", "is not a"];
const message3 = ["programmer", "student", "thief", "begger", "cleaner"];


const mixedMessageGenerator = (array) => {
    let randMsg1 = Math.floor(Math.random() * message1.length);
    let randMsg2 = Math.floor(Math.random() * message2.length);
    let randMsg3 = Math.floor(Math.random() * message3.length);
    
    let generatedMessage = [];
    generatedMessage.push(message1[randMsg1], message2[randMsg2], message3[randMsg3]);
    let spaces = generatedMessage.join(" ");
    console.log(spaces);
    
    return generatedMessage;
}

const findIllegal = (array) => {
    if (array[1] === "is a" && array[2] === "thief") {
        console.log("Thief caught!");
        return true;
    } else {
        console.log("Thief not caught!");
        return false;
    }
}

findIllegal(mixedMessageGenerator());