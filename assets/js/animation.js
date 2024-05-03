const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Remove the dot before 'show'
        } else {
            entry.target.classList.remove('show'); // Remove the dot before 'show'
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); // Use querySelectorAll
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsL = document.querySelectorAll('.hiddenL'); // Use querySelectorAll
hiddenElementsL.forEach((el) => observer.observe(el));

const hiddenElementsR = document.querySelectorAll('.hiddenR'); // Use querySelectorAll
hiddenElementsR.forEach((el) => observer.observe(el));