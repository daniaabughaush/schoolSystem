let userCard = document.getElementById("studentInfo");
let form = document.getElementById("form");
// localStorage.clear()
let arrInfo=[];
if(localStorage.arrInfo != null){
  arrInfo=JSON.parse(localStorage.arrInfo);
    console.log("arrlocal"+localStorage.arrInfo)
    // localStorage.clear();
        render();
  }


function Student(name,date,gender,major,phone,img){
  this.name=name;
  this.date=date;
  this.gender=gender;
  this.major=major;
  this.phone=phone;
  this.img=img;
 
}



form.addEventListener("submit",handlSubmit)
function handlSubmit (e) {
  e.preventDefault();
  const name = e.target.fname.value;
  const dateBirth = e.target.date.value;
  const gender = e.target.gender.value;
  const major = e.target.major.value;
  const phone = e.target.phone.value;
  const img = e.target.img.value;
  
  let studentCreat=new Student(name,dateBirth,gender,major,phone,img)
    arrInfo.push(studentCreat)
  // console.log(studentCreat)
  
  
  let studentToStr=JSON.stringify(arrInfo)
  localStorage.setItem("arrInfo",studentToStr)
  console.log(localStorage)
  //  localStorage.clear() 
  render();
  }
  
  function render(){
    userCard.textContent=""
  for (let index = 0; index < arrInfo.length; index++) {
   let cardSt=document.createElement("div")
   userCard.appendChild(cardSt)
   cardSt.setAttribute("id", "cardSt") 
    let img=document.createElement("img")
    cardSt.appendChild(img)
     img.src=`${arrInfo[index].img}`

     let ulEl=document.createElement("ul")
     cardSt.appendChild(ulEl)

     let liname=document.createElement("li")
    ulEl.appendChild(liname);
    liname.textContent=` Name: ${arrInfo[index].name}`
    
        liGender=document.createElement("li")
        ulEl.appendChild(liGender)
        liGender.textContent=`Gender: ${arrInfo[index].gender}`

    liBirth=document.createElement("li")
    ulEl.appendChild(liBirth)
    liBirth.textContent=`Date of Birth :${arrInfo[index].date}`

    liMajor=document.createElement("li")
    ulEl.appendChild(liMajor)
    liMajor.textContent=`Major: ${arrInfo[index].major}`

    liPhone=document.createElement("li")
    ulEl.appendChild(liPhone)
    liPhone.textContent=`Phone: ${arrInfo[index].phone}`





  }
    
  }


 