/*
taken from https://www.myinstants.com/en/trending/us/

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
        "name": "Lizard",
        "color": "rgb(11, 192, 53)",
        "mp3": "/media/sounds/lizard.mp3"
    },
    {
        "name": "LIZARD BUTTON",
        "color": "rgb(127, 168, 255)",
        "mp3": "/media/sounds/lizard-button.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday_IeBO1Mr.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "GAYY ECHO",
        "color": "rgb(255, 105, 0)",
        "mp3": "/media/sounds/gayy-echo.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "start digging in your butt twin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/start-digging-in-your-butt-twin.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
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
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "flashbanggg",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/flashbanggg.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "DRIVING IN MY CAR (asgore",
        "color": "rgb(146, 145, 32)",
        "mp3": "/media/sounds/driving-in-my-car-asgore_RhVxJjP.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "KPop Demon Hunters URRRAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kpop-demon-hunters-urrrah.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "Звук литвина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-litvina.mp3"
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
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
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
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "Peter Griffin: YOU STUPID NI",
        "color": "rgb(130, 195, 255)",
        "mp3": "/media/sounds/peter-griffin-you-stupid-ni_YLcHjEm.mp3"
    },
    {
        "name": "Syfm",
        "color": "rgb(145, 183, 255)",
        "mp3": "/media/sounds/syfm.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
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
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Saja Boy Jingle",
        "color": "rgb(202, 36, 80)",
        "mp3": "/media/sounds/saja-boy-jingle.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "SDIYBT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sdiybt.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "wobbly wiggly",
        "color": "rgb(0, 255, 3)",
        "mp3": "/media/sounds/wobbly-wiggly.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
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
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "Asgore dess truck",
        "color": "rgb(255, 234, 5)",
        "mp3": "/media/sounds/asgore-dess-truck_xGFE4qX.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "MI BOMBO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mi-bombo.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
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
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "M e o w ~",
        "color": "rgb(120, 85, 120)",
        "mp3": "/media/sounds/m-e-o-w.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "RUPERT GAMING BOI",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rupert-gaming-boi.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "Sodapop (Kpop demon hunters)",
        "color": "rgb(255, 169, 233)",
        "mp3": "/media/sounds/sodapop-kpop-demon-hunters.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "Lancer splat",
        "color": "rgb(29, 46, 255)",
        "mp3": "/media/sounds/lancer-splat.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(58, 0, 255)",
        "mp3": "/media/sounds/syfm-loud.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "Shut your fuckin mouth",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-your-fuckin-mouth.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "Love Island Text",
        "color": "rgb(184, 255, 42)",
        "mp3": "/media/sounds/yt1s_cizemWX.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "Mr Krabs Start diggin in your butt twin",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/mr-krabs-start-diggin-in-your-butt-twin.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "/media/sounds/67.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
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
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "Mr. Tenna says IT'S TV TIME",
        "color": "rgb(255, 171, 171)",
        "mp3": "/media/sounds/mr-tenna-says-its-tv-time.mp3"
    },
    {
        "name": "Man shut yo b*tch ass up!!!!!",
        "color": "rgb(255, 53, 208)",
        "mp3": "/media/sounds/man-stfu.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "doot doot 6 7",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/doot-doot-6-7.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Jet2holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jet2holiday.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "Jet2holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jet2holiday.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Nombre chapulín MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nombre-chapulin-mm.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "You're taking too long",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-taking-too-long.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "Jet 2 Holiday",
        "color": "rgb(243, 255, 8)",
        "mp3": "/media/sounds/jet-2-holiday_1CLCuwy.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "AI MINHA XEREEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ai-minha-xereee.mp3"
    },
    {
        "name": "Kpop Demon Hunters Golden",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kpop-demon-hunters-golden.mp3"
    },
    {
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "Nombre chapulín MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nombre-chapulin-mm.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
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
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "Jet 2 Holiday",
        "color": "rgb(243, 255, 8)",
        "mp3": "/media/sounds/jet-2-holiday_1CLCuwy.mp3"
    },
    {
        "name": "Kpop Demon Hunters Golden",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kpop-demon-hunters-golden.mp3"
    },
    {
        "name": "Gerson Laugh",
        "color": "rgb(19, 143, 23)",
        "mp3": "/media/sounds/gerson-laugh.mp3"
    },
    {
        "name": "Guest 1337 forsaken",
        "color": "rgb(184, 51, 255)",
        "mp3": "/media/sounds/guest-1337-forsaken.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "CLAP BUTTON",
        "color": "rgb(95, 113, 255)",
        "mp3": "/media/sounds/clap-button.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "okay garmin video speichern",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/okay-garmin-video-speichern.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "why are you gay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-you-gay.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Randy saying a not nice word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/randy-saying-a-not-nice-word.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "ENRIQUE!",
        "color": "rgb(45, 129, 255)",
        "mp3": "/media/sounds/enrique.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "Oh No Meme (2020)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
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
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "Гудок поезда",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gudok-poezda.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "roblox footsteps",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/action_footsteps_plastic.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "NOW'S YOUR CHANCE TO BE A BIG SHOT",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/nows-your-chance-to-be-a-big-shot.mp3"
    },
    {
        "name": "Ding Dong Eat it up.",
        "color": "rgb(61, 223, 255)",
        "mp3": "/media/sounds/ding-dong-eat-it-up_ZhlIYUe.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "SDIYBT but more aids",
        "color": "rgb(150, 159, 255)",
        "mp3": "/media/sounds/sdiybt-but-more-aids.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "mlem mlem mlem",
        "color": "rgb(36, 184, 64)",
        "mp3": "/media/sounds/mlem-mlem-mlem.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
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
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Cállese el hocico MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/callese-el-hocico-mm.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
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
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Obama have dihh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obama-have-dihh.mp3"
    },
    {
        "name": "Acho que eu to doente",
        "color": "rgb(49, 94, 255)",
        "mp3": "/media/sounds/acho-que-eu-to-doente.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Doll: Green Light",
        "color": "rgb(75, 255, 54)",
        "mp3": "/media/sounds/doll-green-light.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "SDIYBT but more aids",
        "color": "rgb(150, 159, 255)",
        "mp3": "/media/sounds/sdiybt-but-more-aids.mp3"
    },
    {
        "name": "Aee Epale",
        "color": "rgb(92, 255, 233)",
        "mp3": "/media/sounds/aee-epale.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
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
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "Donkey kong oh banana",
        "color": "rgb(250, 255, 17)",
        "mp3": "/media/sounds/donkey-kong-64-oh-banana.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "GUBBY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gubby.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "sexy back",
        "color": "rgb(0, 218, 255)",
        "mp3": "/media/sounds/sexy-back.mp3"
    },
    {
        "name": "Risa Konan",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/risa-konan.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Put it in Reverse Terry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/put-it-reverse-terry.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Put it in Reverse Terry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/put-it-reverse-terry.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "OH BANANA! (Donkey Kong Bananza)",
        "color": "rgb(243, 255, 7)",
        "mp3": "/media/sounds/oh-banana-donkey-kong-bananza.mp3"
    },
    {
        "name": "Tu dar muito é teu c* rapaz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-dar-muito-e-teu-c-rapaz.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "SpongeBob - A Few Moments Later",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd_LNSwAQR.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "R6 Lion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/r6-lion-sound-effect.mp3"
    },
    {
        "name": "Corrupt Nature! (c00lkidd)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/corrupt-nature-c00lkidd.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "Obama have dihh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obama-have-dihh.mp3"
    },
    {
        "name": "Ay ya no cabemos",
        "color": "rgb(255, 43, 227)",
        "mp3": "/media/sounds/ay-ya-no-cabemos.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "Ay ya no cabemos",
        "color": "rgb(255, 43, 227)",
        "mp3": "/media/sounds/ay-ya-no-cabemos.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
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
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "cadê vc fiadaputa você, por que não trabalha?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cade-vc-fiadaputa-voce-por-que-nao-trabalha.mp3"
    },
    {
        "name": "START DIGGING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/start-digging.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Doll: Green Light",
        "color": "rgb(75, 255, 54)",
        "mp3": "/media/sounds/doll-green-light.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "Saja Boys - Soda Pop",
        "color": "rgb(60, 245, 255)",
        "mp3": "/media/sounds/saja-boys-soda-pop.mp3"
    },
    {
        "name": "A quien te diriges?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-quien-te-diriges.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "DOM DOM TAVA AQUI NO BAILE",
        "color": "rgb(255, 243, 74)",
        "mp3": "/media/sounds/dom-dom-tava-aqui-no-baile.mp3"
    },
    {
        "name": "Acho que eu to doente",
        "color": "rgb(49, 94, 255)",
        "mp3": "/media/sounds/acho-que-eu-to-doente.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "Uncle Ruckus on schools",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-on-schools.mp3"
    },
    {
        "name": "START DIGGING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/start-digging.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "Box, Box F1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/box-box-f1.mp3"
    },
    {
        "name": "Starman (superman)",
        "color": "rgb(65, 158, 255)",
        "mp3": "/media/sounds/starman-superman.mp3"
    },
    {
        "name": "A quien te diriges?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-quien-te-diriges.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "É q eu tô meio gripadinha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
    },
    {
        "name": "SMYW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smyw.mp3"
    },
    {
        "name": "Acho que eu to doente",
        "color": "rgb(49, 94, 255)",
        "mp3": "/media/sounds/acho-que-eu-to-doente.mp3"
    },
    {
        "name": "Жёсткий стон яковлева",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/zhiostkii-ston-iakovleva.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "AKH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akh.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Rizz Me U",
        "color": "rgb(208, 0, 255)",
        "mp3": "/media/sounds/rizz-me-u.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "AKH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akh.mp3"
    },
    {
        "name": "Glass breaking sound effect",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "rip bozo minos prime",
        "color": "rgb(9, 194, 255)",
        "mp3": "/media/sounds/rip-bozo-minos-prime.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "meow meow meow tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meow-meow-meow-tiktok.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "Alarma de Auron play",
        "color": "rgb(46, 255, 133)",
        "mp3": "/media/sounds/alarma-de-auron-play.mp3"
    },
    {
        "name": "dame un grr",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dame-un-grr.mp3"
    },
    {
        "name": "c00lkidd theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-theme.mp3"
    },
    {
        "name": "SIGUES CON LO MISMO",
        "color": "rgb(255, 255, 43)",
        "mp3": "/media/sounds/sigues-con-lo-mismo.mp3"
    },
    {
        "name": "RECHINIDO MULTIMEDIOS",
        "color": "rgb(15, 143, 255)",
        "mp3": "/media/sounds/rechinido-multimedios.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Look at this dude HQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bruh_look_at_this_dude1.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "Welcome Foolish Mortals",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcomefoolishmortals.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "man shut yo gah damn meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/man-shut-yo-gah-damn-meme.mp3"
    },
    {
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
    },
    {
        "name": "Allahu Akbar Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allahu-akbar-sound-effect_sTdGVmo.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "Welcome Foolish Mortals",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcomefoolishmortals.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "THINK FAST CHUCKLENUTS",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "THX",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/thx.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
    },
    {
        "name": "Hitting that Spot",
        "color": "rgb(49, 34, 255)",
        "mp3": "/media/sounds/hitting-that-spot.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "This is... MASS INFECTION!",
        "color": "rgb(15, 51, 4)",
        "mp3": "/media/sounds/this-is-mass-infection.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "Creation Of Hatred | Shedletsky VS 1x1x1x1",
        "color": "rgb(11, 93, 4)",
        "mp3": "/media/sounds/creation-of-hatred-shedletsky-vs-1x1x1x1.mp3"
    },
    {
        "name": "Блять чё за хуйня - метр",
        "color": "rgb(0, 255, 30)",
        "mp3": "/media/sounds/bliat-chio-za-khuinia-metr.mp3"
    },
    {
        "name": "Gárgaras MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gargaras-mm.mp3"
    },
    {
        "name": "Undertale - W.D. Gaster",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/withhands_1.mp3"
    },
    {
        "name": "Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-t.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Gayyyy",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/gayyy.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
    },
    {
        "name": "ponte a jalar rober",
        "color": "rgb(45, 45, 255)",
        "mp3": "/media/sounds/ponte-a-jalar-rober.mp3"
    },
    {
        "name": "rupert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rupert_2MGseaY.mp3"
    },
    {
        "name": "dexter song 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dexter-song-2.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pedro-song.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "Starman (superman)",
        "color": "rgb(65, 158, 255)",
        "mp3": "/media/sounds/starman-superman.mp3"
    },
    {
        "name": "Gaster's Theme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gasters-theme_PgFVfMX.mp3"
    },
    {
        "name": "Go to sleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gotosleep.mp3"
    },
    {
        "name": "Happy Gilmore - Jackass",
        "color": "rgb(0, 85, 159)",
        "mp3": "/media/sounds/happy-gilmore-jackass.mp3"
    },
    {
        "name": "Звук фотоаппарата",
        "color": "rgb(225, 163, 255)",
        "mp3": "/media/sounds/zvuk-fotoapparata.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "hamburger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hamburger-sound-effect.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Undertale - Soul Shatter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-soul-shatter.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Ai chega chega",
        "color": "rgb(36, 160, 74)",
        "mp3": "/media/sounds/ai-chega-chega.mp3"
    },
    {
        "name": "Lizard King",
        "color": "rgb(12, 146, 0)",
        "mp3": "/media/sounds/lizard-king-mp3cut.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "Happy Gilmore - Jackass",
        "color": "rgb(0, 85, 159)",
        "mp3": "/media/sounds/happy-gilmore-jackass.mp3"
    },
    {
        "name": "Gárgaras MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gargaras-mm.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Gayyyy",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/gayyy.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "É q eu tô meio gripadinha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
    },
    {
        "name": "Muhehehehe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/muhehehehe.mp3"
    },
    {
        "name": "HOYAA",
        "color": "rgb(79, 229, 56)",
        "mp3": "/media/sounds/hoyaaaa.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "Go to sleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gotosleep.mp3"
    },
    {
        "name": "Блять чё за хуйня - метр",
        "color": "rgb(0, 255, 30)",
        "mp3": "/media/sounds/bliat-chio-za-khuinia-metr.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Goofy ahh SpongeBob sound",
        "color": "rgb(208, 215, 0)",
        "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "I like ya and I want ya",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/i-like-ya-and-i-want-ya.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "confetti pop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound-effect.mp3"
    },
    {
        "name": "Asgore driving home",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/asgore-driving-home.mp3"
    },
    {
        "name": "Creation Of Hatred | Shedletsky VS 1x1x1x1",
        "color": "rgb(11, 93, 4)",
        "mp3": "/media/sounds/creation-of-hatred-shedletsky-vs-1x1x1x1.mp3"
    },
    {
        "name": "Undertale - W.D. Gaster",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/withhands_1.mp3"
    },
    {
        "name": "Dellor spam NI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dellor-spam-ni.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "JoJo - yes yes yes yes YES",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "long wet smelly ass fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/long-wet-smelly-ass-fart.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "concrete scraping",
        "color": "rgb(66, 116, 255)",
        "mp3": "/media/sounds/concrete-scraping.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "Susie Laugh",
        "color": "rgb(167, 0, 255)",
        "mp3": "/media/sounds/susie-laugh.mp3"
    },
    {
        "name": "tralarero tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tralarero-tralala.mp3"
    },
    {
        "name": "Блять чё за хуйня - метр",
        "color": "rgb(0, 255, 30)",
        "mp3": "/media/sounds/bliat-chio-za-khuinia-metr.mp3"
    },
    {
        "name": "lonely lonely I guess I'm lonely",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lonely-lonely-i-guess-im-lonely.mp3"
    },
    {
        "name": "Muhehehe",
        "color": "rgb(105, 20, 88)",
        "mp3": "/media/sounds/muhehehe.mp3"
    },
    {
        "name": "ponte a jalar rober",
        "color": "rgb(45, 45, 255)",
        "mp3": "/media/sounds/ponte-a-jalar-rober.mp3"
    },
    {
        "name": "foguete 12x1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fogos-caruaru-foguete-12x1-8.mp3"
    },
    {
        "name": "O mãe compra vibrador",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/o-mae-compra-vibrador.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "Squid game green light",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/squid-game-green-light.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "Discord Calling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound_tvxg95l.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Gayyyy",
        "color": "rgb(255, 102, 204)",
        "mp3": "/media/sounds/gayyy.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "pizza roblox",
        "color": "rgb(211, 255, 108)",
        "mp3": "/media/sounds/trim_7tpktqR.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Hotel service desk bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zapsplat_bell_service_disk_ring_slightly_broken_resonate_18042.mp3"
    },
    {
        "name": "Ele fezz de novo incansavel",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ele-fezz-de-novo-incansavel.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "I'm tired of this grandpa... That's too damn bad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-tired-of-this-grandpa-thats-too-damn-bad.mp3"
    },
    {
        "name": "Pitbull Fireball HD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a1-0001_pitbull-fireball-edited00086400-online-audio-converter.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "Ice Cream Truck",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ice-cream-truck.mp3"
    },
    {
        "name": "Bite me >:(",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bite-me_onSBivS.mp3"
    },
    {
        "name": "Gawk gawk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gawk-gawk.mp3"
    },
    {
        "name": "angy monkey.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angy-monkey-mp3.mp3"
    },
    {
        "name": "Indian yu bastard guy you bloody fucker",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-yu-bastard-guy-you-bloody-fucker.mp3"
    },
    {
        "name": "Good boyyy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boyyy.mp3"
    },
    {
        "name": "Go to sleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gotosleep.mp3"
    },
    {
        "name": "oh boy i friggin hate ni",
        "color": "rgb(252, 255, 255)",
        "mp3": "/media/sounds/oh-boy-i-friggin-hate-ni.mp3"
    },
    {
        "name": "FAHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhh.mp3"
    },
    {
        "name": "um excuse me what the actual f",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/um-excuse-me-what-the-actual-f.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "JoJo - yes yes yes yes YES",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
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
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "Squid game green light",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/squid-game-green-light.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "I AM SPEED",
        "color": "rgb(255, 111, 243)",
        "mp3": "/media/sounds/i-am-speed.mp3"
    },
    {
        "name": "I like ya and I want ya",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/i-like-ya-and-i-want-ya.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "vaca saturno saturnita",
        "color": "rgb(243, 255, 18)",
        "mp3": "/media/sounds/vaca-saturno-saturnita.mp3"
    },
    {
        "name": "Gimme the Loot",
        "color": "rgb(214, 214, 214)",
        "mp3": "/media/sounds/loots.mp3"
    },
    {
        "name": "ponte a jalar rober",
        "color": "rgb(45, 45, 255)",
        "mp3": "/media/sounds/ponte-a-jalar-rober.mp3"
    },
    {
        "name": "Tá tão engraçado hoje seu filha duma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wndzp.mp3"
    },
    {
        "name": "SYFM (sped up + loud)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/syfm-sped-up-loud.mp3"
    },
    {
        "name": "HELLO MOTO ESTOURADO",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hello-moto-estourado.mp3"
    },
    {
        "name": "dexter song 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dexter-song-2.mp3"
    },
    {
        "name": "Everything is Awesome!",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/everything-is-awesome.mp3"
    },
    {
        "name": "EBS Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ebs-alert.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-t.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "Japanese YOOOO",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "Perry the Platypus",
        "color": "rgb(255, 162, 67)",
        "mp3": "/media/sounds/perry-the-platypuss-growl.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "IPhone Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "Screech Car Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/237375__squareal__car-crash.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    },
    {
        "name": "Sponge Bob Disgusting",
        "color": "rgb(211, 199, 0)",
        "mp3": "/media/sounds/sponge-bob-disgusting.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "concrete scraping",
        "color": "rgb(66, 116, 255)",
        "mp3": "/media/sounds/concrete-scraping.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "YOUR TAKING TOO LONG",
        "color": "rgb(255, 147, 53)",
        "mp3": "/media/sounds/your-taking-too-long.mp3"
    },
    {
        "name": "Ha Ha Ha hello monkeys",
        "color": "rgb(20, 40, 255)",
        "mp3": "/media/sounds/ha-ha-ha-hello-monkeys.mp3"
    },
    {
        "name": "Asgore driving home",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/asgore-driving-home.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday and right now...",
        "color": "rgb(206, 255, 10)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday-and-right-now.mp3"
    },
    {
        "name": "Dellor spam NI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dellor-spam-ni.mp3"
    },
    {
        "name": "Outro songg",
        "color": "rgb(20, 233, 255)",
        "mp3": "/media/sounds/outro-songg.mp3"
    },
    {
        "name": "yahaha zelda",
        "color": "rgb(50, 111, 56)",
        "mp3": "/media/sounds/yahaha-zelda.mp3"
    },
    {
        "name": "Leeroy Jenkins",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/leroy.swf.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/counter-strike-jingle-cs-radio-enemy-spotted.mp3"
    },
    {
        "name": "Hawk Tuah (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hawk-tuah-short.mp3"
    },
    {
        "name": "Ric Flair Wooo",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/woo.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Sharingan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/collen-eyes-efect.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "Dodgeball Hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dodgeball.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "clap wet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clap-wet.mp3"
    },
    {
        "name": "Box, Box F1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/box-box-f1.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "Re: Zero - uueEEhuuuuhhhhhh",
        "color": "rgb(185, 243, 255)",
        "mp3": "/media/sounds/rezero-kara-hajimeru-isekai-seikatsu-creepy-sound_mMcw4Ln.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "anvil drop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anvil-drop.mp3"
    },
    {
        "name": "wiwiwi kitten",
        "color": "rgb(114, 102, 123)",
        "mp3": "/media/sounds/wiwiwi-kitten.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "The Boiled One Trumpet",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-trumpet.mp3"
    },
    {
        "name": "Lista mais g@y do Planeta Terra 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lista-mais-g-y-do-planeta-terra-2-0.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "Evil Cat Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evil-cat-laugh.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "calla cholo de mrd",
        "color": "rgb(255, 125, 51)",
        "mp3": "/media/sounds/calla-cholo-de-mrd_KCUi5V9.mp3"
    },
    {
        "name": "Ki Ki Ki Ma Ma Ma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
    },
    {
        "name": "Noli Void Rush 2",
        "color": "rgb(235, 98, 255)",
        "mp3": "/media/sounds/noli-void-rush-2.mp3"
    },
    {
        "name": "Ayy Chiquito",
        "color": "rgb(255, 160, 233)",
        "mp3": "/media/sounds/ayy-chiquito.mp3"
    },
    {
        "name": "Rupertgamingboy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rupertgamingboy_NQp7b9o.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "I have the power of god and anime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i_have_the_power_of_god_and_anime_on_my_side.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
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
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "Half Life 2 Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/half-life-2-death-sound.mp3"
    },
    {
        "name": "COCA COLA ESPUMA",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/coca-cola-espuma.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "The Boiled One Trumpet",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-trumpet.mp3"
    },
    {
        "name": "Lista mais g@y do Planeta Terra 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lista-mais-g-y-do-planeta-terra-2-0.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "calla cholo de mrd",
        "color": "rgb(255, 125, 51)",
        "mp3": "/media/sounds/calla-cholo-de-mrd_KCUi5V9.mp3"
    },
    {
        "name": "Ki Ki Ki Ma Ma Ma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
    },
    {
        "name": "\"I Want the Black Guy to Shut Up\"",
        "color": "rgb(227, 30, 23)",
        "mp3": "/media/sounds/i-want-the-black-guy-to-shut-up.mp3"
    },
    {
        "name": "Deltarune Dark Fountain Open",
        "color": "rgb(29, 14, 65)",
        "mp3": "/media/sounds/deltarune-dark-fountain-open.mp3"
    },
    {
        "name": "Noli Void Rush 2",
        "color": "rgb(235, 98, 255)",
        "mp3": "/media/sounds/noli-void-rush-2.mp3"
    },
    {
        "name": "Ayy Chiquito",
        "color": "rgb(255, 160, 233)",
        "mp3": "/media/sounds/ayy-chiquito.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
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
        "name": "Rap Air Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn_1.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "Fnaf phone guy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hiyyyya_2021_05_04_22_13_29_802.mp3"
    },
    {
        "name": "Half Life 2 Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/half-life-2-death-sound.mp3"
    },
    {
        "name": "COCA COLA ESPUMA",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/coca-cola-espuma.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "shine sound",
        "color": "rgb(104, 245, 255)",
        "mp3": "/media/sounds/anime-shine-sound-effect_QP4mAaX.mp3"
    },
    {
        "name": "the first note of megalovania",
        "color": "rgb(9, 112, 255)",
        "mp3": "/media/sounds/the-first-note-of-megalovania.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "e3lkjld;kfjlgkldkflkdlfkgdfg",
        "color": "rgb(255, 152, 0)",
        "mp3": "/media/sounds/e3lkjld-kfjlgkldkflkdlfkgdfg.mp3"
    },
    {
        "name": "Swoosh simple",
        "color": "rgb(93, 222, 255)",
        "mp3": "/media/sounds/transition-sound-effects-presented-by-mrsnooze-unknown-album-00-005-simple-swoosh.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "Dwayne Rock Johnson Eyebrow raise meme",
        "color": "rgb(5, 247, 255)",
        "mp3": "/media/sounds/dwayne-rock-johnson-eyebrow-raise-meme.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "shine sound",
        "color": "rgb(104, 245, 255)",
        "mp3": "/media/sounds/anime-shine-sound-effect_QP4mAaX.mp3"
    },
    {
        "name": "DKC2 - Kritter",
        "color": "rgb(89, 198, 26)",
        "mp3": "/media/sounds/kritter.mp3"
    },
    {
        "name": "the first note of megalovania",
        "color": "rgb(9, 112, 255)",
        "mp3": "/media/sounds/the-first-note-of-megalovania.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "Re: Zero - uueEEhuuuuhhhhhh",
        "color": "rgb(185, 243, 255)",
        "mp3": "/media/sounds/rezero-kara-hajimeru-isekai-seikatsu-creepy-sound_mMcw4Ln.mp3"
    },
    {
        "name": "Bone crack meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/bone-crack-meme.mp3"
    },
    {
        "name": "e3lkjld;kfjlgkldkflkdlfkgdfg",
        "color": "rgb(255, 152, 0)",
        "mp3": "/media/sounds/e3lkjld-kfjlgkldkflkdlfkgdfg.mp3"
    },
    {
        "name": "Dwayne Rock Johnson Eyebrow raise meme",
        "color": "rgb(5, 247, 255)",
        "mp3": "/media/sounds/dwayne-rock-johnson-eyebrow-raise-meme.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "We Can Be Bees",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/we-can-be-bees.mp3"
    },
    {
        "name": "The Boiled One Trumpet",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-trumpet.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "calla cholo de mrd",
        "color": "rgb(255, 125, 51)",
        "mp3": "/media/sounds/calla-cholo-de-mrd_KCUi5V9.mp3"
    },
    {
        "name": "Ki Ki Ki Ma Ma Ma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
    },
    {
        "name": "\"I Want the Black Guy to Shut Up\"",
        "color": "rgb(227, 30, 23)",
        "mp3": "/media/sounds/i-want-the-black-guy-to-shut-up.mp3"
    },
    {
        "name": "IT'S CLOBBERIN' TIME!!!",
        "color": "rgb(255, 143, 7)",
        "mp3": "/media/sounds/its-clobberin-time.mp3"
    },
    {
        "name": "fantastic four!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fantastic-four.mp3"
    },
    {
        "name": "Noli Void Rush 2",
        "color": "rgb(235, 98, 255)",
        "mp3": "/media/sounds/noli-void-rush-2.mp3"
    },
    {
        "name": "Ayy Chiquito",
        "color": "rgb(255, 160, 233)",
        "mp3": "/media/sounds/ayy-chiquito.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "YEETT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "femur breaker",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scp-containment-breach-femur-breaker-sounds-mp3cut.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Half Life 2 Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/half-life-2-death-sound.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "the first note of megalovania",
        "color": "rgb(9, 112, 255)",
        "mp3": "/media/sounds/the-first-note-of-megalovania.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "Re: Zero - uueEEhuuuuhhhhhh",
        "color": "rgb(185, 243, 255)",
        "mp3": "/media/sounds/rezero-kara-hajimeru-isekai-seikatsu-creepy-sound_mMcw4Ln.mp3"
    },
    {
        "name": "Bone crack meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/bone-crack-meme.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "e3lkjld;kfjlgkldkflkdlfkgdfg",
        "color": "rgb(255, 152, 0)",
        "mp3": "/media/sounds/e3lkjld-kfjlgkldkflkdlfkgdfg.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "We Can Be Bees",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/we-can-be-bees.mp3"
    },
    {
        "name": "The Boiled One Trumpet",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-trumpet.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "No creoooo!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp_5mlk5wd.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "calla cholo de mrd",
        "color": "rgb(255, 125, 51)",
        "mp3": "/media/sounds/calla-cholo-de-mrd_KCUi5V9.mp3"
    },
    {
        "name": "Ki Ki Ki Ma Ma Ma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
    },
    {
        "name": "\"I Want the Black Guy to Shut Up\"",
        "color": "rgb(227, 30, 23)",
        "mp3": "/media/sounds/i-want-the-black-guy-to-shut-up.mp3"
    },
    {
        "name": "Mambo曼波 诗歌剧Matikanetannhauser",
        "color": "rgb(255, 211, 172)",
        "mp3": "/media/sounds/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3"
    },
    {
        "name": "fantastic four!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fantastic-four.mp3"
    },
    {
        "name": "was geht yallah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/was-geht-yallah.mp3"
    },
    {
        "name": "Noli Void Rush 2",
        "color": "rgb(235, 98, 255)",
        "mp3": "/media/sounds/noli-void-rush-2.mp3"
    },
    {
        "name": "อย่าให้มีครั้งที่1-4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yaaaihmiikhrangthii1-4.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "Perry the Platypus",
        "color": "rgb(255, 162, 67)",
        "mp3": "/media/sounds/perry-the-platypuss-growl.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "/media/sounds/boing-sound.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "Пожарная тревога",
        "color": "rgb(184, 0, 0)",
        "mp3": "/media/sounds/pozharnaia-trevoga.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "\"Wow!\" (anime voice accent)",
        "color": "rgb(216, 114, 255)",
        "mp3": "/media/sounds/wow-anime-voice-accent.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "High value item BotW/TotK",
        "color": "rgb(255, 245, 99)",
        "mp3": "/media/sounds/high-value-item-botw-totk.mp3"
    },
    {
        "name": "Brainrot Phonk",
        "color": "rgb(25, 171, 38)",
        "mp3": "/media/sounds/brainrot-phonk.mp3"
    },
    {
        "name": "Soul Calibur V Upbeat Girl Moans",
        "color": "rgb(255, 192, 253)",
        "mp3": "/media/sounds/soul-calibur-v-upbeat-girl-moans.mp3"
    },
    {
        "name": "Normal Spamton's laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/normal-spamtons-laugh.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "baby crying phonk",
        "color": "rgb(39, 115, 255)",
        "mp3": "/media/sounds/baby-crying-phonk.mp3"
    },
    {
        "name": "Tá tão engraçado hoje seu filha duma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wndzp.mp3"
    },
    {
        "name": "SYFM (sped up + loud)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/syfm-sped-up-loud.mp3"
    },
    {
        "name": "HELLO MOTO ESTOURADO",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hello-moto-estourado.mp3"
    },
    {
        "name": "De kommer! Hjælp os! (Guts and Blackpowder)",
        "color": "rgb(91, 38, 38)",
        "mp3": "/media/sounds/de-kommer-hjaelp-os-guts-and-blackpowder.mp3"
    },
    {
        "name": "callese gay!!",
        "color": "rgb(226, 81, 255)",
        "mp3": "/media/sounds/callese-gay.mp3"
    },
    {
        "name": "PEGA O JACK",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pega-o-jack.mp3"
    },
    {
        "name": "Katon Gouka Mekkyaku",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katongoukamekkyaku.mp3"
    },
    {
        "name": "Kamehameha!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/kamehameha.swf.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "femur breaker",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scp-containment-breach-femur-breaker-sounds-mp3cut.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Half Life 2 Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/half-life-2-death-sound.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "the first note of megalovania",
        "color": "rgb(9, 112, 255)",
        "mp3": "/media/sounds/the-first-note-of-megalovania.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "Minecraft Hit Sound",
        "color": "rgb(236, 255, 154)",
        "mp3": "/media/sounds/y2mate_XL9ozUG.mp3"
    },
    {
        "name": "Skyrim NPC music - Harvest dawn",
        "color": "rgb(6, 40, 255)",
        "mp3": "/media/sounds/skyrim-npc-music-harvest-dawn.mp3"
    },
    {
        "name": "Re: Zero - uueEEhuuuuhhhhhh",
        "color": "rgb(185, 243, 255)",
        "mp3": "/media/sounds/rezero-kara-hajimeru-isekai-seikatsu-creepy-sound_mMcw4Ln.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "e3lkjld;kfjlgkldkflkdlfkgdfg",
        "color": "rgb(255, 152, 0)",
        "mp3": "/media/sounds/e3lkjld-kfjlgkldkflkdlfkgdfg.mp3"
    },
    {
        "name": "Aizen Yokoso Full",
        "color": "rgb(77, 243, 255)",
        "mp3": "/media/sounds/aizen-yokoso-full.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "Ghostly sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ghostly-sound.mp3"
    },
    {
        "name": "We Can Be Bees",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/we-can-be-bees.mp3"
    },
    {
        "name": "The Boiled One Trumpet",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-trumpet.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "Ai chavinho - completo",
        "color": "rgb(81, 255, 0)",
        "mp3": "/media/sounds/ai-chavinho-completo.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "No creoooo!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp_5mlk5wd.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "calla cholo de mrd",
        "color": "rgb(255, 125, 51)",
        "mp3": "/media/sounds/calla-cholo-de-mrd_KCUi5V9.mp3"
    },
    {
        "name": "\"I Want the Black Guy to Shut Up\"",
        "color": "rgb(227, 30, 23)",
        "mp3": "/media/sounds/i-want-the-black-guy-to-shut-up.mp3"
    },
    {
        "name": "Mambo曼波 诗歌剧Matikanetannhauser",
        "color": "rgb(255, 211, 172)",
        "mp3": "/media/sounds/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3"
    },
    {
        "name": "Noli Void Rush 2",
        "color": "rgb(235, 98, 255)",
        "mp3": "/media/sounds/noli-void-rush-2.mp3"
    },
    {
        "name": "oruam (ah oruam)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oruam-ah-oruam.mp3"
    },
    {
        "name": "อย่าให้มีครั้งที่1-4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yaaaihmiikhrangthii1-4.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Jurassic Park III Satellite Phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jurassic-park-iii-satellite-phone.mp3"
    },
    {
        "name": "go to sleep (real version)",
        "color": "rgb(0, 76, 255)",
        "mp3": "/media/sounds/go-to-sleep-real-version.mp3"
    },
    {
        "name": "godzilla muto roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla2014-all-muto-scenes-hd-1080p.mp3"
    },
    {
        "name": "packgodd",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgodd.mp3"
    },
    {
        "name": "Teto ok o-o-o-o",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/teto-ok-o-o-o-o.mp3"
    },
    {
        "name": "white lotus",
        "color": "rgb(30, 225, 255)",
        "mp3": "/media/sounds/white-lotus.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "Diarrhea",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diarrhea.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Hawk Tuah!",
        "color": "rgb(255, 234, 41)",
        "mp3": "/media/sounds/hawk-tuah_SRaUp2L.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "/media/sounds/disappear.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "You'll Never See it Coming (Persona 5)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/last-surprise.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "I can do anything Jevil",
        "color": "rgb(255, 238, 0)",
        "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
    },
    {
        "name": "get in loser we're going shopping",
        "color": "rgb(91, 9, 255)",
        "mp3": "/media/sounds/getinloser.mp3"
    },
    {
        "name": "A pia ta cheia de louça",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/se-eu-largar-o-freio-oficial.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "500 cigarettes",
        "color": "rgb(23, 113, 18)",
        "mp3": "/media/sounds/500-cigarettes.mp3"
    },
    {
        "name": "Por fin apareciste Malnacido -Picoro-",
        "color": "rgb(45, 127, 35)",
        "mp3": "/media/sounds/por-fin-apareciste-malnacido-picoro.mp3"
    },
    {
        "name": "moan100",
        "color": "rgb(28, 213, 255)",
        "mp3": "/media/sounds/moan100.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "Adriana salte",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adriana-salte_SQbOzXu.mp3"
    },
    {
        "name": "IT'S CLOBBERIN' TIME!!!",
        "color": "rgb(255, 143, 7)",
        "mp3": "/media/sounds/its-clobberin-time.mp3"
    },
    {
        "name": "te voy a dar un 10",
        "color": "rgb(145, 255, 35)",
        "mp3": "/media/sounds/te-voy-a-dar-un-10.mp3"
    },
    {
        "name": "Allahu Akbar Boom",
        "color": "rgb(37, 255, 12)",
        "mp3": "/media/sounds/allahu-akbar-boom_PDYICQl.mp3"
    },
    {
        "name": "LTG Noo-Fuck",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ltg-noo-fuck.mp3"
    },
    {
        "name": "เสียงน้าค้อม =w=",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_cBdlljd.mp3"
    },
    {
        "name": "Tired of winning!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tired-of-winning.mp3"
    },
    {
        "name": "Hands up, dont move!",
        "color": "rgb(0, 255, 89)",
        "mp3": "/media/sounds/hands-up-dont-move.mp3"
    },
    {
        "name": "In the end",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/in_the_end-mp3cut.mp3"
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
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Jeopardy Daily Double",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-daily-double-sound-effect-from-youtube_76mCCAq.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "Clash Royale Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-start-up-sound.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "Headshot cs go helmet sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bhit_helmet-1.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "Shotgun sound (Vanoss)",
        "color": "rgb(51, 0, 0)",
        "mp3": "/media/sounds/shotgun_blast-jim_rogers-1914772763.mp3"
    },
    {
        "name": "Movie Fart!",
        "color": "rgb(15, 59, 3)",
        "mp3": "/media/sounds/fart-sound-effect_C1IXpeL.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "romantic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/45_0HW2p0x.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "what the hell goofy ahh (slv_sounds)",
        "color": "rgb(248, 114, 255)",
        "mp3": "/media/sounds/what-the-hell-goofy-ahh-slv-sounds.mp3"
    },
    {
        "name": "OHH SHIT",
        "color": "rgb(4, 255, 231)",
        "mp3": "/media/sounds/tourettes-guy-oh-shit.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "Target Acquired Meme",
        "color": "rgb(58, 19, 255)",
        "mp3": "/media/sounds/target-acquired-meme.mp3"
    },
    {
        "name": "fnaf phone ringing sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-phone-ringing-sound.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "sadd rblx SE",
        "color": "rgb(235, 15, 255)",
        "mp3": "/media/sounds/sadd-rblx-se.mp3"
    },
    {
        "name": "Arcade Craniacs sfx lol",
        "color": "rgb(101, 0, 0)",
        "mp3": "/media/sounds/arcade-craniacs-sfx-lol.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "Lancer Laugh",
        "color": "rgb(50, 0, 255)",
        "mp3": "/media/sounds/lancer-laugh.mp3"
    },
    {
        "name": "N Word Rap",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/n-word-rap.mp3"
    },
    {
        "name": "Purge Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/purge_siren.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "Oh Baby A Triple",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-baby-a-triple.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "Trump- Don't Be Rude",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-dont-be-rude.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "money money money money",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/money-button.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "/media/sounds/gary_meow.mp3"
    },
    {
        "name": "Smack!",
        "color": "rgb(107, 165, 179)",
        "mp3": "/media/sounds/sharp-punch-soundbible.mp3"
    },
    {
        "name": "JJJ Jameson spiderman laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/j-jonah-jameson-laugh-spiderman.mp3"
    },
    {
        "name": "Cotton eye joe (nuggets)",
        "color": "rgb(255, 116, 29)",
        "mp3": "/media/sounds/cotton-eye-joe-nuggets.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "original fail horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-fail-fallo.mp3"
    },
    {
        "name": "raving rabbids - bwaaah",
        "color": "rgb(255, 102, 102)",
        "mp3": "/media/sounds/raving_rabbids.mp3"
    },
    {
        "name": "Discord spam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-spam.mp3"
    },
    {
        "name": "Hello im under the water",
        "color": "rgb(154, 250, 255)",
        "mp3": "/media/sounds/hello-im-under-the-water_4FMcD6D.mp3"
    },
    {
        "name": "Windows 7 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-7-startup.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "GGST_Counter!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ggst-counter.mp3"
    },
    {
        "name": "cry (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cry-roblox.mp3"
    },
    {
        "name": "zelda guardian",
        "color": "rgb(63, 10, 255)",
        "mp3": "/media/sounds/zelda-guardian.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "Followersound123",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/best-friends-v1_3Coc8NL.mp3"
    },
    {
        "name": "Puting Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/puting-loud.mp3"
    },
    {
        "name": "I can do anything Jevil",
        "color": "rgb(255, 238, 0)",
        "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
    },
    {
        "name": "Luigi - Oh Yeah",
        "color": "rgb(108, 255, 105)",
        "mp3": "/media/sounds/luigi-oh-yeah.mp3"
    },
    {
        "name": "Glass breaking_",
        "color": "rgb(167, 236, 255)",
        "mp3": "/media/sounds/breaking-glass-sound-effect-audiotrimmer.mp3"
    },
    {
        "name": "1500 es hora y media",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "Dallas Stars Goal Horn",
        "color": "rgb(4, 255, 0)",
        "mp3": "/media/sounds/dallas-stars-2020-goal-horn.mp3"
    },
    {
        "name": "Hava Nagila",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hava-nagila-1-hours-0.mp3"
    },
    {
        "name": "VA A JUGAR O QUE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/va-jugar-o-que.mp3"
    },
    {
        "name": "Que rricoh eh",
        "color": "rgb(49, 33, 33)",
        "mp3": "/media/sounds/que-rricoh-eh.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "500 cigarettes",
        "color": "rgb(23, 113, 18)",
        "mp3": "/media/sounds/500-cigarettes.mp3"
    },
    {
        "name": "kanye-east-fortnite-balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-east-fortnite-balls_NguabuF.mp3"
    },
    {
        "name": "Chili Chili Fart",
        "color": "rgb(41, 128, 24)",
        "mp3": "/media/sounds/chili-chili-fart_0ikahyN.mp3"
    },
    {
        "name": "Muhehehe",
        "color": "rgb(105, 20, 88)",
        "mp3": "/media/sounds/muhehehe.mp3"
    },
    {
        "name": "Wetin be this sound comedy by kenny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wetin-be-this-sound-comedy-by-kenny.mp3"
    },
    {
        "name": "Reverse Lancer Splat",
        "color": "rgb(12, 87, 167)",
        "mp3": "/media/sounds/reverse-lancer-splat.mp3"
    },
    {
        "name": "I wanna run away Roblox meme",
        "color": "rgb(160, 40, 255)",
        "mp3": "/media/sounds/i-wanna-run-away-roblox-meme.mp3"
    },
    {
        "name": "67",
        "color": "rgb(199, 255, 30)",
        "mp3": "/media/sounds/67_SQlv2Xv.mp3"
    },
    {
        "name": "a calamardo le gusta mi p1t0",
        "color": "rgb(96, 234, 255)",
        "mp3": "/media/sounds/a-calamardo-le-gusta-mi-p1t0.mp3"
    },
    {
        "name": "QUERO É SEXO",
        "color": "rgb(255, 40, 166)",
        "mp3": "/media/sounds/quero-e-sexo.mp3"
    },
    {
        "name": "Mamamarrano MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mamamarrano-mm.mp3"
    },
    {
        "name": "Sneaky Golem",
        "color": "rgb(69, 11, 120)",
        "mp3": "/media/sounds/sneaky-golem.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday and right now...",
        "color": "rgb(206, 255, 10)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday-and-right-now.mp3"
    },
    {
        "name": "que é isso moreno",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-isso-moreno.mp3"
    },
    {
        "name": "Jurassic Park III Satellite Phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jurassic-park-iii-satellite-phone.mp3"
    },
    {
        "name": "go to sleep (real version)",
        "color": "rgb(0, 76, 255)",
        "mp3": "/media/sounds/go-to-sleep-real-version.mp3"
    },
    {
        "name": "Mangekyo Sharingan activating",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonido-sharingan-activado.mp3"
    },
    {
        "name": "FBI OPEN UP (with breach explosion))",
        "color": "rgb(175, 176, 186)",
        "mp3": "/media/sounds/fbi-open-up_enBLcJv.mp3"
    },
    {
        "name": "Patricia Please!!!!!!!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patricia_qtv6S3s.mp3"
    },
    {
        "name": "city traffic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/city-car-horn-soundbible.mp3"
    },
    {
        "name": "Hands up, dont move!",
        "color": "rgb(0, 255, 89)",
        "mp3": "/media/sounds/hands-up-dont-move.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "Hallelujah",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/hallelujahshort.swf.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Vincent Price Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vincent_price_laugh.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "Africa crying laugh commercial",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/africa-crying-laugh-commercial.mp3"
    },
    {
        "name": "Awkward Pause (Anime Sounds)",
        "color": "rgb(79, 255, 123)",
        "mp3": "/media/sounds/awkward-pause-anime-sounds.mp3"
    },
    {
        "name": "(mafioso) here we go folks",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-here-we-go-folks.mp3"
    },
    {
        "name": "(mafioso) you won't live to see the next day",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-you-wont-live-to-see-the-next-day.mp3"
    },
    {
        "name": "N Word Rap",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/n-word-rap.mp3"
    },
    {
        "name": "Chit - Success",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chit-success.mp3"
    },
    {
        "name": "Booing From Crowd",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing-from-crowd_uhGsVPW.mp3"
    },
    {
        "name": "Hello Motherfucker! (kid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-motherfucker-kid.mp3"
    },
    {
        "name": "Пенис в рот",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/penis-v-rot.mp3"
    },
    {
        "name": "Steven Steven Steven Steven Steven",
        "color": "rgb(91, 91, 91)",
        "mp3": "/media/sounds/steven-steven-steven-steven-steven.mp3"
    },
    {
        "name": "i love you and i miss you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-you-and-i-miss-you.mp3"
    },
    {
        "name": "callese el hocico multimedios",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/callese-el-hocico-multimedios.mp3"
    },
    {
        "name": "im back baby",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/duke-nukem-forever-intro-opening-hd.mp3"
    },
    {
        "name": "voce era o meu duo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/voce-era-o-meu-duo.mp3"
    },
    {
        "name": "Jigglypuff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ibuttons-jigglypuff.mp3"
    },
    {
        "name": "Artic Italian Brainrot",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/artic-italian-brainrot.mp3"
    },
    {
        "name": "hot in here",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nelly-hot-in-herre-official-music-video-audiotrimmer.mp3"
    },
    {
        "name": "Filthy Monkeys",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/filthy-monkeys.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Stop it Get Some Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled3_13.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "nick eh 30 intro",
        "color": "rgb(37, 52, 255)",
        "mp3": "/media/sounds/nick-eh-30-intro.mp3"
    },
    {
        "name": "clash royale laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-laugh.mp3"
    },
    {
        "name": "FUNK FLEX BOMB",
        "color": "rgb(102, 153, 153)",
        "mp3": "/media/sounds/funkmaster-flex-bomb-sound-effect-from-youtube-by-offliberty.mp3"
    },
    {
        "name": "\"Hey\" Female Voice Sound Effect",
        "color": "rgb(20, 156, 255)",
        "mp3": "/media/sounds/hey-female-voice-sound-effect.mp3"
    },
    {
        "name": "Hello Mario",
        "color": "rgb(0, 170, 6)",
        "mp3": "/media/sounds/hello-mario-audiotrimmer.mp3"
    },
    {
        "name": "Air Raid Siren",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/air-raid_1.mp3"
    },
    {
        "name": "Caught a Pokemon!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/06-caught-a-pokemon.mp3"
    },
    {
        "name": "Mario Mushroom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super_mario_bros_mushroom_sound_effect_58k.mp3"
    },
    {
        "name": "Smack!",
        "color": "rgb(107, 165, 179)",
        "mp3": "/media/sounds/sharp-punch-soundbible.mp3"
    },
    {
        "name": "Lil Jon - whaaat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lil-jon-what.mp3"
    },
    {
        "name": "FNAF Honk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/partyfavorraspypart_ac01_3.mp3"
    },
    {
        "name": "Dang It Bobby",
        "color": "rgb(230, 255, 75)",
        "mp3": "/media/sounds/dang-it-bobby.mp3"
    },
    {
        "name": "(Anakin) LIAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "Turkey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/turkey-gobble-soundbible.mp3"
    },
    {
        "name": "dramatic cue A",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/dramatic-cue-a.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "Family Feud incorrect buzzer",
        "color": "rgb(8, 255, 185)",
        "mp3": "/media/sounds/the-family-feud-buzzer-sound-effect.mp3"
    },
    {
        "name": "Shots!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtone_8.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "And Its Gone (South Park)",
        "color": "rgb(174, 104, 31)",
        "mp3": "/media/sounds/and-its-gone_M8TWSoe.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Dallas Stars Goal Horn",
        "color": "rgb(4, 255, 0)",
        "mp3": "/media/sounds/dallas-stars-2020-goal-horn.mp3"
    },
    {
        "name": "One Piece OST Overtaken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-ost-overtaken.mp3"
    },
    {
        "name": "Moaningboys80231890",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moaningboys80231890.mp3"
    },
    {
        "name": "Friend inside me",
        "color": "rgb(255, 139, 0)",
        "mp3": "/media/sounds/friend-inside-me.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "Sybau",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sybau.mp3"
    },
    {
        "name": "Alex \"eu vou gozar\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alex-eu-vou-gozar.mp3"
    },
    {
        "name": "Peter eats snickers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/peter-eats-snickers.mp3"
    },
    {
        "name": "Warning Alarm",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/warning-alarm-sound-effect-2.mp3"
    },
    {
        "name": "Noli Taunt 2",
        "color": "rgb(95, 8, 84)",
        "mp3": "/media/sounds/noli-taunt-2.mp3"
    },
    {
        "name": "My name is bluduud",
        "color": "rgb(64, 103, 255)",
        "mp3": "/media/sounds/my-name-is-bluduud.mp3"
    },
    {
        "name": "labubu",
        "color": "rgb(115, 47, 12)",
        "mp3": "/media/sounds/labubu.mp3"
    },
    {
        "name": "Posso te ligar agora ou tua mulher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/5a1f6s4fads5f-copia_0FcOETT.mp3"
    },
    {
        "name": "Mentiras son todas mentiras",
        "color": "rgb(255, 211, 33)",
        "mp3": "/media/sounds/mentiras-son-todas-mentiras.mp3"
    },
    {
        "name": "Ta travaaando (Free Fire)",
        "color": "rgb(136, 255, 0)",
        "mp3": "/media/sounds/ta-travaaando-free-fire.mp3"
    },
    {
        "name": "Bem-vindo-ao-site",
        "color": "rgb(48, 247, 255)",
        "mp3": "/media/sounds/bem-vindo-ao-site_NVqk8hp.mp3"
    },
    {
        "name": "Mafioso (but new) - Your Mine!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-but-new-your-mine.mp3"
    },
    {
        "name": "Yol silindiriiiiiiğ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yol-silindiriiiiiig.mp3"
    },
    {
        "name": "Hands up, dont move!",
        "color": "rgb(0, 255, 89)",
        "mp3": "/media/sounds/hands-up-dont-move.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "slapped",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/slap_n1PUGaN.mp3"
    },
    {
        "name": "Cod Zombies Bye Bye",
        "color": "rgb(185, 131, 82)",
        "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
    },
    {
        "name": "Minecraft Grass Walking Sound Effect",
        "color": "rgb(0, 139, 23)",
        "mp3": "/media/sounds/minecraft-grass-walking-sound-effect.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "dramatic cue A",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/dramatic-cue-a.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "Dramatic Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dramatic-fart_f8Sw6fv.mp3"
    },
    {
        "name": "goofy mickey mouse laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-mickey-mouse-laugh.mp3"
    },
    {
        "name": "Minecraft door open",
        "color": "rgb(220, 173, 97)",
        "mp3": "/media/sounds/minecraft-door-open.mp3"
    },
    {
        "name": "Plants Vs Zombies Victory Jingle",
        "color": "rgb(23, 125, 0)",
        "mp3": "/media/sounds/plants-vs-zombies-victory-jingle.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "LET'S GO GAMBLING AW DANG IT",
        "color": "rgb(8, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling-aw-dang-it.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "Baby launghing bass boosted",
        "color": "rgb(160, 249, 255)",
        "mp3": "/media/sounds/baby-launghing-bass-boosted.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "CORRUPT NATURE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/corrupt-nature_WeP8qbw.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "bluudud ringtone",
        "color": "rgb(33, 237, 255)",
        "mp3": "/media/sounds/bluudud-ringtone.mp3"
    },
    {
        "name": "Германия",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/germaniia_yYPmHKl.mp3"
    },
    {
        "name": "HAYIR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hayir.mp3"
    },
    {
        "name": "kid - sybau",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kid-sybau.mp3"
    },
    {
        "name": "Gunshots Remix ~ Back It Up",
        "color": "rgb(138, 61, 255)",
        "mp3": "/media/sounds/gunshots-remix-back-it-up.mp3"
    },
    {
        "name": "De kommer! Hjælp os! (Guts and Blackpowder)",
        "color": "rgb(91, 38, 38)",
        "mp3": "/media/sounds/de-kommer-hjaelp-os-guts-and-blackpowder.mp3"
    },
    {
        "name": "ONE PIECE Cornered",
        "color": "rgb(255, 8, 251)",
        "mp3": "/media/sounds/one-piece-ost-cornered-raid-host.mp3"
    },
    {
        "name": "открой мне базу и верни мне брр бр бадабим",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/otkroi-mne-bazu-i-verni-mne-brr-br-badabim.mp3"
    },
    {
        "name": "Wow, what a great audience",
        "color": "rgb(0, 180, 255)",
        "mp3": "/media/sounds/wow-what-a-great-audience.mp3"
    },
    {
        "name": "Donkey Kong grito",
        "color": "rgb(149, 130, 81)",
        "mp3": "/media/sounds/dk-yell.mp3"
    },
    {
        "name": "on me ich bin tod Trymacs",
        "color": "rgb(135, 95, 255)",
        "mp3": "/media/sounds/on-me-ich-bin-tod-trymacs.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Kamehameha!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/kamehameha.swf.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "Keyboard Smashing Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/csgo-smashing-keyboard-sound-effect.mp3"
    },
    {
        "name": "angry birds theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-theme-song-audiotrimmer.mp3"
    },
    {
        "name": "raving rabbids - bwaaah",
        "color": "rgb(255, 102, 102)",
        "mp3": "/media/sounds/raving_rabbids.mp3"
    },
    {
        "name": "Discord spam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-spam.mp3"
    },
    {
        "name": "Hello im under the water",
        "color": "rgb(154, 250, 255)",
        "mp3": "/media/sounds/hello-im-under-the-water_4FMcD6D.mp3"
    },
    {
        "name": "Real Foghorn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/real-foghorn.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "Roblox Yummy",
        "color": "rgb(5, 182, 146)",
        "mp3": "/media/sounds/roblox-yummy.mp3"
    },
    {
        "name": "You'll Never See it Coming (Persona 5)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/last-surprise.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "zelda guardian",
        "color": "rgb(63, 10, 255)",
        "mp3": "/media/sounds/zelda-guardian.mp3"
    },
    {
        "name": "South Park - Wiener Chorus",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/my-song-32.mp3"
    },
    {
        "name": "Hank About to Buss",
        "color": "rgb(246, 140, 27)",
        "mp3": "/media/sounds/hank-about-to-buss.mp3"
    },
    {
        "name": "Puting Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/puting-loud.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "Ouch!",
        "color": "rgb(255, 12, 12)",
        "mp3": "/media/sounds/ouch_AKigkiF.mp3"
    },
    {
        "name": "Glass breaking_",
        "color": "rgb(167, 236, 255)",
        "mp3": "/media/sounds/breaking-glass-sound-effect-audiotrimmer.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "super mario 64 teleport sfx",
        "color": "rgb(226, 35, 52)",
        "mp3": "/media/sounds/super-mario-64-teleport-sfx.mp3"
    },
    {
        "name": "Que rricoh eh",
        "color": "rgb(49, 33, 33)",
        "mp3": "/media/sounds/que-rricoh-eh.mp3"
    },
    {
        "name": "Intro PH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/intro-ph.mp3"
    },
    {
        "name": "A risada do kiko",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-risada-do-kiko.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "Squeaky Clean",
        "color": "rgb(188, 255, 253)",
        "mp3": "/media/sounds/squeaky-clean.mp3"
    },
    {
        "name": "toma jack no ar condicionado ah jogando play 5",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toma-jack-no-ar-condicionado-ah-jogando-play-5.mp3"
    },
    {
        "name": "Adriana salte",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adriana-salte_SQbOzXu.mp3"
    },
    {
        "name": "I wanna run away Roblox meme",
        "color": "rgb(160, 40, 255)",
        "mp3": "/media/sounds/i-wanna-run-away-roblox-meme.mp3"
    },
    {
        "name": "do you wanna play minigames",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-you-wanna-play-minigames.mp3"
    },
    {
        "name": "Смехуятина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smekhuiatina.mp3"
    },
    {
        "name": "R6S LION SCAN",
        "color": "rgb(255, 255, 109)",
        "mp3": "/media/sounds/rainbow-six-siege-lion-drone-sound-old_wf8NBb9.mp3"
    },
    {
        "name": "Buenos días amigo amigazo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buenos-dias-amigo-amigazo.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
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
        "name": "Vincent Price Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vincent_price_laugh.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "Trump- Don't Be Rude",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-dont-be-rude.mp3"
    },
    {
        "name": "Mr Beast Phonk Meme",
        "color": "rgb(53, 12, 255)",
        "mp3": "/media/sounds/mr-beast-phonk-meme.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panic-button.mp3"
    },
    {
        "name": "Shield Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-shield-potion-fortnite-battle-royale-gaming-sound-effect-hd-sound-effects.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
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
        "name": "JJJ Jameson spiderman laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/j-jonah-jameson-laugh-spiderman.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Phone Ringing",
        "color": "rgb(0, 51, 51)",
        "mp3": "/media/sounds/ringing_phone-mike_koenig-1503628110.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "original fail horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-fail-fallo.mp3"
    },
    {
        "name": "Keyboard Smashing Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/csgo-smashing-keyboard-sound-effect.mp3"
    },
    {
        "name": "angry birds theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-theme-song-audiotrimmer.mp3"
    },
    {
        "name": "raving rabbids - bwaaah",
        "color": "rgb(255, 102, 102)",
        "mp3": "/media/sounds/raving_rabbids.mp3"
    },
    {
        "name": "Discord spam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-spam.mp3"
    },
    {
        "name": "Hello im under the water",
        "color": "rgb(154, 250, 255)",
        "mp3": "/media/sounds/hello-im-under-the-water_4FMcD6D.mp3"
    },
    {
        "name": "Real Foghorn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/real-foghorn.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Vincent Price Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vincent_price_laugh.mp3"
    },
    {
        "name": "Beedle - Thank you!",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/ww_beedle_thankyou.mp3"
    },
    {
        "name": "One Eternity Later",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/one-eternity-later.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Happy Birthday!",
        "color": "rgb(204, 255, 0)",
        "mp3": "/media/sounds/happy_birthday.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "Diarrhea",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diarrhea.mp3"
    },
    {
        "name": "GunShoting",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/gunshot.mp3"
    },
    {
        "name": "Who's That Pokemon!?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whos-that-pokemon_.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "You digging in me",
        "color": "rgb(68, 255, 140)",
        "mp3": "/media/sounds/you-digging-in-me.mp3"
    },
    {
        "name": "Enemy UAV (Warzone)",
        "color": "rgb(93, 136, 255)",
        "mp3": "/media/sounds/modern-warfare-_-enemy-uav-overhead-uk-team-leader.mp3"
    },
    {
        "name": "Hank Hill - Baja Blast",
        "color": "rgb(93, 255, 115)",
        "mp3": "/media/sounds/hank-hill-baja-blast.mp3"
    },
    {
        "name": "FLASHBANG CSGO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-flashbang-sound-effect-cs-go.mp3"
    },
    {
        "name": "fnaf 1 door",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-slamming-fnaf-1-sound-effects.mp3"
    },
    {
        "name": "Hank Hill BWAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hank-hill-bwah.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "Baldi Ruler Slap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ruler-slap.mp3"
    },
    {
        "name": "goofy-ah-laugh",
        "color": "rgb(168, 197, 255)",
        "mp3": "/media/sounds/goofy-ah-laugh.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "Cave Ambience 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave21.mp3"
    },
    {
        "name": "Kirby's Suction",
        "color": "rgb(255, 102, 255)",
        "mp3": "/media/sounds/suction.mp3"
    },
    {
        "name": "slapped",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/slap_n1PUGaN.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "/media/sounds/disappear.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "eeeeeeeeeeeeeeeeeeeeeee",
        "color": "rgb(160, 190, 255)",
        "mp3": "/media/sounds/internet-connecting.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "wake up meme",
        "color": "rgb(9, 9, 9)",
        "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "Peter Griffin: Oh my god who the hell cares?",
        "color": "rgb(155, 2, 2)",
        "mp3": "/media/sounds/peter-griffin-who-the-hell-cares.mp3"
    },
    {
        "name": "Who invited this kid?",
        "color": "rgb(0, 28, 255)",
        "mp3": "/media/sounds/video0-1-online-audio-converter_2i1mcmV.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Sad Piano",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/sad-piano.mp3"
    },
    {
        "name": "Nicki Minaj Roman Holiday",
        "color": "rgb(255, 2, 238)",
        "mp3": "/media/sounds/na-muh-ja-nuh-maja-naja.mp3"
    },
    {
        "name": "kamala harris- do not come",
        "color": "rgb(17, 50, 255)",
        "mp3": "/media/sounds/kamala-harris-do-not-come.mp3"
    },
    {
        "name": "You know what that means",
        "color": "rgb(146, 0, 0)",
        "mp3": "/media/sounds/you-know-what-that-means.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "BUSSSSS!!!!",
        "color": "rgb(206, 112, 255)",
        "mp3": "/media/sounds/busssss.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "SEGA! (HD)",
        "color": "rgb(0, 19, 255)",
        "mp3": "/media/sounds/sega-hd.mp3"
    },
    {
        "name": "Super Mario Beedoo (Normalized)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-beedoo-normalized.mp3"
    },
    {
        "name": "Rainbow Six Plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rainbow-six-siege-defuser-alarm-sfx-mp3cut.mp3"
    },
    {
        "name": "Ai que delicia mickey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ai-que-delicia-mickey.mp3"
    },
    {
        "name": "Pipipipi",
        "color": "rgb(59, 252, 255)",
        "mp3": "/media/sounds/pipipipi.mp3"
    },
    {
        "name": "goofy mickey mouse laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-mickey-mouse-laugh.mp3"
    },
    {
        "name": "Minecraft door open",
        "color": "rgb(220, 173, 97)",
        "mp3": "/media/sounds/minecraft-door-open.mp3"
    },
    {
        "name": "Plants Vs Zombies Victory Jingle",
        "color": "rgb(23, 125, 0)",
        "mp3": "/media/sounds/plants-vs-zombies-victory-jingle.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "Old Roblox Walk",
        "color": "rgb(84, 84, 84)",
        "mp3": "/media/sounds/old-roblox-walk.mp3"
    },
    {
        "name": "Bla Bla Ble Ble Blu Blu Blu Don pollo",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/bla-bla-ble-ble-blu-blu-blu-don-pollo.mp3"
    },
    {
        "name": "Olha a mensagem",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/olha-a-mensagem.mp3"
    },
    {
        "name": "Flashbang + Gah dayum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
    },
    {
        "name": "Rock sliding",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rock-sliding.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "c00lkidd [Come out]",
        "color": "rgb(179, 64, 64)",
        "mp3": "/media/sounds/c00lkidd-come-out.mp3"
    },
    {
        "name": "WE ARE FORSAKEN (clean as a whistle!)",
        "color": "rgb(32, 32, 32)",
        "mp3": "/media/sounds/we-are-forsaken-clean-as-a-whistle.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "DJ Scratch sound efff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-dj-scratch-sound-effect-1.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "simp over girls on discord",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/simp-over-girls-on-discord.mp3"
    },
    {
        "name": "eeeeeeeeeeeeeeeeeeeeeee",
        "color": "rgb(160, 190, 255)",
        "mp3": "/media/sounds/internet-connecting.mp3"
    },
    {
        "name": "BIDEN BLAST",
        "color": "rgb(94, 255, 236)",
        "mp3": "/media/sounds/biden-blast.mp3"
    },
    {
        "name": "wake up meme",
        "color": "rgb(9, 9, 9)",
        "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "Peter Griffin: Oh my god who the hell cares?",
        "color": "rgb(155, 2, 2)",
        "mp3": "/media/sounds/peter-griffin-who-the-hell-cares.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Nicki Minaj Roman Holiday",
        "color": "rgb(255, 2, 238)",
        "mp3": "/media/sounds/na-muh-ja-nuh-maja-naja.mp3"
    },
    {
        "name": "kamala harris- do not come",
        "color": "rgb(17, 50, 255)",
        "mp3": "/media/sounds/kamala-harris-do-not-come.mp3"
    },
    {
        "name": "You know what that means",
        "color": "rgb(146, 0, 0)",
        "mp3": "/media/sounds/you-know-what-that-means.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "BUSSSSS!!!!",
        "color": "rgb(206, 112, 255)",
        "mp3": "/media/sounds/busssss.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "SEGA! (HD)",
        "color": "rgb(0, 19, 255)",
        "mp3": "/media/sounds/sega-hd.mp3"
    },
    {
        "name": "Super Mario Beedoo (Normalized)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-beedoo-normalized.mp3"
    },
    {
        "name": "Rainbow Six Plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rainbow-six-siege-defuser-alarm-sfx-mp3cut.mp3"
    },
    {
        "name": "Ai que delicia mickey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ai-que-delicia-mickey.mp3"
    },
    {
        "name": "Pipipipi",
        "color": "rgb(59, 252, 255)",
        "mp3": "/media/sounds/pipipipi.mp3"
    },
    {
        "name": "Stitch - Hiii",
        "color": "rgb(65, 173, 255)",
        "mp3": "/media/sounds/stitchs-speaking-moments-oh-my-disney-mp3cut.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "Legends Arceus Shiny Noise",
        "color": "rgb(93, 137, 255)",
        "mp3": "/media/sounds/legends-arceus-shiny-noise.mp3"
    },
    {
        "name": "goofy mickey mouse laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-mickey-mouse-laugh.mp3"
    },
    {
        "name": "Minecraft door open",
        "color": "rgb(220, 173, 97)",
        "mp3": "/media/sounds/minecraft-door-open.mp3"
    },
    {
        "name": "Plants Vs Zombies Victory Jingle",
        "color": "rgb(23, 125, 0)",
        "mp3": "/media/sounds/plants-vs-zombies-victory-jingle.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "Bla Bla Ble Ble Blu Blu Blu Don pollo",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/bla-bla-ble-ble-blu-blu-blu-don-pollo.mp3"
    },
    {
        "name": "Olha a mensagem",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/olha-a-mensagem.mp3"
    },
    {
        "name": "Flashbang + Gah dayum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
    },
    {
        "name": "Rock sliding",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rock-sliding.mp3"
    },
    {
        "name": "Borat - Wawaweewa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/borat-wawaweewa.mp3"
    },
    {
        "name": "FAWK you mean!!!",
        "color": "rgb(245, 255, 26)",
        "mp3": "/media/sounds/fawk-you-mean.mp3"
    },
    {
        "name": "HAYIR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hayir.mp3"
    },
    {
        "name": "golpe en la cara",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/golpe-en-la-cara.mp3"
    },
    {
        "name": "gemidos hd",
        "color": "rgb(255, 48, 165)",
        "mp3": "/media/sounds/gemidos-hd.mp3"
    },
    {
        "name": "Tiroteio de piroca",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tiroteio-de-piroca.mp3"
    },
    {
        "name": "Kids saying yay",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_xryiS4g.mp3"
    },
    {
        "name": "Bf beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bf-beep.mp3"
    },
    {
        "name": "mexico sin hambre",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mexico-sin-hambre.mp3"
    },
    {
        "name": "Favor de guardar silencio MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/favor-de-guardar-silencio-mm.mp3"
    },
    {
        "name": "JUSTIN BIEBER (MULTIMEDIOS)",
        "color": "rgb(48, 255, 255)",
        "mp3": "/media/sounds/justin-bieber-multimedios.mp3"
    },
    {
        "name": "открой мне базу и верни мне брр бр бадабим",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/otkroi-mne-bazu-i-verni-mne-brr-br-badabim.mp3"
    },
    {
        "name": "El diablo, que malditos tenis",
        "color": "rgb(0, 255, 191)",
        "mp3": "/media/sounds/el-diablo-que-malditos-tenis.mp3"
    },
    {
        "name": "Trust me bro, no one's gonna jump here",
        "color": "rgb(29, 153, 255)",
        "mp3": "/media/sounds/trust-me-bro-no-ones-gonna-jump-here.mp3"
    },
    {
        "name": "FOCKING MEOWW",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/fockin-meowwww.mp3"
    },
    {
        "name": "the office nsfw",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-office-nsfw.mp3"
    },
    {
        "name": "fairy tail wow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-tail-wow.mp3"
    },
    {
        "name": "Let Him Cook Halo",
        "color": "rgb(132, 0, 0)",
        "mp3": "/media/sounds/let-him-cook-halo.mp3"
    },
    {
        "name": "lato lato",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lato-lato.mp3"
    },
    {
        "name": "ümidi noluyo lan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/umidi-noluyo-lan.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Crab Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/original_zeowGW1.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "holy moly emoji",
        "color": "rgb(255, 238, 128)",
        "mp3": "/media/sounds/holy-moly-emoji.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "NINJA FORTNITE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ninja_fLDiDns.mp3"
    },
    {
        "name": "Spooky scary skeletons",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spooky-scary-skeleton_WnTSX24.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "I’m Mafioso-ing It",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/im-mafioso-ing-it.mp3"
    },
    {
        "name": "Diablo 1 Fresh Meat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/butcher_0NJLHCd.mp3"
    },
    {
        "name": "Tai Lung - Como não posso?",
        "color": "rgb(255, 128, 30)",
        "mp3": "/media/sounds/tai-lung-como-nao-posso_NrQYPc2.mp3"
    },
    {
        "name": "Beavis and butthead",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/beavis-and-butthead-laughing.mp3"
    },
    {
        "name": "Squid game vote X",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squid-game-vote-x_t50fLRy.mp3"
    },
    {
        "name": "Borat - Wawaweewa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/borat-wawaweewa.mp3"
    },
    {
        "name": "DRIVING IN MY CAR (asgore BASS BOOST",
        "color": "rgb(238, 255, 0)",
        "mp3": "/media/sounds/driving-in-my-car-asgore-bass-boost.mp3"
    },
    {
        "name": "Crazy Train 23 secs",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ozzy-osbourne-crazytrain-lyrics_2.mp3"
    },
    {
        "name": "oruam (ah oruam)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oruam-ah-oruam.mp3"
    },
    {
        "name": "Freefire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/weaponsfree2d.mp3"
    },
    {
        "name": "sitcom ooh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-ooh.mp3"
    },
    {
        "name": "QUE SE ENCUERE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/que-se-encuere.mp3"
    },
    {
        "name": "Tá bom, vc fala demais",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ta-bom-vc-fala-demais.mp3"
    },
    {
        "name": "Enmicalo MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/enmicalo-mm.mp3"
    },
    {
        "name": "Brock Lesnar Theme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brock-lesnar-next-big-thing-official-theme_cut_part1_cut_part1.mp3"
    },
    {
        "name": "Já que me ensinou a beber",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ja-que-me-ensinou-a-beber.mp3"
    },
    {
        "name": "Jet 2 holidayyyyyyyyyyy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jet-2-holidayyyyyyyyyyy.mp3"
    },
    {
        "name": "อย่าให้มีครั้งที่1-4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yaaaihmiikhrangthii1-4.mp3"
    },
    {
        "name": "B*TCH, I LOVE YOU!",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/tourettes_guy-notification_sound-1060005.mp3"
    },
    {
        "name": "Impressive C0ck - Keanu Reeves",
        "color": "rgb(158, 31, 255)",
        "mp3": "/media/sounds/y2mate_B3BhLwb.mp3"
    },
    {
        "name": "Do you even know how fucked you are? Dozer",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/do-you-even-know-how-fucked-you-are-dozer.mp3"
    },
    {
        "name": "Runescape damage updated",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/runescape-damage-updated.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "LOOK AT THIS DUDE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lol_33.mp3"
    },
    {
        "name": "illuminati Confirmed",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/x-files-theme-song-copy.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Donald Trump: Build a wall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i_will_build_a_great_great_wall_on_our_southern_bo.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "Cartoon Chase",
        "color": "rgb(24, 255, 32)",
        "mp3": "/media/sounds/chase_QnUxJTk.mp3"
    },
    {
        "name": "Police radio beep",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/police-beep.mp3"
    },
    {
        "name": "Trump China",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/china_pH6AIw0.mp3"
    },
    {
        "name": "Toasty mortal kombat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toasty_tfCWsU6.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "GANGNAM STYLE",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/psy-gangnam-style-1.mp3"
    },
    {
        "name": "SpongeBob levitating meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-levitating-meme.mp3"
    },
    {
        "name": "NFL on Fox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-on-fox-theme-music.mp3"
    },
    {
        "name": "RONALDO SIUUUU",
        "color": "rgb(46, 138, 255)",
        "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
    },
    {
        "name": "Squeaky dog toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dogs_squeaky_toy_sound_effectmp3converter.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "DOOR STUCK! DOOR STUCK!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-stuck-door-stuck.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "AWP CSGO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cs_go-awp-sound.mp3"
    },
    {
        "name": "Minecraft Zombie Bruh",
        "color": "rgb(5, 179, 0)",
        "mp3": "/media/sounds/minecraft-zombie-bruh-sound-effect-1.mp3"
    },
    {
        "name": "clown horn short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-short.mp3"
    },
    {
        "name": "Crowd Boo",
        "color": "rgb(204, 0, 204)",
        "mp3": "/media/sounds/crowd-boo.mp3"
    },
    {
        "name": "Undertale Savepoint",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/savepoint.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "ksi lol",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/ksi-lol.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "Blood Splatter",
        "color": "rgb(53, 70, 255)",
        "mp3": "/media/sounds/blood-splatter.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "Rob Schneider \"You can do it!\"",
        "color": "rgb(0, 202, 35)",
        "mp3": "/media/sounds/you-can-do-it.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Angel choir with sound effect",
        "color": "rgb(229, 255, 215)",
        "mp3": "/media/sounds/angelchoirmarktreekort.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Weapon gun pickup sound Half Life Counter Strike",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/weapon-gun-pickup-sound-half-life-counter-strike.mp3"
    },
    {
        "name": "Rob Schneider \"You can do it!\"",
        "color": "rgb(0, 202, 35)",
        "mp3": "/media/sounds/you-can-do-it.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Angel choir with sound effect",
        "color": "rgb(229, 255, 215)",
        "mp3": "/media/sounds/angelchoirmarktreekort.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Weapon gun pickup sound Half Life Counter Strike",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/weapon-gun-pickup-sound-half-life-counter-strike.mp3"
    },
    {
        "name": "Herbert The Pervert 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/guess_who_family_guy-ee75b84a-4a04-3a30-951f-0230b804dc8e.mp3"
    },
    {
        "name": "Mike Breen Bang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikebreenbang.mp3"
    },
    {
        "name": "tf2 spy your mother",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpg2gsf9r9.mp3"
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
        "name": "KNOCK KNOCK MF ITS UNITED STATES OF AMERICA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/knock-knock-mf-its-united-states-of-america.mp3"
    },
    {
        "name": "im about to bust!",
        "color": "rgb(254, 255, 248)",
        "mp3": "/media/sounds/im-about-to-bust.mp3"
    },
    {
        "name": "Mario Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-scream-sound-effect.mp3"
    },
    {
        "name": "Horse Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-sound.mp3"
    },
    {
        "name": "do you wanna play a game(Saw)",
        "color": "rgb(255, 5, 5)",
        "mp3": "/media/sounds/do-you-wanna-play-a-game-saw.mp3"
    },
    {
        "name": "huh? rblx SE",
        "color": "rgb(224, 255, 234)",
        "mp3": "/media/sounds/huh-rblx-se.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "GET THE F OUT OF MY ROOM IM PLAYING MINECRAFT!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-the-f-out-of-my-room-im-playing-minecraft.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "erm what the sigma (full)",
        "color": "rgb(27, 15, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma-full.mp3"
    },
    {
        "name": "VHS noise",
        "color": "rgb(64, 129, 146)",
        "mp3": "/media/sounds/vhs-noise.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "Goo goo Gaga (DOLL)",
        "color": "rgb(65, 255, 246)",
        "mp3": "/media/sounds/goo-goo-gaga-doll.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "Pretty little baby",
        "color": "rgb(162, 255, 187)",
        "mp3": "/media/sounds/pretty-little-baby.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "Exhausted? Tired. Want rest? Hungry. Want out?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exhausted-tired-want-rest-hungry-want-out.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Lost beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/timer_beep.mp3"
    },
    {
        "name": "Squid Game Tone",
        "color": "rgb(255, 65, 120)",
        "mp3": "/media/sounds/squid-game-tone.mp3"
    },
    {
        "name": "QUE RICO DAMELO",
        "color": "rgb(48, 255, 129)",
        "mp3": "/media/sounds/que-rico-damelo_2n6gvwY.mp3"
    },
    {
        "name": "Limbus Don Beach Volleyball",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limbus-don-beach-volleyball.mp3"
    },
    {
        "name": "Cod Zombies 40",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/40_xRrYB5Q.mp3"
    },
    {
        "name": "Supercell intro sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/supercell-intro-sound.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "Rob Schneider \"You can do it!\"",
        "color": "rgb(0, 202, 35)",
        "mp3": "/media/sounds/you-can-do-it.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "Bomb Explosion With Whistle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bomb-explosion-with-whistle.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Angel choir with sound effect",
        "color": "rgb(229, 255, 215)",
        "mp3": "/media/sounds/angelchoirmarktreekort.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    },
    {
        "name": "Weapon gun pickup sound Half Life Counter Strike",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/weapon-gun-pickup-sound-half-life-counter-strike.mp3"
    },
    {
        "name": "Herbert The Pervert 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/guess_who_family_guy-ee75b84a-4a04-3a30-951f-0230b804dc8e.mp3"
    },
    {
        "name": "Mike Breen Bang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mikebreenbang.mp3"
    },
    {
        "name": "tf2 spy your mother",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpg2gsf9r9.mp3"
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
        "name": "KNOCK KNOCK MF ITS UNITED STATES OF AMERICA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/knock-knock-mf-its-united-states-of-america.mp3"
    },
    {
        "name": "im about to bust!",
        "color": "rgb(254, 255, 248)",
        "mp3": "/media/sounds/im-about-to-bust.mp3"
    },
    {
        "name": "Mario Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-scream-sound-effect.mp3"
    },
    {
        "name": "Horse Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-sound.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "do you wanna play a game(Saw)",
        "color": "rgb(255, 5, 5)",
        "mp3": "/media/sounds/do-you-wanna-play-a-game-saw.mp3"
    },
    {
        "name": "huh? rblx SE",
        "color": "rgb(224, 255, 234)",
        "mp3": "/media/sounds/huh-rblx-se.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "GET THE F OUT OF MY ROOM IM PLAYING MINECRAFT!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-the-f-out-of-my-room-im-playing-minecraft.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "erm what the sigma (full)",
        "color": "rgb(27, 15, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma-full.mp3"
    },
    {
        "name": "VHS noise",
        "color": "rgb(64, 129, 146)",
        "mp3": "/media/sounds/vhs-noise.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "Goo goo Gaga (DOLL)",
        "color": "rgb(65, 255, 246)",
        "mp3": "/media/sounds/goo-goo-gaga-doll.mp3"
    },
    {
        "name": "Cursed plankton",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cursed-plankton.mp3"
    },
    {
        "name": "Clown Horn Honks",
        "color": "rgb(224, 18, 18)",
        "mp3": "/media/sounds/clown-horn-honks.mp3"
    },
    {
        "name": "IM TELLING DAD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-telling-dad.mp3"
    },
    {
        "name": "Spongebob n word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-n-word.mp3"
    },
    {
        "name": "Wake TF Up Semi Truck Horn",
        "color": "rgb(90, 255, 177)",
        "mp3": "/media/sounds/wake-tf-up-semi-truck-horn.mp3"
    },
    {
        "name": "Pretty little baby",
        "color": "rgb(162, 255, 187)",
        "mp3": "/media/sounds/pretty-little-baby.mp3"
    },
    {
        "name": "fairy sparkle",
        "color": "rgb(245, 63, 255)",
        "mp3": "/media/sounds/fairy-sparkle.mp3"
    },
    {
        "name": "(Mafioso) we are soldiers",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-we-are-soldiers.mp3"
    },
    {
        "name": "Exhausted? Tired. Want rest? Hungry. Want out?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exhausted-tired-want-rest-hungry-want-out.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Lost beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/timer_beep.mp3"
    },
    {
        "name": "Squid Game Tone",
        "color": "rgb(255, 65, 120)",
        "mp3": "/media/sounds/squid-game-tone.mp3"
    },
    {
        "name": "QUE RICO DAMELO",
        "color": "rgb(48, 255, 129)",
        "mp3": "/media/sounds/que-rico-damelo_2n6gvwY.mp3"
    },
    {
        "name": "Limbus Don Beach Volleyball",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/limbus-don-beach-volleyball.mp3"
    },
    {
        "name": "Cod Zombies 40",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/40_xRrYB5Q.mp3"
    },
    {
        "name": "Supercell intro sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/supercell-intro-sound.mp3"
    },
    {
        "name": "Noli outro",
        "color": "rgb(84, 18, 89)",
        "mp3": "/media/sounds/noli-outro.mp3"
    },
    {
        "name": "Noli2",
        "color": "rgb(141, 20, 255)",
        "mp3": "/media/sounds/noli2.mp3"
    },
    {
        "name": "Stupid 69",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-not-gonna-let-you-get-the-chance-audiotrimmer.mp3"
    },
    {
        "name": "Zé da Manga",
        "color": "rgb(194, 42, 255)",
        "mp3": "/media/sounds/ze-da-manga_G3QwWGi.mp3"
    },
    {
        "name": "OOHHHHHH GET ROASTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oohhhhhh-get-roasted.mp3"
    },
    {
        "name": "mini pekka",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mini-pekka.mp3"
    },
    {
        "name": "Cállese o lo meo",
        "color": "rgb(92, 33, 255)",
        "mp3": "/media/sounds/callese-o-lo-meo.mp3"
    },
    {
        "name": "Woof Intesifies",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dogtrill.mp3"
    },
    {
        "name": "EU VOU DIRIGIR DEPOIS DE BEBER",
        "color": "rgb(255, 218, 56)",
        "mp3": "/media/sounds/eu-vou-dirigir-depois-de-beber.mp3"
    },
    {
        "name": "Bankai Byakuya",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bankai-byakuya.mp3"
    },
    {
        "name": "Grilled cheese Obama sandwich",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grilled-cheese-obama-sandwich.mp3"
    },
    {
        "name": "WHO LET TEH DOGS OUT??",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/who-let-the-dogs-out-song.mp3"
    },
    {
        "name": "Cyberpunk Alert Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbcreux4l.mp3"
    },
    {
        "name": "Gemi 2 remix",
        "color": "rgb(255, 246, 227)",
        "mp3": "/media/sounds/gemi-2-remix.mp3"
    },
    {
        "name": "Sirene da escola",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sirene-da-escola.mp3"
    },
    {
        "name": "O homem Uma máquina Uma besta enjaulada",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/o-homem-uma-maquina-uma-besta-enjaulada.mp3"
    },
    {
        "name": "The Cream Rise - Macho Man",
        "color": "rgb(254, 255, 213)",
        "mp3": "/media/sounds/the-cream-rise-macho-man.mp3"
    },
    {
        "name": "Guts theme short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/donation-sound_0kcLd8r.mp3"
    },
    {
        "name": "wubbawubawobobwaboulobobelwabbawubbawob",
        "color": "rgb(208, 206, 255)",
        "mp3": "/media/sounds/wubbawubawobobwaboulobobelwabbawubbawob.mp3"
    },
    {
        "name": "PEGUE NA MINHA POMBAAAAAAAAAAAA ESTOURADO",
        "color": "rgb(57, 230, 190)",
        "mp3": "/media/sounds/pegue-na-minha-pombaaaaaaaaaaaa-estourado.mp3"
    },
    {
        "name": "Is Garbage !",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/is-garbage.mp3"
    },
    {
        "name": "Bolsonaro Popcorn and Ice Cream",
        "color": "rgb(255, 113, 223)",
        "mp3": "/media/sounds/bolsonaro-popcorn-and-ice-cream.mp3"
    },
    {
        "name": "is your baby crying? (low quality)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/is-your-baby-crying-low-quality.mp3"
    },
    {
        "name": "susto funk estourado",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/susto-funk-estourado.mp3"
    },
    {
        "name": "аллах",
        "color": "rgb(215, 12, 255)",
        "mp3": "/media/sounds/allakh.mp3"
    },
    {
        "name": "Regirock sound 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/regirock-sound-2.mp3"
    },
    {
        "name": "I want Spiderman!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/i-want-spiderman.mp3"
    },
    {
        "name": "One piece angry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-angry.mp3"
    },
    {
        "name": "clip - Mission Impossible Theme",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/music-missionimpossibletheme.mp3"
    },
    {
        "name": "McCree's Ultimate Overwatch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/overwatch-mccrees-ultimate-its-high-noon.mp3"
    },
    {
        "name": "I love my daddy, my super hero",
        "color": "rgb(69, 255, 66)",
        "mp3": "/media/sounds/i-love-my-daddy-my-super-hero.mp3"
    },
    {
        "name": "Jhon Cena Troll",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/john-cena-troll-edit-from-youtube.mp3"
    },
    {
        "name": "Dog of wisdom 12",
        "color": "rgb(255, 34, 255)",
        "mp3": "/media/sounds/dog-of-wisdom-12.mp3"
    },
    {
        "name": "Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evillaugh.swf.mp3"
    },
    {
        "name": "I'm Batman",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/im-batman.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "i like turtles",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/i-like-turtles.mp3"
    },
    {
        "name": "THATS A LOT OF DAMAGE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/now-thats.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "Kendrick Mustard",
        "color": "rgb(255, 249, 76)",
        "mp3": "/media/sounds/kendrick-mustard.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/headshot_1.mp3"
    },
    {
        "name": "hey_its_me_goku",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-its-me-goku.mp3"
    },
    {
        "name": "lol mising ping",
        "color": "rgb(255, 30, 30)",
        "mp3": "/media/sounds/ping_missing.mp3"
    },
    {
        "name": "Let's do this! (COD4)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lets-do-this.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "Women haha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/women-haha.mp3"
    },
    {
        "name": "GERMAN SPONGEBOB (LOUD AF)",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/german-spongebob.mp3"
    },
    {
        "name": "Mexican trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/el-batido.mp3"
    },
    {
        "name": "Finding nemo-Mine Mine Mine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mine-mine_Z6BwRzI.mp3"
    },
    {
        "name": "So Long Gay Bowser",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sm64_mario_so_long_bowser_LjCg641.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "psst (roblox doors)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psst-roblox-doors.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/falling.mp3"
    },
    {
        "name": "Talking Ben saying Yes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-saying-yes.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "/media/sounds/villager.mp3"
    },
    {
        "name": "Minecraft sheep",
        "color": "rgb(255, 119, 165)",
        "mp3": "/media/sounds/minecraft-sheep2.mp3"
    },
    {
        "name": "Kendrick Lamar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kendrick-lamar-screaming.mp3"
    },
    {
        "name": "twitch bits",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/twitch-bits-donation-sound-effect-sfx.mp3"
    },
    {
        "name": "BIDEN BLAST",
        "color": "rgb(94, 255, 236)",
        "mp3": "/media/sounds/biden-blast.mp3"
    },
    {
        "name": "Bamboo hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bamboo-hit-sound-effect.mp3"
    },
    {
        "name": "scary movie wazzup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-movie-wazzup.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "YOU MUST DIE",
        "color": "rgb(204, 51, 51)",
        "mp3": "/media/sounds/you-must-die.mp3"
    },
    {
        "name": "Cartoon Boing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing.mp3"
    },
    {
        "name": "ScaryScream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-scream-soundbible.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Let's Go Girls Sound",
        "color": "rgb(255, 172, 237)",
        "mp3": "/media/sounds/lets-go-girls-sound.mp3"
    },
    {
        "name": "Halo 1 Double Kill",
        "color": "rgb(137, 160, 120)",
        "mp3": "/media/sounds/halo-1-double-kill.mp3"
    },
    {
        "name": "squeaky",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeaky-noise-sound-effect-free-download-link-in-bio-hd.mp3"
    },
    {
        "name": "BUSSSSS!!!!",
        "color": "rgb(206, 112, 255)",
        "mp3": "/media/sounds/busssss.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "FNaF 2 jumpscare",
        "color": "rgb(59, 248, 255)",
        "mp3": "/media/sounds/fnaf-2-death-scream.mp3"
    },
    {
        "name": "Access Denied",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/access-denied_Is238Ly.mp3"
    },
    {
        "name": "AirPods Low Battery Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/airpods-low-battery-sound-effect_daDRTyp.mp3"
    },
    {
        "name": "im just a baby",
        "color": "rgb(14, 255, 212)",
        "mp3": "/media/sounds/im-just-a-baby.mp3"
    },
    {
        "name": "Super Mario Beedoo (Normalized)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-beedoo-normalized.mp3"
    },
    {
        "name": "Rainbow Six Plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rainbow-six-siege-defuser-alarm-sfx-mp3cut.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "man eating pickle",
        "color": "rgb(20, 255, 105)",
        "mp3": "/media/sounds/man-eating-pickle.mp3"
    },
    {
        "name": "Weapon gun pickup sound Half Life Counter Strike",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/weapon-gun-pickup-sound-half-life-counter-strike.mp3"
    },
    {
        "name": "yeaa! rblx SE",
        "color": "rgb(213, 255, 25)",
        "mp3": "/media/sounds/yeaa-rblx-se.mp3"
    },
    {
        "name": "TF2 Spy Death Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tf2-spy-death-scream.mp3"
    },
    {
        "name": "Bob Esponja - Fail Sound",
        "color": "rgb(207, 255, 0)",
        "mp3": "/media/sounds/bob-esponja-fail-sound.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "Legends Arceus Shiny Noise",
        "color": "rgb(93, 137, 255)",
        "mp3": "/media/sounds/legends-arceus-shiny-noise.mp3"
    },
    {
        "name": "Negro you gay boondocks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/negro-you-gay-boondocks.mp3"
    },
    {
        "name": "Minecraft door open",
        "color": "rgb(220, 173, 97)",
        "mp3": "/media/sounds/minecraft-door-open.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Hindi Totoo Yan - BABALU",
        "color": "rgb(17, 255, 255)",
        "mp3": "/media/sounds/hindi-totoo-yan-babalu.mp3"
    },
    {
        "name": "Bla Bla Ble Ble Blu Blu Blu Don pollo",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/bla-bla-ble-ble-blu-blu-blu-don-pollo.mp3"
    },
    {
        "name": "yoooooooooooo",
        "color": "rgb(26, 30, 255)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4_objp8XX.mp3"
    }
]