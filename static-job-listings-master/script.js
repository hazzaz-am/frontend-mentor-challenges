const jobListings = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

// single tag create
function getTagHTML(tag, classType = "tag") {
  return `<span class=${classType}>${tag}</span>`;
}

// toggle active tag class
function toggleActiveClass(elem, className) {
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  } else {
    elem.classList.add(className);
  }
}

// single job markup
function getJobListingHTML(jobData) {
  const tagsPlaceHolder = "Tags Placeholder";
  let jobListingHTML = `
    <div class="jobs__item">
          <div class="jobs__column jobs__column-left">
            <img
              src=${jobData.logo}
              alt=${jobData.company}
              class="jobs__img"
            />
            <div class="jobs__info">
              <span class="jobs__company">${jobData.company}</span>
              <span class="jobs__title">${jobData.position}</span>

              <ul class="jobs__details">
                <li class="jobs__details--item">${jobData.postedAt}</li>
                <li class="jobs__details--item">${jobData.contract}</li>
                <li class="jobs__details--item">${jobData.location}</li>
              </ul>
            </div>
          </div>
          <div id="tagsForSearch" class="jobs__column jobs__column-right">
            ${tagsPlaceHolder}
          </div>
    </div>
    `;

  //  creating tags for each job
  const tagsArray = [
    jobData.role,
    jobData.level,
    ...(jobData.languages || []),
    ...(jobData.tools || []),
  ];

  const tagsForJob = tagsArray.reduce((tagsString, currTag) => {
    return tagsString + getTagHTML(currTag);
  }, "");
  return jobListingHTML.replace("Tags Placeholder", tagsForJob);
}

// gather all jobs
const allJobs = jobListings.reduce((acc, currentJob) => {
  return acc + getJobListingHTML(currentJob);
}, "");

// insert all jobs
document.getElementById("jobs").innerHTML = allJobs;

// add tags to searchbar
document.getElementById("jobs").addEventListener("click", (event) => {
  const searchContent = document.getElementById("search__content");
  const targetElement = event.target;
  const targetElementValue = targetElement.innerHTML;

  if (targetElement.classList.contains("tag")) {
    let searchBarTags = Array.from(searchContent.children)
      .map((elem) => elem.innerHTML)
      .filter((el) => !!el);

    if (searchBarTags.includes(targetElementValue)) {
      searchBarTags = searchBarTags.filter((tag) => tag !== targetElementValue);
    } else {
      searchBarTags = [...searchBarTags, targetElementValue];
    }

    toggleActiveClass(targetElement, "tag--active");

    searchContent.innerHTML = searchBarTags.reduce((acc, currTag) => {
      return acc + getTagHTML(currTag, "close--tag");
    }, "");
  }
});
