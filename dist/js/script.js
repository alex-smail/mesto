// Редактирования профиля
const popUp = document.querySelector('.pop-up');
const buttonEdit = document.querySelector('#button_edit');
const buttonClose = document.querySelector('#button_close');

buttonEdit.addEventListener('click', () => {
    popUp.classList.add('hiden');
});

buttonClose.addEventListener('click', () => {
    popUp.classList.remove('hiden');
});

const userInfo = {
    name: 'Алексей Зеленко',
    job: 'Разработчик',
};

const inputName = document.querySelector('#name-input');
const inputJob = document.querySelector('#job-input');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');

const updateUserInfo = () => {
    userName.textContent = userInfo.name;
    userJob.textContent = userInfo.job;
    popUp.classList.toggle('hiden');
};

inputName.value = userInfo.name;
userName.textContent = userInfo.name;
inputJob.value = userInfo.job;
userJob.textContent = userInfo.job;

const buttonSave = document.querySelector('#button-save');
buttonSave.addEventListener('click', () => {
    const inputNameValue = inputName.value;
    const inputJobValue = inputJob.value;

    userInfo.name = inputNameValue;
    userInfo.job = inputJobValue;

    updateUserInfo();
    const maxLength = 15;

    if(userName.textContent.length > maxLength) {
        const userNameSlice = userName.textContent.slice(0, maxLength - 2);
        const truncatedText = `${userNameSlice}...`;
        userInfo.name = truncatedText;
        userName.textContent = userInfo.name;
    }
});

// Лайк под постом
document.querySelectorAll('.publications__like').forEach(post => {
    post.addEventListener('click', () => {
        post.classList.toggle('active');
    });
})