// dom url manipulation in js
//еxplanation  - если у  текущего  url на конце нет "/"
// то добавь его в window
// *Проблема была в том что на localhost url работали без сбоая, 
// но на production cсылки рабоатли не корректно без слэша в конце, 
// * Таким образом нужно добавить слэш на конце в текущем url если он отсутствует
 
if(typeof window == 'object') {
   var currentUrl =  window.location.href
   var lstCharOfUrl = currentUrl.substring(currentUrl.length-1, currentUrl.length)
   if (lstCharOfUrl != "/") {
        window.location.href   = currentUrl + "/"
   }
}