const testimonials = [
    {
        name: "Himanshu Upadhyay",

        photoUrl: "https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg?t=st=1738776940~exp=1738780540~hmac=fcc2535f07a839e90dcd0af477448c4efee2cfa3f12e85d4ba8f3b2a3dcfeb98&w=1060",
        
        text: "I recently completed the UI UX Course offered by Felix It System and I must say it's the best UI UX course out there. The comprehensive curriculum and expert instructors truly helped me enhance my skills in user interface design and user experience. I highly recommend Felix It System for anyone looking to dive deeper into UI/UX."
    },

    {
        name: "Shivangi Sharma",

        photoUrl: "https://img.freepik.com/free-photo/young-hispanic-student-girl-smiling-happy-university_839833-15170.jpg?t=st=1738779918~exp=1738783518~hmac=0eec8b01ec79e0c4784ffc3f09d7a33a595a0bcaa597bf7b1bfce5aca740f714&w=1060",
        
        text: "I am extremely satisfied with the UI UX Course offered by Felix It System. It is the best institute for UI UX training I have come across. The course content is comprehensive, and the instructors are knowledgeable and supportive. I highly recommend Felix It System for anyone looking to enhance their UI UX skills."
    },

    {
        name: "Vikram Mali",

        photoUrl: "https://img.freepik.com/free-photo/young-bearded-hindu-student-with-backpack-pastel-wall_496169-1524.jpg?t=st=1738779876~exp=1738783476~hmac=d74bad2f911964a7a4ab46ead731e680e502b943a66f502c7e2843c65db85c61&w=1060",
        
        text: "Felix IT System offers the best UI UX Course in town. Their expert instructors and hands-on approach made learning a breeze. I highly recommend this institute for anyone looking to enhance their design skills."
    },
]

let idx = 0;


const imgE1 = document.querySelector(".img1");
const textE1 = document.querySelector(".text");
const nameE1 = document.querySelector(".username");

updateTestimonials()

function updateTestimonials(){
    const {name, photoUrl, text} = testimonials[idx];
    imgE1.src=photoUrl;
    textE1.innerText=text;
    nameE1.innerText= name;

    idx++

    if(idx === testimonials.length){
        idx =0;
    }

    setTimeout(()=>{
        updateTestimonials()
    },3000)

}