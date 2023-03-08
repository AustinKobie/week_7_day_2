const jobs = [
    {
        id: 1,
        jobTitle: 'Software Developer',
        description: 'This is a description'  
    },
    {
        id: 2,
        jobTitle: 'Software Developer',
        description: 'This is a description'  
    },
    {
        id: 3,
        jobTitle: 'Software Developer',
        description: 'This is a description'  
    },
    { 
        id: 4,
        jobTitle: 'Software Developer',
        description: 'This is a description'  
    }
];

const jobContainer = document.getElementById('jobs');

for (const job of jobs) {
    jobContainer.innerHTML += `
        <div class="card" id="${job.id}">
            <h2>${job.jobTitle}</h2>
            <p>Description: ${job.description}</p>
        </div>
    `;
}

for (const job of jobs) {
    const jobEl = document.getElementById(job.id);
    console.log(jobEl);
    jobEl.addEventListener('click', () => {
        if (jobEl.classList.contains('background-transparent')) {
            jobEl.classList.remove('background-transparent');
            jobEl.classList.add('background-gray');
        } else {
            jobEl.classList.add('background-transparent');
            jobEl.classList.remove('background-gray');
        }
    });
}
