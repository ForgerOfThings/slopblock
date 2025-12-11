var blacklistedVids = [
];
//elements to search
var safeDeleteNodes = [
  "YTD-VIDEO-RENDERER", "YTD-CHANNEL-RENDERER", "YTD-RICH-ITEM-RENDERER"
];
// list of channels that frequently upload AI content
var blacklistedChan = [
  "airevolutionx", "kaylaimee", "JuliaMcCoy", "Real_or_Ai3", "Hehind", "ReallyNotAi", "JiembaSands", "Sovibes", "SweetGameASMR4", "Aitopmovies",
  "kellyeld2323", "PlayHop2", "Underworld-g1n", "goody_ai", "roy_cassette", "thedorbrothers", "Dankieft", "ClickyAI", "YetiAF", "YaBegitulahLiteEdition",
  "slai_darktrail", "AnastasiInTech", "BlakeTheSnakeOG", "bycloudAI", "ImpossibleAICinema", "dandingles", "relic4948", "UCV7Su8C63HPC0KpHDRSU68Q", "TechSkyEH",
  "PalteksRanking", "mikeyagain", "dostpappu", "abirhsnt", "bennettwaisbren", "TheRanking_LOL", "rizzler.clipz.67", "MR_AI_Creatorr", "MaxNovakTutorials", "AI_SLAPS",
  "theAIsearch", "AI_In_Context", "mindful-machines", "JudasBooth", "JeffSu", "monium", "BoldlyWithAI", "Manoranjan_Tales"
];

// Callback functions to execute when mutations are observed
const callbackLabel = (mutationList, observer) => {
  mutationList.forEach(mutation => {
    if (mutation.addedNodes.length > 0) {
      console.log(mutation);
      if (arrayHardCheck(safeDeleteNodes, mutation.target.nodeName)) {
        //referenceEgg
        egg = constructEggFromNode(mutation.target);
        if (egg) {
          if (egg.ChannelName && arrayHardCheck(blacklistedChan, egg.ChannelName)) {
            addLabel(xpathSearch(mutation.target, './descendant::*[@id="badges"]').singleNodeValue, "Frequent AI");
          }
          else if (egg.VideoID && arraySoftCheck(blacklistedVids, egg.VideoID)) {
            addLabel(xpathSearch(mutation.target, './descendant::*[@id="badges"]').singleNodeValue, "Verified AI");
          }

        }
      }
    }
  }
  )
}
const callbackDelete = (mutationList, observer) => {
  mutationList.forEach(mutation => {
    //console.log(mutation);
    if (mutation.target.attributes.id && mutation.target.attributes.id.nodeValue === "expandable-metadata") {
      console.log("test");
      mutation.target.remove();
    }
    if (arrayHardCheck(safeDeleteNodes, mutation.target.nodeName)) {
      //referenceEgg
      egg = constructEggFromNode(mutation.target);
      if (egg) {
        if (egg.ChannelName && arrayHardCheck(blacklistedChan, egg.ChannelName)) {
          mutation.target.remove();
        }
        else if (egg.VideoID && arraySoftCheck(blacklistedVids, egg.VideoID)) {
          mutation.target.remove();
        }

      }
    }
  }
  )
}
function constructEggFromNode(node) {
  egg = {};
  switch (node.nodeName) {
    case "YTD-CHANNEL-RENDERER":
      egg.EggType = "listChannelRenderer";
      egg.ChannelName = xpathSearch(node, './descendant::*[@id="text"]/text()').singleNodeValue.nodeValue;
      break;
    case "YTD-VIDEO-RENDERER":
      egg.EggType = "listSearchRenderer";
      egg.ChannelName = xpathSearch(node, './descendant::*[@id="channel-thumbnail"]/@href').singleNodeValue.nodeValue.slice(2);
      egg.VideoID = xpathSearch(node, './descendant::*[@id="thumbnail"]/@href').singleNodeValue.nodeValue.slice(8, 20); //video Ids are 11 characters long, "/watch?v=" is 9,
      egg.VideoTitle = xpathSearch(node, './descendant::*[@id="video-title"]/@title').singleNodeValue.nodeValue;
      break;
    case "YTD-RICH-ITEM-RENDERER":
      egg.EggType = "listReccomendedRenderer";
      egg.VideoID = xpathSearch(node, './descendant::span/span/a[@class="yt-core-attributed-string__link yt-core-attributed-string__link--call-to-action-color yt-core-attributed-string--link-inherit-color"]/@href').singleNodeValue //video Ids are 11 characters long, "/watch?v=" is 9,
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
  return egg;
}
//adds label to the youtube pages section
function addLabel(node, label) {
  if (node.attributes.hidden) {
    node.removeAttribute("hidden");
  }
  newHt = document.createElement("p")
  newHt.textContent = label
  newHt.style =
    "color:white; background-color:rgba(255, 0, 0, 0.45);font-family: 'Roboto','Arial',sans-serif;font-size: 1.2rem;line-height: 1.8rem;font-weight: 500;margin-left:4px;padding-left:6px;padding-right:6px;border-radius:2px;"
  node.appendChild(newHt);
}
// Create an observer instance linked to the callback function
console.log(desire)
switch (desire) {
  case "delete":
    observer = new MutationObserver(callbackDelete);
    console.log(desire)
    break
  case "label":
    observer = new MutationObserver(callbackLabel);
    console.log(desire)
    break
}

// Start observing the target node for configured mutations
observer.observe(document, { attributes: true, childList: true, subtree: true });

// Later, you can stop observing
//observer.disconnect();