
var colors = [
	'#FFFF00',
	'#FF0000',
	'#191970',
	'#228B22',
	'#8A2BE2',
	'#66cDAA',
	'#FFA500',
	'#FFC0CB',
	'#778899',
	'#9ACD32',
	'#0000FF',
	'#BC8F8F'
]

function getColors(i){
	var m = (i+1)%colors.length;
	return colors[m]
}