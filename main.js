document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const apiUrl = 'https://randomuser.me/api/';
    const userGender = document.querySelector('.profile__userGender');
    const userPicture = document.querySelector('.profile__userPhoto');
    const userPhoneNumber = document.querySelector('.profile__userPhoneNumber');
    const userName = document.querySelector('.profile__userName');

    window.addEventListener('load', () => {
        loader.classList.add('_loaderHidden')
    })

    fetch(apiUrl)
      .then(response => response.json())
      .then((json) => {
        console.log(json.results[0])
    
        const userGenderValue = json.results[0].gender
        const userPictureValue = json.results[0].picture.large
        const userPhoneNumberValue = json.results[0].phone
        const userNameValue = json.results[0].name
        const userFullNameValue = Object.values(userNameValue).join(' ')

        userGender.innerHTML = `<div>Пол: ${userGenderValue}</div>`
        userPicture.innerHTML = `<img src="${userPictureValue}">`
        userPhoneNumber.innerHTML = `<div>Номер телефона: ${userPhoneNumberValue}</div>`
        userName.innerHTML = `<div>${userFullNameValue}</div>`
      })
})