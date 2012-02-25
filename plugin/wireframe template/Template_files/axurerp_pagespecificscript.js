﻿
var PageName = 'Template';
var PageId = 'ec60b7537c8649f79c72e459d46d2fc8'
var PageUrl = 'Template.html'
document.title = 'Template';
var PageNotes = 
{
"pageName":"Template",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '24');
  value = value.replace(/\[\[GenMonth\]\]/g, '2');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'February');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u45 = document.getElementById('u45');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", u43Click);
else u43.addEventListener("click", u43Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u43LinksClick'></DIV>")
var u43LinksClick = document.getElementById('u43LinksClick');
function u43Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u43LinksClick');
}

InsertBeforeEnd(u43LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u43Clickubc8f34e4c5ae48658a97696a6d406167(event)'>Case 1</div>");
function u43Clickubc8f34e4c5ae48658a97696a6d406167(e)
{

	self.location.href="About_UL_Lafayette.html" + GetQuerystring();

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u43LinksClick');
}

InsertBeforeEnd(u43LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u43Clicku1a7a904c97c446869a45df4e5ebf047d(event)'>Case 2</div>");
function u43Clicku1a7a904c97c446869a45df4e5ebf047d(e)
{

	self.location.href="Academics.html" + GetQuerystring();

	ToggleLinks(e, 'u43LinksClick');
}

InsertBeforeEnd(u43LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u43Clicku73d0fdef754f408a83ec81da0aeb949d(event)'>Case 3</div>");
function u43Clicku73d0fdef754f408a83ec81da0aeb949d(e)
{

	self.location.href="#" + GetQuerystring();

	self.location.href="Research.html" + GetQuerystring();

	ToggleLinks(e, 'u43LinksClick');
}

InsertBeforeEnd(u43LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u43Clicku73c1e94d74234fbdbdb6441ca7fc86a5(event)'>Case 4</div>");
function u43Clicku73c1e94d74234fbdbdb6441ca7fc86a5(e)
{

	self.location.href="#" + GetQuerystring();

	self.location.href="Campus_Life.html" + GetQuerystring();

	ToggleLinks(e, 'u43LinksClick');
}
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u48 = document.getElementById('u48');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
if (window.OnLoad) OnLoad();
