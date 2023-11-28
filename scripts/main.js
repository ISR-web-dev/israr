let testimonialCount = 0;

const dataTestimonial = [
    {
        name: 'DA EDITS',
        testimonials: '"He is really cooperative and he excel in getting the job done perfectly on time."' 
    },
    {
        name: 'JOSHI ADS',
        testimonials: '"It’s fine. No issues."' 
    }
]

function changeNameTo(name) {
    document.querySelector('.testi-name').innerHTML = name;
} 
function changeTestimonialTo(testimonial) {
    document.querySelector('.testimonial').innerHTML = testimonial;
}

document.querySelector('.right').addEventListener('click', () => {
    if (testimonialCount < 1) {
        testimonialCount++;
    } else {
        testimonialCount = 0;
    }
    changeNameTo(dataTestimonial[testimonialCount].name);
    changeTestimonialTo(dataTestimonial[testimonialCount].testimonials);
});
document.querySelector('.left').addEventListener('click', () => {
    if (testimonialCount > 0) {
        testimonialCount--;
    } else {
        testimonialCount = 1;
    }
    changeNameTo(dataTestimonial[testimonialCount].name);
    changeTestimonialTo(dataTestimonial[testimonialCount].testimonials);
});

