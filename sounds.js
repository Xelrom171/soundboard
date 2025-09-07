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
    [{
            "name": "VINE BOOM SOUND",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/vine-boom.mp3"
        },
        {
            "name": "LIZARD BUTTON",
            "color": "rgb(127, 168, 255)",
            "mp3": "/media/sounds/lizard-button.mp3"
        },
        {
            "name": "Among Us role reveal sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
        },
        {
            "name": "Fart",
            "color": "rgb(102, 51, 0)",
            "mp3": "/media/sounds/dry-fart.mp3"
        },
        {
            "name": "rizz sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rizz-sound-effect.mp3"
        },
        {
            "name": "Fahhh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fahhh_KcgAXfs.mp3"
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
            "name": "Tuco: GET OUT",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tuco-get-out.mp3"
        },
        {
            "name": "SpongeBob Fail",
            "color": "rgb(202, 195, 26)",
            "mp3": "/media/sounds/spongebob-fail.mp3"
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
            "name": "baby laughing meme",
            "color": "rgb(0, 233, 255)",
            "mp3": "/media/sounds/baby-laughing-meme.mp3"
        },
        {
            "name": "Sad Violin (the meme one)",
            "color": "rgb(0, 255, 51)",
            "mp3": "/media/sounds/tf_nemesis.mp3"
        },
        {
            "name": "Звук литвина",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/zvuk-litvina.mp3"
        },
        {
            "name": "6'7",
            "color": "rgb(196, 255, 183)",
            "mp3": "/media/sounds/67.mp3"
        },
        {
            "name": "Discord Notification",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/discord-notification.mp3"
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
            "name": "Taco Bell Bong",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
        },
        {
            "name": "Pew_Pew",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
        },
        {
            "name": "The Undertaker Bell",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
        },
        {
            "name": "Punch Sound",
            "color": "rgb(42, 141, 255)",
            "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
        },
        {
            "name": "Prowler Sound Effect",
            "color": "rgb(101, 32, 124)",
            "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
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
            "name": "DRIVING IN MY CAR (asgore",
            "color": "rgb(146, 145, 32)",
            "mp3": "/media/sounds/driving-in-my-car-asgore_RhVxJjP.mp3"
        },
        {
            "name": "Buzzer",
            "color": "rgb(204, 0, 153)",
            "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
        },
        {
            "name": "sad meow song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sad-meow-song.mp3"
        },
        {
            "name": "oh my god bro oh hell nah man",
            "color": "rgb(7, 255, 6)",
            "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
        },
        {
            "name": "lack of a father figure?",
            "color": "rgb(211, 16, 255)",
            "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
        },
        {
            "name": "M e o w ~",
            "color": "rgb(120, 85, 120)",
            "mp3": "/media/sounds/m-e-o-w.mp3"
        },
        {
            "name": "YIPPEEEEEEEEEEEEEE",
            "color": "rgb(40, 137, 255)",
            "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
        },
        {
            "name": "Hub Intro Sound",
            "color": "rgb(255, 150, 30)",
            "mp3": "/media/sounds/hub-intro-sound.mp3"
        },
        {
            "name": "Ngakak laugh annoying",
            "color": "rgb(214, 255, 142)",
            "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
        },
        {
            "name": "Death sound (Fortnite)",
            "color": "rgb(255, 0, 142)",
            "mp3": "/media/sounds/tmp_7901-951678082.mp3"
        },
        {
            "name": "Sexy Sax",
            "color": "rgb(153, 0, 204)",
            "mp3": "/media/sounds/george-micael-wham-careless-whisper-1.mp3"
        },
        {
            "name": "Long brain fart",
            "color": "rgb(0, 127, 255)",
            "mp3": "/media/sounds/long-brain-fart.mp3"
        },
        {
            "name": "Error SOUNDSS",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/error_CDOxCYm.mp3"
        },
        {
            "name": "Emotional Damage Meme",
            "color": "rgb(229, 0, 0)",
            "mp3": "/media/sounds/emotional-damage-meme.mp3"
        },
        {
            "name": "ding sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ding-sound-effect_2.mp3"
        },
        {
            "name": "spiderman meme song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spiderman-meme-song.mp3"
        },
        {
            "name": "start digging in your butt twin",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/start-digging-in-your-butt-twin.mp3"
        },
        {
            "name": "Syfm",
            "color": "rgb(145, 183, 255)",
            "mp3": "/media/sounds/syfm.mp3"
        },
        {
            "name": "Door Knocking SOUND EFFECT",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
        },
        {
            "name": "Galaxy meme",
            "color": "rgb(25, 75, 255)",
            "mp3": "/media/sounds/galaxy-meme.mp3"
        },
        {
            "name": "Pluh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pluh.mp3"
        },
        {
            "name": "ACK",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/ack.mp3"
        },
        {
            "name": "fart with reverb",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fart-with-reverb.mp3"
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
            "name": "heavenly musiic",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
        },
        {
            "name": "let me know",
            "color": "rgb(255, 22, 208)",
            "mp3": "/media/sounds/let-me-know.mp3"
        },
        {
            "name": "a few moments later sponge bob sfx fun",
            "color": "rgb(6, 255, 39)",
            "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
        },
        {
            "name": "Lizard",
            "color": "rgb(11, 192, 53)",
            "mp3": "/media/sounds/lizard.mp3"
        },
        {
            "name": "Fart Meme Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fart-meme-sound.mp3"
        },
        {
            "name": "HAha funny laugh",
            "color": "rgb(70, 255, 24)",
            "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
        },
        {
            "name": "anime ahh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/anime-ahh.mp3"
        },
        {
            "name": "GunShottttt",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gunshotjbudden.mp3"
        },
        {
            "name": "KPop Demon Hunters URRRAH",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kpop-demon-hunters-urrrah.mp3"
        },
        {
            "name": "YAAAAAAAAY",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
        },
        {
            "name": "Oh My God Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-my-god-meme.mp3"
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
            "name": "*Snore* mimimimimimi",
            "color": "rgb(173, 255, 255)",
            "mp3": "/media/sounds/snore-mimimimimimi.mp3"
        },
        {
            "name": "goku drip",
            "color": "rgb(182, 255, 56)",
            "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
        },
        {
            "name": "Metal Gear Solid Alert",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tindeck_1.mp3"
        },
        {
            "name": "GopGopGop",
            "color": "rgb(255, 250, 206)",
            "mp3": "/media/sounds/gopgopgop.mp3"
        },
        {
            "name": "Censor Beep 1",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/censor-beep-1.mp3"
        },
        {
            "name": "Censor Beep 1",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/censor-beep-1.mp3"
        },
        {
            "name": "discord call",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/discord-call-sound.mp3"
        },
        {
            "name": "Womp Womp Womp",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/downer_noise.mp3"
        },
        {
            "name": "Shocked sound",
            "color": "rgb(255, 238, 135)",
            "mp3": "/media/sounds/shocked-sound-effect.mp3"
        },
        {
            "name": "Yo phone lining",
            "color": "rgb(95, 255, 46)",
            "mp3": "/media/sounds/yo-phone-lining.mp3"
        },
        {
            "name": "asian meme huh?",
            "color": "rgb(186, 255, 255)",
            "mp3": "/media/sounds/huh_37bAoRo.mp3"
        },
        {
            "name": "NFL theme song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
        },
        {
            "name": "Discord Leave Noise",
            "color": "rgb(102, 0, 255)",
            "mp3": "/media/sounds/discord-leave-noise.mp3"
        },
        {
            "name": "ЪЭХ",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ekh.mp3"
        },
        {
            "name": "Lobotomy Sound Effect",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
        },
        {
            "name": "67",
            "color": "rgb(199, 255, 30)",
            "mp3": "/media/sounds/67_SQlv2Xv.mp3"
        },
        {
            "name": "Sodapop (Kpop demon hunters)",
            "color": "rgb(255, 169, 233)",
            "mp3": "/media/sounds/sodapop-kpop-demon-hunters.mp3"
        },
        {
            "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
        },
        {
            "name": "Mac Quack",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mac-quack.mp3"
        },
        {
            "name": "dexter song 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dexter-song-2.mp3"
        },
        {
            "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
        },
        {
            "name": "NFL Draft Chime",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nfl-draft-chime.mp3"
        },
        {
            "name": "Aww",
            "color": "rgb(255, 0, 153)",
            "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
        },
        {
            "name": "FAHHHHH",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fahhhhh.mp3"
        },
        {
            "name": "FNAF Jumpscare Scream",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
        },
        {
            "name": "doot doot 6 7",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/doot-doot-6-7.mp3"
        },
        {
            "name": "outro song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
        },
        {
            "name": "MLG AIR HORN!!!!!!!!!!!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/mlg-airhorn.mp3"
        },
        {
            "name": "MICHAEL DONT LEAVE ME HERE",
            "color": "rgb(131, 0, 0)",
            "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
        },
        {
            "name": "Jet2holiday",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/jet2holiday.mp3"
        },
        {
            "name": "Elevator Music Background",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/musica-elevador-short.mp3"
        },
        {
            "name": "Explosion meme",
            "color": "rgb(255, 201, 52)",
            "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
        },
        {
            "name": "jixaw metal pipe falling sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
        },
        {
            "name": "oh no no no laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
        },
        {
            "name": "Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
        },
        {
            "name": "yeah boiii i i i",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
        },
        {
            "name": "Mario Jump",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
        },
        {
            "name": "You are an idiot!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-are-an-idiot.mp3"
        },
        {
            "name": "Do you know what time it is?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/jacket-do-you-know-what-time-it-is.mp3"
        },
        {
            "name": "Gay gay gay",
            "color": "rgb(231, 50, 255)",
            "mp3": "/media/sounds/gay-gay-gay.mp3"
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
            "name": "Hornet GIT GUD",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hornet_gitgud.mp3"
        },
        {
            "name": "adrian explain our friend group",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/adrian-explain-our-friend-group.mp3"
        },
        {
            "name": "Meme final",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
        },
        {
            "name": "MUSTARDDDDDDDD",
            "color": "rgb(236, 211, 52)",
            "mp3": "/media/sounds/mustardddddddd.mp3"
        },
        {
            "name": "clash royale hog rida",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/clash-royale-hog-rida.mp3"
        },
        {
            "name": "Wow Anime meme",
            "color": "rgb(255, 60, 0)",
            "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
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
            "name": "daddys home",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/daddys-home.mp3"
        },
        {
            "name": "(mafioso) scream",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mafioso-scream.mp3"
        },
        {
            "name": "Fart Meme Sound (Better and louder)",
            "color": "rgb(146, 93, 52)",
            "mp3": "/media/sounds/fartmeme.mp3"
        },
        {
            "name": "Apple Pay Sound",
            "color": "rgb(33, 77, 255)",
            "mp3": "/media/sounds/apple-pay-sound.mp3"
        },
        {
            "name": "Звук фотоаппарата",
            "color": "rgb(225, 163, 255)",
            "mp3": "/media/sounds/zvuk-fotoapparata.mp3"
        },
        {
            "name": "lizzard-1",
            "color": "rgb(28, 255, 28)",
            "mp3": "/media/sounds/lizzard-1.mp3"
        },
        {
            "name": "fahhh pump sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fahhh-pump-sound.mp3"
        },
        {
            "name": "SYFM LOUD",
            "color": "rgb(58, 0, 255)",
            "mp3": "/media/sounds/syfm-loud.mp3"
        },
        {
            "name": "BRUH sound effect!",
            "color": "rgb(49, 255, 6)",
            "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
        },
        {
            "name": "he he he ha clash royale (DEEP FRIED)",
            "color": "rgb(88, 85, 255)",
            "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
        },
        {
            "name": "Chalo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/chalo.mp3"
        },
        {
            "name": "Hornet SHAW",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
        },
        {
            "name": "sus clapping",
            "color": "rgb(251, 255, 0)",
            "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
        },
        {
            "name": "slap hard",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
        },
        {
            "name": "minecraft eating sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
        },
        {
            "name": "Laughing dog meme",
            "color": "rgb(139, 0, 0)",
            "mp3": "/media/sounds/laughing-dog-meme.mp3"
        },
        {
            "name": "Spongebob n word",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spongebob-n-word.mp3"
        },
        {
            "name": "Windows XP Error",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/erro.mp3"
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
            "name": "Awkward cricket",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
        },
        {
            "name": "Steal a Brainrot - Dragon Cannelloni",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/steal-a-brainrot-dragon-cannelloni.mp3"
        },
        {
            "name": "Jeopardy Theme Song!",
            "color": "rgb(0, 51, 255)",
            "mp3": "/media/sounds/jeopardy-themelq.mp3"
        },
        {
            "name": "running sound",
            "color": "rgb(93, 255, 202)",
            "mp3": "/media/sounds/1-108.mp3"
        },
        {
            "name": "Bad to the Bone Meme",
            "color": "rgb(204, 255, 239)",
            "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
        },
        {
            "name": "Lagging/loading",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
        },
        {
            "name": "Гудок поезда",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/gudok-poezda.mp3"
        },
        {
            "name": "Sad Trombone",
            "color": "rgb(255, 204, 51)",
            "mp3": "/media/sounds/sadtrombone.swf.mp3"
        },
        {
            "name": "bonk doge",
            "color": "rgb(255, 201, 121)",
            "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
        },
        {
            "name": "Hornet GIT GUD",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hornet_gitgud.mp3"
        },
        {
            "name": "FBI OPEN UP (with explosion)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
        },
        {
            "name": "Гудок поезда",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/gudok-poezda.mp3"
        },
        {
            "name": "Rat dance Music",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/rat-dance-music.mp3"
        },
        {
            "name": "sexy back",
            "color": "rgb(0, 218, 255)",
            "mp3": "/media/sounds/sexy-back.mp3"
        },
        {
            "name": "MAN SNORING MEME",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
        },
        {
            "name": "What The Hell Meme Sound Effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
        },
        {
            "name": "Lagging/loading",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
        },
        {
            "name": "SYFM LOUD",
            "color": "rgb(58, 0, 255)",
            "mp3": "/media/sounds/syfm-loud.mp3"
        },
        {
            "name": "Spongebob n word",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spongebob-n-word.mp3"
        },
        {
            "name": "fahhh pump sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fahhh-pump-sound.mp3"
        },
        {
            "name": "nuclear diarrhea",
            "color": "rgb(109, 58, 10)",
            "mp3": "/media/sounds/nuclear-diarrhea.mp3"
        },
        {
            "name": "Saja Boy Jingle",
            "color": "rgb(202, 36, 80)",
            "mp3": "/media/sounds/saja-boy-jingle.mp3"
        },
        {
            "name": "f1 Radio",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
        },
        {
            "name": "No no Wait Wait!",
            "color": "rgb(0, 255, 11)",
            "mp3": "/media/sounds/no-no-wait-wait.mp3"
        },
        {
            "name": "Wrong Answer Buzzer",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
        },
        {
            "name": "metal gear alert sound effect",
            "color": "rgb(127, 185, 255)",
            "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
        },
        {
            "name": "wobbly wiggly",
            "color": "rgb(0, 255, 3)",
            "mp3": "/media/sounds/wobbly-wiggly.mp3"
        },
        {
            "name": "spongebob boowomp",
            "color": "rgb(255, 249, 26)",
            "mp3": "/media/sounds/spongebob-boowomp.mp3"
        },
        {
            "name": "Clash Royale Startup",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clash-royale-start-up-sound.mp3"
        },
        {
            "name": "Asian Gong & Music",
            "color": "rgb(233, 255, 0)",
            "mp3": "/media/sounds/asian-gong-music.mp3"
        },
        {
            "name": "the weeknd rizzz",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
        },
        {
            "name": "danger alarm sound effect meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
        },
        {
            "name": "WIDE PUTIN MEME",
            "color": "rgb(33, 255, 100)",
            "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
        },
        {
            "name": "♥︎~Yamete Kudasai~♥︎",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
        },
        {
            "name": "The Price is Right Losing Horn",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
        },
        {
            "name": "Daddyy Chill",
            "color": "rgb(255, 138, 239)",
            "mp3": "/media/sounds/daddyy-chill.mp3"
        },
        {
            "name": "vine boom bass boost sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
        },
        {
            "name": "Heyy daddyyyyy⁓ omg",
            "color": "rgb(255, 163, 186)",
            "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
        },
        {
            "name": "LIZARD (stereo)1",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lizard-stereo-1.mp3"
        },
        {
            "name": "Wait wait wait what the hell legend sound",
            "color": "rgb(185, 63, 255)",
            "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
        },
        {
            "name": "brain fart slowed",
            "color": "rgb(141, 85, 60)",
            "mp3": "/media/sounds/brain-fart-slowed.mp3"
        },
        {
            "name": "plankton augh",
            "color": "rgb(49, 108, 87)",
            "mp3": "/media/sounds/plankton-augh.mp3"
        },
        {
            "name": "na na na",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
        },
        {
            "name": "We do not care (TikTok Sound)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
        },
        {
            "name": "surprise motherfucker!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
        },
        {
            "name": "Bruh meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
        },
        {
            "name": "Mouse Click Sound",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/mouse-click-sound.mp3"
        },
        {
            "name": "wet fart",
            "color": "rgb(204, 102, 0)",
            "mp3": "/media/sounds/wet-fart_1.mp3"
        },
        {
            "name": "Roblox Explosion Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-explosion-sound.mp3"
        },
        {
            "name": "FAHHHH 2",
            "color": "rgb(100, 38, 255)",
            "mp3": "/media/sounds/fahhhh-2.mp3"
        },
        {
            "name": "Another One DJ Khaled",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
        },
        {
            "name": "Tom scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/toms-screams.mp3"
        },
        {
            "name": "Meow 1",
            "color": "rgb(202, 155, 0)",
            "mp3": "/media/sounds/meow-1.mp3"
        },
        {
            "name": "crying goblin clash royale",
            "color": "rgb(140, 255, 0)",
            "mp3": "/media/sounds/crying-goblin-clash-royale.mp3"
        },
        {
            "name": "NFL Bass Boosted",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nfl.mp3"
        },
        {
            "name": "AUUGHHH",
            "color": "rgb(0, 33, 255)",
            "mp3": "/media/sounds/auughhh.mp3"
        },
        {
            "name": "wut",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/record-scratch-2.mp3"
        },
        {
            "name": "a barbershop haircut that costs a quarter",
            "color": "rgb(7, 68, 13)",
            "mp3": "/media/sounds/a-barbershop-haircut-that-costs-a-quarter.mp3"
        },
        {
            "name": "MI BOMBO",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mi-bombo.mp3"
        },
        {
            "name": "Hello there- obi Wan",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/obi-wan-hello-there.mp3"
        },
        {
            "name": "moving stone",
            "color": "rgb(65, 77, 76)",
            "mp3": "/media/sounds/moving-stone.mp3"
        },
        {
            "name": "♥︎~Yamete Kudasai~♥︎",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
        },
        {
            "name": "Randy Marsh N******",
            "color": "rgb(110, 73, 255)",
            "mp3": "/media/sounds/randy-marsh-n.mp3"
        },
        {
            "name": "The Price is Right Losing Horn",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
        },
        {
            "name": "discord troll",
            "color": "rgb(0, 255, 17)",
            "mp3": "/media/sounds/mikejebait-3.mp3"
        },
        {
            "name": "TU TU TU DU MAX VERSTAPPEN",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
        },
        {
            "name": "yippee tbh",
            "color": "rgb(30, 125, 36)",
            "mp3": "/media/sounds/yippee-tbh.mp3"
        },
        {
            "name": "Extremely loud incorrect buzzer",
            "color": "rgb(173, 255, 96)",
            "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
        },
        {
            "name": "Dolphin Censor",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
        },
        {
            "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
            "color": "rgb(255, 255, 102)",
            "mp3": "/media/sounds/epic.mp3"
        },
        {
            "name": "French meme song",
            "color": "rgb(60, 37, 255)",
            "mp3": "/media/sounds/french-meme-song.mp3"
        },
        {
            "name": "brain fart slowed",
            "color": "rgb(141, 85, 60)",
            "mp3": "/media/sounds/brain-fart-slowed.mp3"
        },
        {
            "name": "Deltarune Explosion",
            "color": "rgb(52, 106, 255)",
            "mp3": "/media/sounds/deltarune-explosion.mp3"
        },
        {
            "name": "danger alarm sound effect meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
        },
        {
            "name": "na na na",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
        },
        {
            "name": "Clash Royale Startup",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clash-royale-start-up-sound.mp3"
        },
        {
            "name": "Camera Flash Sound Effect",
            "color": "rgb(255, 132, 224)",
            "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
        },
        {
            "name": "Core Sound Effect",
            "color": "rgb(105, 0, 0)",
            "mp3": "/media/sounds/core-sound-effect.mp3"
        },
        {
            "name": "Slap *oh*",
            "color": "rgb(114, 88, 255)",
            "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
        },
        {
            "name": "Camera Flash Sound Effect",
            "color": "rgb(255, 132, 224)",
            "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
        },
        {
            "name": "Correct Answer GameShow",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/correct.mp3"
        },
        {
            "name": "French meme song",
            "color": "rgb(60, 37, 255)",
            "mp3": "/media/sounds/french-meme-song.mp3"
        },
        {
            "name": "iPhone Notification",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/notification_o14egLP.mp3"
        },
        {
            "name": "Load and Gunshot Fire",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gunshot-one.mp3"
        },
        {
            "name": "You're taking too long",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/youre-taking-too-long.mp3"
        },
        {
            "name": "fart with extra reverb",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
        },
        {
            "name": "AUUGHHH",
            "color": "rgb(0, 33, 255)",
            "mp3": "/media/sounds/auughhh.mp3"
        },
        {
            "name": "SUBWAY SURFERS BASS BOOSTED",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
        },
        {
            "name": "Dolphin Censor",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
        },
        {
            "name": "BASS BOOST discord call",
            "color": "rgb(93, 0, 255)",
            "mp3": "/media/sounds/bass-boost-discord-call.mp3"
        },
        {
            "name": "English or Spanish Song",
            "color": "rgb(144, 212, 255)",
            "mp3": "/media/sounds/english-or-spanish-song.mp3"
        },
        {
            "name": "Mr. Tenna says IT'S TV TIME",
            "color": "rgb(255, 171, 171)",
            "mp3": "/media/sounds/mr-tenna-says-its-tv-time.mp3"
        },
        {
            "name": "Evolution Mega Knight",
            "color": "rgb(206, 47, 255)",
            "mp3": "/media/sounds/evolution-mega-knight.mp3"
        },
        {
            "name": "Oh No No No Tik Tok Song Sound Effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
        },
        {
            "name": "Meow 1",
            "color": "rgb(202, 155, 0)",
            "mp3": "/media/sounds/meow-1.mp3"
        },
        {
            "name": "romanceeeeeeeeeeeeee",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
        },
        {
            "name": "nelly ahh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
        },
        {
            "name": "moving stone",
            "color": "rgb(65, 77, 76)",
            "mp3": "/media/sounds/moving-stone.mp3"
        },
        {
            "name": "6,7",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/6-7.mp3"
        },
        {
            "name": "Duck toy sound",
            "color": "rgb(255, 222, 9)",
            "mp3": "/media/sounds/duck-toy-sound.mp3"
        },
        {
            "name": "goofy ahh runnin",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
        },
        {
            "name": "surprise motherfucker!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
        },
        {
            "name": "Coin Mario",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/super-mario-coin-sound.mp3"
        },
        {
            "name": "Cave Ambience 1",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cave11_0QWMESM.mp3"
        },
        {
            "name": "Cartoon Slip",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoonslip.mp3"
        },
        {
            "name": "Hey let her go!",
            "color": "rgb(42, 255, 0)",
            "mp3": "/media/sounds/let-her-go.mp3"
        },
        {
            "name": "FAHHHHH 3",
            "color": "rgb(122, 0, 0)",
            "mp3": "/media/sounds/fahhhhh-3.mp3"
        },
        {
            "name": "Shut up!",
            "color": "rgb(204, 102, 153)",
            "mp3": "/media/sounds/shutup.swf.mp3"
        },
        {
            "name": "Lightsaber ON",
            "color": "rgb(0, 153, 255)",
            "mp3": "/media/sounds/lightsaber_02.mp3"
        },
        {
            "name": "Som do Zap Zap estourado",
            "color": "rgb(3, 250, 63)",
            "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
        },
        {
            "name": "uwu discord gorl",
            "color": "rgb(252, 204, 255)",
            "mp3": "/media/sounds/uwu-discord-gorl.mp3"
        },
        {
            "name": "Uncle ruckus GUILTY",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/uncle-ruckus-guilty.mp3"
        },
        {
            "name": "why are you gay",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/why-are-you-gay.mp3"
        },
        {
            "name": "FAWk",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/fawk_zEmBCoq.mp3"
        },
        {
            "name": "Pan Hit",
            "color": "rgb(51, 51, 204)",
            "mp3": "/media/sounds/hitsound_2.mp3"
        },
        {
            "name": "goofy ahh runnin",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
        },
        {
            "name": "Le fart de Simon",
            "color": "rgb(75, 255, 0)",
            "mp3": "/media/sounds/le-fart-de-simon.mp3"
        },
        {
            "name": "McDonalds Beeping Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
        },
        {
            "name": "Doge bonk",
            "color": "rgb(67, 179, 180)",
            "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
        },
        {
            "name": "SETEMBRO VAI ENTRAR O GROSSO ( LULA )",
            "color": "rgb(255, 238, 4)",
            "mp3": "/media/sounds/setembro-vai-entrar-o-grosso-lula.mp3"
        },
        {
            "name": "why are you gay",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/why-are-you-gay.mp3"
        },
        {
            "name": "angry roblox",
            "color": "rgb(129, 26, 26)",
            "mp3": "/media/sounds/angry-roblox.mp3"
        },
        {
            "name": "Thank You For Your Patronage",
            "color": "rgb(255, 217, 63)",
            "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
        },
        {
            "name": "Oi Oi! Forsaken",
            "color": "rgb(4, 90, 3)",
            "mp3": "/media/sounds/oi-oi-forsaken.mp3"
        },
        {
            "name": "Load and Gunshot Fire",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gunshot-one.mp3"
        },
        {
            "name": "romanceeeeeeeeeeeeee",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
        },
        {
            "name": "TU TU TU DU MAX VERSTAPPEN",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
        },
        {
            "name": "To be Continued (jojo)",
            "color": "rgb(204, 153, 51)",
            "mp3": "/media/sounds/untitled_1071.mp3"
        },
        {
            "name": "Meow 1",
            "color": "rgb(202, 155, 0)",
            "mp3": "/media/sounds/meow-1.mp3"
        },
        {
            "name": "Do it Lady",
            "color": "rgb(44, 183, 24)",
            "mp3": "/media/sounds/do-it-lady.mp3"
        },
        {
            "name": "Wilhelm Scream",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/wilhelmscream.mp3"
        },
        {
            "name": "spongebob sad song",
            "color": "rgb(255, 228, 58)",
            "mp3": "/media/sounds/spongebob-sad-song.mp3"
        },
        {
            "name": "Indian under the water",
            "color": "rgb(107, 169, 220)",
            "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
        },
        {
            "name": "6,7",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/6-7.mp3"
        },
        {
            "name": "English or Spanish Song",
            "color": "rgb(144, 212, 255)",
            "mp3": "/media/sounds/english-or-spanish-song.mp3"
        },
        {
            "name": "The Nut Button",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
        },
        {
            "name": "Pan Hit",
            "color": "rgb(51, 51, 204)",
            "mp3": "/media/sounds/hitsound_2.mp3"
        },
        {
            "name": "BASS BOOST discord call",
            "color": "rgb(93, 0, 255)",
            "mp3": "/media/sounds/bass-boost-discord-call.mp3"
        },
        {
            "name": "roblox bye",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-bye.mp3"
        },
        {
            "name": "and his name is John Cenaaaaaa",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
        },
        {
            "name": "hold up tiktok",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/hold-up-tiktok.mp3"
        },
        {
            "name": "FBI open UP",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
        },
        {
            "name": "windows xp shutdown",
            "color": "rgb(102, 102, 255)",
            "mp3": "/media/sounds/preview_4.mp3"
        },
        {
            "name": "slap31",
            "color": "rgb(255, 20, 20)",
            "mp3": "/media/sounds/slap-sound-effect-free.mp3"
        },
        {
            "name": "Re:Zero Return by Death",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/re-zero-return-by-death.mp3"
        },
        {
            "name": "Randy Marsh N******",
            "color": "rgb(110, 73, 255)",
            "mp3": "/media/sounds/randy-marsh-n.mp3"
        },
        {
            "name": "mario fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mario-meme.mp3"
        },
        {
            "name": "Minecraft Hurt",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/classic_hurt.mp3"
        },
        {
            "name": "Nuclear Fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nuclear-fart-1.mp3"
        },
        {
            "name": "Minecraft Damage",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
        },
        {
            "name": "Nani FULL",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
        },
        {
            "name": "spongebob sad song",
            "color": "rgb(255, 228, 58)",
            "mp3": "/media/sounds/spongebob-sad-song.mp3"
        },
        {
            "name": "Minecraft Damage",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
        },
        {
            "name": "roblox bye",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-bye.mp3"
        },
        {
            "name": "Nuclear Fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nuclear-fart-1.mp3"
        },
        {
            "name": "mario fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mario-meme.mp3"
        },
        {
            "name": "nope.avi",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/engineer_no01.mp3"
        },
        {
            "name": "I can smell you",
            "color": "rgb(51, 0, 153)",
            "mp3": "/media/sounds/morgan-smell.mp3"
        },
        {
            "name": "TF2 Critical hit",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
        },
        {
            "name": "FBI open UP",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
        },
        {
            "name": "windows xp shutdown",
            "color": "rgb(102, 102, 255)",
            "mp3": "/media/sounds/preview_4.mp3"
        },
        {
            "name": "You What?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-what-spongebob.mp3"
        },
        {
            "name": "omg bruh oh hell nah",
            "color": "rgb(164, 0, 255)",
            "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
        },
        {
            "name": "Popular Riser metallic sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
        },
        {
            "name": "Law and Order DUN DUN",
            "color": "rgb(204, 153, 102)",
            "mp3": "/media/sounds/dun_dun_1.mp3"
        },
        {
            "name": "BASS BOOST discord call",
            "color": "rgb(93, 0, 255)",
            "mp3": "/media/sounds/bass-boost-discord-call.mp3"
        },
        {
            "name": "Wet fart meme",
            "color": "rgb(109, 73, 20)",
            "mp3": "/media/sounds/wet-fart-meme.mp3"
        },
        {
            "name": "Ralsei Splat",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/ralsei-splat.mp3"
        },
        {
            "name": "Kpop Demon Hunters Golden",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kpop-demon-hunters-golden.mp3"
        },
        {
            "name": "app",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aplausos_3.mp3"
        },
        {
            "name": "slap31",
            "color": "rgb(255, 20, 20)",
            "mp3": "/media/sounds/slap-sound-effect-free.mp3"
        },
        {
            "name": "You Need to Leave!",
            "color": "rgb(111, 59, 255)",
            "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
        },
        {
            "name": "BYE BYE! ~ Lumi Athena SFX",
            "color": "rgb(29, 29, 29)",
            "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
        },
        {
            "name": "Guest 1337 forsaken",
            "color": "rgb(184, 51, 255)",
            "mp3": "/media/sounds/guest-1337-forsaken.mp3"
        },
        {
            "name": "discord join call",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
        },
        {
            "name": "roblox horror",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/do-not-open.mp3"
        },
        {
            "name": "Lego Yoda Death Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
        },
        {
            "name": "Re.Zero: Whoaaayeeeaaayaaai~",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
        },
        {
            "name": "Minecraft Villager Sound",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
        },
        {
            "name": "Super Mario Death",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
        },
        {
            "name": "Spongebob Bubble Transition",
            "color": "rgb(2, 91, 255)",
            "mp3": "/media/sounds/spongebob-bubble-transition.mp3"
        },
        {
            "name": "Fnaf 2 Hallway",
            "color": "rgb(94, 94, 94)",
            "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
        },
        {
            "name": "Technoloyia Technologia Tecnologia",
            "color": "rgb(117, 255, 151)",
            "mp3": "/media/sounds/technoloyia-technologia-tecnologia.mp3"
        },
        {
            "name": "\"My leg!\" Fish",
            "color": "rgb(255, 204, 0)",
            "mp3": "/media/sounds/my-leg_2.mp3"
        },
        {
            "name": "Minecraft Click",
            "color": "rgb(255, 102, 153)",
            "mp3": "/media/sounds/minecraft_click.mp3"
        },
        {
            "name": "Fnaf 1 music box",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fnaf-1-music-box.mp3"
        },
        {
            "name": "Minecraft drinking sound",
            "color": "rgb(0, 255, 13)",
            "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
        },
        {
            "name": "Flashbang + Gah dayum",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
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
            "name": "You Need to Leave!",
            "color": "rgb(111, 59, 255)",
            "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
        },
        {
            "name": "Cartoon boing sfx",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
        },
        {
            "name": "Cartoon running",
            "color": "rgb(255, 193, 0)",
            "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
        },
        {
            "name": "FBI open UP",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
        },
        {
            "name": "White tee RIZZ",
            "color": "rgb(227, 224, 255)",
            "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
        },
        {
            "name": "mario fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mario-meme.mp3"
        },
        {
            "name": "psu lion roar",
            "color": "rgb(37, 0, 202)",
            "mp3": "/media/sounds/psu-lion-roar.mp3"
        },
        {
            "name": "Clown Horn",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
        },
        {
            "name": "the rock sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/the-rock-sound-effect.mp3"
        },
        {
            "name": "THINK FAST CHUCKLENUTS",
            "color": "rgb(255, 11, 11)",
            "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
        },
        {
            "name": "Guest 1337 forsaken",
            "color": "rgb(184, 51, 255)",
            "mp3": "/media/sounds/guest-1337-forsaken.mp3"
        },
        {
            "name": "Creeper Hiss",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/creeper.mp3"
        },
        {
            "name": "TF2 Critical hit",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
        },
        {
            "name": "Ralsei Splat",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/ralsei-splat.mp3"
        },
        {
            "name": "Tralalero Tralala Meme",
            "color": "rgb(159, 178, 197)",
            "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
        },
        {
            "name": "Kpop Demon Hunters Golden",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kpop-demon-hunters-golden.mp3"
        },
        {
            "name": "Volkswagen das auto remix",
            "color": "rgb(218, 255, 234)",
            "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
        },
        {
            "name": "Law and Order DUN DUN",
            "color": "rgb(204, 153, 102)",
            "mp3": "/media/sounds/dun_dun_1.mp3"
        },
        {
            "name": "Chicken Jockey",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/chicken-jockey.mp3"
        },
        {
            "name": "Super Mario Death",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
        },
        {
            "name": "You What?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-what-spongebob.mp3"
        },
        {
            "name": "I can smell you",
            "color": "rgb(51, 0, 153)",
            "mp3": "/media/sounds/morgan-smell.mp3"
        },
        {
            "name": "YAAAYY CHILDREN!!!!",
            "color": "rgb(159, 242, 255)",
            "mp3": "/media/sounds/children-yaysound-effect.mp3"
        },
        {
            "name": "Roblox Hi Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-hi-sound.mp3"
        },
        {
            "name": "Нет иди нахуй",
            "color": "rgb(120, 155, 25)",
            "mp3": "/media/sounds/net-idi-nakhui.mp3"
        },
        {
            "name": "Tik Tok India",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
        },
        {
            "name": "sudden suspense",
            "color": "rgb(255, 251, 0)",
            "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
        },
        {
            "name": "Strawberry Elephant",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/strawberry-elephant_nQHaP3H.mp3"
        },
        {
            "name": "AMOGUS SCREAMING",
            "color": "rgb(255, 214, 49)",
            "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
        },
        {
            "name": "Sonic.exe scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sonic-exe-scream.mp3"
        },
        {
            "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
            "color": "rgb(217, 0, 0)",
            "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
        },
        {
            "name": "Doll: Green Light",
            "color": "rgb(75, 255, 54)",
            "mp3": "/media/sounds/doll-green-light.mp3"
        },
        {
            "name": "confetti pop sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/confetti-pop-sound.mp3"
        },
        {
            "name": "squidward walking sound",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/squidward-walking-sound.mp3"
        },
        {
            "name": "Tralalero Tralala Meme",
            "color": "rgb(159, 178, 197)",
            "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
        },
        {
            "name": "AYE 67",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aye-67.mp3"
        },
        {
            "name": "Super Mario Death",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
        },
        {
            "name": "Gotcha Bit** by Dave Chapelle",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
        },
        {
            "name": "SETEMBRO VAI ENTRAR O GROSSO ( LULA )",
            "color": "rgb(255, 238, 4)",
            "mp3": "/media/sounds/setembro-vai-entrar-o-grosso-lula.mp3"
        },
        {
            "name": "Everybody Backstreet Boys",
            "color": "rgb(228, 237, 255)",
            "mp3": "/media/sounds/everybody_4mupChT.mp3"
        },
        {
            "name": "STONE Cold",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/stone-cold_UwD4OHm.mp3"
        },
        {
            "name": "Cartoon boing sfx",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
        },
        {
            "name": "SDIYBT",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sdiybt.mp3"
        },
        {
            "name": "Aayein Meme",
            "color": "rgb(255, 183, 50)",
            "mp3": "/media/sounds/aayein-meme.mp3"
        },
        {
            "name": "nope",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/engineer_no01_1.mp3"
        },
        {
            "name": "You What?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-what-spongebob.mp3"
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
            "name": "Transformers (transforming)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
        },
        {
            "name": "Nuclear Fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nuclear-fart-1.mp3"
        },
        {
            "name": "Record scratch sound effect",
            "color": "rgb(255, 51, 0)",
            "mp3": "/media/sounds/record-scratch_1.mp3"
        },
        {
            "name": "Windows XP ERROR Song",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
        },
        {
            "name": "Volkswagen das auto remix",
            "color": "rgb(218, 255, 234)",
            "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
        },
        {
            "name": "You Need to Leave!",
            "color": "rgb(111, 59, 255)",
            "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
        },
        {
            "name": "THINK FAST CHUCKLENUTS",
            "color": "rgb(255, 11, 11)",
            "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
        },
        {
            "name": "OHH GUARDIANN!",
            "color": "rgb(4, 167, 255)",
            "mp3": "/media/sounds/ohh-guardiann.mp3"
        },
        {
            "name": "Vine Boom (Longer)",
            "color": "rgb(255, 195, 217)",
            "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
        },
        {
            "name": "magic fairy",
            "color": "rgb(136, 224, 255)",
            "mp3": "/media/sounds/magic-fairy.mp3"
        },
        {
            "name": "bing chilling",
            "color": "rgb(41, 56, 134)",
            "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
        },
        {
            "name": "GET OUT Tuco",
            "color": "rgb(162, 69, 255)",
            "mp3": "/media/sounds/get-out-tuco.mp3"
        },
        {
            "name": "discord kitten",
            "color": "rgb(255, 66, 206)",
            "mp3": "/media/sounds/discord-kitten.mp3"
        },
        {
            "name": "TF2 Critical hit",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
        },
        {
            "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
            "color": "rgb(217, 0, 0)",
            "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
        },
        {
            "name": "(Boondocks) What's good nibba",
            "color": "rgb(117, 255, 246)",
            "mp3": "/media/sounds/boondocks-whats-good-nibba.mp3"
        },
        {
            "name": "Clown Horn",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
        },
        {
            "name": "bass drop sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
        },
        {
            "name": "Censor Beep 3",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/censor-beep-3.mp3"
        },
        {
            "name": "ishowspeed STFU",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ishowspeed-stfu.mp3"
        },
        {
            "name": "Ankle breaker",
            "color": "rgb(255, 136, 0)",
            "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
        },
        {
            "name": "PUM IMPACTO",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/pum-impacto.mp3"
        },
        {
            "name": "AYE 67",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aye-67.mp3"
        },
        {
            "name": "Hyper-Reallistic Knocking",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
        },
        {
            "name": "Lightskin Rizz (Sin City)",
            "color": "rgb(156, 153, 207)",
            "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
        },
        {
            "name": "OH SHIT! (echo)",
            "color": "rgb(255, 0, 255)",
            "mp3": "/media/sounds/oh-shit_4.mp3"
        },
        {
            "name": "SPONGEBOB A FEW MOMENTS LATER",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
        },
        {
            "name": "Spongebob disappointed",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
        },
        {
            "name": "Tom AAAAAAAAA scream",
            "color": "rgb(133, 133, 133)",
            "mp3": "/media/sounds/tom-scream.mp3"
        },
        {
            "name": "Morgan Freeman I can smell you",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/morgan-freeman-can-smell-you_Oq9fTvy.mp3"
        },
        {
            "name": "wiwiwi kitten",
            "color": "rgb(114, 102, 123)",
            "mp3": "/media/sounds/wiwiwi-kitten.mp3"
        },
        {
            "name": "undertaker bell repeat",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
        },
        {
            "name": "JOJO SONG",
            "color": "rgb(255, 252, 90)",
            "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
        },
        {
            "name": "THX",
            "color": "rgb(0, 102, 255)",
            "mp3": "/media/sounds/thx.mp3"
        },
        {
            "name": "Dune Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dune-scream.mp3"
        },
        {
            "name": "Gerson Laugh",
            "color": "rgb(19, 143, 23)",
            "mp3": "/media/sounds/gerson-laugh.mp3"
        },
        {
            "name": "Киси киси мяу мяу",
            "color": "rgb(255, 30, 251)",
            "mp3": "/media/sounds/kisi-kisi-miau-miau.mp3"
        },
        {
            "name": "Censor Beep 3",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/censor-beep-3.mp3"
        },
        {
            "name": "Can We Get Much Higher-One Piece Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
        },
        {
            "name": "booing",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/booing.mp3"
        },
        {
            "name": "Nuclear Alarm Siren",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
        },
        {
            "name": "Goofy ahh SpongeBob sound",
            "color": "rgb(208, 215, 0)",
            "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
        },
        {
            "name": "GUBBY",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gubby.mp3"
        },
        {
            "name": "ishowspeed STFU",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ishowspeed-stfu.mp3"
        },
        {
            "name": "Доброе утро моя девочка",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
        },
        {
            "name": "HI HI HI HA clash royale",
            "color": "rgb(255, 250, 76)",
            "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
        },
        {
            "name": "Careless Whisper",
            "color": "rgb(153, 255, 204)",
            "mp3": "/media/sounds/careless_whispers.mp3"
        },
        {
            "name": "DAMN!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/friday-damn.mp3"
        },
        {
            "name": "GET OUT Tuco",
            "color": "rgb(162, 69, 255)",
            "mp3": "/media/sounds/get-out-tuco.mp3"
        },
        {
            "name": "Eagle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sounds_eng-00381.mp3"
        },
        {
            "name": "lets go gambling",
            "color": "rgb(30, 0, 255)",
            "mp3": "/media/sounds/lets-go-gambling.mp3"
        },
        {
            "name": "gah dayum",
            "color": "rgb(6, 0, 107)",
            "mp3": "/media/sounds/gah-dayum.mp3"
        },
        {
            "name": "Awkward Moment",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/awkward-moment.mp3"
        },
        {
            "name": "Welcome Foolish Mortals",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/welcomefoolishmortals.mp3"
        },
        {
            "name": "Laugh remix",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/laugh-remix.mp3"
        },
        {
            "name": "Avengers Assemble 2",
            "color": "rgb(57, 40, 255)",
            "mp3": "/media/sounds/avengers_assemble_l.mp3"
        },
        {
            "name": "bing chilling",
            "color": "rgb(41, 56, 134)",
            "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
        },
        {
            "name": "GET OUT Tuco",
            "color": "rgb(162, 69, 255)",
            "mp3": "/media/sounds/get-out-tuco.mp3"
        },
        {
            "name": "Goku Yelling",
            "color": "rgb(255, 102, 0)",
            "mp3": "/media/sounds/gokuyelling.mp3"
        },
        {
            "name": "Oh brother this guy STINKS spongebob",
            "color": "rgb(44, 149, 255)",
            "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
        },
        {
            "name": "Gta v notification",
            "color": "rgb(69, 255, 0)",
            "mp3": "/media/sounds/gta-v-notification.mp3"
        },
        {
            "name": "CINEMATIC SUSPENSE RISER",
            "color": "rgb(132, 66, 255)",
            "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
        },
        {
            "name": "skedaddle",
            "color": "rgb(7, 62, 78)",
            "mp3": "/media/sounds/skedaddle.mp3"
        },
        {
            "name": "OHH GUARDIANN!",
            "color": "rgb(4, 167, 255)",
            "mp3": "/media/sounds/ohh-guardiann.mp3"
        },
        {
            "name": "67 kid",
            "color": "rgb(255, 190, 40)",
            "mp3": "/media/sounds/67-kid.mp3"
        },
        {
            "name": "brain fart",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/brain-fart.mp3"
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
            "name": "You Are My Sunshine Lebron James",
            "color": "rgb(241, 255, 180)",
            "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
        },
        {
            "name": "Fart Sound Effect (From 21st Century Memes)",
            "color": "rgb(151, 42, 2)",
            "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
        },
        {
            "name": "Okay let’s go",
            "color": "rgb(14, 174, 255)",
            "mp3": "/media/sounds/meme-okay-lets-go.mp3"
        },
        {
            "name": "Transformers (transforming)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
        },
        {
            "name": "Mario kart start race",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mariostart.mp3"
        },
        {
            "name": "raaar",
            "color": "rgb(204, 225, 255)",
            "mp3": "/media/sounds/raaar_FerSY7o.mp3"
        },
        {
            "name": "Jet 2 Holiday",
            "color": "rgb(243, 255, 8)",
            "mp3": "/media/sounds/jet-2-holiday_1CLCuwy.mp3"
        },
        {
            "name": "OH SHIT! (echo)",
            "color": "rgb(255, 0, 255)",
            "mp3": "/media/sounds/oh-shit_4.mp3"
        },
        {
            "name": "“Hello There” Obi Wan",
            "color": "rgb(90, 197, 255)",
            "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
        },
        {
            "name": "Mario screaming 1",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpcoj3v_01.mp3"
        },
        {
            "name": "Censor Beep 3",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/censor-beep-3.mp3"
        },
        {
            "name": "cod zombie scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/img_6228.mp3"
        },
        {
            "name": "frog laughing meme",
            "color": "rgb(255, 71, 224)",
            "mp3": "/media/sounds/frog-laughing-meme.mp3"
        },
        {
            "name": "iCarly Cheers",
            "color": "rgb(39, 248, 255)",
            "mp3": "/media/sounds/icarly-cheers.mp3"
        },
        {
            "name": "Nuclear Alarm Siren",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
        },
        {
            "name": "Windows XP ERROR Song",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
        },
        {
            "name": "Burger King man scream n word in a plane",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/burger-king-man-scream-n-word-in-a-plane.mp3"
        },
        {
            "name": "NeckHurtRupert",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/neckhurtrupert.mp3"
        },
        {
            "name": "sitcom laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sitcom-laughing-1.mp3"
        },
        {
            "name": "Lightskin Rizz (Sin City)",
            "color": "rgb(156, 153, 207)",
            "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
        },
        {
            "name": "Omni man are you sure",
            "color": "rgb(48, 186, 255)",
            "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
        },
        {
            "name": "mr krabs walking",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mr-krabs-walking.mp3"
        },
        {
            "name": "FNaF Golden Freddy Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
        },
        {
            "name": "Dune Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dune-scream.mp3"
        },
        {
            "name": "I Want To Be Ninja",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/i-want-to-be-ninja.mp3"
        },
        {
            "name": "World's Smallest Violin",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/worlds-smallest-violin.mp3"
        },
        {
            "name": "Bo-womp",
            "color": "rgb(255, 239, 82)",
            "mp3": "/media/sounds/bo-womp.mp3"
        },
        {
            "name": "TITAN ANIME",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/attack-on-titan-rojo.mp3"
        },
        {
            "name": "Swoosh Sound Effects",
            "color": "rgb(64, 51, 255)",
            "mp3": "/media/sounds/swoosh-sound-effects.mp3"
        },
        {
            "name": "Нет иди нахуй",
            "color": "rgb(120, 155, 25)",
            "mp3": "/media/sounds/net-idi-nakhui.mp3"
        },
        {
            "name": "OH PLUTOOO",
            "color": "rgb(94, 101, 255)",
            "mp3": "/media/sounds/oh-plutooo.mp3"
        },
        {
            "name": "ANTONIO LOBATO!!!",
            "color": "rgb(6, 0, 0)",
            "mp3": "/media/sounds/antonio-lobato_8zPnpk3.mp3"
        },
        {
            "name": "WHAT ARE YOU DOING IN MY SWAMP",
            "color": "rgb(0, 153, 0)",
            "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
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
            "name": "Minecraft XP Sound",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/orb.mp3"
        },
        {
            "name": "4092 mango phonk",
            "color": "rgb(255, 85, 13)",
            "mp3": "/media/sounds/4092-mango-phonk.mp3"
        },
        {
            "name": "Laugh remix",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/laugh-remix.mp3"
        },
        {
            "name": "1000 Bits - G-MIDÃO DO ZAP",
            "color": "rgb(100, 10, 10)",
            "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
        },
        {
            "name": "Discord_Ping",
            "color": "rgb(68, 102, 255)",
            "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
        },
        {
            "name": "PS2 Startup",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ps2_start_up.mp3"
        },
        {
            "name": "Loud Explosion",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/loud-explosion.mp3"
        },
        {
            "name": "formula 1 radio notification",
            "color": "rgb(126, 255, 107)",
            "mp3": "/media/sounds/formula-1-radio-notification.mp3"
        },
        {
            "name": "YEET",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yeet-sound-effect.mp3"
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
            "name": "skibidi toilet",
            "color": "rgb(226, 247, 255)",
            "mp3": "/media/sounds/skibidi-toilet.mp3"
        },
        {
            "name": "Here Comes The Money",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/money_2.mp3"
        },
        {
            "name": "check mark",
            "color": "rgb(255, 129, 33)",
            "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
        },
        {
            "name": "Scary Tiktok Music",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scary-tiktok-music.mp3"
        },
        {
            "name": "magic fairy",
            "color": "rgb(136, 224, 255)",
            "mp3": "/media/sounds/magic-fairy.mp3"
        },
        {
            "name": "Rupertgamingboy",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rupertgamingboy_NQp7b9o.mp3"
        },
        {
            "name": "“Hello There” Obi Wan",
            "color": "rgb(90, 197, 255)",
            "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
        },
        {
            "name": "Goofy Yell",
            "color": "rgb(51, 102, 255)",
            "mp3": "/media/sounds/goofy-yell.mp3"
        },
        {
            "name": "Crying Baby",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
        },
        {
            "name": "Thick Of It Brainrot",
            "color": "rgb(53, 204, 53)",
            "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
        },
        {
            "name": "NeckHurtRupert",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/neckhurtrupert.mp3"
        },
        {
            "name": "quack.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/quack_5.mp3"
        },
        {
            "name": "Eww brother eww",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/eww-brother-eww.mp3"
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
            "name": "Car Crash SFX",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
        },
        {
            "name": "Super Mario Beedoo",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
        },
        {
            "name": "vine boom sound effect full",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
        },
        {
            "name": "Fire Whoosh",
            "color": "rgb(238, 228, 23)",
            "mp3": "/media/sounds/fire-whoosh.mp3"
        },
        {
            "name": "yes king teach me",
            "color": "rgb(251, 255, 52)",
            "mp3": "/media/sounds/yes-king-teach-me.mp3"
        },
        {
            "name": "quack.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/quack_5.mp3"
        },
        {
            "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
            "color": "rgb(6, 6, 72)",
            "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
        },
        {
            "name": "Here Comes The Money",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/money_2.mp3"
        },
        {
            "name": "Hawk Tuah (Short)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hawk-tuah-short.mp3"
        },
        {
            "name": "fnaf 2 scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
        },
        {
            "name": "BOING . MP3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/boing_lmke36X.mp3"
        },
        {
            "name": "Gojo I Stroke My Pickle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
        },
        {
            "name": "Mii Channel Music",
            "color": "rgb(213, 226, 255)",
            "mp3": "/media/sounds/mii-channel-music.mp3"
        },
        {
            "name": "2_ตลกตบมุก_2",
            "color": "rgb(249, 255, 28)",
            "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
        },
        {
            "name": "I got this! Ryuko",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
        },
        {
            "name": "Burp & Fart",
            "color": "rgb(255, 114, 114)",
            "mp3": "/media/sounds/burp-fart.mp3"
        },
        {
            "name": "garam brainrot",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/garam-brainrot.mp3"
        },
        {
            "name": "labubu",
            "color": "rgb(115, 47, 12)",
            "mp3": "/media/sounds/labubu.mp3"
        },
        {
            "name": "ai meu cuzin",
            "color": "rgb(255, 174, 37)",
            "mp3": "/media/sounds/ai-meu-cuzin.mp3"
        },
        {
            "name": "Crazy Realistic Knocking Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
        },
        {
            "name": "skibidi toilet",
            "color": "rgb(226, 247, 255)",
            "mp3": "/media/sounds/skibidi-toilet.mp3"
        },
        {
            "name": "Goofy Yell",
            "color": "rgb(51, 102, 255)",
            "mp3": "/media/sounds/goofy-yell.mp3"
        },
        {
            "name": "World's Smallest Violin",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/worlds-smallest-violin.mp3"
        },
        {
            "name": "Squeak Toy",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
        },
        {
            "name": "peter griffin laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
        },
        {
            "name": "Super Saiyan Aura",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/saiyan.mp3"
        },
        {
            "name": "nya cat girl sound",
            "color": "rgb(90, 65, 255)",
            "mp3": "/media/sounds/nya_2xyALFL.mp3"
        },
        {
            "name": "Fnaf Freddy’s laugh",
            "color": "rgb(105, 37, 37)",
            "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
        },
        {
            "name": "Flapjack Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/flap-jack-scream.mp3"
        },
        {
            "name": "Thick Of It Brainrot",
            "color": "rgb(53, 204, 53)",
            "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
        },
        {
            "name": "check mark",
            "color": "rgb(255, 129, 33)",
            "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
        },
        {
            "name": "RIGHT FOOT CREEP",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/right-foot-creep.mp3"
        },
        {
            "name": "HUNTER L4D",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/l4d-scream.mp3"
        },
        {
            "name": "Swoosh Sound Effects",
            "color": "rgb(64, 51, 255)",
            "mp3": "/media/sounds/swoosh-sound-effects.mp3"
        },
        {
            "name": "Death Splat",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/death-splat.mp3"
        },
        {
            "name": "tenna talking",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tenna-talking.mp3"
        },
        {
            "name": "Eagle Screech",
            "color": "rgb(43, 119, 50)",
            "mp3": "/media/sounds/eagle-screech.mp3"
        },
        {
            "name": "Michael Jackson Hee Hee",
            "color": "rgb(160, 0, 0)",
            "mp3": "/media/sounds/michael-jackson-hee-hee.mp3"
        },
        {
            "name": "Mouse Click",
            "color": "rgb(123, 57, 205)",
            "mp3": "/media/sounds/clicksoundeffect.mp3"
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
            "name": "formula 1 radio notification",
            "color": "rgb(126, 255, 107)",
            "mp3": "/media/sounds/formula-1-radio-notification.mp3"
        },
        {
            "name": "Ultra Instinct",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
        },
        {
            "name": "[FNAF] 6 AM",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
        },
        {
            "name": "Door Knocking (Very Realistic)",
            "color": "rgb(49, 85, 6)",
            "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
        },
        {
            "name": "Windows XP ERROR Song",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
        },
        {
            "name": "Scary Tiktok Music",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scary-tiktok-music.mp3"
        },
        {
            "name": "Deja vu fade",
            "color": "rgb(138, 0, 0)",
            "mp3": "/media/sounds/deja-vu-fade.mp3"
        },
        {
            "name": "NOW'S YOUR CHANCE TO BE A BIG SHOT",
            "color": "rgb(246, 255, 0)",
            "mp3": "/media/sounds/nows-your-chance-to-be-a-big-shot.mp3"
        },
        {
            "name": "Udin Din Din Dun",
            "color": "rgb(255, 102, 0)",
            "mp3": "/media/sounds/udin-din-din-dun.mp3"
        },
        {
            "name": "I am going to commit great crime",
            "color": "rgb(18, 52, 112)",
            "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
        },
        {
            "name": "“Hello There” Obi Wan",
            "color": "rgb(90, 197, 255)",
            "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
        },
        {
            "name": "Discord_Ping",
            "color": "rgb(68, 102, 255)",
            "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
        },
        {
            "name": "Anime punch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/strongpunch.mp3"
        },
        {
            "name": "cod zombie scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/img_6228.mp3"
        },
        {
            "name": "TF2 - Frying Pan",
            "color": "rgb(51, 51, 51)",
            "mp3": "/media/sounds/melee_frying_pan_01.mp3"
        },
        {
            "name": "I’m bout to cuh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/im-bout-to-cuh.mp3"
        },
        {
            "name": "raaar",
            "color": "rgb(204, 225, 255)",
            "mp3": "/media/sounds/raaar_FerSY7o.mp3"
        },
        {
            "name": "Mi bomboclaut",
            "color": "rgb(255, 158, 31)",
            "mp3": "/media/sounds/mi-bomboclaut_linGNm7.mp3"
        },
        {
            "name": "1000 Bits - G-MIDÃO DO ZAP",
            "color": "rgb(100, 10, 10)",
            "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
        },
        {
            "name": "Noli Intro",
            "color": "rgb(85, 18, 87)",
            "mp3": "/media/sounds/noli-intro.mp3"
        },
        {
            "name": "NeckHurtRupert",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/neckhurtrupert.mp3"
        },
        {
            "name": "GULP GULP GULP",
            "color": "rgb(255, 0, 208)",
            "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
        },
        {
            "name": "FINISH HIM!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/finish-him.mp3"
        },
        {
            "name": "Fart Sound Effect (From 21st Century Memes)",
            "color": "rgb(151, 42, 2)",
            "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
        },
        {
            "name": "sonic rings falling",
            "color": "rgb(0, 51, 255)",
            "mp3": "/media/sounds/sonic-rings-drop.mp3"
        },
        {
            "name": "Pizza Tower Taunt",
            "color": "rgb(255, 38, 0)",
            "mp3": "/media/sounds/sfx_taunt.mp3"
        },
        {
            "name": "help me!",
            "color": "rgb(173, 0, 0)",
            "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
        },
        {
            "name": "Cinematic Boom",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cinematicboom.mp3"
        },
        {
            "name": "Nooo la polizia",
            "color": "rgb(43, 128, 255)",
            "mp3": "/media/sounds/nooo-la-polizia.mp3"
        },
        {
            "name": "Eero",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/eero.mp3"
        },
        {
            "name": "MUSICA DE SIGMA ESTOURADO",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
        },
        {
            "name": "Record scratch sound effect",
            "color": "rgb(255, 51, 0)",
            "mp3": "/media/sounds/record-scratch_1.mp3"
        },
        {
            "name": "Zelda chest opening",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
        },
        {
            "name": "Steal a Brainrot kid cry",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/steal-a-brainrot-kid-cry.mp3"
        },
        {
            "name": "Paque te enojas bebe",
            "color": "rgb(20, 12, 255)",
            "mp3": "/media/sounds/paque-te-enojas-bebe.mp3"
        },
        {
            "name": "Yosha",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/yosha.mp3"
        },
        {
            "name": "GULP GULP GULP",
            "color": "rgb(255, 0, 208)",
            "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
        },
        {
            "name": "Pookie Bear",
            "color": "rgb(255, 0, 200)",
            "mp3": "/media/sounds/pookie-bear.mp3"
        },
        {
            "name": "Speedrun music",
            "color": "rgb(56, 255, 34)",
            "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
        },
        {
            "name": "Mexican trumpet",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/el-batido.mp3"
        },
        {
            "name": "3.2.1. Go",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
        },
        {
            "name": "bass boost discord call when headphones are on",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/bass-boost-discord-call-when-headphones-are-on.mp3"
        },
        {
            "name": "This is... MASS INFECTION!",
            "color": "rgb(15, 51, 4)",
            "mp3": "/media/sounds/this-is-mass-infection.mp3"
        },
        {
            "name": "Hell Naw Dog",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hell-naw-dog.mp3"
        },
        {
            "name": "Knuckles-Oh No",
            "color": "rgb(204, 51, 0)",
            "mp3": "/media/sounds/oh_no_1.mp3"
        },
        {
            "name": "Ka-Ching!",
            "color": "rgb(0, 51, 204)",
            "mp3": "/media/sounds/ka-ching.mp3"
        },
        {
            "name": "Stone Sliding",
            "color": "rgb(115, 114, 118)",
            "mp3": "/media/sounds/stone-sliding.mp3"
        },
        {
            "name": "LOUD ALARM",
            "color": "rgb(255, 11, 11)",
            "mp3": "/media/sounds/video0_k03U0Iy.mp3"
        },
        {
            "name": "eh?eh?ehhhh?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
        },
        {
            "name": "Fire Whoosh",
            "color": "rgb(238, 228, 23)",
            "mp3": "/media/sounds/fire-whoosh.mp3"
        },
        {
            "name": "Доброе утро моя девочка",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
        },
        {
            "name": "Nuke Bomb!",
            "color": "rgb(255, 119, 8)",
            "mp3": "/media/sounds/nuke-bomb.mp3"
        },
        {
            "name": "Sneaky Golem",
            "color": "rgb(69, 11, 120)",
            "mp3": "/media/sounds/sneaky-golem.mp3"
        },
        {
            "name": "poncho risa",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/poncho-risa.mp3"
        },
        {
            "name": "Who is that Pokemon?!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/vine-who-is-that-pokemon-its-pikachu.mp3"
        },
        {
            "name": "Hyper-Reallistic Knocking",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
        },
        {
            "name": "bye bye mewing",
            "color": "rgb(35, 26, 255)",
            "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
        },
        {
            "name": "FNAF 2 Hallway Ambience",
            "color": "rgb(93, 255, 240)",
            "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
        },
        {
            "name": "Boxing Bell",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/boxing-bell.mp3"
        },
        {
            "name": "peter griffin laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
        },
        {
            "name": "Fnaf Freddy’s laugh",
            "color": "rgb(105, 37, 37)",
            "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
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
            "name": "Violin screech meme",
            "color": "rgb(71, 255, 83)",
            "mp3": "/media/sounds/violin-screech-meme.mp3"
        },
        {
            "name": "Boing Boing",
            "color": "rgb(255, 0, 153)",
            "mp3": "/media/sounds/japan-oppai-sound.mp3"
        },
        {
            "name": "Glass breaking sound effect",
            "color": "rgb(91, 225, 255)",
            "mp3": "/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3"
        },
        {
            "name": "окак",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/okak.mp3"
        },
        {
            "name": "levántenseeeee",
            "color": "rgb(255, 17, 227)",
            "mp3": "/media/sounds/levantenseeeee.mp3"
        },
        {
            "name": "I got this meme sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/i-got-this-meme-sound.mp3"
        },
        {
            "name": "sans voice",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/voice_sans.mp3"
        },
        {
            "name": "Ultra Instinct",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
        },
        {
            "name": "peter griffin laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
        },
        {
            "name": "Windows 10 USB connect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/connect.mp3"
        },
        {
            "name": "Pizza Tower Taunt",
            "color": "rgb(255, 38, 0)",
            "mp3": "/media/sounds/sfx_taunt.mp3"
        },
        {
            "name": "discord cat scream",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/discord-cat-scream.mp3"
        },
        {
            "name": "Gaster Vanish",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/gaster-vanish.mp3"
        },
        {
            "name": "Kirby falling",
            "color": "rgb(255, 40, 215)",
            "mp3": "/media/sounds/kirby-falling.mp3"
        },
        {
            "name": "Eero",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/eero.mp3"
        },
        {
            "name": "balerina capuchina",
            "color": "rgb(255, 145, 233)",
            "mp3": "/media/sounds/balerina-capuchina.mp3"
        },
        {
            "name": "Metal pipe sound",
            "color": "rgb(96, 255, 231)",
            "mp3": "/media/sounds/metal-pipe-sound.mp3"
        },
        {
            "name": "bombardino-crocodilo",
            "color": "rgb(27, 106, 13)",
            "mp3": "/media/sounds/bombardino-crocodilo_MSpHN9M.mp3"
        },
        {
            "name": "Hornet SHAA",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hornet_shaa.mp3"
        },
        {
            "name": "WTF BOOM!",
            "color": "rgb(255, 153, 204)",
            "mp3": "/media/sounds/wtf_boom.mp3"
        },
        {
            "name": "FINISH HIM!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/finish-him.mp3"
        },
        {
            "name": "Teleport sound",
            "color": "rgb(102, 204, 255)",
            "mp3": "/media/sounds/dbz-teleport.mp3"
        },
        {
            "name": "Tarkov grenade",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
        },
        {
            "name": "Android Notification Bass Boosted",
            "color": "rgb(0, 255, 9)",
            "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
        },
        {
            "name": "TF2 Scout Metal Bat",
            "color": "rgb(0, 221, 255)",
            "mp3": "/media/sounds/bat_hit.mp3"
        },
        {
            "name": "Drum Roll Sound Effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
        },
        {
            "name": "Sparkleeeeeee",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
        },
        {
            "name": "skedaddle",
            "color": "rgb(7, 62, 78)",
            "mp3": "/media/sounds/skedaddle.mp3"
        },
        {
            "name": "ROBLOX bass sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bass_vCrw3wU.mp3"
        },
        {
            "name": "POU ESTOURADO",
            "color": "rgb(255, 210, 73)",
            "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
        },
        {
            "name": "Roblox old winning sound effect",
            "color": "rgb(255, 246, 8)",
            "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
        },
        {
            "name": "Volkswagen das auto remix",
            "color": "rgb(218, 255, 234)",
            "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
        },
        {
            "name": "Soda Pop - Kpop Demon Hunters - Saja Boys - MP3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/soda-pop-kpop-demon-hunters-saja-boys-mp3.mp3"
        },
        {
            "name": "Arise - Solo Leveling",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/arise-solo-leveling.mp3"
        },
        {
            "name": "GIT GUD hornet",
            "color": "rgb(255, 201, 63)",
            "mp3": "/media/sounds/git-gud-hornet.mp3"
        },
        {
            "name": "Roblox Death Sound Effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
        },
        {
            "name": "I am going to commit great crime",
            "color": "rgb(18, 52, 112)",
            "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
        },
        {
            "name": "spongebob Hi How Are Ya?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
        },
        {
            "name": "Wah wah wah waaaaaaaahhh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
        },
        {
            "name": "Woman Slap",
            "color": "rgb(255, 120, 53)",
            "mp3": "/media/sounds/woman-slap.mp3"
        },
        {
            "name": "skedaddle",
            "color": "rgb(7, 62, 78)",
            "mp3": "/media/sounds/skedaddle.mp3"
        },
        {
            "name": "ROBLOX bass sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bass_vCrw3wU.mp3"
        },
        {
            "name": "Roblox old winning sound effect",
            "color": "rgb(255, 246, 8)",
            "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
        },
        {
            "name": "Metal pipe sound",
            "color": "rgb(96, 255, 231)",
            "mp3": "/media/sounds/metal-pipe-sound.mp3"
        },
        {
            "name": "WTF BOOM!",
            "color": "rgb(255, 153, 204)",
            "mp3": "/media/sounds/wtf_boom.mp3"
        },
        {
            "name": "Teleport sound",
            "color": "rgb(102, 204, 255)",
            "mp3": "/media/sounds/dbz-teleport.mp3"
        },
        {
            "name": "Sparkleeeeeee",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
        },
        {
            "name": "POU ESTOURADO",
            "color": "rgb(255, 210, 73)",
            "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
        },
        {
            "name": "cha-ching money",
            "color": "rgb(47, 138, 79)",
            "mp3": "/media/sounds/cha-ching-money.mp3"
        },
        {
            "name": "Volkswagen das auto remix",
            "color": "rgb(218, 255, 234)",
            "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
        },
        {
            "name": "tonight’s the night",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tonights-the-night.mp3"
        },
        {
            "name": "Lula empurra mole",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lula-empurra-mole.mp3"
        },
        {
            "name": "lá grande Combonicione de brainrots",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/la-grande-combonicione-de-brainrots.mp3"
        },
        {
            "name": "Arise - Solo Leveling",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/arise-solo-leveling.mp3"
        },
        {
            "name": "GIT GUD hornet",
            "color": "rgb(255, 201, 63)",
            "mp3": "/media/sounds/git-gud-hornet.mp3"
        },
        {
            "name": "Roblox Death Sound Effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
        },
        {
            "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
            "color": "rgb(6, 6, 72)",
            "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
        },
        {
            "name": "spongebob Hi How Are Ya?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
        },
        {
            "name": "Woman Slap",
            "color": "rgb(255, 120, 53)",
            "mp3": "/media/sounds/woman-slap.mp3"
        },
        {
            "name": "The bluetooth device is ready to pair",
            "color": "rgb(0, 136, 255)",
            "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
        },
        {
            "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
            "color": "rgb(217, 0, 0)",
            "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
        },
        {
            "name": "Hello your computer has virus",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
        },
        {
            "name": "Gojo domain expansion",
            "color": "rgb(217, 202, 255)",
            "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
        },
        {
            "name": "THE LOUDEST NOISE EVER!",
            "color": "rgb(255, 247, 246)",
            "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
        },
        {
            "name": "Godzilla 2014 Roar",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/godzilla-2014-roar.mp3"
        },
        {
            "name": "Mentality",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mentality.mp3"
        },
        {
            "name": "Blood Splatter 44101",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
        },
        {
            "name": "Burp & Fart",
            "color": "rgb(255, 114, 114)",
            "mp3": "/media/sounds/burp-fart.mp3"
        },
        {
            "name": "Oh No Meme (2020)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
        },
        {
            "name": "Cállate baboso MM",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/callate-baboso-mm.mp3"
        },
        {
            "name": "Golden Huntrix",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/golden-huntrix.mp3"
        },
        {
            "name": "Ralf Schumacher - Mitten in die Fresse",
            "color": "rgb(0, 76, 255)",
            "mp3": "/media/sounds/ralf-schumacher-mitten-in-die-fresse.mp3"
        },
        {
            "name": "AUGHHHHH... AUGHHHHH",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
        },
        {
            "name": "That was easy",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/that_was_easy.mp3"
        },
        {
            "name": "Pedro Song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pedro-song.mp3"
        },
        {
            "name": "OOOH MY GOD",
            "color": "rgb(12, 255, 44)",
            "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
        },
        {
            "name": "Teleport sound",
            "color": "rgb(102, 204, 255)",
            "mp3": "/media/sounds/dbz-teleport.mp3"
        },
        {
            "name": "defuse valorant",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/defuse-valorant.mp3"
        },
        {
            "name": "Cash Register",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/audiojoiner120623175716.mp3"
        },
        {
            "name": "Roblox Gravity Coil",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-gravity-coil.mp3"
        },
        {
            "name": "PUMPKIN MEME",
            "color": "rgb(255, 133, 52)",
            "mp3": "/media/sounds/pumpkin-meme.mp3"
        },
        {
            "name": "gorilla tag scary",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gorilla-tag-scary.mp3"
        },
        {
            "name": "Oh No Meme (2020)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
        },
        {
            "name": "Roaring Knight Roar",
            "color": "rgb(46, 0, 0)",
            "mp3": "/media/sounds/roaring-knight-roar.mp3"
        },
        {
            "name": "Volkswagen das auto remix",
            "color": "rgb(218, 255, 234)",
            "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
        },
        {
            "name": "Sybau",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sybau.mp3"
        },
        {
            "name": "Whoosh Wind",
            "color": "rgb(104, 124, 255)",
            "mp3": "/media/sounds/whoosh-wind.mp3"
        },
        {
            "name": "Roblox Death Sound Effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
        },
        {
            "name": "WTF BOOM!",
            "color": "rgb(255, 153, 204)",
            "mp3": "/media/sounds/wtf_boom.mp3"
        },
        {
            "name": "VERY LOUD AIRHORN",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/veryloudairhorn.mp3"
        },
        {
            "name": "The bluetooth device is ready to pair",
            "color": "rgb(0, 136, 255)",
            "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
        },
        {
            "name": "mr krabs walking",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mr-krabs-walking.mp3"
        },
        {
            "name": "Woo, Yeah Baby!",
            "color": "rgb(255, 0, 238)",
            "mp3": "/media/sounds/moistcr1tikal-woooh-yeah-baby-meme-360p.mp3"
        },
        {
            "name": "Hello your computer has virus",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
        },
        {
            "name": "glitch sound effect",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/glitch-sound-effect_FugN82U.mp3"
        },
        {
            "name": "E o pix? Nada ainda?",
            "color": "rgb(243, 255, 79)",
            "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
        },
        {
            "name": "Blood Splatter 44101",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
        },
        {
            "name": "HUE HUE HUE metal sonic plush",
            "color": "rgb(0, 16, 127)",
            "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
        },
        {
            "name": "Lula empurra mole",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lula-empurra-mole.mp3"
        },
        {
            "name": "Ocelot Meow",
            "color": "rgb(204, 0, 0)",
            "mp3": "/media/sounds/ocelot-meowing.mp3"
        },
        {
            "name": "GIT GUD hornet",
            "color": "rgb(255, 201, 63)",
            "mp3": "/media/sounds/git-gud-hornet.mp3"
        },
        {
            "name": "AUGHHHHH... AUGHHHHH",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
        },
        {
            "name": "He Needs Some Milk",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
        },
        {
            "name": "Pedro Song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pedro-song.mp3"
        },
        {
            "name": "spongebob Hi How Are Ya?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
        },
        {
            "name": "OOOH MY GOD",
            "color": "rgb(12, 255, 44)",
            "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
        },
        {
            "name": "FEIN FEIN FEIN FEIN",
            "color": "rgb(255, 154, 220)",
            "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
        },
        {
            "name": "Sonic.EXE laugh",
            "color": "rgb(17, 45, 255)",
            "mp3": "/media/sounds/sonic-exe-laugh.mp3"
        },
        {
            "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
            "color": "rgb(217, 0, 0)",
            "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
        },
        {
            "name": "Minecraft Drop Item/Block Sound Effect",
            "color": "rgb(8, 255, 25)",
            "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
        },
        {
            "name": "Man Screaming Meme",
            "color": "rgb(111, 214, 255)",
            "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
        },
        {
            "name": "Enemy UAV (Warzone)",
            "color": "rgb(93, 136, 255)",
            "mp3": "/media/sounds/modern-warfare-_-enemy-uav-overhead-uk-team-leader.mp3"
        },
        {
            "name": "Super Mario Pipe",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/super-mario-bros.mp3"
        },
        {
            "name": "sigma boy bass boosted caca",
            "color": "rgb(10, 14, 255)",
            "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
        },
        {
            "name": "Thunder",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/thunder-sound-effect.mp3"
        },
        {
            "name": "Suspense strike",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
        },
        {
            "name": "Shotgun Reload",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
        },
        {
            "name": "Mexican trumpet",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/el-batido.mp3"
        },
        {
            "name": "Nintendo Game Boy Startup",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
        },
        {
            "name": "Wrong lie incorrect buzzer",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
        },
        {
            "name": "Samsung estourado",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/samsung-estourado.mp3"
        },
        {
            "name": "The Rake Scream",
            "color": "rgb(217, 215, 158)",
            "mp3": "/media/sounds/the-rake-scream.mp3"
        },
        {
            "name": "clap wet",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clap-wet.mp3"
        },
        {
            "name": "HUE HUE HUE metal sonic plush",
            "color": "rgb(0, 16, 127)",
            "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
        },
        {
            "name": "do you suffer from a lack of a father figure?",
            "color": "rgb(153, 255, 188)",
            "mp3": "/media/sounds/do-you-suffer-from-a-lack-of-a-father-figure.mp3"
        },
        {
            "name": "hatsune miku WEEEEEEEE",
            "color": "rgb(133, 249, 255)",
            "mp3": "/media/sounds/hatsune-miku-weeeeeeee.mp3"
        },
        {
            "name": "Im mafiosoing it",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/im-mafiosoing-it.mp3"
        },
        {
            "name": "Chaloo",
            "color": "rgb(100, 234, 46)",
            "mp3": "/media/sounds/chaloo.mp3"
        },
        {
            "name": "Ocelot Meow",
            "color": "rgb(204, 0, 0)",
            "mp3": "/media/sounds/ocelot-meowing.mp3"
        },
        {
            "name": "Golden knight ! Clash royale",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/golden-knight-clash-royale.mp3"
        },
        {
            "name": "Star Platinum Part 6 Time Stop Sound Effect",
            "color": "rgb(134, 81, 189)",
            "mp3": "/media/sounds/star-platinum-part-6-time-stop-sound-effect.mp3"
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
            "name": "FAIL SOUND MEME",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fail-sound-effect.mp3"
        },
        {
            "name": "Grunt Birthday Party",
            "color": "rgb(255, 153, 0)",
            "mp3": "/media/sounds/grunt-birthday-party.mp3"
        },
        {
            "name": "Johnny Test Whip Crack",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
        },
        {
            "name": "Sonic spindash",
            "color": "rgb(19, 113, 255)",
            "mp3": "/media/sounds/sonic-spindash.mp3"
        },
        {
            "name": "Minecraft Enderman Teleport Sound",
            "color": "rgb(189, 19, 231)",
            "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
        },
        {
            "name": "Z Z Z Z Z Z",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/z-z-z-z-z-z.mp3"
        },
        {
            "name": "spongebob walk",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/spongebob-walk.mp3"
        },
        {
            "name": "PUMPKIN MEME",
            "color": "rgb(255, 133, 52)",
            "mp3": "/media/sounds/pumpkin-meme.mp3"
        },
        {
            "name": "MUSICA DE SIGMA ESTOURADO",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
        },
        {
            "name": "clash royale king cry",
            "color": "rgb(33, 13, 255)",
            "mp3": "/media/sounds/clash-royale-king-cry.mp3"
        },
        {
            "name": "he fucked up!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/he-fucked-up.mp3"
        },
        {
            "name": "(mafioso) your mine",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mafioso-your-mine.mp3"
        },
        {
            "name": "brainrot cat",
            "color": "rgb(68, 255, 0)",
            "mp3": "/media/sounds/brainrot-cat.mp3"
        },
        {
            "name": "Goo goo Gaga (DOLL)",
            "color": "rgb(65, 255, 246)",
            "mp3": "/media/sounds/goo-goo-gaga-doll.mp3"
        },
        {
            "name": "Tralalelo Tralala Phonk",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tralalelo-tralala-phonk.mp3"
        },
        {
            "name": "1000 Bits - G-MIDÃO DO ZAP",
            "color": "rgb(100, 10, 10)",
            "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
        },
        {
            "name": "fnaf foxy scream sfx",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/fnaf-foxy-scream-sfx.mp3"
        },
        {
            "name": "Визг свиньи",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/vizg-svini.mp3"
        },
        {
            "name": "Steal a Brainrot kid cry",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/steal-a-brainrot-kid-cry.mp3"
        },
        {
            "name": "HO HO GREEN GIANT",
            "color": "rgb(38, 255, 49)",
            "mp3": "/media/sounds/ho-ho-ho-green-giant-audio-clip_yJDcgA1.mp3"
        },
        {
            "name": "poncho risa",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/poncho-risa.mp3"
        },
        {
            "name": "ANTONIO LOBATO!!!",
            "color": "rgb(6, 0, 0)",
            "mp3": "/media/sounds/antonio-lobato_8zPnpk3.mp3"
        },
        {
            "name": "Mission Failed",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
        },
        {
            "name": "Deez Nuts Got EM AHAHAHAHA",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
        },
        {
            "name": "Run Meme",
            "color": "rgb(102, 0, 255)",
            "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
        },
        {
            "name": "Pedro Song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pedro-song.mp3"
        },
        {
            "name": "roblox screaming kid",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
        },
        {
            "name": "Pew",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
        },
        {
            "name": "Patrick Star Screaming",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
        },
        {
            "name": "Get yo fat ass back here",
            "color": "rgb(45, 235, 240)",
            "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
        },
        {
            "name": "Clash of Clans Startup",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clash_of_clan_start_up_soundmp3converter.mp3"
        },
        {
            "name": "Tokyo Drift Alert",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
        },
        {
            "name": "Roblox Gravity Coil",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-gravity-coil.mp3"
        },
        {
            "name": "Gaster Vanish",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/gaster-vanish.mp3"
        },
        {
            "name": "Mexican trumpet",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/el-batido.mp3"
        },
        {
            "name": "Social credit music",
            "color": "rgb(255, 245, 0)",
            "mp3": "/media/sounds/social-credit-music.mp3"
        },
        {
            "name": "Eye Of Rah sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
        },
        {
            "name": "shocking!",
            "color": "rgb(146, 239, 255)",
            "mp3": "/media/sounds/shocking_0NL2w3I.mp3"
        },
        {
            "name": "Squidward Walking",
            "color": "rgb(184, 223, 211)",
            "mp3": "/media/sounds/squidward-walking.mp3"
        },
        {
            "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
        },
        {
            "name": "Cartoon Splash",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoonsplash.mp3"
        },
        {
            "name": "Twitch Default Alert",
            "color": "rgb(0, 255, 170)",
            "mp3": "/media/sounds/default_eKkIk7O.mp3"
        },
        {
            "name": "Metal pipe sound",
            "color": "rgb(96, 255, 231)",
            "mp3": "/media/sounds/metal-pipe-sound.mp3"
        },
        {
            "name": "you good mud",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-good-mud.mp3"
        },
        {
            "name": "Mambo曼波 诗歌剧Matikanetannhauser",
            "color": "rgb(255, 211, 172)",
            "mp3": "/media/sounds/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3"
        },
        {
            "name": "Lizzard",
            "color": "rgb(61, 255, 129)",
            "mp3": "/media/sounds/lizzard.mp3"
        },
        {
            "name": "окак",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/okak.mp3"
        },
        {
            "name": "hello sound effect(rare)",
            "color": "rgb(170, 255, 227)",
            "mp3": "/media/sounds/hello-sound-effect-rare.mp3"
        },
        {
            "name": "Soda Pop - Kpop Demon Hunters - Saja Boys - MP3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/soda-pop-kpop-demon-hunters-saja-boys-mp3.mp3"
        },
        {
            "name": "Who is that Pokemon?!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/vine-who-is-that-pokemon-its-pikachu.mp3"
        },
        {
            "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
            "color": "rgb(0, 0, 153)",
            "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
        },
        {
            "name": "jojo - ayayay",
            "color": "rgb(255, 197, 60)",
            "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
        },
        {
            "name": "Tarkov grenade",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
        },
        {
            "name": "bomb has been planted",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
        },
        {
            "name": "Johnny Test Whip Crack",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
        },
        {
            "name": "Dial Up Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dial_up.mp3"
        },
        {
            "name": "Mario Star Power",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
        },
        {
            "name": "Was that the bite of 87",
            "color": "rgb(204, 228, 255)",
            "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
        },
        {
            "name": "Mario - Power Up",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/01-power-up-mario.mp3"
        },
        {
            "name": "crowd gasp",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
        },
        {
            "name": "Cannon explosion",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cannon.mp3"
        },
        {
            "name": "3.2.1. Go",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
        },
        {
            "name": "fortnite pump shotgun",
            "color": "rgb(81, 255, 41)",
            "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
        },
        {
            "name": "Samsung estourado",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/samsung-estourado.mp3"
        },
        {
            "name": "Tiktok Fart Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fart-tiktok.mp3"
        },
        {
            "name": "meme violin (sad violin)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
        },
        {
            "name": "jet set radio spray full",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
        },
        {
            "name": "Dwayne Rock Johnson Eyebrow raise meme",
            "color": "rgb(5, 247, 255)",
            "mp3": "/media/sounds/dwayne-rock-johnson-eyebrow-raise-meme.mp3"
        },
        {
            "name": "Gangnam Style Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gangnam-style-meme.mp3"
        },
        {
            "name": "АХ ДЯДЯ САША НЕ ТАК ГЛУБОКО",
            "color": "rgb(255, 35, 146)",
            "mp3": "/media/sounds/akh-diadia-sasha-ne-tak-gluboko.mp3"
        },
        {
            "name": "А тебя это ебать не должно",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/a-tebia-eto-ebat-ne-dolzhno.mp3"
        },
        {
            "name": "I got this meme sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/i-got-this-meme-sound.mp3"
        },
        {
            "name": "FAHHHH 6",
            "color": "rgb(31, 57, 255)",
            "mp3": "/media/sounds/fahhhh-6.mp3"
        },
        {
            "name": "was geht yallah",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/was-geht-yallah.mp3"
        },
        {
            "name": "GIT GUD hornet",
            "color": "rgb(255, 201, 63)",
            "mp3": "/media/sounds/git-gud-hornet.mp3"
        },
        {
            "name": "Yosha",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/yosha.mp3"
        },
        {
            "name": "Stop the Cap",
            "color": "rgb(79, 255, 211)",
            "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
        },
        {
            "name": "Siren head",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/siren-head-sounds-new.mp3"
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
            "name": "English or spanish ?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/english-or-spanish_YRFEwaM.mp3"
        },
        {
            "name": "Windows 10 USB connect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/connect.mp3"
        },
        {
            "name": "Thunder",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/thunder-sound-effect.mp3"
        },
        {
            "name": "Singing Angels",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/angels-singing.mp3"
        },
        {
            "name": "RAAAAH",
            "color": "rgb(255, 84, 84)",
            "mp3": "/media/sounds/raaaah.mp3"
        },
        {
            "name": "Munch (eating / biting)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/munch-sound-effect.mp3"
        },
        {
            "name": "Punch! Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/punch-sound-effect.mp3"
        },
        {
            "name": "I always come back - ScrapTrap/William Afton",
            "color": "rgb(75, 159, 73)",
            "mp3": "/media/sounds/ialwayscomeback.mp3"
        },
        {
            "name": "Rahhh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rahhh.mp3"
        },
        {
            "name": "RONALDO SIUUUU",
            "color": "rgb(46, 138, 255)",
            "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
        },
        {
            "name": "Goofy ahhh",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/goofy-ahhh.mp3"
        },
        {
            "name": "UNDERTALE",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/undertale.mp3"
        },
        {
            "name": "YOU NEED TO LEAVE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-need-to-leave.mp3"
        },
        {
            "name": "Low honor RDR 2",
            "color": "rgb(128, 0, 0)",
            "mp3": "/media/sounds/low-honor-rdr-2.mp3"
        },
        {
            "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
        },
        {
            "name": "Goo goo Gaga (DOLL)",
            "color": "rgb(65, 255, 246)",
            "mp3": "/media/sounds/goo-goo-gaga-doll.mp3"
        },
        {
            "name": "орешки биг боб",
            "color": "rgb(52, 6, 255)",
            "mp3": "/media/sounds/oreshki-big-bob.mp3"
        },
        {
            "name": "gigachad phonk house",
            "color": "rgb(173, 143, 255)",
            "mp3": "/media/sounds/gigachad-phonk-house.mp3"
        },
        {
            "name": "I got a glock in my rori",
            "color": "rgb(255, 51, 204)",
            "mp3": "/media/sounds/fetty_wap_679_feat_2.mp3"
        },
        {
            "name": "was geht yallah",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/was-geht-yallah.mp3"
        },
        {
            "name": "Ни одна мразь",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/ni-odna-mraz.mp3"
        },
        {
            "name": "My Name Is Jeff",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/ringtone_20.mp3"
        },
        {
            "name": "Sicko Mode Meme SFX",
            "color": "rgb(255, 170, 0)",
            "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
        },
        {
            "name": "Goose HONK!",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/honk-sound.mp3"
        },
        {
            "name": "yoshi tongue",
            "color": "rgb(0, 153, 0)",
            "mp3": "/media/sounds/yoshi-tongue.mp3"
        },
        {
            "name": "undertale - megalovania",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/megalovania.mp3"
        },
        {
            "name": "can i pet that dog",
            "color": "rgb(73, 255, 79)",
            "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
        },
        {
            "name": "Squid Game",
            "color": "rgb(237, 255, 0)",
            "mp3": "/media/sounds/squid-game.mp3"
        },
        {
            "name": "Tom and jerry scream",
            "color": "rgb(145, 255, 126)",
            "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
        },
        {
            "name": "Dry Bones (death)",
            "color": "rgb(189, 189, 189)",
            "mp3": "/media/sounds/dry-bones-death.mp3"
        },
        {
            "name": "Neck crack",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/neck-crack-sound-effect-free-download.mp3"
        },
        {
            "name": "mateooo italian brainrot by Tristan.k",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mateooo-italian-brainrot-by-tristan-k.mp3"
        },
        {
            "name": "kaiser get on your knees blue lock",
            "color": "rgb(227, 227, 227)",
            "mp3": "/media/sounds/kaiser-get-on-your-knees-blue-lock.mp3"
        },
        {
            "name": "formula 1 box box",
            "color": "rgb(255, 81, 81)",
            "mp3": "/media/sounds/formula-1-box-box.mp3"
        },
        {
            "name": "flashbang cs",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/flashbang-cs_qoRhxLn.mp3"
        },
        {
            "name": "Hah Gay",
            "color": "rgb(204, 153, 51)",
            "mp3": "/media/sounds/ha-gay_ulqsmZY.mp3"
        },
        {
            "name": "YES Shaxx",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/w64_audio_0178_en_0_pkg-0000000406.mp3"
        },
        {
            "name": "doodlebob.mp4",
            "color": "rgb(89, 88, 90)",
            "mp3": "/media/sounds/doodlebob-mp4.mp3"
        },
        {
            "name": "Velociraptor Bark",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/velociraptor-bark.mp3"
        },
        {
            "name": "We Got Him Meme Song Loud",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
        },
        {
            "name": "Pookie Bear",
            "color": "rgb(255, 0, 200)",
            "mp3": "/media/sounds/pookie-bear.mp3"
        },
        {
            "name": "Oh Hell No (Vine)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
        },
        {
            "name": "Classic Batman Transition",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
        },
        {
            "name": "Meowww",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/the-end-meow-by-nekocat-just-3-second-1.mp3"
        },
        {
            "name": "Subway Surfers",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/subway-surfers.mp3"
        },
        {
            "name": "gorilla tag scary",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gorilla-tag-scary.mp3"
        },
        {
            "name": "ROJÃO SUPER ESTOURADO!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rojao-super-estourado.mp3"
        },
        {
            "name": "miku miku beam",
            "color": "rgb(7, 255, 240)",
            "mp3": "/media/sounds/miku-miku-beam.mp3"
        },
        {
            "name": "Blood Splatter 44101",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
        },
        {
            "name": "America Eagle Gunshots",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/america-eagle-gunshots.mp3"
        },
        {
            "name": "Oh no! Our table..It's broken :(",
            "color": "rgb(159, 194, 255)",
            "mp3": "/media/sounds/oh-no-our-table-its-broken_LWGeSdX.mp3"
        },
        {
            "name": "500 cigarettes",
            "color": "rgb(23, 113, 18)",
            "mp3": "/media/sounds/500-cigarettes.mp3"
        },
        {
            "name": "пердеж",
            "color": "rgb(0, 255, 72)",
            "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
        },
        {
            "name": "PASSO BEM SOLTO-SLOWED",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/passo-bem-solto-slowed_IOm7dtZ.mp3"
        },
        {
            "name": "formula 1 box box",
            "color": "rgb(255, 81, 81)",
            "mp3": "/media/sounds/formula-1-box-box.mp3"
        },
        {
            "name": "grub hollow knight",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/grub-hollow-knight.mp3"
        },
        {
            "name": "Hornet HEKALE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hollow-knight-hornet-voice-14.mp3"
        },
        {
            "name": "GIT GUD hornet",
            "color": "rgb(255, 201, 63)",
            "mp3": "/media/sounds/git-gud-hornet.mp3"
        },
        {
            "name": "STFU TRASH- Filthy Frank",
            "color": "rgb(255, 31, 232)",
            "mp3": "/media/sounds/stfu-trash-filthy-frank.mp3"
        },
        {
            "name": "Long Brain Fart Extremely slowed by Gabriel",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/long-brain-fart-extremely-slowed-by-gabriel.mp3"
        },
        {
            "name": "cowboy quack",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/quack-quack_cPAoVLe.mp3"
        },
        {
            "name": "Darth Vader NOOOOOOOOO!",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/nooo.mp3"
        },
        {
            "name": "Giorno's Theme normal",
            "color": "rgb(255, 250, 114)",
            "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
        },
        {
            "name": "miguel o'harris (spider-man 2099)",
            "color": "rgb(21, 32, 157)",
            "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
        },
        {
            "name": "I always come back - ScrapTrap/William Afton",
            "color": "rgb(75, 159, 73)",
            "mp3": "/media/sounds/ialwayscomeback.mp3"
        },
        {
            "name": "DEADMAN ANIME",
            "color": "rgb(255, 73, 137)",
            "mp3": "/media/sounds/deadman-fx.mp3"
        },
        {
            "name": "Snake death scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
        },
        {
            "name": "What the Hell Oh My Gawd No Way",
            "color": "rgb(185, 95, 95)",
            "mp3": "/media/sounds/wthomg-pt-2.mp3"
        },
        {
            "name": "Jeopardy Correct Answer",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rightanswer.mp3"
        },
        {
            "name": "random.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/random-mp3.mp3"
        },
        {
            "name": "VINE BOOM BASS BOOSTED MAN",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
        },
        {
            "name": "OH MA GAUD VINE",
            "color": "rgb(181, 239, 255)",
            "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
        },
        {
            "name": "Risadinha de ladrão",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
        },
        {
            "name": "Old Church Bell Meme",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/old-church-bell-meme.mp3"
        },
        {
            "name": "Annihilation the alien",
            "color": "rgb(10, 27, 255)",
            "mp3": "/media/sounds/annihilation-the-alien.mp3"
        },
        {
            "name": "E o pix? Nada ainda?",
            "color": "rgb(243, 255, 79)",
            "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
        },
        {
            "name": "FNAF Hooray!!!!",
            "color": "rgb(12, 255, 0)",
            "mp3": "/media/sounds/fnaf-hooray.mp3"
        },
        {
            "name": "why did u redeem it",
            "color": "rgb(255, 40, 158)",
            "mp3": "/media/sounds/why-did-u-redeem-it.mp3"
        },
        {
            "name": "AI MINHA XEREEE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ai-minha-xereee.mp3"
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
            "name": "Cartoon Bite",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
        },
        {
            "name": "Mario coin sound",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/mario_coin_sound.mp3"
        },
        {
            "name": "Shotgun Reload",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
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
            "name": "Playboi Carti What?",
            "color": "rgb(123, 0, 0)",
            "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
        },
        {
            "name": "Slendytubbies Tinky Winky",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/slendy1.mp3"
        },
        {
            "name": "Deaths whistle (sound only)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/deaths-whistle-sound-only.mp3"
        },
        {
            "name": "The Rake Scream",
            "color": "rgb(217, 215, 158)",
            "mp3": "/media/sounds/the-rake-scream.mp3"
        },
        {
            "name": "glitch sound effect",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/glitch-sound-effect_FugN82U.mp3"
        },
        {
            "name": "Dragon Ball Z Heavy Punch",
            "color": "rgb(38, 190, 255)",
            "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
        },
        {
            "name": "Kim Possible Sitch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kim-possible-ringtone.mp3"
        },
        {
            "name": "sad music indian",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpauxfo4ff.mp3"
        },
        {
            "name": "roblox classic jump",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-classic-jump.mp3"
        },
        {
            "name": "RDR2 low honour sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rdr2-low-honour-sound.mp3"
        },
        {
            "name": "Cállese el hocico MM",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/callese-el-hocico-mm.mp3"
        },
        {
            "name": "NBC Chime",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nbc-chimes-network-id.mp3"
        },
        {
            "name": "Arise - Solo Leveling",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/arise-solo-leveling.mp3"
        },
        {
            "name": "Minnesota Vikings Horn",
            "color": "rgb(67, 22, 104)",
            "mp3": "/media/sounds/vikinghorn.mp3"
        },
        {
            "name": "Zelda - Item Get",
            "color": "rgb(0, 153, 0)",
            "mp3": "/media/sounds/139-item-catch.mp3"
        },
        {
            "name": "Crab Rave",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/original_zeowGW1.mp3"
        },
        {
            "name": "Objection!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/phoenix-objection.mp3"
        },
        {
            "name": "Plug",
            "color": "rgb(24, 255, 44)",
            "mp3": "/media/sounds/plug.mp3"
        },
        {
            "name": "Censor Beep 2",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/censor-beep-2.mp3"
        },
        {
            "name": "defuse valorant",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/defuse-valorant.mp3"
        },
        {
            "name": "Grunt Birthday Party",
            "color": "rgb(255, 153, 0)",
            "mp3": "/media/sounds/grunt-birthday-party.mp3"
        },
        {
            "name": "Wait a minute who are you",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
        },
        {
            "name": "om nom nom roblox",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
        },
        {
            "name": "Undertale - Omega Flowey Laugh",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/00002a5b.mp3"
        },
        {
            "name": "Enemy UAV (Warzone)",
            "color": "rgb(93, 136, 255)",
            "mp3": "/media/sounds/modern-warfare-_-enemy-uav-overhead-uk-team-leader.mp3"
        },
        {
            "name": "Undertale - Damage Taken",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/undertale-damage-taken.mp3"
        },
        {
            "name": "Minecraft Explosions",
            "color": "rgb(162, 92, 0)",
            "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
        },
        {
            "name": "Sword Cut",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/espada-som.mp3"
        },
        {
            "name": "iPhone Sent Message",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sentmessage_1.mp3"
        },
        {
            "name": "Golden knight ! Clash royale",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/golden-knight-clash-royale.mp3"
        },
        {
            "name": "formula 1 box box",
            "color": "rgb(255, 81, 81)",
            "mp3": "/media/sounds/formula-1-box-box.mp3"
        },
        {
            "name": "Ralf Schumacher - Mitten in die Fresse",
            "color": "rgb(0, 76, 255)",
            "mp3": "/media/sounds/ralf-schumacher-mitten-in-die-fresse.mp3"
        },
        {
            "name": "STFU TRASH- Filthy Frank",
            "color": "rgb(255, 31, 232)",
            "mp3": "/media/sounds/stfu-trash-filthy-frank.mp3"
        },
        {
            "name": "Long Brain Fart Extremely slowed by Gabriel",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/long-brain-fart-extremely-slowed-by-gabriel.mp3"
        },
        {
            "name": "cowboy quack",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/quack-quack_cPAoVLe.mp3"
        },
        {
            "name": "Darth Vader NOOOOOOOOO!",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/nooo.mp3"
        },
        {
            "name": "Giorno's Theme normal",
            "color": "rgb(255, 250, 114)",
            "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
        },
        {
            "name": "Wait a minute who are you",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
        },
        {
            "name": "DEADMAN ANIME",
            "color": "rgb(255, 73, 137)",
            "mp3": "/media/sounds/deadman-fx.mp3"
        },
        {
            "name": "SPONGEBOB ONE HOUR LATER",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
        },
        {
            "name": "What the Hell Oh My Gawd No Way",
            "color": "rgb(185, 95, 95)",
            "mp3": "/media/sounds/wthomg-pt-2.mp3"
        },
        {
            "name": "om nom nom roblox",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
        },
        {
            "name": "SNORE MIMIMIMIMI",
            "color": "rgb(104, 169, 178)",
            "mp3": "/media/sounds/snore-mimimimimi.mp3"
        },
        {
            "name": "Jeopardy Correct Answer",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rightanswer.mp3"
        },
        {
            "name": "lego build",
            "color": "rgb(255, 116, 38)",
            "mp3": "/media/sounds/lego-build.mp3"
        },
        {
            "name": "random.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/random-mp3.mp3"
        },
        {
            "name": "Scary girl",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scary-girl.mp3"
        },
        {
            "name": "Pistol sound effect",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
        },
        {
            "name": "Nintendo Game Boy Startup",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
        },
        {
            "name": "subspace tripmine",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/subspace-tripmine.mp3"
        },
        {
            "name": "VINE BOOM BASS BOOSTED MAN",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
        },
        {
            "name": "OH MA GAUD VINE",
            "color": "rgb(181, 239, 255)",
            "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
        },
        {
            "name": "TOKYO DRIFT Teriyaki Boyz",
            "color": "rgb(244, 244, 244)",
            "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer_7vAtKUf.mp3"
        },
        {
            "name": "Cartoon Strings",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
        },
        {
            "name": "YOU NEED TO LEAVE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-need-to-leave.mp3"
        },
        {
            "name": "Uwu hannah",
            "color": "rgb(222, 74, 255)",
            "mp3": "/media/sounds/uwu-hannah.mp3"
        },
        {
            "name": "E o pix? Nada ainda?",
            "color": "rgb(243, 255, 79)",
            "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
        },
        {
            "name": "samsung spaceline notification",
            "color": "rgb(17, 0, 255)",
            "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
        },
        {
            "name": "Minecraft TNT",
            "color": "rgb(244, 255, 11)",
            "mp3": "/media/sounds/minecraft-explode1.mp3"
        },
        {
            "name": "Alexis Texas",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/alexis-texas.mp3"
        },
        {
            "name": "AI MINHA XEREEE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ai-minha-xereee.mp3"
        },
        {
            "name": "Lula empurra mole",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lula-empurra-mole.mp3"
        },
        {
            "name": "John doe roar",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/john-doe-roar.mp3"
        },
        {
            "name": "baby crying phonk",
            "color": "rgb(39, 115, 255)",
            "mp3": "/media/sounds/baby-crying-phonk.mp3"
        },
        {
            "name": "indian guy singing",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/indian-guy-singing.mp3"
        },
        {
            "name": "Deltarune ringtone",
            "color": "rgb(96, 116, 255)",
            "mp3": "/media/sounds/deltarune-ringtone_SnkHGfF.mp3"
        },
        {
            "name": "I got a glock in my rori",
            "color": "rgb(255, 51, 204)",
            "mp3": "/media/sounds/fetty_wap_679_feat_2.mp3"
        },
        {
            "name": "Konami Intro-Metal Gear Solid",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/konami.mp3"
        },
        {
            "name": "Steal a Brainrot - Job Job Job Sahur",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/steal-a-brainrot-job-job-job-sahur.mp3"
        },
        {
            "name": "Sahur song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sahur-song.mp3"
        },
        {
            "name": "WHAT ARE YOU DOING STEP BRO",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3"
        },
        {
            "name": "erm what the sigma",
            "color": "rgb(117, 187, 255)",
            "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
        },
        {
            "name": "We'll be right back",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/well-be-right-back.mp3"
        },
        {
            "name": "Goose HONK!",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/honk-sound.mp3"
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
            "name": "Oh Hell No (Vine)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
        },
        {
            "name": "You Stupid",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ustoopid.mp3"
        },
        {
            "name": "instant transmission",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
        },
        {
            "name": "Wait a minute who are you",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
        },
        {
            "name": "talking benn yes",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/talking-benn-yes.mp3"
        },
        {
            "name": "FBI Open the door!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fbi-open-the-door.mp3"
        },
        {
            "name": "can i pet that dog",
            "color": "rgb(73, 255, 79)",
            "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
        },
        {
            "name": "SNORE MIMIMIMIMI",
            "color": "rgb(104, 169, 178)",
            "mp3": "/media/sounds/snore-mimimimimi.mp3"
        },
        {
            "name": "lego build",
            "color": "rgb(255, 116, 38)",
            "mp3": "/media/sounds/lego-build.mp3"
        },
        {
            "name": "Pillar Men Awaken",
            "color": "rgb(153, 102, 51)",
            "mp3": "/media/sounds/jjba-pillar-men2.mp3"
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
            "name": "RONALDO SIUUUU",
            "color": "rgb(46, 138, 255)",
            "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
        },
        {
            "name": "JAWS THEME",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
        },
        {
            "name": "THE ONE PIECE IS REAL",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/the-one-piece-is-real.mp3"
        },
        {
            "name": "you're going to Brazil",
            "color": "rgb(29, 255, 44)",
            "mp3": "/media/sounds/your_going_to_brazil_among_us_meme_-526181161000490320.mp3"
        },
        {
            "name": "UNDERTALE",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/undertale.mp3"
        },
        {
            "name": "Dragon Ball Z Heavy Punch",
            "color": "rgb(38, 190, 255)",
            "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
        },
        {
            "name": "DBZA Vegeta: \"You ruined it and I'm leaving.\"",
            "color": "rgb(0, 156, 255)",
            "mp3": "/media/sounds/dbza-vegeta-you-ruined-it-and-im-leaving.mp3"
        },
        {
            "name": "cartoon poke",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoon-poke.mp3"
        },
        {
            "name": "loud jumpscare scream",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/loud-jumpscare-scream.mp3"
        },
        {
            "name": "Good boy (voice actor)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/good-boy-voice-actor.mp3"
        },
        {
            "name": "METAL PIPE EARRAPE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/metal-pipe-earrape.mp3"
        },
        {
            "name": "GRRRR clash royale",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/grrrr-clash-royale.mp3"
        },
        {
            "name": "Reverse sound effect",
            "color": "rgb(26, 109, 255)",
            "mp3": "/media/sounds/reverse-sound-effect.mp3"
        },
        {
            "name": "Минута пошла",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
        },
        {
            "name": "el rap de peru",
            "color": "rgb(131, 94, 27)",
            "mp3": "/media/sounds/el-rap-de-peru.mp3"
        },
        {
            "name": "\"I Want the Black Guy to Shut Up\"",
            "color": "rgb(227, 30, 23)",
            "mp3": "/media/sounds/i-want-the-black-guy-to-shut-up.mp3"
        },
        {
            "name": "gnarly katseye",
            "color": "rgb(26, 255, 0)",
            "mp3": "/media/sounds/gnarly-katseye.mp3"
        },
        {
            "name": "Adrian slowed",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/adrian-slowed.mp3"
        },
        {
            "name": "Ok Garmin? Video Speichern",
            "color": "rgb(0, 255, 5)",
            "mp3": "/media/sounds/ok-garmin-video-speichern_2fPL6RS.mp3"
        },
        {
            "name": "Bluudud alarm323",
            "color": "rgb(29, 215, 255)",
            "mp3": "/media/sounds/bluudud-alarm323.mp3"
        },
        {
            "name": "Hornet HEKALE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hollow-knight-hornet-voice-14.mp3"
        },
        {
            "name": "Deez Nuts Got EM AHAHAHAHA",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
        },
        {
            "name": "aughhhh tiktok",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aughhhh-tiktok.mp3"
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
            "name": "talking benn yes",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/talking-benn-yes.mp3"
        },
        {
            "name": "John Cena ARE YOU SURE",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/are-you-sure-about-that.mp3"
        },
        {
            "name": "Censor Beep",
            "color": "rgb(153, 204, 0)",
            "mp3": "/media/sounds/censor-beep-7.mp3"
        },
        {
            "name": "Nani what!?",
            "color": "rgb(47, 255, 40)",
            "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
        },
        {
            "name": "Bad joke (drums)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bad-joke-drums.mp3"
        },
        {
            "name": "Buddy Holly Weezer Guitar Lick",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
        },
        {
            "name": "Turn down for what (Oooooooh!)",
            "color": "rgb(0, 0, 255)",
            "mp3": "/media/sounds/turn-down-for-what.mp3"
        },
        {
            "name": "hey_its_me_goku",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hey-its-me-goku.mp3"
        },
        {
            "name": "IPhone Ringtone",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
        },
        {
            "name": "Scout Bonk",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scout_specialcompleted03_2.mp3"
        },
        {
            "name": "OHHHHHHH",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rap.mp3"
        },
        {
            "name": "Doorbell",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/door-bell-sound-effect.mp3"
        },
        {
            "name": "Real punch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/punch-notification_sound-493565.mp3"
        },
        {
            "name": "Stand Ready For My Arrival Worm",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
        },
        {
            "name": "Applause 2",
            "color": "rgb(204, 102, 255)",
            "mp3": "/media/sounds/applause-tony-d.mp3"
        },
        {
            "name": "Tiktok Fart Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fart-tiktok.mp3"
        },
        {
            "name": "fire alarm chirp",
            "color": "rgb(164, 147, 255)",
            "mp3": "/media/sounds/fire-alarm-chirp.mp3"
        },
        {
            "name": "You know what that means",
            "color": "rgb(146, 0, 0)",
            "mp3": "/media/sounds/you-know-what-that-means.mp3"
        },
        {
            "name": "im just a baby",
            "color": "rgb(14, 255, 212)",
            "mp3": "/media/sounds/im-just-a-baby.mp3"
        },
        {
            "name": "Silly pinoy laugh",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
        },
        {
            "name": "Arkh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/arkh.mp3"
        },
        {
            "name": "sad music indian",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpauxfo4ff.mp3"
        },
        {
            "name": "Saja Boys - Soda Pop",
            "color": "rgb(60, 245, 255)",
            "mp3": "/media/sounds/saja-boys-soda-pop.mp3"
        },
        {
            "name": "Evil Cat Laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/evil-cat-laugh.mp3"
        },
        {
            "name": "ksi lol",
            "color": "rgb(0, 255, 51)",
            "mp3": "/media/sounds/ksi-lol.mp3"
        },
        {
            "name": "C00lkidd hawk tuah",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
        },
        {
            "name": "Throw",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/throw_d4CPY0G.mp3"
        },
        {
            "name": "do you suffer from a lack of a father figure?",
            "color": "rgb(153, 255, 188)",
            "mp3": "/media/sounds/do-you-suffer-from-a-lack-of-a-father-figure.mp3"
        },
        {
            "name": "Goo goo Gaga (DOLL)",
            "color": "rgb(65, 255, 246)",
            "mp3": "/media/sounds/goo-goo-gaga-doll.mp3"
        },
        {
            "name": "Deltarune Queen Laugh",
            "color": "rgb(10, 255, 231)",
            "mp3": "/media/sounds/deltarune-queen-laugh.mp3"
        },
        {
            "name": "nothing but a clanker",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nothing-but-a-clanker.mp3"
        },
        {
            "name": "Pandemonium Attacking",
            "color": "rgb(47, 2, 2)",
            "mp3": "/media/sounds/pandemonium-attacking.mp3"
        },
        {
            "name": "flashbang cs",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/flashbang-cs_qoRhxLn.mp3"
        },
        {
            "name": "(EXTREMELY LOUD) I'm Back!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/extremely-loud-im-back-joeysworldtour.mp3"
        },
        {
            "name": "clash royale prince charge",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clash-royale-prince-charge.mp3"
        },
        {
            "name": "Flight Irish Spring Green",
            "color": "rgb(39, 255, 32)",
            "mp3": "/media/sounds/flight-irish-spring-green_sPDXG9p.mp3"
        },
        {
            "name": "The office- Omg! Ok, it's happening!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpeodo70zr.mp3"
        },
        {
            "name": "Suara Rem Truk Sumatra/Sulawesi/Kalimantan",
            "color": "rgb(13, 255, 245)",
            "mp3": "/media/sounds/suara-rem-truk-sumatra-sulawesi-kalimantan.mp3"
        },
        {
            "name": "my mother ate fries",
            "color": "rgb(255, 234, 0)",
            "mp3": "/media/sounds/my-mother-ate-fries_Iw5egij.mp3"
        },
        {
            "name": "Playboi carti",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/playboi-carti.mp3"
        },
        {
            "name": "Omnitrix Ativado",
            "color": "rgb(27, 255, 2)",
            "mp3": "/media/sounds/omnitrix-ativado.mp3"
        },
        {
            "name": "Star Platinum Part 6 Time Stop Sound Effect",
            "color": "rgb(134, 81, 189)",
            "mp3": "/media/sounds/star-platinum-part-6-time-stop-sound-effect.mp3"
        },
        {
            "name": "EVERYBODY BACKSTREET IS BACK",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/backstreet-boys-everybody-backstreets-back-official-video.mp3"
        },
        {
            "name": "Filthy Frank - This is cancer",
            "color": "rgb(51, 102, 153)",
            "mp3": "/media/sounds/filthy-frank-cancer.mp3"
        },
        {
            "name": "Pufferfish",
            "color": "rgb(255, 229, 170)",
            "mp3": "/media/sounds/aaughmp3.mp3"
        },
        {
            "name": "*Click* Nice",
            "color": "rgb(102, 102, 102)",
            "mp3": "/media/sounds/nioce.mp3"
        },
        {
            "name": "im in danger",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fma6waln.mp3"
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
            "name": "Tyler1 Help",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ayhelp.mp3"
        },
        {
            "name": "pokemon battle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pokemon-battle.mp3"
        },
        {
            "name": "Real gunshot",
            "color": "rgb(153, 255, 255)",
            "mp3": "/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
        },
        {
            "name": "wee weee weee",
            "color": "rgb(49, 255, 221)",
            "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
        },
        {
            "name": "Sneaky Snitch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/untitled_897.mp3"
        },
        {
            "name": "Imposter Kill (Among Us)",
            "color": "rgb(219, 64, 64)",
            "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
        },
        {
            "name": "You Know the Rules, Say Goodbye",
            "color": "rgb(193, 0, 0)",
            "mp3": "/media/sounds/you-know-the-rules-and-so-do-i-say-goodbye.mp3"
        },
        {
            "name": "Funny sounds",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ya.mp3"
        },
        {
            "name": "\"Heartbeat | Stress\" Phasmophobia",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
        },
        {
            "name": "\"Hey\" Female Voice Sound Effect",
            "color": "rgb(20, 156, 255)",
            "mp3": "/media/sounds/hey-female-voice-sound-effect.mp3"
        },
        {
            "name": "Women haha",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/women-haha.mp3"
        },
        {
            "name": "why did you redeem it",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/why-did-you-redeem-it.mp3"
        },
        {
            "name": "Weird route jingle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/weird-route-jingle.mp3"
        },
        {
            "name": "Six seven",
            "color": "rgb(36, 61, 255)",
            "mp3": "/media/sounds/six-seven_okPwnRN.mp3"
        },
        {
            "name": "my mother ate fries",
            "color": "rgb(255, 234, 0)",
            "mp3": "/media/sounds/my-mother-ate-fries_Iw5egij.mp3"
        },
        {
            "name": "Minnesota Vikings Horn",
            "color": "rgb(67, 22, 104)",
            "mp3": "/media/sounds/vikinghorn.mp3"
        },
        {
            "name": "Deez Nuts Got EM AHAHAHAHA",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
        },
        {
            "name": "aughhhh tiktok",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/aughhhh-tiktok.mp3"
        },
        {
            "name": "windows xp21",
            "color": "rgb(255, 102, 0)",
            "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
        },
        {
            "name": "Stop it Get Some Help",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/untitled3_13.mp3"
        },
        {
            "name": "Mario Star Power",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
        },
        {
            "name": "instant transmission",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
        },
        {
            "name": "Round One Fight",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
        },
        {
            "name": "John Cena ARE YOU SURE",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/are-you-sure-about-that.mp3"
        },
        {
            "name": "Censor Beep",
            "color": "rgb(153, 204, 0)",
            "mp3": "/media/sounds/censor-beep-7.mp3"
        },
        {
            "name": "Bad joke (drums)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bad-joke-drums.mp3"
        },
        {
            "name": "Buddy Holly Weezer Guitar Lick",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
        },
        {
            "name": "Turn down for what (Oooooooh!)",
            "color": "rgb(0, 0, 255)",
            "mp3": "/media/sounds/turn-down-for-what.mp3"
        },
        {
            "name": "hey_its_me_goku",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hey-its-me-goku.mp3"
        },
        {
            "name": "pizza roblox",
            "color": "rgb(211, 255, 108)",
            "mp3": "/media/sounds/trim_7tpktqR.mp3"
        },
        {
            "name": "Finding nemo-Mine Mine Mine",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mine-mine_Z6BwRzI.mp3"
        },
        {
            "name": "Scout Bonk",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scout_specialcompleted03_2.mp3"
        },
        {
            "name": "Slash undertale",
            "color": "rgb(100, 0, 0)",
            "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
        },
        {
            "name": "Hold up wait a minute",
            "color": "rgb(174, 0, 0)",
            "mp3": "/media/sounds/hold-up-wait-a-minute-sound-effect.mp3"
        },
        {
            "name": "Tiktok Fart Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fart-tiktok.mp3"
        },
        {
            "name": "Death Bong",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/death-bong.mp3"
        },
        {
            "name": "Lightning",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
        },
        {
            "name": "You know what that means",
            "color": "rgb(146, 0, 0)",
            "mp3": "/media/sounds/you-know-what-that-means.mp3"
        },
        {
            "name": "Squidward Walking",
            "color": "rgb(184, 223, 211)",
            "mp3": "/media/sounds/squidward-walking.mp3"
        },
        {
            "name": "Silly pinoy laugh",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
        },
        {
            "name": "Ouch!",
            "color": "rgb(255, 12, 12)",
            "mp3": "/media/sounds/ouch_AKigkiF.mp3"
        },
        {
            "name": "1500 es hora y media",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
        },
        {
            "name": "Arkh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/arkh.mp3"
        },
        {
            "name": "Olha a maconha",
            "color": "rgb(0, 102, 0)",
            "mp3": "/media/sounds/olha-a-maconha.mp3"
        },
        {
            "name": "oh hell naw man wtf man",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/oh-hell-naw-man-wtf-man.mp3"
        },
        {
            "name": "Corrupt Nature! (c00lkidd)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/corrupt-nature-c00lkidd.mp3"
        },
        {
            "name": "Минута пошла",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
        },
        {
            "name": "Bluudud alarm323",
            "color": "rgb(29, 215, 255)",
            "mp3": "/media/sounds/bluudud-alarm323.mp3"
        },
        {
            "name": "fawkk",
            "color": "rgb(255, 89, 241)",
            "mp3": "/media/sounds/fawkk.mp3"
        },
        {
            "name": "SML yes king",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sml-yes-king.mp3"
        },
        {
            "name": "Fake Dono for Loud808s",
            "color": "rgb(79, 131, 255)",
            "mp3": "/media/sounds/fake-dono-for-loud808s.mp3"
        },
        {
            "name": "Звук взрыва громко",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/zvuk-vzryva-gromko.mp3"
        },
        {
            "name": "Ralf Schumacher - Mitten in die Fresse",
            "color": "rgb(0, 76, 255)",
            "mp3": "/media/sounds/ralf-schumacher-mitten-in-die-fresse.mp3"
        },
        {
            "name": "WAKE TF UP!!",
            "color": "rgb(38, 41, 62)",
            "mp3": "/media/sounds/wake-tf-up.mp3"
        },
        {
            "name": "Thomas Smoke Weed Everyday",
            "color": "rgb(0, 153, 255)",
            "mp3": "/media/sounds/thomassmokeweed.mp3"
        },
        {
            "name": "WHAT ARE YOU DOING STEP BRO",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3"
        },
        {
            "name": "erm what the sigma",
            "color": "rgb(117, 187, 255)",
            "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
        },
        {
            "name": "My Name Is Jeff",
            "color": "rgb(0, 255, 255)",
            "mp3": "/media/sounds/ringtone_20.mp3"
        },
        {
            "name": "This is Sparta!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/thisissparta.swf.mp3"
        },
        {
            "name": "windows xp21",
            "color": "rgb(255, 102, 0)",
            "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
        },
        {
            "name": "I'm fast as f boi",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
        },
        {
            "name": "i believe i can fly",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/untitled2.mp3"
        },
        {
            "name": "PACKING LOUDEST",
            "color": "rgb(94, 0, 0)",
            "mp3": "/media/sounds/packing-loudest.mp3"
        },
        {
            "name": "DEADMAN ANIME",
            "color": "rgb(255, 73, 137)",
            "mp3": "/media/sounds/deadman-fx.mp3"
        },
        {
            "name": "Sneaky Snitch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/untitled_897.mp3"
        },
        {
            "name": "Old Minecraft Zombie Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
        },
        {
            "name": "Despicable me whistle song",
            "color": "rgb(255, 119, 119)",
            "mp3": "/media/sounds/despicable-me-whistle-song.mp3"
        },
        {
            "name": "Lebron James Kid",
            "color": "rgb(0, 255, 153)",
            "mp3": "/media/sounds/lebron-james.mp3"
        },
        {
            "name": "Imperial march (star wars)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/imperial_march.mp3"
        },
        {
            "name": "Funny sounds",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ya.mp3"
        },
        {
            "name": "sigma boy bass boosted caca",
            "color": "rgb(10, 14, 255)",
            "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
        },
        {
            "name": "Sharingan",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/collen-eyes-efect.mp3"
        },
        {
            "name": "random.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/random-mp3.mp3"
        },
        {
            "name": "Scary girl",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scary-girl.mp3"
        },
        {
            "name": "Star Wars Siren",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/imperial-alert.mp3"
        },
        {
            "name": "RONALDO SIUUUU",
            "color": "rgb(46, 138, 255)",
            "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
        },
        {
            "name": "SSB4 - GAME!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/ssbannouncer-game.mp3"
        },
        {
            "name": "Rick Roll lolololol",
            "color": "rgb(12, 255, 191)",
            "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
        },
        {
            "name": "Sad Hamster",
            "color": "rgb(15, 80, 206)",
            "mp3": "/media/sounds/sad-hamster.mp3"
        },
        {
            "name": "Godzilla 2014 Roar",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/godzilla-2014-roar.mp3"
        },
        {
            "name": "Cash registere sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cash-register-sound-fx.mp3"
        },
        {
            "name": "E o pix? Nada ainda?",
            "color": "rgb(243, 255, 79)",
            "mp3": "/media/sounds/e-o-pix-nada-ainda.mp3"
        },
        {
            "name": "samsung spaceline notification",
            "color": "rgb(17, 0, 255)",
            "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
        },
        {
            "name": "Giorno's Theme normal",
            "color": "rgb(255, 250, 114)",
            "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
        },
        {
            "name": "Oh Hell No (Vine)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
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
            "name": "Spongebob - Grass Skirt Chase",
            "color": "rgb(255, 244, 43)",
            "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
        },
        {
            "name": "Knocked Player Fortnite",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ui-negative-alert.mp3"
        },
        {
            "name": "One Eternity Later",
            "color": "rgb(51, 0, 204)",
            "mp3": "/media/sounds/one-eternity-later.mp3"
        },
        {
            "name": "instant transmission",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
        },
        {
            "name": "Explosion",
            "color": "rgb(255, 51, 0)",
            "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
        },
        {
            "name": "John Cena ARE YOU SURE",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/are-you-sure-about-that.mp3"
        },
        {
            "name": "Lebron James Kid",
            "color": "rgb(0, 255, 153)",
            "mp3": "/media/sounds/lebron-james.mp3"
        },
        {
            "name": "Joker Shitpost beatbox",
            "color": "rgb(22, 255, 46)",
            "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
        },
        {
            "name": "Jeopardy Correct Answer",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rightanswer.mp3"
        },
        {
            "name": "Whisper Song",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/barney-the-whisper-song.mp3"
        },
        {
            "name": "Real punch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/punch-notification_sound-493565.mp3"
        },
        {
            "name": "Miss!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/miss_2G4oN9I.mp3"
        },
        {
            "name": "wake up meme",
            "color": "rgb(9, 9, 9)",
            "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
        },
        {
            "name": "Death Bong",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/death-bong.mp3"
        },
        {
            "name": "Lightning",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
        },
        {
            "name": "ultra instict",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/audiocutter_ultra-instinct-theme-official-version.mp3"
        },
        {
            "name": "DBZA Vegeta: \"You ruined it and I'm leaving.\"",
            "color": "rgb(0, 156, 255)",
            "mp3": "/media/sounds/dbza-vegeta-you-ruined-it-and-im-leaving.mp3"
        },
        {
            "name": "Baby Crying Tears",
            "color": "rgb(255, 178, 252)",
            "mp3": "/media/sounds/baby-crying-tears.mp3"
        },
        {
            "name": "ayooooooo",
            "color": "rgb(66, 252, 255)",
            "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
        },
        {
            "name": "cartoon poke",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoon-poke.mp3"
        },
        {
            "name": "roblox spawn",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/roblox-spawn.mp3"
        },
        {
            "name": "Minecraft TNT",
            "color": "rgb(244, 255, 11)",
            "mp3": "/media/sounds/minecraft-explode1.mp3"
        },
        {
            "name": "You crying? (Gojo)",
            "color": "rgb(22, 0, 55)",
            "mp3": "/media/sounds/you-crying-gojo.mp3"
        },
        {
            "name": "METAL PIPE EARRAPE",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/metal-pipe-earrape.mp3"
        },
        {
            "name": "Reverse sound effect",
            "color": "rgb(26, 109, 255)",
            "mp3": "/media/sounds/reverse-sound-effect.mp3"
        },
        {
            "name": "ford chime",
            "color": "rgb(206, 71, 255)",
            "mp3": "/media/sounds/ford-chime.mp3"
        },
        {
            "name": "Мармок Soundpad BASS",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
        },
        {
            "name": "Очень жёсткий стон яковлива",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ochen-zhiostkii-ston-iakovliva.mp3"
        },
        {
            "name": "a calamardo le gusta mi p1t0",
            "color": "rgb(96, 234, 255)",
            "mp3": "/media/sounds/a-calamardo-le-gusta-mi-p1t0.mp3"
        },
        {
            "name": "Hollow Knight - Bapanada",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/hollow-knight-bapanada.mp3"
        },
        {
            "name": "twitch doanation",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/twitch-doanation.mp3"
        },
        {
            "name": "Suara Rem Truk Sumatra/Sulawesi/Kalimantan",
            "color": "rgb(13, 255, 245)",
            "mp3": "/media/sounds/suara-rem-truk-sumatra-sulawesi-kalimantan.mp3"
        },
        {
            "name": "YOUR TAKING TOO LONG",
            "color": "rgb(255, 147, 53)",
            "mp3": "/media/sounds/your-taking-too-long.mp3"
        },
        {
            "name": "Saja Boys - Soda Pop",
            "color": "rgb(60, 245, 255)",
            "mp3": "/media/sounds/saja-boys-soda-pop.mp3"
        },
        {
            "name": "angy monkey.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/angy-monkey-mp3.mp3"
        },
        {
            "name": "Ki Ki Ki Ma Ma Ma",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
        },
        {
            "name": "Субо братик мой",
            "color": "rgb(200, 255, 0)",
            "mp3": "/media/sounds/subo-bratik-moi.mp3"
        },
        {
            "name": "о братик ты че тоже здесь литвин",
            "color": "rgb(255, 201, 73)",
            "mp3": "/media/sounds/o-bratik-ty-che-tozhe-zdes-litvin.mp3"
        },
        {
            "name": "mini pekka",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mini-pekka.mp3"
        },
        {
            "name": "Cállese el hocico MM",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/callese-el-hocico-mm.mp3"
        },
        {
            "name": "Тёмная ночь",
            "color": "rgb(7, 0, 0)",
            "mp3": "/media/sounds/tiomnaia-noch.mp3"
        },
        {
            "name": "funny laughing meme",
            "color": "rgb(255, 230, 5)",
            "mp3": "/media/sounds/funny-laughing-meme.mp3"
        },
        {
            "name": "FOUI(shoutout Taileon)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/foui-shoutout-taileon.mp3"
        },
        {
            "name": "mini peka",
            "color": "rgb(255, 187, 65)",
            "mp3": "/media/sounds/mini-peka.mp3"
        },
        {
            "name": "rainbow r 67 jynxzi",
            "color": "rgb(0, 81, 255)",
            "mp3": "/media/sounds/rainbow-r-67-jynxzi.mp3"
        },
        {
            "name": "BOM DIAAAAAAAAAAAAAAAA",
            "color": "rgb(17, 49, 255)",
            "mp3": "/media/sounds/bom-diaaaaaaaaaaaaaaaa.mp3"
        },
        {
            "name": "fnf boyfriend sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ah_medium.mp3"
        },
        {
            "name": "ONE PIECE Cornered",
            "color": "rgb(255, 8, 251)",
            "mp3": "/media/sounds/one-piece-ost-cornered-raid-host.mp3"
        },
        {
            "name": "SUPER MAX MAX MAX",
            "color": "rgb(25, 8, 255)",
            "mp3": "/media/sounds/super-max.mp3"
        },
        {
            "name": "!!Sad Roblox!",
            "color": "rgb(207, 238, 255)",
            "mp3": "/media/sounds/sad-roblox.mp3"
        },
        {
            "name": "[Male] AAHHAHAHAAA",
            "color": "rgb(0, 225, 255)",
            "mp3": "/media/sounds/male-aahhahahaaa.mp3"
        },
        {
            "name": "Regirock sound 1",
            "color": "rgb(102, 0, 0)",
            "mp3": "/media/sounds/regirock-sound-1.mp3"
        },
        {
            "name": "coughing meme",
            "color": "rgb(0, 255, 81)",
            "mp3": "/media/sounds/coughing-meme.mp3"
        },
        {
            "name": "packgod 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/packgod-2.mp3"
        },
        {
            "name": "Oh yeah",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/01-oh-yeah.mp3"
        },
        {
            "name": "Kids Cheering YAY",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
        },
        {
            "name": "Angry Cat Meow",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/angry4.mp3"
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
            "name": "JoJo - yes yes yes yes YES",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yes-yes-yes-yes-yes.mp3"
        },
        {
            "name": "Steves lava chicken",
            "color": "rgb(255, 134, 5)",
            "mp3": "/media/sounds/steves-lava-chicken.mp3"
        },
        {
            "name": "Don't push the red button!",
            "color": "rgb(102, 0, 0)",
            "mp3": "/media/sounds/explosion-sound-effect.mp3"
        },
        {
            "name": "Chris Smoove Splash",
            "color": "rgb(0, 51, 255)",
            "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
        },
        {
            "name": "Ahh BullShet",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ahh-bullshet.mp3"
        },
        {
            "name": "PINGAS",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pingas-richard-89282878.mp3"
        },
        {
            "name": "Ambatukam",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ambatukam.mp3"
        },
        {
            "name": "Mysterious Button ?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
        },
        {
            "name": "Online Download Charts",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/online.mp3"
        },
        {
            "name": "CALVOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
            "color": "rgb(255, 194, 225)",
            "mp3": "/media/sounds/calvoooooooooooooooooooooooooooo.mp3"
        },
        {
            "name": "Evil Cat Laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/evil-cat-laugh.mp3"
        },
        {
            "name": "Jet Set Radio - Success",
            "color": "rgb(50, 255, 0)",
            "mp3": "/media/sounds/jet-set-radio-success.mp3"
        },
        {
            "name": "Muhehehe",
            "color": "rgb(105, 20, 88)",
            "mp3": "/media/sounds/muhehehe.mp3"
        },
        {
            "name": "А тебя это ебать не должно",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/a-tebia-eto-ebat-ne-dolzhno.mp3"
        },
        {
            "name": "smth INFORAMTION #6",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/smth-inforamtion-6.mp3"
        },
        {
            "name": "Ammi bacha la re",
            "color": "rgb(243, 244, 236)",
            "mp3": "/media/sounds/ammi-bacha-la-re.mp3"
        },
        {
            "name": "Ronaldo",
            "color": "rgb(204, 102, 0)",
            "mp3": "/media/sounds/ronaldo.mp3"
        },
        {
            "name": "Ok Garmin? Video Speichern",
            "color": "rgb(0, 255, 5)",
            "mp3": "/media/sounds/ok-garmin-video-speichern_2fPL6RS.mp3"
        },
        {
            "name": "FOUI(shoutout Taileon)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/foui-shoutout-taileon.mp3"
        },
        {
            "name": "Name one word",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/name-one-word.mp3"
        },
        {
            "name": "67 brain fart",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/67-brain-fart.mp3"
        },
        {
            "name": "Oh, pwincess where are you",
            "color": "rgb(255, 124, 253)",
            "mp3": "/media/sounds/oh-pwincess-where-are-you.mp3"
        },
        {
            "name": "Shucks V2/V3  Vocals",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/shucks-v2-v3-vocals.mp3"
        },
        {
            "name": "Worlds smallest violin, Mr krabs",
            "color": "rgb(154, 0, 0)",
            "mp3": "/media/sounds/worlds-smallest-violin-mr-krabs.mp3"
        },
        {
            "name": "Hollow Knight - Bapanada",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/hollow-knight-bapanada.mp3"
        },
        {
            "name": "Six seven",
            "color": "rgb(36, 61, 255)",
            "mp3": "/media/sounds/six-seven_okPwnRN.mp3"
        },
        {
            "name": "And they say",
            "color": "rgb(255, 139, 0)",
            "mp3": "/media/sounds/and-they-say.mp3"
        },
        {
            "name": "Ehhh... NO! Minion",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/minion-as-lucy-eh-no.mp3"
        },
        {
            "name": "Hi-Lo Tones",
            "color": "rgb(52, 3, 255)",
            "mp3": "/media/sounds/hi-lo-tones.mp3"
        },
        {
            "name": "Chewbacca",
            "color": "rgb(102, 51, 0)",
            "mp3": "/media/sounds/chewbacca.swf.mp3"
        },
        {
            "name": "BADUM TSS",
            "color": "rgb(0, 153, 255)",
            "mp3": "/media/sounds/joke_drum_effect.mp3"
        },
        {
            "name": "Victory Screech - Spongebob",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/victoryscreech.mp3"
        },
        {
            "name": "Round One Fight",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
        },
        {
            "name": "Metal Gear Solid - Codec",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/codec.mp3"
        },
        {
            "name": "Rap Air Horn",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/air-horn_1.mp3"
        },
        {
            "name": "Prowler",
            "color": "rgb(118, 49, 154)",
            "mp3": "/media/sounds/prowler.mp3"
        },
        {
            "name": "Fnaf 6 Jumpscare Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
        },
        {
            "name": "Minecraft Level Up Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/levelup.mp3"
        },
        {
            "name": "Dark souls death",
            "color": "rgb(122, 0, 0)",
            "mp3": "/media/sounds/dark-souls-you-died-sound-effect_hm5sYFG.mp3"
        },
        {
            "name": "Flight reacts laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
        },
        {
            "name": "Cristiano Ronaldo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cr_suuu.mp3"
        },
        {
            "name": "Cartoon Slip and Fall",
            "color": "rgb(204, 255, 51)",
            "mp3": "/media/sounds/slipandfall.mp3"
        },
        {
            "name": "Undertaker's Gong",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/undertakers-bell.mp3"
        },
        {
            "name": "Dun dun duuun",
            "color": "rgb(204, 0, 0)",
            "mp3": "/media/sounds/dun_dun_dun.mp3"
        },
        {
            "name": "Family Feud NO Buzzer",
            "color": "rgb(0, 163, 3)",
            "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
        },
        {
            "name": "Dun dun duuun",
            "color": "rgb(204, 0, 0)",
            "mp3": "/media/sounds/dun_dun_dun.mp3"
        },
        {
            "name": "Family Feud NO Buzzer",
            "color": "rgb(0, 163, 3)",
            "mp3": "/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
        },
        {
            "name": "Scout Bonk",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/scout_specialcompleted03_2.mp3"
        },
        {
            "name": "Panther Roar",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/panther3.mp3"
        },
        {
            "name": "Holy Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/2019-03-30_18-13-20.mp3"
        },
        {
            "name": "Playboi Carti What?",
            "color": "rgb(123, 0, 0)",
            "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
        },
        {
            "name": "Gong Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/asian-gong.mp3"
        },
        {
            "name": "hey guys whats going on discord troll",
            "color": "rgb(214, 177, 255)",
            "mp3": "/media/sounds/hey-guys-whats-going-on-discord-troll.mp3"
        },
        {
            "name": "What the Helly",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/what-the-helly.mp3"
        },
        {
            "name": "Train horn meme",
            "color": "rgb(18, 164, 255)",
            "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
        },
        {
            "name": "Low Health / Critical Health Pokémon",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/low-health-critical-health-pokemon.mp3"
        },
        {
            "name": "Poop sound effect",
            "color": "rgb(84, 255, 223)",
            "mp3": "/media/sounds/poop-sound-effect.mp3"
        },
        {
            "name": "You know what that means",
            "color": "rgb(146, 0, 0)",
            "mp3": "/media/sounds/you-know-what-that-means.mp3"
        },
        {
            "name": "JUDGEMENT",
            "color": "rgb(22, 236, 255)",
            "mp3": "/media/sounds/judgement.mp3"
        },
        {
            "name": "Roblox Yummy",
            "color": "rgb(5, 182, 146)",
            "mp3": "/media/sounds/roblox-yummy.mp3"
        },
        {
            "name": "fart on my roommate's door",
            "color": "rgb(255, 107, 48)",
            "mp3": "/media/sounds/fart-on-my-roommates-door.mp3"
        },
        {
            "name": "AOL Dial-Up",
            "color": "rgb(4, 0, 109)",
            "mp3": "/media/sounds/aoldialup1.mp3"
        },
        {
            "name": "I'm conquesting it",
            "color": "rgb(221, 221, 221)",
            "mp3": "/media/sounds/im-conquesting-it.mp3"
        },
        {
            "name": "vsauce",
            "color": "rgb(57, 255, 136)",
            "mp3": "/media/sounds/jake-chudnow-edited_y1t8j5q.mp3"
        },
        {
            "name": "Hewwo Pwincess",
            "color": "rgb(255, 0, 247)",
            "mp3": "/media/sounds/hewwo-pwincess.mp3"
        },
        {
            "name": "Cartoon Mr. Krab Walking",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cartoon-mr-krab-walking.mp3"
        },
        {
            "name": "Franklin ringtone",
            "color": "rgb(0, 131, 163)",
            "mp3": "/media/sounds/franklin-ringtone.mp3"
        },
        {
            "name": "1500 es hora y media",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
        },
        {
            "name": "discord mute",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/discordmute_IZNcLx2.mp3"
        },
        {
            "name": "LET ME KNOWWWWWW",
            "color": "rgb(255, 33, 236)",
            "mp3": "/media/sounds/let-me-knowwwwww.mp3"
        },
        {
            "name": "Olha a maconha",
            "color": "rgb(0, 102, 0)",
            "mp3": "/media/sounds/olha-a-maconha.mp3"
        },
        {
            "name": "Saja Boys - Soda Pop",
            "color": "rgb(60, 245, 255)",
            "mp3": "/media/sounds/saja-boys-soda-pop.mp3"
        },
        {
            "name": "Минута пошла",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
        },
        {
            "name": "Por fin apareciste Malnacido -Picoro-",
            "color": "rgb(45, 127, 35)",
            "mp3": "/media/sounds/por-fin-apareciste-malnacido-picoro.mp3"
        },
        {
            "name": "el rap de peru",
            "color": "rgb(131, 94, 27)",
            "mp3": "/media/sounds/el-rap-de-peru.mp3"
        },
        {
            "name": "Субо братик мой",
            "color": "rgb(200, 255, 0)",
            "mp3": "/media/sounds/subo-bratik-moi.mp3"
        },
        {
            "name": "о братик ты че тоже здесь литвин",
            "color": "rgb(255, 201, 73)",
            "mp3": "/media/sounds/o-bratik-ty-che-tozhe-zdes-litvin.mp3"
        },
        {
            "name": "ROM ROM BHAIYO",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rom-rom-bhaiyo.mp3"
        },
        {
            "name": "gnarly katseye",
            "color": "rgb(26, 255, 0)",
            "mp3": "/media/sounds/gnarly-katseye.mp3"
        },
        {
            "name": "открой мне базу и верни мне брр бр бадабим",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/otkroi-mne-bazu-i-verni-mne-brr-br-badabim.mp3"
        },
        {
            "name": "Cállese el hocico MM",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/callese-el-hocico-mm.mp3"
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
            "name": "(Mafioso) I feel no pain",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mafioso-i-feel-no-pain.mp3"
        },
        {
            "name": "fighting sound effect",
            "color": "rgb(40, 83, 255)",
            "mp3": "/media/sounds/fighting-sound-effect.mp3"
        },
        {
            "name": "Red Larva Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/red-larva-scream.mp3"
        },
        {
            "name": "Huntrix - Take Down",
            "color": "rgb(230, 10, 255)",
            "mp3": "/media/sounds/huntrix-take-down.mp3"
        },
        {
            "name": "dragon ball battle",
            "color": "rgb(51, 255, 0)",
            "mp3": "/media/sounds/fsdfsdfsdfsd.mp3"
        },
        {
            "name": "Pandemonium Searching",
            "color": "rgb(55, 0, 0)",
            "mp3": "/media/sounds/pandemonium-searching.mp3"
        },
        {
            "name": "Samsung alarm but it's mafioso",
            "color": "rgb(93, 93, 93)",
            "mp3": "/media/sounds/samsung-alarm-but-its-mafioso.mp3"
        },
        {
            "name": "Звук взрыва громко",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/zvuk-vzryva-gromko.mp3"
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
            "name": "Fortnite Default Dance Music",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
        },
        {
            "name": "Kids Cheering YAY",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
        },
        {
            "name": "Hell's Kitchen",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hells-kitchen-sfx.mp3"
        },
        {
            "name": "talking bennnn noo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/talking-bennnn-noo.mp3"
        },
        {
            "name": "holy moly emoji",
            "color": "rgb(255, 238, 128)",
            "mp3": "/media/sounds/holy-moly-emoji.mp3"
        },
        {
            "name": "OH HELLO THERE. ( Shrek )",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/shrek-oh-hello-there_nhnoZHY.mp3"
        },
        {
            "name": "Biden SODA!",
            "color": "rgb(52, 21, 255)",
            "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
        },
        {
            "name": "instant transmission",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
        },
        {
            "name": "Can We Get Much Higher-One Piece Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
        },
        {
            "name": "Amogus Full",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/2021-04-07-213841761.mp3"
        },
        {
            "name": "Flight reacts laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
        },
        {
            "name": "Jutsu Activation",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/katon.mp3"
        },
        {
            "name": "Crickets Chirping",
            "color": "rgb(0, 153, 0)",
            "mp3": "/media/sounds/crickets-chirping.mp3"
        },
        {
            "name": "Sharingan",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/collen-eyes-efect.mp3"
        },
        {
            "name": "OK - Même",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/okay-meme.mp3"
        },
        {
            "name": "money money money money",
            "color": "rgb(51, 255, 0)",
            "mp3": "/media/sounds/money-button.mp3"
        },
        {
            "name": "suspense rising",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
        },
        {
            "name": "Mario Bros Game Over",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/super-mario-bros_2.mp3"
        },
        {
            "name": "SSB4 - GAME!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/ssbannouncer-game.mp3"
        },
        {
            "name": "heheheha",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/heheheha.mp3"
        },
        {
            "name": "what the hell (speed up)",
            "color": "rgb(108, 28, 132)",
            "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
        },
        {
            "name": "wake up meme",
            "color": "rgb(9, 9, 9)",
            "mp3": "/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3"
        },
        {
            "name": "LET ME TELL YOU SOMETHING",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/let-me-tell-you-something.mp3"
        },
        {
            "name": "COCA COLA ESPUMA",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/coca-cola-espuma.mp3"
        },
        {
            "name": "Creation Of Hatred | Shedletsky VS 1x1x1x1",
            "color": "rgb(11, 93, 4)",
            "mp3": "/media/sounds/creation-of-hatred-shedletsky-vs-1x1x1x1.mp3"
        },
        {
            "name": "gigachad phonk house",
            "color": "rgb(173, 143, 255)",
            "mp3": "/media/sounds/gigachad-phonk-house.mp3"
        },
        {
            "name": "tehelka omlette",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tehelka-omlette.mp3"
        },
        {
            "name": "mini pekka",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mini-pekka.mp3"
        },
        {
            "name": "F1 Box Box",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/f1-box-box.mp3"
        },
        {
            "name": "Ok Garmin? Video Speichern",
            "color": "rgb(0, 255, 5)",
            "mp3": "/media/sounds/ok-garmin-video-speichern_2fPL6RS.mp3"
        },
        {
            "name": "Pandemonium Attacking",
            "color": "rgb(47, 2, 2)",
            "mp3": "/media/sounds/pandemonium-attacking.mp3"
        },
        {
            "name": "FOUI(shoutout Taileon)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/foui-shoutout-taileon.mp3"
        },
        {
            "name": "(EXTREMELY LOUD) I'm Back!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/extremely-loud-im-back-joeysworldtour.mp3"
        },
        {
            "name": "clash royale prince charge",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clash-royale-prince-charge.mp3"
        },
        {
            "name": "metal pipe go bonk",
            "color": "rgb(90, 132, 131)",
            "mp3": "/media/sounds/metal-pipe-go-bonk.mp3"
        },
        {
            "name": "Flight Irish Spring Green",
            "color": "rgb(39, 255, 32)",
            "mp3": "/media/sounds/flight-irish-spring-green_sPDXG9p.mp3"
        },
        {
            "name": "Six seven",
            "color": "rgb(36, 61, 255)",
            "mp3": "/media/sounds/six-seven_okPwnRN.mp3"
        },
        {
            "name": "Bonkz",
            "color": "rgb(255, 189, 215)",
            "mp3": "/media/sounds/bonk_uacLPsR.mp3"
        },
        {
            "name": "Joker Laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/joker-laugh.mp3"
        },
        {
            "name": "And they say",
            "color": "rgb(255, 139, 0)",
            "mp3": "/media/sounds/and-they-say.mp3"
        },
        {
            "name": "Playboi carti",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/playboi-carti.mp3"
        },
        {
            "name": "Gegagedigedagedago EARRAPE",
            "color": "rgb(112, 0, 0)",
            "mp3": "/media/sounds/gegagedigedagedago-earrape.mp3"
        },
        {
            "name": "Omnitrix Ativado",
            "color": "rgb(27, 255, 2)",
            "mp3": "/media/sounds/omnitrix-ativado.mp3"
        },
        {
            "name": "Star Platinum Part 6 Time Stop Sound Effect",
            "color": "rgb(134, 81, 189)",
            "mp3": "/media/sounds/star-platinum-part-6-time-stop-sound-effect.mp3"
        },
        {
            "name": "EVERYBODY BACKSTREET IS BACK",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/backstreet-boys-everybody-backstreets-back-official-video.mp3"
        },
        {
            "name": "Filthy Frank - This is cancer",
            "color": "rgb(51, 102, 153)",
            "mp3": "/media/sounds/filthy-frank-cancer.mp3"
        },
        {
            "name": "Chewbacca",
            "color": "rgb(102, 51, 0)",
            "mp3": "/media/sounds/chewbacca.swf.mp3"
        },
        {
            "name": "Over 9000!!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/over9000.swf.mp3"
        },
        {
            "name": "Kamehameha!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/kamehameha.swf.mp3"
        },
        {
            "name": "BADUM TSS",
            "color": "rgb(0, 153, 255)",
            "mp3": "/media/sounds/joke_drum_effect.mp3"
        },
        {
            "name": "Open the noor!",
            "color": "rgb(109, 255, 37)",
            "mp3": "/media/sounds/open-the-noor.mp3"
        },
        {
            "name": "Nintendo Switch Click",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/switch-sound.mp3"
        },
        {
            "name": "talking bennnn noo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/talking-bennnn-noo.mp3"
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
            "name": "EAS Alarm (Weather Alert)-",
            "color": "rgb(194, 0, 0)",
            "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
        },
        {
            "name": "Imposter Kill (Among Us)",
            "color": "rgb(219, 64, 64)",
            "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
        },
        {
            "name": "Sonic drown",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sonic-1-music-drownings.mp3"
        },
        {
            "name": "Netflix intro",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
        },
        {
            "name": "GANGNAM STYLE",
            "color": "rgb(102, 0, 255)",
            "mp3": "/media/sounds/psy-gangnam-style-1.mp3"
        },
        {
            "name": "Among us Roundstart",
            "color": "rgb(220, 10, 255)",
            "mp3": "/media/sounds/among-us-roundstart.mp3"
        },
        {
            "name": "PACKING LOUDEST",
            "color": "rgb(94, 0, 0)",
            "mp3": "/media/sounds/packing-loudest.mp3"
        },
        {
            "name": "Gary Meow",
            "color": "rgb(8, 214, 163)",
            "mp3": "/media/sounds/gary_meow.mp3"
        },
        {
            "name": "Star Wars Cantina",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cantina-band.mp3"
        },
        {
            "name": "Coach Whistle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
        },
        {
            "name": "romantic",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/45_0HW2p0x.mp3"
        },
        {
            "name": "yay roblox",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yay-roblox.mp3"
        },
        {
            "name": "Cartoon sliping and crash",
            "color": "rgb(2, 255, 228)",
            "mp3": "/media/sounds/cartoon-sliping-and-crash.mp3"
        },
        {
            "name": "Пожарная тревога",
            "color": "rgb(184, 0, 0)",
            "mp3": "/media/sounds/pozharnaia-trevoga.mp3"
        },
        {
            "name": "Popular Riser",
            "color": "rgb(0, 213, 255)",
            "mp3": "/media/sounds/popular-riser.mp3"
        },
        {
            "name": "É q eu tô meio gripadinha",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
        },
        {
            "name": "yes king who did that mess",
            "color": "rgb(62, 251, 255)",
            "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
        },
        {
            "name": "MS Teams Notification",
            "color": "rgb(98, 0, 255)",
            "mp3": "/media/sounds/ms-teams-notification.mp3"
        },
        {
            "name": "Que rricoh eh",
            "color": "rgb(49, 33, 33)",
            "mp3": "/media/sounds/que-rricoh-eh.mp3"
        },
        {
            "name": "Click sound for GD",
            "color": "rgb(88, 255, 74)",
            "mp3": "/media/sounds/click-sound-for-gd.mp3"
        },
        {
            "name": "angy monkey.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/angy-monkey-mp3.mp3"
        },
        {
            "name": "ford chime",
            "color": "rgb(206, 71, 255)",
            "mp3": "/media/sounds/ford-chime.mp3"
        },
        {
            "name": "Ki Ki Ki Ma Ma Ma",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
        },
        {
            "name": "Malupiton ARAY KO!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/malupiton-aray-ko.mp3"
        },
        {
            "name": "+ Social Credit",
            "color": "rgb(214, 255, 117)",
            "mp3": "/media/sounds/social-credit_751J4TV.mp3"
        },
        {
            "name": "SDIYBT but more aids",
            "color": "rgb(150, 159, 255)",
            "mp3": "/media/sounds/sdiybt-but-more-aids.mp3"
        },
        {
            "name": "Bom dia magnata",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bom-dia-magnata.mp3"
        },
        {
            "name": "Error glitch",
            "color": "rgb(10, 255, 38)",
            "mp3": "/media/sounds/error-glitch.mp3"
        },
        {
            "name": "Sunday Night Football Horns",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sunday-night-football-horns.mp3"
        },
        {
            "name": "Boo Fart",
            "color": "rgb(162, 118, 53)",
            "mp3": "/media/sounds/boo-fart.mp3"
        },
        {
            "name": "scooby doo laugh",
            "color": "rgb(156, 83, 18)",
            "mp3": "/media/sounds/scooby-doo-laugh.mp3"
        },
        {
            "name": "CalebCity Waiit",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/calebcity-waiit.mp3"
        },
        {
            "name": "Dj Niggletips",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/dj-niggletips.mp3"
        },
        {
            "name": "ZA WARUDO, TIME STOP !",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
        },
        {
            "name": "Rap Battle OOOHHHH!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
        },
        {
            "name": "USSR Anthem",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ussr-anthem-short2.mp3"
        },
        {
            "name": "Knocked Player Fortnite",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ui-negative-alert.mp3"
        },
        {
            "name": "lord have mercy i'm about to bust",
            "color": "rgb(82, 220, 255)",
            "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
        },
        {
            "name": "Kanye West Wolves Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wolves_-_kanye-6b019add-71f7-4a31-8363-ed112937445e.mp3"
        },
        {
            "name": "GMod ragdoll impact sounds",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpl0bxqky_.mp3"
        },
        {
            "name": "What the Hell Oh My Gawd No Way",
            "color": "rgb(185, 95, 95)",
            "mp3": "/media/sounds/wthomg-pt-2.mp3"
        },
        {
            "name": "GANGNAM STYLE",
            "color": "rgb(102, 0, 255)",
            "mp3": "/media/sounds/psy-gangnam-style-1.mp3"
        },
        {
            "name": "Camera Shutter (VoiceMod)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/camera-shutter.mp3"
        },
        {
            "name": "White tee - rizz",
            "color": "rgb(40, 12, 141)",
            "mp3": "/media/sounds/white-tee-rizz_MPmHfK0.mp3"
        },
        {
            "name": "Doorbell",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/door-bell-sound-effect.mp3"
        },
        {
            "name": "Mario Bros Game Over",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/super-mario-bros_2.mp3"
        },
        {
            "name": "Minecraft cave1.ogg",
            "color": "rgb(1, 255, 243)",
            "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
        },
        {
            "name": "Minecraft Explosions",
            "color": "rgb(162, 92, 0)",
            "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
        },
        {
            "name": "SWAMP IZZO",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/swamp-izzo.mp3"
        },
        {
            "name": "Sitcom Crowd Ooh",
            "color": "rgb(255, 157, 216)",
            "mp3": "/media/sounds/sitcom-crowd-ooh_sRDaL7d.mp3"
        },
        {
            "name": "COD zombies round change",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpq7xew6z6.mp3"
        },
        {
            "name": "Discord Calling",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/discord-call-sound_tvxg95l.mp3"
        },
        {
            "name": "Gundam Newtype",
            "color": "rgb(255, 0, 204)",
            "mp3": "/media/sounds/gundam-newtype-flash-sound-effect.mp3"
        },
        {
            "name": "woosh sound effect",
            "color": "rgb(159, 152, 149)",
            "mp3": "/media/sounds/woosh-sound-effect.mp3"
        },
        {
            "name": "Yes_",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yes_JGNOYIF.mp3"
        },
        {
            "name": "cat meow sound effect",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/meow_jEHtSyd.mp3"
        },
        {
            "name": "yay roblox",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yay-roblox.mp3"
        },
        {
            "name": "Sitcom Laughing and Applause",
            "color": "rgb(255, 1, 1)",
            "mp3": "/media/sounds/sitcom-laughing-and-applause.mp3"
        },
        {
            "name": "funny laugh sound",
            "color": "rgb(126, 135, 255)",
            "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
        },
        {
            "name": "TF2 Notification Sound",
            "color": "rgb(157, 157, 157)",
            "mp3": "/media/sounds/tf2-notification-sound.mp3"
        },
        {
            "name": "Boo-Womp spongbob sound effect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/boo-womp-spongbob-sound-effect.mp3"
        },
        {
            "name": "Nice cock!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/nice-cock_n6IXwwg.mp3"
        },
        {
            "name": "Family Feud theme - After 1st  Fast Money",
            "color": "rgb(66, 255, 200)",
            "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
        },
        {
            "name": "CSGO AWP",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/awp_02.mp3"
        },
        {
            "name": "Kim Possible Sitch",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kim-possible-ringtone.mp3"
        },
        {
            "name": "I can do anything Jevil",
            "color": "rgb(255, 238, 0)",
            "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
        },
        {
            "name": "DJ Stop",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dj-stop.mp3"
        },
        {
            "name": "hi! rblx SE",
            "color": "rgb(166, 239, 255)",
            "mp3": "/media/sounds/hi-rblx-se.mp3"
        },
        {
            "name": "man eating pickle",
            "color": "rgb(20, 255, 105)",
            "mp3": "/media/sounds/man-eating-pickle.mp3"
        },
        {
            "name": "hahaha gago",
            "color": "rgb(9, 255, 34)",
            "mp3": "/media/sounds/gago-effect-by-cong-tv.mp3"
        },
        {
            "name": "SopranosPaulieOooh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oooooooh.mp3"
        },
        {
            "name": "indian guy laughing",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/indian-guy-laughing.mp3"
        },
        {
            "name": "It's Pikachu (short)",
            "color": "rgb(255, 231, 82)",
            "mp3": "/media/sounds/its-pikachu-short.mp3"
        },
        {
            "name": "Popular Riser",
            "color": "rgb(0, 213, 255)",
            "mp3": "/media/sounds/popular-riser.mp3"
        },
        {
            "name": "(mafioso) just shut up and rage quit",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
        },
        {
            "name": "sexy and i know it",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sexy-and-i-know-it_crWNUGY.mp3"
        },
        {
            "name": "I loveee - Repo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/i-loveee-repo.mp3"
        },
        {
            "name": "Phonk tun tun",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/phonk-tun-tun.mp3"
        },
        {
            "name": "YOUR TAKING TOO LONG",
            "color": "rgb(255, 147, 53)",
            "mp3": "/media/sounds/your-taking-too-long.mp3"
        },
        {
            "name": "Minecraft - Glass Break",
            "color": "rgb(94, 248, 255)",
            "mp3": "/media/sounds/minecraft-glass-break.mp3"
        },
        {
            "name": "Tv error",
            "color": "rgb(0, 255, 223)",
            "mp3": "/media/sounds/tv-error.mp3"
        },
        {
            "name": "angy monkey.mp3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/angy-monkey-mp3.mp3"
        },
        {
            "name": "Alarma de Auron play",
            "color": "rgb(46, 255, 133)",
            "mp3": "/media/sounds/alarma-de-auron-play.mp3"
        },
        {
            "name": "Old Church Bells - Death",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/old-church-bells-death.mp3"
        },
        {
            "name": "Obama have dihh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/obama-have-dihh.mp3"
        },
        {
            "name": "No creoooo!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmp_5mlk5wd.mp3"
        },
        {
            "name": "You must BOUNCE ON IT",
            "color": "rgb(28, 34, 92)",
            "mp3": "/media/sounds/you-must-bounce-on-it.mp3"
        },
        {
            "name": "Brr Brr Patapim Alarm Clock",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/brr-brr-patapim-alarm-clock.mp3"
        },
        {
            "name": "Hi! Hi! Good Morning",
            "color": "rgb(111, 49, 255)",
            "mp3": "/media/sounds/tiktok-star-hi-hi-good-morning-kid-toddler.mp3"
        },
        {
            "name": "Германия",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/germaniia_yYPmHKl.mp3"
        },
        {
            "name": "IM A CAR... BEEP BEEP",
            "color": "rgb(10, 10, 255)",
            "mp3": "/media/sounds/im-a-car-beep-beep.mp3"
        },
        {
            "name": "Eighteen Naked Cowboys",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ranch.mp3"
        },
        {
            "name": "fawkk",
            "color": "rgb(255, 89, 241)",
            "mp3": "/media/sounds/fawkk.mp3"
        },
        {
            "name": "YOU PARASIT",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-parasit.mp3"
        },
        {
            "name": "Do not redeem It",
            "color": "rgb(255, 139, 51)",
            "mp3": "/media/sounds/do-not-redeem-it.mp3"
        },
        {
            "name": "BOM DIAAAAAAAAAAAAAAAA",
            "color": "rgb(17, 49, 255)",
            "mp3": "/media/sounds/bom-diaaaaaaaaaaaaaaaa.mp3"
        },
        {
            "name": "fnf boyfriend sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ah_medium.mp3"
        },
        {
            "name": "SUPER MAX MAX MAX",
            "color": "rgb(25, 8, 255)",
            "mp3": "/media/sounds/super-max.mp3"
        },
        {
            "name": "Tapi Boong hahaha",
            "color": "rgb(7, 255, 23)",
            "mp3": "/media/sounds/tapi-boong-hahaha.mp3"
        },
        {
            "name": "!!Sad Roblox!",
            "color": "rgb(207, 238, 255)",
            "mp3": "/media/sounds/sad-roblox.mp3"
        },
        {
            "name": "[Male] AAHHAHAHAAA",
            "color": "rgb(0, 225, 255)",
            "mp3": "/media/sounds/male-aahhahahaaa.mp3"
        },
        {
            "name": "Dragon's Roar",
            "color": "rgb(159, 0, 0)",
            "mp3": "/media/sounds/dragon-1.mp3"
        },
        {
            "name": "Regirock sound 1",
            "color": "rgb(102, 0, 0)",
            "mp3": "/media/sounds/regirock-sound-1.mp3"
        },
        {
            "name": "kylo ren lightsaber ignition",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kylo-ren-lightsaber-ignition.mp3"
        },
        {
            "name": "Baconator",
            "color": "rgb(134, 79, 35)",
            "mp3": "/media/sounds/baconator.mp3"
        },
        {
            "name": "Rick Roll 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rickroll_4.mp3"
        },
        {
            "name": "coughing meme",
            "color": "rgb(0, 255, 81)",
            "mp3": "/media/sounds/coughing-meme.mp3"
        },
        {
            "name": "packgod 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/packgod-2.mp3"
        },
        {
            "name": "Cant we all get along postal dude",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cant-we-all-get-along-postal-dude.mp3"
        },
        {
            "name": "Kids Cheering YAY",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/kids-cheering-sound-effect.mp3"
        },
        {
            "name": "hehe boi ainsley harriott",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
        },
        {
            "name": "Applause",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/applause-4.mp3"
        },
        {
            "name": "holy moly emoji",
            "color": "rgb(255, 238, 128)",
            "mp3": "/media/sounds/holy-moly-emoji.mp3"
        },
        {
            "name": "musica triste meme",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
        },
        {
            "name": "bomboclat",
            "color": "rgb(88, 255, 14)",
            "mp3": "/media/sounds/bomboclat.mp3"
        },
        {
            "name": "AMONGUS",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
        },
        {
            "name": "Biden SODA!",
            "color": "rgb(52, 21, 255)",
            "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
        },
        {
            "name": "Saul Goodman Better Call Saul",
            "color": "rgb(27, 118, 0)",
            "mp3": "/media/sounds/saul-goodman-better-call-saul.mp3"
        },
        {
            "name": "Windows 10 USB disconnect",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/disconnect.mp3"
        },
        {
            "name": "Super Mario 64 Thwomp",
            "color": "rgb(0, 102, 255)",
            "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
        },
        {
            "name": "EAS Alarm (Weather Alert)-",
            "color": "rgb(194, 0, 0)",
            "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
        },
        {
            "name": "Dreamybull/Ambatukam is on his way",
            "color": "rgb(224, 230, 181)",
            "mp3": "/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
        },
        {
            "name": "GMod ragdoll impact sounds",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpl0bxqky_.mp3"
        },
        {
            "name": "i feel good !!!",
            "color": "rgb(102, 0, 153)",
            "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
        },
        {
            "name": "PINGAS",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pingas-richard-89282878.mp3"
        },
        {
            "name": "Mysterious Button ?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
        },
        {
            "name": "Crickets Chirping",
            "color": "rgb(0, 153, 0)",
            "mp3": "/media/sounds/crickets-chirping.mp3"
        },
        {
            "name": "Who's That Pokemon!?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/whos-that-pokemon_.mp3"
        },
        {
            "name": "Get up meek mill",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/get-up-meek-mill.mp3"
        },
        {
            "name": "trollface smile",
            "color": "rgb(94, 94, 94)",
            "mp3": "/media/sounds/trollface-smile.mp3"
        },
        {
            "name": "“Mwahahaha”",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mwahahaha.mp3"
        },
        {
            "name": "B SWORD WOOSH",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/woosh_s21KzKN.mp3"
        },
        {
            "name": "Dramatic Impact",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dramatic-impact-1-ren-and-stimpy-production-music.mp3"
        },
        {
            "name": "Coach Whistle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
        },
        {
            "name": "What meme song",
            "color": "rgb(71, 0, 0)",
            "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
        },
        {
            "name": "gangsta paradise scream",
            "color": "rgb(255, 73, 227)",
            "mp3": "/media/sounds/gangstas-paradise-scream-sound-effect-1.mp3"
        },
        {
            "name": "SSB4 - GAME!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/ssbannouncer-game.mp3"
        },
        {
            "name": "Soviet Anthem (BASS BOOSTED)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/soviet108.mp3"
        },
        {
            "name": "Tape Rewind",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
        },
        {
            "name": "Cave Ambience 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cave21.mp3"
        },
        {
            "name": "Undertale - Soul Shatter",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/undertale-soul-shatter.mp3"
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
            "name": "Runescape Ice Barrage",
            "color": "rgb(0, 51, 255)",
            "mp3": "/media/sounds/ice-barrage1.mp3"
        },
        {
            "name": "eeeeeeeeeeeeeeeeeeeeeee",
            "color": "rgb(160, 190, 255)",
            "mp3": "/media/sounds/internet-connecting.mp3"
        },
        {
            "name": "Gangsta's Paradise Choir 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
        },
        {
            "name": "Fortnite Chest",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fortnite.mp3"
        },
        {
            "name": "Cat Call whistle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cat-call.mp3"
        },
        {
            "name": "Download",
            "color": "rgb(251, 255, 110)",
            "mp3": "/media/sounds/download_CTlTO3X.mp3"
        },
        {
            "name": "SSB4 - GAME!",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/ssbannouncer-game.mp3"
        },
        {
            "name": "WWE Ringbell",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/wwe-bell.mp3"
        },
        {
            "name": "Soviet Anthem (BASS BOOSTED)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/soviet108.mp3"
        },
        {
            "name": "Tape Rewind",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
        },
        {
            "name": "Cave Ambience 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cave21.mp3"
        },
        {
            "name": "Undertale - Soul Shatter",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/undertale-soul-shatter.mp3"
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
            "name": "Runescape Ice Barrage",
            "color": "rgb(0, 51, 255)",
            "mp3": "/media/sounds/ice-barrage1.mp3"
        },
        {
            "name": "eeeeeeeeeeeeeeeeeeeeeee",
            "color": "rgb(160, 190, 255)",
            "mp3": "/media/sounds/internet-connecting.mp3"
        },
        {
            "name": "Gangsta's Paradise Choir 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
        },
        {
            "name": "Fortnite Chest",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fortnite.mp3"
        },
        {
            "name": "Cat Call whistle",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cat-call.mp3"
        },
        {
            "name": "20th Century Fox Fanfare",
            "color": "rgb(255, 211, 0)",
            "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
        },
        {
            "name": "Halo elite laugh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/a_HSMXsiW.mp3"
        },
        {
            "name": "nuclear launch detected",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tadupd04.mp3"
        },
        {
            "name": "oohh chinese man",
            "color": "rgb(31, 188, 255)",
            "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
        },
        {
            "name": "Metal gear solid death",
            "color": "rgb(255, 34, 225)",
            "mp3": "/media/sounds/metal_gear_solid_game_over_screen_clean_background-1.mp3"
        },
        {
            "name": "daisy bell",
            "color": "rgb(116, 253, 223)",
            "mp3": "/media/sounds/daisy-bell.mp3"
        },
        {
            "name": "which bomboclaat dog i am",
            "color": "rgb(97, 0, 0)",
            "mp3": "/media/sounds/which-bomboclaat-dog-i-am.mp3"
        },
        {
            "name": "r6 c4 sound",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/r6-nitro-cell-sound-effect_GqSEIx5.mp3"
        },
        {
            "name": "Dota - Double kill",
            "color": "rgb(204, 255, 51)",
            "mp3": "/media/sounds/announcer_kill_double_01.mp3"
        },
        {
            "name": "Millionaire Suspense",
            "color": "rgb(235, 255, 52)",
            "mp3": "/media/sounds/5000000-music-mp3cut.mp3"
        },
        {
            "name": "Sword Swing Hit",
            "color": "rgb(32, 132, 139)",
            "mp3": "/media/sounds/combat-sword-swing-hit.mp3"
        },
        {
            "name": "Danger Siren Alarm",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
        },
        {
            "name": "ROBLOX Button SFX",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-button-sfx.mp3"
        },
        {
            "name": "Wario dies in a car crash",
            "color": "rgb(241, 255, 52)",
            "mp3": "/media/sounds/wario-dies-in-a-car-crash.mp3"
        },
        {
            "name": "S N A T C H ! (BFDI)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/s-n-a-t-c-h-bfdi.mp3"
        },
        {
            "name": "Virus Indian Song",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/virus-indian-song.mp3"
        },
        {
            "name": "Windows 10 Startup Sound Tune",
            "color": "rgb(0, 119, 255)",
            "mp3": "/media/sounds/windows-10-startup-sound_tune-online-audio-converter.mp3"
        },
        {
            "name": "Bite me >:(",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bite-me_onSBivS.mp3"
        },
        {
            "name": "Trippi Troppi Italian brainrot",
            "color": "rgb(107, 225, 255)",
            "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
        },
        {
            "name": "cat iphone ringtone",
            "color": "rgb(224, 252, 255)",
            "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
        },
        {
            "name": "suspense build up",
            "color": "rgb(62, 62, 62)",
            "mp3": "/media/sounds/suspense-build-up.mp3"
        },
        {
            "name": "minecraft anvil",
            "color": "rgb(57, 57, 57)",
            "mp3": "/media/sounds/minecraft-anvil.mp3"
        },
        {
            "name": "distorted trumpets hl2",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/distorted-trumpets-hl2.mp3"
        },
        {
            "name": "The Moon Haunts You",
            "color": "rgb(100, 255, 247)",
            "mp3": "/media/sounds/the-moon-haunts-you.mp3"
        },
        {
            "name": "Бляяять",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bliaiaiat.mp3"
        },
        {
            "name": "Minecraft Cave Sound 10",
            "color": "rgb(255, 15, 15)",
            "mp3": "/media/sounds/minecraft-cave-sound-10.mp3"
        },
        {
            "name": "MLG Gun Shot",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mlg-gun-shot-sound-effect.mp3"
        },
        {
            "name": "im about to bust!",
            "color": "rgb(254, 255, 248)",
            "mp3": "/media/sounds/im-about-to-bust.mp3"
        },
        {
            "name": "É q eu tô meio gripadinha",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/e-q-eu-to-meio-gripadinha.mp3"
        },
        {
            "name": "Cartoon evil laugh",
            "color": "rgb(206, 255, 0)",
            "mp3": "/media/sounds/cartoonlaugh1.mp3"
        },
        {
            "name": "Yes King You Digging In",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
        },
        {
            "name": "Did we just become best friends?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/did-we-just-become-best-friends.mp3"
        },
        {
            "name": "Sleep phonk",
            "color": "rgb(41, 0, 255)",
            "mp3": "/media/sounds/sleep-phonk_XPBfmfW.mp3"
        },
        {
            "name": "ak47 loud",
            "color": "rgb(45, 58, 255)",
            "mp3": "/media/sounds/ak47-loud.mp3"
        },
        {
            "name": "brainrot ringtone",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/brainrot-ringtone.mp3"
        },
        {
            "name": "goku angry",
            "color": "rgb(117, 0, 0)",
            "mp3": "/media/sounds/goku-angry.mp3"
        },
        {
            "name": "Hannah Montana Transition",
            "color": "rgb(255, 233, 0)",
            "mp3": "/media/sounds/hannah-montana-transition.mp3"
        },
        {
            "name": "CJ - Ah Shit Here we go again",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ah-shit-here-we-go-again_jyHLMOg.mp3"
        },
        {
            "name": "estaba paralizado con mucho miedo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/estaba-paralizado-con-mucho-miedo.mp3"
        },
        {
            "name": "Chili Chili Fart",
            "color": "rgb(41, 128, 24)",
            "mp3": "/media/sounds/chili-chili-fart_0ikahyN.mp3"
        },
        {
            "name": "Normal Spamton's laugh",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/normal-spamtons-laugh.mp3"
        },
        {
            "name": "Gruesome Sound",
            "color": "rgb(162, 0, 0)",
            "mp3": "/media/sounds/gruesome-sound.mp3"
        },
        {
            "name": "SDIYBT but more aids",
            "color": "rgb(150, 159, 255)",
            "mp3": "/media/sounds/sdiybt-but-more-aids.mp3"
        },
        {
            "name": "Tlabaja Chino",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tlabaja-chino.mp3"
        },
        {
            "name": "Ai chega chega",
            "color": "rgb(36, 160, 74)",
            "mp3": "/media/sounds/ai-chega-chega.mp3"
        },
        {
            "name": "START DIGGING",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/start-digging.mp3"
        },
        {
            "name": "Yeah, yeah",
            "color": "rgb(255, 130, 130)",
            "mp3": "/media/sounds/yeah-yeah_erb67LF.mp3"
        },
        {
            "name": "hub troll (loud)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hub-troll-loud.mp3"
        },
        {
            "name": "indian guy singing",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/indian-guy-singing.mp3"
        },
        {
            "name": "WHAT THE- BOOM",
            "color": "rgb(49, 0, 118)",
            "mp3": "/media/sounds/what-the-boom.mp3"
        },
        {
            "name": "dragon ball battle",
            "color": "rgb(51, 255, 0)",
            "mp3": "/media/sounds/fsdfsdfsdfsd.mp3"
        },
        {
            "name": "eggman get a load of this",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/get-a-load-of-this_LevG8FK.mp3"
        },
        {
            "name": "Samsung alarm but it's mafioso",
            "color": "rgb(93, 93, 93)",
            "mp3": "/media/sounds/samsung-alarm-but-its-mafioso.mp3"
        },
        {
            "name": "Ram rider scream",
            "color": "rgb(255, 159, 69)",
            "mp3": "/media/sounds/ram-rider-scream.mp3"
        },
        {
            "name": "Harikitte Ikou Kitasan Black",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/harikitte-ikou-kitasan-black.mp3"
        },
        {
            "name": "you stupid nickelodeon",
            "color": "rgb(255, 166, 57)",
            "mp3": "/media/sounds/you-stupid-nickelodeon.mp3"
        },
        {
            "name": "THE MOOOOOOOOON HAUNTS YOU",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/the-mooooooooon-haunts-you.mp3"
        },
        {
            "name": "KING CRIMSON!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/y2mate_mQRydX9.mp3"
        },
        {
            "name": "cala-boca-puta",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cala-boca-puta_XDKdRmR.mp3"
        },
        {
            "name": "DBD OST - Michael Myers sound end evil inside 3",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dbd-ost-michael-myers-sounds-fin-mal-interieur-3_geQnBkX.mp3"
        },
        {
            "name": "Cocomelon Intro",
            "color": "rgb(49, 255, 30)",
            "mp3": "/media/sounds/cocomelon-intro.mp3"
        },
        {
            "name": "The Bluetooth Device its connected Succesfull",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/the-bluetooth-device-its-connected-succesfull.mp3"
        },
        {
            "name": "fnaf phone ringing sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/fnaf-phone-ringing-sound.mp3"
        },
        {
            "name": "Formula 1 Car",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/formula-1-car.mp3"
        },
        {
            "name": "Stadium Rave",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/stadium-rave.mp3"
        },
        {
            "name": "eunoia cake!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/eunoia-cake.mp3"
        },
        {
            "name": "1x1x1x1",
            "color": "rgb(19, 54, 12)",
            "mp3": "/media/sounds/1x1x1x1.mp3"
        },
        {
            "name": "battlebus",
            "color": "rgb(109, 255, 109)",
            "mp3": "/media/sounds/battlebus.mp3"
        },
        {
            "name": "ONE MORE GAME",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/one-more-game.mp3"
        },
        {
            "name": "FAWK you mean!!!",
            "color": "rgb(245, 255, 26)",
            "mp3": "/media/sounds/fawk-you-mean.mp3"
        },
        {
            "name": "Ghachar Ghachar",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ghachar-ghachar.mp3"
        },
        {
            "name": "(EXTREMELY LOUD) I'm Back!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/extremely-loud-im-back-joeysworldtour.mp3"
        },
        {
            "name": "HD2 Mission Complete",
            "color": "rgb(255, 251, 0)",
            "mp3": "/media/sounds/hd2-mission-complete.mp3"
        },
        {
            "name": "Lula: VAI TODO MINDO SE FDR!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lula-vai-todo-mindo-se-fdr.mp3"
        },
        {
            "name": "I LIKE FEMBOYS",
            "color": "rgb(115, 255, 255)",
            "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
        },
        {
            "name": "Lula por favor me ajuda",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/lula-por-favor-me-ajuda.mp3"
        },
        {
            "name": "6 7 (full)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/6-7-full.mp3"
        },
        {
            "name": "Neggaz",
            "color": "rgb(90, 54, 31)",
            "mp3": "/media/sounds/neggaz.mp3"
        },
        {
            "name": "Rocket League Goal Sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rocket-league-goal-sound.mp3"
        },
        {
            "name": "Hey 67 kid",
            "color": "rgb(130, 255, 238)",
            "mp3": "/media/sounds/hey-67-kid.mp3"
        },
        {
            "name": "(Normal Mode.) Simon Sprunki",
            "color": "rgb(243, 255, 0)",
            "mp3": "/media/sounds/normal-mode-simon-sprunki.mp3"
        },
        {
            "name": "Angry Birds King Pig Laugh",
            "color": "rgb(21, 255, 8)",
            "mp3": "/media/sounds/angry-birds-king-pig-laugh.mp3"
        },
        {
            "name": "Cute Alert Message",
            "color": "rgb(255, 21, 243)",
            "mp3": "/media/sounds/cute_msg_alert.mp3"
        },
        {
            "name": "Bengali gaali",
            "color": "rgb(40, 91, 39)",
            "mp3": "/media/sounds/bengali-gaali.mp3"
        },
        {
            "name": "skull trumpet",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/skullsound2.mp3"
        },
        {
            "name": "ALL MY FELLAS",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/all-my-fellas.mp3"
        },
        {
            "name": "Old Spice Whistle = MattHQ",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
        },
        {
            "name": "Rizz walk",
            "color": "rgb(91, 225, 255)",
            "mp3": "/media/sounds/rizz-walk.mp3"
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
            "name": "°__°",
            "color": "rgb(2, 1, 3)",
            "mp3": "/media/sounds/deg-deg_4M6Cojn.mp3"
        },
        {
            "name": "Mario Yahoo",
            "color": "rgb(204, 153, 0)",
            "mp3": "/media/sounds/super-mario-64-yahoo-sound.mp3"
        },
        {
            "name": "Dolphin",
            "color": "rgb(0, 0, 153)",
            "mp3": "/media/sounds/dolphin.mp3"
        },
        {
            "name": "Crowd Laughter (short)",
            "color": "rgb(255, 0, 102)",
            "mp3": "/media/sounds/laughter-short.mp3"
        },
        {
            "name": "sigma",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sigma.mp3"
        },
        {
            "name": "turbopaja",
            "color": "rgb(169, 255, 84)",
            "mp3": "/media/sounds/turbopaja.mp3"
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
            "name": "This is Sparta!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/thisissparta.swf.mp3"
        },
        {
            "name": "It's Britney B*TCH!",
            "color": "rgb(153, 0, 204)",
            "mp3": "/media/sounds/itsbritney.mp3"
        },
        {
            "name": "Record Scratch",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/record-scratch.mp3"
        },
        {
            "name": "Purge Siren",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/purge_siren.mp3"
        },
        {
            "name": "MLG PWNAGE",
            "color": "rgb(51, 255, 0)",
            "mp3": "/media/sounds/swaggityswagger.mp3"
        },
        {
            "name": "WE ARE THE CHAMPIONS",
            "color": "rgb(51, 0, 51)",
            "mp3": "/media/sounds/we-are-the-champions-copia.mp3"
        },
        {
            "name": "Rizz walk",
            "color": "rgb(91, 225, 255)",
            "mp3": "/media/sounds/rizz-walk.mp3"
        },
        {
            "name": "Explosion",
            "color": "rgb(255, 51, 0)",
            "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
        },
        {
            "name": "Super Mario 64 Thwomp",
            "color": "rgb(0, 102, 255)",
            "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
        },
        {
            "name": "Kanye West Wolves Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/wolves_-_kanye-6b019add-71f7-4a31-8363-ed112937445e.mp3"
        },
        {
            "name": "GMod ragdoll impact sounds",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmpl0bxqky_.mp3"
        },
        {
            "name": "Rizz Me U",
            "color": "rgb(208, 0, 255)",
            "mp3": "/media/sounds/rizz-me-u.mp3"
        },
        {
            "name": "HOLD UP WAIT A MINUTE SOMETHIN",
            "color": "rgb(37, 255, 30)",
            "mp3": "/media/sounds/untitled_OTuNHvt.mp3"
        },
        {
            "name": "Hawk Tuah!",
            "color": "rgb(255, 234, 41)",
            "mp3": "/media/sounds/hawk-tuah_SRaUp2L.mp3"
        },
        {
            "name": "Get Griddy | Fortnite Emote",
            "color": "rgb(0, 255, 242)",
            "mp3": "/media/sounds/9convert_f28qQKC.mp3"
        },
        {
            "name": "Stop the cap (Cut)",
            "color": "rgb(255, 206, 8)",
            "mp3": "/media/sounds/stop-the-cap-cut.mp3"
        },
        {
            "name": "Disconnect discord",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
        },
        {
            "name": "Dolphin",
            "color": "rgb(0, 0, 153)",
            "mp3": "/media/sounds/dolphin.mp3"
        },
        {
            "name": "creeper explosion minecraft",
            "color": "rgb(93, 255, 75)",
            "mp3": "/media/sounds/creeper-explosion.mp3"
        },
        {
            "name": "Whisper Song",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/barney-the-whisper-song.mp3"
        },
        {
            "name": "Counter Strike - Ok, let's go!",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/counter-strike-jingle-cs-radio-ok-lets-go.mp3"
        },
        {
            "name": "Mortal Kombat!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mortal-kombat.mp3"
        },
        {
            "name": "William knifeman",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/william-knifeman.mp3"
        },
        {
            "name": "Cat Meow 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cat-meow-mp3.mp3"
        },
        {
            "name": "Cod Zombies Bye Bye",
            "color": "rgb(185, 131, 82)",
            "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
        },
        {
            "name": "Fnaf phone guy",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hiyyyya_2021_05_04_22_13_29_802.mp3"
        },
        {
            "name": "Gangsta's Paradise Choir 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
        },
        {
            "name": "GunShotttt",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/gunshotjbudden_P9IlJlC.mp3"
        },
        {
            "name": "Wega Jumpscare",
            "color": "rgb(103, 1, 161)",
            "mp3": "/media/sounds/wega-jumpscare.mp3"
        },
        {
            "name": "Freddy fazbear rizz",
            "color": "rgb(54, 39, 186)",
            "mp3": "/media/sounds/freddy-fazbear-rizz.mp3"
        },
        {
            "name": "TOKYO DRIFT Teriyaki Boyz",
            "color": "rgb(244, 244, 244)",
            "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer_7vAtKUf.mp3"
        },
        {
            "name": "Discord spam",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/discord-spam.mp3"
        },
        {
            "name": "I AM ATOMIC!!!",
            "color": "rgb(44, 0, 110)",
            "mp3": "/media/sounds/i-am-atomic_a1qHWQ9.mp3"
        },
        {
            "name": "Goofy Bonk",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/goofy-bonk.mp3"
        },
        {
            "name": "Roblox ahh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-ahh.mp3"
        },
        {
            "name": "Hannah Montana Transition",
            "color": "rgb(255, 233, 0)",
            "mp3": "/media/sounds/hannah-montana-transition.mp3"
        },
        {
            "name": "CJ - Ah Shit Here we go again",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ah-shit-here-we-go-again_jyHLMOg.mp3"
        },
        {
            "name": "Chili Chili Fart",
            "color": "rgb(41, 128, 24)",
            "mp3": "/media/sounds/chili-chili-fart_0ikahyN.mp3"
        },
        {
            "name": "Lancer Laugh",
            "color": "rgb(50, 0, 255)",
            "mp3": "/media/sounds/lancer-laugh.mp3"
        },
        {
            "name": "(Mafioso) I feel no pain",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mafioso-i-feel-no-pain.mp3"
        },
        {
            "name": "that fuckn bird that i hate",
            "color": "rgb(9, 255, 0)",
            "mp3": "/media/sounds/that-fuckn-bird-that-i-hate.mp3"
        },
        {
            "name": "Red Larva Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/red-larva-scream.mp3"
        },
        {
            "name": "START DIGGING",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/start-digging.mp3"
        },
        {
            "name": "Defy Gravity x God Is Kanye",
            "color": "rgb(0, 222, 7)",
            "mp3": "/media/sounds/defy-gravity-x-god-is-kanye.mp3"
        },
        {
            "name": "Ace Attorney Phoenix Wright HOLD IT",
            "color": "rgb(255, 30, 7)",
            "mp3": "/media/sounds/ace-attorney-phoenix-wright-hold-it.mp3"
        },
        {
            "name": "Ruko jara",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmp_z5b93np.mp3"
        },
        {
            "name": "mlem mlem mlem",
            "color": "rgb(36, 184, 64)",
            "mp3": "/media/sounds/mlem-mlem-mlem.mp3"
        },
        {
            "name": "clanker",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clanker.mp3"
        },
        {
            "name": "Pandemonium Searching",
            "color": "rgb(55, 0, 0)",
            "mp3": "/media/sounds/pandemonium-searching.mp3"
        },
        {
            "name": "Sunday Night Football Horns",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sunday-night-football-horns.mp3"
        },
        {
            "name": "FAHHHH 4",
            "color": "rgb(255, 79, 246)",
            "mp3": "/media/sounds/fahhhh-4.mp3"
        },
        {
            "name": "Autotune Scat",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/autotunescat.mp3"
        },
        {
            "name": "bingle bongle dingle dangle",
            "color": "rgb(255, 169, 64)",
            "mp3": "/media/sounds/bingle-bongle-dingle-dangle.mp3"
        },
        {
            "name": "Pinoy yapping",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pinoy-yapping.mp3"
        },
        {
            "name": "twitch doanation",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/twitch-doanation.mp3"
        },
        {
            "name": "Enrique (sped up)",
            "color": "rgb(0, 255, 42)",
            "mp3": "/media/sounds/enrique-sped-up.mp3"
        },
        {
            "name": "Minions Cry",
            "color": "rgb(238, 255, 0)",
            "mp3": "/media/sounds/minions-cry.mp3"
        },
        {
            "name": "Lethal Company - Jester Wind Up",
            "color": "rgb(255, 117, 117)",
            "mp3": "/media/sounds/lethal-company-jester-wind-up.mp3"
        },
        {
            "name": "WAKE TF UP!!",
            "color": "rgb(38, 41, 62)",
            "mp3": "/media/sounds/wake-tf-up.mp3"
        },
        {
            "name": "Jim Ross - Good God Almighty",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/jim-ross-good-god-almighty.mp3"
        },
        {
            "name": "To Da Loo - Chow",
            "color": "rgb(154, 38, 255)",
            "mp3": "/media/sounds/to-da-loo-chow.mp3"
        },
        {
            "name": "Ragnarok sound",
            "color": "rgb(255, 0, 230)",
            "mp3": "/media/sounds/ragnarok-sound.mp3"
        },
        {
            "name": "OH NO NO NO HAHAHAHA",
            "color": "rgb(107, 255, 84)",
            "mp3": "/media/sounds/oh-no-no-no-hahahaha.mp3"
        },
        {
            "name": "Gunshot 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sfx-gunshot2-online-audio-converter.mp3"
        },
        {
            "name": "Mario Party Announcer: START",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mario-party-announcer-start.mp3"
        },
        {
            "name": "Waka Waka",
            "color": "rgb(0, 153, 51)",
            "mp3": "/media/sounds/waka.mp3"
        },
        {
            "name": "HOLY CRAPPP!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/holy-crappp.mp3"
        },
        {
            "name": "BotW",
            "color": "rgb(111, 255, 230)",
            "mp3": "/media/sounds/botw.mp3"
        },
        {
            "name": "Bill Nye the Science Guy intro short",
            "color": "rgb(77, 37, 255)",
            "mp3": "/media/sounds/bill-nye-the-science-guy-intro-short.mp3"
        },
        {
            "name": "Do You Have Any Ibuprofen",
            "color": "rgb(237, 43, 255)",
            "mp3": "/media/sounds/do-you-have-any-ibuprofen.mp3"
        },
        {
            "name": "Ghostly sound",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ghostly-sound.mp3"
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
            "name": "ak47 loud",
            "color": "rgb(45, 58, 255)",
            "mp3": "/media/sounds/ak47-loud.mp3"
        },
        {
            "name": "Roblox ahh",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/roblox-ahh.mp3"
        },
        {
            "name": "CJ - Ah Shit Here we go again",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/ah-shit-here-we-go-again_jyHLMOg.mp3"
        },
        {
            "name": "really nig",
            "color": "rgb(3, 0, 0)",
            "mp3": "/media/sounds/really-nig.mp3"
        },
        {
            "name": "Chili Chili Fart",
            "color": "rgb(41, 128, 24)",
            "mp3": "/media/sounds/chili-chili-fart_0ikahyN.mp3"
        },
        {
            "name": "Lancer Laugh",
            "color": "rgb(50, 0, 255)",
            "mp3": "/media/sounds/lancer-laugh.mp3"
        },
        {
            "name": "(Mafioso) I feel no pain",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/mafioso-i-feel-no-pain.mp3"
        },
        {
            "name": "that fuckn bird that i hate",
            "color": "rgb(9, 255, 0)",
            "mp3": "/media/sounds/that-fuckn-bird-that-i-hate.mp3"
        },
        {
            "name": "Red Larva Scream",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/red-larva-scream.mp3"
        },
        {
            "name": "START DIGGING",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/start-digging.mp3"
        },
        {
            "name": "Ace Attorney Phoenix Wright HOLD IT",
            "color": "rgb(255, 30, 7)",
            "mp3": "/media/sounds/ace-attorney-phoenix-wright-hold-it.mp3"
        },
        {
            "name": "Ruko jara",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmp_z5b93np.mp3"
        },
        {
            "name": "mlem mlem mlem",
            "color": "rgb(36, 184, 64)",
            "mp3": "/media/sounds/mlem-mlem-mlem.mp3"
        },
        {
            "name": "clanker",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/clanker.mp3"
        },
        {
            "name": "Pandemonium Searching",
            "color": "rgb(55, 0, 0)",
            "mp3": "/media/sounds/pandemonium-searching.mp3"
        },
        {
            "name": "Sunday Night Football Horns",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sunday-night-football-horns.mp3"
        },
        {
            "name": "Ram rider scream",
            "color": "rgb(255, 159, 69)",
            "mp3": "/media/sounds/ram-rider-scream.mp3"
        },
        {
            "name": "Тун тун сахурчик бр бр патапим",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tun-tun-sakhurchik-br-br-patapim.mp3"
        },
        {
            "name": "bingle bongle dingle dangle",
            "color": "rgb(255, 169, 64)",
            "mp3": "/media/sounds/bingle-bongle-dingle-dangle.mp3"
        },
        {
            "name": "twitch doanation",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/twitch-doanation.mp3"
        },
        {
            "name": "Enrique (sped up)",
            "color": "rgb(0, 255, 42)",
            "mp3": "/media/sounds/enrique-sped-up.mp3"
        },
        {
            "name": "Minions Cry",
            "color": "rgb(238, 255, 0)",
            "mp3": "/media/sounds/minions-cry.mp3"
        },
        {
            "name": "Lethal Company - Jester Wind Up",
            "color": "rgb(255, 117, 117)",
            "mp3": "/media/sounds/lethal-company-jester-wind-up.mp3"
        },
        {
            "name": "Jim Ross - Good God Almighty",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/jim-ross-good-god-almighty.mp3"
        },
        {
            "name": "Ragnarok sound",
            "color": "rgb(255, 0, 230)",
            "mp3": "/media/sounds/ragnarok-sound.mp3"
        },
        {
            "name": "OH NO NO NO HAHAHAHA",
            "color": "rgb(107, 255, 84)",
            "mp3": "/media/sounds/oh-no-no-no-hahahaha.mp3"
        },
        {
            "name": "Gunshot 2",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sfx-gunshot2-online-audio-converter.mp3"
        },
        {
            "name": "Mario Party Announcer: START",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mario-party-announcer-start.mp3"
        },
        {
            "name": "Waka Waka",
            "color": "rgb(0, 153, 51)",
            "mp3": "/media/sounds/waka.mp3"
        },
        {
            "name": "HOLY CRAPPP!!!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/holy-crappp.mp3"
        },
        {
            "name": "BotW",
            "color": "rgb(111, 255, 230)",
            "mp3": "/media/sounds/botw.mp3"
        },
        {
            "name": "Bill Nye the Science Guy intro short",
            "color": "rgb(77, 37, 255)",
            "mp3": "/media/sounds/bill-nye-the-science-guy-intro-short.mp3"
        },
        {
            "name": "long smelly fart",
            "color": "rgb(145, 255, 54)",
            "mp3": "/media/sounds/sstg-8682b015-dddb-43c3-8e0f-998ddb021be8-1.mp3"
        },
        {
            "name": "Biden Vote",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/videoplayback-1-online-audio-converter_YhTWCh4.mp3"
        },
        {
            "name": "Иди нахуй228",
            "color": "rgb(43, 19, 255)",
            "mp3": "/media/sounds/idi-nakhui228.mp3"
        },
        {
            "name": "Yayyyy Meme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yayyyy-meme.mp3"
        },
        {
            "name": "Bazinga!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/bazinga.swf.mp3"
        },
        {
            "name": "The Simpsons - Nelson's HA-HA!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
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
            "name": "It's Britney B*TCH!",
            "color": "rgb(153, 0, 204)",
            "mp3": "/media/sounds/itsbritney.mp3"
        },
        {
            "name": "Rap Battle OOOHHHH!",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
        },
        {
            "name": "Among us Roundstart",
            "color": "rgb(220, 10, 255)",
            "mp3": "/media/sounds/among-us-roundstart.mp3"
        },
        {
            "name": "FNAF Balloon Boy Hi",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/echo1.mp3"
        },
        {
            "name": "WRYYY",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/dio-wryyy.mp3"
        },
        {
            "name": "Big fart",
            "color": "rgb(153, 51, 0)",
            "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
        },
        {
            "name": "Rizz Me U",
            "color": "rgb(208, 0, 255)",
            "mp3": "/media/sounds/rizz-me-u.mp3"
        },
        {
            "name": "rizzzzzzzzing",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/rizzzzzzzzing.mp3"
        },
        {
            "name": "Street Fighter K.O",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/mlg-resource-street-fighter-ko-greenscreen.mp3"
        },
        {
            "name": "Ohhh My God",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oh_my_god_vine.mp3"
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
            "name": "money money money money",
            "color": "rgb(51, 255, 0)",
            "mp3": "/media/sounds/money-button.mp3"
        },
        {
            "name": "sonic spring",
            "color": "rgb(255, 255, 0)",
            "mp3": "/media/sounds/sonic-spring.mp3"
        },
        {
            "name": "The Rock Shut Up",
            "color": "rgb(0, 255, 94)",
            "mp3": "/media/sounds/the-rock-shut-up.mp3"
        },
        {
            "name": "Star Wars Siren",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/imperial-alert.mp3"
        },
        {
            "name": "Oui - Rizzler",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/oui-rizzler.mp3"
        },
        {
            "name": "Pokemon Item Found",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/pokemon-red_blue_yellow-item-found-sound-effect.mp3"
        },
        {
            "name": "Counter Strike - Ok, let's go!",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/counter-strike-jingle-cs-radio-ok-lets-go.mp3"
        },
        {
            "name": "sigma",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/sigma.mp3"
        },
        {
            "name": "crowd booing",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
        },
        {
            "name": "sword",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
        },
        {
            "name": "Among Us role reveal",
            "color": "rgb(0, 255, 0)",
            "mp3": "/media/sounds/tmp0wyb54t7.mp3"
        },
        {
            "name": "Americas Got Talent Buzzer",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/y2mate_eb8vm6J.mp3"
        },
        {
            "name": "yeat bell",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/yeat-bell.mp3"
        },
        {
            "name": "romantic",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/45_0HW2p0x.mp3"
        },
        {
            "name": "Cod Zombies Bye Bye",
            "color": "rgb(185, 131, 82)",
            "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
        },
        {
            "name": "(Anakin) LIAR",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
        },
        {
            "name": "really nig",
            "color": "rgb(3, 0, 0)",
            "mp3": "/media/sounds/really-nig.mp3"
        },
        {
            "name": "One Piece OST Overtaken",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/one-piece-ost-overtaken.mp3"
        },
        {
            "name": "Olha a mensagem !b",
            "color": "rgb(0, 255, 34)",
            "mp3": "/media/sounds/olha-a-mensagem-b_Rp09o17.mp3"
        },
        {
            "name": "Normal Spamton's laugh",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/normal-spamtons-laugh.mp3"
        },
        {
            "name": "Gruesome Sound",
            "color": "rgb(162, 0, 0)",
            "mp3": "/media/sounds/gruesome-sound.mp3"
        },
        {
            "name": "Tlabaja Chino",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tlabaja-chino.mp3"
        },
        {
            "name": "Ai chega chega",
            "color": "rgb(36, 160, 74)",
            "mp3": "/media/sounds/ai-chega-chega.mp3"
        },
        {
            "name": "question mark",
            "color": "rgb(12, 89, 255)",
            "mp3": "/media/sounds/question-mark.mp3"
        },
        {
            "name": "Bom dia magnata",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/bom-dia-magnata.mp3"
        },
        {
            "name": "Yeah, yeah",
            "color": "rgb(255, 130, 130)",
            "mp3": "/media/sounds/yeah-yeah_erb67LF.mp3"
        },
        {
            "name": "hub troll (loud)",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/hub-troll-loud.mp3"
        },
        {
            "name": "Baigan",
            "color": "rgb(255, 255, 255)",
            "mp3": "/media/sounds/baigan.mp3"
        },
        {
            "name": "golpe chavo",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/el-chavo-sonido-de-golpe-campana.mp3"
        },
        {
            "name": "WHAT THE- BOOM",
            "color": "rgb(49, 0, 118)",
            "mp3": "/media/sounds/what-the-boom.mp3"
        },
        {
            "name": "eggman get a load of this",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/get-a-load-of-this_LevG8FK.mp3"
        },
        {
            "name": "Samsung alarm but it's mafioso",
            "color": "rgb(93, 93, 93)",
            "mp3": "/media/sounds/samsung-alarm-but-its-mafioso.mp3"
        },
        {
            "name": "cadê vc fiadaputa você, por que não trabalha?",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/cade-vc-fiadaputa-voce-por-que-nao-trabalha.mp3"
        },
        {
            "name": "Ram rider scream",
            "color": "rgb(255, 159, 69)",
            "mp3": "/media/sounds/ram-rider-scream.mp3"
        },
        {
            "name": "Miku Sega",
            "color": "rgb(10, 255, 194)",
            "mp3": "/media/sounds/miku-sega.mp3"
        },
        {
            "name": "you are the bay harbor butcher",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/you-are-the-bay-harbor-butcher.mp3"
        },
        {
            "name": "Тун тун сахурчик бр бр патапим",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/tun-tun-sakhurchik-br-br-patapim.mp3"
        },
        {
            "name": "I LIKE FEMBOYS",
            "color": "rgb(115, 255, 255)",
            "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
        },
        {
            "name": "que é isso moreno",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/que-isso-moreno.mp3"
        },
        {
            "name": "Harikitte Ikou Kitasan Black",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/harikitte-ikou-kitasan-black.mp3"
        },
        {
            "name": "Smzinho \"meu herói não usa capa",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/smzinho-meu-heroi-nao-usa-capa.mp3"
        },
        {
            "name": "Lekin ye sala",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/lekin-ye-sala.mp3"
        },
        {
            "name": "you stupid nickelodeon",
            "color": "rgb(255, 166, 57)",
            "mp3": "/media/sounds/you-stupid-nickelodeon.mp3"
        },
        {
            "name": "KING CRIMSON!",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/y2mate_mQRydX9.mp3"
        },
        {
            "name": "CalebCity Waiit",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/calebcity-waiit.mp3"
        },
        {
            "name": "B2Q - Brick on metal",
            "color": "rgb(137, 35, 14)",
            "mp3": "/media/sounds/brick-on-metal.mp3"
        },
        {
            "name": "Let Me Know Melodica",
            "color": "rgb(189, 89, 255)",
            "mp3": "/media/sounds/let-me-know-melodica.mp3"
        },
        {
            "name": "Звук взрыва громко",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/zvuk-vzryva-gromko.mp3"
        },
        {
            "name": "Dj Niggletips",
            "color": "rgb(0, 0, 0)",
            "mp3": "/media/sounds/dj-niggletips.mp3"
        },
        {
            "name": "HE HE HE HA Clash royale",
            "color": "rgb(19, 19, 19)",
            "mp3": "/media/sounds/he-he-he-ha-clash-royale.mp3"
        },
        {
            "name": "Botw Zelda Guardian Theme",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/botw-zelda-guardian-theme.mp3"
        },
        {
            "name": "jumscare",
            "color": "rgb(255, 0, 0)",
            "mp3": "/media/sounds/video-1-online-audio-converter.mp3"
        }
    ]