            var link = document.querySelector(".hotel-search-button");
            var form = document.querySelector(".hotel-search-form");
            var arrivalElement = form.querySelector("#arrival");
            var departureElement = form.querySelector("#departure");
            var adultsElement = form.querySelector("#adults");
            var childrenElement = form.querySelector("#children");
            


            
            var currentDate = new Date();
            var currentUnixTime = currentDate.getTime();
            
            var arrivalUnixTime = currentUnixTime + 1000 * 3600 * 24;
            var departureUnixTime = currentUnixTime + 1000 * 3600 * 24 * 8;
            
            var arrivalDate = new Date(arrivalUnixTime);
            var departureDate = new Date(departureUnixTime);
            
            var arrivalValue;
            var departureValue;
            
            function getDateValue(inputDate) {
                var day = inputDate.getDate();
                var month = inputDate.getMonth();
                var year = inputDate.getFullYear();
                var outputMonth;
                
                    if (month == 0) {
                          outputMonth = "января"; 
                    } else if (month == 1) {
                          outputMonth = "февраля";
                    } else if (month == 2) {
                          outputMonth = "марта";
                    } else if (month == 3) {
                          outputMonth = "апреля";
                    } else if (month == 4) {
                          outputMonth = "мая";
                    } else if (month == 5) {
                          outputMonth = "июня";
                    } else if (month == 6) {
                          outputMonth = "июля";
                    } else if (month == 7) {
                          outputMonth = "августа";
                    } else if (month == 8) {
                          outputMonth = "сетября";
                    } else if (month == 9) {
                          outputMonth = "октября";
                    } else if (month == 10) {
                          outputMonth = "ноября";
                    } else if (month == 11) {
                          outputMonth = "декабря";
                    } 
                
                return(day + " " + outputMonth + " " + year);    
            }
            
            arrivalValue = getDateValue(arrivalDate);
            departureValue = getDateValue(departureDate);
            
            console.log("приезд: " + arrivalValue);
            console.log("отъезд: " + departureValue);
            
            arrivalElement.value = arrivalValue;
            departureElement.value = departureValue;          
            
            
            
            
            
            form.classList.add("form-closed"); // по умолчанию форма спрятана наверх
            
            var isStorageSupport = true;
            var adults;
            var children;
            
            try {
                adults = localStorage.getItem("adults");
              } catch (err) {
                isStorageSupport = false;
              }
            
            try {
                children = localStorage.getItem("children");
              } catch (err) {
                isStorageSupport = false;
              }

            link.addEventListener("click", function (evt) {
	           
                evt.preventDefault();
                
                if (form.classList.contains("form-closed")) {
                    form.classList.remove("form-animation-close");
                    form.classList.add("form-animation-open");
                    form.classList.remove("form-closed");
                    arrivalElement.focus();
                    arrivalElement.select();
                    
                    if (adults) {
                        adultsElement.value = adults;
                    } 
                    if (children) {
                        childrenElement.value = children;
                    }
                    
                } else {
                    form.classList.remove("form-animation-open");
                    form.classList.add("form-animation-close");
                    form.classList.add("form-closed");
                }
            });
            


            
            form.addEventListener("submit", function (evt) {
            if (arrivalElement.value && departureElement.value && adultsElement.value && childrenElement.value) {
                localStorage.setItem("adults", adultsElement.value);
                localStorage.setItem("children", childrenElement.value);
            } else {
                evt.preventDefault();
                form.classList.remove("form-animation-error");
                form.offsetWidth = form.offsetWidth;
                form.classList.add("form-animation-error");
            }
  });