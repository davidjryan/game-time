/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const style = __webpack_require__(1);
	const Game = __webpack_require__(6);

	let canvas = document.getElementById('canvas');
	let context = canvas.getContext('2d');

	let startButton = document.querySelector('.start-button');
	let easyButton = document.querySelector('.easy-button');
	let hardButton = document.querySelector('.hard-button');
	let toggleAudioButton = document.querySelector('.toggle-audio-button');
	let backgroundMusic = document.querySelector('.background-music');

	let highScore = getScoreFromLocalStorage('highScore');

	startButton.addEventListener('click', startButtonPush);
	hardButton.addEventListener('click', hardButtonPush);
	easyButton.addEventListener('click', easyButtonPush);
	toggleAudioButton.addEventListener('click', toggleAudioButtonPush);

	document.addEventListener('keydown', keyPush);

	let game = new Game(context, canvas);
	let interval;

	updateHighScoreHTML();

	function startButtonPush() {
	  interval = setInterval(gameLoop, 1000 / game.speed);
	  removeButton(startButton);
	}

	function easyButtonPush() {
	  game = new Game(context, canvas);
	  // remove easy && hard button
	  removeButton(easyButton);
	  removeButton(hardButton);
	  // show start button
	}

	function hardButtonPush() {
	  removeButton(easyButton);
	  removeButton(hardButton);
	  showButton(startButton);
	  game = new Game(context, canvas);
	  game.changeDifficulty();
	  // remove easy && hard button
	  // show start button
	}

	function toggleAudioButtonPush() {
	  let icon = document.querySelector('.audio-button-icon');

	  if (backgroundMusic.muted) {
	    backgroundMusic.muted = false;
	    icon.src = 'lib/assets/img/icon-pixel-sound.svg';
	  } else {
	    backgroundMusic.muted = true;
	    icon.src = 'lib/assets/img/icon-pixel-mute.svg';
	  }
	}

	function removeButton(button) {
	  button.style.display = 'none';
	}

	function showButton(button) {
	  button.style.display = 'inline';
	}

	function gameLoop() {
	  displayScore();
	  if (game.snake.alive === true) {
	    game.run();
	  } else {
	    gameOver();
	  }
	}

	function keyPush(e) {
	  switch (e.keyCode) {
	    case 37:
	      game.snake.moveLeft();
	      break;
	    case 38:
	      game.snake.moveUp();
	      break;
	    case 39:
	      game.snake.moveRight();
	      break;
	    case 40:
	      game.snake.moveDown();
	      break;
	  }
	}

	function gameOver() {
	  clearInterval(interval);

	  if (game.score > highScore) {
	    setScoreInLocalStorage('highScore', game.score);
	    setHighScore();
	  }
	  showButton(easyButton);
	  showButton(hardButton);
	}

	function setHighScore() {
	  highScore = getScoreFromLocalStorage('highScore');
	}

	function displayScore() {
	  updateLocalScoreHTML();
	  updateHighScoreHTML();
	}

	function updateLocalScoreHTML() {
	  let localScore = document.querySelector('.scoreboard-local');
	  localScore.innerText = `SCORE: ${game.score}`;
	}

	function updateHighScoreHTML() {
	  let globalHighScore = document.querySelector('.scoreboard-high-score');
	  globalHighScore.innerText = `HIGH SCORE: ${highScore}`;
	}

	function setScoreInLocalStorage(key, score) {
	  localStorage.setItem(key, JSON.stringify(score));
	}

	function getScoreFromLocalStorage(key) {
	  return JSON.parse(localStorage.getItem(key));
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Unibody';\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../Unibody8Pro-Regular.otf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n}\n\n* {\n  margin: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: 'Unibody';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #69677c;\n}\n\n.start-button,\n.easy-button,\n.hard-button,\n.toggle-audio-button {\n  border: none;\n  background-color: Transparent;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.nokia-logo {\n  height: 100px;\n}\n\n.start-button {\n  display: none;\n}\n\n.audio-button-icon {\n  height: 25px;\n}\n\n.button-icon {\n  height: 25px;\n}\n\n\n\ncanvas {\n  margin-top: 100px;\n  width: 40%;\n  height: 40%;\n  background-color: #9ecfb1;\n  align-self: center;\n}\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	const Snake = __webpack_require__(7);
	const Apple = __webpack_require__(9);

	class Game {

	  constructor(context, canvas) {
	    this.difficulty = false, this.speed = 15, this.score = 0, this.scoreIncrement = 10, this.grid = 30, this.snake = new Snake(), this.apple = new Apple(), this.context = context, this.canvas = canvas;
	  }

	  run() {
	    this.erase();
	    this.snake.changeDirection();
	    this.difficultyState(this.snake);
	    this.snake.draw(this.context);
	    this.snake.manageTail();
	    this.snake.checkApple(this.apple);
	    this.apple.draw(this.context);
	    this.snake.checkSelf();
	    this.updateScore();
	  }

	  erase() {
	    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  }

	  changeDifficulty() {
	    this.difficulty = !this.difficulty;
	  }

	  difficultyState() {
	    if (!this.difficulty) {
	      if (this.snake.xPosition < 0) {
	        this.snake.xPosition = this.grid - 1;
	      }
	      if (this.snake.xPosition > this.grid - 1) {
	        this.snake.xPosition = 0;
	      }
	      if (this.snake.yPosition < 0) {
	        this.snake.yPosition = this.grid - 1;
	      }
	      if (this.snake.yPosition > this.grid - 1) {
	        this.snake.yPosition = 0;
	      }
	    } else {
	      this.speed = 22;
	      this.scoreIncrement = 30;
	      if (this.snake.xPosition < 0) {
	        this.snake.death();
	      }
	      if (this.snake.xPosition > this.grid - 1) {
	        this.snake.death();
	      }
	      if (this.snake.yPosition < 0) {
	        this.snake.death();
	      }
	      if (this.snake.yPosition > this.grid - 1) {
	        this.snake.death();
	      }
	    }
	  }

	  updateScore() {
	    this.score = (this.snake.tail - 4) * this.scoreIncrement;
	    return this.score;
	  }

	}

	module.exports = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	const Segment = __webpack_require__(8);
	const game = __webpack_require__(6);

	class Snake extends Segment {
	  constructor() {
	    super();

	    this.color = '#222d24';
	    this.xVelocity = 1;
	    this.yVelocity = 0;

	    this.tail = 4;
	    this.trail = [];

	    this.alive = true;
	  }

	  draw(context) {
	    for (let i = 0; i < this.trail.length; i++) {
	      context.fillStyle = this.color;
	      context.fillRect(this.trail[i].x * 30, this.trail[i].y * 30, 30 - 2, 30 - 2);
	    }
	  }

	  changeDirection() {
	    this.xPosition += this.xVelocity;
	    this.yPosition += this.yVelocity;
	  }

	  moveLeft() {
	    if (this.xVelocity !== 1) {
	      this.xVelocity = -1;
	      this.yVelocity = 0;
	    }
	  }

	  moveRight() {
	    if (this.xVelocity !== -1) {
	      this.xVelocity = 1;
	      this.yVelocity = 0;
	    }
	  }

	  moveUp() {
	    if (this.yVelocity !== 1) {
	      this.yVelocity = -1;
	      this.xVelocity = 0;
	    }
	  }

	  moveDown() {
	    if (this.yVelocity !== -1) {
	      this.yVelocity = 1;
	      this.xVelocity = 0;
	    }
	  }

	  manageTail() {
	    this.trail.push({ x: this.xPosition, y: this.yPosition });
	    while (this.trail.length > this.tail) {
	      this.trail.shift();
	    }
	  }

	  checkApple(apple) {
	    if (apple.xPosition == this.xPosition && apple.yPosition == this.yPosition) {
	      this.tail++;
	      apple.generateRandomLocation();
	    }
	  }

	  collision(ele) {

	    return ele.x === this.trail[0].x && ele.y === this.trail[0].y;
	  }

	  checkSelf() {

	    const headless = this.trail.slice(1, this.trail.length);

	    if (headless.some(this.collision.bind(this))) {
	      this.death();
	    }
	  }

	  death() {
	    this.xPosition = 15;
	    this.yPosition = 14;
	    this.alive = false;
	  }
	}

	module.exports = Snake;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	class Segment {
	  constructor() {
	    this.xPosition = 0;
	    this.yPosition = 0;

	    this.width = 28;
	    this.height = 28;
	  }
	}

	module.exports = Segment;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	const Segment = __webpack_require__(8);

	class Apple extends Segment {
	  constructor() {
	    super();

	    this.xPosition = 15;
	    this.yPosition = 15;
	    // this.yPosition = Math.floor((Math.random() * 30));
	  }

	  generateRandomLocation() {
	    this.xPosition = Math.floor(Math.random() * 30);
	    this.yPosition = Math.floor(Math.random() * 30);
	  }

	  draw(context) {
	    context.fillStyle = 'red';
	    context.fillRect(this.xPosition * 30, this.yPosition * 30, this.width, this.height);
	  }
	}

	module.exports = Apple;

/***/ })
/******/ ]);