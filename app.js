            var activeChild;
            function tip(direction,child){
                var chilu = document.getElementById("program").children[child];
                if(direction == "next"){
                    if(chilu.nextElementSibling){
                        chilu.style.left = "-400px";
                        chilu.className = "";
                        chilu.nextElementSibling.style.left = "30px";
                        chilu.nextElementSibling.className = "active";
                    }
                }
                else if(direction == "prev"){
                    if(chilu.previousElementSibling){
                        chilu.style.left = "-400px";
                        chilu.className = "";
                        chilu.previousElementSibling.style.left = "30px";
                        chilu.previousElementSibling.className = "active";
                    }
                }
            };
            var start = function(){
                var allItems = document.getElementsByClassName("slider")[0].children[0].children;
                [].forEach.call(allItems,function(element,i) {
                    if(element.className.includes("active")){
                        activeChild = i;
                        element.style.left = "30px";
                    }
                    else{
                        element.style.left = "-400px";
                    }
                });
                if(activeChild == allItems.length - 2){
                    document.getElementById("nextSlide").disabled = true;
                }
                else if(activeChild <= 1){
                    document.getElementById("prevSlide").disabled = true;
                }
            };
            var next = function(){
                var allItems = document.getElementsByClassName("slider")[0].children[0].children;
                [].forEach.call(allItems,function(element,i) {
                    if(element.className.includes("active")){
                        activeChild = i;
                    }
                });
                if(activeChild == allItems.length - 2){
                    document.getElementById("nextSlide").disabled = true;
                }
                else{
                    document.getElementById("prevSlide").disabled = false;
                }
                tip("next",activeChild);
            };
            var prev = function(){
                var allItems = document.getElementsByClassName("slider")[0].children[0].children;
                [].forEach.call(allItems,function(element,i) {
                    if(element.className.includes("active")){
                        activeChild = i;
                    }
                });
                if(activeChild <= 1){
                    document.getElementById("prevSlide").disabled = true;
                }
                else{
                    document.getElementById("nextSlide").disabled = false;
                }
                tip("prev",activeChild);
            };

            start();
