var enableCache=true;var jsCache=new Array();var dynamicContent_ajaxObjects=new Array();function ajax_showContent(divId,ajaxIndex,url)
{var targetObj=document.getElementById(divId);targetObj.innerHTML=dynamicContent_ajaxObjects[ajaxIndex].response;if(enableCache){jsCache[url]=dynamicContent_ajaxObjects[ajaxIndex].response;}
dynamicContent_ajaxObjects[ajaxIndex]=false;ajax_parseJs(targetObj)}
function ajax_loadContent(divId,url)
{if(enableCache&&jsCache[url]){document.getElementById(divId).innerHTML=jsCache[url];ajax_parseJs(document.getElementById(divId))
evaluateCss(document.getElementById(divId))
return;}
var ajaxIndex=dynamicContent_ajaxObjects.length;document.getElementById(divId).innerHTML='Loading...';dynamicContent_ajaxObjects[ajaxIndex]=new sack();if(url.indexOf('?')>=0){dynamicContent_ajaxObjects[ajaxIndex].method='GET';var string=url.substring(url.indexOf('?'));url=url.replace(string,'');string=string.replace('?','');var items=string.split(/&/g);for(var no=0;no<items.length;no++){var tokens=items[no].split('=');if(tokens.length==2){dynamicContent_ajaxObjects[ajaxIndex].setVar(tokens[0],tokens[1]);}}
url=url.replace(string,'');}
dynamicContent_ajaxObjects[ajaxIndex].requestFile=url;dynamicContent_ajaxObjects[ajaxIndex].onCompletion=function(){ajax_showContent(divId,ajaxIndex,url);};dynamicContent_ajaxObjects[ajaxIndex].runAJAX();}
function ajax_parseJs(obj)
{var scriptTags=obj.getElementsByTagName('SCRIPT');var string='';var jsCode='';for(var no=0;no<scriptTags.length;no++){if(scriptTags[no].src){var head=document.getElementsByTagName("head")[0];var scriptObj=document.createElement("script");scriptObj.setAttribute("type","text/javascript");scriptObj.setAttribute("src",scriptTags[no].src);}else{if(navigator.userAgent.toLowerCase().indexOf('opera')>=0){jsCode=jsCode+scriptTags[no].text+'\n';}
else
jsCode=jsCode+scriptTags[no].innerHTML;}}
if(jsCode)ajax_installScript(jsCode);}
function ajax_installScript(script)
{if(!script)
return;if(window.execScript){window.execScript(script)}else if(window.jQuery&&jQuery.browser.safari){window.setTimeout(script,0);}else{window.setTimeout(script,0);}}
function evaluateCss(obj)
{var cssTags=obj.getElementsByTagName('STYLE');var head=document.getElementsByTagName('HEAD')[0];for(var no=0;no<cssTags.length;no++){head.appendChild(cssTags[no]);}}
