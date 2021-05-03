"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ModifyModal = exports.$DoneList = exports.$UsingList = exports.$TodoList = exports.$WriteForm = exports.$GridLayout = void 0;
var $GridLayout = "\n<div class=\"ui grid\">\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n</div>\n";
exports.$GridLayout = $GridLayout;
var $WriteForm = "\n<div class=\"form_area\">\n  <form class=\"ui form\">\n    <div class=\"field\">\n      <label>TITLE</label>\n      <input class=\"title_input\" type=\"text\" name=\"first-name\" placeholder=\"title\">\n    </div>\n    <div class=\"field\">\n      <label>Content</label>\n      <input class=\"content_input\" type=\"text\" name=\"last-name\" placeholder=\"content\">\n    </div>\n    <button class=\"ui primary button\" type=\"submit\">Submit</button>\n  </form>\n</div>\n";
exports.$WriteForm = $WriteForm;
var $TodoList = "\n<div class=\"kanban_board todo\">\n  <h2 class=\"ui header\">\n    <i class=\"keyboard icon\"></i>\n    <div class=\"content\">\n      TODO\n    </div>\n  </h2>\n  <div class=\"list_area\">\n    \n  </div>\n</div>\n";
exports.$TodoList = $TodoList;
var $UsingList = "\n<div class=\"kanban_board using\">\n  <h2 class=\"ui header\">\n    <i class=\"flask icon\"></i>\n    <div class=\"content\">\n      USING\n    </div>\n  </h2>\n  <div class=\"list_area\"></div>\n</div>\n";
exports.$UsingList = $UsingList;
var $DoneList = "\n<div class=\"kanban_board done\">\n  <h2 class=\"ui header\">\n    <i class=\"flag checkered icon\"></i>\n    <div class=\"content\">\n      DONE\n    </div>\n  </h2>\n  <div class=\"list_area\"></div>\n</div>\n";
exports.$DoneList = $DoneList;
var $ModifyModal = "\n  <div class=\"modal_contents\">\n    <button class=\"modal_close\"><i class=\"large grey white close icon link\"></i></button>\n    <h1 class=\"modal_header\">\uC218\uC815</h1>\n    <div class=\"modal_body\">\n      <form class=\"ui form\">\n        <div class=\"field\">\n          <label>TITLE</label>\n          <input class=\"title_input\" type=\"text\" name=\"first-name\" placeholder=\"title\">\n        </div>\n        <div class=\"field\">\n          <label>Content</label>\n          <input class=\"content_input\" type=\"text\" name=\"last-name\" placeholder=\"content\">\n        </div>\n      </form>\n    </div>\n    <div class=\"modal_footer\">\n      <button class=\"ui primary button\">\n        Save\n      </button>\n    </div>\n  </div>\n";
exports.$ModifyModal = $ModifyModal;