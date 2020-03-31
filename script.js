let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
  {
    profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_6727.jpg?v=1585172631980",
    name:"B $tacks",
    quote:"QUOTE: Life is like a sandwich, no matter which side you flip it, the bread come first.",
    superlative:"VOTED: Ya motha"
  },
  {
    profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_9170.jpg?v=1585175629253",
    name:"Sheff G",
    quote:"QUOTE: Bro, I'm not Gay!!!",
    superlative:"VOTED: Highest cholesterol"
  },
  
  {
    profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_9841.jpg?v=1585172621177",
    name:"Polo G",
    quote:"QUOTE: say it agin...SHUT up",
    superlative:"VOTED: Smallest man alive"
  },
  
  {
  profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_7818.jpg?v=1585172618394",
  name:"StevensWorld :(",
  quote:"QUOTE: What do you mean?",
  superlative:"VOTED: Most heartbreaks"
  },
  
  {
  profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_8724.jpg?v=1585172614323",
  name:"Elie Wiesel",
  quote:"QUOTE: How do you say it in English?",
  superlative:"VOTED: Most Hondurian"
  },
  
  {
  profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_1169.jpg?v=1585172603477",
  name:"Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III",
  quote:"QUOTE: GUMBALL! You wouldn't steal a car, you wouldn't steal a woman's purse, you wouldn't steal a cell phone! PIRACY IS STEALING!",
  superlative:"VOTED: Idk but he posed so I can have a picture of Eric talking to a girl in the background (look between Darwin and Miguels head)."
  },
  
  {
  profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_9211.jpg?v=1585172609451",
  name:"d3m.j3w3ll",
  quote:"QUOTE: (probably something weird)",
  superlative:"VOTED: Most Unique character"
  },
  
  
  {
  profileImage:"https://cdn.glitch.com/db4c7740-3a51-467f-89c1-ce1c27d65052%2FIMG_4037.jpg?v=1585172606218",
  name:"Dorian The Alien",
  quote:"QUOTE: (actually wouldn't know)",
  superlative:"VOTED: Unknown"
  }
  
]

let count=0
 document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML=students[count].name
 document.querySelector("#quote").innerHTML=students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative

let lastStudent = students.length -1
nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++;
  console.log(count) 
  if(count > lastStudent){
    count= 0
  }
  document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML=students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --;
  if(count < 0){
     count = lastStudent
     }
  console.log(count)
  document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML=students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
})

let post= document.querySelector("#post")
let tweetContainer = document.querySelector("#tweetContainer")
console.log(post)

post.addEventListener("click",()=>{
console.log("dwefergegegh5gergwreg")    
 let tweetInput=document.querySelector("#tweet").value
 console.log(tweetInput)
tweetContainer.innerHTML += 
  `<div id="tweetBox">
<h3>
${tweetInput}</h3>
</div>`
                               })

let whisper= document.querySelector("#whisper")

whisper.addEventListener("click",()=>{
  
  let tweetInput=document.querySelector("#tweet").value
 let whisper= tweetInput.toLowerCase()
tweetContainer.innerHTML += 
  `<div id="tweetBox">
<h3>
${whisper}</h3>
</div>`
})