import React,{useState} from "react";
import "./style.css";
var emojis = {
    "๐" : "Grinning face",
    "๐" : "Beaming face with smiling eyes",
    "๐" : "Face with tears of joy",
    "๐คฃ" : "Rolling on floor laughing",
    "๐" : "Grinning face with big eyes",
    "๐" : "Grinning face with smiling eyes",
    "๐" : "Grinning face with sweat",
    "๐" : "Grinning squinting face",
    "๐" : "Winking face",
    "๐" : "Smiling face with smiling eyes",
    "๐" : "Face savouring food",
    "๐" : "Smiling face with sunglasses",
    "๐" : "Smiling face with heart eyes",
    "๐" : "Face blowing a kiss",
    "๐ฅฐ" : "Smiling face with hearts",
    "๐" : "Kissing face",
    "๐" : "Kissing face with smiling eyes",
    "๐ฅฒ" : "Smiling face with tear",
    "๐" : "Kissing face with closed eyes",
    "๐" : "Slightly smiling face",
    "๐ค" : "Hugging face",
    "๐คฉ" : "Star-struck",
    "๐ค" : "Thinking face",
    "๐คจ" : "Face with raised eyebrows",
    "๐" : "Neutral face",
    "๐" : "Expressionless face",
    "๐ถ" : "Face without mouth",
    "๐ถโ๐ซ๏ธ" : "Face in clouds",
    "๐" : "Face with rolling eyes",
    "๐" : "Smirking face",
    "๐ฃ" : "Preserving face",
    "๐ฅ" : "Sad but relieved face",
    "๐ฎ" : "Face with open mouth",
    "๐ค" : "Zipper mouth face",
    "๐ฏ" : "Hushed face",
    "๐ช" : "Sleepy face",
    "๐ซ" : "Tired face",
    "๐ฅฑ" : "Yawning face",
    "๐ด" : "Sleeping face",
    "๐" : "Relieved face",
    "๐" : "Face with tongue",
    "๐" : "Winking face with tongue",
    "๐" : "Squinting face with tongue",
    "๐คค" : "Drooling face",
    "๐" : "Uamused face",
    "๐" : "Downcast face with sweat",
    "๐" : "Pensive face",
    "๐" : "Confused face",
    "๐" : "Upside down face",
    "๐ค" : "Money mouth face",
    "๐ฒ" : "Astonished face",
    "โน๏ธ" : "Frowning face",
    "๐" : "Slightly frowning face",
    "๐" : "See-No-Evil Monkey",
    "๐" : "Hear-No-Evil Monkey",
    "๐" : "Speak-No-Evil Monkey",
    "๐" : "Monkey",
    "๐ฆ" : "Gorilla",
    "๐ฆง" : "Orangutan",
    "๐ถ" : "Dog Face",
    "๐" : "Dog",
    "๐ฆฎ" : "Guide Dog",
    "๐โ๐ฆบ" : "Service Dog",
    "๐ฉ" : "Poodle",
    "๐บ" : "Wolf", 
    "๐ฆ" : "Fox",
    "๐ฆ" : "Raccoon", 
    "๐ฑ" : "Cat Face",
    "๐" : "Cat",
  };
    
var ekeys = Object.keys(emojis);
function Interpreter(){
  const [inputMeaning,emojiMeaning]=useState("");
  function eInput(e){
    var Input = e.target.value;
		var meaning = emojis[Input];
		if (meaning === undefined) {
			meaning = "Not Found";
      Input = "";
		}
		emojiMeaning(meaning);

  }
  function emojiClickHandler(emoji) {
		var meaning = emojis[emoji];
		emojiMeaning(meaning);
	}


  return(
    <div className="wrap">
      <b><p>Enter the emoji : </p></b>
      <input onChange={eInput}/>
      <p>{inputMeaning}</p>
      <b><p>What we know</p></b>
      {ekeys.map(function (keys) {
				return (
					<span onClick={() => emojiClickHandler(keys)}>{keys}</span>
				);
			})}
    </div>
  );
}
export default Interpreter;