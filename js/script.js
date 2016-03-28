//Creates fancybox gallery
$(document).ready($('.fancybox').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',

	prevEffect : 'none',
	nextEffect : 'none',

	closeBtn  : true,

	helpers : {
		title : {
			type : 'inside'
		},
	},

	afterLoad : function() {
		this.title = 'Screenshot ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
	}
}));

//Adds 'num' pictures for project 'project'. Assumes all screenshots are inside a folder with the project name and are numbered sequentially.
function appendGalleryPictures(project, num){
	for(var i=1; i<=num; i++){
		$("#gallery").append("<a class='fancybox' rel='screenshots' href='../images/"+project+"/"+project+i+".jpg'><img class='screenshot' src='../images/"+project+"/"+project+i+".jpg' alt='Screenshot of game' /></a>");
	}	
}
