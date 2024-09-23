function Createcard(name, designation, dob, email, ph, add, pic) {
    let html = `
    <div class="slide ">
    <div class="container">
            <div class="card">
                <div class="tri2"></div>
                <div class="up">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="heading">IDENTITY CARD</div>
                </div>
                <div class="main">
                    <div class="photo">
                        <div class="picture">
                            <img src="${pic}" alt="photo">
                        </div>
                        <span id="name">${name}</span>
                        <span id="designation">${designation}</span>
                        </div>
                        <div class="line"></div>
                        <div class="details">
                            <div class="label">
                                <span>D.O.B &emsp;&ensp;:</span>
                                <span>Email &emsp;&ensp;&nbsp;:</span>
                                <span>Phone &emsp;&ensp;&nbsp;:</span>
                                <span>Address &emsp;: <br> <br> </span>
                            </div>
                            <div class="txt">
                                <span>${dob}</span>
                                <span>${email}</span>
                                <span>${ph}</span>
                                <span>${add}</span>
                            </div>
                        </div>
                    </div>
                    <div class="down">
                        <div class="bar3"></div>
                        <div class="bar4"></div>
                    </div>
                </div>

              <div class="triangle"></div>
            </div>
        </div>`
    document.querySelector(".slides").innerHTML = document.querySelector(".slides").innerHTML + html
}
// Createcard('abc paul','xyz','12/12/12','emsahbj@com',1234567890,'Lorem ipsum, dolor sit amet consectetur ','iprofessor.png')
function generate() {
    let title = document.getElementById("title").value
    let cname = document.getElementById("cname").value
    let dob = document.getElementById("dob").value
    const [year, month, day] = dob.split('-');
    dob = `${day}-${month}-${year}`;
    let email = document.getElementById("email").value
    let phone = document.getElementById("number").value
    let address = document.getElementById("address").value
    let fileInput = document.getElementById("picture");
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let profile = e.target.result;
        Createcard(title, cname, dob, email, phone, address, profile);
    }
    reader.readAsDataURL(file);

}

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let current = 0;

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => {
        current = (current > 0) ? current - 1 : slidesContainer.children.length - 1;
        showSlide(current);
    });

    next.addEventListener('click', () => {
        current = (current < slidesContainer.children.length - 1) ? current + 1 : 0;
        showSlide(current);
    });
    btn.addEventListener('click', () => {
        current = (current < slidesContainer.children.length) ? current + 1 : 0;
        showSlide(current);
    });

    // Function to add a new slide
    function addSlide(content) {
        const newSlide = document.createElement('div');
        newSlide.classList.add('slide');
        newSlide.textContent = content;
        slidesContainer.appendChild(newSlide);
    }
});