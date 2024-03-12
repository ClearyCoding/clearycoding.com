const experienceData =  {
    stem: [
        {
            title: "Freelance Tutoring",
            role: "Tutor",
            start: 2023,
            end: 2023,
            pinned: true,
            description: "One-on-one tutoring students in various computer and programming skills.",
            image: "tutoring.jpg",
            button: "",
            id: 0,
        },
        {
            title: "Monash School of Physics and Astronomy",
            role: "Work Experience",
            start: 2023,
            pinned: true,
            end: 2023,
            description: "Working on a research project, conversing with PhD and post-doctorate researchers, attending astrophysics meetings, touring the Australian Synchrotron, and learning about science communication.",
            image: "physics_and_astronomy.png",
            button: "",
            id: 1,
        },
        {
            title: "CodeClub.au",
            role: "Facilitator",
            start: 2022,
            end: 2023,
            description: "Teaching a small class of students aged ten to fourteen how to code using Scratch over a week-long course, including one-on-one teaching and presenting content to a group, planning, building, marketing and facilitating a business.",
            image: "code_club.jpg",
            button: "",
            id: 2,
            pinned: true,
        },
    ],
    nonStem: [
        {
            title: "Westmont Aged Care",
            role: "Food Service",
            start: 2022,
            end: 2023,
            description: "Working in a Kitchen-Hand role which involved preparing and serving meals, washing dishes, delivering meals to rooms and interacting with the residents..",
            image: "westmont.jpg",
            button: "",
            id: 0,
        },
        {
            title: "Albury Gang Show",
            role: "Cast/Crew Member",
            start: 2022,
            end: null,
            description: "Cast member in production produced by Scouts, involving participating in rehearsals and live performances at the Albury Entertainment Centre, and collaborating on script writing at creative meetings.",
            image: "gang_show.jpg",
            button: "",
            id: 1,
        },
        {
            title: "Scouts Australia",
            role: "Member",
            start: 2015,
            end: 2023,
            description: "Member of the scouts, participating in extreme activities, gaining skills in teamwork, adaptability and leadership. Assisted in many community projects and fundraising activities, including selling chocolates, sausage sizzles and raffles.",
            image: "scouts.jpg",
            button: "",
            id: 2,
        },
        {
            title: "Australian Air Force Cadets",
            role: "Cadet",
            start: 2020,
            end: 2021,
            description: "Cadet in the Australian Air Force Cadets program, gaining leadership, navigation, survival, decision-making, bush-craft and obedience skills.",
            image: "air_force_cadets.png",
            button: "",
            id: 3,
        },
    ],
    portfolio: [
        {
            title: "alburygangshow.com.au",
            role: "Frontend Web Development",
            start: 2023,
            end: 2024,
            description: "Building a new website for the Albury Gang Show, a volunteer-led theatre company, acquiring skills such as front-end JavaScript, parallax and loading screens.",
            image: "albury_gang_show.png",
            button: "https://alburygangshow.com.au",
            buttonText: "Visit",
            id: 0,
            pinned: true,
        },
        {
            title: "clearycoding.com.au",
            role: "Web Development",
            start: 2023,
            end: 2024,
            description: "Building a personal website for showcasing my experience and storing personal projects, gaining skills such as front-end web development in HTML/CSS, alongside learning systems including git.",
            image: "cleary_coding.png",
            button: "https://clearycoding.com",
            buttonText: "Visit",
            pinned: true,
        },
    ]
}
const journalData = [
    {
        title: "Journal Page Test",
        image: "",
        pinned: true,
        description: "Hi",
        date: "NaN",
        tags: [""],
        button: "#test",
    },
]

// Loading Screen
document.onreadystatechange = () => {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

// Main Page Carousels
document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < 3; i++) {
        const section = ["journal", "experience", "portfolio"][i]
        const data = [journalData, experienceData.stem, experienceData.portfolio][i]
        console.log(section)
        const prev = document.querySelector(`#${section}-prev`)
        const next = document.querySelector(`#${section}-next`)
        const carousel = document.querySelector(`#${section}-carousel`)
        const itemWidth = 300
        const padding = 10

        console.log(prev)

        prev.addEventListener('click', () => {
            carousel.scrollLeft -= (itemWidth + padding)
        })
        next.addEventListener('click', () => {
            carousel.scrollLeft += (itemWidth + padding)
        })

        for (j = 0; j < data.length; j++) {
            if (data[j].pinned === true) {
                carousel.innerHTML += `
                <article id="${section}-${data[j].id}" class="carousel-item">
                    <img src="${data[j].image ?`/assets/images/${["portfolio", "experience", "portfolio"][i]}-thumbnails/${data[j].image}` : '/assets/images/thumbnail.png'}" alt="Thumbnail" class="carousel-item-thumbnail">
                    <section class="carousel-item-text">
                        <time class="carousel-item-text-date">${data[j].date ? `${data[j].date}` : `${data[j].end ? `${data[j].start === data[j].end ? `${data[j].start}` : `${data[j].start} - ${data[j].end}`}`: `${data[j].start} - Current`}`}</time>
                        <h1 class="carousel-item-text-title">${data[j].title}</h1>
                        <p class="carousel-item-text-description">
                            ${data[j].description}
                        </p>
                        ${data[j].button ? `<a href=${data[j].button}><div class="button"> <div class="button-text">${data[j].buttonText ? `${data[j].buttonText}` : 'More'} &#8594</div> </div></a>` : ''}
                    </section>
                </article>
                `
            }
        }
    }
})