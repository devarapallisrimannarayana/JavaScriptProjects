const btns = document.querySelectorAll('.question_btn');
const questions = document.querySelectorAll('.question');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show_answer');

        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove('show_answer');
            }
        });
    });
});