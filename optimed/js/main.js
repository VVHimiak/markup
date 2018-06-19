"use strict";
jQuery(function ($) {

// ----------------------------datepicker - start
    $( function() {
        $( ".datepicker" ).datepicker({
            showOn: "button",
            buttonImage: "img/datepicker-img.png",
            buttonImageOnly: true,
            buttonText: "Выберите дату"
        });
        $.datepicker.regional['ru'] = {
            monthNames: ['Яварь', 'Февраль', 'Март', 'Апрель',
                'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
                'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            firstDay: 1
        };
        $.datepicker.setDefaults(
            $.extend(
                {'dateFormat':'dd.mm.yy'},
                $.datepicker.regional['ru']
            )
        );
    } );
// datepicker - end

// ----------------------------open and close tables - start
    $(document).click(function(e) {
        var arrowListParent = $('.list-value__content--title-wrapper');
        var arrowList = $('.list-value__content--title-arrow');

        var arrowNewEventDistributorParent = $('.distributor__content .title-wrapper');
        var arrowNewEventDistributor = $('.distributor__content .title-arrow');
        var arrowNewEventDillerParent = $('.diller__content .title-wrapper');
        var arrowNewEventDiller = $('.diller__content .title-arrow');
        var arrowNewEventPersonParent = $('.person__content .title-wrapper');
        var arrowNewEventPerson = $('.person__content .title-arrow');



        if (arrowListParent.is(e.target)) {
            $(this).find('.list-value__content--title-arrow').toggleClass('arrow-down');
            $('.list-value-wrapper').slideToggle(300);
        }
        if (arrowList.is(e.target)) {
            arrowList.toggleClass('arrow-down');
            $('.list-value-wrapper').slideToggle(300);
        }



        if (arrowNewEventDistributorParent.is(e.target)) {
            $(this).find('.distributor__content .title-arrow').toggleClass('arrow-down');
            $('.distributor-wrapper').slideToggle(300);
        }
        if (arrowNewEventDistributor.is(e.target)) {
            arrowNewEventDistributor.toggleClass('arrow-down');
            $('.distributor-wrapper').slideToggle(300);
        }

        if (arrowNewEventDillerParent.is(e.target)) {
            $(this).find('.diller__content .title-arrow').toggleClass('arrow-down');
            $('.diller-wrapper').slideToggle(300);
        }
        if (arrowNewEventDiller.is(e.target)) {
            arrowNewEventDiller.toggleClass('arrow-down');
            $('.diller-wrapper').slideToggle(300);
        }

        if (arrowNewEventPersonParent.is(e.target)) {
            $(this).find('.person__content .title-arrow').toggleClass('arrow-down');
            $('.person-wrapper').slideToggle(300);
        }
        if (arrowNewEventPerson.is(e.target)) {
            arrowNewEventPerson.toggleClass('arrow-down');
            $('.person-wrapper').slideToggle(300);
        }
    });

//open and close tables - end


    var ci = 1;

    function addContent() {
        //console.log($(this).closest('.add-card__content--step').index());

        $(this).closest('.add-card__content--step').after(forNew);
        $(this).closest('.add-card__content--step').next().append($(this).prev());

        $(this).closest('.add-card__content--step').next().append($(this));
        $(this).closest('.add-card__content--step').prev().append($(this).prev().clone());
        $(this).closest('.add-card__content--step').prev().find($('.add-trash-contact')).click(removeContent);
        $(this).closest('.add-card__content--step').find('.add-card__content-title--number-contact').text($(this).closest('.contact-face').index() - 4);
        console.log($('.contact-face').eq(5));
        ++ci;



        console.log($(this).closest('.add-card__content--step').index());
    }

    function removeContent(){
        //console.log($('.add-card__content--step').index());
        if(ci > 1 ) {
            $(this).closest('.add-card__content--step').prev().append($(this).next());

            //$(this).closest('.add-card__content--step').find('.add-card__content-title--number-contact').text($(this).closest('.contact-face').index());

            $(this).closest('.add-card__content--step').siblings().find('.add-card__content-title--number-contact').text();

            $(this).closest('.add-card__content--step').remove();

            --ci;
        }


    }


    $('.add-new-contact').click(addContent);
    $('.add-trash-contact').click(removeContent);

    var forNew = '<div class="add-card__content--step contact-face">\n' +
        '                <h3 class="add-card__content-title">Контактное лицо<span class="add-card__content-title--number-contact"></span>:</h3>\n' +
        '                <div class="add-card__content-inputs">\n' +
        '\n' +
        '                    <input class="add-card__content-input" type="text" placeholder="Менеджер по продажам">\n' +
        '\n' +
        '                    <input class="add-card__content-input" type="text" placeholder="info@medicom.ru">\n' +
        '\n' +
        '                    <input class="add-card__content-input" type="text" placeholder="+789 093 233 43 34">\n' +
        '                </div>\n' +
        '            </div>';




    //$('.nice-select').niceSelect();

// ----------------------------set equal width - start
    /*var widest = 0;

    $(".add-card__content-title").each(function () {
        widest = Math.max(widest, $(this).outerWidth());
    }).width(widest);*/

// set equal width - end


    /*
    $(document).click(function(e) {
        var tableDistributer = $('.list-value-distributor__content-table--tr');

        if (!tableDistributer.is(e.target) && tableDistributer.has(e.target).length === 0) {
            $('.list-value-distributor__content-table--tr .table-number').removeClass('active');
        }

        var tableDiller = $('.list-value-diller__content-table--tr');

        if (!tableDiller.is(e.target) && tableDiller.has(e.target).length === 0) {
            $('.list-value-diller__content-table--tr .table-number').removeClass('active');
        }

        var tableLpy = $('.list-value-lpy__content-table--tr');

        if (!tableLpy.is(e.target) && tableLpy.has(e.target).length === 0) {
            $('.list-value-lpy__content-table--tr .table-number').removeClass('active');
        }

    });*/
// ----------------------------table-distributer-tr-active - end
// ----------------------------table-diller-tr-active - end
// ----------------------------table-lpy-tr-active - end





// ----------------------------table-distributer-tr-active - start

    /*
    $('.list-value-distributor__content-table--tr').click(function () {
        $(this).find('.table-number').toggleClass('active');
        $('.list-value-distributor__content-table--tr').not(this).find('.table-number').removeClass('active');
    });
    // table-distributer-tr-active - end

    // ----------------------------table-diller-tr-active - start

    $('.list-value-diller__content-table--tr').click(function () {
        $(this).find('.table-number').toggleClass('active');
        $('.list-value-diller__content-table--tr').not(this).find('.table-number').removeClass('active');
    });
    // table-diller-tr-active - end

    // ----------------------------table-lpy-tr-active - start

    $('.list-value-lpy__content-table--tr').click(function () {
        $(this).find('.table-number').toggleClass('active');
        $('.list-value-lpy__content-table--tr').not(this).find('.table-number').removeClass('active');
    });
    // table-diller-tr-active - end

    */

});
