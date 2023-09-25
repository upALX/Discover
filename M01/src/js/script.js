function toogleModel(){
    const html = document.documentElement
    html.classList.toggle('light-mode')

    const imgHtml = document.querySelector(".profile img")

    if (html.classList.contains('light-mode')){
        imgHtml.setAttribute('src', 'https://th.bing.com/th?id=OIP.YjJSBQVO5Cy9RBxwNqfj7AHaJ5&w=216&h=289&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')
    }else{
        imgHtml.setAttribute('src', "https://avatars.githubusercontent.com/u/59508016?v=4")
    }

}