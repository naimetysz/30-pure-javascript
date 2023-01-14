var text = document.querySelector('.text')
// Bu JavaScript kodu, HTML dosyasındaki sınıfı "text" olan ilk elementi seçer. 'document.querySelector()' methodu, belirtilen sınıf veya id gibi bir CSS seçicisi kullanarak DOM (Document Object Model) üzerinde bir elementi seçer. Bu metodun geri dönüş değeri, seçilen ilk elementtir. Örnekte, ".text" sınıfına sahip ilk element seçilir ve 'text' adlı bir değişkene atanır. Bu değişken daha sonra bu element üzerinde işlem yapmak için kullanılabilir.
  var words = document.querySelector('.words')
  var characters = document.querySelector('.characters')
  text.addEventListener('input',()=>{
      characters.textContent = text.value.length
      var txt =text.value.trim()
      words.textContent =txt.split(/\s+/).filter((item)=> item).length
  })
//   Bu JavaScript kodu, 'text' adlı değişkenin içindeki elemente bir 'input' olay dinleyicisi ekler. Bu olay dinleyicisi, kullanıcının element içindeki metni değiştirdiğinde tetiklenir.

// İçinde yer alan kod bloğu, input olayı tetiklendiğinde çalıştırılır. İlk satır, "characters" adlı bir değişkenin içerisindeki metnin uzunluğunu alır ve "textContent" özelliği ile ekrana yazdırır.

// İkinci satır, "text.value.trim()" metodu ile metindeki boşlukların ön ve arkasındaki boşlukları temizler. Bu işlem sonunda, "txt" adlı bir değişkene atanır.

// Son satır, "txt" değişkenindeki metin içerisinde "split(/\s+/)" metodu ile boşluklar kullanılarak metin parçalara ayrılır. Daha sonra "filter((item)=> item)" metodu ile boşluklar hariç metin parçaları filtrelenir. Son olarak, "words" adlı bir değişkenin içerisindeki metnin kelime sayısı alınır ve "textContent" özelliği ile ekrana yazdırır.