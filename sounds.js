/*
taken from https://www.myinstants.com/en/trending/us/
last updated: 1748041689105

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
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
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
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
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
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "**Gay**",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay_CRD979V.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
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
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "flashbanggg",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/flashbanggg.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
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
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
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
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
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
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
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
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "What the Helly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Kanye West HH",
        "color": "rgb(254, 24, 255)",
        "mp3": "/media/sounds/kanye-west-hh.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "c00lkidd [you were strong}",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-you-were-strong.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Lego Yoda Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "The croods theme",
        "color": "rgb(255, 165, 62)",
        "mp3": "/media/sounds/the-croods-theme.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "c00lkidd [you were strong}",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-you-were-strong.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "M e o w ~",
        "color": "rgb(120, 85, 120)",
        "mp3": "/media/sounds/m-e-o-w.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "noo la policia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noo-la-policia.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "Мы пидоры",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-pidory.mp3"
    },
    {
        "name": "c00lkidd [you were strong}",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-you-were-strong.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
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
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "Нет иди нахуй",
        "color": "rgb(120, 155, 25)",
        "mp3": "/media/sounds/net-idi-nakhui.mp3"
    },
    {
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
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
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "niggerplane2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerplane2_7ukE1N9.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
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
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "Capuccino Assasino (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/capuccino-assasino-italian-brainrot.mp3"
    },
    {
        "name": "Мы пидоры",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-pidory.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "DJ cigan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-cigan.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "Мы пидоры",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-pidory.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "Capuccino Assasino (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/capuccino-assasino-italian-brainrot.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "I Love, I Love Her (R.E.P.O)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-i-love-her-r-e-p-o.mp3"
    },
    {
        "name": "Ballerina cappuccina",
        "color": "rgb(166, 93, 36)",
        "mp3": "/media/sounds/ballerina-cappuccina.mp3"
    },
    {
        "name": "meme gemidos",
        "color": "rgb(255, 212, 246)",
        "mp3": "/media/sounds/meme-gemidos.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Ballerina cappuccina",
        "color": "rgb(166, 93, 36)",
        "mp3": "/media/sounds/ballerina-cappuccina.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "meme gemidos",
        "color": "rgb(255, 212, 246)",
        "mp3": "/media/sounds/meme-gemidos.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "wiwiwi kitten",
        "color": "rgb(114, 102, 123)",
        "mp3": "/media/sounds/wiwiwi-kitten.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pedro-song.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "Man shut yo b*tch ass up!!!!!",
        "color": "rgb(255, 53, 208)",
        "mp3": "/media/sounds/man-stfu.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "Panther Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panther3.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "that sh*t is trash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that-sh-t-is-trash.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Who is that Pokemon?!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/vine-who-is-that-pokemon-its-pikachu.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump.mp3"
    },
    {
        "name": "Нет иди нахуй",
        "color": "rgb(120, 155, 25)",
        "mp3": "/media/sounds/net-idi-nakhui.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
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
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Who is that Pokemon?!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/vine-who-is-that-pokemon-its-pikachu.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "Behold the unthinkable present Re:Zero",
        "color": "rgb(232, 0, 255)",
        "mp3": "/media/sounds/behold-the-unthinkable-present-re-zero.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "Man Pooping His Brains Out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-pooping-his-brains-out.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "meow meow meow tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meow-meow-meow-tiktok.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pedro-song.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Da Baby Lets Goooo",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
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
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "My mommy said no more skibidi meme",
        "color": "rgb(207, 12, 12)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-meme.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "The man on the lakers",
        "color": "rgb(255, 242, 54)",
        "mp3": "/media/sounds/the-man-on-the-lakers.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "Гудок поезда",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gudok-poezda.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "/media/sounds/67.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "Michael Jackson Hee Hee",
        "color": "rgb(160, 0, 0)",
        "mp3": "/media/sounds/michael-jackson-hee-hee.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "YES KING!!! ( alvin and the chipmunk version)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-alvin-and-the-chipmunk-version.mp3"
    },
    {
        "name": "W NSFW",
        "color": "rgb(219, 238, 255)",
        "mp3": "/media/sounds/w-nsfw.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Da Baby Lets Goooo",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Meek Mill and Diddy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meek-mill-and-diddy.mp3"
    },
    {
        "name": "grug music",
        "color": "rgb(176, 110, 28)",
        "mp3": "/media/sounds/grug-music.mp3"
    },
    {
        "name": "Griffith! (Without music)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/griffith-without-music.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "Sad Ham",
        "color": "rgb(17, 73, 255)",
        "mp3": "/media/sounds/sad-ham.mp3"
    },
    {
        "name": "Tralalelo Tralala Phonk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalelo-tralala-phonk.mp3"
    },
    {
        "name": "LOUD MOAN!!",
        "color": "rgb(109, 168, 255)",
        "mp3": "/media/sounds/loud-moan.mp3"
    },
    {
        "name": "meme gemidos",
        "color": "rgb(255, 212, 246)",
        "mp3": "/media/sounds/meme-gemidos.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "Mr Beast Phonk Meme",
        "color": "rgb(53, 12, 255)",
        "mp3": "/media/sounds/mr-beast-phonk-meme.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "pornbuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pornbuh.mp3"
    },
    {
        "name": "Did you just talk back to me? - Yes King",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/did-you-just-talk-back-to-me-yes-king.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "Sexy Girl Farts",
        "color": "rgb(82, 56, 31)",
        "mp3": "/media/sounds/sexy-girl-farts_aKmq8Jt.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bottom.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "Spring Boing",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/spring-boing.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "AW HELL NAH MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aw-hell-nah-man.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "Boing Boing Boing meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing-boing-boing-meme.mp3"
    },
    {
        "name": "Bombardilo Crocodilo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardilo-crocodilo.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "pornbuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pornbuh.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "Крамбл куки ФОНК",
        "color": "rgb(232, 202, 125)",
        "mp3": "/media/sounds/krambl-kuki-fonk.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "roblox spawn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/roblox-spawn.mp3"
    },
    {
        "name": "Жизнь это просто повод поесть говна",
        "color": "rgb(82, 57, 33)",
        "mp3": "/media/sounds/zhizn-eto-prosto-povod-poest-govna.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "Mortal Kombat - Round Two",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/round-2-fight-mortal-kombat-sound-effect.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "alarma saturada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alarma-saturada.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "bluudud FORSAKEN Hey, it's me!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudud-forsaken-hey-its-me.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Bone crack meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/bone-crack-meme.mp3"
    },
    {
        "name": "Крамбл куки ФОНК",
        "color": "rgb(232, 202, 125)",
        "mp3": "/media/sounds/krambl-kuki-fonk.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Lebron James - That's to easy",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/lebron-james-thats-to-easy.mp3"
    },
    {
        "name": "(mafioso) just shut up and rage quit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "Bombardilo Crocodilo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardilo-crocodilo.mp3"
    },
    {
        "name": "grug music",
        "color": "rgb(176, 110, 28)",
        "mp3": "/media/sounds/grug-music.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "Mr Beast Phonk Meme",
        "color": "rgb(53, 12, 255)",
        "mp3": "/media/sounds/mr-beast-phonk-meme.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "y en ese momento cell sintio el verdadero terror",
        "color": "rgb(43, 255, 92)",
        "mp3": "/media/sounds/en-ese-momento-cell-sintio-el-verdadero-terror-v-descarga.mp3"
    },
    {
        "name": "Box, Box F1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/box-box-f1.mp3"
    },
    {
        "name": "WE ARE FORSAKEN (clean as a whistle!)",
        "color": "rgb(32, 32, 32)",
        "mp3": "/media/sounds/we-are-forsaken-clean-as-a-whistle.mp3"
    },
    {
        "name": "Sighhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huuh.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "alarma saturada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alarma-saturada.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "I'm omniing it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-omniing-it.mp3"
    },
    {
        "name": "Pinoy yapping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pinoy-yapping.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "TEACH ME KINGGG",
        "color": "rgb(57, 54, 56)",
        "mp3": "/media/sounds/teach-me-kinggg.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Rap Air Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn_1.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Wait, What!?",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/wait-what.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "y en ese momento cell sintio el verdadero terror",
        "color": "rgb(43, 255, 92)",
        "mp3": "/media/sounds/en-ese-momento-cell-sintio-el-verdadero-terror-v-descarga.mp3"
    },
    {
        "name": "Bot",
        "color": "rgb(51, 255, 153)",
        "mp3": "/media/sounds/bottomq.mp3"
    },
    {
        "name": "Sad Ham",
        "color": "rgb(17, 73, 255)",
        "mp3": "/media/sounds/sad-ham.mp3"
    },
    {
        "name": "Olha a maconha",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/olha-a-maconha.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "Alex Jones Threatens",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/illbeatyoass.mp3"
    },
    {
        "name": "Sighhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huuh.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
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
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "TRALALERO TRA LA LA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tra-la-la.mp3"
    },
    {
        "name": "Bobrini Cocococini",
        "color": "rgb(157, 93, 59)",
        "mp3": "/media/sounds/bobrini-cocococini.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "WE ARE FORSAKEN (clean as a whistle!)",
        "color": "rgb(32, 32, 32)",
        "mp3": "/media/sounds/we-are-forsaken-clean-as-a-whistle.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "Giggity",
        "color": "rgb(153, 255, 0)",
        "mp3": "/media/sounds/quagmire-giggity-giggity-giggity.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "CALVOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "color": "rgb(255, 194, 225)",
        "mp3": "/media/sounds/calvoooooooooooooooooooooooooooo.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "Griffith! (Without music)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/griffith-without-music.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "TikTok snore",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tiktok-snore.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Anime Girl \"Senpai!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-senpai.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "Brainrot Phonk",
        "color": "rgb(25, 171, 38)",
        "mp3": "/media/sounds/brainrot-phonk.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
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
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "Followersound123",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/best-friends-v1_3Coc8NL.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Bot",
        "color": "rgb(51, 255, 153)",
        "mp3": "/media/sounds/bottomq.mp3"
    },
    {
        "name": "Discord Halloween",
        "color": "rgb(255, 157, 72)",
        "mp3": "/media/sounds/discord-halloween_n0hDV3q.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "allah akbar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allah-akbar_tTSl947.mp3"
    },
    {
        "name": "Cala boca e escuta o som do meu corsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cala-boca-e-escuta-o-som-do-meu-corsa.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Wii Sports Home Run",
        "color": "rgb(67, 109, 255)",
        "mp3": "/media/sounds/wii-sports-home-run.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "Kira Yoshikage Theme",
        "color": "rgb(255, 0, 178)",
        "mp3": "/media/sounds/yoshikage-kira-theme-ringtone.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "Skibidi Dop Dop Yes Yes",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/skibidi-dop-dop-yes-yes.mp3"
    },
    {
        "name": "Chimpanzini bananini",
        "color": "rgb(131, 36, 255)",
        "mp3": "/media/sounds/chimpanzini-bananini_UIisnEp.mp3"
    },
    {
        "name": "C00lkidd Giggle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-giggle.mp3"
    },
    {
        "name": "Фаст Стоны",
        "color": "rgb(236, 110, 255)",
        "mp3": "/media/sounds/fast-stony.mp3"
    },
    {
        "name": "Hellcat whine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hellcat-whine.mp3"
    },
    {
        "name": "grug music",
        "color": "rgb(176, 110, 28)",
        "mp3": "/media/sounds/grug-music.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "alarma saturada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alarma-saturada.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "oh my god bro ah hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-bro-ah-hell-nah.mp3"
    },
    {
        "name": "Steve's Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steves-lava-chicken_UmJvvHF.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "We Can Be Bees",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/we-can-be-bees.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "Gangsta's Paradise Choir 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
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
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Wii Sports Home Run",
        "color": "rgb(67, 109, 255)",
        "mp3": "/media/sounds/wii-sports-home-run.mp3"
    },
    {
        "name": "Sleep phonk",
        "color": "rgb(41, 0, 255)",
        "mp3": "/media/sounds/sleep-phonk_XPBfmfW.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "Fortnite Scar Shot",
        "color": "rgb(231, 200, 0)",
        "mp3": "/media/sounds/ar-epic-shot-1.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "Kira Yoshikage Theme",
        "color": "rgb(255, 0, 178)",
        "mp3": "/media/sounds/yoshikage-kira-theme-ringtone.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "SNORE MIMIMIMIMI",
        "color": "rgb(104, 169, 178)",
        "mp3": "/media/sounds/snore-mimimimimi.mp3"
    },
    {
        "name": "Fortnite Scar Shot",
        "color": "rgb(231, 200, 0)",
        "mp3": "/media/sounds/ar-epic-shot-1.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Villager",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/yes1.mp3"
    },
    {
        "name": "Throwing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-sound-effect-davemadson.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "Angry Birds Laugh",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/angry-birds-laugh.mp3"
    },
    {
        "name": "the rock meme sound effect",
        "color": "rgb(85, 61, 43)",
        "mp3": "/media/sounds/the-rock-meme-sound-effect.mp3"
    },
    {
        "name": "Invincible pretty sure",
        "color": "rgb(13, 53, 255)",
        "mp3": "/media/sounds/invincible-pretty-sure.mp3"
    },
    {
        "name": "Fart Then Moan.mp3 By Mango",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-then-moan-mp3-by-mango.mp3"
    },
    {
        "name": "bluudud FORSAKEN Hey, it's me!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudud-forsaken-hey-its-me.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Jeopardy Daily Double",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-daily-double-sound-effect-from-youtube_76mCCAq.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "бегу по тропинке стоны",
        "color": "rgb(157, 150, 255)",
        "mp3": "/media/sounds/begu-po-tropinke-stony.mp3"
    },
    {
        "name": "Brainrot Phonk",
        "color": "rgb(25, 171, 38)",
        "mp3": "/media/sounds/brainrot-phonk.mp3"
    },
    {
        "name": "Bobombini Goosini (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bobombini-goosini-italian-brainrot.mp3"
    },
    {
        "name": "TEACH ME KINGGG",
        "color": "rgb(57, 54, 56)",
        "mp3": "/media/sounds/teach-me-kinggg.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "Skibidi Fortnite - @Cartel_Dealer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skibidi-fortnite-cartel-dealer.mp3"
    },
    {
        "name": "Ballarina Cappucina",
        "color": "rgb(255, 52, 184)",
        "mp3": "/media/sounds/ballarina-cappucina.mp3"
    },
    {
        "name": "Hidup jokowi !!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hidup-jokowi.mp3"
    },
    {
        "name": "Coolkid laugh",
        "color": "rgb(171, 0, 0)",
        "mp3": "/media/sounds/coolkid-laugh.mp3"
    },
    {
        "name": "Acho que eu to doente",
        "color": "rgb(49, 94, 255)",
        "mp3": "/media/sounds/acho-que-eu-to-doente.mp3"
    },
    {
        "name": "niggersong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggersong_SNRItgA.mp3"
    },
    {
        "name": "Cute Anime Roar",
        "color": "rgb(96, 255, 253)",
        "mp3": "/media/sounds/cuteanimeroar_bybakster.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "cadê vc fiadaputa você, por que não trabalha?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cade-vc-fiadaputa-voce-por-que-nao-trabalha.mp3"
    },
    {
        "name": "TEACH ME KINGGG",
        "color": "rgb(57, 54, 56)",
        "mp3": "/media/sounds/teach-me-kinggg.mp3"
    },
    {
        "name": "O NEIMA O NEIMA",
        "color": "rgb(44, 179, 56)",
        "mp3": "/media/sounds/o-neima-o-neima.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "sigma boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sigma-boy.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "Crowd Laughter (short)",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/laughter-short.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "Steve Hurt Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_3cQdSVW.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "Slot machine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slotmachine.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "the rock meme sound effect",
        "color": "rgb(85, 61, 43)",
        "mp3": "/media/sounds/the-rock-meme-sound-effect.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "Lula: VAI TODO MINDO SE FDR!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lula-vai-todo-mindo-se-fdr.mp3"
    },
    {
        "name": "randy march",
        "color": "rgb(255, 104, 250)",
        "mp3": "/media/sounds/randy-march.mp3"
    },
    {
        "name": "Harro?",
        "color": "rgb(255, 115, 0)",
        "mp3": "/media/sounds/harro.mp3"
    },
    {
        "name": "moanlol",
        "color": "rgb(1, 255, 219)",
        "mp3": "/media/sounds/moanlol.mp3"
    },
    {
        "name": "Bombardiro Crocodilo!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardiro-crocodilo_4kNJ6me.mp3"
    },
    {
        "name": "Glass breaking sound effect",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
    },
    {
        "name": "Who is that Pokemon?!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/vine-who-is-that-pokemon-its-pikachu.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
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
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "LET'S GO GAMBLING AW DANG IT",
        "color": "rgb(8, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling-aw-dang-it.mp3"
    },
    {
        "name": "Goose HONK!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/honk-sound.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "sonic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jump.mp3"
    },
    {
        "name": "Gangsta's Paradise Choir 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "soulja boy huh",
        "color": "rgb(105, 143, 255)",
        "mp3": "/media/sounds/soulja-boy-saying-huh.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "DOM DOM TAVA AQUI NO BAILE",
        "color": "rgb(255, 243, 74)",
        "mp3": "/media/sounds/dom-dom-tava-aqui-no-baile.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "meow meow n-gga",
        "color": "rgb(45, 32, 0)",
        "mp3": "/media/sounds/meow-meow-n-gga.mp3"
    },
    {
        "name": "Italian brainrot",
        "color": "rgb(34, 150, 255)",
        "mp3": "/media/sounds/italian-brainrot_R7FRRmg.mp3"
    },
    {
        "name": "Coolkid Hak tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coolkid-hak-tuah.mp3"
    },
    {
        "name": "niggeralex2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggeralex2_z9hJqPk.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "Fortunate Son Vietnam Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/creedence-clearwater-revival-fortunate-sonmp3.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Hard Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fooz.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "LET'S GO GAMBLING AW DANG IT",
        "color": "rgb(8, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling-aw-dang-it.mp3"
    },
    {
        "name": "Vai todo mundo tomar no…",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vai-todo-mundo-tomar-no.mp3"
    },
    {
        "name": "turbopaja",
        "color": "rgb(169, 255, 84)",
        "mp3": "/media/sounds/turbopaja.mp3"
    },
    {
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
    },
    {
        "name": "Krow",
        "color": "rgb(114, 180, 0)",
        "mp3": "/media/sounds/krow-hit.mp3"
    },
    {
        "name": "MLP Squee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlp-squee.mp3"
    },
    {
        "name": "Fight Bell Sound",
        "color": "rgb(0, 255, 4)",
        "mp3": "/media/sounds/fight-bell-sound.mp3"
    },
    {
        "name": "sprunki retake bf normal",
        "color": "rgb(0, 0, 136)",
        "mp3": "/media/sounds/sprunki-retake-bf-normal.mp3"
    },
    {
        "name": "Ricky's Cough",
        "color": "rgb(255, 168, 206)",
        "mp3": "/media/sounds/rickys-cough.mp3"
    },
    {
        "name": "Kakaw!",
        "color": "rgb(0, 204, 255)",
        "mp3": "/media/sounds/kakaw_8TiIFim.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Bruce Buffer - It's Time",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/bruce-buffer-its-time.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "Trikitrakatelas (italian brainrot)",
        "color": "rgb(196, 255, 46)",
        "mp3": "/media/sounds/trikitrakatelas-italian-brainrot.mp3"
    },
    {
        "name": "(Mafioso) your humanoid property",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-humanoid-property.mp3"
    },
    {
        "name": "baby crying phonk",
        "color": "rgb(39, 115, 255)",
        "mp3": "/media/sounds/baby-crying-phonk.mp3"
    },
    {
        "name": "Den Den Mushi Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/den-den-mushi-short-ringtone.mp3"
    },
    {
        "name": "adele/mrs doubtfire hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mrs-doubtfire-hello_OLtBseE.mp3"
    },
    {
        "name": "Leeroy Jenkins",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/leroy.swf.mp3"
    },
    {
        "name": "Fortunate Son Vietnam Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/creedence-clearwater-revival-fortunate-sonmp3.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "Wait a minute who are you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
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
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Who's That Pokemon!?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whos-that-pokemon_.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Vine thud but you die from ear pain, kinda.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-and-or-thud-but-you-die-from-ear-pain_wzP1skh.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Throwing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-sound-effect-davemadson.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "(Anakin) LIAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "Guile Theme (CPS2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cps2-guile-stage.mp3"
    },
    {
        "name": "DBD Skill Check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dbd_check_start.mp3"
    },
    {
        "name": "gogogogogo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gogogogogo.mp3"
    },
    {
        "name": "F1lthy Producer Tag",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1lthy-producer-tag.mp3"
    },
    {
        "name": "Stone Cold Drink Beer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stone-cold-drink-beer.mp3"
    },
    {
        "name": "the rock meme sound effect",
        "color": "rgb(85, 61, 43)",
        "mp3": "/media/sounds/the-rock-meme-sound-effect.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "Burp & Fart",
        "color": "rgb(255, 114, 114)",
        "mp3": "/media/sounds/burp-fart.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "A pia ta cheia de louça",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/se-eu-largar-o-freio-oficial.mp3"
    },
    {
        "name": "Ichigo Bankai Screaming REEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai-screaming-reeeeeeeeeeeee.mp3"
    },
    {
        "name": "бегу по тропинке стоны",
        "color": "rgb(157, 150, 255)",
        "mp3": "/media/sounds/begu-po-tropinke-stony.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "br br patapim",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/br-br-patapim.mp3"
    },
    {
        "name": "Oui - Rizzler",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oui-rizzler.mp3"
    },
    {
        "name": "Hank Hill BWAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hank-hill-bwah.mp3"
    },
    {
        "name": "simp over girls on discord",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/simp-over-girls-on-discord.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "DBD Skill Check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dbd_check_start.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "Caramelldansen HD",
        "color": "rgb(255, 0, 243)",
        "mp3": "/media/sounds/caramelldansen-hd.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "Burp & Fart",
        "color": "rgb(255, 114, 114)",
        "mp3": "/media/sounds/burp-fart.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "star wars Seismic charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-seismic-charge.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "REPO ROBE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/repo-robe.mp3"
    },
    {
        "name": "randy march",
        "color": "rgb(255, 104, 250)",
        "mp3": "/media/sounds/randy-march.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "TEACH ME KINGGG",
        "color": "rgb(57, 54, 56)",
        "mp3": "/media/sounds/teach-me-kinggg.mp3"
    },
    {
        "name": "bankai katen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bankai-katen.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Get Griddy | Fortnite Emote",
        "color": "rgb(0, 255, 242)",
        "mp3": "/media/sounds/9convert_f28qQKC.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Keyboard rage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rage2.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "Glass breaking sound effect",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "we will be right back",
        "color": "rgb(47, 255, 143)",
        "mp3": "/media/sounds/well-be-right-back-green-screen_8oEb98L.mp3"
    },
    {
        "name": "Random fart button",
        "color": "rgb(221, 255, 232)",
        "mp3": "/media/sounds/fart9.mp3"
    },
    {
        "name": "Stone Cold Drink Beer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stone-cold-drink-beer.mp3"
    },
    {
        "name": "Doofenshmirtz Evil Incorporated Jingle",
        "color": "rgb(38, 99, 88)",
        "mp3": "/media/sounds/doofenshmirtz-evil-incorporated-jingle.mp3"
    },
    {
        "name": "Audience Clapping (Theater)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/theater-applause-128kbps.mp3"
    },
    {
        "name": "Cocomelon Intro",
        "color": "rgb(49, 255, 30)",
        "mp3": "/media/sounds/cocomelon-intro.mp3"
    },
    {
        "name": "Lebron James - That's to easy",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/lebron-james-thats-to-easy.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "Luigi - Oh Yeah",
        "color": "rgb(108, 255, 105)",
        "mp3": "/media/sounds/luigi-oh-yeah.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "Ichigo Bankai Screaming REEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai-screaming-reeeeeeeeeeeee.mp3"
    },
    {
        "name": "why did u redeem it",
        "color": "rgb(255, 40, 158)",
        "mp3": "/media/sounds/why-did-u-redeem-it.mp3"
    },
    {
        "name": "What did you say - boondocks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-did-you-say-boondocks.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "REPO ROBE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/repo-robe.mp3"
    },
    {
        "name": "Fart Then Moan.mp3 By Mango",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-then-moan-mp3-by-mango.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "Hotspot brainrot",
        "color": "rgb(23, 19, 19)",
        "mp3": "/media/sounds/hotspot-brainrot.mp3"
    },
    {
        "name": "Trikitrakatelas (italian brainrot)",
        "color": "rgb(196, 255, 46)",
        "mp3": "/media/sounds/trikitrakatelas-italian-brainrot.mp3"
    },
    {
        "name": "Skibidi Fortnite - @Cartel_Dealer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skibidi-fortnite-cartel-dealer.mp3"
    },
    {
        "name": "Zvinocrily Bombaccini",
        "color": "rgb(35, 73, 36)",
        "mp3": "/media/sounds/zvinocrily-bombaccini.mp3"
    },
    {
        "name": "BRR BRR PATAPIM funk",
        "color": "rgb(17, 94, 18)",
        "mp3": "/media/sounds/brr-brr-patapim-funk.mp3"
    },
    {
        "name": "Miku alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miku-alarm.mp3"
    },
    {
        "name": "callate peruano culiao",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/callate-peruano-culiao.mp3"
    },
    {
        "name": "Cute Anime Roar",
        "color": "rgb(96, 255, 253)",
        "mp3": "/media/sounds/cuteanimeroar_bybakster.mp3"
    },
    {
        "name": "niggeralex2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggeralex2_z9hJqPk.mp3"
    },
    {
        "name": "Hellcat whine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hellcat-whine.mp3"
    },
    {
        "name": "Palpatine Order 66",
        "color": "rgb(255, 41, 178)",
        "mp3": "/media/sounds/palpatine-order-66.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "Original Sheesh",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/original-sheesh.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "Wait a minute who are you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Online Download Charts",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/online.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Spongebob - I NEED IT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tv-quotables-i-need-it-spongebob-squarepants.mp3"
    },
    {
        "name": "mao zedong propaganda music Red Sun in the Sky",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mao-zedong-propaganda-music-red-sun-in-the-sky.mp3"
    },
    {
        "name": "baby shark",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baby-shark-dance-sing-and-dance-animal-songs-pinkfong-songs-for-children-audiotrimmer.mp3"
    },
    {
        "name": "sonic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jump.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "roblox num num num",
        "color": "rgb(249, 255, 19)",
        "mp3": "/media/sounds/nomnomnom_rdOBNcn.mp3"
    },
    {
        "name": "Dallas Stars Goal Horn",
        "color": "rgb(4, 255, 0)",
        "mp3": "/media/sounds/dallas-stars-2020-goal-horn.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "woosh!!!",
        "color": "rgb(23, 255, 0)",
        "mp3": "/media/sounds/woosh_CgcHxGh.mp3"
    },
    {
        "name": "meow meow n-gga",
        "color": "rgb(45, 32, 0)",
        "mp3": "/media/sounds/meow-meow-n-gga.mp3"
    },
    {
        "name": "Грызть какашки",
        "color": "rgb(40, 18, 18)",
        "mp3": "/media/sounds/gryzt-kakashki.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Coolkid Hak tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coolkid-hak-tuah.mp3"
    },
    {
        "name": "Cute Anime Roar",
        "color": "rgb(96, 255, 253)",
        "mp3": "/media/sounds/cuteanimeroar_bybakster.mp3"
    },
    {
        "name": "Mi vecino jose",
        "color": "rgb(255, 162, 68)",
        "mp3": "/media/sounds/mi-vecino-jose.mp3"
    },
    {
        "name": "Boing Super Mario",
        "color": "rgb(225, 39, 255)",
        "mp3": "/media/sounds/boing-super-mario.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "Dallas Stars Goal Horn",
        "color": "rgb(4, 255, 0)",
        "mp3": "/media/sounds/dallas-stars-2020-goal-horn.mp3"
    },
    {
        "name": "woosh!!!",
        "color": "rgb(23, 255, 0)",
        "mp3": "/media/sounds/woosh_CgcHxGh.mp3"
    },
    {
        "name": "meow meow n-gga",
        "color": "rgb(45, 32, 0)",
        "mp3": "/media/sounds/meow-meow-n-gga.mp3"
    },
    {
        "name": "Грызть какашки",
        "color": "rgb(40, 18, 18)",
        "mp3": "/media/sounds/gryzt-kakashki.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Тунг тунг тунг саур",
        "color": "rgb(255, 230, 45)",
        "mp3": "/media/sounds/tung-tung-tung-saur.mp3"
    },
    {
        "name": "Coolkid Hak tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coolkid-hak-tuah.mp3"
    },
    {
        "name": "Cute Anime Roar",
        "color": "rgb(96, 255, 253)",
        "mp3": "/media/sounds/cuteanimeroar_bybakster.mp3"
    },
    {
        "name": "Mi vecino jose",
        "color": "rgb(255, 162, 68)",
        "mp3": "/media/sounds/mi-vecino-jose.mp3"
    },
    {
        "name": "Boing Super Mario",
        "color": "rgb(225, 39, 255)",
        "mp3": "/media/sounds/boing-super-mario.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "the more you know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-more-you-know.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "I have the power of god and anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i_have_the_power_of_god_and_anime_on_my_side.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "SpongeBob - I'M READY",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/im-ready.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Crickets = MattHQ",
        "color": "rgb(153, 204, 102)",
        "mp3": "/media/sounds/crickets-hq.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "Bedtime",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/bedtime.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "News Intro Breaking News",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/news_intro-maximilien_-1801238420_2.mp3"
    },
    {
        "name": "Wiiiiiiiiiiiiii sport",
        "color": "rgb(0, 212, 255)",
        "mp3": "/media/sounds/wii-sports-wii-sports-theme-y.mp3"
    },
    {
        "name": "Low Health / Critical Health Pokémon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/low-health-critical-health-pokemon.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "For the emperorr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-the-emperor_CDrYyoT.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Fart Moan2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-moan2.mp3"
    },
    {
        "name": "randy march",
        "color": "rgb(255, 104, 250)",
        "mp3": "/media/sounds/randy-march.mp3"
    },
    {
        "name": "MOANNNNN TORTISE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moannnnn-tortise.mp3"
    },
    {
        "name": "Yes king who’s is this",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-whos-is-this.mp3"
    },
    {
        "name": "pastor mirim",
        "color": "rgb(104, 255, 66)",
        "mp3": "/media/sounds/pastor-mirim.mp3"
    },
    {
        "name": "ROM ROM BHAIYO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rom-rom-bhaiyo.mp3"
    },
    {
        "name": "_____1Gift-Confetti",
        "color": "rgb(76, 255, 196)",
        "mp3": "/media/sounds/1gift-confetti.mp3"
    },
    {
        "name": "Everything is Awesome!",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/everything-is-awesome.mp3"
    },
    {
        "name": "Omae wa mou shindeiru + Nani",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hokuto-hyakuretsu-ken-omae-wa-mou-shindeiru-copia-mp3cut.mp3"
    },
    {
        "name": "Cartman-respect my authoritah",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/cartman-respect-mah-authoritah.mp3"
    },
    {
        "name": "Finish Him! (MK2)",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/e64a3c_mortal_kombat_2_finish_him_sound_effect.mp3"
    },
    {
        "name": "SCHLATT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slattt.mp3"
    },
    {
        "name": "Oh Hell No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtone_7.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "defuse valorant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/defuse-valorant.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "samsung notification",
        "color": "rgb(80, 194, 255)",
        "mp3": "/media/sounds/samsung-notification-sound-bass-boosted.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Jesus Christ Kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jesus-christ-kid.mp3"
    },
    {
        "name": "Hello Mario",
        "color": "rgb(0, 170, 6)",
        "mp3": "/media/sounds/hello-mario-audiotrimmer.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "Hank Hill BWAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hank-hill-bwah.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "нолик бомбит",
        "color": "rgb(0, 162, 255)",
        "mp3": "/media/sounds/nolik-bombit.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "Trikitrakatelas (italian brainrot)",
        "color": "rgb(196, 255, 46)",
        "mp3": "/media/sounds/trikitrakatelas-italian-brainrot.mp3"
    },
    {
        "name": "This is... MASS INFECTION!",
        "color": "rgb(15, 51, 4)",
        "mp3": "/media/sounds/this-is-mass-infection.mp3"
    },
    {
        "name": "Zvinocrily Bombaccini",
        "color": "rgb(35, 73, 36)",
        "mp3": "/media/sounds/zvinocrily-bombaccini.mp3"
    },
    {
        "name": "iphone apple store sound",
        "color": "rgb(255, 10, 10)",
        "mp3": "/media/sounds/iphone-apple-store-sound.mp3"
    },
    {
        "name": "Minos Prime ''JUDGEMENT!''",
        "color": "rgb(136, 244, 255)",
        "mp3": "/media/sounds/minos-prime-judgement.mp3"
    },
    {
        "name": "-click here you nigger——",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/click-here-you-nigger.mp3"
    },
    {
        "name": "awww lenny",
        "color": "rgb(48, 230, 255)",
        "mp3": "/media/sounds/awww-lenny.mp3"
    },
    {
        "name": "Tiririca Au Gostaria de merendar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tiririca-au-gostaria-de-merendar.mp3"
    },
    {
        "name": "DiscordExtremeCall",
        "color": "rgb(0, 140, 255)",
        "mp3": "/media/sounds/discordextremecall.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Wait a minute who are you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
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
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "Kanye West Wolves Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wolves_-_kanye-6b019add-71f7-4a31-8363-ed112937445e.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "talking benn ughhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-ughhh.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Poyo Kirby",
        "color": "rgb(255, 2, 209)",
        "mp3": "/media/sounds/kirby-poyo.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Vine thud but you die from ear pain, kinda.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-and-or-thud-but-you-die-from-ear-pain_wzP1skh.mp3"
    },
    {
        "name": "Fortnite Scar Shot",
        "color": "rgb(231, 200, 0)",
        "mp3": "/media/sounds/ar-epic-shot-1.mp3"
    },
    {
        "name": "JJJ Jameson spiderman laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/j-jonah-jameson-laugh-spiderman.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "simp over girls on discord",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/simp-over-girls-on-discord.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "(Anakin) LIAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "It was at this moment that he knew he f_cked up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/it-was-at-this-moment-that-he-knew-he-f-cked-up.mp3"
    },
    {
        "name": "Audience Clapping (Theater)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/theater-applause-128kbps.mp3"
    },
    {
        "name": "A pia ta cheia de louça",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/se-eu-largar-o-freio-oficial.mp3"
    },
    {
        "name": "Cocomelon Intro",
        "color": "rgb(49, 255, 30)",
        "mp3": "/media/sounds/cocomelon-intro.mp3"
    },
    {
        "name": "Fireplace crackling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/37ecb736-12e1-4328-83c6-af7479b45b26-online-audio-converter_8fmSM4W.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "bing-bop-boom-boom-boom-bop-bam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bing-bop-boom-boom-boom-bop-bam.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "rip bozo minos prime",
        "color": "rgb(9, 194, 255)",
        "mp3": "/media/sounds/rip-bozo-minos-prime.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "Fart Moan2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-moan2.mp3"
    },
    {
        "name": "randy march",
        "color": "rgb(255, 104, 250)",
        "mp3": "/media/sounds/randy-march.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "Этот звук выглядит незаконно",
        "color": "rgb(84, 29, 29)",
        "mp3": "/media/sounds/etot-zvuk-vygliadit-nezakonno.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "_____1Gift-Confetti",
        "color": "rgb(76, 255, 196)",
        "mp3": "/media/sounds/1gift-confetti.mp3"
    },
    {
        "name": "iphone apple store sound",
        "color": "rgb(255, 10, 10)",
        "mp3": "/media/sounds/iphone-apple-store-sound.mp3"
    },
    {
        "name": "Obi-Wan has the High Ground",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/i-have-the-high-ground.mp3"
    },
    {
        "name": "baby crying phonk",
        "color": "rgb(39, 115, 255)",
        "mp3": "/media/sounds/baby-crying-phonk.mp3"
    },
    {
        "name": "Vai todo mundo tomar no…",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vai-todo-mundo-tomar-no.mp3"
    },
    {
        "name": "Everything is Awesome!",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/everything-is-awesome.mp3"
    },
    {
        "name": "ah ah ah wa ha ah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-ah-ah-wa-ha-ah_ZRXThGw.mp3"
    },
    {
        "name": "Omae wa mou shindeiru + Nani",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hokuto-hyakuretsu-ken-omae-wa-mou-shindeiru-copia-mp3cut.mp3"
    },
    {
        "name": "Cartman-respect my authoritah",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/cartman-respect-mah-authoritah.mp3"
    },
    {
        "name": "Finish Him! (MK2)",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/e64a3c_mortal_kombat_2_finish_him_sound_effect.mp3"
    },
    {
        "name": "SCHLATT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slattt.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "Windows XP error music",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/musica_1.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "CS - Holy shit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/holy-shit.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Buddy Holly Weezer Guitar Lick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "I am so lonely",
        "color": "rgb(238, 238, 238)",
        "mp3": "/media/sounds/i-am-so-lonely.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "СтоНыы",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stonyy.mp3"
    },
    {
        "name": "Trullimero Trullicina",
        "color": "rgb(34, 244, 255)",
        "mp3": "/media/sounds/trullimero-trullicina.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "kqdee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kqdee.mp3"
    },
    {
        "name": "Ai chega chega",
        "color": "rgb(36, 160, 74)",
        "mp3": "/media/sounds/ai-chega-chega.mp3"
    },
    {
        "name": "Discord Call Remix",
        "color": "rgb(93, 68, 255)",
        "mp3": "/media/sounds/discord-call-remix-extended_qisxy7ss.mp3"
    },
    {
        "name": "Vai todo mundo tomar no…",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vai-todo-mundo-tomar-no.mp3"
    },
    {
        "name": "turbopaja",
        "color": "rgb(169, 255, 84)",
        "mp3": "/media/sounds/turbopaja.mp3"
    },
    {
        "name": "ah ah ah wa ha ah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-ah-ah-wa-ha-ah_ZRXThGw.mp3"
    },
    {
        "name": "ff7 fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ff7_LVwg2Lo.mp3"
    },
    {
        "name": "bankai katen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bankai-katen.mp3"
    },
    {
        "name": "Tengo Hambre Margarito",
        "color": "rgb(213, 0, 255)",
        "mp3": "/media/sounds/videoplayback_c47vwjg.mp3"
    },
    {
        "name": "Bueller?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bueller.mp3"
    },
    {
        "name": "adele/mrs doubtfire hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mrs-doubtfire-hello_OLtBseE.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "Halo",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/Halo.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "I have the power of god and anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i_have_the_power_of_god_and_anime_on_my_side.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "DEAD BODY REPORTED (Among Us)",
        "color": "rgb(14, 158, 255)",
        "mp3": "/media/sounds/among-us-dead-body-reported-sound-effect_BsczDVE.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Hard Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fooz.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "Valorant Kill Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/multikill-1.mp3"
    },
    {
        "name": "Crickets = MattHQ",
        "color": "rgb(153, 204, 102)",
        "mp3": "/media/sounds/crickets-hq.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "rip bozo minos prime",
        "color": "rgb(9, 194, 255)",
        "mp3": "/media/sounds/rip-bozo-minos-prime.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "Omni man fat butt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-fat-butt.mp3"
    },
    {
        "name": "Звук домофона",
        "color": "rgb(138, 255, 176)",
        "mp3": "/media/sounds/zvuk-domofona.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "Rat Dance (Chess Type Beat)",
        "color": "rgb(108, 255, 240)",
        "mp3": "/media/sounds/rat-dance-chess-type-beat.mp3"
    },
    {
        "name": "Тунг тунг тунг саур",
        "color": "rgb(255, 230, 45)",
        "mp3": "/media/sounds/tung-tung-tung-saur.mp3"
    },
    {
        "name": "_____1Gift-Confetti",
        "color": "rgb(76, 255, 196)",
        "mp3": "/media/sounds/1gift-confetti.mp3"
    },
    {
        "name": "Obi-Wan has the High Ground",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/i-have-the-high-ground.mp3"
    },
    {
        "name": "baby crying phonk",
        "color": "rgb(39, 115, 255)",
        "mp3": "/media/sounds/baby-crying-phonk.mp3"
    },
    {
        "name": "Everything is Awesome!",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/everything-is-awesome.mp3"
    },
    {
        "name": "ah ah ah wa ha ah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-ah-ah-wa-ha-ah_ZRXThGw.mp3"
    },
    {
        "name": "Omae wa mou shindeiru + Nani",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hokuto-hyakuretsu-ken-omae-wa-mou-shindeiru-copia-mp3cut.mp3"
    },
    {
        "name": "Cartman-respect my authoritah",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/cartman-respect-mah-authoritah.mp3"
    },
    {
        "name": "Finish Him! (MK2)",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/e64a3c_mortal_kombat_2_finish_him_sound_effect.mp3"
    },
    {
        "name": "SCHLATT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slattt.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "coffin dance",
        "color": "rgb(132, 53, 53)",
        "mp3": "/media/sounds/vicetone-tony-igy-astronomia-2014-audiotrimmer.mp3"
    },
    {
        "name": "Buddy Holly Weezer Guitar Lick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Грызть какашки",
        "color": "rgb(40, 18, 18)",
        "mp3": "/media/sounds/gryzt-kakashki.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "(mafioso) you won't live to see the next day",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-you-wont-live-to-see-the-next-day.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "Trullimero Trullicina",
        "color": "rgb(34, 244, 255)",
        "mp3": "/media/sounds/trullimero-trullicina.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "My name is 1x.. yeah.",
        "color": "rgb(19, 56, 10)",
        "mp3": "/media/sounds/my-name-is-1x-yeah.mp3"
    },
    {
        "name": "He's Loose",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/he_s-loose-sound.mp3"
    },
    {
        "name": "(Mafioso) your humanoid property",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-humanoid-property.mp3"
    },
    {
        "name": "Kobo Jawa",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/kobo-jawa.mp3"
    },
    {
        "name": "Очень жёсткий стон яковлива",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ochen-zhiostkii-ston-iakovliva.mp3"
    },
    {
        "name": "Я ебу бабульку сочную бабульку",
        "color": "rgb(74, 14, 255)",
        "mp3": "/media/sounds/ia-ebu-babulku-sochnuiu-babulku.mp3"
    },
    {
        "name": "Discord Call Remix",
        "color": "rgb(93, 68, 255)",
        "mp3": "/media/sounds/discord-call-remix-extended_qisxy7ss.mp3"
    },
    {
        "name": "Jeopardy Ding",
        "color": "rgb(85, 255, 8)",
        "mp3": "/media/sounds/jeopardy-ding.mp3"
    },
    {
        "name": "DEFYING GRAVITY!!!",
        "color": "rgb(89, 137, 61)",
        "mp3": "/media/sounds/defying-gravity.mp3"
    },
    {
        "name": "Mi vecino jose",
        "color": "rgb(255, 162, 68)",
        "mp3": "/media/sounds/mi-vecino-jose.mp3"
    },
    {
        "name": "Bill Cipher Meet again",
        "color": "rgb(255, 248, 30)",
        "mp3": "/media/sounds/gravity-falls-well-meet-again.mp3"
    },
    {
        "name": "MLP Squee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlp-squee.mp3"
    },
    {
        "name": "Kiki do you love me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/editor_qgevdvm.mp3"
    },
    {
        "name": "Kakaw!",
        "color": "rgb(0, 204, 255)",
        "mp3": "/media/sounds/kakaw_8TiIFim.mp3"
    },
    {
        "name": "Krow",
        "color": "rgb(114, 180, 0)",
        "mp3": "/media/sounds/krow-hit.mp3"
    },
    {
        "name": "Half-Life Space Ocean Music Stinger",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/half-life-space-ocean-music-stinger.mp3"
    },
    {
        "name": "Why Are We Still Here, Just to Suffer?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-we-still-here-just-to-suffer.mp3"
    },
    {
        "name": "Why are we still here?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-we-still-here-pewdiepie2.mp3"
    },
    {
        "name": "Kevin Hart - All Set",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/startdrive4_isbJ7Vl.mp3"
    },
    {
        "name": "knock knock Arnold",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knockknock_YQjWmJn.mp3"
    },
    {
        "name": "Besos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kisses-1.mp3"
    },
    {
        "name": "Fight Bell Sound",
        "color": "rgb(0, 255, 4)",
        "mp3": "/media/sounds/fight-bell-sound.mp3"
    },
    {
        "name": "sprunki retake bf normal",
        "color": "rgb(0, 0, 136)",
        "mp3": "/media/sounds/sprunki-retake-bf-normal.mp3"
    },
    {
        "name": "Ricky's Cough",
        "color": "rgb(255, 168, 206)",
        "mp3": "/media/sounds/rickys-cough.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "running in the 90s",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/running.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "the more you know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-more-you-know.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "Ryan gosling burp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ryan-gosling-burp.mp3"
    },
    {
        "name": "Fein x nokia",
        "color": "rgb(28, 66, 255)",
        "mp3": "/media/sounds/fein-x-nokia.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "rip bozo minos prime",
        "color": "rgb(9, 194, 255)",
        "mp3": "/media/sounds/rip-bozo-minos-prime.mp3"
    },
    {
        "name": "Friggen Packet Yo",
        "color": "rgb(107, 255, 230)",
        "mp3": "/media/sounds/friggen-packet-yo.mp3"
    },
    {
        "name": "Omni man fat butt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-fat-butt.mp3"
    },
    {
        "name": "Rat Dance (Chess Type Beat)",
        "color": "rgb(108, 255, 240)",
        "mp3": "/media/sounds/rat-dance-chess-type-beat.mp3"
    },
    {
        "name": "My name is 1x.. yeah.",
        "color": "rgb(19, 56, 10)",
        "mp3": "/media/sounds/my-name-is-1x-yeah.mp3"
    },
    {
        "name": "Очень жёсткий стон яковлива",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ochen-zhiostkii-ston-iakovliva.mp3"
    },
    {
        "name": "_____1Gift-Confetti",
        "color": "rgb(76, 255, 196)",
        "mp3": "/media/sounds/1gift-confetti.mp3"
    },
    {
        "name": "Obi-Wan has the High Ground",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/i-have-the-high-ground.mp3"
    },
    {
        "name": "Ayo come look at this",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ayo-come-look-at-this.mp3"
    },
    {
        "name": "baby crying phonk",
        "color": "rgb(39, 115, 255)",
        "mp3": "/media/sounds/baby-crying-phonk.mp3"
    },
    {
        "name": "Lets go Gambling! (Phonk)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lets-go-gambling-phonk.mp3"
    },
    {
        "name": "Everything is Awesome!",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/everything-is-awesome.mp3"
    },
    {
        "name": "ah ah ah wa ha ah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-ah-ah-wa-ha-ah_ZRXThGw.mp3"
    },
    {
        "name": "Omae wa mou shindeiru + Nani",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hokuto-hyakuretsu-ken-omae-wa-mou-shindeiru-copia-mp3cut.mp3"
    },
    {
        "name": "Cartman-respect my authoritah",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/cartman-respect-mah-authoritah.mp3"
    },
    {
        "name": "Finish Him! (MK2)",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/e64a3c_mortal_kombat_2_finish_him_sound_effect.mp3"
    },
    {
        "name": "SCHLATT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slattt.mp3"
    },
    {
        "name": "ไม่ได้แดกกูหรอก",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mei-die-dak.mp3"
    },
    {
        "name": "Bueller?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bueller.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
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
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "MEEP MERP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/magic_immune.mp3"
    },
    {
        "name": "coffin dance",
        "color": "rgb(132, 53, 53)",
        "mp3": "/media/sounds/vicetone-tony-igy-astronomia-2014-audiotrimmer.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Mi vecino jose",
        "color": "rgb(255, 162, 68)",
        "mp3": "/media/sounds/mi-vecino-jose.mp3"
    },
    {
        "name": "Bill Cipher Meet again",
        "color": "rgb(255, 248, 30)",
        "mp3": "/media/sounds/gravity-falls-well-meet-again.mp3"
    },
    {
        "name": "MLP Squee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlp-squee.mp3"
    },
    {
        "name": "Kiki do you love me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/editor_qgevdvm.mp3"
    },
    {
        "name": "Kakaw!",
        "color": "rgb(0, 204, 255)",
        "mp3": "/media/sounds/kakaw_8TiIFim.mp3"
    },
    {
        "name": "Krow",
        "color": "rgb(114, 180, 0)",
        "mp3": "/media/sounds/krow-hit.mp3"
    },
    {
        "name": "Half-Life Space Ocean Music Stinger",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/half-life-space-ocean-music-stinger.mp3"
    },
    {
        "name": "Why Are We Still Here, Just to Suffer?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-we-still-here-just-to-suffer.mp3"
    },
    {
        "name": "Why are we still here?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-we-still-here-pewdiepie2.mp3"
    },
    {
        "name": "Kevin Hart - All Set",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/startdrive4_isbJ7Vl.mp3"
    },
    {
        "name": "knock knock Arnold",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knockknock_YQjWmJn.mp3"
    },
    {
        "name": "Besos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kisses-1.mp3"
    },
    {
        "name": "sprunki retake bf normal",
        "color": "rgb(0, 0, 136)",
        "mp3": "/media/sounds/sprunki-retake-bf-normal.mp3"
    },
    {
        "name": "Ricky's Cough",
        "color": "rgb(255, 168, 206)",
        "mp3": "/media/sounds/rickys-cough.mp3"
    },
    {
        "name": "omae wa mou shindeiru NANI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_Pmxf5n3.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evillaugh.swf.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Chipi chipi chapa chapa",
        "color": "rgb(11, 255, 241)",
        "mp3": "/media/sounds/chipi-chipi-chapa-chapa.mp3"
    },
    {
        "name": "the more you know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-more-you-know.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "Anime girl",
        "color": "rgb(255, 204, 255)",
        "mp3": "/media/sounds/anime-voice-swap1.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
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
        "name": "Mario Yahoo",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/super-mario-64-yahoo-sound.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "BIG D RANDY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-d-randy_VnopRXZ.mp3"
    },
    {
        "name": "disney channel wow",
        "color": "rgb(56, 255, 178)",
        "mp3": "/media/sounds/wow-nicely-done-disney-channel-nickelodeon-laugh-track-02.mp3"
    },
    {
        "name": "LINGA GULI GULI GULI",
        "color": "rgb(59, 253, 255)",
        "mp3": "/media/sounds/linga-guli-guli-guli.mp3"
    },
    {
        "name": "Goofy ahh piano riff",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-piano-riff.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НАХУЙ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-nakhui.mp3"
    },
    {
        "name": "estaba paralizado con mucho miedo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/estaba-paralizado-con-mucho-miedo.mp3"
    },
    {
        "name": "Chicken banana",
        "color": "rgb(255, 254, 52)",
        "mp3": "/media/sounds/chicken-banana.mp3"
    },
    {
        "name": "I am so lonely",
        "color": "rgb(238, 238, 238)",
        "mp3": "/media/sounds/i-am-so-lonely.mp3"
    },
    {
        "name": "THINK MARK!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/think-mark_u48iMaR.mp3"
    },
    {
        "name": "Сирена стоны",
        "color": "rgb(123, 0, 0)",
        "mp3": "/media/sounds/sirena-stony.mp3"
    },
    {
        "name": "kanye-east-fortnite-balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-east-fortnite-balls_NguabuF.mp3"
    },
    {
        "name": "(c00lkid) lets do that again somthime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkid-lets-do-that-again-somthime.mp3"
    },
    {
        "name": "im over here strokin'",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-over-here-strokin_iiwdXZF.mp3"
    },
    {
        "name": "you're no fun! :(",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-no-fun.mp3"
    },
    {
        "name": "Tá bom, vc fala demais",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ta-bom-vc-fala-demais.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "one piece intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-intro.mp3"
    },
    {
        "name": "Demoman buys a new car",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/demoman-buys-a-new-car.mp3"
    },
    {
        "name": "iphone apple store sound",
        "color": "rgb(255, 10, 10)",
        "mp3": "/media/sounds/iphone-apple-store-sound.mp3"
    },
    {
        "name": "P diddy nooo",
        "color": "rgb(9, 10, 13)",
        "mp3": "/media/sounds/p-diddy-nooo_L7bRR59.mp3"
    },
    {
        "name": "Palpatine Good",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/palpatine-good.mp3"
    },
    {
        "name": "gay drake",
        "color": "rgb(255, 0, 183)",
        "mp3": "/media/sounds/gay-drake.mp3"
    },
    {
        "name": "FAZ O L (LUAN GAMEPLAYS)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/faz-o-l-luan-gameplays.mp3"
    },
    {
        "name": "bill cipher peek a boo",
        "color": "rgb(252, 255, 79)",
        "mp3": "/media/sounds/bill-cipher-peek-a-boo.mp3"
    },
    {
        "name": "Super Saiyan 2",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/super-saiyan-2.mp3"
    },
    {
        "name": "Boom! Headshot!",
        "color": "rgb(153, 102, 204)",
        "mp3": "/media/sounds/boomheadshot.swf.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "Rap Battle OOOHHHH!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
    },
    {
        "name": "Grunt Birthday Party",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/grunt-birthday-party.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Ain't No Party Like A Diddy Party",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/aint-no-party-like-a-diddy-party.mp3"
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
        "name": "Mario Yahoo",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/super-mario-64-yahoo-sound.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "arab funny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arab-funny.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "Shield Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-shield-potion-fortnite-battle-royale-gaming-sound-effect-hd-sound-effects.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "quandale dingle bingleton",
        "color": "rgb(247, 255, 42)",
        "mp3": "/media/sounds/quandale-dingle-bingleton.mp3"
    },
    {
        "name": "Hold up wait a minute",
        "color": "rgb(174, 0, 0)",
        "mp3": "/media/sounds/hold-up-wait-a-minute-sound-effect.mp3"
    },
    {
        "name": "Mario 64 Bowser's Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sm64_bowser_laugh-online-audio-converter.mp3"
    },
    {
        "name": "Death Bong",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/death-bong.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "UNDERTALE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/undertale.mp3"
    },
    {
        "name": "walking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/walking_6QdYC8X.mp3"
    },
    {
        "name": "Target Acquired Meme",
        "color": "rgb(58, 19, 255)",
        "mp3": "/media/sounds/target-acquired-meme.mp3"
    },
    {
        "name": "For the emperorr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-the-emperor_CDrYyoT.mp3"
    },
    {
        "name": "the bleep sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censor-beep-sound-effect-128k-mp3.mp3"
    },
    {
        "name": "Sqeeling Pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sqeeling-pig.mp3"
    },
    {
        "name": "Minecraft Cave Sound 5",
        "color": "rgb(0, 157, 255)",
        "mp3": "/media/sounds/minecraft-cave-sound-5.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "FNF BF DEAD",
        "color": "rgb(0, 22, 255)",
        "mp3": "/media/sounds/fnf-bf-dead.mp3"
    },
    {
        "name": "Observation Haki (One Piece Katakuri)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/observation_haki_one_piece_katakuri_sound_effect_for_editing_5356509840631764694.mp3"
    },
    {
        "name": "L-lava c-c-chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l-lava-c-c-chicken.mp3"
    },
    {
        "name": "PSX (PS1) Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psx.mp3"
    },
    {
        "name": "anvil drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anvil-drop.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "I'M ABOUT TO WHIP SOMEBODY?S ASS",
        "color": "rgb(255, 255, 21)",
        "mp3": "/media/sounds/smg4-sound-effects-i-m-about-to-whip-somebody-s-ass-blueconvert.mp3"
    },
    {
        "name": "L-lava c-c-chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l-lava-c-c-chicken.mp3"
    },
    {
        "name": "PSX (PS1) Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psx.mp3"
    },
    {
        "name": "anvil drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anvil-drop.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "I'M ABOUT TO WHIP SOMEBODY?S ASS",
        "color": "rgb(255, 255, 21)",
        "mp3": "/media/sounds/smg4-sound-effects-i-m-about-to-whip-somebody-s-ass-blueconvert.mp3"
    },
    {
        "name": "Dallas Stars Goal Horn",
        "color": "rgb(4, 255, 0)",
        "mp3": "/media/sounds/dallas-stars-2020-goal-horn.mp3"
    },
    {
        "name": "Cartoon falling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-falling.mp3"
    },
    {
        "name": "Tyler the Creator SIKE!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tyler-the-creator-sike_ItZTbtq.mp3"
    },
    {
        "name": "Que rricoh eh",
        "color": "rgb(49, 33, 33)",
        "mp3": "/media/sounds/que-rricoh-eh.mp3"
    },
    {
        "name": "WHERE IS OMNI-MAN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/where-is-omni-man.mp3"
    },
    {
        "name": "gemidane",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/gemidane.mp3"
    },
    {
        "name": "tada1",
        "color": "rgb(94, 255, 207)",
        "mp3": "/media/sounds/tada1.mp3"
    },
    {
        "name": "Chicken banana",
        "color": "rgb(255, 254, 52)",
        "mp3": "/media/sounds/chicken-banana.mp3"
    },
    {
        "name": "(mafioso) maybe its time to rage quit eh?",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-maybe-its-time-to-rage-quit-eh.mp3"
    },
    {
        "name": "I WILL NOT FALTER",
        "color": "rgb(213, 255, 57)",
        "mp3": "/media/sounds/i-will-not-falter.mp3"
    },
    {
        "name": "zesty get out",
        "color": "rgb(82, 139, 255)",
        "mp3": "/media/sounds/zesty-get-out.mp3"
    },
    {
        "name": "Ам Ням",
        "color": "rgb(172, 255, 7)",
        "mp3": "/media/sounds/am-niam.mp3"
    },
    {
        "name": "Coolkid Hak tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coolkid-hak-tuah.mp3"
    },
    {
        "name": "Boykisser",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boykisser.mp3"
    },
    {
        "name": "tehelka omlette",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tehelka-omlette.mp3"
    },
    {
        "name": "GODDAMNIT CARTMAN!",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/goddamnit-cartman.mp3"
    },
    {
        "name": "niggermirror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggermirror_BTG4R8G.mp3"
    },
    {
        "name": "xbox series notification",
        "color": "rgb(49, 207, 58)",
        "mp3": "/media/sounds/xbox-series-notification.mp3"
    },
    {
        "name": "Worlds smallest violin, Mr krabs",
        "color": "rgb(154, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin-mr-krabs.mp3"
    },
    {
        "name": "What the helly Ronnie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly-ronnie.mp3"
    },
    {
        "name": "Ay dios mio - clarence",
        "color": "rgb(57, 188, 255)",
        "mp3": "/media/sounds/ay-dios-mio-clarence.mp3"
    },
    {
        "name": "Boing Super Mario",
        "color": "rgb(225, 39, 255)",
        "mp3": "/media/sounds/boing-super-mario.mp3"
    },
    {
        "name": "Boom! Headshot!",
        "color": "rgb(153, 102, 204)",
        "mp3": "/media/sounds/boomheadshot.swf.mp3"
    },
    {
        "name": "Smoke Weed EveryDay",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/snoop-dogg-smoke-weed-everyday.mp3"
    },
    {
        "name": "I'm Batman",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/im-batman.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "Borat - It's a very NICE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-a-very-nice.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "Rap Battle OOOHHHH!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
    },
    {
        "name": "Grunt Birthday Party",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/grunt-birthday-party.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-girl.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Camera Shutter (VoiceMod)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera-shutter.mp3"
    },
    {
        "name": "Mario Mushroom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super_mario_bros_mushroom_sound_effect_58k.mp3"
    },
    {
        "name": "Sisyphus",
        "color": "rgb(99, 94, 255)",
        "mp3": "/media/sounds/sisyphus.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Chicken",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/chicken_1.mp3"
    },
    {
        "name": "Pokemon Item received",
        "color": "rgb(0, 255, 157)",
        "mp3": "/media/sounds/129-received-an-item.mp3"
    },
    {
        "name": "patrick - i love you",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/i-love-you_2.mp3"
    },
    {
        "name": "McDonalds I'm Lovin It",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/mcdonalds-im-lovin-it-jingle.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "TASER",
        "color": "rgb(57, 153, 255)",
        "mp3": "/media/sounds/lcso-taser-sound-effect.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "load gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gun-load_abJphmJ.mp3"
    },
    {
        "name": "Followersound123",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/best-friends-v1_3Coc8NL.mp3"
    },
    {
        "name": "Airplane Ding Dong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/airplane-ding-dong.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "CSGO AWP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awp_02.mp3"
    },
    {
        "name": "piuw",
        "color": "rgb(247, 255, 20)",
        "mp3": "/media/sounds/piuw.mp3"
    },
    {
        "name": "Salamalekum Don Pollo",
        "color": "rgb(59, 117, 109)",
        "mp3": "/media/sounds/salamalekum-don-pollo.mp3"
    },
    {
        "name": "Ele fezz de novo incansavel",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ele-fezz-de-novo-incansavel.mp3"
    },
    {
        "name": "Android Notifications - Pixie Dust",
        "color": "rgb(82, 255, 79)",
        "mp3": "/media/sounds/android-notifications-pixie-dust.mp3"
    },
    {
        "name": "Finger Snap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/finger-snap.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "Bang Mike Breen",
        "color": "rgb(255, 136, 2)",
        "mp3": "/media/sounds/bang-mike-breen.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "Gabriel, The Apostate of Hate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gabriel-the-apostate-of-hate.mp3"
    },
    {
        "name": "Yes King You Digging In A #####",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in-a.mp3"
    },
    {
        "name": "(mafioso) here we go folks",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-here-we-go-folks.mp3"
    },
    {
        "name": "aiscream_01_ruby",
        "color": "rgb(243, 17, 255)",
        "mp3": "/media/sounds/aiscream-01-ruby_afVjwvp.mp3"
    },
    {
        "name": "Portal 2 Buzzer",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/portal2buzzer.mp3"
    },
    {
        "name": "METROOOO",
        "color": "rgb(255, 129, 163)",
        "mp3": "/media/sounds/metroooo.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "I'm Gay IDubbbz",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/idubbbz-im-gay-free-download.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Mario Yahoo",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/super-mario-64-yahoo-sound.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "BIG D RANDY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-d-randy_VnopRXZ.mp3"
    },
    {
        "name": "arab funny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arab-funny.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "lego build",
        "color": "rgb(255, 116, 38)",
        "mp3": "/media/sounds/lego-build.mp3"
    },
    {
        "name": "SpongeBob - I'M READY",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/im-ready.mp3"
    },
    {
        "name": "Air Raid Siren",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/air-raid_1.mp3"
    },
    {
        "name": "Tyler1 Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tyler1-hot-food.mp3"
    },
    {
        "name": "baby shark",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/baby-shark-dance-sing-and-dance-animal-songs-pinkfong-songs-for-children-audiotrimmer.mp3"
    },
    {
        "name": "Good morning vietnam!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/goodmorn1.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "RONALDO SIUUUU",
        "color": "rgb(46, 138, 255)",
        "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "/media/sounds/villager.mp3"
    },
    {
        "name": "Windows XP Green Screen Error",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/cut_y2mate_Ooa5JNV.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "quandale dingle bingleton",
        "color": "rgb(247, 255, 42)",
        "mp3": "/media/sounds/quandale-dingle-bingleton.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "Hold up wait a minute",
        "color": "rgb(174, 0, 0)",
        "mp3": "/media/sounds/hold-up-wait-a-minute-sound-effect.mp3"
    },
    {
        "name": "samsung notification 234223243",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nijLeKo.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "(Anakin) I hate you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hate-you_CJxWsxV.mp3"
    },
    {
        "name": "wake up meme",
        "color": "rgb(9, 9, 9)",
        "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "\"Encara Messi\"",
        "color": "rgb(39, 39, 255)",
        "mp3": "/media/sounds/gol-messi-vs-getafe-narrat-per-puyal-full-hd-1080p-audiotrimmer.mp3"
    },
    {
        "name": "Mario 64 Bowser's Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sm64_bowser_laugh-online-audio-converter.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "Pokemon Item received",
        "color": "rgb(0, 255, 157)",
        "mp3": "/media/sounds/129-received-an-item.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "Crowd Clap",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/applause_2.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "Gah Damn!",
        "color": "rgb(50, 255, 143)",
        "mp3": "/media/sounds/gah-damn_ytLqP1s.mp3"
    },
    {
        "name": "Cod Zombies Bye Bye",
        "color": "rgb(185, 131, 82)",
        "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "full squeak",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_full.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "iPhone Sent Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sentmessage_1.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "see you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-eerie-ghost-voice_kemCjJn.mp3"
    },
    {
        "name": "ScaryScream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-scream-soundbible.mp3"
    },
    {
        "name": "minecraft dead sound",
        "color": "rgb(255, 53, 174)",
        "mp3": "/media/sounds/minecraft-steves-sounds-damage-and-deaths.mp3"
    },
    {
        "name": "ayo wtf?",
        "color": "rgb(185, 255, 54)",
        "mp3": "/media/sounds/ayo-wtf-meme-sound-effect.mp3"
    },
    {
        "name": "DBZA Vegeta: \"You ruined it and I'm leaving.\"",
        "color": "rgb(0, 156, 255)",
        "mp3": "/media/sounds/dbza-vegeta-you-ruined-it-and-im-leaving.mp3"
    },
    {
        "name": "Jerkmate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jerkmate_zg37Y8g.mp3"
    },
    {
        "name": "r6 c4 sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/r6-nitro-cell-sound-effect_GqSEIx5.mp3"
    },
    {
        "name": "Lingan guli don pollo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lingan-guli-don-pollo.mp3"
    },
    {
        "name": "PUM IMPACTO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/pum-impacto.mp3"
    },
    {
        "name": "gmod ragdoll physics breaking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gmod-ragdoll-physics-breaking.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "I love you, i love you",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/i-love-you_1.mp3"
    },
    {
        "name": "Flashback",
        "color": "rgb(20, 255, 0)",
        "mp3": "/media/sounds/flashback-sound-effect_3McGd4q.mp3"
    },
    {
        "name": "Sword Swing Hit",
        "color": "rgb(32, 132, 139)",
        "mp3": "/media/sounds/combat-sword-swing-hit.mp3"
    },
    {
        "name": "Caseoh your banned",
        "color": "rgb(0, 15, 255)",
        "mp3": "/media/sounds/caseoh-your-banned.mp3"
    },
    {
        "name": "Bang Bang Skeet Skeet",
        "color": "rgb(26, 6, 175)",
        "mp3": "/media/sounds/bang-bang-skeet-skeet.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "Metal Slug Thank You",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-slug-thank-you-tenkiu.mp3"
    },
    {
        "name": "What is that WTF is that",
        "color": "rgb(8, 122, 0)",
        "mp3": "/media/sounds/what-is-that-wtf-is-that.mp3"
    },
    {
        "name": "para de mandar audio to na ucrania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-de-mandar-audio-to-na-ucrania.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "What is that WTF is that",
        "color": "rgb(8, 122, 0)",
        "mp3": "/media/sounds/what-is-that-wtf-is-that.mp3"
    },
    {
        "name": "Olha a maconha",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/olha-a-maconha.mp3"
    },
    {
        "name": "DISCORD CALL MEME",
        "color": "rgb(0, 127, 132)",
        "mp3": "/media/sounds/discord-call-meme.mp3"
    },
    {
        "name": "wenda sprunki",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wenda-sprunki.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "It's a trap! (Clean)",
        "color": "rgb(154, 255, 248)",
        "mp3": "/media/sounds/its-a-trap-clean.mp3"
    },
    {
        "name": "Mustard!!!!!!!!!!",
        "color": "rgb(255, 255, 17)",
        "mp3": "/media/sounds/mustard_eBmQqiJ.mp3"
    },
    {
        "name": "Thomas the train Bass boosted",
        "color": "rgb(0, 17, 255)",
        "mp3": "/media/sounds/thomas-the-train-bass-boosted.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "Вы чё все геи чоли тут?",
        "color": "rgb(94, 250, 255)",
        "mp3": "/media/sounds/vy-chio-vse-gei-choli-tut.mp3"
    },
    {
        "name": "Prepare thyself!",
        "color": "rgb(171, 228, 255)",
        "mp3": "/media/sounds/prepare-thyself.mp3"
    },
    {
        "name": "Trollface Phonk",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/trollface-phonk.mp3"
    },
    {
        "name": "vine boom sound meme",
        "color": "rgb(167, 140, 255)",
        "mp3": "/media/sounds/vine-boom-sound-meme.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "Surprise Emote Animal Crossing",
        "color": "rgb(116, 89, 255)",
        "mp3": "/media/sounds/surprise-emote-animal-crossing.mp3"
    },
    {
        "name": "minecraft hit sfx",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-hit-sfx.mp3"
    },
    {
        "name": "Moaningboys80231890",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moaningboys80231890.mp3"
    },
    {
        "name": "HEMA (LOUD AF)",
        "color": "rgb(244, 42, 255)",
        "mp3": "/media/sounds/hema-loud-af_qt2mmko.mp3"
    },
    {
        "name": "Minos Prime ''PREPARE THYSELF!''",
        "color": "rgb(149, 252, 255)",
        "mp3": "/media/sounds/minos-prime-prepare-thyself.mp3"
    },
    {
        "name": "nigge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nigge_2qZTnMT.mp3"
    },
    {
        "name": "c00lkidd [Come out]",
        "color": "rgb(179, 64, 64)",
        "mp3": "/media/sounds/c00lkidd-come-out.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "battlebus",
        "color": "rgb(109, 255, 109)",
        "mp3": "/media/sounds/battlebus.mp3"
    },
    {
        "name": "N Word Rap",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/n-word-rap.mp3"
    },
    {
        "name": "Орёл",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oriol_wDERDe6.mp3"
    },
    {
        "name": "АХ ДЯДЯ САША НЕ ТАК ГЛУБОКО",
        "color": "rgb(255, 35, 146)",
        "mp3": "/media/sounds/akh-diadia-sasha-ne-tak-gluboko.mp3"
    },
    {
        "name": "oiia blue",
        "color": "rgb(255, 33, 255)",
        "mp3": "/media/sounds/oiia-blue.mp3"
    },
    {
        "name": "No doors no problem",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/no-doors-no-problem.mp3"
    },
    {
        "name": "Portal 2 Buzzer",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/portal2buzzer.mp3"
    },
    {
        "name": "Tung Tung Tung Sahur :)))",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_3ZlEMck.mp3"
    },
    {
        "name": "Lava Chicken (perfect)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lava-chicken-perfect.mp3"
    },
    {
        "name": "PERIOD - Nicki Minaj",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/videoleap-9cde839e-2d8d-4945-a485-23d7f297cd9e-online-audio-converter.mp3"
    },
    {
        "name": "BTS Money Money Money",
        "color": "rgb(54, 180, 35)",
        "mp3": "/media/sounds/bts-money-money-money.mp3"
    },
    {
        "name": "Nfl BASS BASS Boosted",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nfl-bass-bass-boosted.mp3"
    },
    {
        "name": "I made a steak",
        "color": "rgb(222, 0, 0)",
        "mp3": "/media/sounds/i-made-a-steak.mp3"
    },
    {
        "name": "I like ur smile ^_^",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-ur-smile.mp3"
    },
    {
        "name": "omg its a weezer but fast",
        "color": "rgb(94, 215, 255)",
        "mp3": "/media/sounds/omg-its-a-weezer-but-fast.mp3"
    },
    {
        "name": "Price Is Right Losing Horns",
        "color": "rgb(234, 156, 255)",
        "mp3": "/media/sounds/losing-horns_VhvZYs4.mp3"
    },
    {
        "name": "carti gay",
        "color": "rgb(255, 40, 251)",
        "mp3": "/media/sounds/carti-gay.mp3"
    },
    {
        "name": "Eu viajei no seu olhar",
        "color": "rgb(255, 62, 245)",
        "mp3": "/media/sounds/eu-viajei-no-seu-olhar.mp3"
    },
    {
        "name": "Siuuuuu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siuuuuu.mp3"
    },
    {
        "name": "DREAM MANHUNT MUSIC",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/trance-music-for-racing-game_1.mp3"
    },
    {
        "name": "Hello Chinese Full",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/hello-chinese-full.mp3"
    },
    {
        "name": "gawr gura cheeki breeki",
        "color": "rgb(150, 118, 255)",
        "mp3": "/media/sounds/22933-chiki-briki.mp3"
    },
    {
        "name": "ANTE TODO MUY BUENAS NOCHES",
        "color": "rgb(240, 209, 122)",
        "mp3": "/media/sounds/ante-todo-muy-buenas-noches.mp3"
    },
    {
        "name": "KING CRIMSONNNNNNN",
        "color": "rgb(255, 22, 76)",
        "mp3": "/media/sounds/king-crimsonnnnnnn.mp3"
    },
    {
        "name": "aaahhhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaahhhhhh.mp3"
    },
    {
        "name": "Bandz a make her dance",
        "color": "rgb(2, 2, 255)",
        "mp3": "/media/sounds/bandz-a-make-her-dance.mp3"
    },
    {
        "name": "Resident Evil Jill Sandwich",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jill-sandwich.mp3"
    },
    {
        "name": "mancoooo",
        "color": "rgb(40, 115, 255)",
        "mp3": "/media/sounds/mancoooo.mp3"
    },
    {
        "name": "Carti- WHAT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/carti-what.mp3"
    },
    {
        "name": "Something chill",
        "color": "rgb(216, 60, 255)",
        "mp3": "/media/sounds/lupe-fiasco-kick_push-audiotrimmer.mp3"
    },
    {
        "name": "18 Naked CowBOys",
        "color": "rgb(237, 121, 255)",
        "mp3": "/media/sounds/ram-ranch_ZtotXD1.mp3"
    },
    {
        "name": "quick fart with reverb",
        "color": "rgb(42, 85, 255)",
        "mp3": "/media/sounds/quick-fart-with-reverb.mp3"
    },
    {
        "name": "Happy Happy Happy Cat Meme",
        "color": "rgb(255, 231, 48)",
        "mp3": "/media/sounds/happy-happy-happy-cat-meme.mp3"
    },
    {
        "name": "Bill Cipher",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/bill-cipher.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "Ooh Wah Ah Ah Ah",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/david-oohwahahahah.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "Nani?! Only",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_mkANQUf.mp3"
    },
    {
        "name": "Beedle - Thank you!",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/ww_beedle_thankyou.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "OH HELLO THERE. ( Shrek )",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shrek-oh-hello-there_nhnoZHY.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
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
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "Cartoon Tiptoe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-tiptoe.mp3"
    },
    {
        "name": "wtffff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-sound.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "ksi lol",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/ksi-lol.mp3"
    },
    {
        "name": "Street Fighter Deadth",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/street.mp3"
    },
    {
        "name": "Roblox Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/impact_explosion_03_UhRGks5.mp3"
    },
    {
        "name": "birds chirping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bird-chirping-sound-effect.mp3"
    },
    {
        "name": "ay ay ay im ur little butterfly",
        "color": "rgb(255, 57, 156)",
        "mp3": "/media/sounds/9convert_9f6OCue.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "BeReal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bereal.mp3"
    },
    {
        "name": "Guess who's back, Shady's back",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/guess-whos-back-shadys-back.mp3"
    },
    {
        "name": "Xenoverse goku noise",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/xenoverse-goku-noise.mp3"
    },
    {
        "name": "zelda guardian",
        "color": "rgb(63, 10, 255)",
        "mp3": "/media/sounds/zelda-guardian.mp3"
    },
    {
        "name": "wake up filthy",
        "color": "rgb(10, 120, 255)",
        "mp3": "/media/sounds/wake-up-filthy.mp3"
    },
    {
        "name": "sparkle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sparkle-sound-effect.mp3"
    },
    {
        "name": "AOL Dial-Up",
        "color": "rgb(4, 0, 109)",
        "mp3": "/media/sounds/aoldialup1.mp3"
    },
    {
        "name": "Stomach growl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stomach-growling-soundbible.mp3"
    },
    {
        "name": "Ha fags South park cartman",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpi6_ngoq1.mp3"
    },
    {
        "name": "electricity",
        "color": "rgb(255, 227, 0)",
        "mp3": "/media/sounds/electricity_us849kj.mp3"
    },
    {
        "name": "Quandale Dingle Stories 1",
        "color": "rgb(98, 31, 124)",
        "mp3": "/media/sounds/quandale-dingle-stories-1.mp3"
    },
    {
        "name": "CSGO AWP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awp_02.mp3"
    },
    {
        "name": "Radiation",
        "color": "rgb(0, 95, 11)",
        "mp3": "/media/sounds/radiation.mp3"
    },
    {
        "name": "Suspenseful",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspenseful.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "iPhone Screenshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone-screenshot.mp3"
    },
    {
        "name": "DISCORD CALL MEME",
        "color": "rgb(0, 127, 132)",
        "mp3": "/media/sounds/discord-call-meme.mp3"
    },
    {
        "name": "wenda sprunki",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wenda-sprunki.mp3"
    },
    {
        "name": "Ele fezz de novo incansavel",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ele-fezz-de-novo-incansavel.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Wario dies in a car crash",
        "color": "rgb(241, 255, 52)",
        "mp3": "/media/sounds/wario-dies-in-a-car-crash.mp3"
    },
    {
        "name": "It's a trap! (Clean)",
        "color": "rgb(154, 255, 248)",
        "mp3": "/media/sounds/its-a-trap-clean.mp3"
    },
    {
        "name": "Mustard!!!!!!!!!!",
        "color": "rgb(255, 255, 17)",
        "mp3": "/media/sounds/mustard_eBmQqiJ.mp3"
    },
    {
        "name": "Thomas the train Bass boosted",
        "color": "rgb(0, 17, 255)",
        "mp3": "/media/sounds/thomas-the-train-bass-boosted.mp3"
    },
    {
        "name": "Wide Putin Walkin",
        "color": "rgb(49, 59, 67)",
        "mp3": "/media/sounds/wide-putin-walkin.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "Undertale Savepoint",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/savepoint.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "ay ay ay im ur little butterfly",
        "color": "rgb(255, 57, 156)",
        "mp3": "/media/sounds/9convert_9f6OCue.mp3"
    },
    {
        "name": "Uwu hannah",
        "color": "rgb(222, 74, 255)",
        "mp3": "/media/sounds/uwu-hannah.mp3"
    },
    {
        "name": "SHING SHING SHING SHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mongraal-shing-shing-sound-for-twitch.mp3"
    },
    {
        "name": "chattering teeth",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/chattering-teeth.mp3"
    },
    {
        "name": "TF2 Notification Sound",
        "color": "rgb(157, 157, 157)",
        "mp3": "/media/sounds/tf2-notification-sound.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "Ocelot Meow",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/ocelot-meowing.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "Gun shots",
        "color": "rgb(149, 204, 220)",
        "mp3": "/media/sounds/gun-shots.mp3"
    },
    {
        "name": "Uncle Ruckus Got the rope",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-i-got-the-rope_eH5EBBM.mp3"
    },
    {
        "name": "Hamster dance",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hamster-dance.mp3"
    },
    {
        "name": "OUI OUI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_DO1kVeR.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "botao do whatsapp",
        "color": "rgb(28, 255, 0)",
        "mp3": "/media/sounds/botao-do-whatsapp.mp3"
    },
    {
        "name": "Target Locked",
        "color": "rgb(6, 255, 0)",
        "mp3": "/media/sounds/target-locked-sound-effect.mp3"
    },
    {
        "name": "I don't want peace. I want problems, always.",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/i-dont-want-peace.mp3"
    },
    {
        "name": "Its raining Tacos",
        "color": "rgb(64, 255, 77)",
        "mp3": "/media/sounds/vlc-record-2020-04-05-08h19m15s-parry-gripp-boonebum-.mp3"
    },
    {
        "name": "PACKGOD SONG",
        "color": "rgb(164, 6, 30)",
        "mp3": "/media/sounds/packgod-song.mp3"
    },
    {
        "name": "Kahoot Lobby Music",
        "color": "rgb(224, 206, 255)",
        "mp3": "/media/sounds/kahoot-lobby-music.mp3"
    },
    {
        "name": "Doom Music",
        "color": "rgb(48, 89, 41)",
        "mp3": "/media/sounds/doom-music.mp3"
    },
    {
        "name": "Suspenseful",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspenseful.mp3"
    },
    {
        "name": "dbz rapid punches sfx",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/dbz-rapid-punches-sfx.mp3"
    },
    {
        "name": "El señor de la noche - Don Omar",
        "color": "rgb(58, 255, 58)",
        "mp3": "/media/sounds/el-senor-de-la-noche-don-omar.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Oh Yeah Vector R6",
        "color": "rgb(255, 154, 65)",
        "mp3": "/media/sounds/oh-yeah-vector-r6.mp3"
    },
    {
        "name": "screaming monkeys",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/screaming-monkeys.mp3"
    },
    {
        "name": "Rust MLRS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-mlrs.mp3"
    },
    {
        "name": "Buzzer error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buzzer-error.mp3"
    },
    {
        "name": "Понос.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ponos-mp3.mp3"
    },
    {
        "name": "É q eu tô meio gripadinha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
    },
    {
        "name": "The Bluetooth Device its connected Succesfull",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bluetooth-device-its-connected-succesfull.mp3"
    },
    {
        "name": "goofy mickey mouse laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-mickey-mouse-laugh.mp3"
    },
    {
        "name": "Did we just become best friends?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/did-we-just-become-best-friends.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "crowd panic loud",
        "color": "rgb(122, 9, 139)",
        "mp3": "/media/sounds/crowd-panic-sound-effect-mp3cut_WCIalhC.mp3"
    },
    {
        "name": "Banana Peel Slip",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/banana-peel-slip.mp3"
    },
    {
        "name": "Shoebody Bop",
        "color": "rgb(255, 73, 158)",
        "mp3": "/media/sounds/shoebody-bop.mp3"
    },
    {
        "name": "Fairy twinkle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-twinkle.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "Bla Bla Ble Ble Blu Blu Blu Don pollo",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/bla-bla-ble-ble-blu-blu-blu-don-pollo.mp3"
    },
    {
        "name": "Мама, Я покакал",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-ia-pokakal.mp3"
    },
    {
        "name": "Stadium Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stadium-rave.mp3"
    },
    {
        "name": "нолик бомбит",
        "color": "rgb(0, 162, 255)",
        "mp3": "/media/sounds/nolik-bombit.mp3"
    },
    {
        "name": "brainrot cat",
        "color": "rgb(68, 255, 0)",
        "mp3": "/media/sounds/brainrot-cat.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "Akirose - Good boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aki-rosenthal-good-boy.mp3"
    },
    {
        "name": "fuckin dick!!!!",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/fuckin-dick.mp3"
    },
    {
        "name": "so shiny so strong",
        "color": "rgb(18, 192, 255)",
        "mp3": "/media/sounds/so-shiny-so-strong.mp3"
    },
    {
        "name": "ih takotnyee",
        "color": "rgb(43, 34, 255)",
        "mp3": "/media/sounds/ih-takotnyee.mp3"
    },
    {
        "name": "Toby Be Good Nig",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toby-be-good-nig.mp3"
    },
    {
        "name": "truth detector buzzer",
        "color": "rgb(57, 189, 53)",
        "mp3": "/media/sounds/truth-detector-buzzer.mp3"
    },
    {
        "name": "DAMN pukeko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/damn-pukeko.mp3"
    },
    {
        "name": "Alexis Texas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alexis-texas.mp3"
    },
    {
        "name": "CLAP BUTTON",
        "color": "rgb(95, 113, 255)",
        "mp3": "/media/sounds/clap-button.mp3"
    },
    {
        "name": "SEA SALT louder by w",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/sea-salt-louder-by-w.mp3"
    },
    {
        "name": "Table Flip Scream",
        "color": "rgb(152, 0, 0)",
        "mp3": "/media/sounds/table-flip-scream.mp3"
    },
    {
        "name": "Пора вставать хозяин(аниме девочка)",
        "color": "rgb(179, 39, 104)",
        "mp3": "/media/sounds/pora-vstavat-khoziain-anime-devochka.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "Орёл",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oriol_wDERDe6.mp3"
    },
    {
        "name": "Alex \"eu vou gozar\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alex-eu-vou-gozar.mp3"
    },
    {
        "name": "Boneka Ambalabu",
        "color": "rgb(115, 142, 148)",
        "mp3": "/media/sounds/boneka-ambalabu.mp3"
    },
    {
        "name": "Hidup jokowi !!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hidup-jokowi.mp3"
    },
    {
        "name": "IPhone Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone-apple-pay.mp3"
    },
    {
        "name": "Spanish flea",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spanish-flea-herb-alpert22.mp3"
    },
    {
        "name": "Daddy’s home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home_6PNJ9IO.mp3"
    },
    {
        "name": "callate peruano culiao",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/callate-peruano-culiao.mp3"
    },
    {
        "name": "Drag Race Shade Sound",
        "color": "rgb(232, 0, 148)",
        "mp3": "/media/sounds/drag-race-shade-sound.mp3"
    },
    {
        "name": "ляляля я семен лобанов у меня башка из картошки",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lialialia-ia-semen-lobanov-u-menia-bashka-iz-kartoshki.mp3"
    },
    {
        "name": "Awkward - Cricket Silence",
        "color": "rgb(103, 0, 255)",
        "mp3": "/media/sounds/awkward-cricket-silence.mp3"
    },
    {
        "name": "THE YANKEES WIN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yankees-win.mp3"
    },
    {
        "name": "how are your balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/how-are-your-balls.mp3"
    },
    {
        "name": "Backfisch ZARBEX",
        "color": "rgb(82, 84, 255)",
        "mp3": "/media/sounds/backfisch-zarbex.mp3"
    },
    {
        "name": "Chicos hablen",
        "color": "rgb(141, 255, 215)",
        "mp3": "/media/sounds/chicos-hablen.mp3"
    },
    {
        "name": "Omni Man- What Will you Have after 500 Years?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-what-will-you-have-after-500-years.mp3"
    },
    {
        "name": "Conquest meme Invincible season 3",
        "color": "rgb(255, 254, 250)",
        "mp3": "/media/sounds/conquest-meme-invincible-season-3.mp3"
    },
    {
        "name": "Yikes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mei_-_yikes.mp3"
    },
    {
        "name": "Dreamybull fart",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dreamybull-fart.mp3"
    },
    {
        "name": "this is absurd i feel like p diddy with fur",
        "color": "rgb(255, 0, 238)",
        "mp3": "/media/sounds/this-is-absurd-i-feel-like-p-diddy-with-fur.mp3"
    },
    {
        "name": "Ah Lula,meu presidente....",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-lula-meu-presidente.mp3"
    },
    {
        "name": "Combine Soldier",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/combine_radio.mp3"
    },
    {
        "name": "Sweet Liberty my LEG",
        "color": "rgb(0, 98, 255)",
        "mp3": "/media/sounds/sweet-liberty-my-leg.mp3"
    },
    {
        "name": "Thank You (Cute Anime Voice)",
        "color": "rgb(255, 94, 248)",
        "mp3": "/media/sounds/thank-you-cute-anime-voice.mp3"
    },
    {
        "name": "Among Us Walking",
        "color": "rgb(52, 255, 181)",
        "mp3": "/media/sounds/the-among-us-walking-sound-effect.mp3"
    },
    {
        "name": "GEmid2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemid2.mp3"
    },
    {
        "name": "i like trains notification",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/i-like-trains-notification.mp3"
    },
    {
        "name": "THICK OF IT MINECRAFT VILLAGER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thick-of-it-minecraft-villager.mp3"
    },
    {
        "name": "Happy Easter grandpa!",
        "color": "rgb(47, 0, 255)",
        "mp3": "/media/sounds/happy-easter-grandpa_wjpXHIn.mp3"
    },
    {
        "name": "Ингалятор 1x1x1x1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ingaliator-1x1x1x1.mp3"
    },
    {
        "name": "Ananın",
        "color": "rgb(255, 35, 64)",
        "mp3": "/media/sounds/ananin.mp3"
    },
    {
        "name": "funny cartoon sounds running! very funny haha",
        "color": "rgb(125, 182, 72)",
        "mp3": "/media/sounds/funny-cartoon-sounds-running-very-funny-haha.mp3"
    },
    {
        "name": "this ninja is crazy",
        "color": "rgb(16, 0, 136)",
        "mp3": "/media/sounds/this-ninja-is-crazy.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "Fus Ro Dah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fus-ro-dah.mp3"
    },
    {
        "name": "Falcon Punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/falconpunch.swf.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "YEETT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Nani?! Only",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_mkANQUf.mp3"
    },
    {
        "name": "REEEEEEEEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/reeeeeeeee.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "f ya life bing bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f-ya-life-bing-bong.mp3"
    }
]