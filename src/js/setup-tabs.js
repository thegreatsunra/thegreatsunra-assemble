/* -------------------------------------------
JavaScript for thegreatsunra.com
Copyright (c) 2008-2013 Dane Petersen
Launched December 2008 as brainsideout.com
Relaunched February 2013 as thegreatsunra.com
------------------------------------------- */

// ------------------------
// Hide the non-active fragments, and make the fragment tabs work
// ------------------------
function setupTabs() {
	if ($('.fragment').length) $('.fragment').not(':first').hide();
	if ($('#fragment-tabs').length) $('#fragment-tabs > li:first').addClass("ui-tabs-selected");
	$('#fragment-tabs > li a').click(function(event) {
		link = $(this).attr("href");
		$('.fragment:visible').hide();
		$('#fragment-tabs li').removeClass("ui-tabs-selected");
		$(this).parent().addClass("ui-tabs-selected");
		$(link).show();
		event.preventDefault();
	});
}

// ------------------------
// Add events to DOM
// ------------------------
$(setupTabs);
