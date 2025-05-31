/*
taken from https://www.myinstants.com/en/trending/us/
last updated: 1748722066608

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
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
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
        "name": "**Gay**",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay_CRD979V.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
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
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
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
        "name": "flashbanggg",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/flashbanggg.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
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
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
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
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
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
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
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
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
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
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
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
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "M e o w ~",
        "color": "rgb(120, 85, 120)",
        "mp3": "/media/sounds/m-e-o-w.mp3"
    },
    {
        "name": "What the Helly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Syfm",
        "color": "rgb(145, 183, 255)",
        "mp3": "/media/sounds/syfm.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "DDG shazam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ddg-shazam.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Tralalero Tralala Meme",
        "color": "rgb(159, 178, 197)",
        "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
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
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "brainrot ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/brainrot-ringtone.mp3"
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
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Lego Yoda Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Ballerina cappuccina",
        "color": "rgb(166, 93, 36)",
        "mp3": "/media/sounds/ballerina-cappuccina.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
    },
    {
        "name": "I Love, I Love Her (R.E.P.O)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-i-love-her-r-e-p-o.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "Мы пидоры",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-pidory.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "The croods theme",
        "color": "rgb(255, 165, 62)",
        "mp3": "/media/sounds/the-croods-theme.mp3"
    },
    {
        "name": "noo la policia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noo-la-policia.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "hey guys whats going on discord troll",
        "color": "rgb(214, 177, 255)",
        "mp3": "/media/sounds/hey-guys-whats-going-on-discord-troll.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
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
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "Its a RAAAAAAAIIIIIIIID",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ozzy_raid_alert.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "We Can Be Bees",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/we-can-be-bees.mp3"
    },
    {
        "name": "niggerplane1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerplane1_20UWlMk.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pedro-song.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "GUBBY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gubby.mp3"
    },
    {
        "name": "Technoloyia Technologia Tecnologia",
        "color": "rgb(117, 255, 151)",
        "mp3": "/media/sounds/technoloyia-technologia-tecnologia.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "r6 c4 sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/r6-nitro-cell-sound-effect_GqSEIx5.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Corrupt Nature! (c00lkidd)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/corrupt-nature-c00lkidd.mp3"
    },
    {
        "name": "Michael Jackson Hee Hee",
        "color": "rgb(160, 0, 0)",
        "mp3": "/media/sounds/michael-jackson-hee-hee.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "allah akbar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allah-akbar_tTSl947.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "c00lkidd Phase 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-phase-3.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "Hawk Tuah (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hawk-tuah-short.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "SWAMP IZZO",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/swamp-izzo.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "Gayyyy",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/gayyy.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "blue shirt guy",
        "color": "rgb(45, 96, 255)",
        "mp3": "/media/sounds/blue-shirt-guy.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "Volkswagen das auto remix",
        "color": "rgb(218, 255, 234)",
        "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "#Tripi Tropi Tropatripa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tripi-tropi-tropatripa.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "Panther Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panther3.mp3"
    },
    {
        "name": "bombardino-crocodilo",
        "color": "rgb(27, 106, 13)",
        "mp3": "/media/sounds/bombardino-crocodilo_MSpHN9M.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "goofy-ah-laugh",
        "color": "rgb(168, 197, 255)",
        "mp3": "/media/sounds/goofy-ah-laugh.mp3"
    },
    {
        "name": "Throwing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-sound-effect-davemadson.mp3"
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
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
    },
    {
        "name": "TABLE!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/table.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
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
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "sigma boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sigma-boy.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "Plants Vs Zombies Victory Jingle",
        "color": "rgb(23, 125, 0)",
        "mp3": "/media/sounds/plants-vs-zombies-victory-jingle.mp3"
    },
    {
        "name": "Coolkid laugh",
        "color": "rgb(171, 0, 0)",
        "mp3": "/media/sounds/coolkid-laugh.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "Нет иди нахуй",
        "color": "rgb(120, 155, 25)",
        "mp3": "/media/sounds/net-idi-nakhui.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "Dime qué estás orgulloso shifu",
        "color": "rgb(89, 205, 255)",
        "mp3": "/media/sounds/dime-que-estas-orgulloso-shifu.mp3"
    },
    {
        "name": "niggerinternet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerinternet_70bI9rO.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "niggercanadian",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggercanadian_wP1pKhh.mp3"
    },
    {
        "name": "Goose HONK!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/honk-sound.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Man shut yo b*tch ass up!!!!!",
        "color": "rgb(255, 53, 208)",
        "mp3": "/media/sounds/man-stfu.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "scout.CHICKEN",
        "color": "rgb(241, 255, 113)",
        "mp3": "/media/sounds/video0-54.mp3"
    },
    {
        "name": "Bombardilo Crocodilo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardilo-crocodilo.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "Blocked by james",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blocked-by-james.mp3"
    },
    {
        "name": "AI MINHA XEREEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ai-minha-xereee.mp3"
    },
    {
        "name": "my name is c00lkidd",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-c00lkidd.mp3"
    },
    {
        "name": "Randy saying a not nice word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/randy-saying-a-not-nice-word.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
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
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "ObiWan Discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obiwan-discord.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "Croods run scene",
        "color": "rgb(113, 78, 9)",
        "mp3": "/media/sounds/croods-run-scene.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "Sponge Bob Disgusting",
        "color": "rgb(211, 199, 0)",
        "mp3": "/media/sounds/sponge-bob-disgusting.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "макан асфальт",
        "color": "rgb(83, 56, 34)",
        "mp3": "/media/sounds/makan-asfalt.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "(mafoiso) i see one of them",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafoiso-i-see-one-of-them.mp3"
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
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Who invited this kid?",
        "color": "rgb(0, 28, 255)",
        "mp3": "/media/sounds/video0-1-online-audio-converter_2i1mcmV.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "/media/sounds/67.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "c00lkidd [you were strong}",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-you-were-strong.mp3"
    },
    {
        "name": "фонк ребенок плачет",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fonk-rebenok-plachet.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "TF2 bonk",
        "color": "rgb(250, 0, 255)",
        "mp3": "/media/sounds/tf2-bonk.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "N Word Rap",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/n-word-rap.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "Arcade Craniacs sfx lol",
        "color": "rgb(101, 0, 0)",
        "mp3": "/media/sounds/arcade-craniacs-sfx-lol.mp3"
    },
    {
        "name": "iphone apple store sound",
        "color": "rgb(255, 10, 10)",
        "mp3": "/media/sounds/iphone-apple-store-sound.mp3"
    },
    {
        "name": "Bluudud 2",
        "color": "rgb(1, 0, 255)",
        "mp3": "/media/sounds/bluudud-2.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
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
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "BIG D RANDY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-d-randy_VnopRXZ.mp3"
    },
    {
        "name": "im spongebob",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/im-spongebob.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "Pornoghtraz gayyey mmeme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pornoghtraz-gayyey-mmeme.mp3"
    },
    {
        "name": "turbopaja",
        "color": "rgb(169, 255, 84)",
        "mp3": "/media/sounds/turbopaja.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "1000 Bits - G-MIDÃO DO ZAP",
        "color": "rgb(100, 10, 10)",
        "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
    },
    {
        "name": "NEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/michel_Vy6jL10.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "Ahh BullShet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh-bullshet.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "THINK FAST CHUCKLENUTS",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "(Anakin) LIAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Арбуз арбуз пёрни",
        "color": "rgb(7, 172, 0)",
        "mp3": "/media/sounds/arbuz-arbuz-piorni.mp3"
    },
    {
        "name": "(mafioso) just shut up and rage quit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
    },
    {
        "name": "BOMBOCLAT LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomboclat-loud_gYyr0v0.mp3"
    },
    {
        "name": "Fart Then Moan.mp3 By Mango",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-then-moan-mp3-by-mango.mp3"
    },
    {
        "name": "Mr. Worldwide Dale Meme Pitbull",
        "color": "rgb(79, 255, 196)",
        "mp3": "/media/sounds/mr-worldwide-dale-meme-pitbull.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "why you always lying",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/why-you-always-lying-original.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "I believe in Joe Hendry",
        "color": "rgb(190, 153, 255)",
        "mp3": "/media/sounds/i-believe-in-joe-hendry.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "In A MINUTE.",
        "color": "rgb(127, 88, 85)",
        "mp3": "/media/sounds/in-a-minute.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "its so nice to see you dad (c00lkidd) Forsaken",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/its-so-nice-to-see-you-dad-c00lkidd-forsaken.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diddy-done.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Spiderman 2099 theme",
        "color": "rgb(255, 9, 9)",
        "mp3": "/media/sounds/spiderman-2099-theme.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "El señor de la noche - Don Omar",
        "color": "rgb(58, 255, 58)",
        "mp3": "/media/sounds/el-senor-de-la-noche-don-omar.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Tu pene no pierde sabor a caramelo",
        "color": "rgb(255, 214, 192)",
        "mp3": "/media/sounds/tu-pene-no-pierde-sabor-a-caramelo.mp3"
    },
    {
        "name": "no fairrr!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/no-fairrr.mp3"
    },
    {
        "name": "c00lkidd crashout",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-crashout.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Valorant spike plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-spike-plant.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "(Anakin) I hate you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hate-you_CJxWsxV.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "I'm omniing it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-omniing-it.mp3"
    },
    {
        "name": "randy march",
        "color": "rgb(255, 104, 250)",
        "mp3": "/media/sounds/randy-march.mp3"
    },
    {
        "name": "tralarero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralarero-tralala.mp3"
    },
    {
        "name": "C00lkidd Giggle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-giggle.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "dad bring the milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dad-bring-the-milk.mp3"
    },
    {
        "name": "Chaloo",
        "color": "rgb(100, 234, 46)",
        "mp3": "/media/sounds/chaloo.mp3"
    },
    {
        "name": "you did kingggg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-did-kingggg.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
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
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "Star Wars Blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blaster.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "~discord kitten~",
        "color": "rgb(51, 145, 215)",
        "mp3": "/media/sounds/discord-kitten_GcQZVvU.mp3"
    },
    {
        "name": "Brother Ewwwwwww",
        "color": "rgb(255, 15, 123)",
        "mp3": "/media/sounds/brother-ewwwwwww.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "what the hell goofy ahh (slv_sounds)",
        "color": "rgb(248, 114, 255)",
        "mp3": "/media/sounds/what-the-hell-goofy-ahh-slv-sounds.mp3"
    },
    {
        "name": "A-10 warthog brrrt",
        "color": "rgb(128, 119, 158)",
        "mp3": "/media/sounds/a-10-warthog-brrrt.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НАХУЙ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-nakhui.mp3"
    },
    {
        "name": "Capuccino Assasino (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/capuccino-assasino-italian-brainrot.mp3"
    },
    {
        "name": "\"I love you~\" Yandere Anime Girl",
        "color": "rgb(176, 77, 145)",
        "mp3": "/media/sounds/yandere-anime-girl-i-love-you_YSLELrb.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/counter-strike-jingle-cs-radio-enemy-spotted.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
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
        "name": "Wait a minute who are you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
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
        "name": "Oui - Rizzler",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oui-rizzler.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
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
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "Sleep phonk",
        "color": "rgb(41, 0, 255)",
        "mp3": "/media/sounds/sleep-phonk_XPBfmfW.mp3"
    },
    {
        "name": "My name is C00lkid yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-c00lkid-yeah.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
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
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "RONALDO SIUUUU",
        "color": "rgb(46, 138, 255)",
        "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Family Feud Introduction",
        "color": "rgb(49, 46, 167)",
        "mp3": "/media/sounds/family-feud-introduction.mp3"
    },
    {
        "name": "Chimpanzini bananini",
        "color": "rgb(131, 36, 255)",
        "mp3": "/media/sounds/chimpanzini-bananini_UIisnEp.mp3"
    },
    {
        "name": "nigge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nigge_2qZTnMT.mp3"
    },
    {
        "name": "Suckin on my tiddies",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suckin-on-my-tiddies.mp3"
    },
    {
        "name": "MY LEEGG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-leg_2_Zlh3ZlW.mp3"
    },
    {
        "name": "Leeroy Jenkins",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/leroy.swf.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/ka-ching.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "samsung notification",
        "color": "rgb(80, 194, 255)",
        "mp3": "/media/sounds/samsung-notification-sound-bass-boosted.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "THX",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/thx.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "shocking!",
        "color": "rgb(146, 239, 255)",
        "mp3": "/media/sounds/shocking_0NL2w3I.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "Oblivion NPC Theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oblivion-npc-theme.mp3"
    },
    {
        "name": "Pokeball Pokemon Out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-pokemon-anime-7-pokemon-out.mp3"
    },
    {
        "name": "Wrong (Price is Right)",
        "color": "rgb(140, 252, 255)",
        "mp3": "/media/sounds/wrong-price-is-right.mp3"
    },
    {
        "name": "Meek Mill and Diddy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meek-mill-and-diddy.mp3"
    },
    {
        "name": "Spongebob Bleep",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/spongebob-bleep.mp3"
    },
    {
        "name": "Ai chavinho - completo",
        "color": "rgb(81, 255, 0)",
        "mp3": "/media/sounds/ai-chavinho-completo.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
    },
    {
        "name": "moanlol",
        "color": "rgb(1, 255, 219)",
        "mp3": "/media/sounds/moanlol.mp3"
    },
    {
        "name": "lowww taper fadeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lowww-taper-fadeee.mp3"
    },
    {
        "name": "Я ебу бабульку сочную бабульку",
        "color": "rgb(74, 14, 255)",
        "mp3": "/media/sounds/ia-ebu-babulku-sochnuiu-babulku.mp3"
    },
    {
        "name": "Pretty little baby",
        "color": "rgb(162, 255, 187)",
        "mp3": "/media/sounds/pretty-little-baby.mp3"
    },
    {
        "name": "Звук литвина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-litvina.mp3"
    },
    {
        "name": "WS Override2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ws-override2.mp3"
    },
    {
        "name": "Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-t.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "Cartoon Chase",
        "color": "rgb(24, 255, 32)",
        "mp3": "/media/sounds/chase_QnUxJTk.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Indian Kid Funny asf",
        "color": "rgb(88, 255, 47)",
        "mp3": "/media/sounds/record-online-voice-recorder_37uPSci.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "AKH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akh.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "AUUGHHH!",
        "color": "rgb(125, 0, 255)",
        "mp3": "/media/sounds/auughhh_DPgW9J1.mp3"
    },
    {
        "name": "wtffff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-sound.mp3"
    },
    {
        "name": "ay ay ay im ur little butterfly",
        "color": "rgb(255, 57, 156)",
        "mp3": "/media/sounds/9convert_9f6OCue.mp3"
    },
    {
        "name": "Pharaoh's Curse",
        "color": "rgb(255, 188, 25)",
        "mp3": "/media/sounds/pharaohs-curse.mp3"
    },
    {
        "name": "B2Q - MLG Sniper",
        "color": "rgb(87, 255, 143)",
        "mp3": "/media/sounds/mlg-sniper.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "I don't want peace. I want problems, always.",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/i-dont-want-peace.mp3"
    },
    {
        "name": "Audience Clapping (Theater)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/theater-applause-128kbps.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "Kendrick Lamar Ahhhhh Scream",
        "color": "rgb(242, 255, 130)",
        "mp3": "/media/sounds/kendrick-lamar-ahhhhh-scream.mp3"
    },
    {
        "name": "bass boost discord call when headphones are on",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bass-boost-discord-call-when-headphones-are-on.mp3"
    },
    {
        "name": "Cocomelon Intro",
        "color": "rgb(49, 255, 30)",
        "mp3": "/media/sounds/cocomelon-intro.mp3"
    },
    {
        "name": "Sukuna laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sukuna-laugh.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "Nervous Gulp",
        "color": "rgb(255, 208, 161)",
        "mp3": "/media/sounds/nervous-gulp.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "He's Loose",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/he_s-loose-sound.mp3"
    },
    {
        "name": "referee whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/referee-whistle.mp3"
    },
    {
        "name": "GLASS BREAK STEVE AUSTIN",
        "color": "rgb(151, 255, 48)",
        "mp3": "/media/sounds/glass-break-steve-austin.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-girl.mp3"
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
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "ksi lol",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/ksi-lol.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Funny snoring",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/funny-snoring.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "sega",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/untitled_4.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "fk this shit im out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fk-this-shit-im-out.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "se me sale la caca",
        "color": "rgb(113, 88, 31)",
        "mp3": "/media/sounds/se-me-sale-la-caca.mp3"
    },
    {
        "name": "chicken jockey (BASS BOOSTED)",
        "color": "rgb(9, 181, 12)",
        "mp3": "/media/sounds/chicken-jockey-bass-boosted.mp3"
    },
    {
        "name": "KABOOM THERE GOES YOUR TOWER",
        "color": "rgb(244, 255, 43)",
        "mp3": "/media/sounds/kaboom-there-goes-your-tower.mp3"
    },
    {
        "name": "c00lkidd [Come out]",
        "color": "rgb(179, 64, 64)",
        "mp3": "/media/sounds/c00lkidd-come-out.mp3"
    },
    {
        "name": "ляляля я семен лобанов у меня башка из картошки",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lialialia-ia-semen-lobanov-u-menia-bashka-iz-kartoshki.mp3"
    },
    {
        "name": "niggermirror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggermirror_BTG4R8G.mp3"
    },
    {
        "name": "Shabash beta",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shabash-beta.mp3"
    },
    {
        "name": "Flappy Bird's point",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sfx_point.mp3"
    },
    {
        "name": "oh yeahhhh vector",
        "color": "rgb(255, 105, 0)",
        "mp3": "/media/sounds/oh-yeahhhh-vector.mp3"
    },
    {
        "name": "trollface music",
        "color": "rgb(242, 242, 242)",
        "mp3": "/media/sounds/trollface-music_56lLz95.mp3"
    },
    {
        "name": "HEY NIGGA!",
        "color": "rgb(139, 107, 44)",
        "mp3": "/media/sounds/hey-nigga_WcQkrxz.mp3"
    },
    {
        "name": "Be Shi (Boondocks)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/be-shi-boondocks.mp3"
    },
    {
        "name": "lebron oh lord",
        "color": "rgb(242, 255, 0)",
        "mp3": "/media/sounds/lebron-oh-lord.mp3"
    },
    {
        "name": "Owen Wilson Wow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/6_1Njp68r.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "Rap Battle OOOHHHH!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Who's That Pokemon!?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whos-that-pokemon_.mp3"
    },
    {
        "name": "Perry the Platypus",
        "color": "rgb(255, 162, 67)",
        "mp3": "/media/sounds/perry-the-platypuss-growl.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "Quagmire Giggity",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giggity.mp3"
    },
    {
        "name": "I'm Going to Kill You, And then Kill you again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Door Knocking SFX",
        "color": "rgb(255, 222, 55)",
        "mp3": "/media/sounds/door-knocking.mp3"
    },
    {
        "name": "Pirates Of The Carribean!!!",
        "color": "rgb(220, 222, 0)",
        "mp3": "/media/sounds/pirates-mp3cut_xxOvJfH.mp3"
    },
    {
        "name": "elevator waiting",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/elevator_2jN6tnc.mp3"
    },
    {
        "name": "Po Pi Po",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/po-pi-po-2.mp3"
    },
    {
        "name": "Roblox Yummy",
        "color": "rgb(5, 182, 146)",
        "mp3": "/media/sounds/roblox-yummy.mp3"
    },
    {
        "name": "xQc clapping",
        "color": "rgb(34, 255, 93)",
        "mp3": "/media/sounds/clapping-fast.mp3"
    },
    {
        "name": "Macarena",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/los-del-rio-macarena.mp3"
    },
    {
        "name": "godzilla 1954 roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_1954_roar.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "Invincible pretty sure",
        "color": "rgb(13, 53, 255)",
        "mp3": "/media/sounds/invincible-pretty-sure.mp3"
    },
    {
        "name": "N word complete",
        "color": "rgb(90, 64, 17)",
        "mp3": "/media/sounds/n-word-complete.mp3"
    },
    {
        "name": "I made a steak",
        "color": "rgb(222, 0, 0)",
        "mp3": "/media/sounds/i-made-a-steak.mp3"
    },
    {
        "name": "IN A MINUTE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/in-a-minute_NZEKOT9.mp3"
    },
    {
        "name": "ANTE TODO MUY BUENAS NOCHES",
        "color": "rgb(240, 209, 122)",
        "mp3": "/media/sounds/ante-todo-muy-buenas-noches.mp3"
    },
    {
        "name": "Antonio Lobato",
        "color": "rgb(255, 200, 123)",
        "mp3": "/media/sounds/antonio-lobato.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Discord Jebaiting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikejebait.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
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
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "Universal Funny Theme",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/d-mp3cut.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Shotgun Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
    },
    {
        "name": "Star Wars Cantina",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cantina-band.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump.mp3"
    },
    {
        "name": "Movie Fart!",
        "color": "rgb(15, 59, 3)",
        "mp3": "/media/sounds/fart-sound-effect_C1IXpeL.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "meow meow meow tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meow-meow-meow-tiktok.mp3"
    },
    {
        "name": "Cat Call whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-call.mp3"
    },
    {
        "name": "Minecraft Totem Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-totem-sound.mp3"
    },
    {
        "name": "Did you just talk back to me? - Yes King",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/did-you-just-talk-back-to-me-yes-king.mp3"
    },
    {
        "name": "Dwayne Rock Johnson Eyebrow raise meme",
        "color": "rgb(5, 247, 255)",
        "mp3": "/media/sounds/dwayne-rock-johnson-eyebrow-raise-meme.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "Birdmaster86",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/birdmaster86.mp3"
    },
    {
        "name": "гипно дэнс | hypnodancer meme",
        "color": "rgb(144, 30, 161)",
        "mp3": "/media/sounds/gipno-dens-hypnodancer-meme.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "The Censor Beep duck bird",
        "color": "rgb(63, 40, 136)",
        "mp3": "/media/sounds/the-censor-beep-duck-bird.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "Alarma de Auron play",
        "color": "rgb(46, 255, 133)",
        "mp3": "/media/sounds/alarma-de-auron-play.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "CALVOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "color": "rgb(255, 194, 225)",
        "mp3": "/media/sounds/calvoooooooooooooooooooooooooooo.mp3"
    },
    {
        "name": "Орёл",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oriol_wDERDe6.mp3"
    },
    {
        "name": "you're no fun! :(",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-no-fun.mp3"
    },
    {
        "name": "Trick shot bluudude",
        "color": "rgb(0, 94, 255)",
        "mp3": "/media/sounds/trick-shot-bluudude.mp3"
    },
    {
        "name": "Soul Calibur V Upbeat Girl Moans",
        "color": "rgb(255, 192, 253)",
        "mp3": "/media/sounds/soul-calibur-v-upbeat-girl-moans.mp3"
    },
    {
        "name": "YES!!! KILL!!!",
        "color": "rgb(221, 21, 21)",
        "mp3": "/media/sounds/yes-kill.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "why you bully me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-you-bully-me-every-line.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "Bedtime",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/bedtime.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "daisy bell creepy version",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daisy-bell-creepy-version.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "quandale dingle bingleton",
        "color": "rgb(247, 255, 42)",
        "mp3": "/media/sounds/quandale-dingle-bingleton.mp3"
    },
    {
        "name": "wake up meme",
        "color": "rgb(9, 9, 9)",
        "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "E o pix? Nada ainda?",
        "color": "rgb(243, 255, 79)",
        "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
    },
    {
        "name": "alarma saturada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alarma-saturada.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "Geometry Dash Death",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/geometry-dash-death-sound-effect.mp3"
    },
    {
        "name": "nya arigato short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nya-ichi-ni-san-lower-quality.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "Box, Box F1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/box-box-f1.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "wiwiwi kitten",
        "color": "rgb(114, 102, 123)",
        "mp3": "/media/sounds/wiwiwi-kitten.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "THINK MARK!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/think-mark_u48iMaR.mp3"
    },
    {
        "name": "I got a brand new saxophone",
        "color": "rgb(255, 245, 103)",
        "mp3": "/media/sounds/i-got-a-brand-new-saxophone.mp3"
    },
    {
        "name": "Tralalelo Tralala Phonk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalelo-tralala-phonk.mp3"
    },
    {
        "name": "eunoia death scream",
        "color": "rgb(179, 218, 255)",
        "mp3": "/media/sounds/eunoia-death-scream.mp3"
    },
    {
        "name": "OUCH! c00l",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ouch-c00l.mp3"
    },
    {
        "name": "A STEAK?!?",
        "color": "rgb(20, 169, 255)",
        "mp3": "/media/sounds/a-steak_3PYtKf5.mp3"
    },
    {
        "name": "tehelka omlette",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tehelka-omlette.mp3"
    },
    {
        "name": "Chavales que es viernes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chavales-que-es-viernes.mp3"
    },
    {
        "name": "HIS NAME IS JOHN CENA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_3.mp3"
    },
    {
        "name": "Chupa-me a Piça - CSGAPPY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chupa-me-a-pica-csgappy.mp3"
    },
    {
        "name": "horknee 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horknee-1.mp3"
    },
    {
        "name": "Avengers dramatic music",
        "color": "rgb(255, 133, 0)",
        "mp3": "/media/sounds/theme-song-2.mp3"
    },
    {
        "name": "10 điểm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/10-diem.mp3"
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
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "STICKING OUT UR GYAT FOR THE RIZZLER",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/sticking-out-ur-gyat-for-the-rizzler.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "Kool Aid - Oh yeah!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kool-aid-oh-yeah.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "what the hell is even that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whatthehell_qrePvEr.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "What are those!?!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-are-those-sound-effect.mp3"
    },
    {
        "name": "Cupcakke Gulp Gulp Gulp",
        "color": "rgb(170, 42, 255)",
        "mp3": "/media/sounds/cupcakke-gulp-gulp-gulp.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "Door Slamming",
        "color": "rgb(0, 255, 102)",
        "mp3": "/media/sounds/door-slamming-sound-effect-no-repeats-or-silence-2016.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "roblox laugh",
        "color": "rgb(255, 208, 20)",
        "mp3": "/media/sounds/roblox-laugh.mp3"
    },
    {
        "name": "Baldi - All 7 Notebooks",
        "color": "rgb(0, 198, 7)",
        "mp3": "/media/sounds/baldi-all-7-notebooks.mp3"
    },
    {
        "name": "BFDI gasp",
        "color": "rgb(15, 255, 115)",
        "mp3": "/media/sounds/bfdi-gasp.mp3"
    },
    {
        "name": "Virus Indian Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/virus-indian-song.mp3"
    },
    {
        "name": "Big Back-Tiktok",
        "color": "rgb(29, 76, 255)",
        "mp3": "/media/sounds/big-back-tiktok.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "Undertale phone ring",
        "color": "rgb(143, 137, 129)",
        "mp3": "/media/sounds/phone_ring.mp3"
    },
    {
        "name": "Улетаю на гаитии но это минус уши",
        "color": "rgb(76, 0, 0)",
        "mp3": "/media/sounds/uletaiu-na-gaitii-no-eto-minus-ushi.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "Android Ta Da",
        "color": "rgb(13, 198, 15)",
        "mp3": "/media/sounds/android-ta-da.mp3"
    },
    {
        "name": "Table Flip Scream",
        "color": "rgb(152, 0, 0)",
        "mp3": "/media/sounds/table-flip-scream.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "\"I Want the Black Guy to Shut Up\"",
        "color": "rgb(227, 30, 23)",
        "mp3": "/media/sounds/i-want-the-black-guy-to-shut-up.mp3"
    },
    {
        "name": "Guest 1337 forsaken",
        "color": "rgb(184, 51, 255)",
        "mp3": "/media/sounds/guest-1337-forsaken.mp3"
    },
    {
        "name": "Off the king the power the farry mars",
        "color": "rgb(255, 143, 58)",
        "mp3": "/media/sounds/off-the-king-the-power-the-farry-mars.mp3"
    },
    {
        "name": "WWE Y2J You just made the list",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-just-made-the-list.mp3"
    },
    {
        "name": "niggerlife",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerlife_Zqnb0e7.mp3"
    },
    {
        "name": "Lets Get It Started - Black eyed peas",
        "color": "rgb(8, 255, 58)",
        "mp3": "/media/sounds/let-get-it-stardet.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
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
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "holy moly emoji",
        "color": "rgb(255, 238, 128)",
        "mp3": "/media/sounds/holy-moly-emoji.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "/media/sounds/gyatt.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "yessir tik tok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yessir-sound-effect.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "Mario Hey Stinky",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-stinky_arPrGiw.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Clash Royale Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-start-up-sound.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Rosa De Guadalupe Suspense",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled-4319-10.mp3"
    },
    {
        "name": "Gah Damn!",
        "color": "rgb(50, 255, 143)",
        "mp3": "/media/sounds/gah-damn_ytLqP1s.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "Happy Wheels Victory",
        "color": "rgb(235, 255, 52)",
        "mp3": "/media/sounds/victory_sJDDywi.mp3"
    },
    {
        "name": "iPhone Sent Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sentmessage_1.mp3"
    },
    {
        "name": "COD zombies nuke",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/destroyed.mp3"
    },
    {
        "name": "Death Bong",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/death-bong.mp3"
    },
    {
        "name": "GTA V Wasted (Death Sound)",
        "color": "rgb(219, 0, 0)",
        "mp3": "/media/sounds/gta-v-wasted-death-sound.mp3"
    },
    {
        "name": "ROASTED YAOW YAOW",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roasted_2.mp3"
    },
    {
        "name": "Blood Splatter",
        "color": "rgb(53, 70, 255)",
        "mp3": "/media/sounds/blood-splatter.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "oh my pc meme",
        "color": "rgb(114, 53, 255)",
        "mp3": "/media/sounds/oh-my-pc-meme.mp3"
    },
    {
        "name": "Crying Black Dude MEME",
        "color": "rgb(62, 255, 201)",
        "mp3": "/media/sounds/crying-black-dude-meme.mp3"
    },
    {
        "name": "slurpppppppp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slurp-sound-effect_hNzcXo0.mp3"
    },
    {
        "name": "Random fart button",
        "color": "rgb(221, 255, 232)",
        "mp3": "/media/sounds/fart9.mp3"
    },
    {
        "name": "Hitting that Spot",
        "color": "rgb(49, 34, 255)",
        "mp3": "/media/sounds/hitting-that-spot.mp3"
    },
    {
        "name": "Rick roll bass boosted",
        "color": "rgb(68, 140, 255)",
        "mp3": "/media/sounds/rick-roll-bass-boosted_ZPqkNIT.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "Гимн твича mzlf",
        "color": "rgb(22, 95, 255)",
        "mp3": "/media/sounds/gimn-tvicha-mzlf.mp3"
    },
    {
        "name": "ROBLOX Button SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-button-sfx.mp3"
    },
    {
        "name": "John pork is calling moooort",
        "color": "rgb(255, 93, 214)",
        "mp3": "/media/sounds/john-pork-is-calling-moooort.mp3"
    },
    {
        "name": "Look Easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/look-easy_JX3Yu5M.mp3"
    },
    {
        "name": "Villager Complete Trade",
        "color": "rgb(110, 66, 36)",
        "mp3": "/media/sounds/villager-complete-trade.mp3"
    },
    {
        "name": "Negro you gay boondocks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/negro-you-gay-boondocks.mp3"
    },
    {
        "name": "Gangnam Style Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gangnam-style-meme.mp3"
    },
    {
        "name": "Popular Riser",
        "color": "rgb(0, 213, 255)",
        "mp3": "/media/sounds/popular-riser.mp3"
    },
    {
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "GRITO GAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grito-gay.mp3"
    },
    {
        "name": "Gulp with Bubble",
        "color": "rgb(209, 250, 255)",
        "mp3": "/media/sounds/gulp-with-bubble.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "нолик бомбит",
        "color": "rgb(0, 162, 255)",
        "mp3": "/media/sounds/nolik-bombit.mp3"
    },
    {
        "name": "Flawless Victory (MK X)",
        "color": "rgb(255, 62, 105)",
        "mp3": "/media/sounds/flawless-victory-mk-x.mp3"
    },
    {
        "name": "DAMN pukeko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/damn-pukeko.mp3"
    },
    {
        "name": "kanye-east-fortnite-balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-east-fortnite-balls_NguabuF.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "IM SORRY POOKIE BEAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-sorry-pookie-bear.mp3"
    },
    {
        "name": "Trullimero Trullicina",
        "color": "rgb(34, 244, 255)",
        "mp3": "/media/sounds/trullimero-trullicina.mp3"
    },
    {
        "name": "Ballarina Cappucina",
        "color": "rgb(255, 52, 184)",
        "mp3": "/media/sounds/ballarina-cappucina.mp3"
    },
    {
        "name": "Bobombini Goosini (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bobombini-goosini-italian-brainrot.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "(Vader)I am your father",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-your-father_rCXrfcX.mp3"
    },
    {
        "name": "Tung Tung Tung Sahur :)))",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_3ZlEMck.mp3"
    },
    {
        "name": "Ya no aguanto más",
        "color": "rgb(168, 217, 255)",
        "mp3": "/media/sounds/ya-no-aguanto-mas.mp3"
    },
    {
        "name": "Godzilla Minus One Roar",
        "color": "rgb(27, 11, 11)",
        "mp3": "/media/sounds/godzilla-minus-one-roar.mp3"
    },
    {
        "name": "undertaker theme",
        "color": "rgb(25, 0, 131)",
        "mp3": "/media/sounds/undertaker-theme.mp3"
    },
    {
        "name": "Decent Bubbles",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/decent-bubbles.mp3"
    },
    {
        "name": "McDonalds Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-whistle.mp3"
    },
    {
        "name": "Чё за хуйня блять",
        "color": "rgb(17, 235, 255)",
        "mp3": "/media/sounds/chio-za-khuinia-bliat.mp3"
    },
    {
        "name": "Fanum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fanum.mp3"
    },
    {
        "name": "DA BABY LET'S GOOOOOOO",
        "color": "rgb(0, 8, 255)",
        "mp3": "/media/sounds/vibez-lets-go.mp3"
    },
    {
        "name": "Roblox Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_ytkBL7X.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "Original Sheesh",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/original-sheesh.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-bottom.mp3"
    },
    {
        "name": "im bout to end this man caree",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/recording-22.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Oh hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-vine.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "Suspense strike",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "Women haha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/women-haha.mp3"
    },
    {
        "name": "Good morning vietnam!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/goodmorn1.mp3"
    },
    {
        "name": "Boi what the hell boi",
        "color": "rgb(8, 142, 255)",
        "mp3": "/media/sounds/boi-what-da-hell-boi.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Pokemon Item Found",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-red_blue_yellow-item-found-sound-effect.mp3"
    },
    {
        "name": "FNAF Honk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/partyfavorraspypart_ac01_3.mp3"
    },
    {
        "name": "ALL Goofy Sounds",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/all-goofy-sounds.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "Undertale - Soul Shatter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-soul-shatter.mp3"
    },
    {
        "name": "scary movie wazzup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-movie-wazzup.mp3"
    },
    {
        "name": "Goofy Ahh Ringtone",
        "color": "rgb(50, 192, 255)",
        "mp3": "/media/sounds/goofy-ahh-ringtone.mp3"
    },
    {
        "name": "Lightning",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
    },
    {
        "name": "SML Danger Sound",
        "color": "rgb(241, 255, 88)",
        "mp3": "/media/sounds/sml-intense-sound-effect.mp3"
    },
    {
        "name": "Fnaf meme Har Har",
        "color": "rgb(90, 62, 39)",
        "mp3": "/media/sounds/fnaf-meme-har-har.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "Eagle sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-sound.mp3"
    },
    {
        "name": "С Х**ЛИ ТИША ТАКАЯ!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/s-kh-li-tisha-takaia.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "the rock meme sound effect",
        "color": "rgb(85, 61, 43)",
        "mp3": "/media/sounds/the-rock-meme-sound-effect.mp3"
    },
    {
        "name": "the rock meme sound effect",
        "color": "rgb(85, 61, 43)",
        "mp3": "/media/sounds/the-rock-meme-sound-effect.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "DJ Stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-stop.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "anvil drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anvil-drop.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "Invincible Empire Slave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invincible-empire-slave.mp3"
    },
    {
        "name": "Tony Tony Chopper Singing",
        "color": "rgb(207, 37, 65)",
        "mp3": "/media/sounds/tony-tony-chopper-singing.mp3"
    },
    {
        "name": "Wetin be this sound comedy by kenny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wetin-be-this-sound-comedy-by-kenny.mp3"
    },
    {
        "name": "(mafioso) you won't live to see the next day",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-you-wont-live-to-see-the-next-day.mp3"
    },
    {
        "name": "Richard Ahh Screaming",
        "color": "rgb(255, 184, 235)",
        "mp3": "/media/sounds/richard-ahh-screaming.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "abhi maza ayagga",
        "color": "rgb(255, 155, 70)",
        "mp3": "/media/sounds/abhi-maza-ayagga.mp3"
    },
    {
        "name": "(c00lkid) lets do that again somthime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkid-lets-do-that-again-somthime.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kasongo.mp3"
    },
    {
        "name": "Kamehameha Charge",
        "color": "rgb(0, 255, 249)",
        "mp3": "/media/sounds/kame_charge.mp3"
    },
    {
        "name": "German Song 3rika",
        "color": "rgb(48, 255, 62)",
        "mp3": "/media/sounds/german-song-3rika.mp3"
    },
    {
        "name": "c00lkidd Phase 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-phase-2.mp3"
    },
    {
        "name": "Тун тун тун пиздун",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tun-tun-tun-pizdun.mp3"
    },
    {
        "name": "Backfisch ZARBEX",
        "color": "rgb(82, 84, 255)",
        "mp3": "/media/sounds/backfisch-zarbex.mp3"
    },
    {
        "name": "[Shylily] Womp Womp",
        "color": "rgb(78, 66, 255)",
        "mp3": "/media/sounds/shylily-womp-womp.mp3"
    },
    {
        "name": "Tung Tung Sahur Song",
        "color": "rgb(192, 145, 68)",
        "mp3": "/media/sounds/tung-tung-sahur-song.mp3"
    },
    {
        "name": "Bad to the Bone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ibuttons-bad-to-the-bone.mp3"
    },
    {
        "name": "Giggity Giggity Goo (Speed ver.)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giggity-giggity-goo-speed-ver.mp3"
    },
    {
        "name": "Za Warudo Anime",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo.mp3"
    },
    {
        "name": "among us start",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/status_w5zDGaI.mp3"
    },
    {
        "name": "4_ตลกตบมุก_4",
        "color": "rgb(15, 255, 165)",
        "mp3": "/media/sounds/4-tlktbmuk-4.mp3"
    },
    {
        "name": "saeed - sasuke",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp5hxzwtrb.mp3"
    },
    {
        "name": "you tremble at this sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-tremble-at-this-sound.mp3"
    },
    {
        "name": "Heiligsblechle Follow (German)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heiligsblechle-follow-german.mp3"
    },
    {
        "name": "Hjælp! (Guts and blackpowder)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hjaelp-guts-and-blackpowder.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING STEP BRO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "Laugh Track",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/comic003.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "Japanese YOOOO",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "Roblox Death Sound (Slow)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slowed-down-roblox-death-noise.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "M1 Garand Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ping_4TjeI1U.mp3"
    },
    {
        "name": "in the arms of an angel",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/in-the-arms-of-an-angel-sarah-mcla.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Da Baby Lets Goooo",
        "color": "rgb(25, 255, 0)",
        "mp3": "/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "Western",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/o-bom-o-mal-e-o-feio-velho-oeste-desafio-dont-talk-duelo-desafio-armas.mp3"
    },
    {
        "name": "Shield Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-shield-potion-fortnite-battle-royale-gaming-sound-effect-hd-sound-effects.mp3"
    },
    {
        "name": "WHAT THE HELLLLLLLLLLLL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hellllllllllll.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "boy what the hell boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boy-what-the-hell-boy-meme.mp3"
    },
    {
        "name": "Trump on black supporter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-on-black-supporter_-_look-at-my-african-american_-1.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Crowd cheering and clapping",
        "color": "rgb(234, 255, 95)",
        "mp3": "/media/sounds/99634_tomlija_small-crowd-cheering-and-clapping.mp3"
    },
    {
        "name": "Yes, Mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-mommy.mp3"
    },
    {
        "name": "YIPEEEE",
        "color": "rgb(249, 255, 163)",
        "mp3": "/media/sounds/yipeeee.mp3"
    },
    {
        "name": "clown horn short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-short.mp3"
    },
    {
        "name": "Flint and steel Meme",
        "color": "rgb(165, 255, 239)",
        "mp3": "/media/sounds/flint-and-steel-meme_pMPGXOO.mp3"
    },
    {
        "name": "A NEW HAND TOUCHES THE BEACON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ur-dur.mp3"
    },
    {
        "name": "Dang It Bobby",
        "color": "rgb(230, 255, 75)",
        "mp3": "/media/sounds/dang-it-bobby.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "Screech Car Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/237375__squareal__car-crash.mp3"
    },
    {
        "name": "I'm tired of this grandpa... That's too damn bad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-tired-of-this-grandpa-thats-too-damn-bad.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "Dracula Flow - They forgot I'm him",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dracula-flow-they-forgot-im-him.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "fire alarm chirp",
        "color": "rgb(164, 147, 255)",
        "mp3": "/media/sounds/fire-alarm-chirp.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Crying \"No\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cryingno.mp3"
    },
    {
        "name": "Twist - Korn",
        "color": "rgb(73, 113, 53)",
        "mp3": "/media/sounds/korn-twist-audiotrimmer.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "everybody was kungfu fighting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/everybody-was-kungfu-fighting.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "Truck Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/truck-horn.mp3"
    },
    {
        "name": "Ichigo Bankai Screaming REEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai-screaming-reeeeeeeeeeeee.mp3"
    },
    {
        "name": "Aizen Yokoso Full",
        "color": "rgb(77, 243, 255)",
        "mp3": "/media/sounds/aizen-yokoso-full.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "Goofy Ahh Beat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-beat.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "Gawk gawk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gawk-gawk.mp3"
    },
    {
        "name": "mouse click by ek6",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click-by-ek6_VR0O6PL.mp3"
    },
    {
        "name": "moan100",
        "color": "rgb(28, 213, 255)",
        "mp3": "/media/sounds/moan100.mp3"
    },
    {
        "name": "Tecnologia Meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tecnologia-meme.mp3"
    },
    {
        "name": "HUAWEI Звонок",
        "color": "rgb(239, 239, 239)",
        "mp3": "/media/sounds/huawei-zvonok_ZNCkv1G.mp3"
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
        "name": "kqdee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kqdee.mp3"
    },
    {
        "name": "Wiwiwi original",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wiwiwi-original.mp3"
    },
    {
        "name": "(Mafioso) I feel no pain",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-feel-no-pain.mp3"
    },
    {
        "name": "ROM ROM BHAIYO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rom-rom-bhaiyo.mp3"
    },
    {
        "name": "Rhymes With Grug",
        "color": "rgb(5, 255, 0)",
        "mp3": "/media/sounds/rhymes-with-grug.mp3"
    },
    {
        "name": "SHE WAS A FAIRY with a phatty",
        "color": "rgb(255, 147, 251)",
        "mp3": "/media/sounds/she-was-a-fairy-with-a-phatty.mp3"
    },
    {
        "name": "Visionario ese cojudo_alan garcia",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/visionario-ese-cojudo-alan-garcia.mp3"
    },
    {
        "name": "lirili larila phonk",
        "color": "rgb(174, 237, 255)",
        "mp3": "/media/sounds/lirili-larila-phonk.mp3"
    },
    {
        "name": "Owen Wilson Wow 8",
        "color": "rgb(112, 255, 86)",
        "mp3": "/media/sounds/owen-wilson-wow-8.mp3"
    },
    {
        "name": "KupoKupo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kupo_kupo.mp3"
    },
    {
        "name": "Vampire Sax",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vampiresax.mp3"
    },
    {
        "name": "Undertale - Papyrus Sugar Rush",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf_18.mp3"
    },
    {
        "name": "Tuturu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuturu_1.mp3"
    },
    {
        "name": "Victory Screech - Spongebob",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/victoryscreech.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ara-ara.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Ric Flair Wooo",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/woo.mp3"
    },
    {
        "name": "Prowler Siren",
        "color": "rgb(124, 0, 204)",
        "mp3": "/media/sounds/prowler_sound.mp3"
    },
    {
        "name": "the more you know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-more-you-know.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "You Know the Rules, Say Goodbye",
        "color": "rgb(193, 0, 0)",
        "mp3": "/media/sounds/you-know-the-rules-and-so-do-i-say-goodbye.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Street Fighter K.O",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlg-resource-street-fighter-ko-greenscreen.mp3"
    },
    {
        "name": "Dark souls death",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/dark-souls-you-died-sound-effect_hm5sYFG.mp3"
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
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Ed Edd n Eddy Subaluwa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ed-edd-n-eddy-subaluwa-full-best-version_z4mgiJw.mp3"
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
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "attack ON titan",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/shingeki-no-kyojin-ost-attack-on-titan2.mp3"
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
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
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
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "Real punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/punch-notification_sound-493565.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
    },
    {
        "name": "Laugh it up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-it-up-fortnite-battle-royale-emote-audiotrimmer.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "YOU MUST DIE",
        "color": "rgb(204, 51, 51)",
        "mp3": "/media/sounds/you-must-die.mp3"
    },
    {
        "name": "TASER",
        "color": "rgb(57, 153, 255)",
        "mp3": "/media/sounds/lcso-taser-sound-effect.mp3"
    },
    {
        "name": "john cena chinese meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/john-cena-chinese-meme.mp3"
    },
    {
        "name": "dramatic cue A",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/dramatic-cue-a.mp3"
    },
    {
        "name": "No - Wrong Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neg-wrongbuzzer.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "YEAH THAT MAKES SENSE SF3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/3rd-strike-yeah-that-makes-sense_PxRaRQT.mp3"
    },
    {
        "name": "Acknowledge ME!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/acknowledge-me_lTzf3jF.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "Yamate kudasai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yamate-kudasai.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "Nokia Kick Ringtone",
        "color": "rgb(148, 193, 60)",
        "mp3": "/media/sounds/nokia-kick-ringtone.mp3"
    },
    {
        "name": "Dragon Ball Z Body falling down sound",
        "color": "rgb(0, 5, 255)",
        "mp3": "/media/sounds/dragon-ball-z-body-falling-down-sound.mp3"
    },
    {
        "name": "Пожарная тревога",
        "color": "rgb(184, 0, 0)",
        "mp3": "/media/sounds/pozharnaia-trevoga.mp3"
    },
    {
        "name": "woah (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woah-roblox.mp3"
    },
    {
        "name": "its time to play the game",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-time-to-play-the-game.mp3"
    },
    {
        "name": "Come over here and Kiss me on my hot mouth",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/come-over-here-and-kiss-me-on-my-hot-mouth.mp3"
    },
    {
        "name": "Throw",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throw_d4CPY0G.mp3"
    },
    {
        "name": "Cartoon Mr. Krab Walking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-mr-krab-walking.mp3"
    },
    {
        "name": "Luigi Burning",
        "color": "rgb(52, 140, 70)",
        "mp3": "/media/sounds/luigi-burning.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "Loud Keyboard Spamming Sound (SpeedRun)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loud-keyboard-spamming-sound-speedrun.mp3"
    },
    {
        "name": "superman music",
        "color": "rgb(65, 75, 255)",
        "mp3": "/media/sounds/superman-music.mp3"
    },
    {
        "name": "Bomba en casa",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/bomba-en-casa.mp3"
    },
    {
        "name": "SÉLOCO NÃO COMPENSA",
        "color": "rgb(80, 45, 255)",
        "mp3": "/media/sounds/seloco-nao-compensa.mp3"
    },
    {
        "name": "clash royale hog rida",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/clash-royale-hog-rida.mp3"
    },
    {
        "name": "TRALALERO TRA LA LA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralalero-tra-la-la.mp3"
    },
    {
        "name": "cooked dog meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cooked-dog-meme.mp3"
    },
    {
        "name": "Videl Moans",
        "color": "rgb(203, 34, 255)",
        "mp3": "/media/sounds/videl-moans.mp3"
    },
    {
        "name": "Kanye HH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-hh.mp3"
    },
    {
        "name": "eunoia cake!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eunoia-cake.mp3"
    },
    {
        "name": "Spongebob n word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-n-word.mp3"
    },
    {
        "name": "niggersong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggersong_SNRItgA.mp3"
    },
    {
        "name": "oh my god he on x games mode",
        "color": "rgb(83, 255, 97)",
        "mp3": "/media/sounds/he-on-x-games-mode-online-audio-converter.mp3"
    },
    {
        "name": "gotcha! ahaha!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gotcha-ahaha.mp3"
    },
    {
        "name": "Coolkid Hak tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coolkid-hak-tuah.mp3"
    },
    {
        "name": "MOANLOL BASS",
        "color": "rgb(5, 5, 255)",
        "mp3": "/media/sounds/moanlol-bass.mp3"
    },
    {
        "name": "c00lkidd [familiar}",
        "color": "rgb(125, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-familiar.mp3"
    },
    {
        "name": "WHO DO YOU THINK YOU ARE I AM",
        "color": "rgb(248, 255, 72)",
        "mp3": "/media/sounds/who-do-you-think-you-are-i-am.mp3"
    },
    {
        "name": "c00lkidd Phase 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-phase-1.mp3"
    },
    {
        "name": "Kamala Harris Laugh",
        "color": "rgb(245, 153, 255)",
        "mp3": "/media/sounds/kamala-harris-laugh.mp3"
    },
    {
        "name": "-click here you nigger——",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/click-here-you-nigger.mp3"
    },
    {
        "name": "Markiplier \"NO WAIT, I'VE BEEN A GOOD BOY!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/markiplier-no-wait-ive-been-a-good-boy.mp3"
    },
    {
        "name": "Ah Lula,meu presidente....",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-lula-meu-presidente.mp3"
    },
    {
        "name": "Brrr brrr patapim",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brrr-brrr-patapim.mp3"
    },
    {
        "name": "GOTHBOICLIQUE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/31379950.mp3"
    },
    {
        "name": "tom and jerry yell",
        "color": "rgb(84, 102, 159)",
        "mp3": "/media/sounds/tom-and-jerry-yell.mp3"
    },
    {
        "name": "in the bible",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/in-the-bible.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "Palpatine Do It",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/senator-palpatine-do-it_1.mp3"
    },
    {
        "name": "U Got That (meme)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/u-got-that-mp3-fix.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "Timmy!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/timmy.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "Megumin - EXPLOSION!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion_3.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Rap Air Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn_1.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "MARIO OOF",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/sm64_mario_oof.mp3"
    },
    {
        "name": "number one victory royale yeah fortnite we bout",
        "color": "rgb(128, 255, 221)",
        "mp3": "/media/sounds/number-one-victory-royale-yeah-fortnite-we-bout-to-get-down.mp3"
    },
    {
        "name": "ENEMY AC130 ABOVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/enemy-ac130-above2.mp3"
    },
    {
        "name": "æ meme",
        "color": "rgb(182, 0, 0)",
        "mp3": "/media/sounds/ae-meme.mp3"
    },
    {
        "name": "Fortnite Victory Royale",
        "color": "rgb(17, 72, 255)",
        "mp3": "/media/sounds/victory-royale.mp3"
    },
    {
        "name": "My mom! (Muscle Man)",
        "color": "rgb(51, 102, 51)",
        "mp3": "/media/sounds/my-mom.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "lol mising ping",
        "color": "rgb(255, 30, 30)",
        "mp3": "/media/sounds/ping_missing.mp3"
    },
    {
        "name": "SNORE MIMIMIMIMI",
        "color": "rgb(104, 169, 178)",
        "mp3": "/media/sounds/snore-mimimimimi.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    },
    {
        "name": "epic sax alert 10 seconds fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-epic-sax-gandalf-10-sec_f1uqKhm.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Phasmophobia singing Ghost",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/phasmophobia-singing-ghost.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "Pokemon Item received",
        "color": "rgb(0, 255, 157)",
        "mp3": "/media/sounds/129-received-an-item.mp3"
    },
    {
        "name": "Funny Laugh Track",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-track-2-mp3cut.mp3"
    },
    {
        "name": "Gong Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asian-gong.mp3"
    },
    {
        "name": "Cod Zombies Bye Bye",
        "color": "rgb(185, 131, 82)",
        "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "SSB Gasp",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/ssbb_crowd_gasp3.mp3"
    },
    {
        "name": "A man has fallen into a river",
        "color": "rgb(9, 0, 255)",
        "mp3": "/media/sounds/final_5e2ea0d99db6dc00151b36fb_699836-online-audio-converter.mp3"
    },
    {
        "name": "British Quandale Dingle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/british-quandale-dingle.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "JUDGEMENT",
        "color": "rgb(22, 236, 255)",
        "mp3": "/media/sounds/judgement.mp3"
    },
    {
        "name": "Mega Fart!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mega-fart.mp3"
    },
    {
        "name": "Blink SquarePants",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/spongebob-blinking-sound-effect-mp3cut.mp3"
    },
    {
        "name": "UGH EWW",
        "color": "rgb(151, 82, 255)",
        "mp3": "/media/sounds/ew-dude-wtf.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "George Crying",
        "color": "rgb(41, 255, 100)",
        "mp3": "/media/sounds/george-crying.mp3"
    },
    {
        "name": "Oh Hell Nononoo",
        "color": "rgb(55, 255, 227)",
        "mp3": "/media/sounds/oh-hell-no_aQX7VTp.mp3"
    },
    {
        "name": "kick the n b off the plane",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kick-the-n-b-off-the-plane.mp3"
    },
    {
        "name": "clap wet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clap-wet.mp3"
    },
    {
        "name": "Unlce Ruckus - Zoologist",
        "color": "rgb(85, 63, 30)",
        "mp3": "/media/sounds/unlce-ruckus-zoologist.mp3"
    },
    {
        "name": "lula tira",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lula-tira.mp3"
    },
    {
        "name": "Caseoh your banned",
        "color": "rgb(0, 15, 255)",
        "mp3": "/media/sounds/caseoh-your-banned.mp3"
    },
    {
        "name": "Police siren (for loop)",
        "color": "rgb(54, 87, 255)",
        "mp3": "/media/sounds/police-siren-for-loop.mp3"
    },
    {
        "name": "Fart Meme",
        "color": "rgb(60, 255, 21)",
        "mp3": "/media/sounds/frout.mp3"
    },
    {
        "name": "cartoon running sfx",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/cartoon-running-sfx.mp3"
    },
    {
        "name": "Disappear Scream",
        "color": "rgb(255, 248, 193)",
        "mp3": "/media/sounds/disappear-scream.mp3"
    },
    {
        "name": "1500 es hora y media",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
    },
    {
        "name": "Meme Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-click.mp3"
    },
    {
        "name": "Crowd Cheer + Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-cheering-applause.mp3"
    },
    {
        "name": "screaming monkeys",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/screaming-monkeys.mp3"
    },
    {
        "name": "W's in de chat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ws-in-de-chat.mp3"
    },
    {
        "name": "Пердуляция",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/perduliatsiia.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "oh hell naw man wtf man",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/oh-hell-naw-man-wtf-man.mp3"
    },
    {
        "name": "РЖД прибытие поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rzhd-pribytie-poezda.mp3"
    },
    {
        "name": "Ryan gosling burp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ryan-gosling-burp.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "CUPCAKKE AWWH!",
        "color": "rgb(255, 16, 150)",
        "mp3": "/media/sounds/cupcakke-awwh.mp3"
    },
    {
        "name": "Bye Bitch! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-bitch-meme.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "yoooooooooooo",
        "color": "rgb(26, 30, 255)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4_objp8XX.mp3"
    },
    {
        "name": "Swish",
        "color": "rgb(132, 71, 255)",
        "mp3": "/media/sounds/swish.mp3"
    },
    {
        "name": "Muhehehehe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/muhehehehe.mp3"
    },
    {
        "name": "(Slushynoobz) hello",
        "color": "rgb(168, 255, 174)",
        "mp3": "/media/sounds/slushynoobz-hello.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "ih takotnyee",
        "color": "rgb(43, 34, 255)",
        "mp3": "/media/sounds/ih-takotnyee.mp3"
    },
    {
        "name": "BIG MAN BLASTOISE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-man-blastoise.mp3"
    },
    {
        "name": "Bobrini Cocococini",
        "color": "rgb(157, 93, 59)",
        "mp3": "/media/sounds/bobrini-cocococini.mp3"
    },
    {
        "name": "Дорогой дневник....",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dorogoi-dnevnik.mp3"
    },
    {
        "name": "Tu madre tiene una",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tu-madre-tiene-una_4GG4162.mp3"
    },
    {
        "name": "(mafioso) here we go folks",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-here-we-go-folks.mp3"
    },
    {
        "name": "Yes king 1000",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-1000.mp3"
    },
    {
        "name": "(mafioso) thats the girl in our target list",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-thats-the-girl-in-our-target-list.mp3"
    },
    {
        "name": "WE ARE FORSAKEN (clean as a whistle!)",
        "color": "rgb(32, 32, 32)",
        "mp3": "/media/sounds/we-are-forsaken-clean-as-a-whistle.mp3"
    },
    {
        "name": "lonely lonely I guess I'm lonely",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lonely-lonely-i-guess-im-lonely.mp3"
    },
    {
        "name": "QUE RICO DAMELO",
        "color": "rgb(48, 255, 129)",
        "mp3": "/media/sounds/que-rico-damelo_2n6gvwY.mp3"
    },
    {
        "name": "Meow, f out the way",
        "color": "rgb(251, 145, 255)",
        "mp3": "/media/sounds/meow-f-out-the-way.mp3"
    },
    {
        "name": "Shinji, Crank that Soulja boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shinji-crank-that-soulja-boy.mp3"
    },
    {
        "name": "Shinji, Crank that Soulja boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shinji-crank-that-soulja-boy.mp3"
    },
    {
        "name": "Gorilla Tag Youtuber's Suspense Sound",
        "color": "rgb(0, 58, 62)",
        "mp3": "/media/sounds/gorilla-tag-youtubers-suspense-sound.mp3"
    },
    {
        "name": "SFX: Camera Flash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sfx-camera-flash.mp3"
    },
    {
        "name": "c00lkidd [dAd}",
        "color": "rgb(49, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-dad.mp3"
    },
    {
        "name": "raise!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/raise.mp3"
    },
    {
        "name": "Car Beep x2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-beep-x2.mp3"
    },
    {
        "name": "DrumRolll",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd_gk1l2Vg.mp3"
    },
    {
        "name": "Tidas",
        "color": "rgb(112, 255, 133)",
        "mp3": "/media/sounds/tidas.mp3"
    },
    {
        "name": "Dreamybull fart 2",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dreamybull-fart-2.mp3"
    },
    {
        "name": "Oh Hell No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtone_7.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Rizz walk",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/rizz-walk.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "Woody Woodpecker Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woody-woodpecker-laugh.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "°__°",
        "color": "rgb(2, 1, 3)",
        "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
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
        "name": "E Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-in-the-game_TyOFKRF.mp3"
    },
    {
        "name": "HOLD UP WAIT A MINUTE SOMETHIN",
        "color": "rgb(37, 255, 30)",
        "mp3": "/media/sounds/untitled_OTuNHvt.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "Get Griddy | Fortnite Emote",
        "color": "rgb(0, 255, 242)",
        "mp3": "/media/sounds/9convert_f28qQKC.mp3"
    },
    {
        "name": "OOOh shit a rat",
        "color": "rgb(216, 226, 200)",
        "mp3": "/media/sounds/a-rat.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Giggity",
        "color": "rgb(153, 255, 0)",
        "mp3": "/media/sounds/quagmire-giggity-giggity-giggity.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "TF2 Nom nom nom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tf2-heavy-om-nom-nom-sound-effect.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "doggy bark",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deepbark.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "I fart in your direction",
        "color": "rgb(102, 153, 0)",
        "mp3": "/media/sounds/i-fart-in-your-general-direction.mp3"
    },
    {
        "name": "Scooby doo running sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scooby-doo-turning-test.mp3"
    },
    {
        "name": "Sr Pelo Scream",
        "color": "rgb(86, 255, 103)",
        "mp3": "/media/sounds/sr-pelo-scream_94hluaY.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Teleport DBZ",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpubima4i9.mp3"
    },
    {
        "name": "Gunshot (Play)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot_9JDniTe.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Kid Screaming",
        "color": "rgb(0, 255, 2)",
        "mp3": "/media/sounds/kid-screaming-sound-effect.mp3"
    },
    {
        "name": "twitch bits",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/twitch-bits-donation-sound-effect-sfx.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "/media/sounds/disappear.mp3"
    },
    {
        "name": "Sitcom Crowd Ooh",
        "color": "rgb(255, 157, 216)",
        "mp3": "/media/sounds/sitcom-crowd-ooh_sRDaL7d.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "Angry Birds Laugh",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/angry-birds-laugh.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "enjoy mario's agony",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01_0TBRB2b.mp3"
    },
    {
        "name": "Dark souls vordt theme but good part",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/yt1s-mp3cut_ijsl0GY.mp3"
    },
    {
        "name": "Street Fighter II Coin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coin_1.mp3"
    },
    {
        "name": "ayo wtf?",
        "color": "rgb(185, 255, 54)",
        "mp3": "/media/sounds/ayo-wtf-meme-sound-effect.mp3"
    },
    {
        "name": "12th Street Rag",
        "color": "rgb(144, 255, 70)",
        "mp3": "/media/sounds/sound-baord-spongebob.mp3"
    },
    {
        "name": "Silent Hill 2 Receiving Item",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sh2-recieve-item.mp3"
    },
    {
        "name": "Jerkmate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jerkmate_zg37Y8g.mp3"
    },
    {
        "name": "brain farts",
        "color": "rgb(153, 14, 255)",
        "mp3": "/media/sounds/brain-farts.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "Thunder Crack",
        "color": "rgb(118, 102, 102)",
        "mp3": "/media/sounds/thunder-crack.mp3"
    },
    {
        "name": "Cartoon Flip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-flip_0mhhTzj.mp3"
    },
    {
        "name": "Honkai Herta Hudurin kuru kuru",
        "color": "rgb(155, 24, 255)",
        "mp3": "/media/sounds/honkai-herta-hudurin-kuru-kuru.mp3"
    },
    {
        "name": "ROJÃO SUPER ESTOURADO!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rojao-super-estourado.mp3"
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
        "name": "Back to the Future - Tinkle",
        "color": "rgb(255, 236, 65)",
        "mp3": "/media/sounds/back-to-the-future-twinkle-ringtone_7oVbUv8.mp3"
    },
    {
        "name": "Dog laughing meme form TikTok",
        "color": "rgb(38, 5, 255)",
        "mp3": "/media/sounds/dog-laughing-meme-form-tiktok.mp3"
    },
    {
        "name": "Unlce Ruckus - Im Black Now",
        "color": "rgb(87, 72, 38)",
        "mp3": "/media/sounds/unlce-ruckus-im-black-now.mp3"
    },
    {
        "name": "Flargus Bowling Pins Falling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bowling-pins-falling.mp3"
    },
    {
        "name": "Сосать америка!",
        "color": "rgb(255, 95, 95)",
        "mp3": "/media/sounds/sosat-amerika.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Dramatic boom Cyael",
        "color": "rgb(96, 15, 255)",
        "mp3": "/media/sounds/shortboom.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "Messenger Ringtone",
        "color": "rgb(100, 165, 255)",
        "mp3": "/media/sounds/facebook-messenger-ringtone.mp3"
    },
    {
        "name": "must have been the wind",
        "color": "rgb(94, 255, 254)",
        "mp3": "/media/sounds/must-have-been-the-wind.mp3"
    },
    {
        "name": "OH YEAH JACKPOT JACKPOT",
        "color": "rgb(255, 247, 253)",
        "mp3": "/media/sounds/oh-yeah-jackpot-jackpot.mp3"
    },
    {
        "name": "BRAZIL ZIL",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/brazil-zil.mp3"
    },
    {
        "name": "Law & Order Theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/law-order-theme.mp3"
    },
    {
        "name": "го го го го",
        "color": "rgb(85, 78, 179)",
        "mp3": "/media/sounds/go-go-go-go.mp3"
    },
    {
        "name": "iphone camera shutter fast",
        "color": "rgb(216, 98, 255)",
        "mp3": "/media/sounds/iphone-camera-shutter-fast.mp3"
    },
    {
        "name": "suprise motherf***er",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suprise-motherf-er.mp3"
    },
    {
        "name": "WHERE IS OMNI-MAN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/where-is-omni-man.mp3"
    },
    {
        "name": "fortnite corail",
        "color": "rgb(255, 194, 71)",
        "mp3": "/media/sounds/fortnite-corail.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "Stadium Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stadium-rave.mp3"
    },
    {
        "name": "brainrot cat",
        "color": "rgb(68, 255, 0)",
        "mp3": "/media/sounds/brainrot-cat.mp3"
    },
    {
        "name": "Swoosh 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/swoosh-2.mp3"
    },
    {
        "name": "TODAS MIS PAJAS ME GUSTA RECORDAR",
        "color": "rgb(255, 254, 244)",
        "mp3": "/media/sounds/todas-mis-pajas-me-gusta-recordar.mp3"
    },
    {
        "name": "I am so lonely",
        "color": "rgb(238, 238, 238)",
        "mp3": "/media/sounds/i-am-so-lonely.mp3"
    },
    {
        "name": "Africa crying laugh commercial",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/africa-crying-laugh-commercial.mp3"
    },
    {
        "name": "а я знаю что ты дрочишь",
        "color": "rgb(250, 226, 255)",
        "mp3": "/media/sounds/a-ia-znaiu-chto-ty-drochish.mp3"
    },
    {
        "name": "You Have Reached Your Limit On Talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-have-reached-your-limit-on-talking.mp3"
    },
    {
        "name": "chupaloo",
        "color": "rgb(102, 255, 63)",
        "mp3": "/media/sounds/chupaloo.mp3"
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
        "name": "kaiser get on your knees blue lock",
        "color": "rgb(227, 227, 227)",
        "mp3": "/media/sounds/kaiser-get-on-your-knees-blue-lock.mp3"
    },
    {
        "name": "TUNGTUNGTUNGSAHURR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tungtungtungsahurr.mp3"
    },
    {
        "name": "Let Me Know Melodica",
        "color": "rgb(189, 89, 255)",
        "mp3": "/media/sounds/let-me-know-melodica.mp3"
    },
    {
        "name": "Spring Boing",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/spring-boing.mp3"
    },
    {
        "name": "Let Me Know (Slowed+Reverb)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-me-know-slowed-reverb.mp3"
    },
    {
        "name": "Крамбл куки ФОНК",
        "color": "rgb(232, 202, 125)",
        "mp3": "/media/sounds/krambl-kuki-fonk.mp3"
    },
    {
        "name": "arbys we have the meats",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/arbys-we-have-the-meats_a13EQ8M.mp3"
    },
    {
        "name": "FART 1",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/pet1_1.mp3"
    },
    {
        "name": "Rat dance moan69",
        "color": "rgb(255, 0, 216)",
        "mp3": "/media/sounds/rat-dance-moan69.mp3"
    },
    {
        "name": "Abe Sale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/abe-sale.mp3"
    },
    {
        "name": "Gemi2222",
        "color": "rgb(5, 9, 255)",
        "mp3": "/media/sounds/gemi2222.mp3"
    },
    {
        "name": "Wild West Whistle",
        "color": "rgb(255, 179, 72)",
        "mp3": "/media/sounds/wild-west-whistle.mp3"
    },
    {
        "name": "c00lkidd [some time}",
        "color": "rgb(112, 54, 54)",
        "mp3": "/media/sounds/c00lkidd-some-time.mp3"
    },
    {
        "name": "Never gonna give you up rickroll",
        "color": "rgb(255, 173, 173)",
        "mp3": "/media/sounds/never-gonna-give-you-up-rickroll.mp3"
    },
    {
        "name": "Peter eats snickers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/peter-eats-snickers.mp3"
    },
    {
        "name": "c00lkidd [ashes}",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-ashes.mp3"
    },
    {
        "name": "peter griffin stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/peter-griffin-stupid_CTqFS3d.mp3"
    },
    {
        "name": "mega fag00t",
        "color": "rgb(255, 255, 57)",
        "mp3": "/media/sounds/mega-fag00t-sound-effect.mp3"
    },
    {
        "name": "Tarkov Granade",
        "color": "rgb(25, 255, 8)",
        "mp3": "/media/sounds/videoplayback-online-audio-converter_rdI6DS2.mp3"
    },
    {
        "name": "HAMMER DOWN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hammer-down.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(58, 0, 255)",
        "mp3": "/media/sounds/syfm-loud.mp3"
    },
    {
        "name": "Female Sigh",
        "color": "rgb(253, 104, 255)",
        "mp3": "/media/sounds/female-sigh.mp3"
    },
    {
        "name": "tienen que cerrar el estadio",
        "color": "rgb(255, 0, 225)",
        "mp3": "/media/sounds/tienen-que-cerrar-el-estadio.mp3"
    },
    {
        "name": "Welcome onboard",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/welcome-onboard.mp3"
    },
    {
        "name": "Game Over-SuperMarioBros",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/12322.mp3"
    },
    {
        "name": "Seagulls",
        "color": "rgb(237, 237, 237)",
        "mp3": "/media/sounds/seagulls.mp3"
    },
    {
        "name": "Que dificil me la pusiste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-dificil-me-la-pusiste.mp3"
    },
    {
        "name": "Its Friday",
        "color": "rgb(233, 31, 255)",
        "mp3": "/media/sounds/its-friday.mp3"
    },
    {
        "name": "LEVANTATE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levantate.mp3"
    },
    {
        "name": "Granny hide and seek voiceline",
        "color": "rgb(85, 55, 0)",
        "mp3": "/media/sounds/granny-hide-and-seek-voiceline.mp3"
    },
    {
        "name": "mgs alert Kaan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mgs-alert_TnndhQO.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "Metal Gear",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/metalgearsolid.swf.mp3"
    },
    {
        "name": "YEETT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "nick eh 30 intro",
        "color": "rgb(37, 52, 255)",
        "mp3": "/media/sounds/nick-eh-30-intro.mp3"
    },
    {
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "I have the power of god and anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i_have_the_power_of_god_and_anime_on_my_side.mp3"
    },
    {
        "name": "Kendrick Mustard",
        "color": "rgb(255, 249, 76)",
        "mp3": "/media/sounds/kendrick-mustard.mp3"
    },
    {
        "name": "Screaming goat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-screaming-sheep.mp3"
    },
    {
        "name": "Mario Yahoo",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/super-mario-64-yahoo-sound.mp3"
    },
    {
        "name": "Spongebob - I NEED IT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tv-quotables-i-need-it-spongebob-squarepants.mp3"
    },
    {
        "name": "Sike! That's The Wrong Number!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/wrong-number.mp3"
    },
    {
        "name": "money money money money",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/money-button.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/sad-violin.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Hank Hill - Baja Blast",
        "color": "rgb(93, 255, 115)",
        "mp3": "/media/sounds/hank-hill-baja-blast.mp3"
    },
    {
        "name": "Morgan Freeman I can smell you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/morgan-freeman-can-smell-you_Oq9fTvy.mp3"
    },
    {
        "name": "Awkward Crickets",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect_YK6dDJG.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "ZEHAHAHA (Edward Teach laugh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zehahaha_laugh.mp3"
    },
    {
        "name": "Old spice",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle_1.mp3"
    },
    {
        "name": "Kendrick Lamar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kendrick-lamar-screaming.mp3"
    },
    {
        "name": "Stop The cap Meme",
        "color": "rgb(82, 255, 206)",
        "mp3": "/media/sounds/final_5f458f223c6f0b0015b3382c_910180.mp3"
    },
    {
        "name": "Ewww (Crowd Effect)",
        "color": "rgb(248, 255, 49)",
        "mp3": "/media/sounds/ewww.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Ah Shit, Here We Go Again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_PHjnAqj.mp3"
    },
    {
        "name": "Fire Burning",
        "color": "rgb(255, 192, 31)",
        "mp3": "/media/sounds/fire-burning.mp3"
    },
    {
        "name": "Storm Eye(incoming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shtorm_eyeincoming.mp3"
    },
    {
        "name": "glitch sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/glitch-sound-effect_FugN82U.mp3"
    },
    {
        "name": "на колени на колени",
        "color": "rgb(36, 72, 93)",
        "mp3": "/media/sounds/na-koleni-na-koleni.mp3"
    },
    {
        "name": "Are you serious right neow bro",
        "color": "rgb(138, 61, 61)",
        "mp3": "/media/sounds/are-you-serious-right-neow-bro.mp3"
    },
    {
        "name": "Re:Zero Rezurrection Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/re0r.mp3"
    },
    {
        "name": "Sonic Gameover",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/gameover.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "yoda scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound.mp3"
    },
    {
        "name": "Courage speak",
        "color": "rgb(213, 139, 255)",
        "mp3": "/media/sounds/courage-speak.mp3"
    },
    {
        "name": "HE'S ON FIRE - NBA JAM",
        "color": "rgb(255, 154, 144)",
        "mp3": "/media/sounds/hes-on-fire_h9DW1bE.mp3"
    },
    {
        "name": "daisy bell",
        "color": "rgb(116, 253, 223)",
        "mp3": "/media/sounds/daisy-bell.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "Hello moto",
        "color": "rgb(234, 63, 255)",
        "mp3": "/media/sounds/hello-moto-sound-notification.mp3"
    },
    {
        "name": "do a flip",
        "color": "rgb(196, 255, 0)",
        "mp3": "/media/sounds/do-a-flip-mp3.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "Ha fags South park cartman",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpi6_ngoq1.mp3"
    },
    {
        "name": "Crazy Dave Long 3",
        "color": "rgb(3, 255, 29)",
        "mp3": "/media/sounds/crazydavelong3.mp3"
    },
    {
        "name": "Duke Nukem wow that's a lot of words",
        "color": "rgb(14, 0, 255)",
        "mp3": "/media/sounds/duke-nukem-wow-thats-a-lot-of-words.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "PACKGOD SONG",
        "color": "rgb(164, 6, 30)",
        "mp3": "/media/sounds/packgod-song.mp3"
    },
    {
        "name": "PDA sound stalker",
        "color": "rgb(112, 120, 255)",
        "mp3": "/media/sounds/pda_4LbLWWH.mp3"
    },
    {
        "name": "Draymond Green - YUP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yup_QHxxpUk.mp3"
    },
    {
        "name": "Suuuuuuuuuuuuu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suuuuuuuuuuuuu.mp3"
    },
    {
        "name": "(Anakin) What have I done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-have-i-done.mp3"
    },
    {
        "name": "Cute Girl Laughing Sound Effect",
        "color": "rgb(255, 165, 232)",
        "mp3": "/media/sounds/cute-girl-laughing-sound-effect.mp3"
    },
    {
        "name": "It's Super Effective GEN3",
        "color": "rgb(60, 255, 1)",
        "mp3": "/media/sounds/hit-super-effective.mp3"
    },
    {
        "name": "Bob Esponja - Fail Sound",
        "color": "rgb(207, 255, 0)",
        "mp3": "/media/sounds/bob-esponja-fail-sound.mp3"
    },
    {
        "name": "The Moon Haunts You",
        "color": "rgb(100, 255, 247)",
        "mp3": "/media/sounds/the-moon-haunts-you.mp3"
    },
    {
        "name": "Raid Alert",
        "color": "rgb(136, 255, 203)",
        "mp3": "/media/sounds/raid-alert_CTCisZY.mp3"
    },
    {
        "name": "Rat dance",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rat-dance.mp3"
    },
    {
        "name": "I came",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/i-came.mp3"
    },
    {
        "name": "Trollface Phonk",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/trollface-phonk.mp3"
    },
    {
        "name": "Cheaper Town Hall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cheaper-town-hall.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "Hindi Totoo Yan - BABALU",
        "color": "rgb(17, 255, 255)",
        "mp3": "/media/sounds/hindi-totoo-yan-babalu.mp3"
    },
    {
        "name": "Fein x nokia",
        "color": "rgb(28, 66, 255)",
        "mp3": "/media/sounds/fein-x-nokia.mp3"
    },
    {
        "name": "record scratch *CLEAN*",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-scratch-clean.mp3"
    },
    {
        "name": "LIMBUS COMPANYYYY",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/limbus-companyyyy.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "fire alarm!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fire-alarm_frlER9H.mp3"
    },
    {
        "name": "You are watching a master at work",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-watching-a-master-at-work.mp3"
    },
    {
        "name": "Roblox ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-ahh.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "Hola tururururururururururu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hola-tururururururururururu.mp3"
    },
    {
        "name": "The man on the lakers",
        "color": "rgb(255, 242, 54)",
        "mp3": "/media/sounds/the-man-on-the-lakers.mp3"
    },
    {
        "name": "Cursed plankton",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cursed-plankton.mp3"
    },
    {
        "name": "Piano Sparkles",
        "color": "rgb(255, 52, 0)",
        "mp3": "/media/sounds/piano-sparkles.mp3"
    },
    {
        "name": "Will you keep quiet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/will-you-keep-quiet-sound-effect.mp3"
    },
    {
        "name": "ling gang guli guli (slowed)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ling-gang-guli-guli-slowed.mp3"
    },
    {
        "name": "выключи его наху",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vykliuchi-ego-nakhu.mp3"
    },
    {
        "name": "For the Republic - Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-the-republic-star-wars.mp3"
    },
    {
        "name": "bluudud FORSAKEN Hey, it's me!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudud-forsaken-hey-its-me.mp3"
    },
    {
        "name": "Princess Peach Moans",
        "color": "rgb(255, 0, 188)",
        "mp3": "/media/sounds/princess-peach-moans.mp3"
    },
    {
        "name": "Price Is Right Dings",
        "color": "rgb(63, 255, 105)",
        "mp3": "/media/sounds/ding-ding-ding.mp3"
    },
    {
        "name": "you're ToO SLOWW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-too-sloww.mp3"
    },
    {
        "name": "Ur digging in me",
        "color": "rgb(5, 14, 23)",
        "mp3": "/media/sounds/ur-digging-in-me.mp3"
    },
    {
        "name": "Loud Randy n word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-randy-n-word.mp3"
    },
    {
        "name": "Indian sorry",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/indian-sorry.mp3"
    },
    {
        "name": "dracula flow scoobydoo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dracula-flow-scoobydoo.mp3"
    },
    {
        "name": "After all that",
        "color": "rgb(45, 0, 255)",
        "mp3": "/media/sounds/after-all-that.mp3"
    },
    {
        "name": "FinalCountdown Timer",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/europe_-_the_final_countdown_chorus-1.mp3"
    },
    {
        "name": "Aisa mat karo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aisa-mat-karo.mp3"
    },
    {
        "name": "Grenade explosion sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-explosion-sfx.mp3"
    },
    {
        "name": "Holy shit JoJo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/holy-shit-jojo.mp3"
    },
    {
        "name": "Kinky come on keep talking dirty",
        "color": "rgb(255, 221, 244)",
        "mp3": "/media/sounds/kinky-come-on-keep-talking-dirty.mp3"
    },
    {
        "name": "Thud!",
        "color": "rgb(73, 63, 166)",
        "mp3": "/media/sounds/thud_Rajl4CI.mp3"
    },
    {
        "name": "Anda duerme Imbecil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anda-duerme-imbecil.mp3"
    },
    {
        "name": "stream-taci22",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shutup_H230OPk.mp3"
    },
    {
        "name": "WS Override",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ws-override.mp3"
    },
    {
        "name": "Дэпнуть мне",
        "color": "rgb(201, 255, 126)",
        "mp3": "/media/sounds/depnut-mne.mp3"
    },
    {
        "name": "I am going to Kermit Suicide",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kermitsuicide.mp3"
    },
    {
        "name": "Ayrton Senna Tema da Vitória",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ayrton-senna-tema-da-vitoria.mp3"
    },
    {
        "name": "ah ah ah yes king",
        "color": "rgb(255, 88, 213)",
        "mp3": "/media/sounds/ah-ah-ah-yes-king.mp3"
    },
    {
        "name": "SOMOS MONGOLITOS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/somos-mongolitos.mp3"
    },
    {
        "name": "SAD POEM (OMORI)",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/sad-poem-omori.mp3"
    },
    {
        "name": "show me what you got",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/show_1.mp3"
    },
    {
        "name": "Imposter sus",
        "color": "rgb(0, 165, 255)",
        "mp3": "/media/sounds/yt1s_iHdvuMW.mp3"
    },
    {
        "name": "c00lkidd [scared}",
        "color": "rgb(133, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-scared.mp3"
    },
    {
        "name": "Aint Afraid of No Spider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aint-afraid-of-no-spider.mp3"
    },
    {
        "name": "Chevy meme",
        "color": "rgb(255, 251, 111)",
        "mp3": "/media/sounds/chevy-meme.mp3"
    },
    {
        "name": "106 broke legs",
        "color": "rgb(6, 255, 243)",
        "mp3": "/media/sounds/scp-106.mp3"
    },
    {
        "name": "enter sandman intro metalica",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sandman.mp3"
    },
    {
        "name": "Yaaan! (My Melody)",
        "color": "rgb(255, 0, 217)",
        "mp3": "/media/sounds/yaaan-my-melody.mp3"
    },
    {
        "name": "awkward naruto moment",
        "color": "rgb(177, 190, 255)",
        "mp3": "/media/sounds/awkward-naruto-moment.mp3"
    },
    {
        "name": "Make No Sense Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_n3dfZ5m.mp3"
    },
    {
        "name": "Open the noor!",
        "color": "rgb(109, 255, 37)",
        "mp3": "/media/sounds/open-the-noor.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Chipi chipi chapa chapa",
        "color": "rgb(11, 255, 241)",
        "mp3": "/media/sounds/chipi-chipi-chapa-chapa.mp3"
    },
    {
        "name": "USSR Anthem",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ussr-anthem-short2.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "Oh Baby A Triple",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-baby-a-triple.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "hamburger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hamburger-sound-effect.mp3"
    },
    {
        "name": "Real gunshot",
        "color": "rgb(153, 255, 255)",
        "mp3": "/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "FUNK FLEX BOMB",
        "color": "rgb(102, 153, 153)",
        "mp3": "/media/sounds/funkmaster-flex-bomb-sound-effect-from-youtube-by-offliberty.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "FBI Open the door!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-the-door.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "Sad violin (14sec)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/export_4.mp3"
    },
    {
        "name": "the rock meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-meme.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "mao zedong propaganda music Red Sun in the Sky",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mao-zedong-propaganda-music-red-sun-in-the-sky.mp3"
    },
    {
        "name": "Mission Impossible",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/m3.mp3"
    },
    {
        "name": "Mexican trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/el-batido.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "So Long Gay Bowser",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sm64_mario_so_long_bowser_LjCg641.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "pizza roblox",
        "color": "rgb(211, 255, 108)",
        "mp3": "/media/sounds/trim_7tpktqR.mp3"
    },
    {
        "name": "YEE-HAW!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yee-haw.mp3"
    },
    {
        "name": "PUSH THE BUTTON!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_307.mp3"
    },
    {
        "name": "Keyboard rage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rage2.mp3"
    },
    {
        "name": "BLYAT kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blyat_9T1fo5H.mp3"
    },
    {
        "name": "MUDA MUDA MUDA MUDA MUDA MUDA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/muda_muda_muda_sound_effect.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "Nyan cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nyan-cat_1.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "/media/sounds/villager.mp3"
    },
    {
        "name": "goofy ass sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ass-sound.mp3"
    },
    {
        "name": "moai",
        "color": "rgb(145, 145, 145)",
        "mp3": "/media/sounds/moai.mp3"
    },
    {
        "name": "General Lee HORN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/general-lee-horn.mp3"
    },
    {
        "name": "Mario Fall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-falling.mp3"
    },
    {
        "name": "Door Open AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/open-aim.mp3"
    },
    {
        "name": "goofy ahhhh uncle",
        "color": "rgb(174, 61, 255)",
        "mp3": "/media/sounds/goofy-ahhhh-uncle.mp3"
    },
    {
        "name": "Bloxy cola",
        "color": "rgb(255, 247, 6)",
        "mp3": "/media/sounds/bloxy-cola.mp3"
    },
    {
        "name": "oh great heavens",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-great-heavens.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "Glass breaking sound effect",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
    },
    {
        "name": "if i were to die right now (spongebob)",
        "color": "rgb(255, 254, 77)",
        "mp3": "/media/sounds/if-i-were-to-die.mp3"
    },
    {
        "name": "Uncle ruckus GUILTY",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-guilty.mp3"
    },
    {
        "name": "Aztec death whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-whistle-57.mp3"
    },
    {
        "name": "Spider-Man thwip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spider-man-customized-web-thwip-sound-effect-1_ybmate.mp3"
    },
    {
        "name": "windows xp bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_9XXvzy4.mp3"
    },
    {
        "name": "Goofy Ahh Cardi B",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-cardi-b.mp3"
    },
    {
        "name": "8-bit Happy Birthday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hb128.mp3"
    },
    {
        "name": "Cartoon bonk",
        "color": "rgb(82, 255, 110)",
        "mp3": "/media/sounds/cartoon-bonk.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "DKC2 - Kritter",
        "color": "rgb(89, 198, 26)",
        "mp3": "/media/sounds/kritter.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "HELP HELP ME tiktok meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/help-help-me-tiktok-meme.mp3"
    },
    {
        "name": "Flashback",
        "color": "rgb(20, 255, 0)",
        "mp3": "/media/sounds/flashback-sound-effect_3McGd4q.mp3"
    },
    {
        "name": "Millionaire Suspense",
        "color": "rgb(235, 255, 52)",
        "mp3": "/media/sounds/5000000-music-mp3cut.mp3"
    },
    {
        "name": "Bubbles",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/bubbles.mp3"
    },
    {
        "name": "I am Steve (minecraft movie)",
        "color": "rgb(255, 25, 232)",
        "mp3": "/media/sounds/i-am-steve-minecraft-movie.mp3"
    },
    {
        "name": "sukuna gambare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gambale.mp3"
    },
    {
        "name": "roblox spawn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/roblox-spawn.mp3"
    },
    {
        "name": "wild thornberrys- donnie",
        "color": "rgb(255, 244, 25)",
        "mp3": "/media/sounds/wild-thornberrys-donnie.mp3"
    },
    {
        "name": "Ha !! GAYYY",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/ha-gay_1.mp3"
    },
    {
        "name": "\"Wow!\" (anime voice accent)",
        "color": "rgb(216, 114, 255)",
        "mp3": "/media/sounds/wow-anime-voice-accent.mp3"
    },
    {
        "name": "WELCOME TO THE MATO ESTOURADO",
        "color": "rgb(64, 47, 25)",
        "mp3": "/media/sounds/welcome-to-the-mato-estourado.mp3"
    },
    {
        "name": "do you suffer from a lack of a father figure?",
        "color": "rgb(153, 255, 188)",
        "mp3": "/media/sounds/do-you-suffer-from-a-lack-of-a-father-figure.mp3"
    },
    {
        "name": "HE-HELL NAH dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-hell-nah-dog.mp3"
    },
    {
        "name": "Dreaming Harp",
        "color": "rgb(140, 255, 195)",
        "mp3": "/media/sounds/dreaming-harp-sound-effect.mp3"
    },
    {
        "name": "Buttered Sausage - Gary Busey",
        "color": "rgb(255, 244, 105)",
        "mp3": "/media/sounds/buttered-sausage-gary-busey.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "disney channel wow",
        "color": "rgb(56, 255, 178)",
        "mp3": "/media/sounds/wow-nicely-done-disney-channel-nickelodeon-laugh-track-02.mp3"
    },
    {
        "name": "Wiwiwi motivacional cat",
        "color": "rgb(228, 204, 171)",
        "mp3": "/media/sounds/wiwiwi-motivacional-cat.mp3"
    },
    {
        "name": "Улетаю на гаити",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uletaiu-na-gaiti.mp3"
    },
    {
        "name": "corn hub intro",
        "color": "rgb(255, 100, 11)",
        "mp3": "/media/sounds/corn-hub-intro.mp3"
    },
    {
        "name": "ocean waves",
        "color": "rgb(66, 202, 249)",
        "mp3": "/media/sounds/copy-of-ocean-wave-1-online-audio-converter.mp3"
    },
    {
        "name": "Kid Slap *oh*",
        "color": "rgb(255, 15, 27)",
        "mp3": "/media/sounds/kid-slap-oh.mp3"
    },
    {
        "name": "vine boom sound meme",
        "color": "rgb(167, 140, 255)",
        "mp3": "/media/sounds/vine-boom-sound-meme.mp3"
    },
    {
        "name": "Risa de bebe meme",
        "color": "rgb(8, 0, 255)",
        "mp3": "/media/sounds/risa-de-bebe-meme.mp3"
    },
    {
        "name": "You should have died at birth",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-should-have-died-at-birth_f90I620.mp3"
    },
    {
        "name": "Steve's Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steves-lava-chicken_UmJvvHF.mp3"
    },
    {
        "name": "Ab tu Gaya beta ab dekh tu (puneet",
        "color": "rgb(255, 69, 151)",
        "mp3": "/media/sounds/ab-tu-gaya-beta-ab-dekh-tu-puneet.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "br br patapim",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/br-br-patapim.mp3"
    },
    {
        "name": "uy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uy.mp3"
    },
    {
        "name": "Old Church Bells - Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bells-death.mp3"
    },
    {
        "name": "Alexis Texas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alexis-texas.mp3"
    },
    {
        "name": "Gundam warning alarm",
        "color": "rgb(31, 19, 23)",
        "mp3": "/media/sounds/gundam-warning-alarm.mp3"
    },
    {
        "name": "contesta puñetas",
        "color": "rgb(30, 154, 255)",
        "mp3": "/media/sounds/contesta-punetas.mp3"
    },
    {
        "name": "lebron jamesss",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron-jamesss.mp3"
    },
    {
        "name": "Ghost of the goon bell",
        "color": "rgb(2, 0, 0)",
        "mp3": "/media/sounds/ghost-of-the-goon-bell.mp3"
    },
    {
        "name": "King Von DigBar",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/king-von-digbar.mp3"
    },
    {
        "name": "vaca saturno saturnita",
        "color": "rgb(243, 255, 18)",
        "mp3": "/media/sounds/vaca-saturno-saturnita.mp3"
    },
    {
        "name": "adrian explain our friend group",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adrian-explain-our-friend-group.mp3"
    },
    {
        "name": "grug music",
        "color": "rgb(176, 110, 28)",
        "mp3": "/media/sounds/grug-music.mp3"
    },
    {
        "name": "Conqueror Haki",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/conqueror_haki_one_piece_luffy_sound_effect_for_editing_3170900796123079825.mp3"
    }
]