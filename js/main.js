let skills;
readLocalStorage();

// rendering skills from local storage
if(skills.length){
    skills.forEach(function (skill){
        $('.ul-cust').append(`<li class="list-group-item list-group-item-primary li-cust">
                            <button type="button" class="btn btn-danger close-btn float-right ">X</button>
                            <p>${skill}</p>
                        </li>`);
    });
};

// Adding skills on page
$('.add-skill').on('click', function() {
    const skill = $('.input-text').val();
    if(!skill) {
        alert("Please enter skill first");
        return;
    };
    $('.ul-cust').append(`<li class="list-group-item list-group-item-primary li-cust">
                            <button type="button" class="btn btn-danger close-btn float-right ">X</button>
                            <p>${skill}</p>
                        </li>`)
    $('.input-text').val("");
    skills.push(skill);
    localStorage.setItem("skills", JSON.stringify(skills));   
});

// remove lis from display and localStorage
$('.ul-cust').on('click', '.close-btn' ,function()  {
    readLocalStorage();
    $(this).closest('li').remove();
        skills = skills.filter(skill => skill !== $(this).siblings('p').text());
        console.log('ssd');
        localStorage.setItem("skills", JSON.stringify(skills));  
});

// Reading from Local Storage
function readLocalStorage() {
     skills = JSON.parse(localStorage.getItem("skills")) || [];
}

