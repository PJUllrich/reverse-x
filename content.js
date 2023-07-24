const twitterLogoURL = chrome.runtime.getURL("images/twitter.svg");

const replace = () => {
  const logoLinkSelector = 'a[aria-label="Twitter"][href="/home"]';
  const logoContainer = document.querySelector(`${logoLinkSelector} div`);
  const xLogo = document.querySelector(`${logoLinkSelector} svg`);

  const twitterLogo = document.createElement("img");
  twitterLogo.src = twitterLogoURL;
  twitterLogo.height = "50";
  twitterLogo.width = "30";

  logoContainer.replaceChild(twitterLogo, xLogo);
};

replace();
