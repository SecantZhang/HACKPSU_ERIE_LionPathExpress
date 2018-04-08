/**
 * Reach the element. 
 */
var schedule_show = document.getElementsByClassName("schedule-show");
var row_section = schedule_show[0].getElementsByClassName("row section-grid-row hidden-sm hidden-xs show-for-print");
var first_tag = row_section[0].getElementsByTagName("div");
var classwithintag = first_tag[0].getElementsByClassName("section-detail-grid table-bordered-wrap");
var tbodytag = classwithintag[0].getElementsByTagName("tbody");
var actual_content = tbodytag[0].getElementsByClassName("section-item section");
alert(actual_content[0].innerHTML);

/**
 * Need: Subject, Course, Weekday, Time, Location.
 */
var subject_ary = new Array(), course_ary = new Array(), weekday_ary = new Array(), time_ary = new Array(), loc_ary = new Array();
//loop based on number of sections. 
for (var k = 0; k < actual_content.length; k++) {
    var row_label = actual_content[k].getElementsByClassName(" row-label");
    for (var i = 0; i < row_label.length; i++) {
        if (row_label[i].className == ' row-label') {
            switch (i) {
                case 1: { 
                    alert(row_label[i+1].innerText);
                    subject_ary.push(row_label[i+1].innerText);
                    break;
                }
                case 2: {
                    alert(row_label[i+1].innerText);
                    course_ary.push(row_label[i].innerText);
                    break;
                }
                case 6: {
                    var row_label_innerTag_div = row_label[i+1].getElementsByTagName("div");
                    alert("!" + row_label_innerTag_div[0].innerText);
                    time_ary.push(row_label_innerTag_div[0].innerText);
                    var row_label_innerClass = row_label_innerTag_div[0].getElementsByTagName("span");
                    var stringbuilder = "";
                    for (var j = 0; j < row_label_innerClass.length; j++) {
                        var temp = "" + row_label_innerClass[j].innerText;
                        stringbuilder += temp;
                    }
                    alert(stringbuilder);
                    weekday_ary.push(stringbuilder);
                    break;
                }
            }
        }
    }
}

