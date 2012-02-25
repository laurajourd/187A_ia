
var PageName = 'Research';
var PageId = 'db7bbe2a06674de686d25ee582bce9ca'
var PageUrl = 'Research.html'
document.title = 'Research';
var PageNotes = 
{
"pageName":"Research",
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

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
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
gv_vAlignTable['u42'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u45 = document.getElementById('u45');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", u44Click);
else u44.addEventListener("click", u44Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u44LinksClick'></DIV>")
var u44LinksClick = document.getElementById('u44LinksClick');
function u44Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clicku2935256a660b49ce98a01c58d302ada5(event)'>Case 1</div>");
function u44Clicku2935256a660b49ce98a01c58d302ada5(e)
{

	self.location.href="About_UL_Lafayette.html" + GetQuerystring();

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clicku1008d39a727a47c6b42758ad570d10ee(event)'>Case 2</div>");
function u44Clicku1008d39a727a47c6b42758ad570d10ee(e)
{

	self.location.href="Academics.html" + GetQuerystring();

	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clicku72002497e8dd4fc9a2d2f496a153fc53(event)'>Case 3</div>");
function u44Clicku72002497e8dd4fc9a2d2f496a153fc53(e)
{

	self.location.href="#" + GetQuerystring();

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clickued8b8651af7c43c4b5d708e2634dbd92(event)'>Case 4</div>");
function u44Clickued8b8651af7c43c4b5d708e2634dbd92(e)
{

	self.location.href="#" + GetQuerystring();

	self.location.href="Campus_Life.html" + GetQuerystring();

	ToggleLinks(e, 'u44LinksClick');
}
gv_vAlignTable['u44'] = 'top';
var u48 = document.getElementById('u48');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');

var u49 = document.getElementById('u49');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
if (window.OnLoad) OnLoad();
