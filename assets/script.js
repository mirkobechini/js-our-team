const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



//get DOM element

const teamContainerEL = document.getElementById("team")

//functions
function renderTeam(name, role, img, email) {
  teamContainerEL.insertAdjacentHTML('beforeend', `
    <div class="col py-2">
      <div class="card mb-3 my-2" style="max-width: 385px;">
        <div class="row g-0">
          <div class="col-md-4">
              <img src=".\/assets\/${img}" class="img-fluid" alt="${name} profile image">
          </div>
          <div class="col-md-8 ">
            <div class="card-body ">
              <h5 class="card-title fw-bold">${name.toUpperCase()}</h5>
              <p class="card-text ">${role}</p>
              <p class="card-text text-info">${email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.col -->
    `)
}


//read array

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  const { name, role, email, img } = member
  renderTeam(name, role, img, email)

}