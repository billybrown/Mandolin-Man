

var sound_number = 0;
var machine = "locked";
var monster = "locked";
var played_G = false;
var played_G7 = false;
var played_E7 = false;
var played_Em = false;
var played_F = false;
var played_C = false;
var played_D = false;
var played_D7 = false;
var played_Am = false;
var modal_out;
var machine_modal_out = false;
var monster_modal_out = false;
var machine_award_trigger = true;
var monster_award_trigger = true;
var song_shown = "song-1";

function check_machine(){
	if (played_G == true && played_G7 == true && played_E7 == true && played_Em == true && played_F == true && played_C == true && played_D == true && played_D7 == true && played_Am== true && machine_award_trigger == true ) {
		machine = "open";
		$('#machine').removeClass('locked');
		$('#award-machine').addClass('modal-in');
		machine_modal_out = "true";
		$('#song-button').html("Hide that Award");
	}
}

function open_monster(){
	if (monster_award_trigger){
		monster = "open";
		$('#monster').removeClass('locked');
		$('#award-monster').addClass('modal-in');
		monster_modal_out = "true";
		$('#song-button').html("Hide that Award");	
	}
}


// full strum
function strum_full(player){
	player.addClass('strum-1');
	setTimeout(function() {
		player.removeClass('strum-1');
		player.addClass('strum-2');
	}, 50);
	setTimeout(function() {
		player.removeClass('strum-2');
	}, 100);
	setTimeout(function() {
		player.addClass('strum-3');
	}, 150);
	setTimeout(function() {
		player.removeClass('strum-3');
		player.addClass('strum-4');
	}, 200);
	setTimeout(function() {
		player.removeClass('strum-4');
		player.addClass('strum-5');
	}, 250);
	setTimeout(function() {
		player.removeClass('strum-5');
		player.addClass('strum-4');
	}, 350);
	setTimeout(function() {
		player.removeClass('strum-4');
		player.addClass('strum-3');
	}, 450);
	setTimeout(function() {
		player.removeClass('strum-3');
	}, 550);
}

// play a chord
function play_it(chord){
	sound_number++
	var sound_id = "sounds_" + sound_number;
	$('#sounds').append('<audio id="' + sound_id + '"><source src="sounds/mandolin_' + chord +'.mp3" ></source><source src="sounds/mandolin_' + chord +'.ogg"></source></audio>');
	var audio_var = document.getElementById(sound_id);
	audio_var.play();
	setTimeout(function() {
		audio_var.remove();
	}, 2000);
}

// display the letter
function display_letter(chord){
	$('#chords').prepend('<li class="' + chord + '">' + chord + '</li>');
}

function wave(chord){
	$('#waves').append('<li id="wave_' + sound_number + '" class="' + chord + '"></li>');
	var wave_id = "#wave_" + sound_number;
	setTimeout(function() {
		$(wave_id).addClass('big');
	}, 100);
	setTimeout(function() {
		$(wave_id).remove();
	}, 2500);
}

function play_letter(chord, player){
	play_it(chord);
	strum_full(player);
	display_letter(chord);
	wave(chord);
}

var elvis = "0";

function action(player) {
   $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 71:
				play_letter('G', player);
				played_G = true;
				if (elvis == "5"){
					elvis = "6";
				} else if (elvis == "7"){
					elvis = "8";
				} else if (elvis == "18") {
					elvis = "19";
				} else if (elvis == "20") {
					elvis = "21";
				} else {
					elvis = "0";
				}
				break;
			case 72:
				play_letter('G7', player);
				played_G7 = true;
				if (elvis == "11") {
					elvis = "12";
				} else if (elvis == "24") {
					elvis = "25";
				} else {
					elvis = "0";
				}
				break;
			case 68:
				play_letter('D', player);
				played_D = true;
				break;
			case 83:
				play_letter('D7', player);
				played_D7 = true;
				break;
			case 70:
				play_letter('F', player);
				played_F = true;
				if (elvis == "3"){
					elvis = "4";
				} else if (elvis == "6") {
					elvis = "7";
				} else if (elvis == "9") {
					elvis = "10";
				} else if (elvis == "16") {
					elvis = "17";
				} else if (elvis == "19") {
					elvis = "20";
				} else if (elvis == "22") {
					elvis = "23";
				} else {
					elvis = "0";
				}
				break;
			case 67:
				play_letter('C', player);
				played_C = true;
				if (elvis == "4"){
					elvis = "5";
				} else if (elvis == "10") {
					elvis = "11";
				} else if (elvis == "12") {
					elvis = "13";
				} else if (elvis == "13") {
					elvis = "14";
				} else if (elvis == "17") {
					elvis = "18";
				} else if (elvis == "23") {
					elvis = "24";
				} else if (elvis == "25") {
					elvis = "26";
					open_monster();
				} else {
					elvis = "1";
				}
				break;
			case 65:
				play_letter('Am', player);
				played_Am = true;
				if (elvis == "2"){
					elvis = "3";
				} else if (elvis == "8"){
					elvis = "9";
				} else if (elvis == "15") {
					elvis = "16";
				} else if (elvis == "21") {
					elvis = "22";
				} else {
					elvis = "0";
				}
				break;
			case 69:
				play_letter('E7', player);
				played_E7 = true;
				break;
			case 82:
				play_letter('Em', player);
				played_Em = true;
				if (elvis == "1"){
					elvis = "2";
				} else if (elvis == "14") {
					elvis = "15";
				} else {
					elvis = "0";
				}
				break;
			default:
				break;
		}
		$('#help-text').hide();
		check_machine();
	});
}

function switch_character(id){
	$('#player-1').removeClass("man mandy machine monster");
	if (id == "mandy") {
		$('#player-1').addClass('mandy');
	} else if (id == "machine" && machine == "open") {
		$('#player-1').addClass('machine');
	} else if (id == "monster" && monster == "open") {
		$('#player-1').addClass('monster');
	} else {
		$('#player-1').addClass('man');		
	}
}

function change_active(id){
	$('#characters li').removeClass('active');
	$(id).addClass('active');
}

////////////////////////////////////////////////////////////////////////


// after the page loads
$(window).load(function() {

        var player = $('#player-1');


		action(player);
		$('#characters li').click(function(){
			var character_id = $(this).attr('id');
			change_active(this);
			switch_character(character_id);
		})

		$('#song-button').click(function(){
			if (machine_modal_out){
				$('#award-machine').removeClass('modal-in');
				machine_modal_out = false;
				machine_award_trigger = false;
				$(this).html("Play a Song");
			} else if (monster_modal_out){
				$('#award-monster').removeClass('modal-in');
				monster_modal_out = false;
				monster_award_trigger = false;
				$(this).html("Play a Song");				
			}
			else if (modal_out){
				$('.song').removeClass('modal-in');
				$(this).html("Play a Song");
				modal_out = false;
			} else {
				$('.song').addClass('modal-in');
				$(this).html("Hide that Song");
				modal_out = true;
			}
		});

		$('#modal-songs .arrow').click(function(){
			$('.song').removeClass('modal-in');
			$('#song-button').html("Play a Song");
			modal_out = false;			
		});

		$('#award-machine .arrow').click(function(){
			$('#award-machine').removeClass('modal-in');
			$('#song-button').html("Play a Song");
			machine_modal_out = false;
			machine_award_trigger = false;
		});

		$('#award-monster .arrow').click(function(){
			$('#award-monster').removeClass('modal-in');
			$('#song-button').html("Play a Song");
			monster_modal_out = false;
			monster_award_trigger = false;
		});

		$('#next-song').click(function(){
			if (song_shown == 'song-3'){
				$('.song-3').hide();
				$('.song-1').show();
				song_shown = 'song-1';
			} else if (song_shown == 'song-2'){
				$('.song-2').hide();
				$('.song-3').show();
				song_shown = 'song-3';
			} else {
				$('.song-1').hide();
				$('.song-2').show();
				song_shown = 'song-2';
			}
		});

		$('#machine-image').click(function(){
			switch_character("machine");
		});
		$('#monster-image').click(function(){
			switch_character("monster");
		});
});

// when the window resizes and only once after it resizes
$(window).resize(function () {

});

// when the page loads
$(document).ready(function() {

});
