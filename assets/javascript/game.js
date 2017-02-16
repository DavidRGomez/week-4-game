var comNumber = Math.floor(Math.random()*112+1);
var blueGem = Math.floor(Math.random()*12+1);
var tealGem = Math.floor(Math.random()*12+1);
var purpleGem = Math.floor(Math.random()*12+1);
var greenGem = Math.floor(Math.random()*12+1);
var totalAccum = 0;
var wins = 0;
var losses = 0;

if (blueGem === tealGem || blueGem == purpleGem || blueGem=== greenGem){
	blueGem = Math.floor(Math.random()*12+1);
 }
 if (tealGem === purpleGem || tealGem === greenGem || tealGem === blueGem){
 	tealGem = Math.floor(Math.random()*12+1);
 }
if ( purpleGem === greenGem || purpleGem === tealGem || purpleGem === blueGem){
	purpleGem = Math.floor(Math.random()*12+1);
}



$( document ).ready( function(){

$("#yourTotal").html(comNumber);
console.log(purpleGem, tealGem, blueGem, greenGem, comNumber);

$('#blue').on("click", function(){
	totalAccum = blueGem + totalAccum;
	console.log(totalAccum);
	$('#totalAccumScore').html(totalAccum);
	if (totalAccum > comNumber){
		losses +=1;
		$('#lossCount').html(losses);
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);
	 }
	 if ( totalAccum === comNumber){
		wins += 1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#winsCount').html(wins);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);


}
});
$('#green').on("click", function(){
	totalAccum = greenGem + totalAccum;
	$('#totalAccumScore').html(totalAccum);
	console.log(totalAccum);
	if (totalAccum > comNumber){
		losses +=1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#lossCount').html(losses);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);
	 }
	 if ( totalAccum === comNumber){
		wins += 1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#winsCount').html(wins);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);


}
});
$('#teal').on("click", function(){
	totalAccum = tealGem + totalAccum;
	$('#totalAccumScore').html(totalAccum);
	console.log(totalAccum);
	if (totalAccum > comNumber){
		losses +=1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#lossCount').html(losses);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);
	 }
	 if ( totalAccum === comNumber){
		wins += 1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#winsCount').html(wins);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);


}
});
$('#purple').on("click", function(){
	totalAccum = purpleGem + totalAccum;
	$('#totalAccumScore').html(totalAccum);
	console.log(totalAccum);
	if (totalAccum > comNumber){
		losses +=1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#lossCount').html(losses);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);
	 }
	 if ( totalAccum === comNumber){
		wins += 1;
		comNumber = Math.floor(Math.random()*112+1);
		blueGem = Math.floor(Math.random()*12+1);
 		tealGem = Math.floor(Math.random()*12+1);
	 	purpleGem = Math.floor(Math.random()*12+1);
	 	greenGem = Math.floor(Math.random()*12+1);
	 	totalAccum = 0;
	 	$('#winsCount').html(wins);
	 	$('#yourTotal').html(comNumber);
	 	$('totalAccumScore').html(totalAccum);


}
});

});	 