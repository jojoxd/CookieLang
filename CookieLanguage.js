// bookmark to load:
// javascript:with(document)(head.appendChild(createElement('script')).src ='http://rawgit.com/jojoxd/CookieLang/master/CookieLanguage.js')

var CookieLang = {
	init: function(){
		CookieLang.core.loadTranslation("en");
		CookieLang.core.setNumberFormatters();
	},
	
	postInit: function(){
		// add cookielang to init
		Game.customInit.push(CookieLang.init());
	},
	
	core: {
		loadTranslation: function(lang){
			// copied from Game.loadMod
			var url = "https://rawgit.com/jojoxd/CookieLang/master/lang/translation_" + lang + ".js";
			var js=document.createElement('script');
			var id=url.split('/');id=id[id.length-1].split('.')[0];
			js.setAttribute('type','text/javascript');
			js.setAttribute('id','modscript_' + id);
			js.setAttribute('src', url);
			document.head.appendChild(js);
			console.log('Loaded Language file ' + url + ', ' + id + '.');
		},
		
		setTranslation: function(){
			console.log("todo: settranslation: add all transformation code here");
		},
		
		setNumberFormatters: function(){
			numberformatters = 
			[
				rawFormatter,
				formatEveryThirdPower([
					// would've used long, but it's a definition
					'',
					translation.million.big,
					translation.billion.big,
					translation.trillion.big,
					translation.quadrillion.big,
					translation.quintillion.big,
					translation.sextillion.big,
					translation.septillion.big,
					translation.octillion.big,
					translation.nontillion.big,
					translation.decillion.big,
				]),
				
				formatEveryThirdPower([
					'',
					translation.million.small,
					translation.billion.small,
					translation.trillion.small,
					translation.quadrillion.small,
					translation.quintillion.small,
					translation.sextillion.small,
					translation.septillion.small,
					translation.octillion.small,
					translation.nontillion.small,
					translation.decillion.small,
				]),
			];
		},
	},
	
	_core: {
		
	},
	
	vars: {
		
	},
	
	_vars: {
		
	},
};

// run postinit:
CookieLang.postInit();