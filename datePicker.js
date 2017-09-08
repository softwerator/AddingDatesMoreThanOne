/**
 * Created by burakcan.timucin on 7.9.2017.
 */

var i = 0;
var j = -1;
var dateToday = new Date();
var dates = $('input[name=from],input[name=to]').datepicker( {defaultDate: "+1w", changeMonth: true, numberOfMonths: 1, minDate: dateToday, dateFormat: 'mm/dd/yy',
    onSelect: function(selectedDate) {
        var option = this.id == "from" ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
        dates.not(this).datepicker("option", option, date);
    }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('span[name=datePickerParagraph]:last')

function addNewElements() {

    var from = $('input[name=from]').last().val().length;
    var to = $('input[name=to]').last().val().length
    var lastDateTimePickerParagraph = $('span[name=datePickerParagraph]:last');

    if (( from <= 0) && ( to <= 0)) {
        lastDateTimePickerParagraph.empty();
        lastDateTimePickerParagraph.append('<span class="label label-danger">' + '<strong>' + "Dikkat! " + '</strong>' + "Giriş ve çıkış tarihini boş bıraktınız." + '</span>');
    }
    else if (from <= 0) {
        lastDateTimePickerParagraph.empty();
        lastDateTimePickerParagraph.append('<span class="label label-danger">' + '<strong>' + "Dikkat! " + '</strong>' + "Giriş tarihini boş bıraktınız." + '</span>');
    }
    else if (to <= 0) {
        lastDateTimePickerParagraph.empty();
        lastDateTimePickerParagraph.append('<span class="label label-danger">' + '<strong>' + "Dikkat! " + '</strong>' + "Çıkış tarihini boş bıraktınız." + '</span>');
    }
    else {
        lastDateTimePickerParagraph.empty();
        if (i == i) {
            i++; j++;
            var aa = "#from" + i;
            var bb = "#to" + i;
            var $minDateVal = $("#to" + j);
            var f = $("#to").val();
            var f2 = $minDateVal.val();
            var firstVar = new Date(f);
            var firstVar2 = new Date(f2);
            firstVar.setDate(firstVar.getDate()+1);
            firstVar2.setDate(firstVar2.getDate()+1);
            $("#datePickerForm").append('<br/>' + '<br/>' + '<label for="from">' + "Giriş Tarihi: " + '</label>' + '  ' +
                '<input type="text" data-toggle="tooltip" id="' + "from" + i + '" name="from" title="Boş bırakmayın!" onchange="addNewElements()">');
            $("#datePickerForm").append('  ' + '<label for="to">' + " Çıkış Tarihi: " + '</label>' + ' ' +
                '<input type="text" data-toggle="tooltip" id="' + "to" + i + '" name="to" title="Boş bırakmayın!" onchange="addNewElements()">' + ' ');
            $("#datePickerForm").append('<span name="datePickerParagraph">' + '</span>');
            $('[data-toggle="tooltip"]').tooltip();
            if (i==1){
                var dates = $('#from1,#to1').datepicker( {defaultDate: "+1w", changeMonth: true, numberOfMonths: 1, minDate: firstVar, dateFormat: 'mm/dd/yy',
                    onSelect: function(selectedDate) {
                        var option = this.id == ("from" + i) ? "minDate" : "maxDate",
                            instance = $(this).data("datepicker"),
                            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                        dates.not(this).datepicker("option", option, date);
                    }
                });
            } else {
                var dates = $(aa + ", " + bb).datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1,
                    minDate: firstVar2,
                    dateFormat: 'mm/dd/yy',
                    onSelect: function (selectedDate) {
                        var option = this.id == ("from" + i) ? "minDate" : "maxDate",
                            instance = $(this).data("datepicker"),
                            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                        dates.not(this).datepicker("option", option, date);
                    }
                });
            }
        }
    }
}