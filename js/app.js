


//the first task


//Global Variables :
//Here we got the element of the ul and put it into a seperate const variable.
const NavBarList = document.getElementById("navbar__list");
//Here we used the array.from() to get the identical shallow items into const variable.
const sections = document.querySelectorAll("section");
//This function to create numbers of sections dynamically from html
function createNavMenu () {
    //we used for of loop related to the array characteristics insteaf of for loop
    for (sect of sections) {
        
        //we create li element and put it into a variable
    CreateLI = document.createElement("li");
    //we make an edit insite the inner html using js 
    CreateLI.innerHTML = `<li> <a href="#${sect.id}" data-nav="${sect.id}" class="menu__link" >${sect.dataset.nav}</a>`;
    //we must make appendChild to insert the create elemen
    NavBarList.appendChild(CreateLI);
                            }
}
//call the function lets go
createNavMenu ();






// the second task 


/*here we put the function  of for each element of the sections to check if withing specific dimensions got using specific 
 function getBoundingClientRect.top as the scrolling only in the topside so this is the needed */
const funTwo   = function () {sections.forEach(function (sect) {
    // here we put each section with the inner func getboundingrec.top to know where is the top scroll of each section
    const sectionTop = sect.getBoundingClientRect().top;
    //here we put the anchor of each element of the navbar menu in variable 
    const link = document.querySelector(`a[href="#${sect.id}"]`);
    //here is the condition withing the diminsiones or not
        if (sectionTop >= 0 && sectionTop <= 300)
        //if true add the classes one for sleecting in the navbar the other for covering on the whole section content 
        {
            sect.classList.add("your-active-class");
             link.classList.add("active");  
            }
        else
        //if not remove the classes
            {
                sect.classList.remove("your-active-class"); 
                 link.classList.remove("active");   
            }
        });
    };
        //apply the function only  while onscrolling in the window
    window.addEventListener("scroll",funTwo); 







//the third task


//add evenet listiner to get event when click anyitem in the navbar then apply this function
NavBarList.addEventListener("click", (toSect) => {
//inside the function  we used this prevent default as asked in the project to prevent any default of the parameter
toSect.preventDefault();
// here is the condiiton if the parameter of dataset of the navigation par is targted then  get the elementbyId then scroll into it with smooth  and centerted the i
if (toSect.target.dataset.nav ) {
    document
    .getElementById(`${toSect.target.dataset.nav}`)
    .scrollIntoView({ behavior: "smooth", block: "center" });   
    }
});


