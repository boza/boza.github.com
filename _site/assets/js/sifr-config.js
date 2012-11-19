
var chunkfive = {  
  src: '/assets/flash/chunkfive.swf'  
};  
  
sIFR.activate(chunkfive);  
  

sIFR.replace(chunkfive, {
    selector: '.sifr-title' ,
	offsetTop: '5',
	
	css: [
	      '.sIFR-root {  color: #404a47; leading: 2; letter-spacing: -2; }'  ,
	      'em { font-style: normal; color: #ef3e63; }'
	],

	wmode: 'transparent'
  
});

sIFR.replace(chunkfive, {
    selector: '.sifr-subtitle' ,
	offsetTop: '5',	
	css: [
	      '.sIFR-root {  color: #404a47; leading: 2; }'  ,
	      'em { font-style: normal; color: #ef3e63; }'
	],

	wmode: 'transparent'
  
});