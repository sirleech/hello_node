About
-----

jsChessboard is a JavaScript library designed to programmatically display
chessboard diagrams in web pages or web applications.

The project is hosted at:

  http://jschessboard.com

jsChessboard is a free software and is released unter the terms of the GPL
version 3.0


Package content
---------------

 o chessboard.js
      the library script
 o chessboard.min.js
      the same script minified by jsmin
      (http://www.crockford.com/javascript/jsmin.html)
 o examples
      library code samples
 o doc
      the API documentation


Installation
------------

Just include the Javascript file in your HTML file. jsChessboard is a
stand-alone library and does not require any third party software.

  <script type="text/javascript" src="chessboard.min.js"></script>


Basic usage
-----------

Create a placeholder canvas tag to put the chessboard diagram in:

  <canvas id="mychessboard" width="400" height="400"></canvas>

The width and height attributes of the canvas should have the same value.

In a JavaScript function create a new game:

  game = Chessboard.newGame();

From that point there is some possibilities according to your goal:

 o some pieces can be moved:
      game.move("e4, e5, Nf3");

 o all pieces can be removed from the board:
      game.clear();

 o the chessboard can be drawn in the page:
      game.draw("mychessboard");

The comprehensive API documentation is available in the /doc directory of the
package.
