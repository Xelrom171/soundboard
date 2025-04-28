/*
taken from https://www.myinstants.com/en/trending/us/
last updated: 1745799741905

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
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
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
        "name": "Gay echo",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/gay-echo.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
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
        "name": "Limit on talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limit-on-talking.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "YOUR PHONE RINGING",
        "color": "rgb(44, 255, 242)",
        "mp3": "/media/sounds/your-phone-ringing_TKtb5bz.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
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
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
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
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "OW OH P DIDDY NO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ow-oh-p-diddy-no.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "Moannnnnygs727272",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moannnnnygs727272.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "I Love, I Love Her (R.E.P.O)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-i-love-her-r-e-p-o.mp3"
    },
    {
        "name": "Chimpanzini Bananini",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chimpanzini-bananini.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "Wilhelm screamv2",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/haaaaaaaaaaaaaaaaaaaaaaa_8Tcv6Ps.mp3"
    },
    {
        "name": "Flint and Steel (minecraft movie)",
        "color": "rgb(115, 196, 255)",
        "mp3": "/media/sounds/flint-and-steel-minecraft-movie.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "M e o w ~",
        "color": "rgb(120, 85, 120)",
        "mp3": "/media/sounds/m-e-o-w.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diddy-done.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "niggerinternet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerinternet_Z7N5rgk.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diddy-done.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "why are you gay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-you-gay.mp3"
    },
    {
        "name": "allahu akbar shout",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allahu-akbar-shout.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "why are you gay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-you-gay.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "allahu akbar shout",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allahu-akbar-shout.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "THE NETHER (Minecraft Movie)",
        "color": "rgb(164, 37, 255)",
        "mp3": "/media/sounds/the-nether-minecraft-movie.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "С Х**ЛИ ТИША ТАКАЯ!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/s-kh-li-tisha-takaia.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "THE NETHER (Minecraft Movie)",
        "color": "rgb(164, 37, 255)",
        "mp3": "/media/sounds/the-nether-minecraft-movie.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "chicken jockey (BASS BOOSTED)",
        "color": "rgb(9, 181, 12)",
        "mp3": "/media/sounds/chicken-jockey-bass-boosted.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "Chicken Jockey (LOUD)",
        "color": "rgb(3, 162, 0)",
        "mp3": "/media/sounds/chicken-jockey-loud.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "Crocodildo Penisini",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crocodildo-penisini.mp3"
    },
    {
        "name": "Lego Yoda Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "SWAMP IZZO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/swamp-izzo.mp3"
    },
    {
        "name": "Crocodildo Penisini",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crocodildo-penisini.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "pornbuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pornbuh.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "sigma boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sigma-boy.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "/media/sounds/67.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "GET THE F* OUTTA HERE B*TCH",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/getthefouttahere.mp3"
    },
    {
        "name": "I am Steve (minecraft movie)",
        "color": "rgb(255, 25, 232)",
        "mp3": "/media/sounds/i-am-steve-minecraft-movie.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "L-lava c-c-chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l-lava-c-c-chicken.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "\"Chicken Jockey\" only",
        "color": "rgb(46, 175, 78)",
        "mp3": "/media/sounds/chicken-jockey-only.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "Chicken jockey (perfect) [fixed]",
        "color": "rgb(255, 137, 248)",
        "mp3": "/media/sounds/chicken-jockey-perfect-fixed.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Get Griddy | Fortnite Emote",
        "color": "rgb(0, 255, 242)",
        "mp3": "/media/sounds/9convert_f28qQKC.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Chicken Jockey!!!",
        "color": "rgb(85, 255, 0)",
        "mp3": "/media/sounds/chicken-jockey_GjALZqG.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
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
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "Niggalodeon",
        "color": "rgb(255, 158, 22)",
        "mp3": "/media/sounds/niggalodeon_D3pIUnh.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Get Griddy | Fortnite Emote",
        "color": "rgb(0, 255, 242)",
        "mp3": "/media/sounds/9convert_f28qQKC.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "the muffin song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-muffin-song-asdfmovie-feat.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Japanese YOOOO",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "Ain't No Party Like A Diddy Party",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/aint-no-party-like-a-diddy-party.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "(Normal Mode.) Mr.Fun Computer Sprunki",
        "color": "rgb(168, 168, 168)",
        "mp3": "/media/sounds/normal-mode-mr-fun-computer-sprunki.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Sponge Bob Disgusting",
        "color": "rgb(211, 199, 0)",
        "mp3": "/media/sounds/sponge-bob-disgusting.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "bombardier crocodilo",
        "color": "rgb(176, 162, 255)",
        "mp3": "/media/sounds/bombardier-crocodilo.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-girl.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "shocking!",
        "color": "rgb(146, 239, 255)",
        "mp3": "/media/sounds/shocking_0NL2w3I.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "IM IN MINECRAFT",
        "color": "rgb(44, 130, 255)",
        "mp3": "/media/sounds/im-in-minecraft.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "Despicable me whistle song",
        "color": "rgb(255, 119, 119)",
        "mp3": "/media/sounds/despicable-me-whistle-song.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "I'm omniing it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-omniing-it.mp3"
    },
    {
        "name": "GYAAAAAAAAAT (bass boosted)",
        "color": "rgb(11, 0, 255)",
        "mp3": "/media/sounds/gyaaaaaaaaat-bass-boosted.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "(Normal Mode.) Oren Sprunki",
        "color": "rgb(255, 89, 8)",
        "mp3": "/media/sounds/normal-mode-oren-sprunki.mp3"
    },
    {
        "name": "GYAAAAAAAAAT (bass boosted)",
        "color": "rgb(11, 0, 255)",
        "mp3": "/media/sounds/gyaaaaaaaaat-bass-boosted.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "Western",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/o-bom-o-mal-e-o-feio-velho-oeste-desafio-dont-talk-duelo-desafio-armas.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "Lingan guli don pollo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lingan-guli-don-pollo.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "jumscare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/video-1-online-audio-converter.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Lingan guli wacha",
        "color": "rgb(255, 24, 47)",
        "mp3": "/media/sounds/lingan-guli-wacha.mp3"
    },
    {
        "name": "Observation Haki (One Piece Katakuri)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/observation_haki_one_piece_katakuri_sound_effect_for_editing_5356509840631764694.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "Мама, Я покакал",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-ia-pokakal.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "/media/sounds/gyatt.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "I'm omniing it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-omniing-it.mp3"
    },
    {
        "name": "el rap de peru",
        "color": "rgb(131, 94, 27)",
        "mp3": "/media/sounds/el-rap-de-peru.mp3"
    },
    {
        "name": "WHY, WON'T, YOU, DIE! Oblivion",
        "color": "rgb(0, 147, 255)",
        "mp3": "/media/sounds/why-wont-you-die_uA0RGV5.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "UFFFOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/illuminati-confirmed-sound-effect_qRZl1r2.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "chinese guy rap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/video0-online-audio-converter_L0R7wUM.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "/media/sounds/gyatt.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "For the emperorr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-the-emperor_CDrYyoT.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "Clash of Clans Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash_of_clan_start_up_soundmp3converter.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "Bombardilo cocodilo",
        "color": "rgb(115, 18, 255)",
        "mp3": "/media/sounds/bombardilo-cocodilo.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Bombardilo cocodilo",
        "color": "rgb(115, 18, 255)",
        "mp3": "/media/sounds/bombardilo-cocodilo.mp3"
    },
    {
        "name": "arab money",
        "color": "rgb(124, 255, 36)",
        "mp3": "/media/sounds/arabmoney.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "samsung notification",
        "color": "rgb(80, 194, 255)",
        "mp3": "/media/sounds/samsung-notification-sound-bass-boosted.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "AKH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akh.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "kick the n b off the plane",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kick-the-n-b-off-the-plane.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "clappin cheekz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clappin-cheekz.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Prowler Siren",
        "color": "rgb(124, 0, 204)",
        "mp3": "/media/sounds/prowler_sound.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Suspense strike",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "Gemid2 troll",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemid2-troll.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Oh, these dudes? They're the villagers!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-these-dudes-theyre-the-villagers.mp3"
    },
    {
        "name": "Подзалупный творожок я несу тебе дружок",
        "color": "rgb(190, 195, 207)",
        "mp3": "/media/sounds/podzalupnyi-tvorozhok-ia-nesu-tebe-druzhok.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Despicable me whistle song",
        "color": "rgb(255, 119, 119)",
        "mp3": "/media/sounds/despicable-me-whistle-song.mp3"
    },
    {
        "name": "BIG D RANDY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-d-randy_VnopRXZ.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "The man on the lakers",
        "color": "rgb(255, 242, 54)",
        "mp3": "/media/sounds/the-man-on-the-lakers.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "Dime qué estás orgulloso shifu",
        "color": "rgb(89, 205, 255)",
        "mp3": "/media/sounds/dime-que-estas-orgulloso-shifu.mp3"
    },
    {
        "name": "Bom dia magnata",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bom-dia-magnata.mp3"
    },
    {
        "name": "UFFFOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/illuminati-confirmed-sound-effect_qRZl1r2.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Owen Wilson Wow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/6_1Njp68r.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "FitnessGram Pacer Test",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fitnessgram.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "cod zombies scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-zombie-yell-meme-sound-effect.mp3"
    },
    {
        "name": "Clash of Clans Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash_of_clan_start_up_soundmp3converter.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Circus theme",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/circus-theme-music-www.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "THINK MARK!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/think-mark_u48iMaR.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Minecraft TNT explosion!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tnt-explosion.mp3"
    },
    {
        "name": "For the emperorr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-the-emperor_CDrYyoT.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "RELEASE MEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/release-meee.mp3"
    },
    {
        "name": "THINK MARK!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/think-mark_u48iMaR.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "nigerian people",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nigerian-people.mp3"
    },
    {
        "name": "Totaka's Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/totakas-song.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "Stop! You've violated the law!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop_ZnQ9jIO.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "Roblox Yummy",
        "color": "rgb(5, 182, 146)",
        "mp3": "/media/sounds/roblox-yummy.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "bing-bop-boom-boom-boom-bop-bam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bing-bop-boom-boom-boom-bop-bam.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Stop! You've violated the law!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop_ZnQ9jIO.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Roblox Yummy",
        "color": "rgb(5, 182, 146)",
        "mp3": "/media/sounds/roblox-yummy.mp3"
    },
    {
        "name": "For the emperorr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-the-emperor_CDrYyoT.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "RELEASE MEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/release-meee.mp3"
    },
    {
        "name": "Подзалупный творожок я несу тебе дружок",
        "color": "rgb(190, 195, 207)",
        "mp3": "/media/sounds/podzalupnyi-tvorozhok-ia-nesu-tebe-druzhok.mp3"
    },
    {
        "name": "nigerian people",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nigerian-people.mp3"
    },
    {
        "name": "Totaka's Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/totakas-song.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "lion scan",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/lion-scan-new.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "Clash of Clans Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash_of_clan_start_up_soundmp3converter.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Circus theme",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/circus-theme-music-www.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Mario Bros Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_2.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Girl UwU",
        "color": "rgb(206, 144, 255)",
        "mp3": "/media/sounds/girl-uwu.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "Cheaper Town Hall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cheaper-town-hall.mp3"
    },
    {
        "name": "Chili Chili Fart",
        "color": "rgb(41, 128, 24)",
        "mp3": "/media/sounds/chili-chili-fart_0ikahyN.mp3"
    },
    {
        "name": "Olha a mensagem !b",
        "color": "rgb(0, 255, 34)",
        "mp3": "/media/sounds/olha-a-mensagem-b_Rp09o17.mp3"
    },
    {
        "name": "gemidane do zape 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemidane-do-zape-2.mp3"
    },
    {
        "name": "wonderhoy!",
        "color": "rgb(82, 0, 17)",
        "mp3": "/media/sounds/wonderhoy.mp3"
    },
    {
        "name": "Frog Follow",
        "color": "rgb(10, 255, 8)",
        "mp3": "/media/sounds/frog-follow.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "Mario Bros Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_2.mp3"
    },
    {
        "name": "Deja vu fade",
        "color": "rgb(138, 0, 0)",
        "mp3": "/media/sounds/deja-vu-fade.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "тампоны для алены",
        "color": "rgb(113, 20, 255)",
        "mp3": "/media/sounds/tampony-dlia-aleny.mp3"
    },
    {
        "name": "Dime qué estás orgulloso shifu",
        "color": "rgb(89, 205, 255)",
        "mp3": "/media/sounds/dime-que-estas-orgulloso-shifu.mp3"
    },
    {
        "name": "Bom dia magnata",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bom-dia-magnata.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "Bolsonaro Popcorn and Ice Cream",
        "color": "rgb(255, 113, 223)",
        "mp3": "/media/sounds/bolsonaro-popcorn-and-ice-cream.mp3"
    },
    {
        "name": "UFFFOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/illuminati-confirmed-sound-effect_qRZl1r2.mp3"
    },
    {
        "name": "Gummy bear album",
        "color": "rgb(42, 255, 79)",
        "mp3": "/media/sounds/look-for-the-gummybear-album-in-stores-november-13th.mp3"
    },
    {
        "name": "fart_moan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-moan_fHgJDiE.mp3"
    },
    {
        "name": "Tuturu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuturu_1.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Da Baby Lets Goooo",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "IPhone Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "daisy bell creepy version",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daisy-bell-creepy-version.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "Молитва",
        "color": "rgb(255, 224, 68)",
        "mp3": "/media/sounds/molitva.mp3"
    },
    {
        "name": "Rizz White Tee Dont Get Me DIrty",
        "color": "rgb(255, 104, 210)",
        "mp3": "/media/sounds/rizz-white-tee-dont-get-me-dirty.mp3"
    },
    {
        "name": "Jeffy UUUUUUHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeffy-uuuuuuhhhhh.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "/media/sounds/gyatt.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bottom.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Crowd Laughter (short)",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/laughter-short.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "emoji death sound",
        "color": "rgb(255, 230, 6)",
        "mp3": "/media/sounds/emoji-death-sound.mp3"
    },
    {
        "name": "Cave Ambience 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave21.mp3"
    },
    {
        "name": "Chris Smoove Haha",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/chris-smooves-autotune-haha.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "Undertale - Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/undertale-game-over.mp3"
    },
    {
        "name": "Eggman's Announcement",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eggnouncement.mp3"
    },
    {
        "name": "nokia tone sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nokia-ringtone-1994.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "Nice cock!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-cock_n6IXwwg.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "FNaF 2 jumpscare",
        "color": "rgb(59, 248, 255)",
        "mp3": "/media/sounds/fnaf-2-death-scream.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Olha a mensagem !b",
        "color": "rgb(0, 255, 34)",
        "mp3": "/media/sounds/olha-a-mensagem-b_Rp09o17.mp3"
    },
    {
        "name": "Едим говно с братаном",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/edim-govno-s-bratanom.mp3"
    },
    {
        "name": "Samsung alarm meme_",
        "color": "rgb(2, 36, 56)",
        "mp3": "/media/sounds/samsung-alarm-meme_FCtnrXA.mp3"
    },
    {
        "name": "Орёл",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oriol_wDERDe6.mp3"
    },
    {
        "name": "Family guy - star wars",
        "color": "rgb(159, 255, 62)",
        "mp3": "/media/sounds/petergriffinstarwars.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/headshot_1.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "Goofy ahh SpongeBob sound",
        "color": "rgb(208, 215, 0)",
        "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "emoji death sound",
        "color": "rgb(255, 230, 6)",
        "mp3": "/media/sounds/emoji-death-sound.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "Dracula Flow - They forgot I'm him",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dracula-flow-they-forgot-im-him.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "Hello moto",
        "color": "rgb(234, 63, 255)",
        "mp3": "/media/sounds/hello-moto-sound-notification.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "Cave Ambience 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave21.mp3"
    },
    {
        "name": "General Lee HORN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/general-lee-horn.mp3"
    },
    {
        "name": "Chris Smoove Haha",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/chris-smooves-autotune-haha.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Undertale - Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/undertale-game-over.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "Hello moto",
        "color": "rgb(234, 63, 255)",
        "mp3": "/media/sounds/hello-moto-sound-notification.mp3"
    },
    {
        "name": "kick the n b off the plane",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kick-the-n-b-off-the-plane.mp3"
    },
    {
        "name": "e3lkjld;kfjlgkldkflkdlfkgdfg",
        "color": "rgb(255, 152, 0)",
        "mp3": "/media/sounds/e3lkjld-kfjlgkldkflkdlfkgdfg.mp3"
    },
    {
        "name": "Slow baby laugh",
        "color": "rgb(116, 241, 155)",
        "mp3": "/media/sounds/slow-baby-laugh.mp3"
    },
    {
        "name": "Eminem - Rap God",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eminem-rap-god.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "They Love Crushing Loaf",
        "color": "rgb(174, 163, 120)",
        "mp3": "/media/sounds/they-love-crushing-loaf.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
    },
    {
        "name": "It's Gonna Be May",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/n-sync-its-gonna-be-me-1.mp3"
    },
    {
        "name": "Chinese Food Delivery",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chinese-food-delivery.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "Toasty mortal kombat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toasty_tfCWsU6.mp3"
    },
    {
        "name": "Valorant - Chamber Enemy ULT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-chamber-enemy-ult.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Mario Bros Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_2.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "Gangsta's Paradise Choir 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
    },
    {
        "name": "Wide Putin Walkin",
        "color": "rgb(49, 59, 67)",
        "mp3": "/media/sounds/wide-putin-walkin.mp3"
    },
    {
        "name": "daisy bell creepy version",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daisy-bell-creepy-version.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "Cave Ambience 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave21.mp3"
    },
    {
        "name": "Elite Waagh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/waagh.mp3"
    },
    {
        "name": "pain theme naruto",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pain-2.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "Uncle ruckus GUILTY",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-guilty.mp3"
    },
    {
        "name": "nah she got you blushing twin sound",
        "color": "rgb(143, 26, 166)",
        "mp3": "/media/sounds/nah-she-got-you-blushing-twin-sound.mp3"
    },
    {
        "name": "Halo 1 Double Kill",
        "color": "rgb(137, 160, 120)",
        "mp3": "/media/sounds/halo-1-double-kill.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "FNaF 2 jumpscare",
        "color": "rgb(59, 248, 255)",
        "mp3": "/media/sounds/fnaf-2-death-scream.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "hahaha gago",
        "color": "rgb(9, 255, 34)",
        "mp3": "/media/sounds/gago-effect-by-cong-tv.mp3"
    },
    {
        "name": "I told you",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/family-guy-didnt-i-tell-you_2lan03B.mp3"
    },
    {
        "name": "Car Brake and Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-brake-and-crash.mp3"
    },
    {
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "GYYAAAAAT!!!",
        "color": "rgb(255, 174, 230)",
        "mp3": "/media/sounds/gyyaaaaat.mp3"
    },
    {
        "name": "flint and steel song",
        "color": "rgb(10, 247, 255)",
        "mp3": "/media/sounds/flint-and-steel-song.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "Suspense Sound Effects",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effects.mp3"
    },
    {
        "name": "New Follower - @Aymplify",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/newf.mp3"
    },
    {
        "name": "YOU BLEW IT",
        "color": "rgb(153, 204, 153)",
        "mp3": "/media/sounds/you-blew-it_1.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "Its A Me, Mario",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/its-me-mario.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
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
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Пожарная тревога",
        "color": "rgb(184, 0, 0)",
        "mp3": "/media/sounds/pozharnaia-trevoga.mp3"
    },
    {
        "name": "Half-Life 1 Gibbing sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flesh_bloody_break.mp3"
    },
    {
        "name": "Car Brake and Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-brake-and-crash.mp3"
    },
    {
        "name": "My Shayla",
        "color": "rgb(202, 117, 255)",
        "mp3": "/media/sounds/my-shayla_9Mj7mKI.mp3"
    },
    {
        "name": "Family guy - Diabeto",
        "color": "rgb(255, 202, 104)",
        "mp3": "/media/sounds/family-guy-diabeto.mp3"
    },
    {
        "name": "As a Child I Yearned For The Mines",
        "color": "rgb(0, 174, 255)",
        "mp3": "/media/sounds/as-a-child-i-yearned-for-the-mines.mp3"
    },
    {
        "name": "Invincible pretty sure",
        "color": "rgb(13, 53, 255)",
        "mp3": "/media/sounds/invincible-pretty-sure.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "toma jack no ar condicionado ah jogando play 5",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toma-jack-no-ar-condicionado-ah-jogando-play-5.mp3"
    },
    {
        "name": "I am so lonely",
        "color": "rgb(238, 238, 238)",
        "mp3": "/media/sounds/i-am-so-lonely.mp3"
    },
    {
        "name": "Skibidi Fortnite - @Cartel_Dealer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skibidi-fortnite-cartel-dealer.mp3"
    },
    {
        "name": "niggersong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggersong_oEuh5Gj.mp3"
    },
    {
        "name": "Spamton laugh",
        "color": "rgb(171, 56, 255)",
        "mp3": "/media/sounds/spamton-laugh.mp3"
    },
    {
        "name": "Family Feud - Returning from Commercial",
        "color": "rgb(25, 206, 255)",
        "mp3": "/media/sounds/family-feud-returning-from-commercial.mp3"
    },
    {
        "name": "tralalero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero.mp3"
    },
    {
        "name": "niggapls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggapls.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "Lightsaber ON",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/lightsaber_02.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "tom da tank meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-version_7n1qEm2.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "Trump China",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/china_pH6AIw0.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "\"Hey\" Female Voice Sound Effect",
        "color": "rgb(20, 156, 255)",
        "mp3": "/media/sounds/hey-female-voice-sound-effect.mp3"
    },
    {
        "name": "GANGNAM STYLE",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/psy-gangnam-style-1.mp3"
    },
    {
        "name": "what the hell is even that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whatthehell_qrePvEr.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Windows 3.1 startup (tada)",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/win31.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/falling.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "yippie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippie_Kq73X8D.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Halo 1 Double Kill",
        "color": "rgb(137, 160, 120)",
        "mp3": "/media/sounds/halo-1-double-kill.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "Bang Bang Skeet Skeet",
        "color": "rgb(26, 6, 175)",
        "mp3": "/media/sounds/bang-bang-skeet-skeet.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "gorilla tag lava tag",
        "color": "rgb(255, 142, 207)",
        "mp3": "/media/sounds/gorilla-tag-lava-tag.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Hello are you pooping",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/hello-are-you-pooping.mp3"
    },
    {
        "name": "Pure Chaos Scarlet Witch SFX",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/pure-chaos-scarlet-witch-sfx.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Tum tum tum sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tum-tum-tum-sahur.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "я жирный уебан",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ia-zhirnyi-ueban.mp3"
    },
    {
        "name": "Peter griffin hard R",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/peter-griffin-hard-r.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "bombombini guzini",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombombini-guzini.mp3"
    },
    {
        "name": "Mario Death",
        "color": "rgb(255, 6, 6)",
        "mp3": "/media/sounds/8d82b5_new_super_mario_bros_death_sound_effect.mp3"
    },
    {
        "name": "DMC3 WHY ISN'T THIS WORKING (VERGIL)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-isnt-this-working.mp3"
    },
    {
        "name": "Ctohbi 1950",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ctohbi-1950.mp3"
    },
    {
        "name": "The Limey- Im coming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limey-audio.mp3"
    },
    {
        "name": "AH NONONONO RISAS",
        "color": "rgb(76, 255, 11)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh-verde.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Minecraft Cave Sound 5",
        "color": "rgb(0, 157, 255)",
        "mp3": "/media/sounds/minecraft-cave-sound-5.mp3"
    },
    {
        "name": "Was ist denn hier los?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/was-ist-denn-hier-los.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Bomba en casa",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/bomba-en-casa.mp3"
    },
    {
        "name": "Lula: VAI TODO MINDO SE FDR!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lula-vai-todo-mindo-se-fdr.mp3"
    },
    {
        "name": "макан асфальт",
        "color": "rgb(83, 56, 34)",
        "mp3": "/media/sounds/makan-asfalt.mp3"
    },
    {
        "name": "не пробил",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wot-mp3cut.mp3"
    },
    {
        "name": "im over here strokin'",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-over-here-strokin_iiwdXZF.mp3"
    },
    {
        "name": "Молитва",
        "color": "rgb(255, 224, 68)",
        "mp3": "/media/sounds/molitva.mp3"
    },
    {
        "name": "It's Gonna Be May",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/n-sync-its-gonna-be-me-1.mp3"
    },
    {
        "name": "brain rot 7000",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/brain-rot-7000.mp3"
    },
    {
        "name": "Rizz White Tee Dont Get Me DIrty",
        "color": "rgb(255, 104, 210)",
        "mp3": "/media/sounds/rizz-white-tee-dont-get-me-dirty.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "number one victory royale yeah fortnite we bout",
        "color": "rgb(128, 255, 221)",
        "mp3": "/media/sounds/number-one-victory-royale-yeah-fortnite-we-bout-to-get-down.mp3"
    },
    {
        "name": "HOLD UP WAIT A MINUTE SOMETHIN",
        "color": "rgb(37, 255, 30)",
        "mp3": "/media/sounds/untitled_OTuNHvt.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Gudjob! Anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-job_d15pHHg.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Da Baby Lets Goooo",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "Crowd Laughter (short)",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/laughter-short.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
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
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "U Got That (meme)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/u-got-that-mp3-fix.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "CS - Holy shit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/holy-shit.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "tom da tank meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-version_7n1qEm2.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "Talkingg Benn Laughh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talkingg-benn-laughh.mp3"
    },
    {
        "name": "Okay Black Guy Vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-song-2_2.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "AIM Incoming Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "GANGNAM STYLE",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/psy-gangnam-style-1.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/falling.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "General Lee HORN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/general-lee-horn.mp3"
    },
    {
        "name": "Spongebob Dolphin censor",
        "color": "rgb(255, 145, 239)",
        "mp3": "/media/sounds/spongebob-dolphin-censor_JoDuvPV.mp3"
    },
    {
        "name": "romantic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/45_0HW2p0x.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "yippie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippie_Kq73X8D.mp3"
    },
    {
        "name": "long wet smelly ass fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/long-wet-smelly-ass-fart.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "long wet smelly ass fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/long-wet-smelly-ass-fart.mp3"
    },
    {
        "name": "dramatic cue A",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/dramatic-cue-a.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "nba draft",
        "color": "rgb(42, 63, 255)",
        "mp3": "/media/sounds/nba-draft-sound-2021.mp3"
    },
    {
        "name": "FNaF 2 jumpscare",
        "color": "rgb(59, 248, 255)",
        "mp3": "/media/sounds/fnaf-2-death-scream.mp3"
    },
    {
        "name": "Dracula Flow - Ball So Hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dracula-flow-ball-so-hard.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "Burp & Fart",
        "color": "rgb(255, 114, 114)",
        "mp3": "/media/sounds/burp-fart.mp3"
    },
    {
        "name": "I told you",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/family-guy-didnt-i-tell-you_2lan03B.mp3"
    },
    {
        "name": "Car Brake and Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-brake-and-crash.mp3"
    },
    {
        "name": "WOP WOP WOP KENDRICK",
        "color": "rgb(103, 101, 56)",
        "mp3": "/media/sounds/wop-wop-wop-kendrick.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "As a Child I Yearned For The Mines",
        "color": "rgb(0, 174, 255)",
        "mp3": "/media/sounds/as-a-child-i-yearned-for-the-mines.mp3"
    },
    {
        "name": "Едим говно с братаном",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/edim-govno-s-bratanom.mp3"
    },
    {
        "name": "SEA SALT louder by w",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/sea-salt-louder-by-w.mp3"
    },
    {
        "name": "bombombini guzini",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombombini-guzini.mp3"
    },
    {
        "name": "Tu pene no pierde sabor a caramelo",
        "color": "rgb(255, 214, 192)",
        "mp3": "/media/sounds/tu-pene-no-pierde-sabor-a-caramelo.mp3"
    },
    {
        "name": "Suspense Sound Effects",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effects.mp3"
    },
    {
        "name": "Spamton laugh",
        "color": "rgb(171, 56, 255)",
        "mp3": "/media/sounds/spamton-laugh.mp3"
    },
    {
        "name": "New Follower - @Aymplify",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/newf.mp3"
    },
    {
        "name": "aiscream_02_ayumu",
        "color": "rgb(255, 84, 45)",
        "mp3": "/media/sounds/aiscream-02-ayumu.mp3"
    },
    {
        "name": "tralalero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Ooh Wah Ah Ah Ah",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/david-oohwahahahah.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "Cartoon Chase",
        "color": "rgb(24, 255, 32)",
        "mp3": "/media/sounds/chase_QnUxJTk.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "~discord kitten~",
        "color": "rgb(51, 145, 215)",
        "mp3": "/media/sounds/discord-kitten_GcQZVvU.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "Crowd cheering and clapping",
        "color": "rgb(234, 255, 95)",
        "mp3": "/media/sounds/99634_tomlija_small-crowd-cheering-and-clapping.mp3"
    },
    {
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "Respect +++",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-abertura-oficial.mp3"
    },
    {
        "name": "Glass breaking sound effect",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
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
        "name": "rizz on rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-on-rizz.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "PackGod Furry",
        "color": "rgb(122, 122, 255)",
        "mp3": "/media/sounds/packgod-furry.mp3"
    },
    {
        "name": "DMC - I AM THE STORM",
        "color": "rgb(65, 62, 138)",
        "mp3": "/media/sounds/approaching-storm.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "clock tick",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/clock-tick.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "ROJÃO SUPER ESTOURADO!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rojao-super-estourado.mp3"
    },
    {
        "name": "Sukuna's ryoiki tenkai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sukunas-ryoiki-tenkai.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "OH PLUTOOO",
        "color": "rgb(94, 101, 255)",
        "mp3": "/media/sounds/oh-plutooo.mp3"
    },
    {
        "name": "anvil drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anvil-drop.mp3"
    },
    {
        "name": "HE-HELL NAH dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-hell-nah-dog.mp3"
    },
    {
        "name": "Do You Have Any Ibuprofen",
        "color": "rgb(237, 43, 255)",
        "mp3": "/media/sounds/do-you-have-any-ibuprofen.mp3"
    },
    {
        "name": "Confused cross eyed kitten meme",
        "color": "rgb(47, 22, 255)",
        "mp3": "/media/sounds/confused-cross-eyed-kitten-meme.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "vine boom sound meme",
        "color": "rgb(167, 140, 255)",
        "mp3": "/media/sounds/vine-boom-sound-meme.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "LET'S GO GAMBLING AW DANG IT",
        "color": "rgb(8, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling-aw-dang-it.mp3"
    },
    {
        "name": "gunshots mixed",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/gunshots-mixed.mp3"
    },
    {
        "name": "Long brain fart earrape",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/long-brain-fart-earrape.mp3"
    },
    {
        "name": "buzzed in family feud prob wont use",
        "color": "rgb(41, 30, 255)",
        "mp3": "/media/sounds/buzzed-in-family-feud-prob-wont-use.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "AIM Incoming Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "Mario Hey Stinky",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-stinky_arPrGiw.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "Pokeball Open",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokeball_sound_effects_mp3cut_1.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/falling.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "Crowd cheering and clapping",
        "color": "rgb(234, 255, 95)",
        "mp3": "/media/sounds/99634_tomlija_small-crowd-cheering-and-clapping.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "romantic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/45_0HW2p0x.mp3"
    },
    {
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "Respect +++",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-abertura-oficial.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "Woosh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh-mark_diangelo-4778593.mp3"
    },
    {
        "name": "yippie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippie_Kq73X8D.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "TF2 Notification Sound",
        "color": "rgb(157, 157, 157)",
        "mp3": "/media/sounds/tf2-notification-sound.mp3"
    },
    {
        "name": "Yep, That's Me You're Probably Wondering...",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/original_-yep_-that_s-me-you_re-probably-wondering.mp3"
    },
    {
        "name": "Police siren (for loop)",
        "color": "rgb(54, 87, 255)",
        "mp3": "/media/sounds/police-siren-for-loop.mp3"
    },
    {
        "name": "Bang Bang Skeet Skeet",
        "color": "rgb(26, 6, 175)",
        "mp3": "/media/sounds/bang-bang-skeet-skeet.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "OH PLUTOOO",
        "color": "rgb(94, 101, 255)",
        "mp3": "/media/sounds/oh-plutooo.mp3"
    },
    {
        "name": "Mi bomboclaut",
        "color": "rgb(255, 158, 31)",
        "mp3": "/media/sounds/mi-bomboclaut_linGNm7.mp3"
    },
    {
        "name": "Ginagawa mo",
        "color": "rgb(14, 255, 34)",
        "mp3": "/media/sounds/ginagawa-mo_Vz4vv74.mp3"
    },
    {
        "name": "gorilla tag lava tag",
        "color": "rgb(255, 142, 207)",
        "mp3": "/media/sounds/gorilla-tag-lava-tag.mp3"
    },
    {
        "name": "Bye have a great time (Twitch sound)",
        "color": "rgb(0, 199, 255)",
        "mp3": "/media/sounds/bye-have-a-great-time-twitch-sound.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "para de mandar audio to na ucrania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-de-mandar-audio-to-na-ucrania.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "toilet ananas nasdas",
        "color": "rgb(255, 7, 7)",
        "mp3": "/media/sounds/toilet-ananas-nasdas.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "ah xibiuzao grandao",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-xibiuzao-grandao.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "DETROIT BASKETBALL!!!",
        "color": "rgb(0, 17, 255)",
        "mp3": "/media/sounds/detoit-basketball-audiotrimmer.mp3"
    },
    {
        "name": "Chaloo",
        "color": "rgb(100, 234, 46)",
        "mp3": "/media/sounds/chaloo.mp3"
    },
    {
        "name": "Back to work, back to work!",
        "color": "rgb(139, 240, 255)",
        "mp3": "/media/sounds/back-to-work-back-to-work.mp3"
    },
    {
        "name": "Social Credit Deducted",
        "color": "rgb(255, 164, 73)",
        "mp3": "/media/sounds/social-credit-deducted.mp3"
    },
    {
        "name": "Вы приговариваетесь (мармелад)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vy-prigovarivaetes-marmelad.mp3"
    },
    {
        "name": "pig sheriff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pig-sheriff.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "Woo, Yeah Baby!",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
    },
    {
        "name": "Hard Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fooz.mp3"
    },
    {
        "name": "Get up meek mill",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-up-meek-mill.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Indian Kid Funny asf",
        "color": "rgb(88, 255, 47)",
        "mp3": "/media/sounds/record-online-voice-recorder_37uPSci.mp3"
    },
    {
        "name": "quandale dingle bingleton",
        "color": "rgb(247, 255, 42)",
        "mp3": "/media/sounds/quandale-dingle-bingleton.mp3"
    },
    {
        "name": "Minecraft Bow",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/bow_shoot.mp3"
    },
    {
        "name": "Minecraft Grass Walking Sound Effect",
        "color": "rgb(0, 139, 23)",
        "mp3": "/media/sounds/minecraft-grass-walking-sound-effect.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "Sad Trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-trombone_CTCquhN.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "South Park - Wiener Chorus",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/my-song-32.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "Emet Selch That's not very cashmoney of you",
        "color": "rgb(41, 45, 255)",
        "mp3": "/media/sounds/emet-selch-thats-not-very-cashmoney-of-you.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "i be poppin bottles",
        "color": "rgb(20, 114, 255)",
        "mp3": "/media/sounds/i-be-poppin-bottles.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "baby crying",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/llorando.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "Skill Issue Halo Announcer",
        "color": "rgb(0, 255, 136)",
        "mp3": "/media/sounds/skill-issue-halo-announcer.mp3"
    },
    {
        "name": "Star Wars Cantina",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cantina-band.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "SSB4 - GAME!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/ssbannouncer-game.mp3"
    },
    {
        "name": "Awkward Crickets",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect_YK6dDJG.mp3"
    },
    {
        "name": "sticking out your gyatt for the rizzler",
        "color": "rgb(165, 112, 80)",
        "mp3": "/media/sounds/sticking-out-your-gyatt-for-the-rizzler.mp3"
    },
    {
        "name": "R6 Lion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/r6-lion-sound-effect.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
    },
    {
        "name": "AWP CSGO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cs_go-awp-sound.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "Donkey kong oh banana",
        "color": "rgb(250, 255, 17)",
        "mp3": "/media/sounds/donkey-kong-64-oh-banana.mp3"
    },
    {
        "name": "Meowww",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-end-meow-by-nekocat-just-3-second-1.mp3"
    },
    {
        "name": "OH MY GAH (Clean)",
        "color": "rgb(254, 0, 255)",
        "mp3": "/media/sounds/oh-my-gah.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Goofy Ahh Ringtone",
        "color": "rgb(50, 192, 255)",
        "mp3": "/media/sounds/goofy-ahh-ringtone.mp3"
    },
    {
        "name": "what the hell goofy ahh (slv_sounds)",
        "color": "rgb(248, 114, 255)",
        "mp3": "/media/sounds/what-the-hell-goofy-ahh-slv-sounds.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "/media/sounds/boing-sound.mp3"
    },
    {
        "name": "Discord Drip",
        "color": "rgb(80, 121, 255)",
        "mp3": "/media/sounds/video0-1_fWd0GGB.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "Happy happy happy cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/happy-happy-happy-cat.mp3"
    },
    {
        "name": "SWORD SLASH!",
        "color": "rgb(230, 230, 230)",
        "mp3": "/media/sounds/sword_slash-ab22fe02-3826-345a-80ad-dc22261a9127.mp3"
    },
    {
        "name": "Hey you guuys",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/the-goonies-hey-you-guys.mp3"
    },
    {
        "name": "one pound fish",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-pound-fish_4BV9ITW.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "brazil alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/brazil-alarm.mp3"
    },
    {
        "name": "Dark Souls Carving - Thank You",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you.mp3"
    },
    {
        "name": "\"Wow!\" (anime voice accent)",
        "color": "rgb(216, 114, 255)",
        "mp3": "/media/sounds/wow-anime-voice-accent.mp3"
    },
    {
        "name": "its coming out but",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-coming-out-but.mp3"
    },
    {
        "name": "Tony Tony Chopper Singing",
        "color": "rgb(207, 37, 65)",
        "mp3": "/media/sounds/tony-tony-chopper-singing.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "нолик бомбит",
        "color": "rgb(0, 162, 255)",
        "mp3": "/media/sounds/nolik-bombit.mp3"
    },
    {
        "name": "Lula: VAI TODO MINDO SE FDR!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lula-vai-todo-mindo-se-fdr.mp3"
    },
    {
        "name": "УХ ТЫ БЛЯ°•°",
        "color": "rgb(67, 67, 67)",
        "mp3": "/media/sounds/ukh-ty-bliadeg-deg.mp3"
    },
    {
        "name": "AI MEU C#ZINHO ≧w≦ - Penélope Di Monaco",
        "color": "rgb(255, 51, 228)",
        "mp3": "/media/sounds/ai-meu-c-zinho-w-penelope-di-monaco.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "angy monkey.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angy-monkey-mp3.mp3"
    },
    {
        "name": "Flashbang jumpscare (LOUD)",
        "color": "rgb(222, 222, 17)",
        "mp3": "/media/sounds/flashbang-jumpscare-loud.mp3"
    },
    {
        "name": "не пробил",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wot-mp3cut.mp3"
    },
    {
        "name": "Robot stroking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/robot-stroking.mp3"
    },
    {
        "name": "Samsung alarm meme_",
        "color": "rgb(2, 36, 56)",
        "mp3": "/media/sounds/samsung-alarm-meme_FCtnrXA.mp3"
    },
    {
        "name": "niggacell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggacell.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "THats why hes the GOAT THE GOAT!!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thats-why-hes-the-goat-the-goat.mp3"
    },
    {
        "name": "Family guy - star wars",
        "color": "rgb(159, 255, 62)",
        "mp3": "/media/sounds/petergriffinstarwars.mp3"
    },
    {
        "name": "excuse me burp",
        "color": "rgb(0, 255, 236)",
        "mp3": "/media/sounds/excuse-me-burp.mp3"
    },
    {
        "name": "Family Feud ding",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-feud-ding.mp3"
    },
    {
        "name": "Intervention Sound mw2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/intervention-sound-mw2.mp3"
    },
    {
        "name": "Satchel Charge Rust",
        "color": "rgb(160, 108, 88)",
        "mp3": "/media/sounds/c4f858be-dca1-4ab3-a864-8181e26cccdd.mp3"
    },
    {
        "name": "Morgan Freeman Titty Sprinkles",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/morgan-freeman-says-tity-sprinkles.mp3"
    },
    {
        "name": "Richard Ahh Screaming",
        "color": "rgb(255, 184, 235)",
        "mp3": "/media/sounds/richard-ahh-screaming.mp3"
    },
    {
        "name": "erikasongg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/erikasongg.mp3"
    },
    {
        "name": "you found your moo",
        "color": "rgb(255, 123, 208)",
        "mp3": "/media/sounds/you-found-your-moo.mp3"
    },
    {
        "name": "Brand New Saxophone",
        "color": "rgb(37, 235, 168)",
        "mp3": "/media/sounds/brand-new-saxophone.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
    },
    {
        "name": "im over here strokin'",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-over-here-strokin_iiwdXZF.mp3"
    },
    {
        "name": "Bolsonaro Popcorn and Ice Cream",
        "color": "rgb(255, 113, 223)",
        "mp3": "/media/sounds/bolsonaro-popcorn-and-ice-cream.mp3"
    },
    {
        "name": "Chicken Jockey (Crowded)",
        "color": "rgb(241, 207, 255)",
        "mp3": "/media/sounds/chicken-jockey-crowded.mp3"
    },
    {
        "name": "Tamale",
        "color": "rgb(253, 255, 137)",
        "mp3": "/media/sounds/tamale.mp3"
    },
    {
        "name": "Darude sandstorm flute",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/darude-sandstorm-flute-anime-version-mp3cut.mp3"
    },
    {
        "name": "whats a father",
        "color": "rgb(255, 63, 207)",
        "mp3": "/media/sounds/whats-a-father.mp3"
    },
    {
        "name": "Family guy - star wars",
        "color": "rgb(159, 255, 62)",
        "mp3": "/media/sounds/petergriffinstarwars.mp3"
    },
    {
        "name": "IIIIIIIHHHHHHHHHÁÁÁÁÁÁÁÁÁÁ!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/comedy-male-yelling-yee-ha-sound-effects-free-download-mp3cut.mp3"
    },
    {
        "name": "Twitter notification sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/twitter-notification-sound.mp3"
    },
    {
        "name": "Killer Queen bomb",
        "color": "rgb(255, 247, 255)",
        "mp3": "/media/sounds/killer-queen-bomb.mp3"
    },
    {
        "name": "Family Feud - Intense",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-feud-intense.mp3"
    },
    {
        "name": "Family Feud NO Ding",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-feud-no-ding.mp3"
    },
    {
        "name": "GOD DID",
        "color": "rgb(255, 183, 208)",
        "mp3": "/media/sounds/god-did.mp3"
    },
    {
        "name": "Samsung Ringtone",
        "color": "rgb(148, 193, 255)",
        "mp3": "/media/sounds/samsung-ringtone.mp3"
    },
    {
        "name": "Borat very nice",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/borat_-_very_nice-4.mp3"
    },
    {
        "name": "Leeroy Jenkins",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/leroy.swf.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Wanna break from the ads",
        "color": "rgb(57, 255, 113)",
        "mp3": "/media/sounds/wanna-break-from-the-ads.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "number one victory royale yeah fortnite we bout",
        "color": "rgb(128, 255, 221)",
        "mp3": "/media/sounds/number-one-victory-royale-yeah-fortnite-we-bout-to-get-down.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "im bout to end this man caree",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/recording-22.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Epic Sax Guy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/epicsaxguy.mp3"
    },
    {
        "name": "Da Baby Lets Goooo",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "Nick/Disney Suprise Laugh Track “oooh “",
        "color": "rgb(255, 157, 10)",
        "mp3": "/media/sounds/nick-disney-suprise-laugh-track-oooh.mp3"
    },
    {
        "name": "Look Easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/look-easy_JX3Yu5M.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "Пердуляция",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/perduliatsiia.mp3"
    },
    {
        "name": "Que dificil me la pusiste diablo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-dificil-me-la-pusiste-diablo.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "High value item BotW/TotK",
        "color": "rgb(255, 245, 99)",
        "mp3": "/media/sounds/high-value-item-botw-totk.mp3"
    },
    {
        "name": "Минетики",
        "color": "rgb(0, 170, 255)",
        "mp3": "/media/sounds/minetiki.mp3"
    },
    {
        "name": "Prowler Sound Effect HD",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/prowler-sound-effect-hd.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "LEBRONNNNN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebronnnnn.mp3"
    },
    {
        "name": "Frau: SCOTT!!!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scott.mp3"
    },
    {
        "name": "euvougozarnocusafadooaaaaaaaaaaaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/euvougozarnocusafadooaaaaaaaaaaaaah.mp3"
    },
    {
        "name": "sans.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sans_RbBhTQn.mp3"
    },
    {
        "name": "Eddie munson its ok stranger things",
        "color": "rgb(255, 13, 13)",
        "mp3": "/media/sounds/eddie-munson-its-ok-stranger-things.mp3"
    },
    {
        "name": "waveigl O PERUUU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/o-peruuuuuuuuuu.mp3"
    },
    {
        "name": "Heisenberg Helium",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heisenberg-helium.mp3"
    },
    {
        "name": "Ooga booga!",
        "color": "rgb(51, 0, 0)",
        "mp3": "/media/sounds/ooga-booga.mp3"
    },
    {
        "name": "Bye Bye~Mikey tokyo revengers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-bye-mikey-tokyo-revengers.mp3"
    },
    {
        "name": "Lady gargar",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/lady-gargar.mp3"
    },
    {
        "name": "Joseph Joestar - OMG (5)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jj-omg5.mp3"
    },
    {
        "name": "Arnold stop it",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/arnold-stop-it.mp3"
    },
    {
        "name": "Its My Life (Russian)",
        "color": "rgb(31, 32, 228)",
        "mp3": "/media/sounds/its-my-life-russian.mp3"
    },
    {
        "name": "Tuar Memek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuar-memek.mp3"
    },
    {
        "name": "T Sit Down",
        "color": "rgb(105, 76, 255)",
        "mp3": "/media/sounds/t-sit-down.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "defuse valorant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/defuse-valorant.mp3"
    },
    {
        "name": "Ric Flair Wooo",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/woo.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "Woody Woodpecker Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woody-woodpecker-laugh.mp3"
    },
    {
        "name": "Sad violin (14sec)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/export_4.mp3"
    },
    {
        "name": "THINK FAST CHUCKLENUTS",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
    },
    {
        "name": "Giggity",
        "color": "rgb(153, 255, 0)",
        "mp3": "/media/sounds/quagmire-giggity-giggity-giggity.mp3"
    },
    {
        "name": "8d knocking sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/8d-knocking-sound.mp3"
    },
    {
        "name": "Chinese Food Delivery",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chinese-food-delivery.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "I WOKE UP IN A NEW BUGATTI",
        "color": "rgb(74, 255, 228)",
        "mp3": "/media/sounds/i-woke-up-in-a-new-bugatti.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "Chipi chipi chapa chapa",
        "color": "rgb(11, 255, 241)",
        "mp3": "/media/sounds/chipi-chipi-chapa-chapa.mp3"
    },
    {
        "name": "clash royale laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-laugh.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "Wanna break from the ads",
        "color": "rgb(57, 255, 113)",
        "mp3": "/media/sounds/wanna-break-from-the-ads.mp3"
    },
    {
        "name": "Gawr Gura - A",
        "color": "rgb(38, 129, 208)",
        "mp3": "/media/sounds/gawr-gura-a.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "Mortal Kombat - Fatality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/16_2.mp3"
    },
    {
        "name": "Epic Sax Guy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/epicsaxguy.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Jeopardy Correct Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rightanswer.mp3"
    },
    {
        "name": "Macaroni with the chicken strips",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/kirby-enjoys-macaroni-with-the-chicken-strips.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/sad-violin.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Shield Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-shield-potion-fortnite-battle-royale-gaming-sound-effect-hd-sound-effects.mp3"
    },
    {
        "name": "Indian Kid Funny asf",
        "color": "rgb(88, 255, 47)",
        "mp3": "/media/sounds/record-online-voice-recorder_37uPSci.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "fnaf 1 door",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-slamming-fnaf-1-sound-effects.mp3"
    },
    {
        "name": "SUBWAY SURFER BASS BOOSTED",
        "color": "rgb(36, 255, 62)",
        "mp3": "/media/sounds/subway-surfer-bass-boosted.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "Scooby doo running sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scooby-doo-turning-test.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "Kira Yoshikage Theme",
        "color": "rgb(255, 0, 178)",
        "mp3": "/media/sounds/yoshikage-kira-theme-ringtone.mp3"
    },
    {
        "name": "quandale dingle bingleton",
        "color": "rgb(247, 255, 42)",
        "mp3": "/media/sounds/quandale-dingle-bingleton.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "Overkill",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/overkill.mp3"
    },
    {
        "name": "Mario Fall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-falling.mp3"
    },
    {
        "name": "You Are My sunshine Dark Lebron James",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/you-are-my-sunshine-dark-lebron-james.mp3"
    },
    {
        "name": "see you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-eerie-ghost-voice_kemCjJn.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "lingan guli guli",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lingan-guli-guli.mp3"
    },
    {
        "name": "моя лететь в Таиланд / ой какой большой кабина",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/moia-letet-v-tailand-oi-kakoi-bolshoi-kabina.mp3"
    },
    {
        "name": "america F**K YEAH",
        "color": "rgb(0, 174, 255)",
        "mp3": "/media/sounds/america-f-k-yeah.mp3"
    },
    {
        "name": "trulimero trulichina",
        "color": "rgb(129, 81, 0)",
        "mp3": "/media/sounds/trulimero-trulichina.mp3"
    },
    {
        "name": "No doors no problem",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/no-doors-no-problem.mp3"
    },
    {
        "name": "dad bring the milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dad-bring-the-milk.mp3"
    },
    {
        "name": "Conqueror Haki",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/conqueror_haki_one_piece_luffy_sound_effect_for_editing_3170900796123079825.mp3"
    },
    {
        "name": "no me digas bro CTMR",
        "color": "rgb(255, 252, 153)",
        "mp3": "/media/sounds/no-me-digas-bro-ctmr.mp3"
    },
    {
        "name": "Stop right there you criminal-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oblivion-guard.mp3"
    },
    {
        "name": "among us drip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-drip-audiotrimmer.mp3"
    },
    {
        "name": "goofy ahh quandale dingle",
        "color": "rgb(255, 163, 51)",
        "mp3": "/media/sounds/goofy-ahh-quandale-dingle_BAY8nQJ.mp3"
    },
    {
        "name": "FORTNITE MEME",
        "color": "rgb(172, 255, 167)",
        "mp3": "/media/sounds/qqrlvfre9au-00_00_16-1.mp3"
    },
    {
        "name": "Bazinga!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/bazinga.swf.mp3"
    },
    {
        "name": "i like turtles",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/i-like-turtles.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Sr.Pelo Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1-booom_1.mp3"
    },
    {
        "name": "JoJo - yes yes yes yes YES",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Bruce Buffer - It's Time",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/bruce-buffer-its-time.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Mortal Kombat - Fatality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/16_2.mp3"
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
        "name": "Kobe!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kobe.mp3"
    },
    {
        "name": "OOOh shit a rat",
        "color": "rgb(216, 226, 200)",
        "mp3": "/media/sounds/a-rat.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "Among Us role reveal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp0wyb54t7.mp3"
    },
    {
        "name": "flightreacts screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-screaming-green-screen.mp3"
    },
    {
        "name": "Law & Order",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/law-order-sound-effect-hq.mp3"
    },
    {
        "name": "eeeeeeeeeeeeeeeeeeeeeee",
        "color": "rgb(160, 190, 255)",
        "mp3": "/media/sounds/internet-connecting.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "Lightning",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Mortal Kombat - Fatality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/16_2.mp3"
    },
    {
        "name": "Fortunate Son Vietnam Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/creedence-clearwater-revival-fortunate-sonmp3.mp3"
    },
    {
        "name": "Gudjob! Anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-job_d15pHHg.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "Sad violin (14sec)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/export_4.mp3"
    },
    {
        "name": "Jeopardy Correct Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rightanswer.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Tim Allen Grunt 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tim-allens-home-improvement-grunt.mp3"
    },
    {
        "name": "lol mising ping",
        "color": "rgb(255, 30, 30)",
        "mp3": "/media/sounds/ping_missing.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "gangsta paradise scream",
        "color": "rgb(255, 73, 227)",
        "mp3": "/media/sounds/gangstas-paradise-scream-sound-effect-1.mp3"
    },
    {
        "name": "FNAF 3 Night start",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-3-start-sound.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Overkill",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/overkill.mp3"
    },
    {
        "name": "im dying help me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-dying.mp3"
    },
    {
        "name": "Chris Smoove Haha",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/chris-smooves-autotune-haha.mp3"
    },
    {
        "name": "Minecraft Grass Walking Sound Effect",
        "color": "rgb(0, 139, 23)",
        "mp3": "/media/sounds/minecraft-grass-walking-sound-effect.mp3"
    },
    {
        "name": "Undertale - Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/undertale-game-over.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "South Park - Wiener Chorus",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/my-song-32.mp3"
    },
    {
        "name": "zelda guardian",
        "color": "rgb(63, 10, 255)",
        "mp3": "/media/sounds/zelda-guardian.mp3"
    },
    {
        "name": "VillagerHmm",
        "color": "rgb(70, 255, 150)",
        "mp3": "/media/sounds/output_gU4UE9M.mp3"
    },
    {
        "name": "Doofenshmirtz Evil Incorporated Jingle",
        "color": "rgb(38, 99, 88)",
        "mp3": "/media/sounds/doofenshmirtz-evil-incorporated-jingle.mp3"
    },
    {
        "name": "Fast whoosh",
        "color": "rgb(239, 249, 255)",
        "mp3": "/media/sounds/fast-whoosh.mp3"
    },
    {
        "name": "up your ass - jack black",
        "color": "rgb(49, 255, 138)",
        "mp3": "/media/sounds/jack-black-up-your-ass.mp3"
    },
    {
        "name": "Minecraft Advancement Challenge Complete",
        "color": "rgb(225, 103, 255)",
        "mp3": "/media/sounds/challenge_complete_uHsY1YS.mp3"
    },
    {
        "name": "Censored beep",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/unbenannt_M7OcDIp.mp3"
    },
    {
        "name": "Meek Mill and Diddy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meek-mill-and-diddy.mp3"
    },
    {
        "name": "R6 Diffuser",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/r6-diffuser.mp3"
    },
    {
        "name": "And you know what else is",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/and-you-know-what-else-is.mp3"
    },
    {
        "name": "goofy ahhh laugh",
        "color": "rgb(36, 28, 255)",
        "mp3": "/media/sounds/goofy-ahhh-laugh.mp3"
    },
    {
        "name": "MS Teams Notification",
        "color": "rgb(98, 0, 255)",
        "mp3": "/media/sounds/ms-teams-notification.mp3"
    },
    {
        "name": "sword",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
    },
    {
        "name": "Windows XP Green Screen Error",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/cut_y2mate_Ooa5JNV.mp3"
    },
    {
        "name": "Stone Cold - What",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what_f6K6Vuk.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "gigachad theme music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gigachad-theme-music.mp3"
    },
    {
        "name": "piano riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/piano-riff.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "Hehehe ha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hehehe-ha.mp3"
    },
    {
        "name": "Snore",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-snoring-3.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "Lightning",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
    },
    {
        "name": "Peter Griffin Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-guy-singing-star-wars.mp3"
    },
    {
        "name": "enjoy mario's agony",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01_0TBRB2b.mp3"
    },
    {
        "name": "kamala harris- do not come",
        "color": "rgb(17, 50, 255)",
        "mp3": "/media/sounds/kamala-harris-do-not-come.mp3"
    },
    {
        "name": "Blue lobster meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blue-lobster-meme.mp3"
    },
    {
        "name": "Stone Cold Smash",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/stone-cold-steve-austin-theme-song-download_cut_part1.mp3"
    },
    {
        "name": "shine sound",
        "color": "rgb(104, 245, 255)",
        "mp3": "/media/sounds/anime-shine-sound-effect_QP4mAaX.mp3"
    },
    {
        "name": "smack OH SHIT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smack-oh-shit.mp3"
    },
    {
        "name": "last rizzmas i gave u my gyatt",
        "color": "rgb(63, 82, 255)",
        "mp3": "/media/sounds/last-rizzmas-i-gave-u-my-gyatt.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Suspenseful",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspenseful.mp3"
    },
    {
        "name": "Censored beep",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/unbenannt_M7OcDIp.mp3"
    },
    {
        "name": "Nyanyanyanyanyanyanya",
        "color": "rgb(255, 57, 149)",
        "mp3": "/media/sounds/nyan_cat_compressed.mp3"
    },
    {
        "name": "A BOATE CALIFÓRNIA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-boate-california.mp3"
    },
    {
        "name": "Hector Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hector-bell.mp3"
    },
    {
        "name": "Meme Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-click.mp3"
    },
    {
        "name": "Oh Seig Hell No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-sieg-hell-no.mp3"
    },
    {
        "name": "PSX (PS1) Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psx.mp3"
    },
    {
        "name": "Do you know what time it is?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jacket-do-you-know-what-time-it-is.mp3"
    },
    {
        "name": "Birdmaster86",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/birdmaster86.mp3"
    },
    {
        "name": "its coming out but",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-coming-out-but.mp3"
    },
    {
        "name": "Exclaim Animal Crossing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/acnl_-_exclamation.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "me mata de uma vez",
        "color": "rgb(0, 255, 45)",
        "mp3": "/media/sounds/me-mata-de-uma-vez.mp3"
    },
    {
        "name": "Eveytime im in the street i hear Leedle Leedle",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/eveytime-im-in-the-street-i-hear-leedle-leedle.mp3"
    },
    {
        "name": "birds chirping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bird-chirping-sound-effect.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "Sad Trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-trombone_CTCquhN.mp3"
    },
    {
        "name": "Squeak fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart3.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "Dragon Ball Z grabbing sound",
        "color": "rgb(255, 129, 27)",
        "mp3": "/media/sounds/dragon-ball-z-grabbing-sound.mp3"
    },
    {
        "name": "oh my god bro ah hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-bro-ah-hell-nah.mp3"
    },
    {
        "name": "Kahoot Lobby Music",
        "color": "rgb(224, 206, 255)",
        "mp3": "/media/sounds/kahoot-lobby-music.mp3"
    },
    {
        "name": "its time to play the game",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-time-to-play-the-game.mp3"
    },
    {
        "name": "up your ass - jack black",
        "color": "rgb(49, 255, 138)",
        "mp3": "/media/sounds/jack-black-up-your-ass.mp3"
    },
    {
        "name": "wenda sprunki",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wenda-sprunki.mp3"
    },
    {
        "name": "para de mandar audio to na ucrania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-de-mandar-audio-to-na-ucrania.mp3"
    },
    {
        "name": "Censored beep",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/unbenannt_M7OcDIp.mp3"
    },
    {
        "name": "Thomas the train Bass boosted",
        "color": "rgb(0, 17, 255)",
        "mp3": "/media/sounds/thomas-the-train-bass-boosted.mp3"
    },
    {
        "name": "goofy ahhh laugh",
        "color": "rgb(36, 28, 255)",
        "mp3": "/media/sounds/goofy-ahhh-laugh.mp3"
    },
    {
        "name": "Lucu viral",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lucu-viral.mp3"
    },
    {
        "name": "\"Woah!\"(Cute Anime Voice)~MagicalMysticVA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woah-cute-anime-voice-magicalmysticva.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "sexy and i know it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sexy-and-i-know-it_crWNUGY.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "Phonk tun tun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phonk-tun-tun.mp3"
    },
    {
        "name": "Que dificil me la pusiste diablo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-dificil-me-la-pusiste-diablo.mp3"
    },
    {
        "name": "GET THE F OUT OF MY ROOM IM PLAYING MINECRAFT!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-the-f-out-of-my-room-im-playing-minecraft.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "pinoy oh no krinds meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pinoy-oh-no-krinds-meme.mp3"
    },
    {
        "name": "Bom dia motivacional",
        "color": "rgb(0, 14, 255)",
        "mp3": "/media/sounds/bom-dia-motivacional.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "(mafioso) here we go folks",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-here-we-go-folks.mp3"
    },
    {
        "name": "ah xibiuzao grandao",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-xibiuzao-grandao.mp3"
    },
    {
        "name": "Toma milk-shake de morango",
        "color": "rgb(167, 204, 255)",
        "mp3": "/media/sounds/toma-milk-shake-de-morango_7NJhrnd.mp3"
    },
    {
        "name": "Steve Coming In Hot",
        "color": "rgb(0, 149, 255)",
        "mp3": "/media/sounds/steve-coming-in-hot.mp3"
    },
    {
        "name": "Gangsta Rap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangsta-rap.mp3"
    },
    {
        "name": "Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lava-chicken.mp3"
    },
    {
        "name": "italian animals",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/italian-animals.mp3"
    },
    {
        "name": "#47 Liriliri Larilla",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/47-liriliri-larilla.mp3"
    },
    {
        "name": "Conqueror Haki",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/conqueror_haki_one_piece_luffy_sound_effect_for_editing_3170900796123079825.mp3"
    },
    {
        "name": "no me digas bro CTMR",
        "color": "rgb(255, 252, 153)",
        "mp3": "/media/sounds/no-me-digas-bro-ctmr.mp3"
    },
    {
        "name": "I thlammed my penith in the car door soundeffect",
        "color": "rgb(18, 116, 52)",
        "mp3": "/media/sounds/i-thlammed-my-penith-in-the-car-door-soundeffect.mp3"
    },
    {
        "name": "Я сброшу на вас 250000 тонн тротила",
        "color": "rgb(151, 255, 48)",
        "mp3": "/media/sounds/ia-sbroshu-na-vas-250000-tonn-trotila.mp3"
    },
    {
        "name": "Stop right there you criminal-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oblivion-guard.mp3"
    },
    {
        "name": "among us drip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-drip-audiotrimmer.mp3"
    },
    {
        "name": "sans.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sans_RbBhTQn.mp3"
    },
    {
        "name": "Life Could Be A Dream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/life_could_be_a_dream.mp3"
    },
    {
        "name": "goofy ahh quandale dingle",
        "color": "rgb(255, 163, 51)",
        "mp3": "/media/sounds/goofy-ahh-quandale-dingle_BAY8nQJ.mp3"
    },
    {
        "name": "FORTNITE MEME",
        "color": "rgb(172, 255, 167)",
        "mp3": "/media/sounds/qqrlvfre9au-00_00_16-1.mp3"
    },
    {
        "name": "Chester stone selling clocks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chester-stone-selling-clocks.mp3"
    },
    {
        "name": "Eddie munson its ok stranger things",
        "color": "rgb(255, 13, 13)",
        "mp3": "/media/sounds/eddie-munson-its-ok-stranger-things.mp3"
    },
    {
        "name": "waveigl O PERUUU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/o-peruuuuuuuuuu.mp3"
    },
    {
        "name": "Heisenberg Helium",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heisenberg-helium.mp3"
    },
    {
        "name": "Ooga booga!",
        "color": "rgb(51, 0, 0)",
        "mp3": "/media/sounds/ooga-booga.mp3"
    },
    {
        "name": "Bye Bye~Mikey tokyo revengers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-bye-mikey-tokyo-revengers.mp3"
    },
    {
        "name": "Eae, mané? Cadê o pix? Mwahahaha",
        "color": "rgb(106, 179, 43)",
        "mp3": "/media/sounds/eae-mane-cade-o-pix-mwahahaha.mp3"
    },
    {
        "name": "Lady gargar",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/lady-gargar.mp3"
    },
    {
        "name": "Joseph Joestar - OMG (5)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jj-omg5.mp3"
    },
    {
        "name": "Arnold stop it",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/arnold-stop-it.mp3"
    },
    {
        "name": "Its My Life (Russian)",
        "color": "rgb(31, 32, 228)",
        "mp3": "/media/sounds/its-my-life-russian.mp3"
    },
    {
        "name": "Tuar Memek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuar-memek.mp3"
    },
    {
        "name": "T Sit Down",
        "color": "rgb(105, 76, 255)",
        "mp3": "/media/sounds/t-sit-down.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "Sr.Pelo Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1-booom_1.mp3"
    },
    {
        "name": "JoJo - yes yes yes yes YES",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "goku yelling + drip",
        "color": "rgb(255, 133, 46)",
        "mp3": "/media/sounds/goku-yelling-drip.mp3"
    },
    {
        "name": "Ele fez de novo",
        "color": "rgb(254, 255, 47)",
        "mp3": "/media/sounds/ele-fez-de-novo.mp3"
    },
    {
        "name": "Большие пениса......",
        "color": "rgb(255, 218, 189)",
        "mp3": "/media/sounds/bolshie-penisa.mp3"
    },
    {
        "name": "Anchitects' BLEGH",
        "color": "rgb(55, 42, 47)",
        "mp3": "/media/sounds/blegh_wLShegl.mp3"
    },
    {
        "name": "British Rap",
        "color": "rgb(36, 20, 255)",
        "mp3": "/media/sounds/british-rap.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Wrong!",
        "color": "rgb(51, 255, 153)",
        "mp3": "/media/sounds/incorrect.swf.mp3"
    },
    {
        "name": "i like turtles",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/i-like-turtles.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "super idol",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-idol.mp3"
    },
    {
        "name": "Woody Woodpecker Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woody-woodpecker-laugh.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Bruce Buffer - It's Time",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/bruce-buffer-its-time.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "I'm Gay IDubbbz",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/idubbbz-im-gay-free-download.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Denied!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/denied.mp3"
    },
    {
        "name": "Door Bell II",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/se_objsn_trickjump_ok.mp3"
    },
    {
        "name": "YEAH Lil Jon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeeeeeeeah.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Get up meek mill",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-up-meek-mill.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/sad-violin.mp3"
    },
    {
        "name": "BoomBamBopBadaBopBoompPow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boom-bam-bada-bomp-boomp-pow_3xkcJl6.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "fnaf 1 door",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-slamming-fnaf-1-sound-effects.mp3"
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
        "name": "SUBWAY SURFER BASS BOOSTED",
        "color": "rgb(36, 255, 62)",
        "mp3": "/media/sounds/subway-surfer-bass-boosted.mp3"
    },
    {
        "name": "SKIBIDI TOILETTE",
        "color": "rgb(195, 112, 204)",
        "mp3": "/media/sounds/skibidi-toilette_X4vKdrM.mp3"
    },
    {
        "name": "Fat Bastard - Sorry I farted",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/my-song-7.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "ZEHAHAHA (Edward Teach laugh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zehahaha_laugh.mp3"
    },
    {
        "name": "Trump Bing Bing Bong Bing Bing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/donald-trump-bing-bong-sound-effect_lTRFmBB.mp3"
    },
    {
        "name": "gigachad theme music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gigachad-theme-music.mp3"
    },
    {
        "name": "Sudden Suspense Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sudden-suspense-boom.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "me da um real",
        "color": "rgb(108, 157, 255)",
        "mp3": "/media/sounds/torresmo_pt1-mp3cut.mp3"
    },
    {
        "name": "Лучше иметь друга",
        "color": "rgb(27, 86, 125)",
        "mp3": "/media/sounds/luchshe-imet-druga_xCZYGQu.mp3"
    },
    {
        "name": "(c00lkid) lets do that again somthime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkid-lets-do-that-again-somthime.mp3"
    },
    {
        "name": "Иди нахуй (фаргус)",
        "color": "rgb(255, 241, 188)",
        "mp3": "/media/sounds/idi-nakhui-fargus.mp3"
    },
    {
        "name": "Nut in my Butt",
        "color": "rgb(255, 174, 142)",
        "mp3": "/media/sounds/nut-in-my-butt.mp3"
    },
    {
        "name": "Vamo sim pô, claro",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/vamo-sim-po-claro.mp3"
    },
    {
        "name": "uncle ruckus shut up",
        "color": "rgb(0, 85, 10)",
        "mp3": "/media/sounds/uncle-ruckus-shut-up.mp3"
    },
    {
        "name": "Vhs insert and read disc",
        "color": "rgb(49, 22, 255)",
        "mp3": "/media/sounds/vhs-insert-and-read-disc.mp3"
    },
    {
        "name": "aiscream_01_ruby",
        "color": "rgb(243, 17, 255)",
        "mp3": "/media/sounds/aiscream-01-ruby_afVjwvp.mp3"
    },
    {
        "name": "brain rot 7000",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/brain-rot-7000.mp3"
    },
    {
        "name": "Goliath Online",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/8d82b5_starcraft_goliath_online_sound_effect.mp3"
    },
    {
        "name": "helldivers 2 extract",
        "color": "rgb(255, 227, 16)",
        "mp3": "/media/sounds/helldivers-2-extract.mp3"
    },
    {
        "name": "HAMMER Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hammer-hd.mp3"
    },
    {
        "name": "Rizz White Tee Dont Get Me DIrty",
        "color": "rgb(255, 104, 210)",
        "mp3": "/media/sounds/rizz-white-tee-dont-get-me-dirty.mp3"
    },
    {
        "name": "WoW Gnome Death",
        "color": "rgb(171, 162, 255)",
        "mp3": "/media/sounds/gnomedeath.mp3"
    },
    {
        "name": "Chinese Food Delivery",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chinese-food-delivery.mp3"
    },
    {
        "name": "Bazinga!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/bazinga.swf.mp3"
    },
    {
        "name": "Air Horn (club sample)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn-club-sample_1.mp3"
    },
    {
        "name": "Chipi chipi chapa chapa",
        "color": "rgb(11, 255, 241)",
        "mp3": "/media/sounds/chipi-chipi-chapa-chapa.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "Woody Woodpecker Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woody-woodpecker-laugh.mp3"
    },
    {
        "name": "Gawr Gura - A",
        "color": "rgb(38, 129, 208)",
        "mp3": "/media/sounds/gawr-gura-a.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "I'm Gay IDubbbz",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/idubbbz-im-gay-free-download.mp3"
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
        "name": "Fortunate Son Vietnam Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/creedence-clearwater-revival-fortunate-sonmp3.mp3"
    },
    {
        "name": "Gudjob! Anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-job_d15pHHg.mp3"
    },
    {
        "name": "Jeopardy Correct Answer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rightanswer.mp3"
    },
    {
        "name": "omg what is that",
        "color": "rgb(171, 255, 142)",
        "mp3": "/media/sounds/cardi-b-omg-what-is-thatmp3_160k_1.mp3"
    },
    {
        "name": "Door Slamming",
        "color": "rgb(0, 255, 102)",
        "mp3": "/media/sounds/door-slamming-sound-effect-no-repeats-or-silence-2016.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "I need a hero!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hero_c3tEI4U.mp3"
    },
    {
        "name": "rizz on rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-on-rizz.mp3"
    },
    {
        "name": "Falling sound effect",
        "color": "rgb(70, 255, 196)",
        "mp3": "/media/sounds/thick-rain-falling-lightly.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "Re:Zero Rezurrection Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/re0r.mp3"
    },
    {
        "name": "BELLIGOL, BELLIGOL, BELLIGHAM, É ELE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/belligol-belligol-belligham-e-ele.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "ROJÃO SUPER ESTOURADO!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rojao-super-estourado.mp3"
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
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "Dark Souls Carving - Thank You",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you.mp3"
    },
    {
        "name": "fnaf2 ambience",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/fnaf2-ambience.mp3"
    },
    {
        "name": "Aw, Seriously?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aww_UPDhuzR.mp3"
    },
    {
        "name": "yeaa! rblx SE",
        "color": "rgb(213, 255, 25)",
        "mp3": "/media/sounds/yeaa-rblx-se.mp3"
    },
    {
        "name": "Spongebob Bubble Transition",
        "color": "rgb(2, 91, 255)",
        "mp3": "/media/sounds/spongebob-bubble-transition.mp3"
    },
    {
        "name": "Luigi Burning",
        "color": "rgb(52, 140, 70)",
        "mp3": "/media/sounds/luigi-burning.mp3"
    },
    {
        "name": "Confused cross eyed kitten meme",
        "color": "rgb(47, 22, 255)",
        "mp3": "/media/sounds/confused-cross-eyed-kitten-meme.mp3"
    },
    {
        "name": "Ozempic",
        "color": "rgb(29, 110, 69)",
        "mp3": "/media/sounds/ozempic.mp3"
    },
    {
        "name": "WINNERS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/winners_W9Cpenj.mp3"
    },
    {
        "name": "Fein x nokia",
        "color": "rgb(28, 66, 255)",
        "mp3": "/media/sounds/fein-x-nokia.mp3"
    },
    {
        "name": "Ghostly sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ghostly-sound.mp3"
    },
    {
        "name": "gunshots mixed",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/gunshots-mixed.mp3"
    },
    {
        "name": "Long brain fart earrape",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/long-brain-fart-earrape.mp3"
    },
    {
        "name": "Сияй Мага",
        "color": "rgb(49, 60, 167)",
        "mp3": "/media/sounds/siiai-maga.mp3"
    },
    {
        "name": "Я потяну тебя записку",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ia-potianu-tebia-zapisku.mp3"
    },
    {
        "name": "TOINKSS",
        "color": "rgb(255, 126, 208)",
        "mp3": "/media/sounds/toinkss.mp3"
    },
    {
        "name": "УХ ТЫ БЛЯ°•°",
        "color": "rgb(67, 67, 67)",
        "mp3": "/media/sounds/ukh-ty-bliadeg-deg.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "TODAS MIS PAJAS ME GUSTA RECORDAR",
        "color": "rgb(255, 254, 244)",
        "mp3": "/media/sounds/todas-mis-pajas-me-gusta-recordar.mp3"
    },
    {
        "name": "Brainrot Phonk",
        "color": "rgb(25, 171, 38)",
        "mp3": "/media/sounds/brainrot-phonk.mp3"
    },
    {
        "name": "download mario multiverse",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/download-mario-multiverse.mp3"
    },
    {
        "name": "Azarath Metrion Zinthos",
        "color": "rgb(158, 46, 255)",
        "mp3": "/media/sounds/azarath-metrion-zinthos.mp3"
    },
    {
        "name": "Never gonna give you up rickroll",
        "color": "rgb(255, 173, 173)",
        "mp3": "/media/sounds/never-gonna-give-you-up-rickroll.mp3"
    },
    {
        "name": "Random Explosion",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/boom-boom.mp3"
    },
    {
        "name": "King Crimson Time Erase",
        "color": "rgb(201, 0, 0)",
        "mp3": "/media/sounds/kingcrimson.mp3"
    },
    {
        "name": "GODDAMMIT NATHAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goddammit-nathan.mp3"
    },
    {
        "name": "Random Dolphin Noise",
        "color": "rgb(1, 167, 162)",
        "mp3": "/media/sounds/random-dolphin-noise.mp3"
    },
    {
        "name": "no brain cells",
        "color": "rgb(179, 255, 197)",
        "mp3": "/media/sounds/earthbound-53-sanctuary-guardian-audiotrimmer.mp3"
    },
    {
        "name": "FlameShot Metal Slug 6/7",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flameshot-metal-slug-6-7.mp3"
    },
    {
        "name": "Ô Malafaia!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boechat-responde-a-silas-malafaia-ao-vivo-na-bandnewsfm.mp3"
    },
    {
        "name": "Intervention Sound mw2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/intervention-sound-mw2.mp3"
    },
    {
        "name": "Get Outta Here!",
        "color": "rgb(255, 204, 102)",
        "mp3": "/media/sounds/get-outta-here_1.mp3"
    },
    {
        "name": "Satchel Charge Rust",
        "color": "rgb(160, 108, 88)",
        "mp3": "/media/sounds/c4f858be-dca1-4ab3-a864-8181e26cccdd.mp3"
    },
    {
        "name": "Morgan Freeman Titty Sprinkles",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/morgan-freeman-says-tity-sprinkles.mp3"
    },
    {
        "name": "Tinker pew pew",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tinker-pew-pew.mp3"
    },
    {
        "name": "Family Feud NO Ding",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/family-feud-no-ding.mp3"
    },
    {
        "name": "WorldStar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/worldstar.mp3"
    },
    {
        "name": "Woah, woah. See that guy right there?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_ZkGgLxj.mp3"
    },
    {
        "name": "No mames wey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/no-mames-wey.mp3"
    },
    {
        "name": "Belupacito",
        "color": "rgb(53, 232, 255)",
        "mp3": "/media/sounds/belupacito.mp3"
    },
    {
        "name": "Emet Selch That's not very cashmoney of you",
        "color": "rgb(41, 45, 255)",
        "mp3": "/media/sounds/emet-selch-thats-not-very-cashmoney-of-you.mp3"
    },
    {
        "name": "Leeroy Jenkins",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/leroy.swf.mp3"
    },
    {
        "name": "Bazinga!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/bazinga.swf.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "i like turtles",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/i-like-turtles.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "i be poppin bottles",
        "color": "rgb(20, 114, 255)",
        "mp3": "/media/sounds/i-be-poppin-bottles.mp3"
    },
    {
        "name": "I'm pickle Riiiick",
        "color": "rgb(16, 173, 237)",
        "mp3": "/media/sounds/pickle_rick.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "im bout to end this man caree",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/recording-22.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Macaroni with the chicken strips",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/kirby-enjoys-macaroni-with-the-chicken-strips.mp3"
    },
    {
        "name": "Chaloo",
        "color": "rgb(100, 234, 46)",
        "mp3": "/media/sounds/chaloo.mp3"
    },
    {
        "name": "gimme money Peter Griffin",
        "color": "rgb(127, 255, 101)",
        "mp3": "/media/sounds/gimme-money2.mp3"
    },
    {
        "name": "Geometry Dash Player Death",
        "color": "rgb(0, 255, 34)",
        "mp3": "/media/sounds/geometry-dash-player-death.mp3"
    },
    {
        "name": "Cute Anime Roar",
        "color": "rgb(96, 255, 253)",
        "mp3": "/media/sounds/cuteanimeroar_bybakster.mp3"
    },
    {
        "name": "rizz for all",
        "color": "rgb(188, 255, 236)",
        "mp3": "/media/sounds/rizz-for-all.mp3"
    },
    {
        "name": "TF2 Critical Hit!!!",
        "color": "rgb(94, 255, 0)",
        "mp3": "/media/sounds/tf2-critical-hit.mp3"
    },
    {
        "name": "five  nights at freddys scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-screech-noise.mp3"
    },
    {
        "name": "Saataa Andagii - Osaka",
        "color": "rgb(196, 255, 107)",
        "mp3": "/media/sounds/saataa-andagii-osaka.mp3"
    },
    {
        "name": "i would roast you but my mom said im not allowed",
        "color": "rgb(114, 255, 170)",
        "mp3": "/media/sounds/rpreplay_final1576285155.mp3"
    },
    {
        "name": "Back to work, back to work!",
        "color": "rgb(139, 240, 255)",
        "mp3": "/media/sounds/back-to-work-back-to-work.mp3"
    },
    {
        "name": "Tralalelo",
        "color": "rgb(52, 122, 140)",
        "mp3": "/media/sounds/tralalelo_lWLGHvN.mp3"
    },
    {
        "name": "Papyrus Talk",
        "color": "rgb(255, 94, 0)",
        "mp3": "/media/sounds/papyrustalk-1.mp3"
    },
    {
        "name": "goku yelling + drip",
        "color": "rgb(255, 133, 46)",
        "mp3": "/media/sounds/goku-yelling-drip.mp3"
    },
    {
        "name": "He's pulling his C out - moistcrit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hes-pulling-his-c-out-moistcrit.mp3"
    },
    {
        "name": "Ele fez de novo",
        "color": "rgb(254, 255, 47)",
        "mp3": "/media/sounds/ele-fez-de-novo.mp3"
    },
    {
        "name": "Большие пениса......",
        "color": "rgb(255, 218, 189)",
        "mp3": "/media/sounds/bolshie-penisa.mp3"
    },
    {
        "name": "PBBV IS WATCHING, PBBV IS HERE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pbbv-is-watching-pbbv-is-here.mp3"
    },
    {
        "name": "Anchitects' BLEGH",
        "color": "rgb(55, 42, 47)",
        "mp3": "/media/sounds/blegh_wLShegl.mp3"
    },
    {
        "name": "British Rap",
        "color": "rgb(36, 20, 255)",
        "mp3": "/media/sounds/british-rap.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Wrong!",
        "color": "rgb(51, 255, 153)",
        "mp3": "/media/sounds/incorrect.swf.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "defuse valorant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/defuse-valorant.mp3"
    },
    {
        "name": "JoJo - yes yes yes yes YES",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
    },
    {
        "name": "super idol",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-idol.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Bruce Buffer - It's Time",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/bruce-buffer-its-time.mp3"
    },
    {
        "name": "Star Wars Blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blaster.mp3"
    },
    {
        "name": "Denied!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/denied.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "YEAH Lil Jon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeeeeeeeah.mp3"
    },
    {
        "name": "arab funny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arab-funny.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/sad-violin.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    }
]
