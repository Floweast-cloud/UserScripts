// ==UserScript==
// @name        DeviantArt Icon Change
// @namespace   sollace
// @icon        https://raw.githubusercontent.com/Sollace/UserScripts/master/DA++/logo.png
// @include     http://*.deviantart.*
// @include     https://*.deviantart.*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==

var FAVICON = 'data:image/x-icon;base64,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AgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAM48EADieBAAeVQIAIFsCACBbAgAiXgIAJGcCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACNkAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAzjwQAOJ4EAB5VAgAgWwIAIFsCACBbAgAkZAIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACFdAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCADOPBAA4ngQAHlYCACBcAgAgXAIAIFwCACJhAgAkZwIAJWgCACVoAgAlaAIAJWgCACVoAgAlaAIAJWgCACRmAgAkZgIAJGQCACBaAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFwCACBcAgAgXAIAM48EACt7A/0rewP+K3sD/it7A/4rewP9K3kD/UfMBf1HzAX8R8wF/EfMBftHzAX7R8wF+kfMBfpHzAX/R8wFH0fMBQQkZwIAIl4CACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACt7AwUrewNRK3sD/St7A/krewP4K3sD9yt7A/8rewP/K3sD/yt7A/4rfAP+N54E/kfNBf5HzAX+R8wF/kfMBf5HzAX/R8wF/0fMBf5HzAXEJWgCAEfMBQFHzAUBR8sFAUPBBQEpdgMBK3sDASt7AwErewMBK3sDASt7AwErewMCJGUCACt7A+8rewP/K3sD/yt7A/8rewPpK3sD/it7A/8rewP/K3sD/yt7A/8qeAP/RccF/0fLBf9HzAX/R8wF/0fMBf5HzAX/R8wF/0fMBf9HzAUzR8wFASRmAgAiXwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBZAgArewNmK3sD/yt7A/8rewP/K3sD/Ct7A9MrewP9K3sD/yt7A/0rewOhK3sDWSt7A1c7qARYR8sFWkfMBVtHzAVTR8wF/0fMBf5HzAX/R8wF/kfMBdVHzAVxR8wFdEfLBXRDwAV0KXcDdCt7A3QrewN0K3sDdCt7A3QrewN0K3sDayt7A/IrewP+K3sD/yt7A/0rewPeK3sDsit7A/srewP/K3sD+it7A5ErewMDNJQEARAtAAFGxwUBR8wFAUfMBQFHzAWKR8wF/UfMBf9HzAX/R8wF/0fMBfxHzAX8R8wF/EnQBfwuhAP8K3wD/Ct7A/wrewP8K3sD/Ct7A/wrewP8K3sD/yt7A/8rewP/K3sD/yt7A1ArewOEK3sD+it7A/8rewP8K3sD0il0AgAhXQIAIV0CACFeAgAlaQIAJWoCAChwAgBHzAX+R8wF/kfMBf9HzAX/R8wF/0fMBf9HzAX/R8sF/0C4Bf8qeAP/K3sD/yt7A/8rewP/K3sD/yt7A/8rewP/K3sD/yt7A/srewPbM48EACt7AzgrewP/K3sD/yt7A/8rewP/K3sDDit7AwMgWwIAIFsCACNhAgAkZgIAR8wFAUfMBWlHzAX/R8wF/0fMBf9HzAX/R8wF/0fMBf9HzAX/SM8F/zGLBP8rfAP/K3sD/yt7A/8rewP/K3sD/yt7A/8rewP/K3sD/yt7AzErewMCOJ4EACt7A/8rewP+K3sD/yt7A/0rewPCIV4CACt7AwErewMBK3sDASp4AwFI0AUBImECAEfMBe1HzAX9R8wF/0fMBf9HzAX/R8wFp0fMBaZHywWlP7UFpSp5A6UrewOnK3sDuSt7A/8rewP/K3sD/yt7A/srewO8IFwCADOPBAA4nwQAK3sDhSt7A/0rewP/K3sD/yt7A/8rewO5K3sDHCBaAgAgXAIAI2MCACVoAgAlaQIAR8wFRUfMBf9HzAX/R8wF/0fMBf9HzAV4R8wFBUbIBQNJ0gUDKXQDAiNhAgArewOuK3sD/Ct7A/8rewP/K3sD/yt7AxYrewMBM48EACt7AwEfVwIAK3sD9St7A/wrewP/K3sD/yt7A/8rewP9K3sDyyt7A6QqeAOZSdEFmUfMBZlHzAWQR8wF/0fMBf9HzAX/R8wF/kfMBf8laAIAJWkCACVoAgAzkgQCK3sDHit7A/8rewP/K3sD/yt7A/wrewOdIFwCACBbAgAzjwQAOJ4EACt7AwErewMrK3sD/yt7A/4rewP+K3sD/yt7A/8rewP/K3sD/yt6A/49rwX+R8sF/kfMBf5HzAX/R8wF/0fMBf9HzAX/R8wF/kfMBYwkZwIAJGYCACVoAgA0lQTEK3sD/Ct7A/8rewP+K3sD/yt7AwMrewMBIFsCADOPBAA4ngQAHlUCACt7AwErewMvK3sD6Ct7A/8rewP/K3sD/it7A/4rewP/K3sD/yx+A/9IzwX/R8wF/0fMBf5HzAX+R8wF/0fMBf9HzAX/R8wF/0fMBQlHzAUFRsoFNEfKBf8qeAP/K3sD/yt7A/8rewN8K3sDASBcAgAgWwIAM48EADieBAAeVQIAIFsCACBcAgArewMGK3sDeCt7A94rewP/K3sD/yt7A/8rewP/K3sD/zqnBf9HywX/R8wF/0fMBf9HzAX/R8wF/0fMBf9HzAX8R8wFoyVqAwBHzAXaR8wF/TigBP8rfAP9K3sD+B9ZAgAgWwIAIFsCACBbAgAzjwQAOJ4EAB5VAgAgWwIAIFsCACBbAgArewMBH1oCACt7AyQrewNVK3sDcyt7A38rewOBLH8DgUnSBYFHzAWBR8wFg0fMBbJHzAX/R8wF/0fMBf9HzAX/R8wFZEfMBf9HzAX/SM0F/yt6A/8rfANcK3sDAyBbAgAgWwIAIFsCADOPBAA4ngQAHlUCACBbAgAgWwIAIFsCACBbAgAgXAIAIFsCAB9ZAgAfWAIAHlcCAB5WAgAfVwIAHlYCACFeAgBHzAUBJWkCAEfMBf9HzAX+R8wF/0fMBf9HzAX+R8wF/0fMBf9HzAX9O6kE4yFdAgAgWwIAIFsCACBbAgAgWwIAM48EADieBAAeVQIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAI2QCACRmAgBHzAUCR8wFb0fMBf9HzAX/R8wF/0fMBf9HzAX/R8wF/0fMBf9HzAU7SdEFAyBbAgAgWwIAIFsCACBbAgAzjwQAOJ4EAB5VAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAhXQIAJGcCACVoAgAlaQIAR8wF8EfMBf1HzAX/R8wF/0fMBf9HzAX8R8wFxiRlAgAgWwIAIFsCACBbAgAgWwIAIFsCADOPBAA4ngQAHlUCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBaAgAkYwIAJGYCACRmAgAkZwIAJGcCACRnAgAkZwIAJGcCACRnAgAkZgIAJGYCACNhAgAgWwIAIFsCACBbAgAgWwIAM48EADieBAAeVQIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBcAgAkZgIAJGYCACRnAgAlaAIAJWgCACVoAgAlaAIAJWgCACRmAgAkZgIAJGYCACBcAgAgWwIAIFsCACBbAgAzjwQAOJ4EAB5VAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACNjAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAImICACBbAgAgXAIAIFsCADOPBAA4ngQAHlUCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFwCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZwIAIVwCACBbAgAgWwIAM48EADieBAAeVgIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAIFsCACBbAgAgWwIAI2ECACRnAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAkZgIAJGYCACRmAgAjYwIAIFsCACBcAgAzjwQAN5wEACRmAwAeVgIAHlYCAB5WAgAeVgIAHlYCAB5WAgAeVgIAHlYCAB5WAgAeVgIAHlYCAB5WAgAeVgIAHlYCAB5WAgAeVgIAImECACNiAgAjYgIAI2ICACNiAgAjYgIAI2ICACNiAgAjYgIAI2ICACNiAgAgWQIAJGYCADWZBAAvhwMAN5wEADedBQA3nQUAN50FADedBQA3nQUAN50FADedBQA3nQUAN50FADedBQA3nQUAN50FADedBQA3nQUAN50FADedBQA3ngUAOJ8FADifBQA4nwUAOJ8FADifBQA4nwUAOJ8FADifBQA4nwUAOJ8FADeeBQA3nAQAMYsDAP//////////////////////////////////////////AAP/+AAB//AAAf/wB+D/4AfgAAEH8AABh/gAA4P4AAOB/D8HwAAfB+AADg/wAA4f/AAEH//gBD///4A////Af///wH//////////////////////////////////////';
var LOGO = 'http://fc00.deviantart.net/fs70/i/2014/341/8/e/da_logo_concept_by_comeha-d893jng.png';
var done = false;

document.onmousemove = document.onready = function() {
  changeLogo(LOGO, FAVICON);
}

function changeLogo(url, icon) {
  $('head link[rel="shortcut icon"]').attr('href', icon);
  $('#deviantart-logo .mark').html('<img style="margin-left:-10px" height="30px" src="' + url + '" />');
  $('img[data-embed-id="619"], [collect_rid="emote:619"] img').attr({
    'src': url,
    'width': '19px',
    'height': '12px'
  }).css({
    'width': '19px',
    'height': '12px'
  });
  
  var css = '\
.dev-page-view .dev-right-bar-title.more-from-da-title {\
background: url(' + url + ') no-repeat 0px 5px/25px auto !important;}';
  
  if (!done) {
    done = true;
    if (el('#iconStyle').length == 0) {
      style(css).setAttribute('id', 'iconStyle');
    } else {
      el('#iconStyle').innerHTML = css;
    }
  }
}
  
function el(select) {
  if (document['querySelectorAll']) {
    return document.querySelectorAll(select);
  }
  if (select.indexOf('#') == 0) {
    return [document.getElementById(select.replace('#', ''))];
  } else if (select.indexOf('.') == 0) {
    return document.getElementsByClassName(select.replace('.',''));
  }
  return document.getElementsByTagName(select);
}

function style(css) {
  var tag = document.createElement('STYLE');
  tag.type = 'text/css';
  tag.innerHTML = css;
  document.head.appendChild(tag);
  return tag;
}