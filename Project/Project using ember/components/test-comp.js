import Component from '@ember/component';

export default Component.extend({


pattern : "\\d,*\\d",
                
 text: `We have to extract these numbers 12, 47, 48
The integers numbers are also interesting: 18 2036 31
"," is a separator, so please extract these numbers 125,789,1450 and also these 
564,90456
We like to offer you 7890$ per month in order to complete this task... we are joking
You are going to learn 3 things, the first one is not to extract, and 2 and 3 are 
simply digits.`,
	actions:{
		check:function(){
			if (patt.value && yourText.value) {
                    const exp = new RegExp(patt.value, 'g');
                    const str = "<span class=found3>$&</span>";
                    out.innerHTML = yourText.value.replace(exp, str);
                }
		},

	},

});
