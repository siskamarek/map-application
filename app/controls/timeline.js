var slider = document.getElementById("slider");
        var selector = document.getElementById("selector");
        var selectValue = document.getElementById("selectValue");

        selectValue.innerHTML = slider.value;

        slider.oninput=function(){
            selectValue.innerHTML = this.value;
            selector.style.left = this.value + '%' ;
        }