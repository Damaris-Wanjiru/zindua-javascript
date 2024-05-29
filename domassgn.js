{
    const heading = document.getElementById("myH3")
    heading.style.color = "blue"

    const button = document.getElementById("myButton")
    button.style.backgroundColor = "red"

    function changeText(){
        heading.innerText = `Hello Dom`
        heading.style = "italic"
        heading.style.fontSize = "4rem"
        heading.style.color = "orange"

    }
    button.addEventListener("click", changeText)
}
