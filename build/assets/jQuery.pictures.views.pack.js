/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("(function ($) {\n\n    $.fn.viewsPictures = function (options) {\n\n        /*************************************\n            Options plugin..\n        *************************************/\n        var config = {\n            \"bgColor\": \"#BABABA\",\n            \"items\": \".picture\",\n            \"top\": \"20%\",\n            \"left\": \"20%\",\n            \"right\": \"20%\",\n            \"bottom\": \"20%\",\n            \"callback\": null\n        };\n        var params = $.extend(config, options);\n        /************************************/\n\n        /*************************************\n            Add background..\n        *************************************/\n        var block_background = '<div class=\"screen_bg\" style=\"background-color:' + config.bgColor + '\"></div>';\n        $('body').append(block_background);\n        /************************************/\n\n        /*************************************\n            Add block slide picture\n        *************************************/\n        var block_picture = '<div class=\"screen_root\"><div class=\"screen_nav_left\"></div><ul class=\"screen_block\"></ul><div class=\"screen_nav_right\"></div></div>';\n        $('body').append(block_picture);\n        /************************************/\n\n        return this.find('img').each(function (i, e) {\n\n            var d = i + 1;\n\n            $(this).attr('data-screen', d);\n\n            var src = $(e).attr('src');\n            var id = i + 1;\n\n            $(document).find('.screen_root').children('ul.screen_block').append('<li data-screen=\"' + d + '\" id=\"screen_' + id + '\" class=\"screen_list\"><img class=\"screen_img\" src=\"' + src + '\" /></li>');\n\n            $('#screen_picture').find('img').off('click').on('click', function () {\n\n                var c = $(this).attr('data-screen');\n\n                $('.screen_bg').fadeIn(300, function () {\n                    $('.screen_root').fadeIn(300, function () {\n                        $('ul.screen_block').children('li[data-screen=\"' + c + '\"]').slideDown(300);\n                    });\n                });\n            });\n\n            $(document).off('click', '.screen_bg').on('click', '.screen_bg', function () {\n                $('ul.screen_block').children('li').fadeOut(300, function () {\n                    $('.screen_root').fadeOut(300, function () {\n                        $('.screen_bg').fadeOut(300);\n                    });\n                });\n            });\n\n            $(document).off('click', '.screen_nav_right').on('click', '.screen_nav_right', function () {\n\n                var g = $('ul.screen_block').children('li:visible').attr('data-screen');\n                var o = parseInt(g) + 1;\n\n                $('ul.screen_block').children('li[data-screen=\"' + g + '\"]').slideUp(300);\n\n                if (o <= $('li.screen_list').length) {\n                    setTimeout(function () {\n                        $('ul.screen_block').children('li[data-screen=\"' + o + '\"]').slideDown(300);\n                    }, 400);\n                } else {\n                    setTimeout(function () {\n                        $('ul.screen_block').children('li:first').slideDown(300);\n                    }, 400);\n                }\n            });\n\n            $(document).off('click', '.screen_nav_left').on('click', '.screen_nav_left', function () {\n\n                var g = $('ul.screen_block').children('li:visible').attr('data-screen');\n                var o = parseInt(g) - 1;\n\n                $('ul.screen_block').children('li[data-screen=\"' + g + '\"]').slideUp(300);\n\n                if (o >= 1) {\n                    setTimeout(function () {\n                        $('ul.screen_block').children('li[data-screen=\"' + o + '\"]').slideDown(300);\n                    }, 400);\n                } else {\n                    setTimeout(function () {\n                        $('ul.screen_block').children('li:last').slideDown(300);\n                    }, 400);\n                }\n            });\n        });\n    };\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZXYvalF1ZXJ5LnBpY3R1cmVzLnZpZXdzLmpzPzg0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCAkICl7XG5cbiAgICAkLmZuLnZpZXdzUGljdHVyZXMgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgT3B0aW9ucyBwbHVnaW4uLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICB2YXIgY29uZmlnPSB7XG4gICAgICAgICAgICBcImJnQ29sb3JcIiAgIDogXCIjQkFCQUJBXCIsXG4gICAgICAgICAgICBcIml0ZW1zXCIgICAgICA6IFwiLnBpY3R1cmVcIixcbiAgICAgICAgICAgIFwidG9wXCIgICAgICAgOiBcIjIwJVwiLFxuICAgICAgICAgICAgXCJsZWZ0XCIgICAgICA6IFwiMjAlXCIsXG4gICAgICAgICAgICBcInJpZ2h0XCIgICAgIDogXCIyMCVcIixcbiAgICAgICAgICAgIFwiYm90dG9tXCIgICAgOiBcIjIwJVwiLFxuICAgICAgICAgICAgXCJjYWxsYmFja1wiICA6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhcmFtcyA9ICQuZXh0ZW5kKGNvbmZpZywgb3B0aW9ucyk7XG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgQWRkIGJhY2tncm91bmQuLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICB2YXIgYmxvY2tfYmFja2dyb3VuZCA9ICc8ZGl2IGNsYXNzPVwic2NyZWVuX2JnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29uZmlnLmJnQ29sb3IrJ1wiPjwvZGl2Pic7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoYmxvY2tfYmFja2dyb3VuZCk7XG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgQWRkIGJsb2NrIHNsaWRlIHBpY3R1cmVcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgdmFyIGJsb2NrX3BpY3R1cmUgPSc8ZGl2IGNsYXNzPVwic2NyZWVuX3Jvb3RcIj48ZGl2IGNsYXNzPVwic2NyZWVuX25hdl9sZWZ0XCI+PC9kaXY+PHVsIGNsYXNzPVwic2NyZWVuX2Jsb2NrXCI+PC91bD48ZGl2IGNsYXNzPVwic2NyZWVuX25hdl9yaWdodFwiPjwvZGl2PjwvZGl2Pic7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoYmxvY2tfcGljdHVyZSk7XG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmQoJ2ltZycpLmVhY2goZnVuY3Rpb24oaSwgZSl7XG5cbiAgICAgICAgICAgIHZhciBkID0gaSsxO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtc2NyZWVuJywgZClcblxuICAgICAgICAgICAgdmFyIHNyYyA9ICQoZSkuYXR0cignc3JjJyk7XG4gICAgICAgICAgICB2YXIgaWQgPSBpKzE7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5zY3JlZW5fcm9vdCcpLmNoaWxkcmVuKCd1bC5zY3JlZW5fYmxvY2snKS5hcHBlbmQoJzxsaSBkYXRhLXNjcmVlbj1cIicrZCsnXCIgaWQ9XCJzY3JlZW5fJytpZCsnXCIgY2xhc3M9XCJzY3JlZW5fbGlzdFwiPjxpbWcgY2xhc3M9XCJzY3JlZW5faW1nXCIgc3JjPVwiJytzcmMrJ1wiIC8+PC9saT4nKTtcblxuXG4gICAgICAgICAgICAkKCcjc2NyZWVuX3BpY3R1cmUnKS5maW5kKCdpbWcnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgIHZhciBjID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNjcmVlbicpO1xuXG4gICAgICAgICAgICAgICAgJCgnLnNjcmVlbl9iZycpLmZhZGVJbigzMDAsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zY3JlZW5fcm9vdCcpLmZhZGVJbigzMDAsIGZ1bmN0aW9uKCl7ICQoJ3VsLnNjcmVlbl9ibG9jaycpLmNoaWxkcmVuKCdsaVtkYXRhLXNjcmVlbj1cIicrYysnXCJdJykuc2xpZGVEb3duKDMwMCk7IH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgJy5zY3JlZW5fYmcnKS5vbignY2xpY2snLCAnLnNjcmVlbl9iZycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgndWwuc2NyZWVuX2Jsb2NrJykuY2hpbGRyZW4oJ2xpJykuZmFkZU91dCgzMDAsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zY3JlZW5fcm9vdCcpLmZhZGVPdXQoMzAwLCBmdW5jdGlvbigpeyAkKCcuc2NyZWVuX2JnJykuZmFkZU91dCgzMDApOyB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgJy5zY3JlZW5fbmF2X3JpZ2h0Jykub24oJ2NsaWNrJywgJy5zY3JlZW5fbmF2X3JpZ2h0JywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgIHZhciBnID0gJCgndWwuc2NyZWVuX2Jsb2NrJykuY2hpbGRyZW4oJ2xpOnZpc2libGUnKS5hdHRyKCdkYXRhLXNjcmVlbicpXG4gICAgICAgICAgICAgICAgdmFyIG8gPSBwYXJzZUludChnKSsxO1xuXG4gICAgICAgICAgICAgICAgJCgndWwuc2NyZWVuX2Jsb2NrJykuY2hpbGRyZW4oJ2xpW2RhdGEtc2NyZWVuPVwiJytnKydcIl0nKS5zbGlkZVVwKDMwMClcblxuICAgICAgICAgICAgICAgIGlmKCBvIDw9ICQoJ2xpLnNjcmVlbl9saXN0JykubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgJCgndWwuc2NyZWVuX2Jsb2NrJykuY2hpbGRyZW4oJ2xpW2RhdGEtc2NyZWVuPVwiJytvKydcIl0nKS5zbGlkZURvd24oMzAwKTsgfSw0MDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgJCgndWwuc2NyZWVuX2Jsb2NrJykuY2hpbGRyZW4oJ2xpOmZpcnN0Jykuc2xpZGVEb3duKDMwMCk7IH0sNDAwKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsICcuc2NyZWVuX25hdl9sZWZ0Jykub24oJ2NsaWNrJywgJy5zY3JlZW5fbmF2X2xlZnQnLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgdmFyIGcgPSAkKCd1bC5zY3JlZW5fYmxvY2snKS5jaGlsZHJlbignbGk6dmlzaWJsZScpLmF0dHIoJ2RhdGEtc2NyZWVuJylcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHBhcnNlSW50KGcpLTE7XG5cbiAgICAgICAgICAgICAgICAkKCd1bC5zY3JlZW5fYmxvY2snKS5jaGlsZHJlbignbGlbZGF0YS1zY3JlZW49XCInK2crJ1wiXScpLnNsaWRlVXAoMzAwKVxuXG4gICAgICAgICAgICAgICAgaWYoIG8gPj0gMSApe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ICQoJ3VsLnNjcmVlbl9ibG9jaycpLmNoaWxkcmVuKCdsaVtkYXRhLXNjcmVlbj1cIicrbysnXCJdJykuc2xpZGVEb3duKDMwMCk7IH0sNDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ICQoJ3VsLnNjcmVlbl9ibG9jaycpLmNoaWxkcmVuKCdsaTpsYXN0Jykuc2xpZGVEb3duKDMwMCk7IH0sNDAwKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcblxuICAgICAgIH0pO1xuXG5cblxuICAgIH1cblxufSkoIGpRdWVyeSApO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pRdWVyeS5waWN0dXJlcy52aWV3cy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);