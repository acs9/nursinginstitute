// MM scripts
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/* NEWS SCROLLER */
function makeItMove(containerId,userActionId,textItemId,i)
{
// Values used by the script.
// BEWARE : YOU WILL HAVE TO MODIFIE THESE VALUES IN THE HTML CODE AS WELL, SETTING THEM TO THEIR NUMERIC VALUES!
var startValue=-61;// The value the movement will start. Must be big enough to let some white space.
var endValue=150; // the value the movement will end. Must be big enough to let the whole text disappear
var stopValue=271; // Must be greater than endValue;
//
var containerPositionFromTop=0;
var containerPositionFromLeft=0;
var containerWidth=250;
var containerHeight=253;
//
if (document.getElementById)
    {
    
    if(!document.getElementById('userAction'))
        {
        //alert("No action");
        
        }
    else
        {
        document.getElementById(userActionId).style.visibility="visible";
        document.getElementById(userActionId).style.backgroundColor="rgb(257,205,217)";
        document.getElementById(userActionId).style.display="block";
        //document.getElementById(userActionId).style.float="left";
        document.getElementById(userActionId).style.zIndex="15";
        document.getElementById(userActionId).style.position="absolute";
        document.getElementById(userActionId).style.top="0px";
        document.getElementById(userActionId).style.left="0px";
        document.getElementById(userActionId).style.width="auto";
        document.getElementById(userActionId).style.height="auto";
        }
    document.getElementById(containerId).style.zIndex="11";
    document.getElementById(containerId).style.position="relative";
    document.getElementById(containerId).style.top=containerPositionFromTop+"px";
    document.getElementById(containerId).style.left=containerPositionFromLeft+"px";
    document.getElementById(containerId).style.width=containerWidth+"px";
    document.getElementById(containerId).style.height=containerHeight+"px";
    document.getElementById(containerId).style.overflow="hidden";
    
    document.getElementById(textItemId).style.zIndex="11";
    document.getElementById(textItemId).style.position="absolute";
    document.getElementById(textItemId).style.top=-i+"px";
    document.getElementById(textItemId).style.left=0+"px";
    }
if(i<endValue)
    {
    i++;
    //alert("makeItMove("+textItemId+","+i+")");
    timer=setTimeout("makeItMove('"+containerId+"','"+userActionId+"','"+textItemId+"',"+i+")",50);
    }
else
    if(i==endValue)
        {
        i=startValue;
        timer=setTimeout("makeItMove('"+containerId+"','"+userActionId+"','"+textItemId+"',"+i+")",50);
        }
     else
        {
        clearTimeout(timer);
        document.getElementById(textItemId).style.zIndex="11";
        document.getElementById(textItemId).style.position="absolute";
        document.getElementById(textItemId).style.top=17+"px";
        document.getElementById(textItemId).style.left=0+"px";
        document.getElementById(containerId).style.overflow="scroll";
        }
}
/*****/
