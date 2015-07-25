/**
 * 
 */
(function($) {
	$.fn.canvas = function(options) {
		var $main = this;
		var temp = this.html();
		this.html('');
		$main.addClass("ui-canvas");

		$(
				"<div class='ui-canvas-sidebar-wrapper'><span class='ui-canvas-sidebar'>Canvas</span></div>")
				.appendTo($main);

		$("<div>").addClass("ui-canvas-header").appendTo($main);

		$("<div>").addClass("ui-canvas-container").appendTo($main);

		var container = $('.ui-canvas-container', $main);
		var sidebar = $('.ui-canvas-sidebar-wrapper', $main);
		var header = $('.ui-canvas-header', $main);

		container.html(temp);
		var settings = $.extend({
			width : "100px",
			height : "100px",
			backgroundColor : "#EAEAEA"
		}, options);

		init = function() {
			toolsbar(header);
			fixDimention();

		};

		toolsbar = function(toolbar) {
			var table = $('<table></table>').addClass('toolbar-buttons');
			var tr = $('<tr></tr>');

			for ( var i = 1; i < 2; i++) {
				var td = $('<td></td>');
				td.html("B");
				td.bind('click', toolbarButtonBold);
				tr.html(td);
			}

			table.append(tr);
			toolbar.html(table);
		};

		toolbarButtonBold = function() {
			alert('bold');
		};

		fixDimention = function() {
			$main.css("width", settings.width);
			$main.css("height", settings.height);

			header.css("width", $main.width() - sidebar.height());
			header.css("left", sidebar.width());

			container.css("width", $main.width() - sidebar.height());
			container.css("height", $main.height() - header.height() - 3);
		};

		var getSelectedText = function() {
			if (window.getSelection) {
				return window.getSelection().toString();
			} else if (document.getSelection) {
				return document.getSelection();
			} else if (document.selection) {

				return document.selection.createRange().text;
			}
		}

		var test = function() {
			container.on("mouseup", function() {
				selection = getSelectedText();
				if (selection.length >= 3) {
					console.log($(this))
					/*
					 * $(this).html( $(this).html().replace(selection, $('<\/span>').attr({
					 * 'class' : 'hl' }).html(selection).parent().html()));
					 */
					alert(selection);
				}
			});
		};

		isEditable = function() {
			return container.is('.editable');
		};

		editable = function() {
			container.prop('contenteditable', true);
			container.removeClass('readonly');
			container.addClass('editable');
		};

		readonly = function() {
			container.prop('contenteditable', false);
			container.removeClass('editable');
			container.addClass('readonly');
		};

		init();

		/*
		 * container.on('focusout', function() { readonly(); });
		 * 
		 * container.on('click', function() { editable(); });
		 */

		container.prop('contenteditable', true); // must be removed later.

		test();

		return this;
	};
}(jQuery));
