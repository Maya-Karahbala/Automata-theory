import Component from '@ember/component';
    const ptrn = ["\\w", "[a-z]", "[0-9]{4}", "d[iuü][km]", "x[a-z]", "[A-Z][a-z]*", "[1-9]*,[1-9]*", "[abc]",
                "[1|2]", "number", '"\\w+"', "\\w+\\s", "\\w+@\\w+.com"
            ];
            const word = ["find words match this pattern @", "Bir iki üç dört beş altı ", "Bugün 23/6/2018 saat 14",
                "Geldim gördüm buldum...", "Excellent expression tax ", "Find words starts with Capital Letter ", "2,4  Find Double numbers  33  22,33 ", "letters a , b, c, ab, abc, cba rbc", "numbers one, two  1, 22, 21, 2", "number or numbers or num or n",
                '"maya", "test  ,"" ', "match all words without the last one", "mails :  ahmet@gmail.com normal text a@hotmail.com  "
            ];
          let rand;
            let selecteddRand = []
            let selecteddWords = []
			let found2 = document.getElementsByClassName('found2');
            let found = document.getElementsByClassName('found');
export default Component.extend({
		actions:{
		ex:function(){
			 document.getElementById("pat").value = "";
                document.getElementById("pat").style.borderColor = "#C2BBBB";
                do {
                    rand = Math.floor(Math.random() * ptrn.length);
                } while (selecteddRand.includes(rand));
                selecteddRand.push(rand)
                let exp = new RegExp(ptrn[rand], 'g');
                let str = "<span class=found>$&</span>";
                higlitedText.innerHTML = word[rand].replace(exp, str);
                testText.innerText = word[rand];
                document.getElementById("testText").style.borderLeft = "thick solid #C2BBBB";
			
              
            },
			checkRE:function(){
				let exp = new RegExp(pat.value, 'g');
                let str = "<span class=found2>$&</span>";
                testText.innerHTML = testText.innerText.replace(exp, str);
				let result=	true

                if (found.length == found2.length && found.length != 0) {
                    for (let i = 0; i < found.length; i++) {
                        console.log(found[i].innerHTML + " " + found2[i].innerHTML)
                        if (found[i].innerHTML != found2[i].innerHTML) {
                            result= false;
                        }
                    }
                    
                }
			    else{ result= false;}
                if (result) {
                    document.getElementById("testText").style.borderLeft = "thick solid #27D704";
                    document.getElementById("pat").style.borderColor = "#27D704";
                } else {
                    document.getElementById("testText").style.borderLeft = "thick solid #C2BBBB";
                    document.getElementById("pat").style.borderColor = "#C2BBBB";
                }
			}
			
		},
	
        
	   
					
					

	}
	
);
