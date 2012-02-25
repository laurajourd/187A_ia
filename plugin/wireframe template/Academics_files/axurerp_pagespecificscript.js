
var PageName = 'Academics';
var PageId = '9d3641f5c5434be2a233ce0b588901c8'
var PageUrl = 'Academics.html'
document.title = 'Academics';
var PageNotes = 
{
"pageName":"Academics",
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
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
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

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clickub4385c36f88f47f6af7228e9ba21f735(event)'>Case 1</div>");
function u44Clickub4385c36f88f47f6af7228e9ba21f735(e)
{

	self.location.href="About_UL_Lafayette.html" + GetQuerystring();

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clickua6b34bd3ac244d74bb7352718c5a738c(event)'>Case 2</div>");
function u44Clickua6b34bd3ac244d74bb7352718c5a738c(e)
{

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clickuf35a5febb9004e18ab10b1a3d8b91a87(event)'>Case 3</div>");
function u44Clickuf35a5febb9004e18ab10b1a3d8b91a87(e)
{

	self.location.href="#" + GetQuerystring();

	self.location.href="Research.html" + GetQuerystring();

	ToggleLinks(e, 'u44LinksClick');
}

InsertBeforeEnd(u44LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u44Clickue5be8e91482a470aa994457b26f39a71(event)'>Case 4</div>");
function u44Clickue5be8e91482a470aa994457b26f39a71(e)
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
