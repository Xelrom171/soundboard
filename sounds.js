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
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "OW OH P DIDDY NO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ow-oh-p-diddy-no.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "Moannnnnygs727272",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moannnnnygs727272.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
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
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "flashbanggg",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/flashbanggg.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "Bombardiro Crocodiro (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardiro-crocodiro-italian-brainrot.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "Bombardiro Crocodiro (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardiro-crocodiro-italian-brainrot.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
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
        "name": "Door Open AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/open-aim.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "Door Close AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exit-aim.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "Door Close AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exit-aim.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "**Gay**",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay_CRD979V.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "Tralalero Tralala Meme",
        "color": "rgb(159, 178, 197)",
        "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "niggaalesx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggaalesx.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "What the Helly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "I Love, I Love Her (R.E.P.O)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-i-love-her-r-e-p-o.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "**Gay**",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay_CRD979V.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "niggaalesx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggaalesx.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
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
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Cowboy Standoff",
        "color": "rgb(181, 101, 62)",
        "mp3": "/media/sounds/cowboy-standoff.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Bombarding crocodiloo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombarding-crocodiloo.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diddy-done.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "why are you gay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-you-gay.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
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
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "SWAMP IZZO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/swamp-izzo.mp3"
    },
    {
        "name": "Lego Yoda Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pedro-song.mp3"
    },
    {
        "name": "sigma boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sigma-boy.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "moanlol",
        "color": "rgb(1, 255, 219)",
        "mp3": "/media/sounds/moanlol.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-t.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "I came",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/i-came.mp3"
    },
    {
        "name": "(mafioso) just shut up and rage quit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "Panther Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panther3.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "tralarero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralarero-tralala.mp3"
    },
    {
        "name": "Tung Tung Tung Sahur :)))",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_3ZlEMck.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "Acho que eu to doente",
        "color": "rgb(49, 94, 255)",
        "mp3": "/media/sounds/acho-que-eu-to-doente.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "SCP 096",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/096_4.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "Gayyyy",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/gayyy.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "С Х**ЛИ ТИША ТАКАЯ!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/s-kh-li-tisha-takaia.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "Acho que eu to doente",
        "color": "rgb(49, 94, 255)",
        "mp3": "/media/sounds/acho-que-eu-to-doente.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "simp over girls on discord",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/simp-over-girls-on-discord.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "huh? rblx SE",
        "color": "rgb(224, 255, 234)",
        "mp3": "/media/sounds/huh-rblx-se.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "Michael Jackson Hee Hee",
        "color": "rgb(160, 0, 0)",
        "mp3": "/media/sounds/michael-jackson-hee-hee.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "goofy ahhhh uncle",
        "color": "rgb(174, 61, 255)",
        "mp3": "/media/sounds/goofy-ahhhh-uncle.mp3"
    },
    {
        "name": "Pika pika",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/pikachu-pika-pika-sound-fx.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "С Х**ЛИ ТИША ТАКАЯ!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/s-kh-li-tisha-takaia.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "wiwiwi kitten",
        "color": "rgb(114, 102, 123)",
        "mp3": "/media/sounds/wiwiwi-kitten.mp3"
    },
    {
        "name": "Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/counter-strike-jingle-cs-radio-enemy-spotted.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "TRALALERO FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-funk.mp3"
    },
    {
        "name": "Hotspot brainrot",
        "color": "rgb(23, 19, 19)",
        "mp3": "/media/sounds/hotspot-brainrot.mp3"
    },
    {
        "name": "noo la policia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noo-la-policia.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "/media/sounds/67.mp3"
    },
    {
        "name": "I'm omniing it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-omniing-it.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "Technoloyia Technologia Tecnologia",
        "color": "rgb(117, 255, 151)",
        "mp3": "/media/sounds/technoloyia-technologia-tecnologia.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Hawk Tuah (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hawk-tuah-short.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "simp over girls on discord",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/simp-over-girls-on-discord.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "chicken jockey (BASS BOOSTED)",
        "color": "rgb(9, 181, 12)",
        "mp3": "/media/sounds/chicken-jockey-bass-boosted.mp3"
    },
    {
        "name": "TRALALERO TRA LA LA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tra-la-la.mp3"
    },
    {
        "name": "Technoloyia Technologia Tecnologia",
        "color": "rgb(117, 255, 151)",
        "mp3": "/media/sounds/technoloyia-technologia-tecnologia.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "I like ya and I want ya",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/i-like-ya-and-i-want-ya.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "Pornoghtraz gayyey mmeme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pornoghtraz-gayyey-mmeme.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "(Anakin) I hate you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hate-you_CJxWsxV.mp3"
    },
    {
        "name": "Did you just talk back to me? - Yes King",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/did-you-just-talk-back-to-me-yes-king.mp3"
    },
    {
        "name": "CUPCAKKE AWWH!",
        "color": "rgb(255, 16, 150)",
        "mp3": "/media/sounds/cupcakke-awwh.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "TF2 bonk",
        "color": "rgb(250, 0, 255)",
        "mp3": "/media/sounds/tf2-bonk.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "This is Jeopardy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-intro-1.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "goofy ahhhh uncle",
        "color": "rgb(174, 61, 255)",
        "mp3": "/media/sounds/goofy-ahhhh-uncle.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "huh? rblx SE",
        "color": "rgb(224, 255, 234)",
        "mp3": "/media/sounds/huh-rblx-se.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Chimpanzini bananini",
        "color": "rgb(131, 36, 255)",
        "mp3": "/media/sounds/chimpanzini-bananini_UIisnEp.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
    },
    {
        "name": "goofy ahhhh uncle",
        "color": "rgb(174, 61, 255)",
        "mp3": "/media/sounds/goofy-ahhhh-uncle.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "Gucci mane - yehhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gucci-mane-yeehhhh_cnp7DAd.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "30 Mins",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ontiva_E2NG2X2.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "akrobeto",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akrobeto.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "TF2 bonk",
        "color": "rgb(250, 0, 255)",
        "mp3": "/media/sounds/tf2-bonk.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "PUM IMPACTO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/pum-impacto.mp3"
    },
    {
        "name": "Spongebob - Bald",
        "color": "rgb(255, 236, 22)",
        "mp3": "/media/sounds/spongebob-bald.mp3"
    },
    {
        "name": "CUPCAKKE AWWH!",
        "color": "rgb(255, 16, 150)",
        "mp3": "/media/sounds/cupcakke-awwh.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "I'm Going to Kill You, And then Kill you again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "This is Jeopardy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-intro-1.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "goofy ahhhh uncle",
        "color": "rgb(174, 61, 255)",
        "mp3": "/media/sounds/goofy-ahhhh-uncle.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Lingan guli wacha",
        "color": "rgb(255, 24, 47)",
        "mp3": "/media/sounds/lingan-guli-wacha.mp3"
    },
    {
        "name": "Lingan guli don pollo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lingan-guli-don-pollo.mp3"
    },
    {
        "name": "DJ Stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-stop.mp3"
    },
    {
        "name": "Disappear Scream",
        "color": "rgb(255, 248, 193)",
        "mp3": "/media/sounds/disappear-scream.mp3"
    },
    {
        "name": "yeaa! rblx SE",
        "color": "rgb(213, 255, 25)",
        "mp3": "/media/sounds/yeaa-rblx-se.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kasongo.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "goofy ahhhh uncle",
        "color": "rgb(174, 61, 255)",
        "mp3": "/media/sounds/goofy-ahhhh-uncle.mp3"
    },
    {
        "name": "PUM IMPACTO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/pum-impacto.mp3"
    },
    {
        "name": "Disappear Scream",
        "color": "rgb(255, 248, 193)",
        "mp3": "/media/sounds/disappear-scream.mp3"
    },
    {
        "name": "CUPCAKKE AWWH!",
        "color": "rgb(255, 16, 150)",
        "mp3": "/media/sounds/cupcakke-awwh.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "TRALALERO FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-funk.mp3"
    },
    {
        "name": "Chimpanzini bananini",
        "color": "rgb(131, 36, 255)",
        "mp3": "/media/sounds/chimpanzini-bananini_UIisnEp.mp3"
    },
    {
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
    },
    {
        "name": "yoshi waaah",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/yoshi-waaah.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bottom.mp3"
    },
    {
        "name": "The Rock Shut Up",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/the-rock-shut-up.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "The Rock Shut Up",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/the-rock-shut-up.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "I am Steve (minecraft movie)",
        "color": "rgb(255, 25, 232)",
        "mp3": "/media/sounds/i-am-steve-minecraft-movie.mp3"
    },
    {
        "name": "DJ Stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-stop.mp3"
    },
    {
        "name": "Chicken banana",
        "color": "rgb(255, 254, 52)",
        "mp3": "/media/sounds/chicken-banana.mp3"
    },
    {
        "name": "M16 Burst Shot Long Interior",
        "color": "rgb(112, 158, 100)",
        "mp3": "/media/sounds/m16-burst-shot-long-interior.mp3"
    },
    {
        "name": "el rap de peru",
        "color": "rgb(131, 94, 27)",
        "mp3": "/media/sounds/el-rap-de-peru.mp3"
    },
    {
        "name": "Bobrini Cocococini",
        "color": "rgb(157, 93, 59)",
        "mp3": "/media/sounds/bobrini-cocococini.mp3"
    },
    {
        "name": "Trullimero Trullicina",
        "color": "rgb(34, 244, 255)",
        "mp3": "/media/sounds/trullimero-trullicina.mp3"
    },
    {
        "name": "Family Guy Opening Scene",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/family-guy-opening-scene.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "It's Time to kick ass",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/duke_nukem_time_to_kick_ass.mp3"
    },
    {
        "name": "Courage speak",
        "color": "rgb(213, 139, 255)",
        "mp3": "/media/sounds/courage-speak.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Salamalekum Don Pollo",
        "color": "rgb(59, 117, 109)",
        "mp3": "/media/sounds/salamalekum-don-pollo.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "geometry dash",
        "color": "rgb(255, 241, 0)",
        "mp3": "/media/sounds/geometry-dash.mp3"
    },
    {
        "name": "Вы чё все геи чоли тут?",
        "color": "rgb(94, 250, 255)",
        "mp3": "/media/sounds/vy-chio-vse-gei-choli-tut.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "It's Time to kick ass",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/duke_nukem_time_to_kick_ass.mp3"
    },
    {
        "name": "Courage speak",
        "color": "rgb(213, 139, 255)",
        "mp3": "/media/sounds/courage-speak.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Super Mario Beedoo (Normalized)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-beedoo-normalized.mp3"
    },
    {
        "name": "Salamalekum Don Pollo",
        "color": "rgb(59, 117, 109)",
        "mp3": "/media/sounds/salamalekum-don-pollo.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "geometry dash",
        "color": "rgb(255, 241, 0)",
        "mp3": "/media/sounds/geometry-dash.mp3"
    },
    {
        "name": "Вы чё все геи чоли тут?",
        "color": "rgb(94, 250, 255)",
        "mp3": "/media/sounds/vy-chio-vse-gei-choli-tut.mp3"
    },
    {
        "name": "Flights Laugh",
        "color": "rgb(8, 166, 255)",
        "mp3": "/media/sounds/flights-laugh.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "Chicken Jockey!!!",
        "color": "rgb(85, 255, 0)",
        "mp3": "/media/sounds/chicken-jockey_GjALZqG.mp3"
    },
    {
        "name": "pastor mirim",
        "color": "rgb(104, 255, 66)",
        "mp3": "/media/sounds/pastor-mirim.mp3"
    },
    {
        "name": "Gruesome Smite",
        "color": "rgb(69, 0, 0)",
        "mp3": "/media/sounds/gruesome-smite.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Jeopardy Correct Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rightanswer.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Hello! Mine Turtle",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/hello-trailer_01.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "Aizen Yokoso Full",
        "color": "rgb(77, 243, 255)",
        "mp3": "/media/sounds/aizen-yokoso-full.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kasongo.mp3"
    },
    {
        "name": "Amazed Emote Animal Crossing",
        "color": "rgb(158, 61, 255)",
        "mp3": "/media/sounds/amazed-emote-animal-crossing.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Tuturu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuturu_1.mp3"
    },
    {
        "name": "Boom! Headshot!",
        "color": "rgb(153, 102, 204)",
        "mp3": "/media/sounds/boomheadshot.swf.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
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
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Horse Neigh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-neighing-sound-effect.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "Blood Splatter",
        "color": "rgb(53, 70, 255)",
        "mp3": "/media/sounds/blood-splatter.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "family guy transition",
        "color": "rgb(255, 133, 237)",
        "mp3": "/media/sounds/family-guy-transition.mp3"
    },
    {
        "name": "Chicken jockey (perfect) [fixed]",
        "color": "rgb(255, 137, 248)",
        "mp3": "/media/sounds/chicken-jockey-perfect-fixed.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "tom da tank meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-version_7n1qEm2.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "You Know the Rules, Say Goodbye",
        "color": "rgb(193, 0, 0)",
        "mp3": "/media/sounds/you-know-the-rules-and-so-do-i-say-goodbye.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Pink Panther",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-pink-panther-theme-song-original-version.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "im spongebob",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/im-spongebob.mp3"
    },
    {
        "name": "Ed Edd n Eddy Subaluwa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ed-edd-n-eddy-subaluwa-full-best-version_z4mgiJw.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "packgod 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-2.mp3"
    },
    {
        "name": "Hitting that Spot",
        "color": "rgb(49, 34, 255)",
        "mp3": "/media/sounds/hitting-that-spot.mp3"
    },
    {
        "name": "'What'meme",
        "color": "rgb(112, 237, 205)",
        "mp3": "/media/sounds/what_JOcN7Y8.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "Tralalelo Tralala Phonk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalelo-tralala-phonk.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "pokemon level up yellow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-red_blue_yellow-level-up-sound-effect_4Oicx8D.mp3"
    },
    {
        "name": "Snap sound",
        "color": "rgb(255, 230, 10)",
        "mp3": "/media/sounds/snap-sound.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "cod zombies scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-zombie-yell-meme-sound-effect.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "Chicken jockey (perfect) [fixed]",
        "color": "rgb(255, 137, 248)",
        "mp3": "/media/sounds/chicken-jockey-perfect-fixed.mp3"
    },
    {
        "name": "Chicken Jockey!!!",
        "color": "rgb(85, 255, 0)",
        "mp3": "/media/sounds/chicken-jockey_GjALZqG.mp3"
    },
    {
        "name": "pastor mirim",
        "color": "rgb(104, 255, 66)",
        "mp3": "/media/sounds/pastor-mirim.mp3"
    },
    {
        "name": "im peppa pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-peppa-pig.mp3"
    },
    {
        "name": "Gruesome Smite",
        "color": "rgb(69, 0, 0)",
        "mp3": "/media/sounds/gruesome-smite.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Hello! Mine Turtle",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/hello-trailer_01.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "undertale strike sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-sound-effect-attack-hit.mp3"
    },
    {
        "name": "Again fetty wap",
        "color": "rgb(165, 245, 255)",
        "mp3": "/media/sounds/again-fetty-wap.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "Bang Bang Skeet Skeet",
        "color": "rgb(26, 6, 175)",
        "mp3": "/media/sounds/bang-bang-skeet-skeet.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "Tecnologia Meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tecnologia-meme.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kasongo.mp3"
    },
    {
        "name": "Jeopardy Board fill 2016",
        "color": "rgb(0, 34, 255)",
        "mp3": "/media/sounds/jeopardy-board-fill-sound-2016-present-cleaner-version.mp3"
    },
    {
        "name": "That Little Puff Laugh Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that-little-puff-laugh-sound-effect.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "I like ya and I want ya",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/i-like-ya-and-i-want-ya.mp3"
    },
    {
        "name": "Spider-Man thwip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spider-man-customized-web-thwip-sound-effect-1_ybmate.mp3"
    },
    {
        "name": "Again fetty wap",
        "color": "rgb(165, 245, 255)",
        "mp3": "/media/sounds/again-fetty-wap.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Happy happy happy cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/happy-happy-happy-cat.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "brain fart slowed but its more violent (+reverb)",
        "color": "rgb(146, 5, 5)",
        "mp3": "/media/sounds/brain-fart-slowed-but-its-more-violent-reverb.mp3"
    },
    {
        "name": "Disappear Scream",
        "color": "rgb(255, 248, 193)",
        "mp3": "/media/sounds/disappear-scream.mp3"
    },
    {
        "name": "Buzzer error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buzzer-error.mp3"
    },
    {
        "name": "The Moon Haunts You",
        "color": "rgb(100, 255, 247)",
        "mp3": "/media/sounds/the-moon-haunts-you.mp3"
    },
    {
        "name": "Mi bomboclaut",
        "color": "rgb(255, 158, 31)",
        "mp3": "/media/sounds/mi-bomboclaut_linGNm7.mp3"
    },
    {
        "name": "ICQ - Uh Oh",
        "color": "rgb(213, 0, 0)",
        "mp3": "/media/sounds/icq-uh-oh.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "Lista mais g@y do Planeta Terra 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lista-mais-g-y-do-planeta-terra-2-0.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "Babalu wow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/babalu-wow.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Windows XP error music",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/musica_1.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "I'm Going to Kill You, And then Kill you again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "Happy Wheels Victory",
        "color": "rgb(235, 255, 52)",
        "mp3": "/media/sounds/victory_sJDDywi.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "WEE WOO WEE WOO",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/patrick-weewoo_1.mp3"
    },
    {
        "name": "VillagerHmm",
        "color": "rgb(70, 255, 150)",
        "mp3": "/media/sounds/output_gU4UE9M.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "buy",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/buy_1.mp3"
    },
    {
        "name": "The Moon Haunts You",
        "color": "rgb(100, 255, 247)",
        "mp3": "/media/sounds/the-moon-haunts-you.mp3"
    },
    {
        "name": "Family Feud Introduction",
        "color": "rgb(49, 46, 167)",
        "mp3": "/media/sounds/family-feud-introduction.mp3"
    },
    {
        "name": "ROAD RUNNER BEEP BEEP.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/road-runner-beep-beep-mp3.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "Steve's Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steves-lava-chicken_UmJvvHF.mp3"
    },
    {
        "name": "REPO ROBE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/repo-robe.mp3"
    },
    {
        "name": "angy monkey.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angy-monkey-mp3.mp3"
    },
    {
        "name": "1000 Bits - G-MIDÃO DO ZAP",
        "color": "rgb(100, 10, 10)",
        "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
    },
    {
        "name": "levántenseeeee",
        "color": "rgb(255, 17, 227)",
        "mp3": "/media/sounds/levantenseeeee.mp3"
    },
    {
        "name": "you'll never take me alive",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youll-never-take-me-alive.mp3"
    },
    {
        "name": "stream-taci22",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shutup_H230OPk.mp3"
    },
    {
        "name": "Minos Prime ''WEAK!''",
        "color": "rgb(154, 255, 251)",
        "mp3": "/media/sounds/minos-prime-weak_Sy9TZme.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "estaba paralizado con mucho miedo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/estaba-paralizado-con-mucho-miedo.mp3"
    },
    {
        "name": "Vogue UNSH",
        "color": "rgb(213, 77, 255)",
        "mp3": "/media/sounds/vogue-unsh.mp3"
    },
    {
        "name": "Chicken banana",
        "color": "rgb(255, 254, 52)",
        "mp3": "/media/sounds/chicken-banana.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
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
        "name": "Italian brainrot",
        "color": "rgb(34, 150, 255)",
        "mp3": "/media/sounds/italian-brainrot_R7FRRmg.mp3"
    },
    {
        "name": "(bluudude) MUEHEHEHE!!",
        "color": "rgb(0, 133, 255)",
        "mp3": "/media/sounds/bluudude-muehehehe.mp3"
    },
    {
        "name": "SEPHIROTH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/se-phi-roth.mp3"
    },
    {
        "name": "Trump WRONG!",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/wrong_4wlZSJh.mp3"
    },
    {
        "name": "Sasuke Rinnegan",
        "color": "rgb(232, 118, 255)",
        "mp3": "/media/sounds/ytmp3free_cuPsjK0.mp3"
    },
    {
        "name": "Boom! Headshot!",
        "color": "rgb(153, 102, 204)",
        "mp3": "/media/sounds/boomheadshot.swf.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Crab Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/original_zeowGW1.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "cod zombies scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-zombie-yell-meme-sound-effect.mp3"
    },
    {
        "name": "Rizz Me U",
        "color": "rgb(208, 0, 255)",
        "mp3": "/media/sounds/rizz-me-u.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "Look at this dude HQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bruh_look_at_this_dude1.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Fortnite gun shot sound",
        "color": "rgb(8, 133, 255)",
        "mp3": "/media/sounds/fortnite-gun-shot-sound.mp3"
    },
    {
        "name": "Meowww",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-end-meow-by-nekocat-just-3-second-1.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "\"Encara Messi\"",
        "color": "rgb(39, 39, 255)",
        "mp3": "/media/sounds/gol-messi-vs-getafe-narrat-per-puyal-full-hd-1080p-audiotrimmer.mp3"
    },
    {
        "name": "Glass breaking sound effect",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "Peter Griffin Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-guy-singing-star-wars.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "Halo elite laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a_HSMXsiW.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Happy happy happy cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/happy-happy-happy-cat.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "Its wizard time",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-wizard-time.mp3"
    },
    {
        "name": "Awkward Pause (Anime Sounds)",
        "color": "rgb(79, 255, 123)",
        "mp3": "/media/sounds/awkward-pause-anime-sounds.mp3"
    },
    {
        "name": "Wetin be this sound comedy by kenny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wetin-be-this-sound-comedy-by-kenny.mp3"
    },
    {
        "name": "VAI CORINTHIANS ESTOURADASSO!!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/vai-corinthians-estouradasso.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "Adioss Turd Nuggets",
        "color": "rgb(139, 119, 74)",
        "mp3": "/media/sounds/adios-turd-nuggets_zPWQYPU.mp3"
    },
    {
        "name": "Пугающий гоку",
        "color": "rgb(203, 238, 255)",
        "mp3": "/media/sounds/pugaiushchii-goku.mp3"
    },
    {
        "name": "pokemon level up yellow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-red_blue_yellow-level-up-sound-effect_4Oicx8D.mp3"
    },
    {
        "name": "Snap sound",
        "color": "rgb(255, 230, 10)",
        "mp3": "/media/sounds/snap-sound.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Bazinga!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/bazinga.swf.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Clash of Clans Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash_of_clan_start_up_soundmp3converter.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Goofy ahh SpongeBob sound",
        "color": "rgb(208, 215, 0)",
        "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
    },
    {
        "name": "goofy ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh.mp3"
    },
    {
        "name": "Yep That's me you...",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/original-yep-thats-me-youre-probably-wondering_vRBcfjS.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Sisyphus",
        "color": "rgb(99, 94, 255)",
        "mp3": "/media/sounds/sisyphus.mp3"
    },
    {
        "name": "Trump on black supporter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-on-black-supporter_-_look-at-my-african-american_-1.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "iPhone Sent Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sentmessage_1.mp3"
    },
    {
        "name": "Peter Griffin: Oh my god who the hell cares?",
        "color": "rgb(155, 2, 2)",
        "mp3": "/media/sounds/peter-griffin-who-the-hell-cares.mp3"
    },
    {
        "name": "Clap of my asscheeks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clap_of_my_ass_cheeks.mp3"
    },
    {
        "name": "Chick Fila HELP ME HELLLLP (just help)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/chick-fila-help-me-hellllp-just-help.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "TF2 - Heavy Laughlong",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/heavy_laughlong01.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "Yamate kudasai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yamate-kudasai.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Ouch!",
        "color": "rgb(255, 12, 12)",
        "mp3": "/media/sounds/ouch_AKigkiF.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "Super Mario Bros Music",
        "color": "rgb(253, 86, 255)",
        "mp3": "/media/sounds/super-mario-bros-music.mp3"
    },
    {
        "name": "oh no ape tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-ape-tiktok.mp3"
    },
    {
        "name": "pastor mirim",
        "color": "rgb(104, 255, 66)",
        "mp3": "/media/sounds/pastor-mirim.mp3"
    },
    {
        "name": "Ye WW3",
        "color": "rgb(248, 255, 232)",
        "mp3": "/media/sounds/ye-ww3.mp3"
    },
    {
        "name": "yoshi hmmph",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/yoshi-hmmph.mp3"
    },
    {
        "name": "NFL Theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl_OrY8Dns.mp3"
    },
    {
        "name": "pedoo 1",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/pedoo-1.mp3"
    },
    {
        "name": "Inconceivable Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inconceivable_HA0CkQ6.mp3"
    },
    {
        "name": "eu não acredito não charlene",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eu-nao-acredito-nao-charlene.mp3"
    },
    {
        "name": "Limit on talking censored",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limit-on-talking-censored.mp3"
    },
    {
        "name": "Family Feud Survey Says",
        "color": "rgb(0, 170, 25)",
        "mp3": "/media/sounds/family-feud-survey-says.mp3"
    },
    {
        "name": "Gabagool? Ova Here!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gabagool-ova-here.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Its A Me, Mario",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/its-me-mario.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "holy moly emoji",
        "color": "rgb(255, 238, 128)",
        "mp3": "/media/sounds/holy-moly-emoji.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "æ meme",
        "color": "rgb(182, 0, 0)",
        "mp3": "/media/sounds/ae-meme.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "Bababooey.mp4",
        "color": "rgb(55, 44, 255)",
        "mp3": "/media/sounds/bababooey-sound-effect_srVNhNS.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Wait, What!?",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/wait-what.mp3"
    },
    {
        "name": "SpongeBob levitating meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-levitating-meme.mp3"
    },
    {
        "name": "Hello! Mine Turtle",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/hello-trailer_01.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "Bedtime",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/bedtime.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "coffin dance",
        "color": "rgb(132, 53, 53)",
        "mp3": "/media/sounds/vicetone-tony-igy-astronomia-2014-audiotrimmer.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "OOOh shit a rat",
        "color": "rgb(216, 226, 200)",
        "mp3": "/media/sounds/a-rat.mp3"
    },
    {
        "name": "Darth Vader's breath",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/darth-vader.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "Fat Bastard - Sorry I farted",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/my-song-7.mp3"
    },
    {
        "name": "Mario Bros Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_2.mp3"
    },
    {
        "name": "News Intro Breaking News",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/news_intro-maximilien_-1801238420_2.mp3"
    },
    {
        "name": "Freddy fazbear rizz",
        "color": "rgb(54, 39, 186)",
        "mp3": "/media/sounds/freddy-fazbear-rizz.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "Gundam Newtype",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "Subway Surfers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers.mp3"
    },
    {
        "name": "Yoda Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtones-_dqku1ss6.mp3"
    },
    {
        "name": "Ba Ba Ba Banana - Minion",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/banana-song2.mp3"
    },
    {
        "name": "Dreamybull Busss",
        "color": "rgb(115, 255, 129)",
        "mp3": "/media/sounds/dreamybull-busss.mp3"
    },
    {
        "name": "Anime Girl \"Hey!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-hey.mp3"
    },
    {
        "name": "L-lava c-c-chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l-lava-c-c-chicken.mp3"
    },
    {
        "name": "brain fart slowed but its more violent (+reverb)",
        "color": "rgb(146, 5, 5)",
        "mp3": "/media/sounds/brain-fart-slowed-but-its-more-violent-reverb.mp3"
    },
    {
        "name": "Scooby doo laugh meme",
        "color": "rgb(234, 255, 0)",
        "mp3": "/media/sounds/scooby-doo-laugh-meme.mp3"
    },
    {
        "name": "Windows xp start up",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/microsoft-windows-xp-startup-sound.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Richard Ahh Screaming",
        "color": "rgb(255, 184, 235)",
        "mp3": "/media/sounds/richard-ahh-screaming.mp3"
    },
    {
        "name": "Snail's House - Hot Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/snails-house-hot-milk.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "you're no fun! :(",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-no-fun.mp3"
    },
    {
        "name": "kaiser get on your knees blue lock",
        "color": "rgb(227, 227, 227)",
        "mp3": "/media/sounds/kaiser-get-on-your-knees-blue-lock.mp3"
    },
    {
        "name": "im peppa pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-peppa-pig.mp3"
    },
    {
        "name": "Gruesome Smite",
        "color": "rgb(69, 0, 0)",
        "mp3": "/media/sounds/gruesome-smite.mp3"
    },
    {
        "name": "Jeopardy Board fill 2016",
        "color": "rgb(0, 34, 255)",
        "mp3": "/media/sounds/jeopardy-board-fill-sound-2016-present-cleaner-version.mp3"
    },
    {
        "name": "Horror siren",
        "color": "rgb(96, 136, 157)",
        "mp3": "/media/sounds/horror-siren.mp3"
    },
    {
        "name": "Baby Shark 5 seconds",
        "color": "rgb(0, 220, 255)",
        "mp3": "/media/sounds/baby-shark-alert.mp3"
    },
    {
        "name": "dog throw up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dog-throw-up.mp3"
    },
    {
        "name": "Palpatine Ugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/palpatine-ugh.mp3"
    },
    {
        "name": "Damn Son Where Did You Find This (MLG Song)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/damn-son-mlg-song-mobilisc-mp3cut-mp3cut.mp3"
    },
    {
        "name": "Groot-I am Groot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/groot_KgsNNAU.mp3"
    },
    {
        "name": "That Little Puff Laugh Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that-little-puff-laugh-sound-effect.mp3"
    },
    {
        "name": "FAZ O LLLLLLLLLLLL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/faz-o-llllllllllll.mp3"
    },
    {
        "name": "Kamehameha!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/kamehameha.swf.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Crab Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/original_zeowGW1.mp3"
    },
    {
        "name": "Its A Me, Mario",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/its-me-mario.mp3"
    },
    {
        "name": "Hello darkness my old friend",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hellodarknessmyoldfriend.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Titanic Flute",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/titanic-parody-mp3cut.mp3"
    },
    {
        "name": "yoshi tongue",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/yoshi-tongue.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "What the Hell (@slv_soundss)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell_H0K7ORA.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "Woody Woodpecker Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woody-woodpecker-laugh.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Despicable me whistle song",
        "color": "rgb(255, 119, 119)",
        "mp3": "/media/sounds/despicable-me-whistle-song.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "fnaf 1 door",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-slamming-fnaf-1-sound-effects.mp3"
    },
    {
        "name": "Morgan Freeman I can smell you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/morgan-freeman-can-smell-you_Oq9fTvy.mp3"
    },
    {
        "name": "Real punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/punch-notification_sound-493565.mp3"
    },
    {
        "name": "Windows XP Green Screen Error",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/cut_y2mate_Ooa5JNV.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "hey guys whats going on discord troll",
        "color": "rgb(214, 177, 255)",
        "mp3": "/media/sounds/hey-guys-whats-going-on-discord-troll.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "Gundam Newtype",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "AirHorn - Lethal Company",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/airhorn-lethal-company.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "Spongebob Loser Call",
        "color": "rgb(254, 255, 43)",
        "mp3": "/media/sounds/spongebob-loser-call_C0zXxSl.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "A pia ta cheia de louça",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/se-eu-largar-o-freio-oficial.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "IM IN MINECRAFT",
        "color": "rgb(44, 130, 255)",
        "mp3": "/media/sounds/im-in-minecraft.mp3"
    },
    {
        "name": "sukuna screaming for help",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/sukuna-screaming-for-help.mp3"
    },
    {
        "name": "tada1",
        "color": "rgb(94, 255, 207)",
        "mp3": "/media/sounds/tada1.mp3"
    },
    {
        "name": "Chicken Jockey (LOUD)",
        "color": "rgb(3, 162, 0)",
        "mp3": "/media/sounds/chicken-jockey-loud.mp3"
    },
    {
        "name": "Tu madre tiene una",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tu-madre-tiene-una_4GG4162.mp3"
    },
    {
        "name": "German cat meme",
        "color": "rgb(255, 101, 101)",
        "mp3": "/media/sounds/german-cat-meme.mp3"
    },
    {
        "name": "C00lkidd Giggle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-giggle.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "coffin dance",
        "color": "rgb(132, 53, 53)",
        "mp3": "/media/sounds/vicetone-tony-igy-astronomia-2014-audiotrimmer.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "Skill Issue Halo Announcer",
        "color": "rgb(0, 255, 136)",
        "mp3": "/media/sounds/skill-issue-halo-announcer.mp3"
    },
    {
        "name": "Train Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quadruplex-norm.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "COD zombies round change",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7xew6z6.mp3"
    },
    {
        "name": "Snore",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-snoring-3.mp3"
    },
    {
        "name": "Uncle ruckus GUILTY",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-guilty.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "Subway Surfers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers.mp3"
    },
    {
        "name": "Yoda Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtones-_dqku1ss6.mp3"
    },
    {
        "name": "Ba Ba Ba Banana - Minion",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/banana-song2.mp3"
    },
    {
        "name": "Stone Cold Drink Beer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stone-cold-drink-beer.mp3"
    },
    {
        "name": "Anime Girl \"Hey!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-hey.mp3"
    },
    {
        "name": "everybody was kungfu fighting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/everybody-was-kungfu-fighting.mp3"
    },
    {
        "name": "exclamation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid.mp3"
    },
    {
        "name": "brain fart slowed but its more violent (+reverb)",
        "color": "rgb(146, 5, 5)",
        "mp3": "/media/sounds/brain-fart-slowed-but-its-more-violent-reverb.mp3"
    },
    {
        "name": "Scooby doo laugh meme",
        "color": "rgb(234, 255, 0)",
        "mp3": "/media/sounds/scooby-doo-laugh-meme.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "c00lkidd [Come out]",
        "color": "rgb(179, 64, 64)",
        "mp3": "/media/sounds/c00lkidd-come-out.mp3"
    },
    {
        "name": "Richard Ahh Screaming",
        "color": "rgb(255, 184, 235)",
        "mp3": "/media/sounds/richard-ahh-screaming.mp3"
    },
    {
        "name": "you're no fun! :(",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-no-fun.mp3"
    },
    {
        "name": "kaiser get on your knees blue lock",
        "color": "rgb(227, 227, 227)",
        "mp3": "/media/sounds/kaiser-get-on-your-knees-blue-lock.mp3"
    },
    {
        "name": "Cala boca e escuta o som do meu corsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cala-boca-e-escuta-o-som-do-meu-corsa.mp3"
    },
    {
        "name": "Italian brainrot",
        "color": "rgb(34, 150, 255)",
        "mp3": "/media/sounds/italian-brainrot_R7FRRmg.mp3"
    },
    {
        "name": "Yo Pierre You Wanna Come Out Here? Original Tag",
        "color": "rgb(23, 4, 7)",
        "mp3": "/media/sounds/yo-pierre-you-wanna-come-out-here-original-tag.mp3"
    },
    {
        "name": "(Mafioso) increase debt",
        "color": "rgb(10, 0, 0)",
        "mp3": "/media/sounds/mafioso-increase-debt.mp3"
    },
    {
        "name": "Fading Scream",
        "color": "rgb(91, 247, 255)",
        "mp3": "/media/sounds/fading-scream.mp3"
    },
    {
        "name": "slimeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slimeee.mp3"
    },
    {
        "name": "Family Feud - Returning from Commercial",
        "color": "rgb(25, 206, 255)",
        "mp3": "/media/sounds/family-feud-returning-from-commercial.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Japanese YOOOO",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4.mp3"
    },
    {
        "name": "why you always lying",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/why-you-always-lying-original.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "Noice",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/click-nice.mp3"
    },
    {
        "name": "Universal Funny Theme",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/d-mp3cut.mp3"
    },
    {
        "name": "OOOh shit a rat",
        "color": "rgb(216, 226, 200)",
        "mp3": "/media/sounds/a-rat.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Skill Issue Halo Announcer",
        "color": "rgb(0, 255, 136)",
        "mp3": "/media/sounds/skill-issue-halo-announcer.mp3"
    },
    {
        "name": "Dodgeball Hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dodgeball.mp3"
    },
    {
        "name": "Western",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/o-bom-o-mal-e-o-feio-velho-oeste-desafio-dont-talk-duelo-desafio-armas.mp3"
    },
    {
        "name": "Darth Vader's breath",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/darth-vader.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "Fat Bastard - Sorry I farted",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/my-song-7.mp3"
    },
    {
        "name": "Mario Bros Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_2.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "flightreacts screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-screaming-green-screen.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "MY WIFE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mywife_Qw3XI4L.mp3"
    },
    {
        "name": "Uncle ruckus GUILTY",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-guilty.mp3"
    },
    {
        "name": "Free Bird Solo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/free-bird-solo.mp3"
    },
    {
        "name": "windows xp bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_9XXvzy4.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "gogogogogo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gogogogogo.mp3"
    },
    {
        "name": "Subway Surfers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers.mp3"
    },
    {
        "name": "roblox jump",
        "color": "rgb(255, 200, 106)",
        "mp3": "/media/sounds/action_jump.mp3"
    },
    {
        "name": "Minecraft Grass Walking Sound Effect",
        "color": "rgb(0, 139, 23)",
        "mp3": "/media/sounds/minecraft-grass-walking-sound-effect.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "You spin me right round",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bladefury_start_loopcustomrecord.mp3"
    },
    {
        "name": "Neck crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neck-crack-sound-effect-free-download.mp3"
    },
    {
        "name": "Minecraft TNT explosion!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tnt-explosion.mp3"
    },
    {
        "name": "Free Bird Solo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/free-bird-solo.mp3"
    },
    {
        "name": "DBD Skill Check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dbd_check_start.mp3"
    },
    {
        "name": "Metal pipe meme but louder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-pipe-meme-but-louder.mp3"
    },
    {
        "name": "Yodel Goofy",
        "color": "rgb(255, 140, 8)",
        "mp3": "/media/sounds/eene-yodel-goofy.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "Mario Goomba Stomp",
        "color": "rgb(123, 62, 8)",
        "mp3": "/media/sounds/mario-goomba-stomp.mp3"
    },
    {
        "name": "SopranosPaulieOooh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oooooooh.mp3"
    },
    {
        "name": "Gemid2 troll",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemid2-troll.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "Tv error",
        "color": "rgb(0, 255, 223)",
        "mp3": "/media/sounds/tv-error.mp3"
    },
    {
        "name": "1000 Bits - G-MIDÃO DO ZAP",
        "color": "rgb(100, 10, 10)",
        "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "im over here strokin'",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-over-here-strokin_iiwdXZF.mp3"
    },
    {
        "name": "its so nice to see you dad (c00lkidd) Forsaken",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/its-so-nice-to-see-you-dad-c00lkidd-forsaken.mp3"
    },
    {
        "name": "Tricktrack Bataboom",
        "color": "rgb(40, 184, 74)",
        "mp3": "/media/sounds/tricktrack-bataboom_ZkH6H5D.mp3"
    },
    {
        "name": "Cala boca e escuta o som do meu corsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cala-boca-e-escuta-o-som-do-meu-corsa.mp3"
    },
    {
        "name": "cursed horror sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cursed-horror-sound-effect.mp3"
    },
    {
        "name": "Car Racing",
        "color": "rgb(57, 255, 47)",
        "mp3": "/media/sounds/gt40takingoff.mp3"
    },
    {
        "name": "Metro Boomin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metro-boomin-want-some-more-tag-young-thug-hq-download.mp3"
    },
    {
        "name": "Fart (Roxy Raye)",
        "color": "rgb(180, 105, 29)",
        "mp3": "/media/sounds/assjuice.mp3"
    },
    {
        "name": "anvil noise",
        "color": "rgb(255, 218, 34)",
        "mp3": "/media/sounds/anvil-noise-minecraft-sound-effect_hj4DnNY.mp3"
    },
    {
        "name": "among us shush",
        "color": "rgb(187, 150, 255)",
        "mp3": "/media/sounds/among-us-shush.mp3"
    },
    {
        "name": "MIZUKII!!!!",
        "color": "rgb(255, 160, 252)",
        "mp3": "/media/sounds/mizukii.mp3"
    },
    {
        "name": "Bfdljgnjfanfjsnhjnbgldsb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bfdljgnjfanfjsnhjnbgldsb.mp3"
    },
    {
        "name": "THUG LIFE 346345321",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-theme-song-full-mp3cut.mp3"
    },
    {
        "name": "AK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ak.mp3"
    },
    {
        "name": "The eagle has landed",
        "color": "rgb(3, 16, 121)",
        "mp3": "/media/sounds/the-eagle-has-landed.mp3"
    },
    {
        "name": "reaverkill4",
        "color": "rgb(33, 0, 105)",
        "mp3": "/media/sounds/reaverkill4.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Mario 1 up",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mario-1-up.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "samsung notification",
        "color": "rgb(80, 194, 255)",
        "mp3": "/media/sounds/samsung-notification-sound-bass-boosted.mp3"
    },
    {
        "name": "fortnite battle pass",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-battle-pass.mp3"
    },
    {
        "name": "coffin dance",
        "color": "rgb(132, 53, 53)",
        "mp3": "/media/sounds/vicetone-tony-igy-astronomia-2014-audiotrimmer.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "Tim Allen Grunt 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tim-allens-home-improvement-grunt.mp3"
    },
    {
        "name": "Shade Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/qquw-shade-button.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "Spanish Guy Laughing",
        "color": "rgb(214, 211, 255)",
        "mp3": "/media/sounds/heres-what-immigrants-think-about-the-wall-original-video-audiotrimmer.mp3"
    },
    {
        "name": "HQ Coffin Dance, Funeral",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/hq-coffin-dance-funeral-vicetone-tony-igy-astronomia.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "RONALDO SIUUUU",
        "color": "rgb(46, 138, 255)",
        "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
    },
    {
        "name": "Smack!",
        "color": "rgb(107, 165, 179)",
        "mp3": "/media/sounds/sharp-punch-soundbible.mp3"
    },
    {
        "name": "boy what the hell boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boy-what-the-hell-boy-meme.mp3"
    },
    {
        "name": "ghast scream minecraft",
        "color": "rgb(149, 149, 149)",
        "mp3": "/media/sounds/minecraft-scream2.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "TITAN ANIME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/attack-on-titan-rojo.mp3"
    },
    {
        "name": "Teleport DBZ",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpubima4i9.mp3"
    },
    {
        "name": "Rosa De Guadalupe Suspense",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled-4319-10.mp3"
    },
    {
        "name": "piano riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/piano-riff.mp3"
    },
    {
        "name": "Cod Zombies Bye Bye",
        "color": "rgb(185, 131, 82)",
        "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "Freddy fazbear rizz",
        "color": "rgb(54, 39, 186)",
        "mp3": "/media/sounds/freddy-fazbear-rizz.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "romantic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/45_0HW2p0x.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "Pitbull Fireball HD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a1-0001_pitbull-fireball-edited00086400-online-audio-converter.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "Peter Griffin: Oh my god who the hell cares?",
        "color": "rgb(155, 2, 2)",
        "mp3": "/media/sounds/peter-griffin-who-the-hell-cares.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Peter Griffin Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-guy-singing-star-wars.mp3"
    },
    {
        "name": "SML Danger Sound",
        "color": "rgb(241, 255, 88)",
        "mp3": "/media/sounds/sml-intense-sound-effect.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "Cartoon bonk",
        "color": "rgb(82, 255, 110)",
        "mp3": "/media/sounds/cartoon-bonk.mp3"
    },
    {
        "name": "Halo elite laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a_HSMXsiW.mp3"
    },
    {
        "name": "It's just a burning memory (backrooms)",
        "color": "rgb(254, 0, 255)",
        "mp3": "/media/sounds/its-just-a-burning-memory-backrooms.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "jiafei scream",
        "color": "rgb(242, 0, 255)",
        "mp3": "/media/sounds/jiafei-scream.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "metal bar",
        "color": "rgb(126, 193, 88)",
        "mp3": "/media/sounds/metal-bar.mp3"
    },
    {
        "name": "Slot machine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slotmachine.mp3"
    },
    {
        "name": "Puting Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/puting-loud.mp3"
    },
    {
        "name": "peter griffin song",
        "color": "rgb(107, 255, 225)",
        "mp3": "/media/sounds/peter-griffin-song.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Metal Slug Thank You",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-slug-thank-you-tenkiu.mp3"
    },
    {
        "name": "Lie detector meme",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/lie-detector-meme.mp3"
    },
    {
        "name": "Salamalekum Don Pollo",
        "color": "rgb(59, 117, 109)",
        "mp3": "/media/sounds/salamalekum-don-pollo.mp3"
    },
    {
        "name": "Its wizard time",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-wizard-time.mp3"
    },
    {
        "name": "Windows 95 startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/microsoft-windows-95-startup-sound.mp3"
    },
    {
        "name": "Арбуз арбуз пёрни",
        "color": "rgb(7, 172, 0)",
        "mp3": "/media/sounds/arbuz-arbuz-piorni.mp3"
    },
    {
        "name": "PSX (PS1) Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psx.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Не надо дядя",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ne-nado-diadia.mp3"
    },
    {
        "name": "CALVOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "color": "rgb(255, 194, 225)",
        "mp3": "/media/sounds/calvoooooooooooooooooooooooooooo.mp3"
    },
    {
        "name": "Violin suspense",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/violin-suspense.mp3"
    },
    {
        "name": "Че за хуйня, блять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/che-za-khuinia-bliat.mp3"
    },
    {
        "name": "Awkward Pause (Anime Sounds)",
        "color": "rgb(79, 255, 123)",
        "mp3": "/media/sounds/awkward-pause-anime-sounds.mp3"
    },
    {
        "name": "Tu dar muito é teu c* rapaz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-dar-muito-e-teu-c-rapaz.mp3"
    },
    {
        "name": "Chicken Jockey (LOUD)",
        "color": "rgb(3, 162, 0)",
        "mp3": "/media/sounds/chicken-jockey-loud.mp3"
    },
    {
        "name": "an ENDER PEARL",
        "color": "rgb(95, 39, 159)",
        "mp3": "/media/sounds/an-ender-pearl.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "GYYAAAAAT!!!",
        "color": "rgb(255, 174, 230)",
        "mp3": "/media/sounds/gyyaaaaat.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "Quack Meme",
        "color": "rgb(72, 119, 255)",
        "mp3": "/media/sounds/quack-meme.mp3"
    },
    {
        "name": "BIG MAN BLASTOISE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-man-blastoise.mp3"
    },
    {
        "name": "Table Flip Scream",
        "color": "rgb(152, 0, 0)",
        "mp3": "/media/sounds/table-flip-scream.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "Trikitrakatelas (italian brainrot)",
        "color": "rgb(196, 255, 46)",
        "mp3": "/media/sounds/trikitrakatelas-italian-brainrot.mp3"
    },
    {
        "name": "King Von DigBar",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/king-von-digbar.mp3"
    },
    {
        "name": "Videl Moans",
        "color": "rgb(203, 34, 255)",
        "mp3": "/media/sounds/videl-moans.mp3"
    },
    {
        "name": "Cala boca e escuta o som do meu corsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cala-boca-e-escuta-o-som-do-meu-corsa.mp3"
    },
    {
        "name": "Que significa el bro respeta",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-significa-el-bro-respeta_zkWXiFU.mp3"
    },
    {
        "name": "monkeyyyyyyyyyy",
        "color": "rgb(243, 255, 10)",
        "mp3": "/media/sounds/monkeyyyyyyyyyy.mp3"
    },
    {
        "name": "tralalero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero.mp3"
    },
    {
        "name": "Spongebob n word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-n-word.mp3"
    },
    {
        "name": "aiscream_01_ruby",
        "color": "rgb(243, 17, 255)",
        "mp3": "/media/sounds/aiscream-01-ruby_afVjwvp.mp3"
    },
    {
        "name": "I dont have friends. I have family.",
        "color": "rgb(255, 227, 108)",
        "mp3": "/media/sounds/i-dont-have-friends-i-have-family.mp3"
    },
    {
        "name": "бомбордиро крокодило",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombordiro-krokodilo.mp3"
    },
    {
        "name": "cursed horror sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cursed-horror-sound-effect.mp3"
    },
    {
        "name": "Boing Boing Boing meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing-boing-boing-meme.mp3"
    },
    {
        "name": "levántenseeeee",
        "color": "rgb(255, 17, 227)",
        "mp3": "/media/sounds/levantenseeeee.mp3"
    },
    {
        "name": "Fading Scream",
        "color": "rgb(91, 247, 255)",
        "mp3": "/media/sounds/fading-scream.mp3"
    },
    {
        "name": "Spongebob stinky noise effect",
        "color": "rgb(235, 255, 16)",
        "mp3": "/media/sounds/spongebob-stinky-noise-effect.mp3"
    },
    {
        "name": "Cartoon-SLIP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-slip.mp3"
    },
    {
        "name": "Passo bem soltó slowed",
        "color": "rgb(159, 255, 0)",
        "mp3": "/media/sounds/passo-bem-solto-slowed.mp3"
    },
    {
        "name": "dios mio suceso",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dios-mio-suceso.mp3"
    },
    {
        "name": "cadê vc fiadaputa você, por que não trabalha?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cade-vc-fiadaputa-voce-por-que-nao-trabalha.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Ooh Wah Ah Ah Ah",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/david-oohwahahahah.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "Valorant spike plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-spike-plant.mp3"
    },
    {
        "name": "ding dong eat it up",
        "color": "rgb(255, 159, 33)",
        "mp3": "/media/sounds/ding-dong-eat-it-up.mp3"
    },
    {
        "name": "half life 2 stalker scream",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/half-life-2-stalker-scream.mp3"
    },
    {
        "name": "TF2 - Heavy Laughlong",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/heavy_laughlong01.mp3"
    },
    {
        "name": "8-bit Happy Birthday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hb128.mp3"
    },
    {
        "name": "KamehamehaA!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/goku_kamehameha_wave.mp3"
    },
    {
        "name": "Milky Farts",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/milky-farts.mp3"
    },
    {
        "name": "Shots!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtone_8.mp3"
    },
    {
        "name": "Blink SquarePants",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/spongebob-blinking-sound-effect-mp3cut.mp3"
    },
    {
        "name": "I love you, i love you",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/i-love-you_1.mp3"
    },
    {
        "name": "botao do whatsapp",
        "color": "rgb(28, 255, 0)",
        "mp3": "/media/sounds/botao-do-whatsapp.mp3"
    },
    {
        "name": "Android Whistle",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/whistle_1.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Crash!5",
        "color": "rgb(195, 255, 255)",
        "mp3": "/media/sounds/crash_5mE1q2P.mp3"
    },
    {
        "name": "screaming monkeys",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/screaming-monkeys.mp3"
    },
    {
        "name": "The Bluetooth Device its connected Succesfull",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bluetooth-device-its-connected-succesfull.mp3"
    },
    {
        "name": "YES KING!!! ( alvin and the chipmunk version)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-alvin-and-the-chipmunk-version.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "tickingteo",
        "color": "rgb(255, 248, 44)",
        "mp3": "/media/sounds/clock-ticking-sound-effect_tAETVYt.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "Flashbang + Gah dayum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
    },
    {
        "name": "sin señal",
        "color": "rgb(43, 255, 47)",
        "mp3": "/media/sounds/sin-senal.mp3"
    },
    {
        "name": "Chappelle Ah!",
        "color": "rgb(227, 255, 71)",
        "mp3": "/media/sounds/chappelle-ah.mp3"
    },
    {
        "name": "Tu madre tiene una",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tu-madre-tiene-una_4GG4162.mp3"
    },
    {
        "name": "(mafioso) maybe its time to rage quit eh?",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-maybe-its-time-to-rage-quit-eh.mp3"
    },
    {
        "name": "(mafioso) pizza after this",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-pizza-after-this.mp3"
    },
    {
        "name": "Pakad MC",
        "color": "rgb(84, 255, 203)",
        "mp3": "/media/sounds/pakad-mc.mp3"
    },
    {
        "name": "Hidup jokowi !!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hidup-jokowi.mp3"
    },
    {
        "name": "pedoo 1",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/pedoo-1.mp3"
    },
    {
        "name": "Trump Win Too Much",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-win-too-much.mp3"
    },
    {
        "name": "Arriba España 2.0",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpt387w2yy.mp3"
    },
    {
        "name": "Spraying Perfume",
        "color": "rgb(62, 29, 255)",
        "mp3": "/media/sounds/spraying-perfume_0KMM3qt.mp3"
    },
    {
        "name": "yo phone ringing -chino",
        "color": "rgb(255, 218, 83)",
        "mp3": "/media/sounds/yo-phone-ringing-chino.mp3"
    },
    {
        "name": "eu não acredito não charlene",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eu-nao-acredito-nao-charlene.mp3"
    },
    {
        "name": "Hello Baby Girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-baby-girl.mp3"
    },
    {
        "name": "Limit on talking censored",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limit-on-talking-censored.mp3"
    },
    {
        "name": "Tidas",
        "color": "rgb(112, 255, 133)",
        "mp3": "/media/sounds/tidas.mp3"
    },
    {
        "name": "Family Feud Survey Says",
        "color": "rgb(0, 170, 25)",
        "mp3": "/media/sounds/family-feud-survey-says.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Gundam Newtype",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
    },
    {
        "name": "COD zombies round change",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7xew6z6.mp3"
    },
    {
        "name": "Nya Button",
        "color": "rgb(255, 98, 171)",
        "mp3": "/media/sounds/nya_ZtXOXLx.mp3"
    },
    {
        "name": "Mario 1UP",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mario-1up.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "Death Bong",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/death-bong.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "Mario Wins!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/victory-mario-series-hq-super-smash-bros.mp3"
    },
    {
        "name": "undertale strike sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-sound-effect-attack-hit.mp3"
    },
    {
        "name": "Blood Splatter",
        "color": "rgb(53, 70, 255)",
        "mp3": "/media/sounds/blood-splatter.mp3"
    },
    {
        "name": "gogogogogo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gogogogogo.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "DMC - I AM THE STORM",
        "color": "rgb(65, 62, 138)",
        "mp3": "/media/sounds/approaching-storm.mp3"
    },
    {
        "name": "Old car horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-car-horn.mp3"
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
        "name": "Ba Ba Ba Banana - Minion",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/banana-song2.mp3"
    },
    {
        "name": "Slot machine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slotmachine.mp3"
    },
    {
        "name": "I'm a lying piece of",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/im-a-lying-piece-of.mp3"
    },
    {
        "name": "ZA WARUDO Dio (The World)",
        "color": "rgb(219, 182, 0)",
        "mp3": "/media/sounds/za-warudo-toki-wo-tomare_WJVdsYt.mp3"
    },
    {
        "name": "door opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-opening.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "Dreaming Harp",
        "color": "rgb(140, 255, 195)",
        "mp3": "/media/sounds/dreaming-harp-sound-effect.mp3"
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
        "name": "É pra apanhar e ficar calado",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpyhr2sh8l.mp3"
    },
    {
        "name": "Вы чё все геи чоли тут?",
        "color": "rgb(94, 250, 255)",
        "mp3": "/media/sounds/vy-chio-vse-gei-choli-tut.mp3"
    },
    {
        "name": "Sora thinks you're stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sora-thinks-youre-stupid.mp3"
    },
    {
        "name": "Ding Dong Eat it up.",
        "color": "rgb(61, 223, 255)",
        "mp3": "/media/sounds/ding-dong-eat-it-up_ZhlIYUe.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "HEMA (LOUD AF)",
        "color": "rgb(244, 42, 255)",
        "mp3": "/media/sounds/hema-loud-af_qt2mmko.mp3"
    },
    {
        "name": "M16 Burst Shot Long Interior",
        "color": "rgb(112, 158, 100)",
        "mp3": "/media/sounds/m16-burst-shot-long-interior.mp3"
    },
    {
        "name": "contesta puñetas",
        "color": "rgb(30, 154, 255)",
        "mp3": "/media/sounds/contesta-punetas.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Wtf is that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-that.mp3"
    },
    {
        "name": "Snore",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-snoring-3.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "Scare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-roman_k-1190383229_h0Q4tg3.mp3"
    },
    {
        "name": "Minecraft TNT explosion!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tnt-explosion.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "Cat Call whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-call.mp3"
    },
    {
        "name": "long wet smelly ass fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/long-wet-smelly-ass-fart.mp3"
    },
    {
        "name": "THEY NOT LIKE US",
        "color": "rgb(34, 255, 20)",
        "mp3": "/media/sounds/they-not-like-us.mp3"
    },
    {
        "name": "shine sound",
        "color": "rgb(104, 245, 255)",
        "mp3": "/media/sounds/anime-shine-sound-effect_QP4mAaX.mp3"
    },
    {
        "name": "I'm new bro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-new-bro.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "cry (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cry-roblox.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "Ocelot Meow",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/ocelot-meowing.mp3"
    },
    {
        "name": "nba draft",
        "color": "rgb(42, 63, 255)",
        "mp3": "/media/sounds/nba-draft-sound-2021.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "Pokeball Pokemon Out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-pokemon-anime-7-pokemon-out.mp3"
    },
    {
        "name": "Mario Goomba Stomp",
        "color": "rgb(123, 62, 8)",
        "mp3": "/media/sounds/mario-goomba-stomp.mp3"
    },
    {
        "name": "Oh No Meme (2020)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
    },
    {
        "name": "Female Kiss (Sound Effect)",
        "color": "rgb(255, 26, 182)",
        "mp3": "/media/sounds/female-kiss-sound-effect.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "loud packgod roast",
        "color": "rgb(208, 22, 255)",
        "mp3": "/media/sounds/loud-packgod-roast.mp3"
    },
    {
        "name": "do you suffer from a lack of a father figure?",
        "color": "rgb(153, 255, 188)",
        "mp3": "/media/sounds/do-you-suffer-from-a-lack-of-a-father-figure.mp3"
    },
    {
        "name": "Lucu viral",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lucu-viral.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "wii error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-wii-the-sound-of-death-online-audio-converter.mp3"
    },
    {
        "name": "sadd rblx SE",
        "color": "rgb(235, 15, 255)",
        "mp3": "/media/sounds/sadd-rblx-se.mp3"
    },
    {
        "name": "oh hell naw man wtf man",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/oh-hell-naw-man-wtf-man.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "LINGA GULI GULI GULI",
        "color": "rgb(59, 253, 255)",
        "mp3": "/media/sounds/linga-guli-guli-guli.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "Windows XP error music",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/musica_1.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "DEADMAN ANIME",
        "color": "rgb(255, 73, 137)",
        "mp3": "/media/sounds/deadman-fx.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "fake raze ult enemy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fake-raze-ult-enemy.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Amogus",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/videoplayback-1_x1pB5fF.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "baby crying",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/llorando.mp3"
    },
    {
        "name": "FBI Open the door!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-the-door.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "9+10=21",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/9-10-vine.mp3"
    },
    {
        "name": "GunShoting",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/gunshot.mp3"
    },
    {
        "name": "Get Griddy | Fortnite Emote",
        "color": "rgb(0, 255, 242)",
        "mp3": "/media/sounds/9convert_f28qQKC.mp3"
    },
    {
        "name": "Toasty mortal kombat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toasty_tfCWsU6.mp3"
    },
    {
        "name": "Star Wars Duel of Fates short",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/star-wars-john-williams-duel-of-the-fates.mp3"
    },
    {
        "name": "Women haha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/women-haha.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
    },
    {
        "name": "GET SHIT ON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trim_WZMQ9g3.mp3"
    },
    {
        "name": "WHAT THE HELLLLLLLLLLLL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hellllllllllll.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "NFL on Fox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-on-fox-theme-music.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "CalebCity Yaeger",
        "color": "rgb(67, 255, 50)",
        "mp3": "/media/sounds/2_5s_to_7s_you_better_scramble_like_an_egg_before_.mp3"
    },
    {
        "name": "Baldi Ruler Slap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ruler-slap.mp3"
    },
    {
        "name": "Fart (Roxy Raye)",
        "color": "rgb(180, 105, 29)",
        "mp3": "/media/sounds/assjuice.mp3"
    },
    {
        "name": "Tyler1 barking",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/tyler1_barking_like_a_dog.mp3"
    },
    {
        "name": "you SUSSY BAKA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sussy-baka-mp3cut.mp3"
    },
    {
        "name": "Shimmy Shimmy Cocopop - Tiktok audio",
        "color": "rgb(255, 138, 70)",
        "mp3": "/media/sounds/shimmy-shimmy-cocopop-tiktok-audio.mp3"
    },
    {
        "name": "among us shush",
        "color": "rgb(187, 150, 255)",
        "mp3": "/media/sounds/among-us-shush.mp3"
    },
    {
        "name": "Tropical Beach Intro",
        "color": "rgb(36, 0, 255)",
        "mp3": "/media/sounds/tropical-beach-intro.mp3"
    },
    {
        "name": "Dolphin Bleep (SpongeBob)",
        "color": "rgb(15, 135, 255)",
        "mp3": "/media/sounds/dolphin-bleep-spongebob.mp3"
    },
    {
        "name": "anvil noise",
        "color": "rgb(255, 218, 34)",
        "mp3": "/media/sounds/anvil-noise-minecraft-sound-effect_hj4DnNY.mp3"
    },
    {
        "name": "Deku One For All Full Cowling 100%",
        "color": "rgb(13, 255, 13)",
        "mp3": "/media/sounds/deku-one-for-all-full-cowling-100.mp3"
    },
    {
        "name": "MIZUKII!!!!",
        "color": "rgb(255, 160, 252)",
        "mp3": "/media/sounds/mizukii.mp3"
    },
    {
        "name": "Bfdljgnjfanfjsnhjnbgldsb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bfdljgnjfanfjsnhjnbgldsb.mp3"
    },
    {
        "name": "KAREN ALERT",
        "color": "rgb(13, 255, 78)",
        "mp3": "/media/sounds/karen-alert.mp3"
    },
    {
        "name": "THUG LIFE 346345321",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-theme-song-full-mp3cut.mp3"
    },
    {
        "name": "AK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ak.mp3"
    },
    {
        "name": "Darkest Dungeon Overconfidence",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/darkest-dungeon-remind-yourself-that-overconfidence.mp3"
    },
    {
        "name": "Overlord I just want to eat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wanttoeat.mp3"
    },
    {
        "name": "Gangnam Style beginning",
        "color": "rgb(105, 119, 255)",
        "mp3": "/media/sounds/gangnam-style-beginning.mp3"
    },
    {
        "name": "CAASPP Music Test",
        "color": "rgb(226, 255, 158)",
        "mp3": "/media/sounds/caaspp-music-test.mp3"
    },
    {
        "name": "zzzzz",
        "color": "rgb(255, 105, 143)",
        "mp3": "/media/sounds/zzzzz_nAdNJhU.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Megumin - EXPLOSION!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion_3.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "DEADMAN ANIME",
        "color": "rgb(255, 73, 137)",
        "mp3": "/media/sounds/deadman-fx.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "fake raze ult enemy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fake-raze-ult-enemy.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Amogus",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/videoplayback-1_x1pB5fF.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "9+10=21",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/9-10-vine.mp3"
    },
    {
        "name": "I can do this all day captain america",
        "color": "rgb(255, 7, 7)",
        "mp3": "/media/sounds/i-can-do-this-all-day-captain-america.mp3"
    },
    {
        "name": "Sprunki retake oren horror",
        "color": "rgb(255, 145, 0)",
        "mp3": "/media/sounds/sprunki-retake-oren-horror.mp3"
    },
    {
        "name": "TWICE What Is Love!!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/what_is_love-mp3cut.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "Halo",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/Halo.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "im bout to end this man caree",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/recording-22.mp3"
    },
    {
        "name": "Kendrick Mustard",
        "color": "rgb(255, 249, 76)",
        "mp3": "/media/sounds/kendrick-mustard.mp3"
    },
    {
        "name": "E Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-in-the-game_TyOFKRF.mp3"
    },
    {
        "name": "æ meme",
        "color": "rgb(182, 0, 0)",
        "mp3": "/media/sounds/ae-meme.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "hey_its_me_goku",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-its-me-goku.mp3"
    },
    {
        "name": "Shade Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/qquw-shade-button.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Black ops - Fetch me theirsoul",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/black_ops_hell_hounds_fetch_me_their_souls.mp3"
    },
    {
        "name": "YEE-HAW!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yee-haw.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "THE record scratch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-scratch_u0nwDyU.mp3"
    },
    {
        "name": "Sully Mmm",
        "color": "rgb(0, 170, 255)",
        "mp3": "/media/sounds/sully-groan.mp3"
    },
    {
        "name": "Chris Smoove Haha",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/chris-smooves-autotune-haha.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "Hot hot hot hot (South Park)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hot-hot-hot-hot.mp3"
    },
    {
        "name": "Cute Giggle~MagicalMysticVA",
        "color": "rgb(51, 255, 244)",
        "mp3": "/media/sounds/giggle_XuDecHl.mp3"
    },
    {
        "name": "Lightning",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
    },
    {
        "name": "Spider-Man thwip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spider-man-customized-web-thwip-sound-effect-1_ybmate.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "El Primo Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/elprimosoundeffectmp3.mp3"
    },
    {
        "name": "Hollow Purple",
        "color": "rgb(150, 17, 142)",
        "mp3": "/media/sounds/hollow-purple.mp3"
    },
    {
        "name": "clock tick",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/clock-tick.mp3"
    },
    {
        "name": "Happy happy happy cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/happy-happy-happy-cat.mp3"
    },
    {
        "name": "Uncle Ruckus Got the rope",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-i-got-the-rope_eH5EBBM.mp3"
    },
    {
        "name": "IHIHIHIHI HAHAHAHA - Starcasm Nyx Yandere Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/starcasm-nyx-yandere-laugh_RTnF27y.mp3"
    },
    {
        "name": "America Eagle Gunshots",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/america-eagle-gunshots.mp3"
    },
    {
        "name": "Car Racing",
        "color": "rgb(57, 255, 47)",
        "mp3": "/media/sounds/gt40takingoff.mp3"
    },
    {
        "name": "Blood Splat",
        "color": "rgb(180, 0, 0)",
        "mp3": "/media/sounds/splat_oX5Rton.mp3"
    },
    {
        "name": "Metro Boomin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metro-boomin-want-some-more-tag-young-thug-hq-download.mp3"
    },
    {
        "name": "Fart (Roxy Raye)",
        "color": "rgb(180, 105, 29)",
        "mp3": "/media/sounds/assjuice.mp3"
    },
    {
        "name": "Tyler1 barking",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/tyler1_barking_like_a_dog.mp3"
    },
    {
        "name": "you SUSSY BAKA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sussy-baka-mp3cut.mp3"
    },
    {
        "name": "Shimmy Shimmy Cocopop - Tiktok audio",
        "color": "rgb(255, 138, 70)",
        "mp3": "/media/sounds/shimmy-shimmy-cocopop-tiktok-audio.mp3"
    },
    {
        "name": "among us shush",
        "color": "rgb(187, 150, 255)",
        "mp3": "/media/sounds/among-us-shush.mp3"
    },
    {
        "name": "Tropical Beach Intro",
        "color": "rgb(36, 0, 255)",
        "mp3": "/media/sounds/tropical-beach-intro.mp3"
    },
    {
        "name": "Dolphin Bleep (SpongeBob)",
        "color": "rgb(15, 135, 255)",
        "mp3": "/media/sounds/dolphin-bleep-spongebob.mp3"
    },
    {
        "name": "anvil noise",
        "color": "rgb(255, 218, 34)",
        "mp3": "/media/sounds/anvil-noise-minecraft-sound-effect_hj4DnNY.mp3"
    },
    {
        "name": "Deku One For All Full Cowling 100%",
        "color": "rgb(13, 255, 13)",
        "mp3": "/media/sounds/deku-one-for-all-full-cowling-100.mp3"
    },
    {
        "name": "MIZUKII!!!!",
        "color": "rgb(255, 160, 252)",
        "mp3": "/media/sounds/mizukii.mp3"
    },
    {
        "name": "Bfdljgnjfanfjsnhjnbgldsb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bfdljgnjfanfjsnhjnbgldsb.mp3"
    },
    {
        "name": "KAREN ALERT",
        "color": "rgb(13, 255, 78)",
        "mp3": "/media/sounds/karen-alert.mp3"
    },
    {
        "name": "THUG LIFE 346345321",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-theme-song-full-mp3cut.mp3"
    },
    {
        "name": "AK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ak.mp3"
    },
    {
        "name": "Darkest Dungeon Overconfidence",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/darkest-dungeon-remind-yourself-that-overconfidence.mp3"
    },
    {
        "name": "Overlord I just want to eat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wanttoeat.mp3"
    },
    {
        "name": "Gangnam Style beginning",
        "color": "rgb(105, 119, 255)",
        "mp3": "/media/sounds/gangnam-style-beginning.mp3"
    },
    {
        "name": "CAASPP Music Test",
        "color": "rgb(226, 255, 158)",
        "mp3": "/media/sounds/caaspp-music-test.mp3"
    },
    {
        "name": "zzzzz",
        "color": "rgb(255, 105, 143)",
        "mp3": "/media/sounds/zzzzz_nAdNJhU.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Megumin - EXPLOSION!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion_3.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "DEADMAN ANIME",
        "color": "rgb(255, 73, 137)",
        "mp3": "/media/sounds/deadman-fx.mp3"
    },
    {
        "name": "in the arms of an angel",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/in-the-arms-of-an-angel-sarah-mcla.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "fake raze ult enemy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fake-raze-ult-enemy.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Amogus",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/videoplayback-1_x1pB5fF.mp3"
    },
    {
        "name": "i am the storm",
        "color": "rgb(30, 10, 118)",
        "mp3": "/media/sounds/i-am-the-storm.mp3"
    },
    {
        "name": "Enrage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/enrage.mp3"
    },
    {
        "name": "I got a brand new saxophone",
        "color": "rgb(255, 245, 103)",
        "mp3": "/media/sounds/i-got-a-brand-new-saxophone.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "1x1x1x1",
        "color": "rgb(19, 54, 12)",
        "mp3": "/media/sounds/1x1x1x1.mp3"
    },
    {
        "name": "Тунг тунг тунг саур",
        "color": "rgb(255, 230, 45)",
        "mp3": "/media/sounds/tung-tung-tung-saur.mp3"
    },
    {
        "name": "my name is c00lkidd",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-c00lkidd.mp3"
    },
    {
        "name": "Suspense Sound Effects",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effects.mp3"
    },
    {
        "name": "Springlock failure",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/springlock-failure.mp3"
    },
    {
        "name": "I am the Senate-Palpatine",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/i-am-the-senate_nz87BNr.mp3"
    },
    {
        "name": "un video mas mi gente para perder el tiempo",
        "color": "rgb(62, 169, 73)",
        "mp3": "/media/sounds/un-video-mas-mi-gente-para-perder-el-tiempo.mp3"
    },
    {
        "name": "Gruesome Sound",
        "color": "rgb(162, 0, 0)",
        "mp3": "/media/sounds/gruesome-sound.mp3"
    },
    {
        "name": "Grotesque Steve Song",
        "color": "rgb(1, 169, 152)",
        "mp3": "/media/sounds/grotesque-steve-song.mp3"
    },
    {
        "name": "Intro Family Feud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/intro-family-feud.mp3"
    },
    {
        "name": "Ammi bacha la re",
        "color": "rgb(243, 244, 236)",
        "mp3": "/media/sounds/ammi-bacha-la-re.mp3"
    },
    {
        "name": "Bhai Bhai Bhai",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpgj3wv0ae.mp3"
    },
    {
        "name": "Quem tem controle é tv",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quem-tem-controle-e-tv.mp3"
    },
    {
        "name": "Mortal Kombat - Raiden 1",
        "color": "rgb(141, 223, 255)",
        "mp3": "/media/sounds/mk2-00686.mp3"
    },
    {
        "name": "Tarkov nade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/escape-from-tarkov-grenade.mp3"
    },
    {
        "name": "Jason Voorhees Sound",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/jason-voorhees-sound.mp3"
    },
    {
        "name": "mario power up1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_aACAVI5.mp3"
    },
    {
        "name": "Dolphin laugh lol",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dolphin-laugh-lol.mp3"
    },
    {
        "name": "Blood Splat",
        "color": "rgb(180, 0, 0)",
        "mp3": "/media/sounds/splat_oX5Rton.mp3"
    },
    {
        "name": "THEY TOOK OUR JOBS! (South Park)",
        "color": "rgb(0, 255, 19)",
        "mp3": "/media/sounds/they-took-our-jobs-south-park.mp3"
    },
    {
        "name": "Жёсткий стон яковлева",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/zhiostkii-ston-iakovleva.mp3"
    },
    {
        "name": "I can do this all day captain america",
        "color": "rgb(255, 7, 7)",
        "mp3": "/media/sounds/i-can-do-this-all-day-captain-america.mp3"
    },
    {
        "name": "glass click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adriantnt_glass.mp3"
    },
    {
        "name": "(Horror Mode.) Raddy Sprunki",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/horror-mode-raddy-sprunki.mp3"
    },
    {
        "name": "flora wolfskill",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcome-to-the-black-parade.mp3"
    },
    {
        "name": "OhShiet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ohshiet.mp3"
    },
    {
        "name": "Hey carnage, Do you know candace?",
        "color": "rgb(255, 47, 0)",
        "mp3": "/media/sounds/hey-carnage-do-you-know-candace.mp3"
    },
    {
        "name": "LEGO Batman",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/batman_2.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "I WOKE UP IN A NEW BUGATTI",
        "color": "rgb(74, 255, 228)",
        "mp3": "/media/sounds/i-woke-up-in-a-new-bugatti.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "ULTRAKILL \"HA\" computer laughing",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/ultrakill-ha-computer-laughing.mp3"
    },
    {
        "name": "Discord Jumpscare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-jumpscare.mp3"
    },
    {
        "name": "Spongebob Bubble Transition",
        "color": "rgb(2, 91, 255)",
        "mp3": "/media/sounds/spongebob-bubble-transition.mp3"
    },
    {
        "name": "IDGAF",
        "color": "rgb(255, 29, 246)",
        "mp3": "/media/sounds/idgaf_lAfwKjJ.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "Weeeeeeeeeeeeeeeeeee",
        "color": "rgb(255, 237, 222)",
        "mp3": "/media/sounds/weeeeeeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "anime yamete01",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-yamete01.mp3"
    },
    {
        "name": "Shrek Poops",
        "color": "rgb(34, 255, 0)",
        "mp3": "/media/sounds/shrek-poops.mp3"
    },
    {
        "name": "i i i be poppin bottles",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-i-i-be-poppin-bottles.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Que dificil me la pusiste diablo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-dificil-me-la-pusiste-diablo.mp3"
    },
    {
        "name": "meow billie eilish",
        "color": "rgb(255, 94, 94)",
        "mp3": "/media/sounds/meow-billie-eilish.mp3"
    },
    {
        "name": "Muhehehehe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/muhehehehe.mp3"
    },
    {
        "name": "Windows Longhorn startup",
        "color": "rgb(0, 255, 234)",
        "mp3": "/media/sounds/windows-longhorn-startup.mp3"
    },
    {
        "name": "(Normal Mode.) Oren Sprunki",
        "color": "rgb(255, 89, 8)",
        "mp3": "/media/sounds/normal-mode-oren-sprunki.mp3"
    },
    {
        "name": "BOMBOCLAT LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomboclat-loud_gYyr0v0.mp3"
    },
    {
        "name": "ih takotnyee",
        "color": "rgb(43, 34, 255)",
        "mp3": "/media/sounds/ih-takotnyee.mp3"
    },
    {
        "name": "angry birds flying sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-flying-sound.mp3"
    },
    {
        "name": "i am the storm",
        "color": "rgb(30, 10, 118)",
        "mp3": "/media/sounds/i-am-the-storm.mp3"
    },
    {
        "name": "Enrage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/enrage.mp3"
    },
    {
        "name": "LETS GO GAMBLING!",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/lets-go-gambling_Ci8E7hL.mp3"
    },
    {
        "name": "I got a brand new saxophone",
        "color": "rgb(255, 245, 103)",
        "mp3": "/media/sounds/i-got-a-brand-new-saxophone.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "BOMBOCLAT!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomboclat_HMiKqVU.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "1x1x1x1",
        "color": "rgb(19, 54, 12)",
        "mp3": "/media/sounds/1x1x1x1.mp3"
    },
    {
        "name": "my name is c00lkidd",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-c00lkidd.mp3"
    },
    {
        "name": "Suspense Sound Effects",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effects.mp3"
    },
    {
        "name": "Daddy’s home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home_6PNJ9IO.mp3"
    },
    {
        "name": "Springlock failure",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/springlock-failure.mp3"
    },
    {
        "name": "I am the Senate-Palpatine",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/i-am-the-senate_nz87BNr.mp3"
    },
    {
        "name": "It's Raining Men!",
        "color": "rgb(51, 153, 102)",
        "mp3": "/media/sounds/the-weather-girls-its-raining-men-1-cut-mp3.mp3"
    },
    {
        "name": "IIIIIIIHHHHHHHHHÁÁÁÁÁÁÁÁÁÁ!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/comedy-male-yelling-yee-ha-sound-effects-free-download-mp3cut.mp3"
    },
    {
        "name": "Gruesome Sound",
        "color": "rgb(162, 0, 0)",
        "mp3": "/media/sounds/gruesome-sound.mp3"
    },
    {
        "name": "Grotesque Steve Song",
        "color": "rgb(1, 169, 152)",
        "mp3": "/media/sounds/grotesque-steve-song.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "wake up meme",
        "color": "rgb(9, 9, 9)",
        "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
    },
    {
        "name": "another one bites the dust",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one-bites-the-dust-long.mp3"
    },
    {
        "name": "what the hell goofy ahh (slv_sounds)",
        "color": "rgb(248, 114, 255)",
        "mp3": "/media/sounds/what-the-hell-goofy-ahh-slv-sounds.mp3"
    },
    {
        "name": "Cute Giggle~MagicalMysticVA",
        "color": "rgb(51, 255, 244)",
        "mp3": "/media/sounds/giggle_XuDecHl.mp3"
    },
    {
        "name": "Cartoon Boing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing.mp3"
    },
    {
        "name": "Spider-Man thwip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spider-man-customized-web-thwip-sound-effect-1_ybmate.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "Are you serious right neow bro",
        "color": "rgb(138, 61, 61)",
        "mp3": "/media/sounds/are-you-serious-right-neow-bro.mp3"
    },
    {
        "name": "Mega Fart!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mega-fart.mp3"
    },
    {
        "name": "Eagle sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-sound.mp3"
    },
    {
        "name": "I'm new bro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-new-bro.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "Xenoverse goku noise",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/xenoverse-goku-noise.mp3"
    },
    {
        "name": "Pokémon plink",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq91k5v_6.mp3"
    },
    {
        "name": "clock tick",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/clock-tick.mp3"
    },
    {
        "name": "oh my pc meme",
        "color": "rgb(114, 53, 255)",
        "mp3": "/media/sounds/oh-my-pc-meme.mp3"
    },
    {
        "name": "Happy happy happy cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/happy-happy-happy-cat.mp3"
    },
    {
        "name": "Punch barrage",
        "color": "rgb(66, 255, 85)",
        "mp3": "/media/sounds/barrage.mp3"
    },
    {
        "name": "SEGA! (HD)",
        "color": "rgb(0, 19, 255)",
        "mp3": "/media/sounds/sega-hd.mp3"
    },
    {
        "name": "peter griffin song",
        "color": "rgb(107, 255, 225)",
        "mp3": "/media/sounds/peter-griffin-song.mp3"
    },
    {
        "name": "wii click sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pisseim-mund-online-audio-converter.mp3"
    },
    {
        "name": "Millionaire Suspense",
        "color": "rgb(235, 255, 52)",
        "mp3": "/media/sounds/5000000-music-mp3cut.mp3"
    },
    {
        "name": "America Eagle Gunshots",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/america-eagle-gunshots.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "Dog laughing meme form TikTok",
        "color": "rgb(38, 5, 255)",
        "mp3": "/media/sounds/dog-laughing-meme-form-tiktok.mp3"
    },
    {
        "name": "Hey its me!goku",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-its-me-goku_MM2SCAa.mp3"
    },
    {
        "name": "drake hotline bling",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/drake-hotline-bling.mp3"
    },
    {
        "name": "(Anakin) What have I done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-have-i-done.mp3"
    },
    {
        "name": "Buzzer error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buzzer-error.mp3"
    },
    {
        "name": "roblox spawn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/roblox-spawn.mp3"
    },
    {
        "name": "Dwayne Rock Johnson Eyebrow raise meme",
        "color": "rgb(5, 247, 255)",
        "mp3": "/media/sounds/dwayne-rock-johnson-eyebrow-raise-meme.mp3"
    },
    {
        "name": "R6 Diffuser",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/r6-diffuser.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "WII SPORTS THEME SONG",
        "color": "rgb(50, 255, 254)",
        "mp3": "/media/sounds/wii_sports_sms.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "Honored One (Gojo)",
        "color": "rgb(157, 10, 255)",
        "mp3": "/media/sounds/honored-one-gojo.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "Weeeeeeeeeeeeeeeeeee",
        "color": "rgb(255, 237, 222)",
        "mp3": "/media/sounds/weeeeeeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Пердуляция",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/perduliatsiia.mp3"
    },
    {
        "name": "Horse Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-sound.mp3"
    },
    {
        "name": "Invincible Empire Slave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invincible-empire-slave.mp3"
    },
    {
        "name": "ONE PIECE Cornered",
        "color": "rgb(255, 8, 251)",
        "mp3": "/media/sounds/one-piece-ost-cornered-raid-host.mp3"
    },
    {
        "name": "shorsey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shorsey.mp3"
    },
    {
        "name": "Peter Griffin Fortnite",
        "color": "rgb(28, 187, 255)",
        "mp3": "/media/sounds/peter-griffin-fortnite.mp3"
    },
    {
        "name": "Loud Gunshot",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/loud-gunshot.mp3"
    },
    {
        "name": "Undertale select sound",
        "color": "rgb(255, 240, 0)",
        "mp3": "/media/sounds/undertale-select-sound.mp3"
    },
    {
        "name": "Lightsaber Hum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lightsaber-hum.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "fire alarm!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fire-alarm_frlER9H.mp3"
    },
    {
        "name": "THEY NOT LIKE US - Kendrick Lamar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-not-like-us-kendrick-lamar.mp3"
    },
    {
        "name": "Oh my god bruh ah hell no",
        "color": "rgb(29, 44, 255)",
        "mp3": "/media/sounds/oh-my-god-bruh-ah-hell-no.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "undertale sfx (rare to find)",
        "color": "rgb(227, 32, 255)",
        "mp3": "/media/sounds/undertale-sfx-rare-to-find.mp3"
    },
    {
        "name": "Moannn",
        "color": "rgb(67, 54, 255)",
        "mp3": "/media/sounds/moannn.mp3"
    },
    {
        "name": "vine \"no nigga!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-no-nigga.mp3"
    },
    {
        "name": "Windows Longhorn startup",
        "color": "rgb(0, 255, 234)",
        "mp3": "/media/sounds/windows-longhorn-startup.mp3"
    },
    {
        "name": "HOG RIDER LOUD!!",
        "color": "rgb(184, 248, 255)",
        "mp3": "/media/sounds/hog-rider-loud.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "guy says \"bitch\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/guy-says-bitch.mp3"
    },
    {
        "name": "SEVENNNTEEEN YAHHH YAAAOOHHHEYYYAHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sevennnteeen-yahhh-yaaaoohhheyyyahh.mp3"
    },
    {
        "name": "TOMA MILK SHAKE DE MORANGO",
        "color": "rgb(252, 53, 255)",
        "mp3": "/media/sounds/toma-milk-shake-de-morango_bQhZ8mn.mp3"
    },
    {
        "name": "LETS GO GAMBLING!",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/lets-go-gambling_Ci8E7hL.mp3"
    },
    {
        "name": "The scotts meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-scotts-meme.mp3"
    },
    {
        "name": "Cartoon elephant sound",
        "color": "rgb(118, 110, 92)",
        "mp3": "/media/sounds/cartoon-elephant-sound.mp3"
    },
    {
        "name": "Indian yu bastard guy you bloody fucker",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-yu-bastard-guy-you-bloody-fucker.mp3"
    },
    {
        "name": "Bottle breaking sound effect",
        "color": "rgb(92, 61, 35)",
        "mp3": "/media/sounds/bottle-breaking-sound-effect.mp3"
    },
    {
        "name": "(mafoiso) i see one of them",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafoiso-i-see-one-of-them.mp3"
    }
]