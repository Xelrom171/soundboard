/*
taken from https://www.myinstants.com/en/trending/us/
last updated: 2025-04-23T00:01:44.773Z

(() => {
  return Array.from(document.querySelectorAll("#instants_container .instant")).map(el => ({
    name: el.querySelector(".instant-link")?.textContent.trim(),
    color: el.querySelector(".circle")?.style.backgroundColor,
    mp3: "https://www.myinstants.com" + el.querySelector("button[onclick^='play']")?.getAttribute("onclick")?.match(/'([^']+\.mp3)'/)?.[1]
  }));
})()
*/
export const sounds =
[
    {
        "name": "VINE BOOM SOUND",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dry-fart.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "Steves lava chicken",
        "color": "rgb(255, 134, 5)",
        "mp3": "https://www.myinstants.com/media/sounds/steves-lava-chicken.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Gay echo",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gay-echo.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/movie_1.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "https://www.myinstants.com/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord-notification.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "tralalero tralala",
        "color": "rgb(127, 255, 155)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-tralala_kp2iXbJ.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "https://www.myinstants.com/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "Limit on talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/limit-on-talking.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "https://www.myinstants.com/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "https://www.myinstants.com/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "https://www.myinstants.com/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "YOUR PHONE RINGING",
        "color": "rgb(44, 255, 242)",
        "mp3": "https://www.myinstants.com/media/sounds/your-phone-ringing_TKtb5bz.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "https://www.myinstants.com/media/sounds/bone-crack.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "flashbanggg",
        "color": "rgb(4, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/flashbanggg.mp3"
    },
    {
        "name": "Loud Ahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/loud-ahhh.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "https://www.myinstants.com/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "https://www.myinstants.com/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "https://www.myinstants.com/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "bombardiro crocodilo",
        "color": "rgb(56, 180, 166)",
        "mp3": "https://www.myinstants.com/media/sounds/bombardiro-crocodilo.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "https://www.myinstants.com/media/sounds/rehehehe.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "Imma make you pump like that",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pump.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "https://www.myinstants.com/media/sounds/rehehehe.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/downer_noise.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "Стоны ах ах ах",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/stony-akh-akh-akh.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "Flint and Steel (minecraft movie)",
        "color": "rgb(115, 196, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/flint-and-steel-minecraft-movie.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "Sexy Sax",
        "color": "rgb(153, 0, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/george-micael-wham-careless-whisper-1.mp3"
    },
    {
        "name": "OW OH P DIDDY NO",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ow-oh-p-diddy-no.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "bombardino crocodilo",
        "color": "rgb(81, 255, 249)",
        "mp3": "https://www.myinstants.com/media/sounds/bombardino-crocodilo.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "https://www.myinstants.com/media/sounds/bomboclat.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "The Nether.",
        "color": "rgb(255, 85, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-nether_MS1HJQM.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "https://www.myinstants.com/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "https://www.myinstants.com/media/sounds/1738-song.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lebron.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "https://www.myinstants.com/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "L-lava c-c-chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/l-lava-c-c-chicken.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/applepay.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "https://www.myinstants.com/media/sounds/1738-song.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lebron.mp3"
    },
    {
        "name": "M e o w ~",
        "color": "rgb(120, 85, 120)",
        "mp3": "https://www.myinstants.com/media/sounds/m-e-o-w.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/erro.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "BACON EGG N CHEESE",
        "color": "rgb(155, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bacon-egg-n-cheese.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "YouTube UWUUUUU",
        "color": "rgb(255, 66, 138)",
        "mp3": "https://www.myinstants.com/media/sounds/youtube-uwuuuuu.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "https://www.myinstants.com/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pluh.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "https://www.myinstants.com/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "niggeralex",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/niggeralex_w3q3ByI.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/fartmeme.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/auughhh.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "https://www.myinstants.com/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/diddy-done.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "Tralalero tralala brainrot",
        "color": "rgb(61, 184, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-tralala-brainrot.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/huh-cat.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "https://www.myinstants.com/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "https://www.myinstants.com/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Tralalero tralala brainrot",
        "color": "rgb(61, 184, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-tralala-brainrot.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "https://www.myinstants.com/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "https://www.myinstants.com/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "https://www.myinstants.com/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/5x30.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "https://www.myinstants.com/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nfl.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "https://www.myinstants.com/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "https://www.myinstants.com/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "https://www.myinstants.com/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "https://www.myinstants.com/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "I am Steve (minecraft movie)",
        "color": "rgb(255, 25, 232)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-steve-minecraft-movie.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Chimpanzini Bananini",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chimpanzini-bananini.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mac-quack.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/stony-250.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/creeper.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/daddys-home.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "https://www.myinstants.com/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "https://www.myinstants.com/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "https://www.myinstants.com/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "TUNG TUNG TUNG SAHUR!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tung-tung-tung-sahur_TUujI1V.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nfl.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "Lava Chiken Full Song from A minecraft movie",
        "color": "rgb(255, 222, 61)",
        "mp3": "https://www.myinstants.com/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "https://www.myinstants.com/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "niggershit",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/niggershit_TAAvENV.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/quack_5.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "https://www.myinstants.com/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/creeper.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE",
        "color": "rgb(0, 153, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/water-bucket-release.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "https://www.myinstants.com/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "https://www.myinstants.com/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "https://www.myinstants.com/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/let-her-go.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "French meme song",
        "color": "rgb(60, 37, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/french-meme-song.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "niggershit",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/niggershit_TAAvENV.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "https://www.myinstants.com/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "https://www.myinstants.com/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "https://www.myinstants.com/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/brain-fart.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/heknew.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "https://www.myinstants.com/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "https://www.myinstants.com/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "chicken jockey (BASS BOOSTED)",
        "color": "rgb(9, 181, 12)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-bass-boosted.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "https://www.myinstants.com/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "https://www.myinstants.com/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "https://www.myinstants.com/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cheering.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "THE NETHER (Minecraft Movie)",
        "color": "rgb(164, 37, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/the-nether-minecraft-movie.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "https://www.myinstants.com/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Crocodildo Penisini",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crocodildo-penisini.mp3"
    },
    {
        "name": "Steve's Lava Chicken",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/steves-lava-chicken_UmJvvHF.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "https://www.myinstants.com/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Car Brake and Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/car-brake-and-crash.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "https://www.myinstants.com/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "Chicken Jockey (LOUD)",
        "color": "rgb(3, 162, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-loud.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "https://www.myinstants.com/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "https://www.myinstants.com/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "https://www.myinstants.com/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "https://www.myinstants.com/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "https://www.myinstants.com/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "What the FUCK?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-the-fuck_CiZUehX.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "https://www.myinstants.com/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "https://www.myinstants.com/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/toms-screams.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "https://www.myinstants.com/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mario-meme.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "https://www.myinstants.com/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/lebron-james.mp3"
    },
    {
        "name": "SWAMP IZZO",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/swamp-izzo.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "https://www.myinstants.com/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "https://www.myinstants.com/media/sounds/1-108.mp3"
    },
    {
        "name": "Chicken Jockey!!!",
        "color": "rgb(85, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey_GjALZqG.mp3"
    },
    {
        "name": "tralalero tralala italian brainrot.",
        "color": "rgb(0, 8, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-tralala-italian-brainrot.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "https://www.myinstants.com/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "Гюдок поезда",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/giudok-poezda.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Man shut yo b*tch ass up!!!!!",
        "color": "rgb(255, 53, 208)",
        "mp3": "https://www.myinstants.com/media/sounds/man-stfu.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/epic.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gay-moan.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "IM IN MINECRAFT",
        "color": "rgb(44, 130, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/im-in-minecraft.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "https://www.myinstants.com/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "https://www.myinstants.com/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "OH WA AH AH AH! Disturbed Vocal only",
        "color": "rgb(77, 77, 77)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-wa-ah-ah-ah-disturbed-vocal-only.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "https://www.myinstants.com/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "https://www.myinstants.com/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "https://www.myinstants.com/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "https://www.myinstants.com/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "bombardiro crokodilo",
        "color": "rgb(67, 180, 65)",
        "mp3": "https://www.myinstants.com/media/sounds/bombardiro-crokodilo.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "https://www.myinstants.com/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "https://www.myinstants.com/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "WHERE IS OMNI-MAN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/where-is-omni-man.mp3"
    },
    {
        "name": "Chicken jockey (perfect) [fixed]",
        "color": "rgb(255, 137, 248)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-perfect-fixed.mp3"
    },
    {
        "name": "OH WA AH AH AH! Disturbed Vocal only",
        "color": "rgb(77, 77, 77)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-wa-ah-ah-ah-disturbed-vocal-only.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "https://www.myinstants.com/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "https://www.myinstants.com/media/sounds/67.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "https://www.myinstants.com/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "https://www.myinstants.com/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "Yes King You Digging In A #####",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-king-you-digging-in-a.mp3"
    },
    {
        "name": "OH WA AH AH AH! Disturbed Vocal only",
        "color": "rgb(77, 77, 77)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-wa-ah-ah-ah-disturbed-vocal-only.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/big-explosion.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "$uicideboy$ intro gmi2",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/uicideboy-intro-gmi2.mp3"
    },
    {
        "name": "CHIWIWIS",
        "color": "rgb(43, 43, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/chiwiwis.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Michael Jackson Hee Hee",
        "color": "rgb(160, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/michael-jackson-hee-hee.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "https://www.myinstants.com/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/orb.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "https://www.myinstants.com/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "Por fin apareciste Malnacido -Picoro-",
        "color": "rgb(45, 127, 35)",
        "mp3": "https://www.myinstants.com/media/sounds/por-fin-apareciste-malnacido-picoro.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "Chicken jockey (perfect) [fixed]",
        "color": "rgb(255, 137, 248)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-perfect-fixed.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/money_2.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "https://www.myinstants.com/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "https://www.myinstants.com/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "https://www.myinstants.com/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "https://www.myinstants.com/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "Ballerina cappuccina",
        "color": "rgb(166, 93, 36)",
        "mp3": "https://www.myinstants.com/media/sounds/ballerina-cappuccina.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/12_3.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bat_hit.mp3"
    },
    {
        "name": "Donkey kong oh banana",
        "color": "rgb(250, 255, 17)",
        "mp3": "https://www.myinstants.com/media/sounds/donkey-kong-64-oh-banana.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "Yes King You Digging In A #####",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-king-you-digging-in-a.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "https://www.myinstants.com/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Pirates Of The Carribean!!!",
        "color": "rgb(220, 222, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pirates-mp3cut_xxOvJfH.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "https://www.myinstants.com/media/sounds/67.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "https://www.myinstants.com/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/orb.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Donkey kong oh banana",
        "color": "rgb(250, 255, 17)",
        "mp3": "https://www.myinstants.com/media/sounds/donkey-kong-64-oh-banana.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "https://www.myinstants.com/media/sounds/67.mp3"
    },
    {
        "name": "allahu akbar shout",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/allahu-akbar-shout.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "0.000000001% winrate chance trickshot sieminos",
        "color": "rgb(17, 255, 104)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_HrgsElu.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "AW HELL NAH MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aw-hell-nah-man.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "pain theme naruto",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pain-2.mp3"
    },
    {
        "name": "Вы чё все геи чоли тут?",
        "color": "rgb(94, 250, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/vy-chio-vse-gei-choli-tut.mp3"
    },
    {
        "name": "Bailalo rocky",
        "color": "rgb(73, 7, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bailalo-rocky.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "niggercanadian",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/niggercanadian_dtzVUS1.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "https://www.myinstants.com/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "https://www.myinstants.com/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "https://www.myinstants.com/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "Oh I'm jaking it",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-im-jaking-it.mp3"
    },
    {
        "name": "niggerinternet",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/niggerinternet_Z7N5rgk.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Oui - Rizzler",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oui-rizzler.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "https://www.myinstants.com/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "https://www.myinstants.com/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "clap wet",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/clap-wet.mp3"
    },
    {
        "name": "br br patapim",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/br-br-patapim.mp3"
    },
    {
        "name": "an ENDER PEARL",
        "color": "rgb(95, 39, 159)",
        "mp3": "https://www.myinstants.com/media/sounds/an-ender-pearl.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/counter-strike-jingle-cs-radio-enemy-spotted.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pedro-song.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/strongpunch.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/omgwow.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "https://www.myinstants.com/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "The man on the lakers",
        "color": "rgb(255, 242, 54)",
        "mp3": "https://www.myinstants.com/media/sounds/the-man-on-the-lakers.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING STEP BRO",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "https://www.myinstants.com/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "Hawk Tuah (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hawk-tuah-short.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled2.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "Michael Jackson Hee Hee",
        "color": "rgb(160, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/michael-jackson-hee-hee.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "https://www.myinstants.com/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "BIG D RANDY",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/big-d-randy_VnopRXZ.mp3"
    },
    {
        "name": "THINK FAST CHUCKLENUTS",
        "color": "rgb(255, 11, 11)",
        "mp3": "https://www.myinstants.com/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "https://www.myinstants.com/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/weave.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Гимн твича mzlf",
        "color": "rgb(22, 95, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/gimn-tvicha-mzlf.mp3"
    },
    {
        "name": "Tum tum tum sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tum-tum-tum-sahur.mp3"
    },
    {
        "name": "Подзалупный творожок я несу тебе дружок",
        "color": "rgb(190, 195, 207)",
        "mp3": "https://www.myinstants.com/media/sounds/podzalupnyi-tvorozhok-ia-nesu-tebe-druzhok.mp3"
    },
    {
        "name": "metal gear alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/metalgearsolid.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "https://www.myinstants.com/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/finish-him.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/woman-slap.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Dark souls death",
        "color": "rgb(122, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dark-souls-you-died-sound-effect_hm5sYFG.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "https://www.myinstants.com/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/random-mp3.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "I like ya and I want ya",
        "color": "rgb(102, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-like-ya-and-i-want-ya.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Mr Beast Phonk Meme",
        "color": "rgb(53, 12, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/mr-beast-phonk-meme.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "krabs money money money",
        "color": "rgb(228, 91, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/krabs_money-1.mp3"
    },
    {
        "name": "Invincible Empire Slave",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/invincible-empire-slave.mp3"
    },
    {
        "name": "Allahu Akbar Boom",
        "color": "rgb(255, 0, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/allahu-akbar-boom.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/orb.mp3"
    },
    {
        "name": "Dramatic Impact",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dramatic-impact-1-ren-and-stimpy-production-music.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "https://www.myinstants.com/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Я потяну тебя записку",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ia-potianu-tebia-zapisku.mp3"
    },
    {
        "name": "(Normal Mode.) Mr.Fun Computer Sprunki",
        "color": "rgb(168, 168, 168)",
        "mp3": "https://www.myinstants.com/media/sounds/normal-mode-mr-fun-computer-sprunki.mp3"
    },
    {
        "name": "Ballerina cappuccina",
        "color": "rgb(166, 93, 36)",
        "mp3": "https://www.myinstants.com/media/sounds/ballerina-cappuccina.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dial_up.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "https://www.myinstants.com/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/why-are.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "THE BOTTOM",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-bottom.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/levelup.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "https://www.myinstants.com/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "cat meow sound effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/meow_jEHtSyd.mp3"
    },
    {
        "name": "Backhoe",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/backhoe.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "REPO ROBE",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/repo-robe.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nooo.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fart_1.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "https://www.myinstants.com/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "sword",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Yes, Mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-mommy.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "N Word Rap",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/n-word-rap.mp3"
    },
    {
        "name": "CHICKEN JOCKEYY",
        "color": "rgb(33, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockeyy.mp3"
    },
    {
        "name": "Allahu Akbar Boom",
        "color": "rgb(255, 0, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/allahu-akbar-boom.mp3"
    },
    {
        "name": "ребята давай-те сюда свои чл--",
        "color": "rgb(15, 15, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rebiata-davai-te-siuda-svoi-chl.mp3"
    },
    {
        "name": "Kids Cheering YAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kids-cheering-sound-effect.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/applause-4.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "https://www.myinstants.com/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dial_up.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "All around me are familiar faces",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/original-all-around-me-are-familiar-faces-black-kid-singing-vine-mad-world-gary-jules.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "Cat Meow 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cat-meow-mp3.mp3"
    },
    {
        "name": "ZEHAHAHA (Edward Teach laugh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zehahaha_laugh.mp3"
    },
    {
        "name": "DMC - I AM THE STORM",
        "color": "rgb(65, 62, 138)",
        "mp3": "https://www.myinstants.com/media/sounds/approaching-storm.mp3"
    },
    {
        "name": "Scott Pilgrim Censored Word",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scott-pilgrim-censored-word_pwEwk9N.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "Ultrakill Explosion",
        "color": "rgb(0, 61, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ultrakill-explosion.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "https://www.myinstants.com/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "C00lkidd Giggle",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/c00lkidd-giggle.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/katon.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Camera Shutter (VoiceMod)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/camera-shutter.mp3"
    },
    {
        "name": "Dramatic Impact",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dramatic-impact-1-ren-and-stimpy-production-music.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "https://www.myinstants.com/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "https://www.myinstants.com/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/miau-triste.mp3"
    },
    {
        "name": "krabs money money money",
        "color": "rgb(228, 91, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/krabs_money-1.mp3"
    },
    {
        "name": "Suuuuuuuuuuuuu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/suuuuuuuuuuuuu.mp3"
    },
    {
        "name": "Metal pipe sound",
        "color": "rgb(96, 255, 231)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-pipe-sound.mp3"
    },
    {
        "name": "Я потяну тебя записку",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ia-potianu-tebia-zapisku.mp3"
    },
    {
        "name": "that fuckn bird that i hate",
        "color": "rgb(9, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/that-fuckn-bird-that-i-hate.mp3"
    },
    {
        "name": "South Park Harley gang",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/harleygag2.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nooo.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/levelup.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "https://www.myinstants.com/media/sounds/raaaah.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "https://www.myinstants.com/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "https://www.myinstants.com/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Cat Meow 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cat-meow-mp3.mp3"
    },
    {
        "name": "ZEHAHAHA (Edward Teach laugh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zehahaha_laugh.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "DMC - I AM THE STORM",
        "color": "rgb(65, 62, 138)",
        "mp3": "https://www.myinstants.com/media/sounds/approaching-storm.mp3"
    },
    {
        "name": "Scott Pilgrim Censored Word",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scott-pilgrim-censored-word_pwEwk9N.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "Я потяну тебя записку",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ia-potianu-tebia-zapisku.mp3"
    },
    {
        "name": "ВЫКЛЮЧИ ЕГО НАХУЙ",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vykliuchi-ego-nakhui.mp3"
    },
    {
        "name": "kqdee",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kqdee.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/skull-trumpet.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "Camera Shutter (VoiceMod)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/camera-shutter.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "https://www.myinstants.com/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "https://www.myinstants.com/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "https://www.myinstants.com/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "killpop",
        "color": "rgb(254, 255, 229)",
        "mp3": "https://www.myinstants.com/media/sounds/killpop.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "Suuuuuuuuuuuuu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/suuuuuuuuuuuuu.mp3"
    },
    {
        "name": "Fast whoosh",
        "color": "rgb(239, 249, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/fast-whoosh.mp3"
    },
    {
        "name": "hahaha gago",
        "color": "rgb(9, 255, 34)",
        "mp3": "https://www.myinstants.com/media/sounds/gago-effect-by-cong-tv.mp3"
    },
    {
        "name": "Metal pipe sound",
        "color": "rgb(96, 255, 231)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-pipe-sound.mp3"
    },
    {
        "name": "ОХ ЗРЯ Я ТУДА ПОЛЕЗ",
        "color": "rgb(184, 255, 170)",
        "mp3": "https://www.myinstants.com/media/sounds/okh-zria-ia-tuda-polez.mp3"
    },
    {
        "name": "isagi STRIKADA",
        "color": "rgb(6, 255, 221)",
        "mp3": "https://www.myinstants.com/media/sounds/isagi-strikada.mp3"
    },
    {
        "name": "Lirili larila",
        "color": "rgb(60, 255, 37)",
        "mp3": "https://www.myinstants.com/media/sounds/lirili-larila.mp3"
    },
    {
        "name": "Lula empurra mole",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lula-empurra-mole.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "https://www.myinstants.com/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "https://www.myinstants.com/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "The Alien Annihilation",
        "color": "rgb(24, 42, 7)",
        "mp3": "https://www.myinstants.com/media/sounds/the-alien-annihilation.mp3"
    },
    {
        "name": "Acknowledge ME!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/acknowledge-me_lTzf3jF.mp3"
    },
    {
        "name": "Пожарная тревога",
        "color": "rgb(184, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pozharnaia-trevoga.mp3"
    },
    {
        "name": "PDA sound stalker",
        "color": "rgb(112, 120, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/pda_4LbLWWH.mp3"
    },
    {
        "name": "Spongebob Bubble Transition",
        "color": "rgb(2, 91, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-bubble-transition.mp3"
    },
    {
        "name": "Long brain fart earrape",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/long-brain-fart-earrape.mp3"
    },
    {
        "name": "Дядя Саша...",
        "color": "rgb(213, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/diadia-sasha.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/gyatt.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "Сосать америка!",
        "color": "rgb(255, 95, 95)",
        "mp3": "https://www.myinstants.com/media/sounds/sosat-amerika.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mentality.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "Good Bad Ugly Whistle",
        "color": "rgb(255, 153, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/goodbadugly-whistle-long.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Rizz Me U",
        "color": "rgb(208, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rizz-me-u.mp3"
    },
    {
        "name": "Tarkov angry scav best insult",
        "color": "rgb(0, 255, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/angryscav.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "https://www.myinstants.com/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/slendy1.mp3"
    },
    {
        "name": "Screech Car Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/237375__squareal__car-crash.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Its A Me, Mario",
        "color": "rgb(204, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/its-me-mario.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "https://www.myinstants.com/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scary-girl.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "Sisyphus",
        "color": "rgb(99, 94, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sisyphus.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "Squid game green light",
        "color": "rgb(0, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/squid-game-green-light.mp3"
    },
    {
        "name": "Villager",
        "color": "rgb(0, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/yes1.mp3"
    },
    {
        "name": "Gangsta's Paradise Choir 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
    },
    {
        "name": "Movie Fart!",
        "color": "rgb(15, 59, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-sound-effect_C1IXpeL.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "https://www.myinstants.com/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "OHH SHIT",
        "color": "rgb(4, 255, 231)",
        "mp3": "https://www.myinstants.com/media/sounds/tourettes-guy-oh-shit.mp3"
    },
    {
        "name": "glitch sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/glitch-sound-effect_FugN82U.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "Улетаю на гаитии но это минус уши",
        "color": "rgb(76, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/uletaiu-na-gaitii-no-eto-minus-ushi.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "Chappelle Ah!",
        "color": "rgb(227, 255, 71)",
        "mp3": "https://www.myinstants.com/media/sounds/chappelle-ah.mp3"
    },
    {
        "name": "transicion- 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/transicion-1.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "chinese guy rap",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/video0-online-audio-converter_L0R7wUM.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/ka-ching.mp3"
    },
    {
        "name": "yoshi tongue",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yoshi-tongue.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "https://www.myinstants.com/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Rizz walk",
        "color": "rgb(91, 225, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rizz-walk.mp3"
    },
    {
        "name": "Gawr Gura - A",
        "color": "rgb(38, 129, 208)",
        "mp3": "https://www.myinstants.com/media/sounds/gawr-gura-a.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/nioce.mp3"
    },
    {
        "name": "Good Bad Ugly Whistle",
        "color": "rgb(255, 153, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/goodbadugly-whistle-long.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/gyatt.mp3"
    },
    {
        "name": "WRYYY",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dio-wryyy.mp3"
    },
    {
        "name": "Woody Woodpecker Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/woody-woodpecker-laugh.mp3"
    },
    {
        "name": "Wait a minute who are you",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wait-a-minute-who-are-you.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/11900601.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Who's That Pokemon!?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/whos-that-pokemon_.mp3"
    },
    {
        "name": "Tarkov angry scav best insult",
        "color": "rgb(0, 255, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/angryscav.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "Crowd cheering and clapping",
        "color": "rgb(234, 255, 95)",
        "mp3": "https://www.myinstants.com/media/sounds/99634_tomlija_small-crowd-cheering-and-clapping.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "Screech Car Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/237375__squareal__car-crash.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "The Alien Annihilation",
        "color": "rgb(24, 42, 7)",
        "mp3": "https://www.myinstants.com/media/sounds/the-alien-annihilation.mp3"
    },
    {
        "name": "packgod 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-2.mp3"
    },
    {
        "name": "one pound fish",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/one-pound-fish_4BV9ITW.mp3"
    },
    {
        "name": "Сосать америка!",
        "color": "rgb(255, 95, 95)",
        "mp3": "https://www.myinstants.com/media/sounds/sosat-amerika.mp3"
    },
    {
        "name": "STUPID DOG!",
        "color": "rgb(69, 65, 110)",
        "mp3": "https://www.myinstants.com/media/sounds/stupid-dog-you-make-me-look-bad.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "Дядя Саша...",
        "color": "rgb(213, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/diadia-sasha.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hog-rider.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "Rizz Me U",
        "color": "rgb(208, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rizz-me-u.mp3"
    },
    {
        "name": "nah she got you blushing twin sound",
        "color": "rgb(143, 26, 166)",
        "mp3": "https://www.myinstants.com/media/sounds/nah-she-got-you-blushing-twin-sound.mp3"
    },
    {
        "name": "Courage speak",
        "color": "rgb(213, 139, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/courage-speak.mp3"
    },
    {
        "name": "one pound fish",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/one-pound-fish_4BV9ITW.mp3"
    },
    {
        "name": "DrDisrespect Never playing this shit game again",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drdisrespect_neverplaythisshitgameagain_by_taihplays_on_twitch.mp3"
    },
    {
        "name": "Hitting that Spot",
        "color": "rgb(49, 34, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hitting-that-spot.mp3"
    },
    {
        "name": "Eevee cry!!",
        "color": "rgb(116, 162, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/eevee-starter.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "omni man hot milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/omni-man-hot-milk.mp3"
    },
    {
        "name": "Сияй Мага",
        "color": "rgb(49, 60, 167)",
        "mp3": "https://www.myinstants.com/media/sounds/siiai-maga.mp3"
    },
    {
        "name": "Which Bomboclat Dog I Am",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/which-bomboclat-dog-i-am_XPJXAai.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "Chicken Jockey Minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-minecraft.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/nioce.mp3"
    },
    {
        "name": "Valorant spike plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/valorant-spike-plant.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "Ahh BullShet",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ahh-bullshet.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gunreload.mp3"
    },
    {
        "name": "Crowd Laughter (short)",
        "color": "rgb(255, 0, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/laughter-short.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "family guy cutaway music",
        "color": "rgb(202, 157, 83)",
        "mp3": "https://www.myinstants.com/media/sounds/family-guy-cutaway-music.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/boing-sound.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "https://www.myinstants.com/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "Вы чё все геи чоли тут?",
        "color": "rgb(94, 250, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/vy-chio-vse-gei-choli-tut.mp3"
    },
    {
        "name": "ОХ ЗРЯ Я ТУДА ПОЛЕЗ",
        "color": "rgb(184, 255, 170)",
        "mp3": "https://www.myinstants.com/media/sounds/okh-zria-ia-tuda-polez.mp3"
    },
    {
        "name": "I Hate You Guys - Eric Cartman",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-hate-you-guys-eric-cartman.mp3"
    },
    {
        "name": "Jey Uso YEEET!",
        "color": "rgb(0, 173, 216)",
        "mp3": "https://www.myinstants.com/media/sounds/jey-uso-yeeet_sPfMAgr.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "https://www.myinstants.com/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Stadium Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/stadium-rave.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "Conquest",
        "color": "rgb(255, 247, 244)",
        "mp3": "https://www.myinstants.com/media/sounds/conquest.mp3"
    },
    {
        "name": "Sega Nega",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sega-nega.mp3"
    },
    {
        "name": "Vacuum Cleaner Sound Effect",
        "color": "rgb(147, 164, 134)",
        "mp3": "https://www.myinstants.com/media/sounds/vacuum-cleaner-sound-effect.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Mexican Hat Dance",
        "color": "rgb(102, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mexican_hat_dance.mp3"
    },
    {
        "name": "Tarkov angry scav best insult",
        "color": "rgb(0, 255, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/angryscav.mp3"
    },
    {
        "name": "Goofy ahhh",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-ahhh.mp3"
    },
    {
        "name": "ZEHAHAHA (Edward Teach laugh)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zehahaha_laugh.mp3"
    },
    {
        "name": "nokia tone sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/nokia-ringtone-1994.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "https://www.myinstants.com/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "glitch sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/glitch-sound-effect_FugN82U.mp3"
    },
    {
        "name": "Blink SquarePants",
        "color": "rgb(255, 247, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-blinking-sound-effect-mp3cut.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "https://www.myinstants.com/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Suuuuuuuuuuuuu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/suuuuuuuuuuuuu.mp3"
    },
    {
        "name": "time stop Jojo",
        "color": "rgb(249, 255, 73)",
        "mp3": "https://www.myinstants.com/media/sounds/dio-za-warudo-time-stop-sound-effect_gBOeeUk.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "https://www.myinstants.com/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "Scott Pilgrim Censored Word",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scott-pilgrim-censored-word_pwEwk9N.mp3"
    },
    {
        "name": "Ten Toes",
        "color": "rgb(107, 82, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ten-toes.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "brainrot ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/brainrot-ringtone.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE!",
        "color": "rgb(19, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/water-bucket-release_bZPb2v0.mp3"
    },
    {
        "name": "WHAT? (WWE)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what_LArhqp5.mp3"
    },
    {
        "name": "ghostbusters intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ghostbusters_eNjs1Aq.mp3"
    },
    {
        "name": "Lightsaber HUMMM",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lightsaber-hummm.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/t-t.mp3"
    },
    {
        "name": "yoshi tongue",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yoshi-tongue.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "https://www.myinstants.com/media/sounds/taco-bell.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/gyatt.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rahhh.mp3"
    },
    {
        "name": "Squid game green light",
        "color": "rgb(0, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/squid-game-green-light.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Movie Fart!",
        "color": "rgb(15, 59, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-sound-effect_C1IXpeL.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "https://www.myinstants.com/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Flashback",
        "color": "rgb(20, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/flashback-sound-effect_3McGd4q.mp3"
    },
    {
        "name": "What the Hell (@slv_soundss)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-the-hell_H0K7ORA.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "https://www.myinstants.com/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Rizz walk",
        "color": "rgb(91, 225, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rizz-walk.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/gyatt.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scary-girl.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "https://www.myinstants.com/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "Sisyphus",
        "color": "rgb(99, 94, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sisyphus.mp3"
    },
    {
        "name": "ObiWan Discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/obiwan-discord.mp3"
    },
    {
        "name": "TF2 bonk",
        "color": "rgb(250, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tf2-bonk.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "https://www.myinstants.com/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Gangsta's Paradise Choir 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gangstas-paradise-choir-sound-effect_16MrjlV.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "https://www.myinstants.com/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/disappear.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "GTA V Wasted (Death Sound)",
        "color": "rgb(219, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gta-v-wasted-death-sound.mp3"
    },
    {
        "name": "OHH SHIT",
        "color": "rgb(4, 255, 231)",
        "mp3": "https://www.myinstants.com/media/sounds/tourettes-guy-oh-shit.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Come over here and Kiss me on my hot mouth",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/come-over-here-and-kiss-me-on-my-hot-mouth.mp3"
    },
    {
        "name": "Galaxy Brain meme 2",
        "color": "rgb(43, 23, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/galaxy-brain-meme-2.mp3"
    },
    {
        "name": "Сияй Мага",
        "color": "rgb(49, 60, 167)",
        "mp3": "https://www.myinstants.com/media/sounds/siiai-maga.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "Rip and Tear - HD",
        "color": "rgb(49, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rip-and-tear-hd.mp3"
    },
    {
        "name": "Omni-man",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/omni-man.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "Этот звук выглядит незаконно",
        "color": "rgb(84, 29, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/etot-zvuk-vygliadit-nezakonno.mp3"
    },
    {
        "name": "Bobrini Cocococini",
        "color": "rgb(157, 93, 59)",
        "mp3": "https://www.myinstants.com/media/sounds/bobrini-cocococini.mp3"
    },
    {
        "name": "Pokemon Item Found",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pokemon-red_blue_yellow-item-found-sound-effect.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rahhh.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "Dark Souls - Pain",
        "color": "rgb(204, 0, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/voice-mx-damage-m-1.mp3"
    },
    {
        "name": "Eighteen Naked Cowboys",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ranch.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/disappear.mp3"
    },
    {
        "name": "Happy Wheels Victory",
        "color": "rgb(235, 255, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/victory_sJDDywi.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "https://www.myinstants.com/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "5 Big Booms",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/5-big-booms.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "kick the n b off the plane",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kick-the-n-b-off-the-plane.mp3"
    },
    {
        "name": "9+10",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/9-10-vine_2.mp3"
    },
    {
        "name": "Woosh (For Math Class)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/whoosh-sound-effect.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "https://www.myinstants.com/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "Cat laughing at you",
        "color": "rgb(119, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cat-laughing-at-you.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "The Moon Haunts You",
        "color": "rgb(100, 255, 247)",
        "mp3": "https://www.myinstants.com/media/sounds/the-moon-haunts-you.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "FINISH HIM! (MK11)",
        "color": "rgb(255, 207, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/finish-him-mk11.mp3"
    },
    {
        "name": "me mata de uma vez",
        "color": "rgb(0, 255, 45)",
        "mp3": "https://www.myinstants.com/media/sounds/me-mata-de-uma-vez.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "oiia (short)",
        "color": "rgb(255, 28, 156)",
        "mp3": "https://www.myinstants.com/media/sounds/oiia-short.mp3"
    },
    {
        "name": "TRALALERO FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-funk.mp3"
    },
    {
        "name": "TIMMY SOUTH PARK",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/timmy-south-park.mp3"
    },
    {
        "name": "Brainrot Goofy sound willol",
        "color": "rgb(131, 86, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/brainrot-goofy-sound-willol.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/among.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Shooting Stars",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled-1_qPskhfn.mp3"
    },
    {
        "name": "Vacuum Cleaner Sound Effect",
        "color": "rgb(147, 164, 134)",
        "mp3": "https://www.myinstants.com/media/sounds/vacuum-cleaner-sound-effect.mp3"
    },
    {
        "name": "brainrot ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/brainrot-ringtone.mp3"
    },
    {
        "name": "Brand New Saxophone",
        "color": "rgb(37, 235, 168)",
        "mp3": "https://www.myinstants.com/media/sounds/brand-new-saxophone.mp3"
    },
    {
        "name": "Money Talkss",
        "color": "rgb(255, 20, 251)",
        "mp3": "https://www.myinstants.com/media/sounds/money-talkss.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/voice_sans.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "holy moly emoji",
        "color": "rgb(255, 238, 128)",
        "mp3": "https://www.myinstants.com/media/sounds/holy-moly-emoji.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "Anime girl",
        "color": "rgb(255, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/anime-voice-swap1.mp3"
    },
    {
        "name": "Amogus Full",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/2021-04-07-213841761.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "https://www.myinstants.com/media/sounds/gary_meow.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/partyblower.mp3"
    },
    {
        "name": "atumalaca hahahahaha",
        "color": "rgb(255, 131, 186)",
        "mp3": "https://www.myinstants.com/media/sounds/risada-do-peludao-atumalaca.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "Ali-A intro Bass Boosted",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpcvu_bqfz.mp3"
    },
    {
        "name": "yeat bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yeat-bell.mp3"
    },
    {
        "name": "Mario Fall",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mario-falling.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "https://www.myinstants.com/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Price is Right ding",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the_price_is_right_ding.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/death-splat.mp3"
    },
    {
        "name": "Boing sound",
        "color": "rgb(77, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/boing-sound.mp3"
    },
    {
        "name": "packgod 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-2.mp3"
    },
    {
        "name": "DrDisrespect Never playing this shit game again",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drdisrespect_neverplaythisshitgameagain_by_taihplays_on_twitch.mp3"
    },
    {
        "name": "STUPID DOG!",
        "color": "rgb(69, 65, 110)",
        "mp3": "https://www.myinstants.com/media/sounds/stupid-dog-you-make-me-look-bad.mp3"
    },
    {
        "name": "I'M BACK IN THE BUILDING AGAIN",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/back-in-the-building.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "I Hate You Guys - Eric Cartman",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-hate-you-guys-eric-cartman.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "https://www.myinstants.com/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "https://www.myinstants.com/media/sounds/technologia.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "https://www.myinstants.com/media/sounds/technologia.mp3"
    },
    {
        "name": "Chicken Jockey (Crowded)",
        "color": "rgb(241, 207, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-crowded.mp3"
    },
    {
        "name": "dolphin censored",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dolphin-censored.mp3"
    },
    {
        "name": "MSN Nudge",
        "color": "rgb(255, 153, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/nudge.mp3"
    },
    {
        "name": "The fitnessgram pacer test is a multistage jevil",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/saying_a_lot_of_things_as_jevil_pt_2youtubetomp3-mp3cut_VALlwR5.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
    },
    {
        "name": "Tuturu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tuturu_1.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "Bass Distortion / Dab Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dab-distortion.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "Ahh BullShet",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ahh-bullshet.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "\"Hey\" Female Voice Sound Effect",
        "color": "rgb(20, 156, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hey-female-voice-sound-effect.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Bedtime",
        "color": "rgb(54, 54, 54)",
        "mp3": "https://www.myinstants.com/media/sounds/bedtime.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "whip crack used in johnny test",
        "color": "rgb(204, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/johnny-test-whip-crack_1.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "Undertale Savepoint",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/savepoint.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Nether portal",
        "color": "rgb(123, 30, 120)",
        "mp3": "https://www.myinstants.com/media/sounds/portail-du-nether.mp3"
    },
    {
        "name": "android notification  :)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/android-notification.mp3"
    },
    {
        "name": "Illuminati Confirmed Meme",
        "color": "rgb(128, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/x-files-theme-song-copy_dLYAyUk.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "https://www.myinstants.com/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "OH YEAH JACKPOT JACKPOT",
        "color": "rgb(255, 247, 253)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-yeah-jackpot-jackpot.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "https://www.myinstants.com/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "Ha !! GAYYY",
        "color": "rgb(0, 204, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ha-gay_1.mp3"
    },
    {
        "name": "SONIDO DROSS",
        "color": "rgb(178, 255, 162)",
        "mp3": "https://www.myinstants.com/media/sounds/sonido-perturbador.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "https://www.myinstants.com/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Jey Uso YEEET!",
        "color": "rgb(0, 173, 216)",
        "mp3": "https://www.myinstants.com/media/sounds/jey-uso-yeeet_sPfMAgr.mp3"
    },
    {
        "name": "Stadium Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/stadium-rave.mp3"
    },
    {
        "name": "Which Bomboclat Dog I Am",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/which-bomboclat-dog-i-am_XPJXAai.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "Señora su hijo esta viendo porn#",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/senora-su-hijo-esta-viendo-porn.mp3"
    },
    {
        "name": "niggardry",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/niggardry.mp3"
    },
    {
        "name": "Chicken Jocky",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jocky.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "https://www.myinstants.com/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "WATER BUCKET, RELEASE!",
        "color": "rgb(19, 204, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/water-bucket-release_bZPb2v0.mp3"
    },
    {
        "name": "Chicken jockey (perfect)",
        "color": "rgb(255, 33, 88)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-perfect.mp3"
    },
    {
        "name": "Chicken Jockey Minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jockey-minecraft.mp3"
    },
    {
        "name": "HE LYING",
        "color": "rgb(255, 53, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/he-lying.mp3"
    },
    {
        "name": "Trap Royalty",
        "color": "rgb(73, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/trap-royalty.mp3"
    },
    {
        "name": "Хит Макана",
        "color": "rgb(93, 247, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/khit-makana.mp3"
    },
    {
        "name": "Eye of the Tiger-Peter Griffin",
        "color": "rgb(204, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/peter-griffin-singing-eye-of-the-tiger.mp3"
    },
    {
        "name": "son of a b*tch12345",
        "color": "rgb(255, 250, 88)",
        "mp3": "https://www.myinstants.com/media/sounds/son.mp3"
    },
    {
        "name": "The Tragedy of Darth Plagueis the Wise",
        "color": "rgb(212, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/darth-plagueis-low.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Tuturu",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tuturu_1.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Open the noor!",
        "color": "rgb(109, 255, 37)",
        "mp3": "https://www.myinstants.com/media/sounds/open-the-noor.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "https://www.myinstants.com/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    },
    {
        "name": "OH NO (Jojo)",
        "color": "rgb(0, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-no_7.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "Beedle - Thank you!",
        "color": "rgb(51, 102, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/ww_beedle_thankyou.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "https://www.myinstants.com/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Luigi Speaking Gibberish",
        "color": "rgb(82, 255, 48)",
        "mp3": "https://www.myinstants.com/media/sounds/luigi-speaking-gibberish.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "Нет иди нахуй",
        "color": "rgb(120, 155, 25)",
        "mp3": "https://www.myinstants.com/media/sounds/net-idi-nakhui.mp3"
    },
    {
        "name": "2 hours laterrrrrrrrrr",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/2-hours-laterrrrrrrrrr.mp3"
    },
    {
        "name": "Omni man fat butt",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/omni-man-fat-butt.mp3"
    },
    {
        "name": "laughing cat (bass boosted)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laughing-cat-bass-boosted.mp3"
    },
    {
        "name": "TRALALERO FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-funk.mp3"
    },
    {
        "name": "wow - owen wilson",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wao.mp3"
    },
    {
        "name": "Galaxy/Samsung Battery Low",
        "color": "rgb(0, 144, 77)",
        "mp3": "https://www.myinstants.com/media/sounds/galaxy_low_battery.mp3"
    },
    {
        "name": "Soft tacos!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tacos.mp3"
    },
    {
        "name": "hunterxhunter",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mpegrendition1.mp3"
    },
    {
        "name": "Daisy09 scary",
        "color": "rgb(255, 151, 222)",
        "mp3": "https://www.myinstants.com/media/sounds/daisy09-scary_JFMdMiL.mp3"
    },
    {
        "name": "OH NO (Jojo)",
        "color": "rgb(0, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-no_7.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "clash royale laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/clash-royale-laugh.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/celebration.mp3"
    },
    {
        "name": "That's what she said",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/thats-what-she-said.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "https://www.myinstants.com/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/booing.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Trump- Don't Be Rude",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/trump-dont-be-rude.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "hey_its_me_goku",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hey-its-me-goku.mp3"
    },
    {
        "name": "Who's That Pokemon!?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/whos-that-pokemon_.mp3"
    },
    {
        "name": "Spongebob My Leg",
        "color": "rgb(253, 255, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/my-leg_gtcfNMu.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-3.mp3"
    },
    {
        "name": "Cotton eye joe (nuggets)",
        "color": "rgb(255, 116, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/cotton-eye-joe-nuggets.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "Goofy Ahh Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-ahh-laugh.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "Android Alarm",
        "color": "rgb(67, 255, 42)",
        "mp3": "https://www.myinstants.com/media/sounds/yt1s_Ro643q7.mp3"
    },
    {
        "name": "Half-Life GMod Death Sound High Quality",
        "color": "rgb(255, 152, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/half-life-gmod-death-sound-high-quality.mp3"
    },
    {
        "name": "Sword Cut",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/espada-som.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "https://www.myinstants.com/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "fart on my roommate's door",
        "color": "rgb(255, 107, 48)",
        "mp3": "https://www.myinstants.com/media/sounds/fart-on-my-roommates-door.mp3"
    },
    {
        "name": "FNaF BooP",
        "color": "rgb(183, 98, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/partyfavorraspypart_ac01_3_5HTQ8CW.mp3"
    },
    {
        "name": "fire alarm chirp",
        "color": "rgb(164, 147, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/fire-alarm-chirp.mp3"
    },
    {
        "name": "lula tira",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lula-tira.mp3"
    },
    {
        "name": "I don't want peace. I want problems, always.",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-dont-want-peace.mp3"
    },
    {
        "name": "Groan Tube 1",
        "color": "rgb(0, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/groan-tube-1_kdDdtlv.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Messenger Ringtone",
        "color": "rgb(100, 165, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/facebook-messenger-ringtone.mp3"
    },
    {
        "name": "Wrong (Price is Right)",
        "color": "rgb(140, 252, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/wrong-price-is-right.mp3"
    },
    {
        "name": "Пук в эхо",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/puk-v-ekho.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Бляяять",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bliaiaiat.mp3"
    },
    {
        "name": "fnaf phone ringing sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-phone-ringing-sound.mp3"
    },
    {
        "name": "UNDERTALE DISSAPER",
        "color": "rgb(39, 6, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/undertale-sound-effect-battle-encounter.mp3"
    },
    {
        "name": "Horse Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/horse-sound.mp3"
    },
    {
        "name": "Ganda Mo Intro",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ganda_mo_intro-mp3cut.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "https://www.myinstants.com/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "You should have died at birth",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-should-have-died-at-birth_f90I620.mp3"
    },
    {
        "name": "Нет иди нахуй",
        "color": "rgb(120, 155, 25)",
        "mp3": "https://www.myinstants.com/media/sounds/net-idi-nakhui.mp3"
    },
    {
        "name": "нолик бомбит",
        "color": "rgb(0, 162, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nolik-bombit.mp3"
    },
    {
        "name": "Что за пидор на моем рабочем месте?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chto-za-pidor-na-moem-rabochem-meste.mp3"
    },
    {
        "name": "LEBRONNNNN",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lebronnnnn.mp3"
    },
    {
        "name": "Fears to Fathom Notification Sound",
        "color": "rgb(10, 59, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/fears-to-fathom-notification-sound.mp3"
    },
    {
        "name": "n word apex *LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/n-word-apex-loud.mp3"
    },
    {
        "name": "Flint and Steel! (Jack Black)",
        "color": "rgb(216, 63, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/flint-and-steel-jack-black.mp3"
    },
    {
        "name": "Жеские стоны",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zheskie-stony.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mariostart.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/eero.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/villager.mp3"
    },
    {
        "name": "piano riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/piano-riff.mp3"
    },
    {
        "name": "Minecraft Bow",
        "color": "rgb(251, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bow_shoot.mp3"
    },
    {
        "name": "Freddy fazbear rizz",
        "color": "rgb(54, 39, 186)",
        "mp3": "https://www.myinstants.com/media/sounds/freddy-fazbear-rizz.mp3"
    },
    {
        "name": "Sike short",
        "color": "rgb(77, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sike-1.mp3"
    },
    {
        "name": "gogogogogo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gogogogogo.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "jiafei scream",
        "color": "rgb(242, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/jiafei-scream.mp3"
    },
    {
        "name": "Cartoon sliping and crash",
        "color": "rgb(2, 255, 228)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon-sliping-and-crash.mp3"
    },
    {
        "name": "roblox laugh",
        "color": "rgb(255, 208, 20)",
        "mp3": "https://www.myinstants.com/media/sounds/roblox-laugh.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "Come over here and Kiss me on my hot mouth",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/come-over-here-and-kiss-me-on-my-hot-mouth.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "You stupid NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-stupid-nig_gSacTCg.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/slysh-1.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "CALA A BOCA PUTA!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cala-a-boca-puta_HhGAK6D.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "https://www.myinstants.com/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "Klasky Csupo Robot Logo",
        "color": "rgb(156, 94, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/klasky-csupo-robot-logo_H0pWZtw.mp3"
    },
    {
        "name": "AI MEU C#ZINHO ≧w≦ - Penélope Di Monaco",
        "color": "rgb(255, 51, 228)",
        "mp3": "https://www.myinstants.com/media/sounds/ai-meu-c-zinho-w-penelope-di-monaco.mp3"
    },
    {
        "name": "Oniii loud",
        "color": "rgb(255, 92, 239)",
        "mp3": "https://www.myinstants.com/media/sounds/oniii-loud.mp3"
    },
    {
        "name": "тыщ тыгыдыгыдыщ тыщ",
        "color": "rgb(34, 255, 74)",
        "mp3": "https://www.myinstants.com/media/sounds/tyshch-tygydygydyshch-tyshch.mp3"
    },
    {
        "name": "Chicken banana",
        "color": "rgb(255, 254, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-banana.mp3"
    },
    {
        "name": "laughing cat (bass boosted)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/laughing-cat-bass-boosted.mp3"
    },
    {
        "name": "You Have Reached Your Limit On Talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/you-have-reached-your-limit-on-talking.mp3"
    },
    {
        "name": "TRALALERO FUNK",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalero-funk.mp3"
    },
    {
        "name": "Tralalelo Tralala Phonk",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalelo-tralala-phonk.mp3"
    },
    {
        "name": "A big bag with one cookie",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/a-big-bag-with-one-cookie.mp3"
    },
    {
        "name": "А соси соси мне за пять баксов",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/a-sosi-sosi-mne-za-piat-baksov.mp3"
    },
    {
        "name": "Police Radio Call",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/police-radio-sound-effect.mp3"
    },
    {
        "name": "yahoo yodel",
        "color": "rgb(102, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/yahooyodel_9ofuyz7n.mp3"
    },
    {
        "name": "Tyler the creator",
        "color": "rgb(166, 13, 95)",
        "mp3": "https://www.myinstants.com/media/sounds/tyler-the-creator.mp3"
    },
    {
        "name": "WWE Brock Lesner by VJ",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wwe-brock-lesner-by-vj.mp3"
    },
    {
        "name": "Sentry Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sentry-enemy-spotted_hlVCHEE.mp3"
    },
    {
        "name": "A big bag with one cookie",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/a-big-bag-with-one-cookie.mp3"
    },
    {
        "name": "Wthelly",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wthelly.mp3"
    },
    {
        "name": "Tu pene no pierde sabor a caramelo",
        "color": "rgb(255, 214, 192)",
        "mp3": "https://www.myinstants.com/media/sounds/tu-pene-no-pierde-sabor-a-caramelo.mp3"
    },
    {
        "name": "Bruce Buffer..WE ARE LIVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/we-are-live.mp3"
    },
    {
        "name": "sova no where to run",
        "color": "rgb(20, 161, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sova-no-where-to-run.mp3"
    },
    {
        "name": "Sentry Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sentry-enemy-spotted_hlVCHEE.mp3"
    },
    {
        "name": "Bomman chửi cuộc đời",
        "color": "rgb(20, 243, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/it-me-cuoc-oi-bomman.mp3"
    },
    {
        "name": "m i a u",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/m-i-a-u.mp3"
    },
    {
        "name": "اضررب",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drrb.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "Emotional_Damage",
        "color": "rgb(255, 8, 38)",
        "mp3": "https://www.myinstants.com/media/sounds/emotional-damage_svaNMfN.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "https://www.myinstants.com/media/sounds/plug.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "clash royale laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/clash-royale-laugh.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "Punch1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "https://www.myinstants.com/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "https://www.myinstants.com/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/imperial_march.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "Buddy Holly Weezer Guitar Lick",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
    },
    {
        "name": "HOLD UP WAIT A MINUTE SOMETHIN",
        "color": "rgb(37, 255, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled_OTuNHvt.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Xue Hua piao piao bei feng Xiao xiao",
        "color": "rgb(255, 44, 44)",
        "mp3": "https://www.myinstants.com/media/sounds/xue-hua-piao-piao.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/record-scratch.mp3"
    },
    {
        "name": "Hell's Kitchen",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hells-kitchen-sfx.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Timmy!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/timmy.mp3"
    },
    {
        "name": "BOMBASTIC SIDE EYE",
        "color": "rgb(156, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bombastic-side-eye.mp3"
    },
    {
        "name": "hamburger",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hamburger-sound-effect.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "https://www.myinstants.com/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "jotaro kujo ora ora ora jojo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jojos-bizarre-adventure-asb-ora-ora-ora.mp3"
    },
    {
        "name": "Punch1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch.mp3"
    },
    {
        "name": "T-Rex Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/t-rex-roar.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "https://www.myinstants.com/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "HOLD UP WAIT A MINUTE SOMETHIN",
        "color": "rgb(37, 255, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled_OTuNHvt.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Sharingan",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/collen-eyes-efect.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "https://www.myinstants.com/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "Hard Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fooz.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Gayyyy",
        "color": "rgb(255, 102, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/gayyy.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Jeopardy Daily Double",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jeopardy-daily-double-sound-effect-from-youtube_76mCCAq.mp3"
    },
    {
        "name": "BERSERK CLANG",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/clangberserk.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "https://www.myinstants.com/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mariostart.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "Fortnite gun shot sound",
        "color": "rgb(8, 133, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/fortnite-gun-shot-sound.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "Squid game S2",
        "color": "rgb(69, 55, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/squid-game-s2.mp3"
    },
    {
        "name": "lion scan",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/lion-scan-new.mp3"
    },
    {
        "name": "Friday the 13th: Chchch-Ahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/friday_the_13th_sound_effect_test_chchch_ahahah_ki_ki_ki_ma_ma_malistenvid.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "sword",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "Undertale - Soul Shatter",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/undertale-soul-shatter.mp3"
    },
    {
        "name": "Pirates of the Caribbean Flute",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/eeeeeee1.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "https://www.myinstants.com/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "load gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gun-load_abJphmJ.mp3"
    },
    {
        "name": "smack OH SHIT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/smack-oh-shit.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "Sqeeling Pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sqeeling-pig.mp3"
    },
    {
        "name": "Ice Ice Baby",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ice-ice-baby.mp3"
    },
    {
        "name": "everybody was kungfu fighting",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/everybody-was-kungfu-fighting.mp3"
    },
    {
        "name": "I don't want peace. I want problems, always.",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-dont-want-peace.mp3"
    },
    {
        "name": "vineboom (long)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vineboom-long.mp3"
    },
    {
        "name": "Scary Quiet Piano Song",
        "color": "rgb(255, 149, 37)",
        "mp3": "https://www.myinstants.com/media/sounds/scary-quiet-piano-song.mp3"
    },
    {
        "name": "WOP WOP WOP KENDRICK",
        "color": "rgb(103, 101, 56)",
        "mp3": "https://www.myinstants.com/media/sounds/wop-wop-wop-kendrick.mp3"
    },
    {
        "name": "UNDERTALE DISSAPER",
        "color": "rgb(39, 6, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/undertale-sound-effect-battle-encounter.mp3"
    },
    {
        "name": "R6 Door Break",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/r6-door-break.mp3"
    },
    {
        "name": "R6 Nitro Cell",
        "color": "rgb(27, 255, 210)",
        "mp3": "https://www.myinstants.com/media/sounds/r6-nitro-cell-sound-effect_lspM4ve.mp3"
    },
    {
        "name": "Sonic.exe 2011X laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-exe-2011x-laugh.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "One Piece OST Overtaken",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/one-piece-ost-overtaken.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "don pollo blahblahblah",
        "color": "rgb(86, 227, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/don-pollo-blahblahblah.mp3"
    },
    {
        "name": "ПЛАНКТОН ААААА",
        "color": "rgb(35, 85, 78)",
        "mp3": "https://www.myinstants.com/media/sounds/plankton-aaaaa.mp3"
    },
    {
        "name": "40 лет как под наркозом",
        "color": "rgb(106, 63, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/40-let-kak-pod-narkozom.mp3"
    },
    {
        "name": "TOMA MILK SHAKE DE MORANGO",
        "color": "rgb(252, 53, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/toma-milk-shake-de-morango_bQhZ8mn.mp3"
    },
    {
        "name": "Я родился!",
        "color": "rgb(177, 43, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ia-rodilsia_hGybxEB.mp3"
    },
    {
        "name": "Сирена стоны",
        "color": "rgb(123, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sirena-stony.mp3"
    },
    {
        "name": "Repo Sound",
        "color": "rgb(53, 115, 151)",
        "mp3": "https://www.myinstants.com/media/sounds/repo-sound.mp3"
    },
    {
        "name": "A big bag with one cookie",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/a-big-bag-with-one-cookie.mp3"
    },
    {
        "name": "They Love crushing LOAF (a minecraft movie",
        "color": "rgb(255, 190, 47)",
        "mp3": "https://www.myinstants.com/media/sounds/they-love-crushing-loaf-a-minecraft-movie.mp3"
    },
    {
        "name": "They Love crushing LOAF (a minecraft movie",
        "color": "rgb(255, 190, 47)",
        "mp3": "https://www.myinstants.com/media/sounds/they-love-crushing-loaf-a-minecraft-movie.mp3"
    },
    {
        "name": "HABLEN CARAJO - Dross",
        "color": "rgb(179, 189, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hablen-carajo-dross.mp3"
    },
    {
        "name": "DOWNLOAD 3 TERRABYTES",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/download-3-terrabytes.mp3"
    },
    {
        "name": "Tropic Thunder - Survive!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tropic-thunder-lincoln-osiris-survive.mp3"
    },
    {
        "name": "DBFighterz: Vegito YOSHAAA",
        "color": "rgb(29, 81, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/dbfighterz-vegito-yoshaaa.mp3"
    },
    {
        "name": "TRALALALALALALA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalalalalala.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    },
    {
        "name": "Punch1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch.mp3"
    },
    {
        "name": "John Cena ARE YOU SURE",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/are-you-sure-about-that.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "https://www.myinstants.com/media/sounds/prowler.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Look at this dude HQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bruh_look_at_this_dude1.mp3"
    },
    {
        "name": "Windows 3.1 startup (tada)",
        "color": "rgb(51, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/win31.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "YEE-HAW!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yee-haw.mp3"
    },
    {
        "name": "TF2 bonk",
        "color": "rgb(250, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/tf2-bonk.mp3"
    },
    {
        "name": "MUDA MUDA MUDA MUDA MUDA MUDA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/muda_muda_muda_sound_effect.mp3"
    },
    {
        "name": "sword",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "News Intro Breaking News",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/news_intro-maximilien_-1801238420_2.mp3"
    },
    {
        "name": "AKH",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/akh.mp3"
    },
    {
        "name": "Ender teleport",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vwoop.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "https://www.myinstants.com/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "Real Foghorn",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/real-foghorn.mp3"
    },
    {
        "name": "I AM ATOMIC!!!",
        "color": "rgb(44, 0, 110)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-atomic_a1qHWQ9.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "Hello hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hello_MGojBKO.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "Cat laughing at you",
        "color": "rgb(119, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cat-laughing-at-you.mp3"
    },
    {
        "name": "Sukuna laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sukuna-laugh.mp3"
    },
    {
        "name": "HE-HELL NAH dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/he-hell-nah-dog.mp3"
    },
    {
        "name": "fetty wap 1738",
        "color": "rgb(52, 75, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/fetty-wap-trap-queen-bass-boosted-audiotrimmer.mp3"
    },
    {
        "name": "One Piece OST Overtaken",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/one-piece-ost-overtaken.mp3"
    },
    {
        "name": "Стояковский",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/stoiakovskii.mp3"
    },
    {
        "name": "guy says \"bitch\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/guy-says-bitch.mp3"
    },
    {
        "name": "Chicken Jocky",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chicken-jocky.mp3"
    },
    {
        "name": "иди нахуй иди на хуй",
        "color": "rgb(179, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/idi-nakhui-idi-na-khui.mp3"
    },
    {
        "name": "Flint And Steel (LOUD)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/flint-and-steel-loud.mp3"
    },
    {
        "name": "linganguli heavenly version",
        "color": "rgb(255, 234, 79)",
        "mp3": "https://www.myinstants.com/media/sounds/linganguli-heavenly-version.mp3"
    },
    {
        "name": "Kanye \"George Bush Doesn't Care Abt Black Ppl\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kanye-george-bush-doesnt-care-abt-black-ppl.mp3"
    },
    {
        "name": "Mario 64 OOF",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/oof_0ehbI36.mp3"
    },
    {
        "name": "Item fanfare",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the_legend_of_zelda_-_the_wind_waker_-_36_-_get_item.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "https://www.myinstants.com/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Hello darkness my old friend",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hellodarknessmyoldfriend.mp3"
    },
    {
        "name": "Ara Ara",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ara-ara.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/switch-sound.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "https://www.myinstants.com/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/klonk.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "WRYYY",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dio-wryyy.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "yay_kids",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/kids-saying-yay-sound-effect_2.mp3"
    },
    {
        "name": "Amogus Full",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/2021-04-07-213841761.mp3"
    },
    {
        "name": "Sonic drown",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-1-music-drownings.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/cena.mp3"
    },
    {
        "name": "Macaroni with the chicken strips",
        "color": "rgb(255, 204, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kirby-enjoys-macaroni-with-the-chicken-strips.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dune-scream.mp3"
    },
    {
        "name": "RONALDO SIUUUU",
        "color": "rgb(46, 138, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ronaldo-siuuuu.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "quandale dingle bingleton",
        "color": "rgb(247, 255, 42)",
        "mp3": "https://www.myinstants.com/media/sounds/quandale-dingle-bingleton.mp3"
    },
    {
        "name": "flightreacts damn daniel",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/flightreacts-damn-daniel.mp3"
    },
    {
        "name": "Freddy fazbear rizz",
        "color": "rgb(54, 39, 186)",
        "mp3": "https://www.myinstants.com/media/sounds/freddy-fazbear-rizz.mp3"
    },
    {
        "name": "Kira Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kira_s-laugh-death-note-ringtone-by-death-note_light-kira.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "see you",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sound-effects-eerie-ghost-voice_kemCjJn.mp3"
    },
    {
        "name": "Real Foghorn",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/real-foghorn.mp3"
    },
    {
        "name": "cartoon-stream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon_sound_effect.mp3"
    },
    {
        "name": "ksi lol",
        "color": "rgb(0, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/ksi-lol.mp3"
    },
    {
        "name": "I AM ATOMIC!!!",
        "color": "rgb(44, 0, 110)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-atomic_a1qHWQ9.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wrong_5.mp3"
    },
    {
        "name": "walking",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/walking_6QdYC8X.mp3"
    },
    {
        "name": "gogogogogo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gogogogogo.mp3"
    },
    {
        "name": "Yodel Goofy",
        "color": "rgb(255, 140, 8)",
        "mp3": "https://www.myinstants.com/media/sounds/eene-yodel-goofy.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "Cartoon sliping and crash",
        "color": "rgb(2, 255, 228)",
        "mp3": "https://www.myinstants.com/media/sounds/cartoon-sliping-and-crash.mp3"
    },
    {
        "name": "Hello hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hello_MGojBKO.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "meanwhile 1.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/meanwhile_kJdq4c6.mp3"
    },
    {
        "name": "R6 Door Break",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/r6-door-break.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/soundpad.mp3"
    },
    {
        "name": "Bite me >:(",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bite-me_onSBivS.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "2 hours laterrrrrrrrrr",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/2-hours-laterrrrrrrrrr.mp3"
    },
    {
        "name": "CALA A BOCA PUTA!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/cala-a-boca-puta_HhGAK6D.mp3"
    },
    {
        "name": "Sua mãe sabe que você gosta de rapazes",
        "color": "rgb(97, 255, 26)",
        "mp3": "https://www.myinstants.com/media/sounds/sua-mae-sabe-que-voce-gosta-de-rapazes.mp3"
    },
    {
        "name": "As a Child I Yearned For The Mines",
        "color": "rgb(0, 174, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/as-a-child-i-yearned-for-the-mines.mp3"
    },
    {
        "name": "Sigma boy arab",
        "color": "rgb(124, 159, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sigma-boy-arab.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "Sentry Enemy Spotted",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sentry-enemy-spotted_hlVCHEE.mp3"
    },
    {
        "name": "Bomman chửi cuộc đời",
        "color": "rgb(20, 243, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/it-me-cuoc-oi-bomman.mp3"
    },
    {
        "name": "m i a u",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/m-i-a-u.mp3"
    },
    {
        "name": "اضررب",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drrb.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "I WOKE UP IN A NEW BUGATTI",
        "color": "rgb(74, 255, 228)",
        "mp3": "https://www.myinstants.com/media/sounds/i-woke-up-in-a-new-bugatti.mp3"
    },
    {
        "name": "Nico Nico nii~",
        "color": "rgb(255, 0, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/niconiconilovesyou-3_cutted.mp3"
    },
    {
        "name": "Falcon Punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/falconpunch.swf.mp3"
    },
    {
        "name": "Discord Jebaiting",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mikejebait.mp3"
    },
    {
        "name": "Onii-chan, onii-chan",
        "color": "rgb(255, 153, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/screenrecord_2015-06-17-19-00-59.mp3"
    },
    {
        "name": "WE ARE THE CHAMPIONS",
        "color": "rgb(51, 0, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/we-are-the-champions-copia.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Tyler1 Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ayhelp.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "FUNK FLEX BOMB",
        "color": "rgb(102, 153, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/funkmaster-flex-bomb-sound-effect-from-youtube-by-offliberty.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "https://www.myinstants.com/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/imperial_march.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/panic-button.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/00002a5b.mp3"
    },
    {
        "name": "Get Griddy | Fortnite Emote",
        "color": "rgb(0, 255, 242)",
        "mp3": "https://www.myinstants.com/media/sounds/9convert_f28qQKC.mp3"
    },
    {
        "name": "Valorant Defuse",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/valorant-defuse.mp3"
    },
    {
        "name": "Look at this dude HQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bruh_look_at_this_dude1.mp3"
    },
    {
        "name": "lol mising ping",
        "color": "rgb(255, 30, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/ping_missing.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "lego build",
        "color": "rgb(255, 116, 38)",
        "mp3": "https://www.myinstants.com/media/sounds/lego-build.mp3"
    },
    {
        "name": "UH OH STINKY",
        "color": "rgb(158, 83, 28)",
        "mp3": "https://www.myinstants.com/media/sounds/cut_cut_y2mate.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "https://www.myinstants.com/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "disgusting meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/disgusting_WJOvrJj.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "MEEP MERP",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/magic_immune.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "BF FNF beep",
        "color": "rgb(90, 249, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/bi-online-audio-converter.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "That's what she said",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/thats-what-she-said.mp3"
    },
    {
        "name": "John Cena ARE YOU SURE",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/are-you-sure-about-that.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "https://www.myinstants.com/media/sounds/prowler.mp3"
    },
    {
        "name": "Trump- Don't Be Rude",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/trump-dont-be-rude.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/panic-button.mp3"
    },
    {
        "name": "Spongebob - I NEED IT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tv-quotables-i-need-it-spongebob-squarepants.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "https://www.myinstants.com/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/cena.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "lego build",
        "color": "rgb(255, 116, 38)",
        "mp3": "https://www.myinstants.com/media/sounds/lego-build.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "what the hell is even that",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/whatthehell_qrePvEr.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/echo4b.mp3"
    },
    {
        "name": "Windows 3.1 startup (tada)",
        "color": "rgb(51, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/win31.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "Women haha",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/women-haha.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Good morning vietnam!",
        "color": "rgb(0, 51, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/goodmorn1.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "https://www.myinstants.com/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "gangsta paradise scream",
        "color": "rgb(255, 73, 227)",
        "mp3": "https://www.myinstants.com/media/sounds/gangstas-paradise-scream-sound-effect-1.mp3"
    },
    {
        "name": "Soviet Anthem (BASS BOOSTED)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/soviet108.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-3.mp3"
    },
    {
        "name": "Real punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-notification_sound-493565.mp3"
    },
    {
        "name": "MUDA MUDA MUDA MUDA MUDA MUDA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/muda_muda_muda_sound_effect.mp3"
    },
    {
        "name": "Holy Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/2019-03-30_18-13-20.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/falling.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Goofy Ahh Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-ahh-laugh.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "News Intro Breaking News",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/news_intro-maximilien_-1801238420_2.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "https://www.myinstants.com/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Nintendo Switch Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/switch-sound.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/img_6228.mp3"
    },
    {
        "name": "talking bennnn noo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/talking-bennnn-noo.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "https://www.myinstants.com/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Saul Goodman Better Call Saul",
        "color": "rgb(27, 118, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/saul-goodman-better-call-saul.mp3"
    },
    {
        "name": "Correct bell",
        "color": "rgb(255, 204, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/correct.swf.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "FUNK FLEX BOMB",
        "color": "rgb(102, 153, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/funkmaster-flex-bomb-sound-effect-from-youtube-by-offliberty.mp3"
    },
    {
        "name": "Star Wars Blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/blaster.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "https://www.myinstants.com/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/panic-button.mp3"
    },
    {
        "name": "Gary Meow",
        "color": "rgb(8, 214, 163)",
        "mp3": "https://www.myinstants.com/media/sounds/gary_meow.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "https://www.myinstants.com/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Punch! Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-sound-effect.mp3"
    },
    {
        "name": "All around me are familiar faces",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/original-all-around-me-are-familiar-faces-black-kid-singing-vine-mad-world-gary-jules.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "Discord leaving and joining rapidly",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord_join_and_leave_sound_rapidly.mp3"
    },
    {
        "name": "Family Feud NO Buzzer",
        "color": "rgb(0, 163, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/neg-portal2buzzer_2DIuFda.mp3"
    },
    {
        "name": "i was the knight in shining armor in your movie",
        "color": "rgb(255, 235, 10)",
        "mp3": "https://www.myinstants.com/media/sounds/i-was-the-knight-in-shining-armor-in-your-movie.mp3"
    },
    {
        "name": "Homer Simpson Scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmp90lreogl.mp3"
    },
    {
        "name": "Freebird",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/freebird.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "Falling",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/falling.mp3"
    },
    {
        "name": "simp over girls on discord",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/simp-over-girls-on-discord.mp3"
    },
    {
        "name": "Pokemon Item received",
        "color": "rgb(0, 255, 157)",
        "mp3": "https://www.myinstants.com/media/sounds/129-received-an-item.mp3"
    },
    {
        "name": "Squid game green light",
        "color": "rgb(0, 255, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/squid-game-green-light.mp3"
    },
    {
        "name": "Kid Screaming",
        "color": "rgb(0, 255, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/kid-screaming-sound-effect.mp3"
    },
    {
        "name": "Anime Magic Sound Effect",
        "color": "rgb(255, 83, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/anime-magic-sound-effect.mp3"
    },
    {
        "name": "Ab tu Gaya beta ab dekh tu (puneet",
        "color": "rgb(255, 69, 151)",
        "mp3": "https://www.myinstants.com/media/sounds/ab-tu-gaya-beta-ab-dekh-tu-puneet.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "ПЛАНКТОН ААААА",
        "color": "rgb(35, 85, 78)",
        "mp3": "https://www.myinstants.com/media/sounds/plankton-aaaaa.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "TOMA MILK SHAKE DE MORANGO",
        "color": "rgb(252, 53, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/toma-milk-shake-de-morango_bQhZ8mn.mp3"
    },
    {
        "name": "You must BOUNCE ON IT",
        "color": "rgb(28, 34, 92)",
        "mp3": "https://www.myinstants.com/media/sounds/you-must-bounce-on-it.mp3"
    },
    {
        "name": "hell nah sound effect download",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hell-nah-sound-effect-download.mp3"
    },
    {
        "name": "Этот звук выглядит незаконно",
        "color": "rgb(84, 29, 29)",
        "mp3": "https://www.myinstants.com/media/sounds/etot-zvuk-vygliadit-nezakonno.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kasongo.mp3"
    },
    {
        "name": "oiia blue",
        "color": "rgb(255, 33, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/oiia-blue.mp3"
    },
    {
        "name": "italian animals",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/italian-animals.mp3"
    },
    {
        "name": "Royal guard",
        "color": "rgb(194, 255, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/royal-guard.mp3"
    },
    {
        "name": "Nooooo ooo oo la policiaaaa",
        "color": "rgb(20, 28, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nooooo-ooo-oo-la-policiaaaa.mp3"
    },
    {
        "name": "tonight’s the night",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tonights-the-night.mp3"
    },
    {
        "name": "Gegagedigedagedago EARRAPE",
        "color": "rgb(112, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/gegagedigedagedago-earrape.mp3"
    },
    {
        "name": "Tusk CHIMIMI!",
        "color": "rgb(255, 128, 198)",
        "mp3": "https://www.myinstants.com/media/sounds/tusk-chimimi.mp3"
    },
    {
        "name": "why are you running?!?!?!?!?",
        "color": "rgb(27, 27, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/why-are_yIJ3kw3.mp3"
    },
    {
        "name": "Anatoxic - Garamararamararaman",
        "color": "rgb(249, 255, 84)",
        "mp3": "https://www.myinstants.com/media/sounds/anatoxic-garamararamararaman.mp3"
    },
    {
        "name": "HABLEN CARAJO - Dross",
        "color": "rgb(179, 189, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hablen-carajo-dross.mp3"
    },
    {
        "name": "Omnitrix (Transform)",
        "color": "rgb(20, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/omnitrix-transform.mp3"
    },
    {
        "name": "Oof, Marone! (Paulie Walnuts)",
        "color": "rgb(0, 255, 21)",
        "mp3": "https://www.myinstants.com/media/sounds/oof-marone-paulie-walnuts.mp3"
    },
    {
        "name": "DOWNLOAD 3 TERRABYTES",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/download-3-terrabytes.mp3"
    },
    {
        "name": "Tropic Thunder - Survive!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tropic-thunder-lincoln-osiris-survive.mp3"
    },
    {
        "name": "DBFighterz: Vegito YOSHAAA",
        "color": "rgb(29, 81, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/dbfighterz-vegito-yoshaaa.mp3"
    },
    {
        "name": "TRALALALALALALA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tralalalalalala.mp3"
    },
    {
        "name": "21 savage saying 21 xxl 2016",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/21-savage-saying-21-xxl-2016.mp3"
    },
    {
        "name": "Door stuck!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/door-stuck_dZXKXr7.mp3"
    },
    {
        "name": "Twitch-youtube alert",
        "color": "rgb(255, 36, 245)",
        "mp3": "https://www.myinstants.com/media/sounds/twitch-youtube-alert.mp3"
    },
    {
        "name": "Mppabbe estourado",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mppabbe-estourado.mp3"
    },
    {
        "name": "BBCPEX - Terumi's Drive1",
        "color": "rgb(0, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bbcpex-2016-08-19-13-43-34-304.mp3"
    },
    {
        "name": "SOM INENTENDÍVEL RODRIGO FARO",
        "color": "rgb(255, 51, 252)",
        "mp3": "https://www.myinstants.com/media/sounds/som-inentendivel-rodrigo-faro.mp3"
    },
    {
        "name": "chlorine",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/twenty-one-pilots-chlorine-mp3cut.mp3"
    },
    {
        "name": "Poyo :D",
        "color": "rgb(68, 255, 14)",
        "mp3": "https://www.myinstants.com/media/sounds/poyo-d.mp3"
    },
    {
        "name": "rust fake invite",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/rust-fake-invite.mp3"
    },
    {
        "name": "se me sale la caca",
        "color": "rgb(113, 88, 31)",
        "mp3": "https://www.myinstants.com/media/sounds/se-me-sale-la-caca.mp3"
    },
    {
        "name": "УБИВАТЬ УБИВАТЬ УБИВАТЬ",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ubivat-ubivat-ubivat.mp3"
    },
    {
        "name": "Oniii loud",
        "color": "rgb(255, 92, 239)",
        "mp3": "https://www.myinstants.com/media/sounds/oniii-loud.mp3"
    },
    {
        "name": "AI MINHA XEREEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ai-minha-xereee.mp3"
    },
    {
        "name": "5 Second Countdown",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/5-second-countdown.mp3"
    },
    {
        "name": "Flight Irish Spring Green",
        "color": "rgb(39, 255, 32)",
        "mp3": "https://www.myinstants.com/media/sounds/flight-irish-spring-green_sPDXG9p.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "Stop it Get Some Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled3_13.mp3"
    },
    {
        "name": "Thick of it",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/thick-of-it.mp3"
    },
    {
        "name": "Mario 1 up",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mario-1-up.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "Real gunshot",
        "color": "rgb(153, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
    },
    {
        "name": "Saul Goodman Better Call Saul",
        "color": "rgb(27, 118, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/saul-goodman-better-call-saul.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "English or spanish ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/english-or-spanish_YRFEwaM.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "number one victory royale yeah fortnite we bout",
        "color": "rgb(128, 255, 221)",
        "mp3": "https://www.myinstants.com/media/sounds/number-one-victory-royale-yeah-fortnite-we-bout-to-get-down.mp3"
    },
    {
        "name": "Meme omgs",
        "color": "rgb(255, 217, 27)",
        "mp3": "https://www.myinstants.com/media/sounds/meme_lgkJmX6.mp3"
    },
    {
        "name": "NINJA FORTNITE",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ninja_fLDiDns.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "\"Hey\" Female Voice Sound Effect",
        "color": "rgb(20, 156, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hey-female-voice-sound-effect.mp3"
    },
    {
        "name": "Punch! Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-sound-effect.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/echo4b.mp3"
    },
    {
        "name": "Vine thud but you die from ear pain, kinda.",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-and-or-thud-but-you-die-from-ear-pain_wzP1skh.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "E sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/e-sound-effect_vA4ZcRK.mp3"
    },
    {
        "name": "Give Me Your F@&king Money!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/give-me-your-fking-moneylaw-and-order-ending.mp3"
    },
    {
        "name": "bone break",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bone-break-crack-sound-effect.mp3"
    },
    {
        "name": "mandalorian",
        "color": "rgb(124, 185, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/the-mandalorian-exclusive-clip-disney.mp3"
    },
    {
        "name": "ghast scream minecraft",
        "color": "rgb(149, 149, 149)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-scream2.mp3"
    },
    {
        "name": "Door Knocking SFX",
        "color": "rgb(255, 222, 55)",
        "mp3": "https://www.myinstants.com/media/sounds/door-knocking.mp3"
    },
    {
        "name": "Stone Cold - What",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/what_f6K6Vuk.mp3"
    },
    {
        "name": "Phone Ringing",
        "color": "rgb(0, 51, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/ringing_phone-mike_koenig-1503628110.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "smack OH SHIT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/smack-oh-shit.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "https://www.myinstants.com/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "Sqeeling Pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sqeeling-pig.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "Mike Breen Bang",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mikebreenbang.mp3"
    },
    {
        "name": "Cocomelon Intro",
        "color": "rgb(49, 255, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/cocomelon-intro.mp3"
    },
    {
        "name": "weak punch haha",
        "color": "rgb(255, 207, 210)",
        "mp3": "https://www.myinstants.com/media/sounds/weak-punch.mp3"
    },
    {
        "name": "Sukuna laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sukuna-laugh.mp3"
    },
    {
        "name": "Meme End",
        "color": "rgb(11, 43, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/meme-end.mp3"
    },
    {
        "name": "among us role reveal sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound-effect.mp3"
    },
    {
        "name": "1994 Nokia Ringtone",
        "color": "rgb(25, 187, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/1994-nokia-ringtone.mp3"
    },
    {
        "name": "HE-HELL NAH dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/he-hell-nah-dog.mp3"
    },
    {
        "name": "R6 Nitro Cell",
        "color": "rgb(27, 255, 210)",
        "mp3": "https://www.myinstants.com/media/sounds/r6-nitro-cell-sound-effect_lspM4ve.mp3"
    },
    {
        "name": "Bury the light deep within",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bury-the-light-deep-within.mp3"
    },
    {
        "name": "explosion sound",
        "color": "rgb(77, 76, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/explosion-sound.mp3"
    },
    {
        "name": "Fein x nokia",
        "color": "rgb(28, 66, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/fein-x-nokia.mp3"
    },
    {
        "name": "Winter soldier again",
        "color": "rgb(132, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/winter-soldier-again.mp3"
    },
    {
        "name": "Claps with Cheers - Audience",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/claps-with-cheers-audience.mp3"
    },
    {
        "name": "NO DICK.",
        "color": "rgb(255, 69, 253)",
        "mp3": "https://www.myinstants.com/media/sounds/no-dick_bOo1GdL.mp3"
    },
    {
        "name": "Directed By Michael Bay",
        "color": "rgb(255, 46, 15)",
        "mp3": "https://www.myinstants.com/media/sounds/directed-by-michael-bay.mp3"
    },
    {
        "name": "R6 call",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/r6-call.mp3"
    },
    {
        "name": "Anime Magic Sound Effect",
        "color": "rgb(255, 83, 153)",
        "mp3": "https://www.myinstants.com/media/sounds/anime-magic-sound-effect.mp3"
    },
    {
        "name": "ПЛАНКТОН ААААА",
        "color": "rgb(35, 85, 78)",
        "mp3": "https://www.myinstants.com/media/sounds/plankton-aaaaa.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "TOMA MILK SHAKE DE MORANGO",
        "color": "rgb(252, 53, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/toma-milk-shake-de-morango_bQhZ8mn.mp3"
    },
    {
        "name": "You must BOUNCE ON IT",
        "color": "rgb(28, 34, 92)",
        "mp3": "https://www.myinstants.com/media/sounds/you-must-bounce-on-it.mp3"
    },
    {
        "name": "hell nah sound effect download",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hell-nah-sound-effect-download.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kasongo.mp3"
    },
    {
        "name": "I ! Am Steve ...",
        "color": "rgb(0, 106, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-steve_WSyfB8u.mp3"
    },
    {
        "name": "oiia blue",
        "color": "rgb(255, 33, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/oiia-blue.mp3"
    },
    {
        "name": "italian animals",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/italian-animals.mp3"
    },
    {
        "name": "Royal guard",
        "color": "rgb(194, 255, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/royal-guard.mp3"
    },
    {
        "name": "I am the Danger Steve",
        "color": "rgb(57, 212, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/i-am-the-danger-steve.mp3"
    },
    {
        "name": "Carti- WHAT",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/carti-what.mp3"
    },
    {
        "name": "trippi troppi troppa trippa",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/trippi-troppi-troppa-trippa.mp3"
    },
    {
        "name": "chIiIiIcken jockey",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/chiiiiicken-jockey.mp3"
    },
    {
        "name": "Tung sahur bass boosted",
        "color": "rgb(99, 59, 40)",
        "mp3": "https://www.myinstants.com/media/sounds/tung-sahur-bass-boosted_0owit5v.mp3"
    },
    {
        "name": "I loveee repo",
        "color": "rgb(213, 255, 86)",
        "mp3": "https://www.myinstants.com/media/sounds/i-loveee-repo_kornKo0.mp3"
    },
    {
        "name": "I love, I love aaaa, I love, I love",
        "color": "rgb(238, 255, 7)",
        "mp3": "https://www.myinstants.com/media/sounds/i-love-i-love-aaaa-i-love-i-love.mp3"
    },
    {
        "name": "la knight yeah",
        "color": "rgb(5, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/la-knight-yeah.mp3"
    },
    {
        "name": "5 noches con mi tio",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/5-noches-con-mi-tio.mp3"
    },
    {
        "name": "5 Second Countdown",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/5-second-countdown.mp3"
    },
    {
        "name": "Nooooo ooo oo la policiaaaa",
        "color": "rgb(20, 28, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/nooooo-ooo-oo-la-policiaaaa.mp3"
    },
    {
        "name": "Ain nobru apelão",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ain-nobru-apelao.mp3"
    },
    {
        "name": "Dragging Stone",
        "color": "rgb(96, 96, 96)",
        "mp3": "https://www.myinstants.com/media/sounds/dragging-stone.mp3"
    },
    {
        "name": "Mug Root Beer Falling",
        "color": "rgb(60, 0, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/mug-root-beer-falling.mp3"
    },
    {
        "name": "Daisy troll",
        "color": "rgb(255, 18, 208)",
        "mp3": "https://www.myinstants.com/media/sounds/daisy-troll.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "Sketch - What's Up Brother",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sketch-whats-up-brother.mp3"
    },
    {
        "name": "MLG PWNAGE",
        "color": "rgb(51, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/swaggityswagger.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "Real gunshot",
        "color": "rgb(153, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
    },
    {
        "name": "M1 Garand Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ping_4TjeI1U.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "Online Download Charts",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/online.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "lol mising ping",
        "color": "rgb(255, 30, 30)",
        "mp3": "https://www.myinstants.com/media/sounds/ping_missing.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Giggity",
        "color": "rgb(153, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/quagmire-giggity-giggity-giggity.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Short AUGH",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/short-augh.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "doggy bark",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/deepbark.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "https://www.myinstants.com/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "FLASHBANG CSGO",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/throwing-flashbang-sound-effect-cs-go.mp3"
    },
    {
        "name": "ghast scream minecraft",
        "color": "rgb(149, 149, 149)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-scream2.mp3"
    },
    {
        "name": "Counter Strike - go go go!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/8e8118_counter_strike_go_go_go_sound_effect.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "https://www.myinstants.com/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Thriller End Laugh, Jackson",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/thriller-end-laugh_UmpZxje.mp3"
    },
    {
        "name": "Bloxy cola",
        "color": "rgb(255, 247, 6)",
        "mp3": "https://www.myinstants.com/media/sounds/bloxy-cola.mp3"
    },
    {
        "name": "SSB Homerun",
        "color": "rgb(134, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ssbhomerun.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "https://www.myinstants.com/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "minecraft cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/meow_2Tmjbru.mp3"
    },
    {
        "name": "Squid Game Tone",
        "color": "rgb(255, 65, 120)",
        "mp3": "https://www.myinstants.com/media/sounds/squid-game-tone.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "which bomboclaat dog i am",
        "color": "rgb(97, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/which-bomboclaat-dog-i-am.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "https://www.myinstants.com/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "https://www.myinstants.com/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "Hank About to Buss",
        "color": "rgb(246, 140, 27)",
        "mp3": "https://www.myinstants.com/media/sounds/hank-about-to-buss.mp3"
    },
    {
        "name": "Quandale dingle escapes",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/quandale-dingle-escapes.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "https://www.myinstants.com/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "Mortal Kombat - Toasty!",
        "color": "rgb(242, 175, 104)",
        "mp3": "https://www.myinstants.com/media/sounds/mk3-04245.mp3"
    },
    {
        "name": "Twist - Korn",
        "color": "rgb(73, 113, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/korn-twist-audiotrimmer.mp3"
    },
    {
        "name": "Spongebob - Bald",
        "color": "rgb(255, 236, 22)",
        "mp3": "https://www.myinstants.com/media/sounds/spongebob-bald.mp3"
    },
    {
        "name": "what is that!?!?!?!",
        "color": "rgb(14, 255, 227)",
        "mp3": "https://www.myinstants.com/media/sounds/y2mate_HEoHBjc.mp3"
    },
    {
        "name": "Minecraft Advancement Challenge Complete",
        "color": "rgb(225, 103, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/challenge_complete_uHsY1YS.mp3"
    },
    {
        "name": "kid says whats up f-",
        "color": "rgb(172, 131, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/kid-says-whats-up-f.mp3"
    },
    {
        "name": "Meme Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/meme-click.mp3"
    },
    {
        "name": "The Man From The Fog Whistle",
        "color": "rgb(77, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/the-man-from-the-fog-whistle.mp3"
    },
    {
        "name": "dmx bark",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dmx-bark-barkk.mp3"
    },
    {
        "name": "cupcakke goof",
        "color": "rgb(255, 176, 212)",
        "mp3": "https://www.myinstants.com/media/sounds/cupcakke-goof.mp3"
    },
    {
        "name": "And you know what else is",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/and-you-know-what-else-is.mp3"
    },
    {
        "name": "иди нахуй пудж",
        "color": "rgb(69, 73, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/idi-nakhui-pudzh.mp3"
    },
    {
        "name": "my name is optimus prime",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/my-name-is-optimus-prime.mp3"
    },
    {
        "name": "I AM INVINCIBLE! INVINCIBLE!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/homer-simpson-i-am-invincible.mp3"
    },
    {
        "name": "vine boom spam lol",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-spam-lol.mp3"
    },
    {
        "name": "Sana All-SFX",
        "color": "rgb(38, 6, 90)",
        "mp3": "https://www.myinstants.com/media/sounds/sana-all-sfx.mp3"
    },
    {
        "name": "Winter soldier again",
        "color": "rgb(132, 102, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/winter-soldier-again.mp3"
    },
    {
        "name": "bye bye deadpool",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/bye-bye-deadpool.mp3"
    },
    {
        "name": "CALVOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "color": "rgb(255, 194, 225)",
        "mp3": "https://www.myinstants.com/media/sounds/calvoooooooooooooooooooooooooooo.mp3"
    },
    {
        "name": "Flash bang!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/flash-bang.mp3"
    },
    {
        "name": "Звук домофона",
        "color": "rgb(138, 255, 176)",
        "mp3": "https://www.myinstants.com/media/sounds/zvuk-domofona.mp3"
    },
    {
        "name": "Hello darkness my old friend",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hellodarknessmyoldfriend.mp3"
    },
    {
        "name": "MLG PWNAGE",
        "color": "rgb(51, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/swaggityswagger.mp3"
    },
    {
        "name": "Star Wars Blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/blaster.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "https://www.myinstants.com/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "YES! YES!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/m_1.mp3"
    },
    {
        "name": "E Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/its-in-the-game_TyOFKRF.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Spiderman 2099 theme",
        "color": "rgb(255, 9, 9)",
        "mp3": "https://www.myinstants.com/media/sounds/spiderman-2099-theme.mp3"
    },
    {
        "name": "YEAH Lil Jon",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yeeeeeeeah.mp3"
    },
    {
        "name": "Classic Pokemon Heal",
        "color": "rgb(0, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/sad-violin.mp3"
    },
    {
        "name": "AIM Incoming Message",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Hello Mario",
        "color": "rgb(0, 170, 6)",
        "mp3": "https://www.myinstants.com/media/sounds/hello-mario-audiotrimmer.mp3"
    },
    {
        "name": "Punch! Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/punch-sound-effect.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Price is Right Failure",
        "color": "rgb(51, 153, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/priceisrightfail_1.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "Z Z Z Z Z Z",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/z-z-z-z-z-z.mp3"
    },
    {
        "name": "Discord leaving and joining rapidly",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/discord_join_and_leave_sound_rapidly.mp3"
    },
    {
        "name": "Tornado Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tornado_siren-ringtone-1516007.mp3"
    },
    {
        "name": "Freebird",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/freebird.mp3"
    },
    {
        "name": "Scooby doo running sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/scooby-doo-turning-test.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "Kid Screaming",
        "color": "rgb(0, 255, 2)",
        "mp3": "https://www.myinstants.com/media/sounds/kid-screaming-sound-effect.mp3"
    },
    {
        "name": "twitch bits",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/twitch-bits-donation-sound-effect-sfx.mp3"
    },
    {
        "name": "Kendrick Lamar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/kendrick-lamar-screaming.mp3"
    },
    {
        "name": "HOOPLA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/hoopla.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Death Bong",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/death-bong.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "helicopter meme",
        "color": "rgb(143, 143, 143)",
        "mp3": "https://www.myinstants.com/media/sounds/helicopter-meme.mp3"
    },
    {
        "name": "omg what is that",
        "color": "rgb(171, 255, 142)",
        "mp3": "https://www.myinstants.com/media/sounds/cardi-b-omg-what-is-thatmp3_160k_1.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "penguinz0 - WOO Waiting for",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/penguinz0-woo-waiting-for.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "https://www.myinstants.com/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "Don pollo king",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/don-pollo-king.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "https://www.myinstants.com/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "ay ay ay im ur little butterfly",
        "color": "rgb(255, 57, 156)",
        "mp3": "https://www.myinstants.com/media/sounds/9convert_9f6OCue.mp3"
    },
    {
        "name": "Mustard on the beat hoe",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/mustard-on-the-beat-hoe.mp3"
    },
    {
        "name": "dramatic cue A",
        "color": "rgb(255, 254, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dramatic-cue-a.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "https://www.myinstants.com/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "Vine Boom HQ (Longer)",
        "color": "rgb(101, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-hq-longer.mp3"
    },
    {
        "name": "Jack is 100% KappaPride :^)",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/jack-kappapride.mp3"
    },
    {
        "name": "brain farts",
        "color": "rgb(153, 14, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/brain-farts.mp3"
    },
    {
        "name": "screaming emoji meme",
        "color": "rgb(255, 179, 44)",
        "mp3": "https://www.myinstants.com/media/sounds/screaming-emoji-meme.mp3"
    },
    {
        "name": "Pokémon plink",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpq91k5v_6.mp3"
    },
    {
        "name": "roblox jump",
        "color": "rgb(255, 200, 106)",
        "mp3": "https://www.myinstants.com/media/sounds/action_jump.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "https://www.myinstants.com/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "I'm a lying piece of",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/im-a-lying-piece-of.mp3"
    },
    {
        "name": "Better Call Saul - Intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/better-call-saul-intro.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "Mortal Kombat - Toasty!",
        "color": "rgb(242, 175, 104)",
        "mp3": "https://www.myinstants.com/media/sounds/mk3-04245.mp3"
    },
    {
        "name": "Millionaire Suspense",
        "color": "rgb(235, 255, 52)",
        "mp3": "https://www.myinstants.com/media/sounds/5000000-music-mp3cut.mp3"
    },
    {
        "name": "Micheal Jackson rizz",
        "color": "rgb(255, 255, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/micheal-jackson-rizz.mp3"
    },
    {
        "name": "Summon Persona!",
        "color": "rgb(255, 102, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/persona-3-summon-gun-effect.mp3"
    },
    {
        "name": "zombie minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/minecraft-bruh-sound-effect-2-1.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "Gojo backshot",
        "color": "rgb(61, 197, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/gojo-backshot.mp3"
    },
    {
        "name": "Minecraft Advancement Challenge Complete",
        "color": "rgb(225, 103, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/challenge_complete_uHsY1YS.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "https://www.myinstants.com/media/sounds/moving-stone.mp3"
    },
    {
        "name": "G Man of toilet",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/g-man-of-toilet.mp3"
    },
    {
        "name": "300 black men for only two pounds",
        "color": "rgb(188, 100, 53)",
        "mp3": "https://www.myinstants.com/media/sounds/300-black-men-for-only-two-pounds.mp3"
    },
    {
        "name": "cupcakke goof",
        "color": "rgb(255, 176, 212)",
        "mp3": "https://www.myinstants.com/media/sounds/cupcakke-goof.mp3"
    },
    {
        "name": "Понос.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ponos-mp3.mp3"
    },
    {
        "name": "Ryan gosling burp",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ryan-gosling-burp.mp3"
    },
    {
        "name": "Animal Crossing Catch Sound",
        "color": "rgb(255, 216, 86)",
        "mp3": "https://www.myinstants.com/media/sounds/animal-crossing-catch-sound.mp3"
    },
    {
        "name": "villager news",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/villager-news.mp3"
    },
    {
        "name": "УБИВАТЬ УБИВАТЬ УБИВАТЬ",
        "color": "rgb(0, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ubivat-ubivat-ubivat.mp3"
    },
    {
        "name": "AI MINHA XEREEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ai-minha-xereee.mp3"
    },
    {
        "name": "Tá bom, vc fala demais",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ta-bom-vc-fala-demais.mp3"
    },
    {
        "name": "YA MI AMOR, YA",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ya-mi-amor-ya.mp3"
    },
    {
        "name": "Pede ifood pede",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/pede-ifood-pede.mp3"
    },
    {
        "name": "DEFYING GRAVITY!!!",
        "color": "rgb(89, 137, 61)",
        "mp3": "https://www.myinstants.com/media/sounds/defying-gravity.mp3"
    },
    {
        "name": "Flight Irish Spring Green",
        "color": "rgb(39, 255, 32)",
        "mp3": "https://www.myinstants.com/media/sounds/flight-irish-spring-green_sPDXG9p.mp3"
    },
    {
        "name": "Sometimes I dream about cheese",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/question06.mp3"
    },
    {
        "name": "brainrotcat",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/brainrotcat.mp3"
    },
    {
        "name": "dracula flow filteredcrack",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dracula-flow-filteredcrack.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "Prowler Siren",
        "color": "rgb(124, 0, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/prowler_sound.mp3"
    },
    {
        "name": "Wanna break from the ads",
        "color": "rgb(57, 255, 113)",
        "mp3": "https://www.myinstants.com/media/sounds/wanna-break-from-the-ads.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "yessir tik tok",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/yessir-sound-effect.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "https://www.myinstants.com/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "pbbv 2",
        "color": "rgb(255, 151, 181)",
        "mp3": "https://www.myinstants.com/media/sounds/pbbv-2.mp3"
    },
    {
        "name": "number one victory royale yeah fortnite we bout",
        "color": "rgb(128, 255, 221)",
        "mp3": "https://www.myinstants.com/media/sounds/number-one-victory-royale-yeah-fortnite-we-bout-to-get-down.mp3"
    },
    {
        "name": "NINJA FORTNITE",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/ninja_fLDiDns.mp3"
    },
    {
        "name": "Dead!",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/dead.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "https://www.myinstants.com/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/echo4b.mp3"
    },
    {
        "name": "Vine thud but you die from ear pain, kinda.",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/vine-boom-and-or-thud-but-you-die-from-ear-pain_wzP1skh.mp3"
    },
    {
        "name": "E sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/e-sound-effect_vA4ZcRK.mp3"
    },
    {
        "name": "BLYAT kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/blyat_9T1fo5H.mp3"
    },
    {
        "name": "Door Knocking SFX",
        "color": "rgb(255, 222, 55)",
        "mp3": "https://www.myinstants.com/media/sounds/door-knocking.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "THE record scratch",
        "color": "rgb(255, 0, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/record-scratch_u0nwDyU.mp3"
    },
    {
        "name": "Teleport DBZ",
        "color": "rgb(0, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/tmpubima4i9.mp3"
    },
    {
        "name": "oi oi baka",
        "color": "rgb(44, 255, 250)",
        "mp3": "https://www.myinstants.com/media/sounds/oi-oi-baka_ZPZFcW3.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "https://www.myinstants.com/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "Ewww (Crowd Effect)",
        "color": "rgb(248, 255, 49)",
        "mp3": "https://www.myinstants.com/media/sounds/ewww.mp3"
    },
    {
        "name": "Zombies - Mystery Box Jingle",
        "color": "rgb(51, 51, 51)",
        "mp3": "https://www.myinstants.com/media/sounds/mystery-box-jingle-full.mp3"
    }
]
