 
// console.log('Welcome to js');
// console.log('Hello my Name is Ashraful islam ');

// todo :    part - 2. topic :  Traversing dom - getElementsByTagName.

 const liCollection = document.getElementsByTagName('li');
 console.log(liCollection); // HTMLCollection পাব

 const h2Collection =document.getElementsByTagName('h2');
 console.log(h2Collection);
 // todo : এগুলো সম্পূর্ণ array নয়। array এর মত। html collection . array like object .

 // আবার আমারা চাইলে ,  ei htmlCollection er vetore, loop calate pari.

 for( const li of liCollection){
    // console.log(li);
    console.log(li.innerText);
 }

 for ( const heading of h2Collection){
    console.log(heading.innerText);
 }

 const allParagraph = document.getElementsByTagName('p')
  for( const paragraph of allParagraph){
    console.log(paragraph.innerText);
  }


  // todo : Traversing dom - getElementsByClassName VS getElementById
  const singleBtn = document.getElementById('fast-btn');
  const btnText = singleBtn.innerText;
  console.log(btnText);

  const helloDom = document.getElementById('heading');
  console.log(helloDom.innerText);



  const getClasses = document.getElementsByClassName('lorem');
  const setText = getClasses.innerText = 'hello lorem how are you';
  // getElementById === jodi na thake, taole undefined dibe, 
  // getElementsByClassName = na thakle,
