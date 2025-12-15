
var blacklistedVids = [
];
//elements to search
var safeDeleteNodes = [
  "YTD-VIDEO-RENDERER", "YTD-CHANNEL-RENDERER", "YT-LOCKUP-VIEW-MODEL"
];
// list of channels that frequently upload AI content
var blacklistedChan = [
  "airevolutionx", "kaylaimee", "JuliaMcCoy", "Real_or_Ai3", "Hehind", "ReallyNotAi", "JiembaSands", "Sovibes", "SweetGameASMR4", "Aitopmovies",
  "kellyeld2323", "PlayHop2", "Underworld-g1n", "goody_ai", "roy_cassette", "thedorbrothers", "Dankieft", "ClickyAI", "YetiAF", "YaBegitulahLiteEdition",
  "slai_darktrail", "AnastasiInTech", "BlakeTheSnakeOG", "bycloudAI", "ImpossibleAICinema", "dandingles", "relic4948", "UCV7Su8C63HPC0KpHDRSU68Q", "TechSkyEH",
  "PalteksRanking", "mikeyagain", "dostpappu", "abirhsnt", "bennettwaisbren", "TheRanking_LOL", "rizzler.clipz.67", "MR_AI_Creatorr", "MaxNovakTutorials", "AI_SLAPS",
  "theAIsearch", "AI_In_Context", "mindful-machines", "JudasBooth", "JeffSu", "monium", "BoldlyWithAI", "Manoranjan_Tales", "lyricalsoundscape_ai", "Cat-alyst-e2n", "omfortablecat",
  "CatimationAI", "PnkjKumr-f1v", "s_artt", "lokicatt", "Mewandyou-h9o", "AmeliaCartoon2025", "funnymoments91a", "Padeh_Dhungeng", "aicatfun_jt", "Meowz.11", "MeowWRLD", "pet.town.u",
  "catPlayfunny", "Cats_Meow78", "Aikittynetwork", "blizzardanimation-q6e", "KittyCuteness143", "ToplesAI", "hadiaofficialart", "riyachaudhary4203", "Ajcat6", "zoostory-l6j", "Mohamad-ne8tj",
  "Jessemultiverse", "CartoonCatVideo-oz5jo", "MeowMeowHub", "charlie765-j7i", "NeutralMeow", "BNBCats", "Caticious-awe", "CAT_CARTOON_750", "Shorttrump45", "KittyAiStory-s1r", "MouzaMeow", "MEEOWMASTERS",
  "Fluffycouplecats", "AtiyaRaf", "PregnantPaws786", "AKTHOR-m1v", "KitTyishorts", "StoryNestforyou", "Ytbilli", "AIwonders19", "OpShivam91", "cuteaibyngocez", "AnimalCat-ee6em", "MrSuperAi29",
  "CuteCat.50", "Animalanimated0042", "VirtuRealmStories", "SL-Painting", "Kumara_Ladka", "catmeow-g6u", "Maritestutorialmggvlog", "AiCat-xg4db", "Cuefillo", "Applcherryai", "MeowKittenie-k9l",
  "cutemouse.8888", "NANHTETAI", "AN3DArtvfx", "BiviORHansi", "toon34W", "cute_payal.09", "LittleDreamerkids-i2h", "AicatFight-z9q", "Aifurcast", "TheCatswhiskeredworld", "catbloodline", "CAT.COM2.O",
  "vhkjhsbkox_1", "AIZoo-o8s", "catandmonkey2.0", "Catloria", "Uniquetubeeofficial", "ItsAmazing-xi4il", "CatSaysMeow52324", "Aicatstory04", "satyajitpradhan3074", "Luckycats14", "SuperMeowToons",
  "aicatstales9", "BapisAIAdventures", "AIARTVIDEOSAAV", "CATGENIUS.923", "animate.ai19", "interesting261", "Thefunnyboneshow1", "meow_meow_um", "KMCOMEDYvlogs-k1y9p", "Baby2.0-", "Kitten_lover_SK",
  "Catcovid780", "zara_12323", "BabyCat-Boy", "Ganesh.n-p4w", "TabbyTales-b8u", "Mycutecatie", "PPMilky2.0", "TheEmpireofCats1", "Catkingdom6", "CatChaos-kitty", "PriyankaM2023", "AbhinayCreator",
  "Meowplay-1", "AICatArt-et1ci", "PlanetNemooo", "moonlightgbar", "aqeelhaider6053", "MiniRebelMeow", "2dcartoonfamily", "pawsomeaibuddies", "Catvideo-nd2ue", "KittenCat-r6e", "MycatJourney202", "PawPixi",
  "JonnyBilli", "Stocats86", "RajCartoonstory2", "Sonashambhaviofficial", "Meowzology", "Shahgcats", "CatShow-v8i", "zistello_ai", "UrduToP10", "Cat_sweet_pictures", "AiCatExplore", "SmallStory-rz5jz",
  "ThePregnantMeow07", "altamash_ry7", "UsmanLife0", "cutecatstories-e6f", "UttamTalesofficial", "Crypto_ogisj", "aismart7", "hem2718", "mdanik2282", "CatCartoon2024-m7v", "TheFurrySquad-ai", "trendingbangla1",
  "araditya09", "CatMax-c9o", "WhiskerTalesYt1", "PakistanishortskiDunia", "Bitty_ai-1M", "CatsLife-ib", "jv.jahidvai", "mansivines", "MetaMeowAI", "uniqueshots90", "AlmeenKhan-hq8dw", "luppyy22", "Meowseason17",
  "KAHANIBYTETV", "gingercat-c5v", "SapanaatuHamra0707", "CartoonId-v7w", "Journey_00000", "CatsJig", "cat-journey-9988", "Goragoricids", "Aicat905", "movieemob", "MaiwMilkyStock", "Curiouswhiskers-x2n",
  "animewo_official", "MeowgicAIcat", "Umm-d8p", "artifexAIwithAkshay", "A1adventurefun54", "The-One-Cart", "aieditor4", "ImpossibleAIs-c9z", "Rapoh1", "johnnaeranks"
];

// Callback functions to execute when mutations are observed
const callbackLabel = (mutationList, observer) => {
  mutationList.forEach(mutation => {
    if (mutation.target.attributes.id && mutation.target.attributes.id.nodeValue === "expandable-metadata") {
      if (ytSummaryPref === "hide") {
        mutation.target.remove();
      }
    }
    if (arrayHardCheck(safeDeleteNodes, mutation.target.nodeName)) {
      //referenceEgg
      egg = constructEggFromNode(mutation.target);
      if (egg) {
        switch (egg.Eggtype) {
          case "listSearchRenderer":
            if (egg.ChannelName && arraySoftCheck(blacklistedChan, egg.ChannelName)) {
              addLabel(xpathSearch(mutation.target, './descendant::*[@id="badges"]').singleNodeValue, "Frequent AI");
            }
            else if (egg.VideoID && arraySoftCheck(blacklistedVids, egg.VideoID)) {
              addLabel(xpathSearch(mutation.target, './descendant::*[@id="badges"]').singleNodeValue, "Verified AI");
            }
            break
        }
      }
    }
  }
  )
}
const callbackDelete = (mutationList, observer) => {
  mutationList.forEach(mutation => {
    if (mutation.target.attributes.id && mutation.target.attributes.id.nodeValue === "expandable-metadata") {
      if (ytSummaryPref === "hide") {
        mutation.target.remove();
      }
    }
    if (arrayHardCheck(safeDeleteNodes, mutation.target.nodeName)) {
      //referenceEgg
      egg = constructEggFromNode(mutation.target);
      if (egg) {
        console.log(egg)
        if (egg.ChannelName && arraySoftCheck(blacklistedChan, egg.ChannelName)) {
          egg.DeleteTarget.remove();
        }
        else if (egg.VideoID && arraySoftCheck(blacklistedVids, egg.VideoID)) {
          egg.DeleteTarget.remove();
        }
      }
    }
  }
  )
}
function constructEggFromNode(node) {
  egg = {};
  egg.DeleteTarget = node
  switch (node.nodeName) {
    case "YTD-CHANNEL-RENDERER":
      egg.EggType = "listChannelRenderer";
      egg.ChannelName = xpathSearch(node, './descendant::*[@id="subscribers"]/text()').singleNodeValue.nodeValue;
      break;
    case "YTD-VIDEO-RENDERER":
      egg.EggType = "listSearchRenderer";
      egg.ChannelName = xpathSearch(node, './descendant::*[@id="channel-thumbnail"]/@href').singleNodeValue.nodeValue;
      egg.VideoID = xpathSearch(node, './descendant::*[@id="thumbnail"]/@href').singleNodeValue.nodeValue.slice(8, 20); //video Ids are 11 characters long, "/watch?v=" is 9,
      egg.VideoTitle = xpathSearch(node, './descendant::*[@id="video-title"]/@title').singleNodeValue.nodeValue;
      break;
    case "YT-LOCKUP-VIEW-MODEL":
      if (xpathSearch(node, './descendant::a[@class="yt-core-attributed-string__link yt-core-attributed-string__link--call-to-action-color yt-core-attributed-string--link-inherit-color"]/@href').singleNodeValue) {
        egg.ChannelName = xpathSearch(node, './descendant::a[@class="yt-core-attributed-string__link yt-core-attributed-string__link--call-to-action-color yt-core-attributed-string--link-inherit-color"]/@href').singleNodeValue.nodeValue.slice(2);
      }
      if (xpathSearch(node, './descendant::a[@class="yt-lockup-view-model__content-image"]/@href').singleNodeValue) {
        egg.VideoID = xpathSearch(node, './descendant::a[@class="yt-lockup-view-model__content-image"]/@href').singleNodeValue.nodeValue.slice(8, 20);
      }
      if (node.parentNode) {
        egg.DeleteTarget = node.parentNode.parentNode;
      }
      //node.remove();
      break;
    case "DIV":
      if (node.attributes.class) {
        switch (node.attributes.class.nodeValue) {
          case "ytGridShelfViewModelGridShelfItem":
            egg.EggType = "listShortRenderer";
            egg.VideoID = xpathSearch(node, './descendant::*[@class="shortsLockupViewModelHostEndpoint reel-item-endpoint"]/@href').singleNodeValue.nodeValue.slice(8, 20); //video Ids are 11 characters long, "/watch?v=" is 9,
            break
          default:
            return;
        }
      }
      else { return }
  }
  console.log(egg)
  return egg;
}
//adds label to the youtube pages section
function addLabel(node, label) {
  console.log("test")
  if (node.attributes.hidden) {
    node.removeAttribute("hidden");
  }
  if (node.attributes.badged) {
    return
  }
  newHt = document.createElement("p")
  newHt.textContent = label
  newHt.style =
    "color:white; background-color:rgba(255, 0, 0, 0.45);font-family: 'Roboto','Arial',sans-serif;font-size: 1.2rem;line-height: 1.8rem;font-weight: 500;margin-left:4px;padding-left:6px;padding-right:6px;border-radius:2px;"
  node.appendChild(newHt);
  node.attributes.badged = "true"
}
// Create an observer instance linked to the callback function based on storage
console.log(ytVideoPref)
switch (ytVideoPref) {
  case "hide":
    observer = new MutationObserver(callbackDelete);
    break
  case "label":
    observer = new MutationObserver(callbackLabel);
    break
}

// Start observing the target node for configured mutations
observer.observe(document, { attributes: true, childList: true, subtree: true });

// Later, you can stop observing
//observer.disconnect();
