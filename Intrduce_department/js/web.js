$(document).ready(function(){
	$('#recorder').click(function(){
		$.fancybox([
					'video/技術學院張櫻馨 榮獲傑出志工獎(來源_大愛電視台).swf',
					'video/慈技資工系教師e化教學訪人文(來源_大愛電視台).swf',
					'video/慈技資工系學生 為全校電腦健診(來源_大愛電視台).swf',
					'video/慈技資工系獻愛 電腦教學築希望(來源_大愛電視台).swf'

				/*{
					'href'	: 

				}*/
				
			],{
				'padding'		:0,
				'transitionIn'	:'none',
				'transitionOut'	:'none',
				'type'			:'swf',
				'width'			:'640',
				'height'		:'480'
						
			});
	});
	$('.doc_iei').click(function(){
		$.fancybox([
				'doc/Implementation_guidelines.html',
				'doc/program_growth.html',
			],{
				'padding'		:0,
				'transitionIn'	:'none',
				'transitionOut'	:'none',
				'type'			:'iframe',
				'width'			:'95',
				'height'		:'1024'
			})
	})
	$('#plan').click(function(){
		$.fancybox([
				'images/new/1.jpg',
				'images/new/2.jpg',
				'images/new/3.jpg',
				'images/new/4.jpg',
				'images/new/5.jpg',
				'images/new/6.jpg',
				'images/new/7.jpg',
				'images/new/8.jpg',
				'images/new/9.jpg',
				'images/new/10.jpg',
				'images/new/11.jpg',
				'images/new/12.jpg',
				'images/new/13.jpg',
				'images/new/14.jpg',
				'images/new/15.jpg',
				'images/new/16.jpg',
				'images/new/17.jpg',
				'images/new/18.jpg',
				'images/new/19.jpg',
				'images/new/20.jpg',
				'images/new/21.jpg',
				'images/new/22.jpg'
				
			],{
				'padding'		:0,
				'transitionIn'	:'none',
				'transitionOut'	:'none',
				'type'			:'image',
				'width'			:'',
				'height'		:''
			})
	})
});