﻿
var PageName = 'Student Life';
var PageId = 'be542f84c1d74adbb9034dd7f00a05f7'
var PageUrl = 'Student_Life.html'
document.title = 'Student Life';
var PageNotes = 
{
"pageName":"Student Life",
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
  value = value.replace(/\[\[GenDay\]\]/g, '23');
  value = value.replace(/\[\[GenMonth\]\]/g, '2');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'February');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Thursday');
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

var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

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

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
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

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
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
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

if (window.OnLoad) OnLoad();
