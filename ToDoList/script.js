// HTML parçalarına referans olarak kullanılacak kelimelerin atılması
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//yeni bir görev için fonksiyon
function addTask(){
    //input kısmının boş olup olmadığını kontrol etme
    if(inputBox.value === ''){
        alert("Bir şey yazmalısın!");
        //boş kaldığında yazılan cümle
    }
    else{
        //yeni görev oluşturma
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        //görevi listeye ekleme
        listContainer.appendChild(li);
        //silmek için kod
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //görev eklendikten sonra giriş kısmını temizleme
    inputBox.value = "" ;
    //listeyi bilgisayara kaydetme
    saveData();
}

//görevi tamamlama ve silme kodu
listContainer.addEventListener("click",function(e){
    //Seçilen görevi tamamlama butonu
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //seçilen görevi silme butonu
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//sayfa açılınca görevleri göster
showTask();