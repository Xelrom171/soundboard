/*
taken from https://www.myinstants.com/en/trending/us/
last updated: 1746238103174

(() => {
  return Array.from(document.querySelectorAll("#instants_container .instant")).map(el => ({
    name: el.querySelector(".instant-link")?.textContent.trim(),
    color: el.querySelector(".circle")?.style.backgroundColor,
    mp3: el.querySelector("button[onclick^='play']")?.getAttribute("onclick")?.match(/'([^']+\.mp3)'/)?.[1]
  }));
})()
*/
export const sounds =
// SPLITTER ---------------
[
    {
        "name": "VINE BOOM SOUND",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Gay echo",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/gay-echo.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Limit on talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limit-on-talking.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "OW OH P DIDDY NO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ow-oh-p-diddy-no.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "It's Gonna Be May",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/n-sync-its-gonna-be-me-1.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "Moannnnnygs727272",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moannnnnygs727272.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "I Love, I Love Her (R.E.P.O)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-i-love-her-r-e-p-o.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Flint and Steel (minecraft movie)",
        "color": "rgb(115, 196, 255)",
        "mp3": "/media/sounds/flint-and-steel-minecraft-movie.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Steve's Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steves-lava-chicken_UmJvvHF.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Ballerina cappuccina",
        "color": "rgb(166, 93, 36)",
        "mp3": "/media/sounds/ballerina-cappuccina.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "bombardier crocodilo",
        "color": "rgb(176, 162, 255)",
        "mp3": "/media/sounds/bombardier-crocodilo.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Lego Yoda Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "SWAMP IZZO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/swamp-izzo.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "Niggalodeon",
        "color": "rgb(255, 158, 22)",
        "mp3": "/media/sounds/niggalodeon_D3pIUnh.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "why are you gay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-you-gay.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "THE NETHER (Minecraft Movie)",
        "color": "rgb(164, 37, 255)",
        "mp3": "/media/sounds/the-nether-minecraft-movie.mp3"
    },
    {
        "name": "What the Helly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Zelda BOTW guardian",
        "color": "rgb(47, 177, 255)",
        "mp3": "/media/sounds/zelda-botw-guardian.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Ain't No Party Like A Diddy Party",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/aint-no-party-like-a-diddy-party.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Ain't No Party Like A Diddy Party",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/aint-no-party-like-a-diddy-party.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "С Х**ЛИ ТИША ТАКАЯ!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/s-kh-li-tisha-takaia.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "What the FUCK?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-fuck_CiZUehX.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "tralarero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralarero-tralala.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "Bombardilo cocodilo",
        "color": "rgb(115, 18, 255)",
        "mp3": "/media/sounds/bombardilo-cocodilo.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Wake Up Its The first of da month",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wake-up-its-the-first-of-da-month.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "Peter griffin hard R",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/peter-griffin-hard-r.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "Tum tum tum sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tum-tum-tum-sahur.mp3"
    },
    {
        "name": "Wake Up Its The first of da month",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wake-up-its-the-first-of-da-month.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "Chicken Jockey!!!",
        "color": "rgb(85, 255, 0)",
        "mp3": "/media/sounds/chicken-jockey_GjALZqG.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "tralarero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralarero-tralala.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "wiwiwi kitten",
        "color": "rgb(114, 102, 123)",
        "mp3": "/media/sounds/wiwiwi-kitten.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "Peter griffin hard R",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/peter-griffin-hard-r.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "Sponge Bob Disgusting",
        "color": "rgb(211, 199, 0)",
        "mp3": "/media/sounds/sponge-bob-disgusting.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "(Anakin) LIAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Tum tum tum sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tum-tum-tum-sahur.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "Gangnam Style Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangnam-style-meme.mp3"
    },
    {
        "name": "Wake Up Its The first of da month",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wake-up-its-the-first-of-da-month.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "shocking!",
        "color": "rgb(146, 239, 255)",
        "mp3": "/media/sounds/shocking_0NL2w3I.mp3"
    },
    {
        "name": "Halo elite laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a_HSMXsiW.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "Крокодилдо-мастурбини",
        "color": "rgb(168, 255, 0)",
        "mp3": "/media/sounds/krokodildo-masturbini_wlEmM0g.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Ahh BullShet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh-bullshet.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "Brand New Saxophone",
        "color": "rgb(37, 235, 168)",
        "mp3": "/media/sounds/brand-new-saxophone.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "RAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-honor-conq-rah.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bottom.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "pornbuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pornbuh.mp3"
    },
    {
        "name": "I got a brand new saxophone",
        "color": "rgb(255, 245, 103)",
        "mp3": "/media/sounds/i-got-a-brand-new-saxophone.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "Man shut yo b*tch ass up!!!!!",
        "color": "rgb(255, 53, 208)",
        "mp3": "/media/sounds/man-stfu.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "chicken jockey (BASS BOOSTED)",
        "color": "rgb(9, 181, 12)",
        "mp3": "/media/sounds/chicken-jockey-bass-boosted.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "Понос.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ponos-mp3.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "Lingan guli don pollo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lingan-guli-don-pollo.mp3"
    },
    {
        "name": "John pork is calling moooort",
        "color": "rgb(255, 93, 214)",
        "mp3": "/media/sounds/john-pork-is-calling-moooort.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "PUM IMPACTO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/pum-impacto.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "Chicken jockey (perfect) [fixed]",
        "color": "rgb(255, 137, 248)",
        "mp3": "/media/sounds/chicken-jockey-perfect-fixed.mp3"
    },
    {
        "name": "Valorant 1 kill",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-1-kill.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "Gemid2 troll",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemid2-troll.mp3"
    },
    {
        "name": "REPO ROBE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/repo-robe.mp3"
    },
    {
        "name": "Brand New Saxophone",
        "color": "rgb(37, 235, 168)",
        "mp3": "/media/sounds/brand-new-saxophone.mp3"
    },
    {
        "name": "TRALALERO TRA LA LA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tra-la-la.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "Deja vu fade",
        "color": "rgb(138, 0, 0)",
        "mp3": "/media/sounds/deja-vu-fade.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
    },
    {
        "name": "Wiwiwi original",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wiwiwi-original.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/ka-ching.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "Star Wars Blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blaster.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bottom.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Good morning vietnam!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/goodmorn1.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "Gta v phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-notification-sound.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "Hawk Tuah (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hawk-tuah-short.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "Tu pene no pierde sabor a caramelo",
        "color": "rgb(255, 214, 192)",
        "mp3": "/media/sounds/tu-pene-no-pierde-sabor-a-caramelo.mp3"
    },
    {
        "name": "Capuccino Assasino (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/capuccino-assasino-italian-brainrot.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "THX earrape",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thx-earrape.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "ding dong eat it up",
        "color": "rgb(255, 159, 33)",
        "mp3": "/media/sounds/ding-dong-eat-it-up.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Hawk Tuah!",
        "color": "rgb(255, 234, 41)",
        "mp3": "/media/sounds/hawk-tuah_SRaUp2L.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "iphone alarm radar",
        "color": "rgb(193, 10, 10)",
        "mp3": "/media/sounds/iphone-alarm-sound-effect-radar.mp3"
    },
    {
        "name": "L-lava c-c-chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l-lava-c-c-chicken.mp3"
    },
    {
        "name": "Gta v phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-notification-sound.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "LEBRONNNNN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebronnnnn.mp3"
    },
    {
        "name": "TRALALERO FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-funk.mp3"
    },
    {
        "name": "Wiwiwi original",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wiwiwi-original.mp3"
    },
    {
        "name": "Ctohbi 1950",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ctohbi-1950.mp3"
    },
    {
        "name": "USSR1 Anthem",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ussr1.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/ka-ching.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Indian Kid Funny asf",
        "color": "rgb(88, 255, 47)",
        "mp3": "/media/sounds/record-online-voice-recorder_37uPSci.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "Cartoon bonk",
        "color": "rgb(82, 255, 110)",
        "mp3": "/media/sounds/cartoon-bonk.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "Pokémon plink",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq91k5v_6.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "TODAS MIS PAJAS ME GUSTA RECORDAR",
        "color": "rgb(255, 254, 244)",
        "mp3": "/media/sounds/todas-mis-pajas-me-gusta-recordar.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НАХУЙ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-nakhui.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "SEA SALT louder by w",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/sea-salt-louder-by-w.mp3"
    },
    {
        "name": "5 noches con mi tio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-noches-con-mi-tio.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Goose HONK!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/honk-sound.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "Seth Rogen's Laugh",
        "color": "rgb(17, 207, 255)",
        "mp3": "/media/sounds/seth-rogen-laughing-at-apple-fruit.mp3"
    },
    {
        "name": "goofy ass sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ass-sound.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "ay miguel",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ay-miguel.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/ka-ching.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Yes, Mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-mommy.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "Gta v phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-notification-sound.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НАХУЙ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-nakhui.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kasongo.mp3"
    },
    {
        "name": "5 noches con mi tio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-noches-con-mi-tio.mp3"
    },
    {
        "name": "USSR1 Anthem",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ussr1.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "OH HELLO THERE. ( Shrek )",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shrek-oh-hello-there_nhnoZHY.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "roblox jump",
        "color": "rgb(255, 200, 106)",
        "mp3": "/media/sounds/action_jump.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "Gemid2 troll",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemid2-troll.mp3"
    },
    {
        "name": "LINGA GULI GULI GULI",
        "color": "rgb(59, 253, 255)",
        "mp3": "/media/sounds/linga-guli-guli-guli.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "brainrot cat",
        "color": "rgb(68, 255, 0)",
        "mp3": "/media/sounds/brainrot-cat.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НАХУЙ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-nakhui.mp3"
    },
    {
        "name": "Подзалупный творожок я несу тебе дружок",
        "color": "rgb(190, 195, 207)",
        "mp3": "/media/sounds/podzalupnyi-tvorozhok-ia-nesu-tebe-druzhok.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Hawk Tuah!",
        "color": "rgb(255, 234, 41)",
        "mp3": "/media/sounds/hawk-tuah_SRaUp2L.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Darth Vader's breath",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/darth-vader.mp3"
    },
    {
        "name": "GERMAN SPONGEBOB (LOUD AF)",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/german-spongebob.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Bass Distortion / Dab Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dab-distortion.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-girl.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "Good morning vietnam!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/goodmorn1.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "the price is right winner sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thepriceisrightextendedtheme128kmusic.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "long wet smelly ass fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/long-wet-smelly-ass-fart.mp3"
    },
    {
        "name": "The Alien Annihilation",
        "color": "rgb(24, 42, 7)",
        "mp3": "/media/sounds/the-alien-annihilation.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Улетаю на гаитии но это минус уши",
        "color": "rgb(76, 0, 0)",
        "mp3": "/media/sounds/uletaiu-na-gaitii-no-eto-minus-ushi.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "я жирный уебан",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ia-zhirnyi-ueban.mp3"
    },
    {
        "name": "Alex \"eu vou gozar\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alex-eu-vou-gozar.mp3"
    },
    {
        "name": "tralalero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tralala_liHLXPH.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "STICKING OUT UR GYAT FOR THE RIZZLER",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/sticking-out-ur-gyat-for-the-rizzler.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "OH HELLO THERE. ( Shrek )",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shrek-oh-hello-there_nhnoZHY.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
    },
    {
        "name": "wtffff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-sound.mp3"
    },
    {
        "name": "I'm tired of this grandpa... That's too damn bad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-tired-of-this-grandpa-thats-too-damn-bad.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "android notification  :)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-notification.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "Dramatic Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dramatic-fart_f8Sw6fv.mp3"
    },
    {
        "name": "botao do whatsapp",
        "color": "rgb(28, 255, 0)",
        "mp3": "/media/sounds/botao-do-whatsapp.mp3"
    },
    {
        "name": "Minecraft Advancement Challenge Complete",
        "color": "rgb(225, 103, 255)",
        "mp3": "/media/sounds/challenge_complete_uHsY1YS.mp3"
    },
    {
        "name": "Арбуз арбуз пёрни",
        "color": "rgb(7, 172, 0)",
        "mp3": "/media/sounds/arbuz-arbuz-piorni.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "this is a crafting table",
        "color": "rgb(124, 78, 5)",
        "mp3": "/media/sounds/this-is-a-crafting-table.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "Грызть какашки",
        "color": "rgb(40, 18, 18)",
        "mp3": "/media/sounds/gryzt-kakashki.mp3"
    },
    {
        "name": "Trikitrakatelas (italian brainrot)",
        "color": "rgb(196, 255, 46)",
        "mp3": "/media/sounds/trikitrakatelas-italian-brainrot.mp3"
    },
    {
        "name": "Wthelly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wthelly.mp3"
    },
    {
        "name": "Joe Hendry",
        "color": "rgb(167, 117, 255)",
        "mp3": "/media/sounds/joe-hendry.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "hamburger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hamburger-sound-effect.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Gawr Gura - A",
        "color": "rgb(38, 129, 208)",
        "mp3": "/media/sounds/gawr-gura-a.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "WHAT THE HELLLLLLLLLLLL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hellllllllllll.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "Discord Jebaiting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikejebait.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "FitnessGram Pacer Test",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fitnessgram.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "IPhone Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
    },
    {
        "name": "GERMAN SPONGEBOB (LOUD AF)",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/german-spongebob.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Door Close AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exit-aim.mp3"
    },
    {
        "name": "Minecraft Grass Walking Sound Effect",
        "color": "rgb(0, 139, 23)",
        "mp3": "/media/sounds/minecraft-grass-walking-sound-effect.mp3"
    },
    {
        "name": "Gundam Newtype",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
    },
    {
        "name": "Stop! You've violated the law!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop_ZnQ9jIO.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Giorno Orchestra",
        "color": "rgb(226, 255, 0)",
        "mp3": "/media/sounds/orchastra-cut2.mp3"
    },
    {
        "name": "Subway Surfers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "Kirby Hiiii",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hiiii_kirby_sound.mp3"
    },
    {
        "name": "RAAAAAAH",
        "color": "rgb(60, 30, 150)",
        "mp3": "/media/sounds/raaaaaah.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "TOUCH MY TRALALA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/touch-my-tralala_voYRmI9.mp3"
    },
    {
        "name": "Invincible pretty sure",
        "color": "rgb(13, 53, 255)",
        "mp3": "/media/sounds/invincible-pretty-sure.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "Crowd Laughter (short)",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/laughter-short.mp3"
    },
    {
        "name": "Anime Girl \"Senpai!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-senpai.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "boy what the hell boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boy-what-the-hell-boy-meme.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "CalebCity Yaeger",
        "color": "rgb(67, 255, 50)",
        "mp3": "/media/sounds/2_5s_to_7s_you_better_scramble_like_an_egg_before_.mp3"
    },
    {
        "name": "Discord spam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-spam.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "Stop! You've violated the law!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop_ZnQ9jIO.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "Subway Surfers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "Random button",
        "color": "rgb(255, 64, 64)",
        "mp3": "/media/sounds/random-button.mp3"
    },
    {
        "name": "Pokeball Pokemon Out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-pokemon-anime-7-pokemon-out.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Dramatic boom Cyael",
        "color": "rgb(96, 15, 255)",
        "mp3": "/media/sounds/shortboom.mp3"
    },
    {
        "name": "Cartoon Mr. Krab Walking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-mr-krab-walking.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "loud packgod roast",
        "color": "rgb(208, 22, 255)",
        "mp3": "/media/sounds/loud-packgod-roast.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "cat iphone ringtone",
        "color": "rgb(224, 252, 255)",
        "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "тампоны для алены",
        "color": "rgb(113, 20, 255)",
        "mp3": "/media/sounds/tampony-dlia-aleny.mp3"
    },
    {
        "name": "Shoebody Bop",
        "color": "rgb(255, 73, 158)",
        "mp3": "/media/sounds/shoebody-bop.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "Tu dar muito é teu c* rapaz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-dar-muito-e-teu-c-rapaz.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "Tu pene no pierde sabor a caramelo",
        "color": "rgb(255, 214, 192)",
        "mp3": "/media/sounds/tu-pene-no-pierde-sabor-a-caramelo.mp3"
    },
    {
        "name": "Smoke Weed EveryDay",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/snoop-dogg-smoke-weed-everyday.mp3"
    },
    {
        "name": "Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/counter-strike-jingle-cs-radio-enemy-spotted.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "Victory Screech - Spongebob",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/victoryscreech.mp3"
    },
    {
        "name": "Discord Jebaiting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikejebait.mp3"
    },
    {
        "name": "Japanese YOOOO",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "GERMAN SPONGEBOB (LOUD AF)",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/german-spongebob.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "Door Close AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exit-aim.mp3"
    },
    {
        "name": "Gundam Newtype",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Boat Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/two-tone-boat-horn-sound-used-in-films-from-60s.mp3"
    },
    {
        "name": "Giorno Orchestra",
        "color": "rgb(226, 255, 0)",
        "mp3": "/media/sounds/orchastra-cut2.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "RAAAAAAH",
        "color": "rgb(60, 30, 150)",
        "mp3": "/media/sounds/raaaaaah.mp3"
    },
    {
        "name": "ONE PIECE Cornered",
        "color": "rgb(255, 8, 251)",
        "mp3": "/media/sounds/one-piece-ost-cornered-raid-host.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "TOUCH MY TRALALA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/touch-my-tralala_voYRmI9.mp3"
    },
    {
        "name": "Invincible pretty sure",
        "color": "rgb(13, 53, 255)",
        "mp3": "/media/sounds/invincible-pretty-sure.mp3"
    },
    {
        "name": "Cat laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/cat-laugh.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "CHICKEN JOCKEYY",
        "color": "rgb(33, 255, 0)",
        "mp3": "/media/sounds/chicken-jockeyy.mp3"
    },
    {
        "name": "Conquest",
        "color": "rgb(255, 247, 244)",
        "mp3": "/media/sounds/conquest.mp3"
    },
    {
        "name": "Sleep phonk",
        "color": "rgb(41, 0, 255)",
        "mp3": "/media/sounds/sleep-phonk_XPBfmfW.mp3"
    },
    {
        "name": "niggerplane2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerplane2_6xEUFwM.mp3"
    },
    {
        "name": "tralalero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tralala_liHLXPH.mp3"
    },
    {
        "name": "Loud bing chilling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-bing-chilling.mp3"
    },
    {
        "name": "chickey jockey",
        "color": "rgb(255, 81, 33)",
        "mp3": "/media/sounds/chickey-jockey.mp3"
    },
    {
        "name": "cuphead parry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cuphead-parry.mp3"
    },
    {
        "name": "Waltuh2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/waltuh2.mp3"
    },
    {
        "name": "Guts and blackpowder Tyler scream zombie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/guts-and-blackpowder-tyler-scream-zombie.mp3"
    },
    {
        "name": "Gavel 3x",
        "color": "rgb(44, 29, 14)",
        "mp3": "/media/sounds/gavel-3x.mp3"
    },
    {
        "name": "Classic Red Alert",
        "color": "rgb(255, 41, 8)",
        "mp3": "/media/sounds/red-alert-klaxxon.mp3"
    },
    {
        "name": "Ra Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ra_laugh_02_1.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "YEETT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet.mp3"
    },
    {
        "name": "I will send you to jesus",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rpreplay_final1626232154.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Oh Baby A Triple",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-baby-a-triple.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Gawr Gura - A",
        "color": "rgb(38, 129, 208)",
        "mp3": "/media/sounds/gawr-gura-a.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Hawk Tuah!",
        "color": "rgb(255, 234, 41)",
        "mp3": "/media/sounds/hawk-tuah_SRaUp2L.mp3"
    },
    {
        "name": "AIM Incoming Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Caught a Pokemon!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/06-caught-a-pokemon.mp3"
    },
    {
        "name": "DETROIT BASKETBALL!!!",
        "color": "rgb(0, 17, 255)",
        "mp3": "/media/sounds/detoit-basketball-audiotrimmer.mp3"
    },
    {
        "name": "black tung tung sahur",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/black-tung-tung-sahur.mp3"
    },
    {
        "name": "Joe Hendry",
        "color": "rgb(167, 117, 255)",
        "mp3": "/media/sounds/joe-hendry.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "clash royale laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-laugh.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "FitnessGram Pacer Test",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fitnessgram.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "IPhone Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
    },
    {
        "name": "Anime Girl \"Senpai!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-senpai.mp3"
    },
    {
        "name": "sonic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jump.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Deaths whistle (sound only)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deaths-whistle-sound-only.mp3"
    },
    {
        "name": "Minecraft Grass Walking Sound Effect",
        "color": "rgb(0, 139, 23)",
        "mp3": "/media/sounds/minecraft-grass-walking-sound-effect.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "Are you serious right neow bro",
        "color": "rgb(138, 61, 61)",
        "mp3": "/media/sounds/are-you-serious-right-neow-bro.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "Dog laughing meme form TikTok",
        "color": "rgb(38, 5, 255)",
        "mp3": "/media/sounds/dog-laughing-meme-form-tiktok.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Гимн твича mzlf",
        "color": "rgb(22, 95, 255)",
        "mp3": "/media/sounds/gimn-tvicha-mzlf.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "Choo choo",
        "color": "rgb(255, 228, 43)",
        "mp3": "/media/sounds/choo-choo_GcAv6Jz.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "Hola tururururururururururu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hola-tururururururururururu.mp3"
    },
    {
        "name": "ling gang guli guli watcha made",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ling-gang-guli-guli-watcha-made.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "AIM Incoming Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "sonic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jump.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "/media/sounds/villager.mp3"
    },
    {
        "name": "wtffff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-sound.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "wake up filthy",
        "color": "rgb(10, 120, 255)",
        "mp3": "/media/sounds/wake-up-filthy.mp3"
    },
    {
        "name": "roblox jump",
        "color": "rgb(255, 200, 106)",
        "mp3": "/media/sounds/action_jump.mp3"
    },
    {
        "name": "Going deep and going hard",
        "color": "rgb(30, 86, 255)",
        "mp3": "/media/sounds/going-deep-and-going-hard.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "Burp & Fart",
        "color": "rgb(255, 114, 114)",
        "mp3": "/media/sounds/burp-fart.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Kirby Hiiii",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hiiii_kirby_sound.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "I Said Let Him Cook",
        "color": "rgb(11, 39, 255)",
        "mp3": "/media/sounds/i-said-let-him-cook.mp3"
    },
    {
        "name": "Choo choo",
        "color": "rgb(255, 228, 43)",
        "mp3": "/media/sounds/choo-choo_GcAv6Jz.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "erikasongg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/erikasongg.mp3"
    },
    {
        "name": "Этот звук выглядит незаконно",
        "color": "rgb(84, 29, 29)",
        "mp3": "/media/sounds/etot-zvuk-vygliadit-nezakonno.mp3"
    },
    {
        "name": "Wthelly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wthelly.mp3"
    },
    {
        "name": "Chicken Jockey (Crowded)",
        "color": "rgb(241, 207, 255)",
        "mp3": "/media/sounds/chicken-jockey-crowded.mp3"
    },
    {
        "name": "Joe Hendry",
        "color": "rgb(167, 117, 255)",
        "mp3": "/media/sounds/joe-hendry.mp3"
    },
    {
        "name": "CHICKEN JOCKEY FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey-funk.mp3"
    },
    {
        "name": "Smoke Weed EveryDay",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/snoop-dogg-smoke-weed-everyday.mp3"
    },
    {
        "name": "Lightsaber ON",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/lightsaber_02.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "JoJo - yes yes yes yes YES",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
    },
    {
        "name": "chickey jockey",
        "color": "rgb(255, 81, 33)",
        "mp3": "/media/sounds/chickey-jockey.mp3"
    },
    {
        "name": "Hello There - General Kenobi",
        "color": "rgb(159, 111, 57)",
        "mp3": "/media/sounds/hello-there-general-kenobi.mp3"
    },
    {
        "name": "Bomboclat soup",
        "color": "rgb(123, 34, 34)",
        "mp3": "/media/sounds/bomboclat-soup.mp3"
    },
    {
        "name": "homoflow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homoflow.mp3"
    },
    {
        "name": "Ice Cream Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ice-cream-bell-sound.mp3"
    },
    {
        "name": "Rocket Launcher Meme",
        "color": "rgb(255, 255, 66)",
        "mp3": "/media/sounds/rocket-launcher-meme.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "chinese guy rap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/video0-online-audio-converter_L0R7wUM.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "U Got That (meme)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/u-got-that-mp3-fix.mp3"
    },
    {
        "name": "Ooh Wah Ah Ah Ah",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/david-oohwahahahah.mp3"
    },
    {
        "name": "Lightsaber ON",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/lightsaber_02.mp3"
    },
    {
        "name": "Oh Baby A Triple",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-baby-a-triple.mp3"
    },
    {
        "name": "the more you know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-more-you-know.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "yessir tik tok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yessir-sound-effect.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "Cartoon Chase",
        "color": "rgb(24, 255, 32)",
        "mp3": "/media/sounds/chase_QnUxJTk.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "HOOYAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hooyahh.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "gangsta paradise scream",
        "color": "rgb(255, 73, 227)",
        "mp3": "/media/sounds/gangstas-paradise-scream-sound-effect-1.mp3"
    },
    {
        "name": "sword",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/falling.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Gawr Gura - A",
        "color": "rgb(38, 129, 208)",
        "mp3": "/media/sounds/gawr-gura-a.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "Anime Girl \"Senpai!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-senpai.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "boy what the hell boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boy-what-the-hell-boy-meme.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "Minecraft sheep",
        "color": "rgb(255, 119, 165)",
        "mp3": "/media/sounds/minecraft-sheep2.mp3"
    },
    {
        "name": "what the hell oh my god no way",
        "color": "rgb(206, 50, 255)",
        "mp3": "/media/sounds/what-the-hell-oh-my-god-no-way.mp3"
    },
    {
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "wtffff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-sound.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Stop! You've violated the law!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop_ZnQ9jIO.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "GTA V Wasted (Death Sound)",
        "color": "rgb(219, 0, 0)",
        "mp3": "/media/sounds/gta-v-wasted-death-sound.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "Nether portal",
        "color": "rgb(123, 30, 120)",
        "mp3": "/media/sounds/portail-du-nether.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "yippie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippie_Kq73X8D.mp3"
    },
    {
        "name": "glitch sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/glitch-sound-effect_FugN82U.mp3"
    },
    {
        "name": "stupid ni",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-ni.mp3"
    },
    {
        "name": "crowd laughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-laughing-sound-effect-youtube-online-audio-converter.mp3"
    },
    {
        "name": "Mustard on the beat hoe",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mustard-on-the-beat-hoe.mp3"
    },
    {
        "name": "you're fucked",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-fucked.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Пук в эхо",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/puk-v-ekho.mp3"
    },
    {
        "name": "Minecraft Dog Bark",
        "color": "rgb(210, 210, 210)",
        "mp3": "/media/sounds/minecraft-dog-bark.mp3"
    },
    {
        "name": "Get me out of here!!!",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/get-me-out-of-here.mp3"
    },
    {
        "name": "Spongbob shut the f up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c2f26586-e546-4235-84de-5cf357540d34.mp3"
    },
    {
        "name": "Spongebob Bubble Transition",
        "color": "rgb(2, 91, 255)",
        "mp3": "/media/sounds/spongebob-bubble-transition.mp3"
    },
    {
        "name": "chinese dream",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/chinese-dream.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "Conquest",
        "color": "rgb(255, 247, 244)",
        "mp3": "/media/sounds/conquest.mp3"
    },
    {
        "name": "Дядя Саша...",
        "color": "rgb(213, 0, 255)",
        "mp3": "/media/sounds/diadia-sasha.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "Тунг тунг тунг саур",
        "color": "rgb(255, 230, 45)",
        "mp3": "/media/sounds/tung-tung-tung-saur.mp3"
    },
    {
        "name": "South Park Harley gang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/harleygag2.mp3"
    },
    {
        "name": "tralalero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tralala_liHLXPH.mp3"
    },
    {
        "name": "Loud bing chilling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-bing-chilling.mp3"
    },
    {
        "name": "DJ cigan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-cigan.mp3"
    },
    {
        "name": "mac startup chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/apple-mac-startup-soundchime.mp3"
    },
    {
        "name": "cuphead parry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cuphead-parry.mp3"
    },
    {
        "name": "niggeralex",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggeralex_T4qksEs.mp3"
    },
    {
        "name": "korok appears",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/korok_appears.mp3"
    },
    {
        "name": "Waltuh2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/waltuh2.mp3"
    },
    {
        "name": "Pikmin louie~",
        "color": "rgb(30, 62, 255)",
        "mp3": "/media/sounds/louie.mp3"
    },
    {
        "name": "Guts and blackpowder Tyler scream zombie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/guts-and-blackpowder-tyler-scream-zombie.mp3"
    },
    {
        "name": "Beer",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/beer.mp3"
    },
    {
        "name": "Casa de autismo discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/casa-de-autismo-discord.mp3"
    },
    {
        "name": "Gavel 3x",
        "color": "rgb(44, 29, 14)",
        "mp3": "/media/sounds/gavel-3x.mp3"
    },
    {
        "name": "Classic Red Alert",
        "color": "rgb(255, 41, 8)",
        "mp3": "/media/sounds/red-alert-klaxxon.mp3"
    },
    {
        "name": "Ra Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ra_laugh_02_1.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "I will send you to jesus",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rpreplay_final1626232154.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "IPhone Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
    },
    {
        "name": "BoomBamBopBadaBopBoompPow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boom-bam-bada-bomp-boomp-pow_3xkcJl6.mp3"
    },
    {
        "name": "gangsta paradise scream",
        "color": "rgb(255, 73, 227)",
        "mp3": "/media/sounds/gangstas-paradise-scream-sound-effect-1.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "yeat bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeat-bell.mp3"
    },
    {
        "name": "Gundam Newtype",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "Peter Griffin Im coming",
        "color": "rgb(6, 161, 48)",
        "mp3": "/media/sounds/peter-griffin-im-coming.mp3"
    },
    {
        "name": "wake up filthy",
        "color": "rgb(10, 120, 255)",
        "mp3": "/media/sounds/wake-up-filthy.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "/media/sounds/boing-sound.mp3"
    },
    {
        "name": "Going deep and going hard",
        "color": "rgb(30, 86, 255)",
        "mp3": "/media/sounds/going-deep-and-going-hard.mp3"
    },
    {
        "name": "I Said Let Him Cook",
        "color": "rgb(11, 39, 255)",
        "mp3": "/media/sounds/i-said-let-him-cook.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Choo choo",
        "color": "rgb(255, 228, 43)",
        "mp3": "/media/sounds/choo-choo_GcAv6Jz.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "Invincible pretty sure",
        "color": "rgb(13, 53, 255)",
        "mp3": "/media/sounds/invincible-pretty-sure.mp3"
    },
    {
        "name": "Maltigi",
        "color": "rgb(77, 234, 31)",
        "mp3": "/media/sounds/maltigi.mp3"
    },
    {
        "name": "Tu dar muito é teu c* rapaz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-dar-muito-e-teu-c-rapaz.mp3"
    },
    {
        "name": "erikasongg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/erikasongg.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "Wthelly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wthelly.mp3"
    },
    {
        "name": "La polizia noOooOo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/la-polizia-noooooo.mp3"
    },
    {
        "name": "Joe Hendry",
        "color": "rgb(167, 117, 255)",
        "mp3": "/media/sounds/joe-hendry.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Smoke Weed EveryDay",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/snoop-dogg-smoke-weed-everyday.mp3"
    },
    {
        "name": "Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/counter-strike-jingle-cs-radio-enemy-spotted.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "One Eternity Later",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/one-eternity-later.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "Yes, Mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-mommy.mp3"
    },
    {
        "name": "samsung notification 234223243",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nijLeKo.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "Pitbull Fireball HD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a1-0001_pitbull-fireball-edited00086400-online-audio-converter.mp3"
    },
    {
        "name": "Hot hot hot hot (South Park)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hot-hot-hot-hot.mp3"
    },
    {
        "name": "Villager blow",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/idle2.mp3"
    },
    {
        "name": "Minecraft TNT explosion!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tnt-explosion.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "ay ay ay im ur little butterfly",
        "color": "rgb(255, 57, 156)",
        "mp3": "/media/sounds/9convert_9f6OCue.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "Jerkmate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jerkmate_zg37Y8g.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "Taco bell ding",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmppuweus60.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "trump shut up silly woman",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-shut-up-silly-woman.mp3"
    },
    {
        "name": "Hello moto",
        "color": "rgb(234, 63, 255)",
        "mp3": "/media/sounds/hello-moto-sound-notification.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "Suspenseful",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspenseful.mp3"
    },
    {
        "name": "Its Lit Travis Scott",
        "color": "rgb(13, 11, 11)",
        "mp3": "/media/sounds/its-lit-travis-scott.mp3"
    },
    {
        "name": "Throw",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throw_d4CPY0G.mp3"
    },
    {
        "name": "Im bout' to bust",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/im-bout-to-bust_2KNbHUy.mp3"
    },
    {
        "name": "Bleach - On the Precipice of Defeat",
        "color": "rgb(255, 12, 45)",
        "mp3": "/media/sounds/bleach-on-the-precipice-of-defeat.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "Jeopardy Daily Double",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-daily-double-sound-effect-from-youtube_76mCCAq.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Impostor kill sound",
        "color": "rgb(123, 120, 255)",
        "mp3": "/media/sounds/among-us-impostor-kill-music_01.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "Oui - Rizzler",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oui-rizzler.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "Yes, Mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-mommy.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Sword Cut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/espada-som.mp3"
    },
    {
        "name": "samsung notification 234223243",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nijLeKo.mp3"
    },
    {
        "name": "(Anakin) I hate you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hate-you_CJxWsxV.mp3"
    },
    {
        "name": "Peter Griffin Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-guy-singing-star-wars.mp3"
    },
    {
        "name": "fire alarm chirp",
        "color": "rgb(164, 147, 255)",
        "mp3": "/media/sounds/fire-alarm-chirp.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "Shotgun Pump Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/12g-pumpfull.mp3"
    },
    {
        "name": "DMC - I AM THE STORM",
        "color": "rgb(65, 62, 138)",
        "mp3": "/media/sounds/approaching-storm.mp3"
    },
    {
        "name": "load gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gun-load_abJphmJ.mp3"
    },
    {
        "name": "Jerkmate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jerkmate_zg37Y8g.mp3"
    },
    {
        "name": "Taco bell ding",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmppuweus60.mp3"
    },
    {
        "name": "Airplane Ding Dong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/airplane-ding-dong.mp3"
    },
    {
        "name": "nba draft",
        "color": "rgb(42, 63, 255)",
        "mp3": "/media/sounds/nba-draft-sound-2021.mp3"
    },
    {
        "name": "tom scream 2",
        "color": "rgb(57, 255, 19)",
        "mp3": "/media/sounds/tom_scream_ow.mp3"
    },
    {
        "name": "Hello moto",
        "color": "rgb(234, 63, 255)",
        "mp3": "/media/sounds/hello-moto-sound-notification.mp3"
    },
    {
        "name": "Samsung Flower Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/samsung-galaxy-morning-flower.mp3"
    },
    {
        "name": "Are you sure about that? JCena",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-sure-about-that_3D0ngHY.mp3"
    },
    {
        "name": "kept you waitin, huh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kept.mp3"
    },
    {
        "name": "Suspenseful",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspenseful.mp3"
    },
    {
        "name": "Cartoon Gulp Swallow Sound",
        "color": "rgb(255, 117, 154)",
        "mp3": "/media/sounds/cartoon-gulp-swallow-sound.mp3"
    },
    {
        "name": "(Anakin) What have I done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-have-i-done.mp3"
    },
    {
        "name": "Mike Breen Bang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikebreenbang.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "i was the knight in shining armor in your movie",
        "color": "rgb(255, 235, 10)",
        "mp3": "/media/sounds/i-was-the-knight-in-shining-armor-in-your-movie.mp3"
    },
    {
        "name": "SUBWAY SURFER BASS BOOSTED",
        "color": "rgb(36, 255, 62)",
        "mp3": "/media/sounds/subway-surfer-bass-boosted.mp3"
    },
    {
        "name": "THE record scratch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-scratch_u0nwDyU.mp3"
    },
    {
        "name": "Gangsta's Paradise Choir 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "Ewww (Crowd Effect)",
        "color": "rgb(248, 255, 49)",
        "mp3": "/media/sounds/ewww.mp3"
    },
    {
        "name": "Sitcom Crowd Ooh",
        "color": "rgb(255, 157, 216)",
        "mp3": "/media/sounds/sitcom-crowd-ooh_sRDaL7d.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "Giorno Orchestra",
        "color": "rgb(226, 255, 0)",
        "mp3": "/media/sounds/orchastra-cut2.mp3"
    },
    {
        "name": "Old car horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-car-horn.mp3"
    },
    {
        "name": "Geometry Dash Death",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/geometry-dash-death-sound-effect.mp3"
    },
    {
        "name": "Meme mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales_qHtIjyQ.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "Pokeball Pokemon Out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-pokemon-anime-7-pokemon-out.mp3"
    },
    {
        "name": "Dramatic boom Cyael",
        "color": "rgb(96, 15, 255)",
        "mp3": "/media/sounds/shortboom.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "Bone crack meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/bone-crack-meme.mp3"
    },
    {
        "name": "loud packgod roast",
        "color": "rgb(208, 22, 255)",
        "mp3": "/media/sounds/loud-packgod-roast.mp3"
    },
    {
        "name": "Spongebob Bubble Transition",
        "color": "rgb(2, 91, 255)",
        "mp3": "/media/sounds/spongebob-bubble-transition.mp3"
    },
    {
        "name": "RAAAAAAH",
        "color": "rgb(60, 30, 150)",
        "mp3": "/media/sounds/raaaaaah.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "Omni man fat butt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-fat-butt.mp3"
    },
    {
        "name": "Стояковский",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stoiakovskii.mp3"
    },
    {
        "name": "Scary Whisper",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-whisper.mp3"
    },
    {
        "name": "Chicken Jocky",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jocky.mp3"
    },
    {
        "name": "el rap de peru",
        "color": "rgb(131, 94, 27)",
        "mp3": "/media/sounds/el-rap-de-peru.mp3"
    },
    {
        "name": "Cartoon elephant sound",
        "color": "rgb(118, 110, 92)",
        "mp3": "/media/sounds/cartoon-elephant-sound.mp3"
    },
    {
        "name": "Tecnologia Meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tecnologia-meme.mp3"
    },
    {
        "name": "Bobrini Cocococini",
        "color": "rgb(157, 93, 59)",
        "mp3": "/media/sounds/bobrini-cocococini.mp3"
    },
    {
        "name": "Ballarina Cappucina",
        "color": "rgb(255, 52, 184)",
        "mp3": "/media/sounds/ballarina-cappucina.mp3"
    },
    {
        "name": "Тунг тунг тунг саур",
        "color": "rgb(255, 230, 45)",
        "mp3": "/media/sounds/tung-tung-tung-saur.mp3"
    },
    {
        "name": "DJ cigan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-cigan.mp3"
    },
    {
        "name": "Darius morse code",
        "color": "rgb(175, 211, 87)",
        "mp3": "/media/sounds/darius-morse-code.mp3"
    },
    {
        "name": "Mexican Laugh",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/mexlaugh4.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panic-button.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "GunShoting",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/gunshot.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Suspense strike",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
    },
    {
        "name": "The Rock Shut Up",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/the-rock-shut-up.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Darth Vader's breath",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/darth-vader.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Valorant ace sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-ace-sound.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "Shotgun sound (Vanoss)",
        "color": "rgb(51, 0, 0)",
        "mp3": "/media/sounds/shotgun_blast-jim_rogers-1914772763.mp3"
    },
    {
        "name": "Skype call",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/skype-call-sound-download-link-mp3cut.mp3"
    },
    {
        "name": "Animan Studios theme",
        "color": "rgb(255, 60, 231)",
        "mp3": "/media/sounds/animan-studios-theme_fEsuoxZ.mp3"
    },
    {
        "name": "nokia tone sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nokia-ringtone-1994.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "/media/sounds/disappear.mp3"
    },
    {
        "name": "pain theme naruto",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pain-2.mp3"
    },
    {
        "name": "Nya Button",
        "color": "rgb(255, 98, 171)",
        "mp3": "/media/sounds/nya_ZtXOXLx.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "Door Slamming",
        "color": "rgb(0, 255, 102)",
        "mp3": "/media/sounds/door-slamming-sound-effect-no-repeats-or-silence-2016.mp3"
    },
    {
        "name": "Six Million Dollar Man",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bionicfx.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "ZEHAHAHA (Edward Teach laugh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zehahaha_laugh.mp3"
    },
    {
        "name": "RKO Out of Nowhere",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rko-outta-nowhere-jim-mcalister-and-gary-harkins.mp3"
    },
    {
        "name": "AHHHH I Need a Medic Bag!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/medic-bag.mp3"
    },
    {
        "name": "what the hell oh my god no way",
        "color": "rgb(206, 50, 255)",
        "mp3": "/media/sounds/what-the-hell-oh-my-god-no-way.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "oi oi baka",
        "color": "rgb(44, 255, 250)",
        "mp3": "/media/sounds/oi-oi-baka_ZPZFcW3.mp3"
    },
    {
        "name": "full squeak",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_full.mp3"
    },
    {
        "name": "Pika pika",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/pikachu-pika-pika-sound-fx.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "TOKYO DRIFT Teriyaki Boyz",
        "color": "rgb(244, 244, 244)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer_7vAtKUf.mp3"
    },
    {
        "name": "A-10 warthog brrrt",
        "color": "rgb(128, 119, 158)",
        "mp3": "/media/sounds/a-10-warthog-brrrt.mp3"
    },
    {
        "name": "Stone Cold Smash",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/stone-cold-steve-austin-theme-song-download_cut_part1.mp3"
    },
    {
        "name": "OHH SHIT",
        "color": "rgb(4, 255, 231)",
        "mp3": "/media/sounds/tourettes-guy-oh-shit.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "glitch sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/glitch-sound-effect_FugN82U.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "brain farts",
        "color": "rgb(153, 14, 255)",
        "mp3": "/media/sounds/brain-farts.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "smack OH SHIT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smack-oh-shit.mp3"
    },
    {
        "name": "which bomboclaat dog i am",
        "color": "rgb(97, 0, 0)",
        "mp3": "/media/sounds/which-bomboclaat-dog-i-am.mp3"
    },
    {
        "name": "squid game gunshot",
        "color": "rgb(255, 0, 216)",
        "mp3": "/media/sounds/squid-game-gunshot.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "HELP HELP ME tiktok meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/help-help-me-tiktok-meme.mp3"
    },
    {
        "name": "Sukuna's ryoiki tenkai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sukunas-ryoiki-tenkai.mp3"
    },
    {
        "name": "lebron james vine",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/lebron-james-vine_1.mp3"
    },
    {
        "name": "Groan Tube 1",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-1_kdDdtlv.mp3"
    },
    {
        "name": "Kahoot Lobby Music",
        "color": "rgb(224, 206, 255)",
        "mp3": "/media/sounds/kahoot-lobby-music.mp3"
    },
    {
        "name": "Fight back 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fight-back-2.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "must have been the wind",
        "color": "rgb(94, 255, 254)",
        "mp3": "/media/sounds/must-have-been-the-wind.mp3"
    },
    {
        "name": "DMC3 WHERE'S YOUR MOTIVATION (VERGIL)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wheres-your-motivation.mp3"
    },
    {
        "name": "\"Wow!\" (anime voice accent)",
        "color": "rgb(216, 114, 255)",
        "mp3": "/media/sounds/wow-anime-voice-accent.mp3"
    },
    {
        "name": "Googoo Gaagaa I want milk",
        "color": "rgb(251, 255, 255)",
        "mp3": "/media/sounds/googoo-gaagaa.mp3"
    },
    {
        "name": "RUPAUL SHADE SOUND",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/rupaul-shade-sound.mp3"
    },
    {
        "name": "Ginagawa mo",
        "color": "rgb(14, 255, 34)",
        "mp3": "/media/sounds/ginagawa-mo_Vz4vv74.mp3"
    },
    {
        "name": "Kamala Harris Laugh",
        "color": "rgb(245, 153, 255)",
        "mp3": "/media/sounds/kamala-harris-laugh.mp3"
    },
    {
        "name": "Jennifers body ringtone",
        "color": "rgb(114, 65, 87)",
        "mp3": "/media/sounds/jennifers-body-ringtone.mp3"
    },
    {
        "name": "Undertaker Dong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-dong.mp3"
    },
    {
        "name": "IM IN MINECRAFT",
        "color": "rgb(44, 130, 255)",
        "mp3": "/media/sounds/im-in-minecraft.mp3"
    },
    {
        "name": "Едим говно с братаном",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/edim-govno-s-bratanom.mp3"
    },
    {
        "name": "br br patapim",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/br-br-patapim.mp3"
    },
    {
        "name": "(mafioso) just shut up and rage quit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
    },
    {
        "name": "Burger King man scream n word in a plane",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/burger-king-man-scream-n-word-in-a-plane.mp3"
    },
    {
        "name": "BIG MAN BLASTOISE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-man-blastoise.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "SEA SALT",
        "color": "rgb(0, 60, 255)",
        "mp3": "/media/sounds/sea-salt.mp3"
    },
    {
        "name": "Tu madre tiene una",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tu-madre-tiene-una_4GG4162.mp3"
    },
    {
        "name": "MIKU MIKU BEAM~!!!!",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/miku-miku-beam_PDYwm68.mp3"
    },
    {
        "name": "New Ford Chime",
        "color": "rgb(1, 7, 90)",
        "mp3": "/media/sounds/new-ford-chime.mp3"
    },
    {
        "name": "follower alert final fantasy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ff7_victory.mp3"
    },
    {
        "name": "[Shylily] Womp Womp",
        "color": "rgb(78, 66, 255)",
        "mp3": "/media/sounds/shylily-womp-womp.mp3"
    },
    {
        "name": "Nickelodeon",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/nickelodeon-nick-nick-nick-short.mp3"
    },
    {
        "name": "niggerlife",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerlife_9YQZKMS.mp3"
    },
    {
        "name": "O moreno ta ingnorante",
        "color": "rgb(255, 170, 176)",
        "mp3": "/media/sounds/o-moreno-ta-ingnorante.mp3"
    },
    {
        "name": "Lebron james (G.O.A.T)",
        "color": "rgb(160, 146, 146)",
        "mp3": "/media/sounds/lebron-james-g-o-a-t.mp3"
    },
    {
        "name": "TIE Fighter Flyby",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fly-by-6.mp3"
    },
    {
        "name": "gritos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gritos_Yt6F3eD.mp3"
    },
    {
        "name": "Risas de publico",
        "color": "rgb(59, 255, 226)",
        "mp3": "/media/sounds/risas-de-publico.mp3"
    },
    {
        "name": "Donald Trump - Wrong!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-movie_lu1KTdg.mp3"
    },
    {
        "name": "Ali-A Intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ali-a-intro-bass-boosted.mp3"
    },
    {
        "name": "Minecraft Advancement Challenge Complete",
        "color": "rgb(225, 103, 255)",
        "mp3": "/media/sounds/challenge_complete_uHsY1YS.mp3"
    },
    {
        "name": "light switch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/168860__orginaljun__light-switch-01.mp3"
    },
    {
        "name": "Formula 1 Car",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/formula-1-car.mp3"
    },
    {
        "name": "waitinggg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musique-dascenseur-mp3cut_RCcvQce.mp3"
    },
    {
        "name": "POKEMON ( German )",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-german.mp3"
    },
    {
        "name": "ICQ - Uh Oh",
        "color": "rgb(213, 0, 0)",
        "mp3": "/media/sounds/icq-uh-oh.mp3"
    },
    {
        "name": "KSI Thick Of It Brainrot",
        "color": "rgb(254, 255, 212)",
        "mp3": "/media/sounds/ksi-thick-of-it-brainrot.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Ramiel Attack Scream",
        "color": "rgb(20, 79, 255)",
        "mp3": "/media/sounds/ramiel-attack-scream.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "vine \"no nigga!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-no-nigga.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "brainrot cat",
        "color": "rgb(68, 255, 0)",
        "mp3": "/media/sounds/brainrot-cat.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "Maltigi",
        "color": "rgb(77, 234, 31)",
        "mp3": "/media/sounds/maltigi.mp3"
    },
    {
        "name": "Chinese Meme Song",
        "color": "rgb(181, 0, 0)",
        "mp3": "/media/sounds/chinese-meme-song.mp3"
    },
    {
        "name": "IM SORRY POOKIE BEAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-sorry-pookie-bear.mp3"
    },
    {
        "name": "br br patapim",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/br-br-patapim.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "я жирный уебан",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ia-zhirnyi-ueban.mp3"
    },
    {
        "name": "erikasongg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/erikasongg.mp3"
    },
    {
        "name": "tu sai de problema",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-sai-de-problema.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "TUNGTUNGTUNGSAHURR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tungtungtungsahurr.mp3"
    },
    {
        "name": "Spioniro Golubino",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/spioniro-golubino.mp3"
    },
    {
        "name": "Ballarina Cappucina",
        "color": "rgb(255, 52, 184)",
        "mp3": "/media/sounds/ballarina-cappucina.mp3"
    },
    {
        "name": "kaiser get on your knees blue lock",
        "color": "rgb(227, 227, 227)",
        "mp3": "/media/sounds/kaiser-get-on-your-knees-blue-lock.mp3"
    },
    {
        "name": "Тунг тунг тунг саур",
        "color": "rgb(255, 230, 45)",
        "mp3": "/media/sounds/tung-tung-tung-saur.mp3"
    },
    {
        "name": "Joe Hendry",
        "color": "rgb(167, 117, 255)",
        "mp3": "/media/sounds/joe-hendry.mp3"
    },
    {
        "name": "eunoia cake!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eunoia-cake.mp3"
    },
    {
        "name": "FNaF 1 phone call sound",
        "color": "rgb(73, 76, 142)",
        "mp3": "/media/sounds/fnaf-1-phone-call-sound.mp3"
    },
    {
        "name": "Whopper ad bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whopper-ad-bass-boosted.mp3"
    },
    {
        "name": "Mommy Milkers",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mommy-milkers.mp3"
    },
    {
        "name": "Nani?! Only",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_mkANQUf.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "FUNK FLEX BOMB",
        "color": "rgb(102, 153, 153)",
        "mp3": "/media/sounds/funkmaster-flex-bomb-sound-effect-from-youtube-by-offliberty.mp3"
    },
    {
        "name": "Amogus Full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2021-04-07-213841761.mp3"
    },
    {
        "name": "You Know the Rules, Say Goodbye",
        "color": "rgb(193, 0, 0)",
        "mp3": "/media/sounds/you-know-the-rules-and-so-do-i-say-goodbye.mp3"
    },
    {
        "name": "I have the power of god and anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i_have_the_power_of_god_and_anime_on_my_side.mp3"
    },
    {
        "name": "Street Fighter K.O",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlg-resource-street-fighter-ko-greenscreen.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Suspense strike",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
    },
    {
        "name": "THX",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/thx.mp3"
    },
    {
        "name": "Shotgun Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
    },
    {
        "name": "Crickets = MattHQ",
        "color": "rgb(153, 204, 102)",
        "mp3": "/media/sounds/crickets-hq.mp3"
    },
    {
        "name": "baby shark",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baby-shark-dance-sing-and-dance-animal-songs-pinkfong-songs-for-children-audiotrimmer.mp3"
    },
    {
        "name": "Yep That's me you...",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/original-yep-thats-me-youre-probably-wondering_vRBcfjS.mp3"
    },
    {
        "name": "FLASHBANG CSGO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-flashbang-sound-effect-cs-go.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "Valorant ace sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-ace-sound.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "Fat Bastard - Sorry I farted",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/my-song-7.mp3"
    },
    {
        "name": "Skype call",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/skype-call-sound-download-link-mp3cut.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "Animan Studios theme",
        "color": "rgb(255, 60, 231)",
        "mp3": "/media/sounds/animan-studios-theme_fEsuoxZ.mp3"
    },
    {
        "name": "AHHHH I Need a Medic Bag!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/medic-bag.mp3"
    },
    {
        "name": "what the hell oh my god no way",
        "color": "rgb(206, 50, 255)",
        "mp3": "/media/sounds/what-the-hell-oh-my-god-no-way.mp3"
    },
    {
        "name": "nokia tone sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nokia-ringtone-1994.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "Friday the 13th: Chchch-Ahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday_the_13th_sound_effect_test_chchch_ahahah_ki_ki_ki_ma_ma_malistenvid.mp3"
    },
    {
        "name": "Shadow milk cookie",
        "color": "rgb(47, 4, 255)",
        "mp3": "/media/sounds/shadow-milk-cookie.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "Dime qué estás orgulloso shifu",
        "color": "rgb(89, 205, 255)",
        "mp3": "/media/sounds/dime-que-estas-orgulloso-shifu.mp3"
    },
    {
        "name": "TRALALELO TRALALA но это песня",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalelo-tralala-no-eto-pesnia.mp3"
    },
    {
        "name": "Sexy saxophone music",
        "color": "rgb(159, 97, 255)",
        "mp3": "/media/sounds/sexy-saxophone-music.mp3"
    },
    {
        "name": "Ballarina Cappucina",
        "color": "rgb(255, 52, 184)",
        "mp3": "/media/sounds/ballarina-cappucina.mp3"
    },
    {
        "name": "Italian brainrot",
        "color": "rgb(34, 150, 255)",
        "mp3": "/media/sounds/italian-brainrot_R7FRRmg.mp3"
    },
    {
        "name": "In A MINUTE.",
        "color": "rgb(127, 88, 85)",
        "mp3": "/media/sounds/in-a-minute.mp3"
    },
    {
        "name": "TF2 Spy snort",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cocaine_snort.mp3"
    },
    {
        "name": "(Anakin)Then your my enemy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/then-your-my-enemy.mp3"
    },
    {
        "name": "Erwin Advance",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/erwin-advance.mp3"
    },
    {
        "name": "VAI TOMAR NO C* PIR4NH444",
        "color": "rgb(153, 11, 156)",
        "mp3": "/media/sounds/vai-tomar-no-c-pir4nh444.mp3"
    },
    {
        "name": "Optimum Prides",
        "color": "rgb(34, 35, 255)",
        "mp3": "/media/sounds/optimum-prides.mp3"
    },
    {
        "name": "boing chato",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound_2018_10_20_14_57_22_239_bbICkgQ.mp3"
    },
    {
        "name": "Batle Alarm Star Wars",
        "color": "rgb(255, 18, 14)",
        "mp3": "/media/sounds/battle-alarm.mp3"
    },
    {
        "name": "Filipino Curses",
        "color": "rgb(181, 0, 0)",
        "mp3": "/media/sounds/filipino-curses.mp3"
    },
    {
        "name": "Suicide Mickey laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/suicide-mickey-laugh.mp3"
    },
    {
        "name": "Help save me help",
        "color": "rgb(220, 255, 19)",
        "mp3": "/media/sounds/help-save-me-help.mp3"
    },
    {
        "name": "Shooter shit - Happy Gilmore",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/voice-140403_1.mp3"
    },
    {
        "name": "pizza tower parry sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pizza-tower-parry-sound.mp3"
    },
    {
        "name": "Up your Ass - Drive Thru",
        "color": "rgb(188, 0, 255)",
        "mp3": "/media/sounds/up-your-ass-drive-thru.mp3"
    },
    {
        "name": "IF I GOT TOO ~ Jersey Club",
        "color": "rgb(122, 255, 89)",
        "mp3": "/media/sounds/if-i-got-too-jersey-club.mp3"
    },
    {
        "name": "Macintosh 128K startup",
        "color": "rgb(255, 241, 196)",
        "mp3": "/media/sounds/macintosh-128k-startup.mp3"
    },
    {
        "name": "Power Macintosh 9500 Startup Sound",
        "color": "rgb(255, 169, 0)",
        "mp3": "/media/sounds/power-macintosh-9500-startup-sound.mp3"
    },
    {
        "name": "Mortal Kombat - Raiden 1",
        "color": "rgb(141, 223, 255)",
        "mp3": "/media/sounds/mk2-00686.mp3"
    },
    {
        "name": "Who is getting the best head? (theodore only )",
        "color": "rgb(0, 18, 255)",
        "mp3": "/media/sounds/who-is-getting-the-best-head-theodore-only.mp3"
    },
    {
        "name": "This is Sparta!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thisissparta.swf.mp3"
    },
    {
        "name": "Good Bad Ugly Whistle",
        "color": "rgb(255, 153, 153)",
        "mp3": "/media/sounds/goodbadugly-whistle-long.mp3"
    },
    {
        "name": "Donald Trump: Fake news",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/donald-trump-fake-news-sound-effect.mp3"
    },
    {
        "name": "Rap Battle OOOHHHH!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
    },
    {
        "name": "Beedle - Thank you!",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/ww_beedle_thankyou.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Pokemon Item received",
        "color": "rgb(0, 255, 157)",
        "mp3": "/media/sounds/129-received-an-item.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "RKO Out of Nowhere",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rko-outta-nowhere-jim-mcalister-and-gary-harkins.mp3"
    },
    {
        "name": "Law & Order",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/law-order-sound-effect-hq.mp3"
    },
    {
        "name": "AHHHH I Need a Medic Bag!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/medic-bag.mp3"
    },
    {
        "name": "Skyrim Level Up",
        "color": "rgb(51, 51, 153)",
        "mp3": "/media/sounds/42dfb7_skyrim_level_up_sound_effect.mp3"
    },
    {
        "name": "full squeak",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_full.mp3"
    },
    {
        "name": "Pika pika",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/pikachu-pika-pika-sound-fx.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "Little Caesars Pizza! Pizza!",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/little_caesars_pizza_ringtone.mp3"
    },
    {
        "name": "TOKYO DRIFT Teriyaki Boyz",
        "color": "rgb(244, 244, 244)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer_7vAtKUf.mp3"
    },
    {
        "name": "Angry Birds Laugh",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/angry-birds-laugh.mp3"
    },
    {
        "name": "Low Health / Critical Health Pokémon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/low-health-critical-health-pokemon.mp3"
    },
    {
        "name": "Aztec death whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-whistle-57.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "на колени на колени",
        "color": "rgb(36, 72, 93)",
        "mp3": "/media/sounds/na-koleni-na-koleni.mp3"
    },
    {
        "name": "Po Pi Po",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/po-pi-po-2.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "brain farts",
        "color": "rgb(153, 14, 255)",
        "mp3": "/media/sounds/brain-farts.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "which bomboclaat dog i am",
        "color": "rgb(97, 0, 0)",
        "mp3": "/media/sounds/which-bomboclaat-dog-i-am.mp3"
    },
    {
        "name": "squid game gunshot",
        "color": "rgb(255, 0, 216)",
        "mp3": "/media/sounds/squid-game-gunshot.mp3"
    },
    {
        "name": "Sukuna's ryoiki tenkai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sukunas-ryoiki-tenkai.mp3"
    },
    {
        "name": "clap wet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clap-wet.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "Fast whoosh",
        "color": "rgb(239, 249, 255)",
        "mp3": "/media/sounds/fast-whoosh.mp3"
    },
    {
        "name": "Leave me alone Akira",
        "color": "rgb(90, 7, 255)",
        "mp3": "/media/sounds/leave-me-alone-akira.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Kendrick Lamar Ahhhhh Scream",
        "color": "rgb(242, 255, 130)",
        "mp3": "/media/sounds/kendrick-lamar-ahhhhh-scream.mp3"
    },
    {
        "name": "light switch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/168860__orginaljun__light-switch-01.mp3"
    },
    {
        "name": "Nick/Disney Suprise Laugh Track “oooh “",
        "color": "rgb(255, 157, 10)",
        "mp3": "/media/sounds/nick-disney-suprise-laugh-track-oooh.mp3"
    },
    {
        "name": "Good grief he's naked!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-grief-hes-naked.mp3"
    },
    {
        "name": "Toriel talking SFX",
        "color": "rgb(183, 39, 255)",
        "mp3": "/media/sounds/audio-online-audio-converter_LL8xHqv.mp3"
    },
    {
        "name": "cupcakke goof",
        "color": "rgb(255, 176, 212)",
        "mp3": "/media/sounds/cupcakke-goof.mp3"
    },
    {
        "name": "BRAZIL ZIL",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/brazil-zil.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "scary movie wazzup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-movie-wazzup.mp3"
    },
    {
        "name": "\"Encara Messi\"",
        "color": "rgb(39, 39, 255)",
        "mp3": "/media/sounds/gol-messi-vs-getafe-narrat-per-puyal-full-hd-1080p-audiotrimmer.mp3"
    },
    {
        "name": "Real Foghorn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/real-foghorn.mp3"
    },
    {
        "name": "TOKYO DRIFT Teriyaki Boyz",
        "color": "rgb(244, 244, 244)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer_7vAtKUf.mp3"
    },
    {
        "name": "Peter Griffin Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-guy-singing-star-wars.mp3"
    },
    {
        "name": "Dracula Flow - They forgot I'm him",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dracula-flow-they-forgot-im-him.mp3"
    },
    {
        "name": "Sad Trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-trombone_CTCquhN.mp3"
    },
    {
        "name": "на колени на колени",
        "color": "rgb(36, 72, 93)",
        "mp3": "/media/sounds/na-koleni-na-koleni.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "Hollow Purple",
        "color": "rgb(150, 17, 142)",
        "mp3": "/media/sounds/hollow-purple.mp3"
    },
    {
        "name": "you're fucked",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-fucked.mp3"
    },
    {
        "name": "tom scream 2",
        "color": "rgb(57, 255, 19)",
        "mp3": "/media/sounds/tom_scream_ow.mp3"
    },
    {
        "name": "water splash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/watersplash.mp3"
    },
    {
        "name": "Quandale dingle escapes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quandale-dingle-escapes.mp3"
    },
    {
        "name": "HORROR SCARE",
        "color": "rgb(168, 0, 0)",
        "mp3": "/media/sounds/horrorscare.mp3"
    },
    {
        "name": "clap wet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clap-wet.mp3"
    },
    {
        "name": "Are you sure about that? JCena",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-sure-about-that_3D0ngHY.mp3"
    },
    {
        "name": "Wario Waaaaaaa",
        "color": "rgb(255, 249, 0)",
        "mp3": "/media/sounds/bank_00_instr_0036_snd_0000.mp3"
    },
    {
        "name": "kept you waitin, huh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kept.mp3"
    },
    {
        "name": "Baldi - All 7 Notebooks",
        "color": "rgb(0, 198, 7)",
        "mp3": "/media/sounds/baldi-all-7-notebooks.mp3"
    },
    {
        "name": "Observation Haki (One Piece Katakuri)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/observation_haki_one_piece_katakuri_sound_effect_for_editing_5356509840631764694.mp3"
    },
    {
        "name": "Its Lit Travis Scott",
        "color": "rgb(13, 11, 11)",
        "mp3": "/media/sounds/its-lit-travis-scott.mp3"
    },
    {
        "name": "Throw",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throw_d4CPY0G.mp3"
    },
    {
        "name": "Meme Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-click.mp3"
    },
    {
        "name": "Minecraft Dog Bark",
        "color": "rgb(210, 210, 210)",
        "mp3": "/media/sounds/minecraft-dog-bark.mp3"
    },
    {
        "name": "Loud phonk lol",
        "color": "rgb(43, 0, 255)",
        "mp3": "/media/sounds/loud-phonk-lol.mp3"
    },
    {
        "name": "Lucu viral",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lucu-viral.mp3"
    },
    {
        "name": "YES KING!!! ( alvin and the chipmunk version)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-alvin-and-the-chipmunk-version.mp3"
    },
    {
        "name": "slap ohh he needs some milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ohh-he-needs-some-milk.mp3"
    },
    {
        "name": "FAST REWIND",
        "color": "rgb(32, 234, 255)",
        "mp3": "/media/sounds/rewind-1.mp3"
    },
    {
        "name": "“hmm” rblx SE",
        "color": "rgb(156, 161, 255)",
        "mp3": "/media/sounds/hmm-rblx-se.mp3"
    },
    {
        "name": "chinese dream",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/chinese-dream.mp3"
    },
    {
        "name": "Kamala Harris Laugh",
        "color": "rgb(245, 153, 255)",
        "mp3": "/media/sounds/kamala-harris-laugh.mp3"
    },
    {
        "name": "ОХ ЗРЯ Я ТУДА ПОЛЕЗ",
        "color": "rgb(184, 255, 170)",
        "mp3": "/media/sounds/okh-zria-ia-tuda-polez.mp3"
    },
    {
        "name": "Shimmy ay shimmy ya (Mcdonalds)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shimmy-ay-shimmy-ya-mcdonalds.mp3"
    },
    {
        "name": "Invincible Empire Slave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invincible-empire-slave.mp3"
    },
    {
        "name": "Undertale undernet notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-sound-effect-undernet-notification.mp3"
    },
    {
        "name": "Pibby Glitch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pibby-glitch.mp3"
    },
    {
        "name": "Why you comming fast",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lqbyozdog5iqv7chd5oocxnizxvmzbqucsbc0uwl.mp3"
    },
    {
        "name": "Phonk tun tun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phonk-tun-tun.mp3"
    },
    {
        "name": "TF2 right behind you",
        "color": "rgb(59, 59, 59)",
        "mp3": "/media/sounds/tf2-right-behind-you.mp3"
    },
    {
        "name": "Level Complete || Geometry Dash",
        "color": "rgb(148, 134, 255)",
        "mp3": "/media/sounds/level-complete-geometry-dash.mp3"
    },
    {
        "name": "Violin suspense",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/violin-suspense.mp3"
    },
    {
        "name": "KABOOM THERE GOES YOUR TOWER",
        "color": "rgb(244, 255, 43)",
        "mp3": "/media/sounds/kaboom-there-goes-your-tower.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "Alex \"eu vou gozar\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alex-eu-vou-gozar.mp3"
    },
    {
        "name": "Videl Moans",
        "color": "rgb(203, 34, 255)",
        "mp3": "/media/sounds/videl-moans.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "Eating chips",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eating-chips.mp3"
    },
    {
        "name": "driftveil city",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/driftveil-city.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Discord Jebaiting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikejebait.mp3"
    },
    {
        "name": "Hallelujah",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/hallelujahshort.swf.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Do It- dooo0o0o0o0o0 eeewewet",
        "color": "rgb(0, 204, 51)",
        "mp3": "/media/sounds/do-eeeweweewet.mp3"
    },
    {
        "name": "clash royale laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-laugh.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "Real gunshot",
        "color": "rgb(153, 255, 255)",
        "mp3": "/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
    },
    {
        "name": "in the arms of an angel",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/in-the-arms-of-an-angel-sarah-mcla.mp3"
    },
    {
        "name": "Despicable me whistle song",
        "color": "rgb(255, 119, 119)",
        "mp3": "/media/sounds/despicable-me-whistle-song.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Betrayal - Halo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/betrayal_EKW4y6T.mp3"
    },
    {
        "name": "GunShoting",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/gunshot.mp3"
    },
    {
        "name": "Spongebob My Leg",
        "color": "rgb(253, 255, 3)",
        "mp3": "/media/sounds/my-leg_gtcfNMu.mp3"
    },
    {
        "name": "Perry the Platypus",
        "color": "rgb(255, 162, 67)",
        "mp3": "/media/sounds/perry-the-platypuss-growl.mp3"
    },
    {
        "name": "disgusting meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disgusting_WJOvrJj.mp3"
    },
    {
        "name": "Jeopardy Daily Double",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-daily-double-sound-effect-from-youtube_76mCCAq.mp3"
    },
    {
        "name": "SpongeBob levitating meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-levitating-meme.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "The Voice Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-voicechair-choice-button-sound-effect_fa4raAv.mp3"
    },
    {
        "name": "FlightReacts roast",
        "color": "rgb(255, 248, 27)",
        "mp3": "/media/sounds/video0_O2HJBzx.mp3"
    },
    {
        "name": "Mommy Milkers",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mommy-milkers.mp3"
    },
    {
        "name": "VIVA VOX VAMOS",
        "color": "rgb(41, 255, 0)",
        "mp3": "/media/sounds/viva-vox-vamos.mp3"
    },
    {
        "name": "Nokia startup",
        "color": "rgb(195, 253, 255)",
        "mp3": "/media/sounds/nokia_startup.mp3"
    },
    {
        "name": "Persona 5 battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/persona_5_battle-trimmed.mp3"
    },
    {
        "name": "Null Body - Aggro \"Hey\"",
        "color": "rgb(255, 145, 0)",
        "mp3": "/media/sounds/null-body-aggro-hey.mp3"
    },
    {
        "name": "Fortnite Sussy Balls",
        "color": "rgb(9, 255, 34)",
        "mp3": "/media/sounds/fortnite-sussy-balls_3poh4jV.mp3"
    },
    {
        "name": "BotW - Fanfare Heart Container",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/botw-fanfare-heart-container-.mp3"
    },
    {
        "name": "Toad Oh Yeah",
        "color": "rgb(0, 86, 255)",
        "mp3": "/media/sounds/toad-oh-yeah.mp3"
    },
    {
        "name": "YAH DON'T SAY THTA",
        "color": "rgb(255, 196, 241)",
        "mp3": "/media/sounds/yah-dont-say-thta.mp3"
    },
    {
        "name": "iggy koopa defeat",
        "color": "rgb(28, 255, 20)",
        "mp3": "/media/sounds/iggy-koopa-defeat.mp3"
    },
    {
        "name": "Pizza Tower Lap 2 Start SFX",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/pizza-tower-lap-2-start-sfx.mp3"
    },
    {
        "name": "Deedledeedledeewhooooop",
        "color": "rgb(51, 51, 102)",
        "mp3": "/media/sounds/402.mp3"
    },
    {
        "name": "DA BABY LET'S GOOOOOOO",
        "color": "rgb(0, 8, 255)",
        "mp3": "/media/sounds/vibez-lets-go.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Pink Panther",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-pink-panther-theme-song-original-version.mp3"
    },
    {
        "name": "HOLD UP WAIT A MINUTE SOMETHIN",
        "color": "rgb(37, 255, 30)",
        "mp3": "/media/sounds/untitled_OTuNHvt.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "Spongebob - I NEED IT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tv-quotables-i-need-it-spongebob-squarepants.mp3"
    },
    {
        "name": "Xue Hua piao piao bei feng Xiao xiao",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/xue-hua-piao-piao.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "Get up meek mill",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-up-meek-mill.mp3"
    },
    {
        "name": "lol mising ping",
        "color": "rgb(255, 30, 30)",
        "mp3": "/media/sounds/ping_missing.mp3"
    },
    {
        "name": "Jeopardy Theme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/jeopardy-theme-lowq.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Windows 3.1 startup (tada)",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/win31.mp3"
    },
    {
        "name": "Man Beatboxing Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-beatboxing-meme-online-audio-converter.mp3"
    },
    {
        "name": "Mission Impossible",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/m3.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "Confused cross eyed kitten meme",
        "color": "rgb(47, 22, 255)",
        "mp3": "/media/sounds/confused-cross-eyed-kitten-meme.mp3"
    },
    {
        "name": "ICQ - Uh Oh",
        "color": "rgb(213, 0, 0)",
        "mp3": "/media/sounds/icq-uh-oh.mp3"
    },
    {
        "name": "KSI Thick Of It Brainrot",
        "color": "rgb(254, 255, 212)",
        "mp3": "/media/sounds/ksi-thick-of-it-brainrot.mp3"
    },
    {
        "name": "Hindi Totoo Yan - BABALU",
        "color": "rgb(17, 255, 255)",
        "mp3": "/media/sounds/hindi-totoo-yan-babalu.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Asian Diversity South Park",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-diversity-south-park.mp3"
    },
    {
        "name": "They Love Crushing Loaf",
        "color": "rgb(174, 163, 120)",
        "mp3": "/media/sounds/they-love-crushing-loaf.mp3"
    },
    {
        "name": "Ramiel Attack Scream",
        "color": "rgb(20, 79, 255)",
        "mp3": "/media/sounds/ramiel-attack-scream.mp3"
    },
    {
        "name": "Hello This is Kitty!",
        "color": "rgb(240, 43, 255)",
        "mp3": "/media/sounds/hello-this-is-kitty.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "Trump - I love tesler",
        "color": "rgb(255, 145, 0)",
        "mp3": "/media/sounds/trump-i-love-tesler_5FwwWs1.mp3"
    },
    {
        "name": "Это не просто член",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eto-ne-prosto-chlen_8sua431.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "brainrot cat",
        "color": "rgb(68, 255, 0)",
        "mp3": "/media/sounds/brainrot-cat.mp3"
    },
    {
        "name": "Maltigi",
        "color": "rgb(77, 234, 31)",
        "mp3": "/media/sounds/maltigi.mp3"
    },
    {
        "name": "Chinese Meme Song",
        "color": "rgb(181, 0, 0)",
        "mp3": "/media/sounds/chinese-meme-song.mp3"
    },
    {
        "name": "IM SORRY POOKIE BEAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-sorry-pookie-bear.mp3"
    },
    {
        "name": "angy monkey.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angy-monkey-mp3.mp3"
    },
    {
        "name": "low tier gabriel ultrakill",
        "color": "rgb(255, 250, 60)",
        "mp3": "/media/sounds/low-tier-gabriel-ultrakill.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "erikasongg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/erikasongg.mp3"
    },
    {
        "name": "tu sai de problema",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-sai-de-problema.mp3"
    },
    {
        "name": "Орёл",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oriol_wDERDe6.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "TUNGTUNGTUNGSAHURR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tungtungtungsahurr.mp3"
    },
    {
        "name": "Spioniro Golubino",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/spioniro-golubino.mp3"
    },
    {
        "name": "I hate nigrs,fuck nigrs",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/i-hate-nigrs-fuck-nigrs.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "eunoia cake!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eunoia-cake.mp3"
    },
    {
        "name": "Chewbacca ROAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chewy_roar.mp3"
    },
    {
        "name": "NININININI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/runs-in-circles_quote.mp3"
    },
    {
        "name": "You were the chosen one (Star Wars).",
        "color": "rgb(163, 41, 41)",
        "mp3": "/media/sounds/you-were-the-chosen-one-star-wars.mp3"
    },
    {
        "name": "FNaF 1 phone call sound",
        "color": "rgb(73, 76, 142)",
        "mp3": "/media/sounds/fnaf-1-phone-call-sound.mp3"
    },
    {
        "name": "pastor mirim",
        "color": "rgb(104, 255, 66)",
        "mp3": "/media/sounds/pastor-mirim.mp3"
    },
    {
        "name": "Whopper ad bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whopper-ad-bass-boosted.mp3"
    },
    {
        "name": "Super Mario Bros Music",
        "color": "rgb(253, 86, 255)",
        "mp3": "/media/sounds/super-mario-bros-music.mp3"
    },
    {
        "name": "Concrete scrape meme sound",
        "color": "rgb(170, 255, 95)",
        "mp3": "/media/sounds/concrete-scrape-meme-sound.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НА**Й",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-na-i.mp3"
    },
    {
        "name": "Severance Elevator Outie Innie",
        "color": "rgb(147, 190, 255)",
        "mp3": "/media/sounds/severance-elevator-outie-innie.mp3"
    },
    {
        "name": "Сияй Мага",
        "color": "rgb(49, 60, 167)",
        "mp3": "/media/sounds/siiai-maga.mp3"
    },
    {
        "name": "GYYAAAAAT!!!",
        "color": "rgb(255, 174, 230)",
        "mp3": "/media/sounds/gyyaaaaat.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "DISTURBING THE PEACE",
        "color": "rgb(12, 194, 255)",
        "mp3": "/media/sounds/disturbing-the-peace.mp3"
    },
    {
        "name": "Nervous Gulp",
        "color": "rgb(255, 208, 161)",
        "mp3": "/media/sounds/nervous-gulp.mp3"
    },
    {
        "name": "AAHHHHHHH RICOLAS - Joel Gonzales",
        "color": "rgb(255, 191, 15)",
        "mp3": "/media/sounds/aahhhhhhh-ricolas-joel-gonzales.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "FIVE BIG BOOMS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-big-booms.mp3"
    },
    {
        "name": "el rap de peru",
        "color": "rgb(131, 94, 27)",
        "mp3": "/media/sounds/el-rap-de-peru.mp3"
    },
    {
        "name": "Putangina-Sound-Meme.mp4",
        "color": "rgb(141, 61, 32)",
        "mp3": "/media/sounds/putangina-sound-meme-mp4.mp3"
    },
    {
        "name": "niggaalesx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggaalesx.mp3"
    },
    {
        "name": "#Tripi Tropi Tropatripa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tripi-tropi-tropatripa.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "Lula empurra mole",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lula-empurra-mole.mp3"
    },
    {
        "name": "yes king why why why why....",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-why-why-why-why.mp3"
    },
    {
        "name": "Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lava-chicken.mp3"
    },
    {
        "name": "Bolsonaro Popcorn and Ice Cream",
        "color": "rgb(255, 113, 223)",
        "mp3": "/media/sounds/bolsonaro-popcorn-and-ice-cream.mp3"
    },
    {
        "name": "Videl Moans",
        "color": "rgb(203, 34, 255)",
        "mp3": "/media/sounds/videl-moans.mp3"
    },
    {
        "name": "chicken jockey WW3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey-ww3.mp3"
    },
    {
        "name": "Thud sound",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/thud-sound.mp3"
    },
    {
        "name": "Chipmunk Dying",
        "color": "rgb(129, 0, 0)",
        "mp3": "/media/sounds/chipmunk-dying.mp3"
    },
    {
        "name": "Chewbacca ROAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chewy_roar.mp3"
    },
    {
        "name": "Coolkid Hak tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coolkid-hak-tuah.mp3"
    },
    {
        "name": "CHICKEN JOCKEY FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey-funk.mp3"
    },
    {
        "name": "F*** YOU YOU OLD B****",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f-you-you-old-b.mp3"
    },
    {
        "name": "ITS PIKACHU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-pikachu_ecUb5Pn.mp3"
    },
    {
        "name": "Cartoon Spring",
        "color": "rgb(43, 246, 255)",
        "mp3": "/media/sounds/cartoon-spring.mp3"
    },
    {
        "name": "6AM (FNaF 2)",
        "color": "rgb(13, 0, 119)",
        "mp3": "/media/sounds/6am-fnaf-2.mp3"
    },
    {
        "name": "niggeralarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggeralarm_2GVPPUX.mp3"
    },
    {
        "name": "you a poopy pants",
        "color": "rgb(119, 241, 255)",
        "mp3": "/media/sounds/you-a-poopy-pants.mp3"
    },
    {
        "name": "Enderdragon Death Sound",
        "color": "rgb(73, 0, 101)",
        "mp3": "/media/sounds/minecraft-1.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "brain farts",
        "color": "rgb(153, 14, 255)",
        "mp3": "/media/sounds/brain-farts.mp3"
    },
    {
        "name": "clock tick",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/clock-tick.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "which bomboclaat dog i am",
        "color": "rgb(97, 0, 0)",
        "mp3": "/media/sounds/which-bomboclaat-dog-i-am.mp3"
    },
    {
        "name": "squid game gunshot",
        "color": "rgb(255, 0, 216)",
        "mp3": "/media/sounds/squid-game-gunshot.mp3"
    },
    {
        "name": "AirPods Low Battery Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/airpods-low-battery-sound-effect_daDRTyp.mp3"
    },
    {
        "name": "OUI OUI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_DO1kVeR.mp3"
    },
    {
        "name": "El señor de la noche - Don Omar",
        "color": "rgb(58, 255, 58)",
        "mp3": "/media/sounds/el-senor-de-la-noche-don-omar.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "Fast whoosh",
        "color": "rgb(239, 249, 255)",
        "mp3": "/media/sounds/fast-whoosh.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "Leave me alone Akira",
        "color": "rgb(90, 7, 255)",
        "mp3": "/media/sounds/leave-me-alone-akira.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Kendrick Lamar Ahhhhh Scream",
        "color": "rgb(242, 255, 130)",
        "mp3": "/media/sounds/kendrick-lamar-ahhhhh-scream.mp3"
    },
    {
        "name": "light switch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/168860__orginaljun__light-switch-01.mp3"
    },
    {
        "name": "Nick/Disney Suprise Laugh Track “oooh “",
        "color": "rgb(255, 157, 10)",
        "mp3": "/media/sounds/nick-disney-suprise-laugh-track-oooh.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "Good grief he's naked!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-grief-hes-naked.mp3"
    },
    {
        "name": "Toriel talking SFX",
        "color": "rgb(183, 39, 255)",
        "mp3": "/media/sounds/audio-online-audio-converter_LL8xHqv.mp3"
    },
    {
        "name": "É q eu tô meio gripadinha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
    },
    {
        "name": "LAUGHING Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laughing_baby.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "Undertale phone ring",
        "color": "rgb(143, 137, 129)",
        "mp3": "/media/sounds/phone_ring.mp3"
    },
    {
        "name": "geometry dash",
        "color": "rgb(255, 241, 0)",
        "mp3": "/media/sounds/geometry-dash.mp3"
    },
    {
        "name": "Que rricoh eh",
        "color": "rgb(49, 33, 33)",
        "mp3": "/media/sounds/que-rricoh-eh.mp3"
    },
    {
        "name": "KSI Thick Of It Brainrot",
        "color": "rgb(254, 255, 212)",
        "mp3": "/media/sounds/ksi-thick-of-it-brainrot.mp3"
    },
    {
        "name": "Hindi Totoo Yan - BABALU",
        "color": "rgb(17, 255, 255)",
        "mp3": "/media/sounds/hindi-totoo-yan-babalu.mp3"
    },
    {
        "name": "Listen Navi",
        "color": "rgb(153, 176, 255)",
        "mp3": "/media/sounds/listen-navi.mp3"
    },
    {
        "name": "They Love Crushing Loaf",
        "color": "rgb(174, 163, 120)",
        "mp3": "/media/sounds/they-love-crushing-loaf.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "I can't stop winning!",
        "color": "rgb(0, 255, 38)",
        "mp3": "/media/sounds/i-cant-stop-winning.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "Chinese Meme Song",
        "color": "rgb(181, 0, 0)",
        "mp3": "/media/sounds/chinese-meme-song.mp3"
    },
    {
        "name": "roblox reporter yapping",
        "color": "rgb(80, 210, 255)",
        "mp3": "/media/sounds/roblox-reporter-yapping.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Angel choir with sound effect",
        "color": "rgb(229, 255, 215)",
        "mp3": "/media/sounds/angelchoirmarktreekort.mp3"
    },
    {
        "name": "woah what the hell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woah-what-the-hell.mp3"
    },
    {
        "name": "goofy ahh fart",
        "color": "rgb(73, 228, 255)",
        "mp3": "/media/sounds/goofy-ahh-fart.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "Mesg ting",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mesg-ting.mp3"
    },
    {
        "name": "Crash!5",
        "color": "rgb(195, 255, 255)",
        "mp3": "/media/sounds/crash_5mE1q2P.mp3"
    },
    {
        "name": "Crowd Cheer + Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-cheering-applause.mp3"
    },
    {
        "name": "Typing Sound (efffect)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/typing-sound-efffect.mp3"
    },
    {
        "name": "Desk slam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/desk-slam_YabSxhJ.mp3"
    },
    {
        "name": "Look Easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/look-easy_JX3Yu5M.mp3"
    },
    {
        "name": "Did you just talk back to me? - Yes King",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/did-you-just-talk-back-to-me-yes-king.mp3"
    },
    {
        "name": "One Hour Later",
        "color": "rgb(12, 6, 255)",
        "mp3": "/media/sounds/one-hour-later_WxxwKIJ.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "É q eu tô meio gripadinha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
    },
    {
        "name": "TF2 Spy Death Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tf2-spy-death-scream.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "What the Hell Omg no way air raid goofy ahh",
        "color": "rgb(77, 255, 0)",
        "mp3": "/media/sounds/what-the-hell-omg-no-way-air-raid-goofy-ahh.mp3"
    },
    {
        "name": "corn hub intro",
        "color": "rgb(255, 100, 11)",
        "mp3": "/media/sounds/corn-hub-intro.mp3"
    },
    {
        "name": "Crowd Aww",
        "color": "rgb(251, 255, 73)",
        "mp3": "/media/sounds/crowd-aww.mp3"
    },
    {
        "name": "Cheaper Town Hall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cheaper-town-hall.mp3"
    },
    {
        "name": "I CAN'T PUT DOWN THE CUP Dave Blunts",
        "color": "rgb(145, 41, 197)",
        "mp3": "/media/sounds/i-cant-put-down-the-cup-dave-blunts.mp3"
    },
    {
        "name": "RAWR (goofy ahh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rawr-goofy-ahh.mp3"
    },
    {
        "name": "I can't stop winning!",
        "color": "rgb(0, 255, 38)",
        "mp3": "/media/sounds/i-cant-stop-winning.mp3"
    },
    {
        "name": "GYYAAAAAT!!!",
        "color": "rgb(255, 174, 230)",
        "mp3": "/media/sounds/gyyaaaaat.mp3"
    },
    {
        "name": "mouse click by ek6",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click-by-ek6_VR0O6PL.mp3"
    },
    {
        "name": "Hola tururururururururururu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hola-tururururururururururu.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "Clock Ticking JS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clock-ticking-js.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "Nose Blowing",
        "color": "rgb(89, 255, 30)",
        "mp3": "/media/sounds/nose-blow-sound.mp3"
    },
    {
        "name": "kanye-east-fortnite-balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-east-fortnite-balls_NguabuF.mp3"
    },
    {
        "name": "el rap de peru",
        "color": "rgb(131, 94, 27)",
        "mp3": "/media/sounds/el-rap-de-peru.mp3"
    },
    {
        "name": "niggaalesx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggaalesx.mp3"
    }
]