const submitPost = document.getElementById("submit-post")
const postContainer = document.getElementById("post-container")

const getPostData = ()=>{
    let judulPost = document.getElementById("judul-post")
    let isiPost = document.getElementById("isi")
    if(judulPost.value != ""){
        let post = {
            title : "",
            isi : ""
        }
        post.isi = isiPost.value
        post.title = judulPost.value
        const postDiv = document.createElement("div")
        postDiv.classList.add("user-post")
        postDiv.innerHTML = `
            <img src="img/profile.jpg" alt="foto-profile" class="foto-profile">
			<p>Anonymous</p>
            <p>Angkatan XII</p>
            <img src="./img/iconfinder_Close_Icon_Circle_1398920.png" alt="foto-profile" class="close-button">
            <br>
            <h3> ${post.title} </h3>
            <p> ${post.isi}<p>
        `
        postContainer.appendChild(postDiv)
        isiPost.value = ""
        judulPost.value = ""
    }
    else{
        alert("Tolong isi Judul dan Isi Postingan")
    }
}
submitPost.addEventListener("click", (e)=>{
    e.preventDefault()
    getPostData()
})

postContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("close-button")){
        e.target.parentElement.style.display = "none"
    }
})

