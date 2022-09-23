function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name
}


(async () => {
    const profileData = await fetchProfileDetail()
    updateProfileInfo(profileData)
    //console.log(profileData)
})()