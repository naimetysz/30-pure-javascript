var text = document.querySelector('.text')
  var words = document.querySelector('.words')
  var characters = document.querySelector('.characters')
  text.addEventListener('input',()=>{
      characters.textContent = text.ariaValueMax.length
      var txt =text.ariaValueMax.trim()
      words.textContent =txt.split(/\s+/).filter((item)=> item).length
  })