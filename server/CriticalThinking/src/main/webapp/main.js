(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-author/about-author.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-author/about-author.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n   <body>\n     <div class=\"container\">\n    <p>Ivan Kovač, nastavnik filozofije i novinar. Živi i radi u Bečeju.</p>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-text/add-text.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-text/add-text.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n  </head>\n  <body>\n    <div class= \"container\">\n      <h1>Dodaj novi tekst</h1>\n        <form id =\"form\" (ngSubmit) = \"createArticle()\">\n\n          <label for =\"title\">Naslov</label><br>\n          <input name=\"title\" maxlength=\"100\"[(ngModel)] = \"newArticle.title\"/> <br> <br>\n            <div class = \"alert\" *ngIf=\"!newArticle.title\">\n              *Naslov je obavezan.\n            </div>\n\n            <label for=\"category\">Odaberi kategoriju</label><br>\n            <select name=\"category\" id=\"category\" [(ngModel)]=\"newArticle.category\">\n              <option>{{choose}}</option>\n              <option *ngFor=\"let c of categories\" [ngValue]=\"c\">{{c.name}}</option>\n            </select><br /><br />\n              <div class = \"alert\" *ngIf=\"!newArticle.category.name\">\n              *Kategorija je obavezna.\n              </div>\n\n              <label for=\"video\">Da li članak ima video zapis?</label><br>\n              <select name=\"category\" id=\"category\" [(ngModel)]=\"newArticle.withVideo\">\n                <option [ngValue]=\"true\">Da</option>\n                <option [ngValue]=\"false\">Ne</option>\n              </select><br /><br />\n\n                <label for =\"mainImg\">Url slike ili videa</label><br>\n                <input name =\"mainImg\" [(ngModel)] = \"newArticle.mainImage\"/><br> <br>\n                  <div class = \"alert\" *ngIf=\"!newArticle.mainImage\">\n                  *Url slike ili videa je obavezan.\n                  </div>\n\n            <label for =\"text\">Sadržaj</label><br>\n            <textarea name=\"text\" id = \"big\" rows=\"20\" cols=\"50\"[(ngModel)] = \"newArticle.text\"></textarea><br /><br />\n\n            <label for =\"text\">Opis</label><br>\n            <textarea name=\"description\" id =\"description\" maxlength=\"200\" [(ngModel)] = \"newArticle.description\"></textarea><br /><br />\n\n            <div id = \"save\">\n              <button id = \"save\" *ngIf= \"newArticle.title && newArticle.mainImage  && newArticle.category.name\" type = \"submit\" id = \"submit\"><i class=\"fa fa-save\"></i>&nbsp;&nbsp;Sačuvaj</button>\n            </div>\n        </form>\n        <div class = \"list\">\n          <ul>\n            <li (click)=\"goToUnpublished()\" >Neobjavljeni tekstovi</li>\n            <li (click)=\"goToPublished()\">Objavljeni tekstovi</li>\n          </ul>\n        </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    Svi Tekstovi\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n  </head>\n  <body>\n      <div class = \"list\">\n        <ul>\n          <li [routerLink]= \"['/admin/neobjavljeni_tekstovi']\" >Neobjavljeni tekstovi</li>\n          <li [routerLink]= \"['/admin/dodaj_tekst']\"><i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Dodaj novi tekst</li>\n          <li (click) = \"logout()\">Logout</li>\n        </ul>\n        </div>\n        <h1>Objavljeni tekstovi</h1>\n      <table id = \"table\" class=\"table\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Naslov</th>\n            <th>Opis</th>\n            <th>Kategorija</th>\n            <th>Datum</th>\n            <th>Akcija</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let article of articles\">\n            <td>{{article.id}}</td>\n            <td>{{article.title}}</td>\n            <td>{{article.description}}</td>\n            <td>{{article.category.name}}</td>\n            <td>{{article.publicationDate | date}}</td>\n            <td ><div (click) = \"deleteArticle(article.id)\" id = \"action\"><i class=\"fa fa-trash-o\" style=\"font-size:24px\"></i>&nbsp;<h5>Obriši</h5></div>\n              <div *ngIf = \"article.published == true\" [routerLink]= \"['/tekst', article.id]\" id = \"action\"><i class = \"fa fa-book\" style=\"font-size:24px\"></i>&nbsp;<h5>Pročitaj</h5></div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Critical Thinking</title>\n\t<meta name=\"description\" content=\"Critical Thinking\">\n\t<meta name=\"author\" content=\"Kristina Nikolic\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap\" rel=\"stylesheet\">\n</head>\n\n<body>\n\n  <div id=\"fb-root\"></div>\n  <script async defer crossorigin=\"anonymous\" src=\"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0\"></script>\n\n  <!--page width smaller than 1366px-->\n<nav id = \"nav-smaller\">\n  <ul>\n    <li><a [routerLink]= \"['o_autoru']\"><div class = \"underlined\">O autoru</div></a></li>\n    <li><a (click)= \"toggle()\" style=\"cursor: pointer;\"><div class = \"underlined\">Kategorije</div></a></li>\n  </ul>\n</nav>\n\n<nav id = \"menu\">\n  <button id = \"close\" (click)= \"toggle()\">Zatvori</button>\n    <ul *ngFor = \"let c of categories\">\n      <li><a [routerLink]= \"['/tekstovi/kategorija/'+c.id+'/stranica/'+1]\" (mouseup)=\"toggle()\">{{c.name}}</a></li>\n    </ul>\n     <ul>\n      <li> <a> <div class=\"search-container\">\n        <form>\n          <input type=\"text\" placeholder=\"Pretraga..\" name=\"search\" [(ngModel)]= \"keyWord\">\n            <button type=\"submit\" (click) = \"search()\" id = \"search\" (mouseup)=\"toggle()\"><i class=\"fa fa-search\" ></i></button>\n        </form>\n      </div></a></li></ul>\n</nav>\n<!--page width smaller than 1366px-->\n\n\n<!-- header -->\n  <header>\n    <nav id = \"nav-first\">\n      <div id=\"search-container\">\n        <form>\n          <input type=\"text\" placeholder=\"Pretraga..\" name=\"search\" [(ngModel)]= \"keyWord\">\n          <button type=\"submit\" (click) = \"search()\"><i class=\"fa fa-search\"></i></button>\n        </form>\n      </div>\n      <ul>\n        <li><a href = \"https://www.facebook.com/kole1982/\" title=\"Facebook\"><div class = \"underlined\"><i class=\"fa fa-facebook\"></i></div></a></li>\n        <li><a [routerLink]= \"['kurs']\"><div class = \"underlined\">Kurs</div></a></li>\n        <li><a [routerLink]= \"['o_autoru']\"><div class = \"underlined\">O autoru</div></a></li>\n      </ul>\n    </nav>\n    <div class = \"logo\">\n      <img src=\"assets/images/logo-gif.gif\" (click) = \"navigateToMain()\">\n    </div>\n    <nav class = \"nav-second\">\n      <ul *ngFor = \"let c of firstNavCategories\">\n        <li><a [routerLink]= \"['/tekstovi/kategorija/'+c.id]\"><div class = \"underlined\">{{c.name}}</div></a></li>\n      </ul>\n    </nav>\n    <nav class = \"nav-second\" id = \"second\">\n      <ul *ngFor = \"let c of secondNavCategories\">\n        <li><a [routerLink]= \"['/tekstovi/kategorija/'+c.id]\"><div class = \"underlined\">{{c.name}}</div></a></li>\n      </ul>\n    </nav>\n  </header>\n<!-- /header -->\n\n\n<!--page width smaller than 599px-->\n<div id = \"logo-smaller\">\n  <img src=\"assets/images/logo-smaller.gif\" (click) = \"navigateToMain()\">\n</div>\n<!--page width smaller than 599px-->\n\n<router-outlet (activate)=\"onActivate($event)\" ></router-outlet>\n\n<!--footer-->\n  <footer>\n    <div class = \"footer-content\">\n      <div class=\"footer-section contact\">\n        <div class =\"text\">Kontakt</div>\n         <span><i class = \"fa fa-envelope\"> </i> &nbsp; E-mail: kole1982@yahoo.com </span>\n      </div>\n      <div class=\"footer-section links\">\n        <ul>\n          <li><a [routerLink]= \"['početna']\">Početna</a></li>\n          <li><a [routerLink]= \"['kurs']\">Kurs</a></li>\n          <li><a [routerLink]= \"['o_autoru']\">O autoru</a></li>\n        </ul>\n      </div>\n      <div class=\"footer-section facebook\">\n        <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkole1982%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\" data-adapt-container-width=\"true\"></iframe>\n      </div>\n    </div>\n\n    <div class = \"footer-bottom\">\n      &copy; Designed by Kristina Nikolic\n    </div>\n  </footer>\n<!--footer-->\n</body>\n</html>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course/course.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course/course.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n  </head>\n  <body>\n    <div id  = \"center\">\n      <h1>Stranica je trenutno u pripremi!</h1>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-text/edit-text.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-text/edit-text.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n  </head>\n  <body>\n    <div class= \"container\">\n      <h1>Izmeni tekst</h1>\n        <form id =\"form\" (ngSubmit) = \"changeArticle()\">\n\n          <label for =\"title\">Naslov</label><br>\n          <input name=\"title\"  [(ngModel)] = \"newArticle.title\"/> <br> <br>\n            <div class = \"alert\" *ngIf=\"!newArticle.title\">\n              *Naslov je obavezan.\n            </div>\n\n            <label for=\"category\">Odaberi kategoriju</label><br>\n            <select name=\"category\" id=\"category\" [(ngModel)]=\"newArticle.category\">\n              <option>{{choose}}</option>\n              <option *ngFor=\"let c of categories\" [ngValue]=\"c\">{{c.name}}</option>\n            </select><br /><br />\n              <div class = \"alert\" *ngIf=\"!newArticle.category.name\">\n              *Kategorija je obavezna.\n              </div>\n\n              <label for=\"video\">Da li članak ima video zapis?</label><br>\n              <select name=\"category\" id=\"category\" [(ngModel)]=\"newArticle.withVideo\">\n                <option [ngValue]=\"true\">Da</option>\n                <option [ngValue]=\"false\">Ne</option>\n              </select><br /><br />\n\n                <label for =\"mainImg\">Url slike ili videa</label><br>\n                <input name =\"mainImg\" [(ngModel)] = \"newArticle.mainImage\"/><br> <br>\n                  <div class = \"alert\" *ngIf=\"!newArticle.mainImage\">\n                  *Url slike je obavezan.\n                  </div>\n\n            <label for =\"text\">Sadržaj</label><br>\n            <textarea name=\"text\" id = \"big\" rows=\"20\" cols=\"50\"[(ngModel)] = \"newArticle.text\"></textarea><br /><br />\n\n            <label for =\"text\">Opis</label><br>\n            <textarea name=\"description\" id =\"description\" maxlength=\"200\" [(ngModel)] = \"newArticle.description\"></textarea><br /><br />\n\n            <div id = \"save\">\n              <button id = \"save\" *ngIf= \"newArticle.title && newArticle.mainImage && newArticle.category.name\" type = \"submit\" id = \"submit\"><i class=\"fa fa-save\"></i>&nbsp;&nbsp;Sačuvaj izmenu</button>\n            </div>\n        </form>\n        <div class = \"list\">\n          <ul>\n            <li (click)=\"goToUnpublished()\" >Neobjavljeni tekstovi</li>\n            <li (click)=\"goToPublished()\">Objavljeni tekstovi</li>\n          </ul>\n        </div>\n    </div>\n  </body>\n</html>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n  </head>\n  <body>\n    <div class = \"container\">\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\n        <h2 class=\"form-signin-heading\">Login</h2>\n        <label for=\"username\" class=\"sr-only\">Korisničko ime</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Šifra</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n        <button type=\"submit\">Sign in</button>\n      </form>\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n        Pogrešno korisničko ime ili šifra.\n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Critical Thinking</title>\n\t<meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n\n</head>\n\n<body>\n  <div id = \"container\">\n    <div class = \"card-wrapper\">\n        <div class = \"card\"  *ngFor = \"let article of articles\">\n          <div id =\"center\"><div  id = \"image\"><img *ngIf = \"!article.withVideo\" src=\"{{article.mainImage}}\" alt = \"card-background\" class=\"card-img\">\n          <iframe *ngIf = \"article.withVideo\" [src]=\"article.mainImage | safe\" alt = \"card-background\" class=\"card-img\"></iframe></div></div>\n          <h1 [routerLink]= \"['/tekst', article.id]\">{{article.title}}</h1>\n          <div class = \"category\" [routerLink]= \"['/tekstovi/kategorija/'+article.category.id]\">{{article.category.name}}</div>\n          <p class = \"text\">\n            {{article.description}}\n          </p>\n        </div>\n        </div>\n      </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n  </head>\n  <body>\n    <div id  = \"center\">\n      <p>Ups!</p>\n      <h1>404</h1>\n      <p>Nema rezultata za traženi pojam!</p>\n    </div>\n  </body>\n</html>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-one-category/page-one-category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-one-category/page-one-category.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Critical Thinking</title>\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"author\" content=\"\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n\n</head>\n\n<body>\n  <div id = \"container\">\n    <div class = \"card-wrapper\">\n        <div class = \"card\"  *ngFor = \"let article of articles\">\n          <div id =\"center\"><div  id = \"image\"><img *ngIf = \"!article.withVideo\" src=\"{{article.mainImage}}\" alt = \"card-background\" class=\"card-img\">\n            <iframe *ngIf = \"article.withVideo\" [src]=\"article.mainImage | safe\" alt = \"card-background\" class=\"card-img\"></iframe></div></div>\n          <h1 [routerLink]= \"['/tekst', article.id]\">{{article.title}}</h1>\n          <div class = \"category\" [routerLink]= \"['/tekstovi/kategorija/'+article.category.id]\">{{article.category.name}}</div>\n          <p class = \"text\">\n            {{article.description}}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div id = \"pag-center\" *ngIf=\"articles.length\">\n      <div class=\"pagination\">\n        <a class=\"activated\" [routerLink]= \"['/tekstovi/kategorija/'+categoryId]\">1</a>\n        <a [routerLink]= \"['/tekstovi/kategorija/'+categoryId+'/stranica/'+number]\" [ngClass]=\"{'myclass': selectedIndex == i}\"\n         *ngFor=\"let number of numbers; let i = index\" (click)=\"nesto(i)\">{{number}}</a>\n      </div>\n    </div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Critical Thinking</title>\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"author\" content=\"\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n\n</head>\n\n<body>\n  <div id = \"container\">\n    <div class = \"card-wrapper\">\n        <div class = \"card\"  *ngFor = \"let article of articles\">\n          <div id =\"center\"><div  id = \"image\"><img *ngIf = \"!article.withVideo\" src=\"{{article.mainImage}}\" alt = \"card-background\" class=\"card-img\">\n            <iframe *ngIf = \"article.withVideo\" [src]=\"article.mainImage | safe\" alt = \"card-background\" class=\"card-img\"></iframe></div></div>\n          <h1 [routerLink]= \"['/tekst', article.id]\">{{article.title}}</h1>\n          <div class = \"category\" [routerLink]= \"['/tekstovi/kategorija/'+article.category.id+'/stranica/'+1]\">{{article.category.name}}</div>\n          <p class = \"text\">\n            {{article.description}}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div id = \"pag-center\">\n      <div class=\"pagination\">\n        <a [routerLink]= \"['/tekstovi/kategorija/'+categoryId+'/stranica/'+number]\"\n         *ngFor=\"let number of firstNums\">{{number}}</a>\n         <a class = \"activated\" [routerLink]= \"['/tekstovi/kategorija/'+categoryId+'/stranica/'+pageNumber]\">{{pageNumber}}</a>\n         <a [routerLink]= \"['/tekstovi/kategorija/'+categoryId+'/stranica/'+number]\"\n         *ngFor=\"let number of secondNums\">{{number}}</a>\n      </div>\n    </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/publish-or-modify-text/publish-or-modify-text.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/publish-or-modify-text/publish-or-modify-text.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Critical Thinking</title>\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"author\" content=\"\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n</head>\n<body>\n  <div class = \"container\">\n    <div class=\"title\">{{article.title}}</div>\n    <div class = \"category\" [routerLink]= \"['/tekstovi/kategorija/'+article.category.id+'/stranica/'+1]\">{{article.category.name}}</div>\n\n    <div id =\"image\">\n      <img *ngIf = \"!article.withVideo\" src=\"{{article.mainImage}}\" alt = \"card-background\" class=\"card-img\">\n        <iframe *ngIf = \"article.withVideo\" [src]=\"article.mainImage | safe\" alt = \"card-background\" class=\"card-img\"></iframe>\n  </div>\n\n      <div id= \"text\" [innerHTML]= \"article.text\"></div>\n    <div id = \"button-row\">\n      <button (click) = \"publishArticle()\"><i class=\"fa fa-check\"></i>&nbsp;&nbsp;Objavi</button>\n      <button [routerLink]= \"['/admin/izmeni_tekst', article.id]\"><i class=\"fa fa-edit\"></i>&nbsp;&nbsp;Izmeni</button>\n      <button  [routerLink] = \"['/admin/neobjavljeni_tekstovi']\"><i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;Vrati se nazad</button>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Rezultati pretrage</title>\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"author\" content=\"\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n\n</head>\n\n<body>\n  <div id = \"container\">\n    <div class = \"card-wrapper\">\n        <div class = \"card\"  *ngFor = \"let article of articles\">\n          <div id =\"center\"><div  id = \"image\"><img *ngIf = \"!article.withVideo\" src=\"{{article.mainImage}}\" alt = \"card-background\" class=\"card-img\">\n            <iframe *ngIf = \"article.withVideo\" [src]=\"article.mainImage | safe\" alt = \"card-background\" class=\"card-img\"></iframe></div></div>\n          <h1 [routerLink]= \"['/tekst', article.id]\" [innerHTML]= \"article.title\"></h1>\n          <div class = \"category\" [routerLink]= \"['/tekstovi', article.category.id]\">{{article.category.name}}</div>\n          <div class = \"text\" [innerHTML]= \"article.description\">\n          </div>\n        </div>\n      </div>\n    </div>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/text/text.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/text/text.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--[if lt IE 8 ]><html class=\"no-js ie ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 8 ]><html class=\"no-js ie ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 9 ]><html class=\"no-js ie ie9\" lang=\"en\"> <![endif]-->\n<!--[if (gte IE 8)|!(IE)]><!--><html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n\n   <!--- Basic Page Needs\n   ================================================== -->\n   <meta charset=\"utf-8\">\n\t<title>Critical Thinking</title>\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"author\" content=\"\">\n\n\t<!-- mobile specific metas\n   ================================================== -->\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n\n\n</head>\n<body>\n  <div class = \"container\">\n    <div class=\"title\">{{article.title}}</div>\n    <div class = \"category\" [routerLink]= \"['/tekstovi/kategorija/'+article.category.id]\">{{article.category.name}}</div>\n\n      <div id =\"image\">\n        <img *ngIf = \"!article.withVideo\" src=\"{{article.mainImage}}\" alt = \"card-background\" class=\"card-img\">\n          <iframe *ngIf = \"article.withVideo\" [src]=\"article.mainImage | safe\" alt = \"card-background\" class=\"card-img\"></iframe>\n    </div>\n\n      <div id= \"text\" [innerHTML]= \"article.text\"></div>\n    <div class=\"social\">\n        <a href=\"https://www.facebook.com/sharer/sharer.php?u=example.org\" target=\"_blank\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\n      <!-- <a href = \"#\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a> -->\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/unpublished-articles/unpublished-articles.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unpublished-articles/unpublished-articles.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    Svi Tekstovi\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\">\n  </head>\n  <body>\n      <div class = \"list\">\n        <ul>\n          <li [routerLink]= \"['/admin/objavljeni_tekstovi']\" >Objavljeni tekstovi</li>\n          <li [routerLink]= \"['/admin/dodaj_tekst']\"><i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Dodaj novi tekst</li>\n        </ul>\n        </div>\n        <h1>Neobjavljeni tekstovi</h1>\n      <table id = \"table\" class=\"table\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Naslov</th>\n            <th>Opis</th>\n            <th>Kategorija</th>\n            <th>Akcija</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let article of articles\">\n            <td>{{article.id}}</td>\n            <td>{{article.title}}</td>\n            <td>{{article.description}}</td>\n            <td>{{article.category.name}}</td>\n            <td ><div (click) = \"deleteArticle(article.id)\" id = \"action\"><i (click) = \"deleteArticle(article.id)\" class=\"fa fa-trash-o\" style=\"font-size:24px\"></i>&nbsp;<h5>Obriši</h5></div>\n              <div *ngIf = \"article.published == true\" [routerLink]= \"['/tekst', article.id]\" id = \"action\"><i class = \"fa fa-book\" style=\"font-size:24px\"></i>&nbsp;<h5>Pročitaj</h5></div>\n              <div id = \"action\" *ngIf = \"article.published == false\" [routerLink]= \"['/admin/pregledaj_tekst', article.id]\"><i class = \"fa fa-eye\" style=\"font-size:24px\"></i>&nbsp;<h5>Pregledaj pre objavljivanja</h5></div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/about-author/about-author.component.css":
/*!*********************************************************!*\
  !*** ./src/app/about-author/about-author.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n\r\n  html, body {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container {\r\n  margin-top: 100px;\r\n  margin-bottom: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 0.9s;\r\n          animation: fadeIn 0.9s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n\r\n\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.container p {\r\n  font-size: 1.25em;\r\n  line-height: 1.9;\r\n  color: black;\r\n  \r\n}\r\n}\r\n\r\n\r\n@media screen and (max-width: 1199px) {\r\n\r\n  .container{\r\n    margin-top: 50px;\r\n  }\r\n\r\n  .container p {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 599px) {\r\n\r\n  .container p{\r\n      font-size: 1.1em;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtYXV0aG9yL2Fib3V0LWF1dGhvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0VBQ0EsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUNBQTZCO1VBQTdCLDZCQUE2Qjs7O0FBRy9COztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQVBBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkO0FBQ0E7OztBQUdBOztFQUVFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGOzs7QUFHQTs7RUFFRTtNQUNJLGdCQUFnQjtJQUNsQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWF1dGhvci9hYm91dC1hdXRob3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMDBweCkge1xyXG5cclxuICBodG1sLCBib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjlzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG5cclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBsaW5lLWhlaWdodDogMS45O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBcclxufVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcblxyXG4gIC5jb250YWluZXIgcHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about-author/about-author.component.ts":
/*!********************************************************!*\
  !*** ./src/app/about-author/about-author.component.ts ***!
  \********************************************************/
/*! exports provided: AboutAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAuthorComponent", function() { return AboutAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutAuthorComponent = class AboutAuthorComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-author',
        template: __webpack_require__(/*! raw-loader!./about-author.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-author/about-author.component.html"),
        styles: [__webpack_require__(/*! ./about-author.component.css */ "./src/app/about-author/about-author.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutAuthorComponent);



/***/ }),

/***/ "./src/app/add-text/add-text.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-text/add-text.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n font-family: 'Roboto',sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container {\r\n  flex-direction: column;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 50px;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 0.9s;\r\n          animation: fadeIn 0.9s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.container h1 {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.container form {\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n  margin-top: 0;\r\n  width: 600px;\r\n \r\n}\r\n\r\n.container form label {\r\n  font-size: 1.5em;\r\n  padding:0;\r\n}\r\n\r\n.container form input {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  outline: none;\r\n  border: 3px solid rgb(148, 146, 146);\r\n}\r\n\r\n.container form input:focus {\r\n  box-shadow: 0 0 5px #f78429;\r\n  border: 3px solid #f78429;\r\n}\r\n\r\n.container form select {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  outline: none;\r\n  border: 3px solid rgb(148, 146, 146);\r\n}\r\n\r\n.container form select:focus {\r\n  box-shadow: 0 0 5px #f78429;\r\n  border: 3px solid #f78429;\r\n}\r\n\r\n.container form select option{\r\n font-size: 1.25em;\r\n}\r\n\r\n.container form textarea {\r\n  width: 100%;\r\n  height: 600px;\r\n  padding: 12px 20px;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n  resize: none;\r\n  outline: none;\r\n  border: 3px solid rgb(148, 146, 146);\r\n}\r\n\r\n.container form #description {\r\n  height: 300px;\r\n}\r\n\r\n.container form textarea:focus {\r\n  box-shadow: 0 0 5px #f78429;\r\n  border: 3px solid #f78429;\r\n}\r\n\r\n.container form .alert {\r\n  color: red;\r\n  margin-top:0;\r\n  padding-top: 0;\r\n}\r\n\r\n.container #save{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.container button{\r\n  color: #f78429;\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: white;\r\n  border:3px solid #f78429;\r\n  padding: 10px;\r\n}\r\n\r\n.container button:hover{\r\n  background-color: #f78429;\r\n  color: white;\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  height: 66px;\r\n  margin-bottom:50px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-left: 40px;\r\n}\r\n\r\n.list ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.list ul li {\r\n  color: #f78429;\r\n  display:inline-block;\r\n  width: auto;\r\n  font-size: 1.25em;\r\n  font-weight: 500;\r\n  margin-right: 70px;\r\n  cursor: pointer;\r\n  border: solid 3px #f78429;\r\n  padding: 10px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.list ul li:hover{\r\n background-color: #f78429;\r\n color: white;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRleHQvYWRkLXRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdDQUFnQztFQUMvQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUM7RUFDQyxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQztFQUNDLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQztDQUNBLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZGQtdGV4dC9hZGQtdGV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciBoMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBmb3JtIHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuIFxyXG59XHJcblxyXG4uY29udGFpbmVyIGZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGZvcm0gaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTQ4LCAxNDYsIDE0Nik7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZjc4NDI5O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmNzg0Mjk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTQ4LCAxNDYsIDE0Nik7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2Y3ODQyOTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjc4NDI5O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGZvcm0gc2VsZWN0IG9wdGlvbntcclxuIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTQ4LCAxNDYsIDE0Nik7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSAjZGVzY3JpcHRpb24ge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZjc4NDI5O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmNzg0Mjk7XHJcbn1cclxuXHJcbiAuY29udGFpbmVyIGZvcm0gLmFsZXJ0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6MDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAjc2F2ZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGJ1dHRvbntcclxuICBjb2xvcjogI2Y3ODQyOTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjozcHggc29saWQgI2Y3ODQyOTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuXHJcbiAubGlzdCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuIC5saXN0IHVsIGxpIHtcclxuICBjb2xvcjogI2Y3ODQyOTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1yaWdodDogNzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2Y3ODQyOTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiAubGlzdCB1bCBsaTpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6ICNmNzg0Mjk7XHJcbiBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-text/add-text.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-text/add-text.component.ts ***!
  \************************************************/
/*! exports provided: AddTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTextComponent", function() { return AddTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");






let AddTextComponent = class AddTextComponent {
    constructor(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.newArticle = new _models__WEBPACK_IMPORTED_MODULE_3__["Article"]({
            title: "",
            text: "",
            description: "",
            mainImage: "",
            category: new _models__WEBPACK_IMPORTED_MODULE_3__["Category"]({}),
        });
        this.choose = "Odaberi kategoriju:";
        this.categories = [];
        this.getCategories();
    }
    ngOnInit() {
    }
    getCategories() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    createArticle() {
        if (!this.newArticle.title.replace(/\s/g, '').length || !this.newArticle.mainImage.replace(/\s/g, '').length) {
            alert("Ne možete unositi samo prazna polja. Pokušajte ponovo.");
            return;
        }
        if (this.newArticle.mainImage.substr(0, 8) !== 'https://') {
            alert("Uneli ste neispravan url. Pokušajte ponovo.");
            return;
        }
        this.service.createArticle(this.newArticle).subscribe(res => {
            this.newArticle = res;
            alert("Vaš članak je uspešno sačuvan!");
            this.router.navigate(['/admin/neobjavljeni_tekstovi']);
        }, error => {
            alert("Došlo je do greške. Pokušajte ponovo.");
        });
    }
    goToPublished() {
        if (confirm('Da li ste sigurni?')) {
            this.router.navigate(['/admin/objavljeni_tekstovi']);
        }
    }
    goToUnpublished() {
        if (confirm('Da li ste sigurni?')) {
            this.router.navigate(['/admin/neobjavljeni_tekstovi']);
        }
    }
};
AddTextComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-text',
        template: __webpack_require__(/*! raw-loader!./add-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-text/add-text.component.html"),
        styles: [__webpack_require__(/*! ./add-text.component.css */ "./src/app/add-text/add-text.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AddTextComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 0.9s;\r\n          animation: fadeIn 0.9s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  height: 66px;\r\n  margin-bottom:50px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-left: 40px;\r\n}\r\n\r\n.list ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.list ul li {\r\n  color: #f78429;\r\n  display:inline-block;\r\n  width: auto;\r\n  font-size: 1.25em;\r\n  font-weight: 500;\r\n  margin-right: 50px;\r\n  cursor: pointer;\r\n  border: solid 3px #f78429;\r\n  padding: 10px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.list ul li:hover{\r\n background-color: #f78429;\r\n color: white;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n\r\n.table{\r\n  display: table;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 80%;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.table tr {\r\n  background-color:white;\r\n  font-size: 1.25em;\r\n}\r\n\r\n.table tr #action {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 5px;;\r\n  padding-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.table tr #action:hover {\r\n  color:#f78429;\r\n}\r\n\r\n.table td {\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDViw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQVBBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVDO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFHQztFQUNDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVDO0VBQ0MsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVDO0NBQ0EseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQztFQUNDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVDO0VBQ0Msc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQztFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVDO0VBQ0MsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxuICB9XHJcbn1cclxuXHJcbiAubGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2NnB4O1xyXG4gIG1hcmdpbi1ib3R0b206NTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4gLmxpc3QgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiAubGlzdCB1bCBsaSB7XHJcbiAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogc29saWQgM3B4ICNmNzg0Mjk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4gLmxpc3QgdWwgbGk6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI5O1xyXG4gY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAudGFibGV7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4gLnRhYmxlIHRyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcblxyXG4gLnRhYmxlIHRyICNhY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLXRvcDogNXB4OztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiAudGFibGUgdHIgI2FjdGlvbjpob3ZlciB7XHJcbiAgY29sb3I6I2Y3ODQyOTtcclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");







let AdminComponent = class AdminComponent {
    constructor(service, http, router, authenticationService) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
        this.articles = [];
        this.categories = [];
        this.category = new _models__WEBPACK_IMPORTED_MODULE_2__["Category"]({});
        this.categorySearch = false;
        this.getAllPublishedArticles();
        this.getCategories();
    }
    ngOnInit() {
    }
    getCategories() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    getUnpublishedArticles() {
        this.service.getUnpublishedArticles().subscribe(res => {
            this.articles = res;
        });
    }
    deleteArticle(id) {
        if (confirm('Da li ste sigurni da želite da obrišete članak?')) {
            this.service.deleteArticle(id).subscribe(res => {
                this.deletedArticle = res;
                this.refresh();
            });
        }
    }
    resetFilter() {
        this.refresh();
    }
    refresh() {
        window.location.reload();
    }
    getAllPublishedArticles() {
        this.service.getAllPublishedArticles().subscribe(res => {
            this.articles = res;
        });
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _security_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _security_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text/text.component */ "./src/app/text/text.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-author/about-author.component */ "./src/app/about-author/about-author.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _unpublished_articles_unpublished_articles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unpublished-articles/unpublished-articles.component */ "./src/app/unpublished-articles/unpublished-articles.component.ts");
/* harmony import */ var _add_text_add_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-text/add-text.component */ "./src/app/add-text/add-text.component.ts");
/* harmony import */ var _publish_or_modify_text_publish_or_modify_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./publish-or-modify-text/publish-or-modify-text.component */ "./src/app/publish-or-modify-text/publish-or-modify-text.component.ts");
/* harmony import */ var _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-text/edit-text.component */ "./src/app/edit-text/edit-text.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./security/can-activate-auth.guard */ "./src/app/security/can-activate-auth.guard.ts");
/* harmony import */ var _page_one_category_page_one_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-one-category/page-one-category.component */ "./src/app/page-one-category/page-one-category.component.ts");


















const routes = [
    // public routes
    { path: 'početna', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: '', redirectTo: 'početna', pathMatch: 'full' },
    { path: 'tekstovi/kategorija/:id', component: _page_one_category_page_one_category_component__WEBPACK_IMPORTED_MODULE_17__["PageOneCategoryComponent"] },
    { path: 'tekstovi/kategorija/:id/stranica/:pageNumber', component: _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"] },
    { path: 'tekst/:id', component: _text_text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"] },
    { path: 'kurs', component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"] },
    { path: 'o_autoru', component: _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_7__["AboutAuthorComponent"] },
    { path: 'pretraga/ključna reč/:keyword', component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    // admin routes, login is necessary
    { path: 'admin/objavljeni_tekstovi', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], canActivate: [_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuard"]] },
    { path: 'admin/neobjavljeni_tekstovi', component: _unpublished_articles_unpublished_articles_component__WEBPACK_IMPORTED_MODULE_10__["UnpublishedArticlesComponent"], canActivate: [_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuard"]] },
    { path: 'admin/dodaj_tekst', component: _add_text_add_text_component__WEBPACK_IMPORTED_MODULE_11__["AddTextComponent"], canActivate: [_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuard"]] },
    { path: 'admin/pregledaj_tekst/:id', component: _publish_or_modify_text_publish_or_modify_text_component__WEBPACK_IMPORTED_MODULE_12__["PublishOrModifyTextComponent"], canActivate: [_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuard"]] },
    { path: 'admin/izmeni_tekst/:id', component: _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_13__["EditTextComponent"], canActivate: [_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuard"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\nhtml, body {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#logo-smaller{\r\n  display: none;\r\n}\r\n\r\n#nav-smaller {\r\n  display:none;\r\n}\r\n\r\nheader {\r\n  width:100%;\r\n}\r\n\r\nheader nav {\r\n  height: 66px;\r\n  background-color: #f78429;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader #nav-first #search-container {\r\n  margin-left: 5px;\r\n}\r\n\r\nheader #nav-first input[type=text] {\r\n  font-size: 1.25em;\r\n  border: none;\r\n}\r\n\r\nheader #nav-first button {\r\n  background: #ddd;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 6px 8px 2px;\r\n}\r\n\r\nheader #nav-first #search-container button:hover {\r\n  background: #ccc;\r\n}\r\n\r\nheader ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\nheader #nav-first ul {\r\n  margin-left: auto;\r\n}\r\n\r\nheader ul li {\r\n  display:inline-block;\r\n  margin-right: 30px;\r\n  font-size: 1.25em;\r\n  padding: 0;\r\n}\r\n\r\n header ul li a {\r\n  color: white;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nheader #nav-first ul li{\r\n  margin-right: 50px;\r\n}\r\n\r\n.underlined{\r\n  border-bottom: 4px solid transparent;\r\n}\r\n\r\n.underlined:hover {\r\n  border-bottom: white 4px solid;\r\n}\r\n\r\n.underlined:active {\r\n  border-bottom: white 4px solid;\r\n}\r\n\r\n.bla{\r\n  border-bottom: white 4px solid;\r\n}\r\n\r\nheader .logo {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-left: 3%;\r\n\r\n}\r\n\r\nheader .logo img {\r\n  width: 700px;\r\n  height: 250px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  cursor: pointer;\r\n}\r\n\r\nheader .nav-second {\r\n  padding-left: 30px;\r\n  justify-content: center;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n.nav-second  a {\r\n  white-space: nowrap;\r\n}\r\n\r\nfooter {\r\n  background: #f78429;\r\n  color: white;\r\n  align-self: flex-end;\r\n  width:100%;\r\n}\r\n\r\nfooter .footer-content {\r\n  display:flex;\r\n}\r\n\r\nfooter .footer-content .footer-section {\r\n  flex: 1;\r\n}\r\n\r\nfooter .footer-content .contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color:white;\r\n}\r\n\r\nfooter .footer-content .contact span {\r\n  font-size: 1.25em;\r\n  margin-top:15px;\r\n}\r\n\r\nfooter .footer-content .text {\r\n  font-size: 1.5em;\r\n}\r\n\r\nfooter .footer-content .links {\r\n  font-size: 1.25em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding:0;\r\n}\r\n\r\nfooter .footer-content .links ul {\r\n  padding-top:15px;\r\n  line-height: 2em;\r\n  list-style-type: none;\r\n  margin:0;\r\n  padding: 0;\r\n}\r\n\r\nfooter .footer-content .links a {\r\n  color: white;\r\n  text-decoration: none;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter .footer-content .links a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n footer .footer-content .facebook {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding:10px 0;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter .footer-content .facebook iframe {\r\n  width: 350px;\r\n  height: 150px;\r\n}\r\n\r\nfooter .footer-bottom {\r\n  background: #c86d22;\r\n  color: white;\r\n  text-align: center;\r\n  padding:20px;\r\n  bottom: 0px;\r\n  left:0px;\r\n  height: 45px;\r\n  width:100%;\r\n}\r\n}\r\n\r\n@media screen and (max-width: 1599px) {\r\n\r\n  header ul li {\r\n    font-size: 1.125em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1439px) and (min-width:1366px) {\r\n\r\n  header .logo img {\r\n    width: 600px;\r\n    height: 200px;\r\n  }\r\n\r\n  header ul li {\r\n    font-size: 1.063em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1365px) {\r\n\r\n  #nav-smaller {\r\n    height: 66px;\r\n    background-color: #f78429;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    padding-left: 50px;\r\n\r\n  }\r\n\r\n  #nav-smaller ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  #nav-smaller ul li {\r\n    display:inline-block;\r\n    margin-right: 80px;\r\n    font-size: 1.25em;\r\n    font-weight: bold;\r\n  }\r\n\r\n  #nav-smaller ul li a {\r\n    color: white;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .logo{\r\n    border-bottom: 4px solid #f78429 ;\r\n  }\r\n\r\n  header .logo img {\r\n    width: 600px;\r\n    height: 200px;\r\n  }\r\n\r\n  #menu{\r\n    background-color:#f78429;\r\n    position: fixed;\r\n    top:0;\r\n    right:0;\r\n    width:300px;\r\n    height: 100%;\r\n    z-index: 2;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  #menu .search-container{\r\n    display: inline-block;\r\n  }\r\n\r\n  #menu .search-container input{\r\n    font-size: 1em;\r\n    width: 70%;\r\n  }\r\n\r\n  #menu .search-container #search{\r\n    background-color: white;\r\n    color: #f78429;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 2px 3px;\r\n  }\r\n\r\n  #menu #search:hover {\r\n    background: #ccc;\r\n  }\r\n\r\n\r\n  #menu #close{\r\n    position: fixed;\r\n    top:0;\r\n    right: 0;\r\n    background-color: white;\r\n    color: #f78429;\r\n    margin-left: auto;\r\n  }\r\n\r\n  #menu #close:hover{\r\n    background: #ccc;\r\n  }\r\n\r\n  #menu ul {\r\n    list-style: none;\r\n    padding:0;\r\n    margin:0;\r\n    border-left:#f78429 1px solid;\r\n  }\r\n\r\n  #menu ul li {\r\n    width:100%;\r\n    display: inline-block;\r\n    font-size: 1.3em;\r\n    padding:3% 0;\r\n    text-decoration: none;\r\n    border-bottom:rgb(167, 165, 165) 1px solid;\r\n  }\r\n\r\n  #menu ul li a {\r\n    width:100%;\r\n    white-space: nowrap;\r\n    color:white;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  #menu ul li a:hover {\r\n    transition: 0.5s;\r\n    text-decoration: underline;\r\n    color: white;\r\n  }\r\n\r\n  header .nav-second,\r\n  header #nav-first\r\n   {\r\n    display:none;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 1199px) {\r\n\r\n  footer .footer-content {\r\n    display:flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  footer .footer-content .footer-section {\r\n    padding: 15px 0;\r\n    border-bottom: 1px solid #fda257;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n\r\n  #nav-smaller {\r\n    padding-left: 20px;\r\n  }\r\n\r\n  #nav-smaller ul li {\r\n    font-size: 1.063em;\r\n    margin-right: 50px;\r\n  }\r\n\r\n  header .logo{\r\n    display: none;\r\n  }\r\n\r\n  #logo-smaller{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 3%;;\r\n    border-bottom: 4px solid #f78429 ;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n\r\n  footer .footer-content .contact span {\r\n    font-size: 1em;\r\n  }\r\n\r\n  footer .footer-content .text {\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  footer .footer-content .links{\r\n    font-size: 1em;\r\n  }\r\n\r\n  footer .footer-content .facebook iframe {\r\n    width: 300px;\r\n    height: 150px;\r\n  }\r\n\r\n  #menu {\r\n    width: 250px;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7Q0FFQztFQUNDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztDQUVDO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBOztBQUVBOztFQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixLQUFLO0lBQ0wsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOzs7RUFHQTtJQUNFLGVBQWU7SUFDZixLQUFLO0lBQ0wsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7RUFFQTs7O0lBR0UsWUFBWTtFQUNkOztBQUVGOztBQUVBOztFQUVFO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFHQTs7RUFFRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsZUFBZTtFQUNqQjs7O0FBR0Y7O0FBRUE7O0VBRUU7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMDBweCkge1xyXG5odG1sLCBib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNsb2dvLXNtYWxsZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI25hdi1zbWFsbGVyIHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB7XHJcbiAgaGVpZ2h0OiA2NnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzg0Mjk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgI25hdi1maXJzdCAjc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuaGVhZGVyICNuYXYtZmlyc3QgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgI25hdi1maXJzdCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA2cHggOHB4IDJweDtcclxufVxyXG5cclxuaGVhZGVyICNuYXYtZmlyc3QgI3NlYXJjaC1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG5oZWFkZXIgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaGVhZGVyICNuYXYtZmlyc3QgdWwge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIgdWwgbGkge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4gaGVhZGVyIHVsIGxpIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oZWFkZXIgI25hdi1maXJzdCB1bCBsaXtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVke1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnVuZGVybGluZWQ6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDRweCBzb2xpZDtcclxufVxyXG5cclxuLnVuZGVybGluZWQ6YWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiB3aGl0ZSA0cHggc29saWQ7XHJcbn1cclxuXHJcbi5ibGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgNHB4IHNvbGlkO1xyXG59XHJcblxyXG5oZWFkZXIgLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxuXHJcbn1cclxuXHJcbmhlYWRlciAubG9nbyBpbWcge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIC5uYXYtc2Vjb25kIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LXNlY29uZCAgYSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjc4NDI5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1zZWN0aW9uIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IC5jb250YWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY29udGVudCAuY29udGFjdCBzcGFuIHtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOjA7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHVsIHtcclxuICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY29udGVudCAubGlua3MgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiBmb290ZXIgLmZvb3Rlci1jb250ZW50IC5mYWNlYm9vayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6MTBweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY29udGVudCAuZmFjZWJvb2sgaWZyYW1lIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItYm90dG9tIHtcclxuICBiYWNrZ3JvdW5kOiAjYzg2ZDIyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xyXG5cclxuICBoZWFkZXIgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzOXB4KSBhbmQgKG1pbi13aWR0aDoxMzY2cHgpIHtcclxuXHJcbiAgaGVhZGVyIC5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHVsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4wNjNlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG5cclxuICAjbmF2LXNtYWxsZXIge1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODQyOTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxuICB9XHJcblxyXG4gICNuYXYtc21hbGxlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICNuYXYtc21hbGxlciB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAjbmF2LXNtYWxsZXIgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nb3tcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjc4NDI5IDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gICNtZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjc4NDI5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgI21lbnUgLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAjbWVudSAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcblxyXG4gICNtZW51IC5zZWFyY2gtY29udGFpbmVyICNzZWFyY2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjZjc4NDI5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMnB4IDNweDtcclxuICB9XHJcblxyXG4gICNtZW51ICNzZWFyY2g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG5cclxuICAjbWVudSAjY2xvc2V7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogI2Y3ODQyOTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgI21lbnUgI2Nsb3NlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG4gICNtZW51IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJvcmRlci1sZWZ0OiNmNzg0MjkgMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgI21lbnUgdWwgbGkge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBwYWRkaW5nOjMlIDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOnJnYigxNjcsIDE2NSwgMTY1KSAxcHggc29saWQ7XHJcbiAgfVxyXG5cclxuICAjbWVudSB1bCBsaSBhIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjbWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGhlYWRlciAubmF2LXNlY29uZCxcclxuICBoZWFkZXIgI25hdi1maXJzdFxyXG4gICB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcblxyXG4gIGZvb3RlciAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmRhMjU3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcblxyXG4gICNuYXYtc21hbGxlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2LXNtYWxsZXIgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxLjA2M2VtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5sb2dve1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNsb2dvLXNtYWxsZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlOztcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjc4NDI5IDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk5cHgpIHtcclxuXHJcbiAgZm9vdGVyIC5mb290ZXItY29udGVudCAuY29udGFjdCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIC5mb290ZXItY29udGVudCAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICB9XHJcblxyXG4gIGZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtze1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuICBmb290ZXIgLmZvb3Rlci1jb250ZW50IC5mYWNlYm9vayBpZnJhbWUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gICNtZW51IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







let AppComponent = class AppComponent {
    constructor(router, authenticationService, articleService, http) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.articleService = articleService;
        this.http = http;
        this.title = 'svojom-glavom';
        this.getCategories();
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_6__('#menu').hide();
    }
    getCategories() {
        this.articleService.getCategories().subscribe(res => {
            this.categories = res;
            this.firstNavCategories = res.slice(0, 9);
            this.secondNavCategories = res.slice(9, 18);
        });
    }
    refresh() {
        window.location.reload();
    }
    navigateToMain() {
        this.router.navigate(['početna']);
        this.keyWord = "";
    }
    toggle() {
        jquery__WEBPACK_IMPORTED_MODULE_6__('#menu').toggle('slow');
    }
    onActivate(event) {
        window.scroll(0, 0);
    }
    search() {
        this.router.navigate(['/pretraga/ključna reč/', this.keyWord]);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text/text.component */ "./src/app/text/text.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-author/about-author.component */ "./src/app/about-author/about-author.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _unpublished_articles_unpublished_articles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unpublished-articles/unpublished-articles.component */ "./src/app/unpublished-articles/unpublished-articles.component.ts");
/* harmony import */ var _add_text_add_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-text/add-text.component */ "./src/app/add-text/add-text.component.ts");
/* harmony import */ var _publish_or_modify_text_publish_or_modify_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./publish-or-modify-text/publish-or-modify-text.component */ "./src/app/publish-or-modify-text/publish-or-modify-text.component.ts");
/* harmony import */ var _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-text/edit-text.component */ "./src/app/edit-text/edit-text.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./security/token-interceptor.service */ "./src/app/security/token-interceptor.service.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./security/can-activate-auth.guard */ "./src/app/security/can-activate-auth.guard.ts");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");
/* harmony import */ var _page_one_category_page_one_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page-one-category/page-one-category.component */ "./src/app/page-one-category/page-one-category.component.ts");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipe */ "./src/app/pipe.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
            _text_text_component__WEBPACK_IMPORTED_MODULE_9__["TextComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
            _course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"],
            _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_11__["AboutAuthorComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
            _add_text_add_text_component__WEBPACK_IMPORTED_MODULE_15__["AddTextComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
            _publish_or_modify_text_publish_or_modify_text_component__WEBPACK_IMPORTED_MODULE_16__["PublishOrModifyTextComponent"],
            _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_17__["EditTextComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _unpublished_articles_unpublished_articles_component__WEBPACK_IMPORTED_MODULE_14__["UnpublishedArticlesComponent"],
            _page_one_category_page_one_category_component__WEBPACK_IMPORTED_MODULE_24__["PageOneCategoryComponent"],
            _pipe__WEBPACK_IMPORTED_MODULE_25__["SafePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptorService"],
                multi: true
            },
            _security_authentication_service__WEBPACK_IMPORTED_MODULE_21__["AuthenticationService"],
            _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_22__["CanActivateAuthGuard"],
            _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_23__["JwtUtilsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/article.service.ts":
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ArticleService = class ArticleService {
    constructor(http) {
        this.http = http;
    }
    // only published articles (9 of them)
    getPublishedArticles() {
        return this.http.get("/api/articles");
    }
    // only published articles by category
    getArticlesByCategory(categoryId) {
        return this.http.get("/api/articles/" + categoryId);
    }
    // only published articles by category PAGE
    getArticlesByCategoryandPage(categoryId, pageNumber) {
        return this.http.get("/api/articles/" + categoryId + "/page/" + pageNumber);
    }
    // number of pages per category
    getNumberOfPages(categoryId) {
        return this.http.get("/api/number/" + categoryId);
    }
    // only published article
    getArticle(id) {
        return this.http.get("/api/article/" + id);
    }
    // get categories
    getCategories() {
        return this.http.get("/api/categories");
    }
    search(keyWord) {
        return this.http.get("/api/search?keyWord=" + keyWord);
    }
    //admin
    // get all published articles
    getAllPublishedArticles() {
        return this.http.get("/api/admin/articles");
    }
    // get unpublished article
    getUnpublishedArticle(id) {
        return this.http.get("/api/admin/article/" + id);
    }
    // create article
    createArticle(newArticle) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post("/api/admin/articles", newArticle, { headers });
    }
    // publish article
    publishArticle(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put("/api/admin/article/" + id, { headers });
    }
    // change an unpublished article
    changeArticle(id, newArticle) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put("/api/admin/changearticle/" + id, newArticle, { headers });
    }
    //delete an article
    deleteArticle(id) {
        return this.http.delete("/api/admin/article/" + id);
    }
    sortArticles() {
        return this.http.get("/api/admin/sort/articles");
    }
    // only unpublished articles
    getUnpublishedArticles() {
        return this.http.get("/api/unpublishedarticles");
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ArticleService);



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n\r\n  html, body {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  #center {\r\n    font-family: 'Roboto', sans-serif;\r\n    background-color: #fff6d2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s;\r\n            animation: fadeIn 0.9s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  #center h1{\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    color: #f78429;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n\r\n  #center{\r\n    justify-content: flex-start;\r\n    padding-top: 200px;\r\n    min-height: 70vh;\r\n  }\r\n\r\n  #center h1{\r\n    font-size: 1.25em;\r\n    font-weight: bold;\r\n    color: #f78429;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0lBQ0UsaUNBQWlDO0lBQ2pDLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFQQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7O0FBR0Y7O0FBRUE7O0VBRUU7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7O0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDAwcHgpIHtcclxuXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgI2NlbnRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmQyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC45cztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjY2VudGVyIGgxe1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZjc4NDI5O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xyXG5cclxuICAjY2VudGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxuICB9XHJcblxyXG4gICNjZW50ZXIgaDF7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CourseComponent = class CourseComponent {
    constructor() { }
    ngOnInit() {
    }
};
CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: __webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/index.js!./src/app/course/course.component.html"),
        styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CourseComponent);



/***/ }),

/***/ "./src/app/edit-text/edit-text.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-text/edit-text.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  font-family: 'Roboto',sans-serif;\r\n   margin: 0;\r\n   padding: 0;\r\n   min-height: 100vh;\r\n }\r\n \r\n .container {\r\n   flex-direction: column;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   margin-top: 50px;\r\n   opacity: 0;\r\n   -webkit-animation: fadeIn 0.9s;\r\n           animation: fadeIn 0.9s;\r\n   -webkit-animation-fill-mode: forwards;\r\n           animation-fill-mode: forwards;\r\n }\r\n \r\n @-webkit-keyframes fadeIn {\r\n   0% {\r\n     opacity: 0.0;\r\n   }\r\n   100% {\r\n     opacity: 1.0;\r\n   }\r\n }\r\n \r\n @keyframes fadeIn {\r\n   0% {\r\n     opacity: 0.0;\r\n   }\r\n   100% {\r\n     opacity: 1.0;\r\n   }\r\n }\r\n \r\n .container h1 {\r\n   margin-bottom: 0;\r\n }\r\n \r\n .container form {\r\n   padding-top: 50px;\r\n   padding-bottom: 30px;\r\n   margin-top: 0;\r\n   width: 600px;\r\n  \r\n }\r\n \r\n .container form label {\r\n   font-size: 1.5em;\r\n   padding:0;\r\n }\r\n \r\n .container form input {\r\n   width: 100%;\r\n   padding: 12px 20px;\r\n   margin-top: 10px;\r\n   margin-bottom: 0;\r\n   outline: none;\r\n   border: 3px solid rgb(148, 146, 146);\r\n }\r\n \r\n .container form input:focus {\r\n   box-shadow: 0 0 5px #f78429;\r\n   border: 3px solid #f78429;\r\n }\r\n \r\n .container form select {\r\n   width: 100%;\r\n   padding: 12px 20px;\r\n   margin-top: 10px;\r\n   margin-bottom: 0;\r\n   outline: none;\r\n   border: 3px solid rgb(148, 146, 146);\r\n }\r\n \r\n .container form select:focus {\r\n   box-shadow: 0 0 5px #f78429;\r\n   border: 3px solid #f78429;\r\n }\r\n \r\n .container form select option{\r\n  font-size: 1.25em;\r\n }\r\n \r\n .container form textarea {\r\n   width: 100%;\r\n   height: 600px;\r\n   padding: 12px 20px;\r\n   margin-top: 10px;\r\n   margin-bottom: 0;\r\n   resize: none;\r\n   outline: none;\r\n   border: 3px solid rgb(148, 146, 146);\r\n }\r\n \r\n .container form #description {\r\n   height: 300px;\r\n }\r\n \r\n .container form textarea:focus {\r\n   box-shadow: 0 0 5px #f78429;\r\n   border: 3px solid #f78429;\r\n }\r\n \r\n .container form .alert {\r\n   color: red;\r\n   margin-top:0;\r\n   padding-top: 0;\r\n }\r\n \r\n .container #save{\r\n   display: flex;\r\n   justify-content: center;\r\n }\r\n \r\n .container button{\r\n   color: #f78429;\r\n   font-size: 1.5em;\r\n   font-weight: 500;\r\n   cursor: pointer;\r\n   background-color: white;\r\n   border:3px solid #f78429;\r\n   padding: 10px;\r\n }\r\n \r\n .container button:hover{\r\n   background-color: #f78429;\r\n   color: white;\r\n }\r\n \r\n .list {\r\n   width: 100%;\r\n   height: 66px;\r\n   margin-bottom:50px;\r\n   margin-top: 50px;\r\n   display: flex;\r\n   flex-direction: row;\r\n   align-items: center;\r\n   justify-content: center;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   padding-left: 40px;\r\n }\r\n \r\n .list ul {\r\n   list-style: none;\r\n   padding: 0;\r\n   margin: 0;\r\n }\r\n \r\n .list ul li {\r\n   color: #f78429;\r\n   display:inline-block;\r\n   width: auto;\r\n   font-size: 1.25em;\r\n   font-weight: 500;\r\n   margin-right: 70px;\r\n   cursor: pointer;\r\n   border: solid 3px #f78429;\r\n   padding: 10px;\r\n   white-space: nowrap;\r\n }\r\n \r\n .list ul li:hover{\r\n  background-color: #f78429;\r\n  color: white;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10ZXh0L2VkaXQtdGV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0dBQy9CLFNBQVM7R0FDVCxVQUFVO0dBQ1YsaUJBQWlCO0NBQ25COztDQUVBO0dBQ0Usc0JBQXNCO0dBQ3RCLGFBQWE7R0FDYix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1YsOEJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0QixxQ0FBNkI7V0FBN0IsNkJBQTZCO0NBQy9COztDQUVBO0dBQ0U7S0FDRSxZQUFZO0dBQ2Q7R0FDQTtLQUNFLFlBQVk7R0FDZDtDQUNGOztDQVBBO0dBQ0U7S0FDRSxZQUFZO0dBQ2Q7R0FDQTtLQUNFLFlBQVk7R0FDZDtDQUNGOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0UsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQixhQUFhO0dBQ2IsWUFBWTs7Q0FFZDs7Q0FFQTtHQUNFLGdCQUFnQjtHQUNoQixTQUFTO0NBQ1g7O0NBRUE7R0FDRSxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLG9DQUFvQztDQUN0Qzs7Q0FFQTtHQUNFLDJCQUEyQjtHQUMzQix5QkFBeUI7Q0FDM0I7O0NBRUE7R0FDRSxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLG9DQUFvQztDQUN0Qzs7Q0FFQTtHQUNFLDJCQUEyQjtHQUMzQix5QkFBeUI7Q0FDM0I7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7R0FDRSxXQUFXO0dBQ1gsYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLFlBQVk7R0FDWixhQUFhO0dBQ2Isb0NBQW9DO0NBQ3RDOztDQUVBO0dBQ0UsYUFBYTtDQUNmOztDQUVBO0dBQ0UsMkJBQTJCO0dBQzNCLHlCQUF5QjtDQUMzQjs7Q0FFQztHQUNDLFVBQVU7R0FDVixZQUFZO0dBQ1osY0FBYztDQUNoQjs7Q0FFQTtHQUNFLGFBQWE7R0FDYix1QkFBdUI7Q0FDekI7O0NBRUE7R0FDRSxjQUFjO0dBQ2QsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2YsdUJBQXVCO0dBQ3ZCLHdCQUF3QjtHQUN4QixhQUFhO0NBQ2Y7O0NBRUE7R0FDRSx5QkFBeUI7R0FDekIsWUFBWTtDQUNkOztDQUdBO0dBQ0UsV0FBVztHQUNYLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2QixpQkFBaUI7R0FDakIsa0JBQWtCO0dBQ2xCLGtCQUFrQjtDQUNwQjs7Q0FHQztHQUNDLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1YsU0FBUztDQUNYOztDQUVDO0dBQ0MsY0FBYztHQUNkLG9CQUFvQjtHQUNwQixXQUFXO0dBQ1gsaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLHlCQUF5QjtHQUN6QixhQUFhO0dBQ2IsbUJBQW1CO0NBQ3JCOztDQUVDO0VBQ0EseUJBQXlCO0VBQ3pCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdGV4dC9lZGl0LXRleHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyIHtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgIG9wYWNpdHk6IDA7XHJcbiAgIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gfVxyXG4gXHJcbiBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgIDAlIHtcclxuICAgICBvcGFjaXR5OiAwLjA7XHJcbiAgIH1cclxuICAgMTAwJSB7XHJcbiAgICAgb3BhY2l0eTogMS4wO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5jb250YWluZXIgaDEge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyIGZvcm0ge1xyXG4gICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIHdpZHRoOiA2MDBweDtcclxuICBcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lciBmb3JtIGxhYmVsIHtcclxuICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgcGFkZGluZzowO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyIGZvcm0gaW5wdXQge1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG4gICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTQ4LCAxNDYsIDE0Nik7XHJcbiB9XHJcbiBcclxuIC5jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Y3ODQyOTtcclxuICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ODQyOTtcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lciBmb3JtIHNlbGVjdCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbiAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxNDgsIDE0NiwgMTQ2KTtcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lciBmb3JtIHNlbGVjdDpmb2N1cyB7XHJcbiAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2Y3ODQyOTtcclxuICAgYm9yZGVyOiAzcHggc29saWQgI2Y3ODQyOTtcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lciBmb3JtIHNlbGVjdCBvcHRpb257XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiB9XHJcbiBcclxuIC5jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDYwMHB4O1xyXG4gICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgIHJlc2l6ZTogbm9uZTtcclxuICAgb3V0bGluZTogbm9uZTtcclxuICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE0OCwgMTQ2LCAxNDYpO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyIGZvcm0gI2Rlc2NyaXB0aW9uIHtcclxuICAgaGVpZ2h0OiAzMDBweDtcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lciBmb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICAgYm94LXNoYWRvdzogMCAwIDVweCAjZjc4NDI5O1xyXG4gICBib3JkZXI6IDNweCBzb2xpZCAjZjc4NDI5O1xyXG4gfVxyXG4gXHJcbiAgLmNvbnRhaW5lciBmb3JtIC5hbGVydCB7XHJcbiAgIGNvbG9yOiByZWQ7XHJcbiAgIG1hcmdpbi10b3A6MDtcclxuICAgcGFkZGluZy10b3A6IDA7XHJcbiB9XHJcblxyXG4gLmNvbnRhaW5lciAjc2F2ZXtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLmNvbnRhaW5lciBidXR0b257XHJcbiAgIGNvbG9yOiAjZjc4NDI5O1xyXG4gICBmb250LXNpemU6IDEuNWVtO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICBib3JkZXI6M3B4IHNvbGlkICNmNzg0Mjk7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiB9XHJcblxyXG4gLmNvbnRhaW5lciBidXR0b246aG92ZXJ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmNzg0Mjk7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxuXHJcblxyXG4gLmxpc3Qge1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiA2NnB4O1xyXG4gICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiB9XHJcblxyXG5cclxuICAubGlzdCB1bCB7XHJcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIG1hcmdpbjogMDtcclxuIH1cclxuXHJcbiAgLmxpc3QgdWwgbGkge1xyXG4gICBjb2xvcjogI2Y3ODQyOTtcclxuICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiBhdXRvO1xyXG4gICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIGJvcmRlcjogc29saWQgM3B4ICNmNzg0Mjk7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiB9XHJcblxyXG4gIC5saXN0IHVsIGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzg0Mjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-text/edit-text.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-text/edit-text.component.ts ***!
  \**************************************************/
/*! exports provided: EditTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTextComponent", function() { return EditTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");





let EditTextComponent = class EditTextComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.newArticle = new _models__WEBPACK_IMPORTED_MODULE_2__["Article"]({
            category: new _models__WEBPACK_IMPORTED_MODULE_2__["Category"]({})
        });
        this.categories = [];
        this.choose = "Odaberi kategoriju:";
        this.getCategories();
        this.getArticle();
    }
    ngOnInit() {
    }
    getArticle() {
        this.route.params.subscribe(params => {
            this.id = +params['id'],
                this.service.getUnpublishedArticle(this.id).subscribe(res => {
                    this.newArticle = res;
                }, error => {
                    this.router.navigate(['/**']);
                });
        });
    }
    getCategories() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    changeArticle() {
        if (!this.newArticle.title.replace(/\s/g, '').length
            || !this.newArticle.mainImage.replace(/\s/g, '').length) {
            alert("Ne možete unositi samo prazna polja. Pokušajte ponovo.");
            return;
        }
        if (this.newArticle.mainImage.substr(0, 8) !== 'https://') {
            alert("Uneli ste neispravan url. Pokušajte ponovo.");
            return;
        }
        this.service.changeArticle(this.id, this.newArticle).subscribe(res => {
            alert("Vaš članak je uspešno sačuvan!");
            this.router.navigate(['/admin/neobjavljeni_tekstovi']);
        }, error => {
            alert("Došlo je do greške. Pokušajte ponovo.");
        });
    }
    goToPublished() {
        if (confirm('Da li ste sigurni?')) {
            this.router.navigate(['/admin/objavljeni_tekstovi']);
        }
    }
    goToUnpublished() {
        if (confirm('Da li ste sigurni?')) {
            this.router.navigate(['/admin/neobjavljeni_tekstovi']);
        }
    }
};
EditTextComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-text',
        template: __webpack_require__(/*! raw-loader!./edit-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-text/edit-text.component.html"),
        styles: [__webpack_require__(/*! ./edit-text.component.css */ "./src/app/edit-text/edit-text.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], EditTextComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  font-family: 'Roboto', sans-serif;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 0.9s;\r\n          animation: fadeIn 0.9s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.container form {\r\n  margin-top: 150px;\r\n  width: 400px;\r\n  flex-direction: column;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container input {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  outline: none;\r\n  border: 1px solid rgb(148, 146, 146);\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.container input:focus {\r\n  box-shadow: 0 0 5px #f78429;\r\n  border: 3px solid #f78429;\r\n}\r\n\r\n.container h2 {\r\n  color: #f78429;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.container button {\r\n  background-color: #f78429;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px;\r\n  text-decoration: none;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  margin-bottom: 30px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.container button:hover {\r\n  background-color: #333;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciBmb3JtIHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDgsIDE0NiwgMTQ2KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGlucHV0OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNmNzg0Mjk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y3ODQyOTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMiB7XHJcbiAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    ngOnInit() {
    }
    login() {
        this.authenticationService.login(this.user.username, this.user.password).subscribe((loggedIn) => {
            if (loggedIn) {
                this.router.navigate(['/admin/objavljeni_tekstovi']);
            }
        }, error => {
            alert("Pogrešno korisničko ime ili šifra.");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n  html, body {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  #container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 25px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    width:1300px;\r\n    padding-left: 12px;\r\n  }\r\n\r\n  .card {\r\n     flex: 0 0 33%;\r\n     border:none;\r\n     margin-bottom: 30px;\r\n  }\r\n\r\n  .card {\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s;\r\n            animation: fadeIn 0.9s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n  }\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  .card:hover{\r\n    background-color: #f78429;\r\n    color: white;\r\n  }\r\n\r\n  .card:hover > .text { color: white; cursor: default; }\r\n  .card:hover > .category { color: white; cursor: pointer;  }\r\n  .card:hover > h1 { color: white; cursor: pointer; }\r\n\r\n   .card #center {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n  }\r\n  .card #image{\r\n    width:90%;\r\n    padding-top: 50.62%;\r\n    position: relative;\r\n  }\r\n\r\n  .card img, iframe {\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height:100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n\r\n  .card h1 {\r\n    font-size:1.313em;\r\n    color: #f78429;\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    margin-top: 25px;\r\n    cursor: pointer;\r\n\r\n  }\r\n\r\n  .card h1:hover{\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .text {\r\n    margin:15px 25px;\r\n    color: #606060;\r\n    font-size: 1.25em;\r\n    text-align: justify;\r\n\r\n  }\r\n\r\n  .category{\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    color:rgb(26, 25, 25);\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card .category:hover {\r\n    text-decoration: underline;\r\n  }\r\n}\r\n\r\n\r\n  @media screen and (max-width: 1365px) {\r\n\r\n    .card-wrapper{\r\n      width:95%;\r\n      padding-left: 1%;;\r\n    }\r\n\r\n    .card h1{\r\n      font-size: 1.25em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.188em;\r\n    }\r\n\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 1023px) {\r\n\r\n    .card-wrapper{\r\n      padding-left: 0;\r\n    }\r\n\r\n    .card {\r\n      flex: 0 0 50%;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 767px) {\r\n    .card{\r\n      flex: 0 0 100%;\r\n    }\r\n\r\n    .card h1, .text, .category{\r\n      margin-left: 5%;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 399px) {\r\n\r\n    .card h1 {\r\n      font-size: 1.125em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.0625em;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7S0FDRyxhQUFhO0tBQ2IsV0FBVztLQUNYLG1CQUFtQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDViw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBUEE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBLHNCQUFzQixZQUFZLEVBQUUsZUFBZSxFQUFFO0VBQ3JELDBCQUEwQixZQUFZLEVBQUUsZUFBZSxHQUFHO0VBQzFELG1CQUFtQixZQUFZLEVBQUUsZUFBZSxFQUFFOztHQUVqRDtJQUNDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLEtBQUs7SUFDTCxVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0VBRWpCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1COztFQUVyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7OztFQUdFOztJQUVFO01BQ0UsU0FBUztNQUNULGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFRjs7O0VBRUE7O0lBRUU7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7OztFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOzs7RUFFQTs7SUFFRTtNQUNFLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDAwcHgpIHtcclxuICBodG1sLCBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDoxMzAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICAgZmxleDogMCAwIDMzJTtcclxuICAgICBib3JkZXI6bm9uZTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMC4wO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODQyOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVyID4gLnRleHQgeyBjb2xvcjogd2hpdGU7IGN1cnNvcjogZGVmYXVsdDsgfVxyXG4gIC5jYXJkOmhvdmVyID4gLmNhdGVnb3J5IHsgY29sb3I6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7ICB9XHJcbiAgLmNhcmQ6aG92ZXIgPiBoMSB7IGNvbG9yOiB3aGl0ZTsgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4gICAuY2FyZCAjY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5jYXJkICNpbWFnZXtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1MC42MiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBpbWcsIGlmcmFtZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBoMSB7XHJcbiAgICBmb250LXNpemU6MS4zMTNlbTtcclxuICAgIGNvbG9yOiAjZjc4NDI5O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNhcmQgaDE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIG1hcmdpbjoxNXB4IDI1cHg7XHJcbiAgICBjb2xvcjogIzYwNjA2MDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnl7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6cmdiKDI2LCAyNSwgMjUpO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuY2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcclxuXHJcbiAgICAuY2FyZC13cmFwcGVye1xyXG4gICAgICB3aWR0aDo5NSU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMSU7O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIGgxe1xyXG4gICAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCAudGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxLjE4OGVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG5cclxuICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmR7XHJcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIGgxLCAudGV4dCwgLmNhdGVnb3J5e1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xyXG5cclxuICAgIC5jYXJkIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEuMDYyNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");



let MainComponent = class MainComponent {
    constructor(service) {
        this.service = service;
        this.articles = [];
        this.getArticles();
    }
    ngOnInit() {
    }
    getArticles() {
        this.service.getPublishedArticles().subscribe(res => {
            this.articles = res;
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
], MainComponent);



/***/ }),

/***/ "./src/app/models.ts":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: Article, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Article {
    constructor(a) {
        this.id = a.id;
        this.title = a.title;
        this.mainImage = a.mainImage;
        this.description = a.description;
        this.text = a.text;
        this.category = a.category;
        this.publicationDate = a.publicationDate;
        this.published = a.published;
        this.withVideo = a.withVideo;
    }
}
Article.ctorParameters = () => [
    { type: undefined }
];
class Category {
    constructor(c) {
        this.id = c.id;
        this.name = c.name;
        this.articles = c.articles;
    }
}
Category.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n\r\n  #center {\r\n    font-family: 'Roboto', sans-serif;\r\n    background-color: #333;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s;\r\n            animation: fadeIn 0.9s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n  }\r\n\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  #center h1{\r\n    font-size: 3.7em;\r\n    font-weight: bold;\r\n    color: #f78429;\r\n  }\r\n\r\n  #center p{\r\n    font-size: 2em;\r\n    color: #f78429;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n\r\n  #center{\r\n    justify-content: flex-start;\r\n    padding-top: 200px;\r\n  }\r\n\r\n  #center h1{\r\n    font-size: 3em;\r\n    font-weight: bold;\r\n    color: #f78429;\r\n  }\r\n\r\n  #center p{\r\n    font-size: 1.2em;\r\n    color: #f78429;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtJQUNFLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9COzs7RUFHQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7O0VBUEE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMDBweCkge1xyXG5cclxuICAjY2VudGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcblxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjY2VudGVyIGgxe1xyXG4gICAgZm9udC1zaXplOiAzLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgfVxyXG5cclxuICAjY2VudGVyIHB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZjc4NDI5O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk5cHgpIHtcclxuXHJcbiAgI2NlbnRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICB9XHJcblxyXG4gICNjZW50ZXIgaDF7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgfVxyXG5cclxuICAjY2VudGVyIHB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/page-one-category/page-one-category.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/page-one-category/page-one-category.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n  html, body {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  #container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 25px;\r\n  }\r\n\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    width:1300px;\r\n    padding-left: 12px;\r\n  }\r\n\r\n  .card {\r\n     flex: 0 0 33%;\r\n     border:none;\r\n     margin-bottom: 30px;\r\n  }\r\n\r\n  .card {\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s;\r\n            animation: fadeIn 0.9s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n  }\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  .card:hover{\r\n    background-color: #f78429;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  \r\n  .card:hover > .text { color: white; cursor: default; }\r\n  .card:hover > .category { color: white; }\r\n  .card:hover > h1 { color: white; }\r\n\r\n   .card #center {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n  }\r\n  .card #image{\r\n    width:90%;\r\n    padding-top: 50.62%;\r\n    position: relative;\r\n  }\r\n\r\n  .card img, iframe {\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height:100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n\r\n  .card h1 {\r\n    font-size:1.313em;\r\n    color: #f78429;\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    margin-top: 25px;\r\n    cursor: pointer;\r\n\r\n  }\r\n\r\n  .card h1:hover{\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .text {\r\n    margin:15px 25px;\r\n    color: #606060;\r\n    font-size: 1.25em;\r\n    text-align: justify;\r\n\r\n\r\n  }\r\n\r\n  .category{\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    color:rgb(26, 25, 25);\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card .category:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n  #pag-center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n    margin:50px 0;\r\n  }\r\n\r\n .pagination {\r\n    display: inline-block;\r\n  }\r\n\r\n  .pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    margin:0 4px;\r\n    border-bottom: 3px solid transparent;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .pagination a:hover { cursor: pointer; border-bottom: 3px solid #f78429;}\r\n\r\n    .activated {\r\n      background-color:#f78429 ;\r\n  }\r\n}\r\n\r\n\r\n  @media screen and (max-width: 1365px) {\r\n\r\n    .card-wrapper{\r\n      width:95%;\r\n      padding-left: 1%;;\r\n    }\r\n\r\n    .card h1{\r\n      font-size: 1.25em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.188em;\r\n    }\r\n\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 1023px) {\r\n\r\n    .card-wrapper{\r\n      padding-left: 0;\r\n    }\r\n\r\n    .card {\r\n      flex: 0 0 50%;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 767px) {\r\n    .card{\r\n      flex: 0 0 100%;\r\n    }\r\n\r\n    .card h1, .text, .category{\r\n      margin-left: 5%;\r\n    }\r\n\r\n    .pagination a {\r\n      font-size: 1.25em;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 399px) {\r\n\r\n    .card h1 {\r\n      font-size: 1.125em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.0625em;\r\n    }\r\n\r\n\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1vbmUtY2F0ZWdvcnkvcGFnZS1vbmUtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0tBQ0csYUFBYTtLQUNiLFdBQVc7S0FDWCxtQkFBbUI7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQVBBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOzs7RUFHQSxzQkFBc0IsWUFBWSxFQUFFLGVBQWUsRUFBRTtFQUNyRCwwQkFBMEIsWUFBWSxFQUFFO0VBQ3hDLG1CQUFtQixZQUFZLEVBQUU7O0dBRWhDO0lBQ0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sS0FBSztJQUNMLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7OztFQUdyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztDQUVEO0lBQ0cscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0VBQ2pCOztFQUVBLHNCQUFzQixlQUFlLEVBQUUsZ0NBQWdDLENBQUM7O0lBRXRFO01BQ0UseUJBQXlCO0VBQzdCO0FBQ0Y7OztFQUdFOztJQUVFO01BQ0UsU0FBUztNQUNULGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFRjs7O0VBRUE7O0lBRUU7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7OztFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGOzs7RUFFQTs7SUFFRTtNQUNFLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7O0VBR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW9uZS1jYXRlZ29yeS9wYWdlLW9uZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwMHB4KSB7XHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDoxMzAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICAgZmxleDogMCAwIDMzJTtcclxuICAgICBib3JkZXI6bm9uZTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMC4wO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODQyOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyID4gLnRleHQgeyBjb2xvcjogd2hpdGU7IGN1cnNvcjogZGVmYXVsdDsgfVxyXG4gIC5jYXJkOmhvdmVyID4gLmNhdGVnb3J5IHsgY29sb3I6IHdoaXRlOyB9XHJcbiAgLmNhcmQ6aG92ZXIgPiBoMSB7IGNvbG9yOiB3aGl0ZTsgfVxyXG5cclxuICAgLmNhcmQgI2NlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuY2FyZCAjaW1hZ2V7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAuNjIlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgaW1nLCBpZnJhbWUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgaDEge1xyXG4gICAgZm9udC1zaXplOjEuMzEzZW07XHJcbiAgICBjb2xvcjogI2Y3ODQyOTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB9XHJcblxyXG4gIC5jYXJkIGgxOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICBtYXJnaW46MTVweCAyNXB4O1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeXtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBjb2xvcjpyZ2IoMjYsIDI1LCAyNSk7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkIC5jYXRlZ29yeTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gICNwYWctY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbjo1MHB4IDA7XHJcbiAgfVxyXG5cclxuIC5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowIDRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uIGE6aG92ZXIgeyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjc4NDI5O31cclxuXHJcbiAgICAuYWN0aXZhdGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjc4NDI5IDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG5cclxuICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgIHdpZHRoOjk1JTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxJTs7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEuMTg4ZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcblxyXG4gICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgaDEsIC50ZXh0LCAuY2F0ZWdvcnl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbiBhIHtcclxuICAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xyXG5cclxuICAgIC5jYXJkIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEuMDYyNWVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page-one-category/page-one-category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page-one-category/page-one-category.component.ts ***!
  \******************************************************************/
/*! exports provided: PageOneCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneCategoryComponent", function() { return PageOneCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PageOneCategoryComponent = class PageOneCategoryComponent {
    constructor(service, http, route, router) {
        this.service = service;
        this.http = http;
        this.route = route;
        this.router = router;
        this.articles = [];
        this.getArticlesByCategory();
        this.getNumberOfPages();
    }
    ngOnInit() {
    }
    getArticlesByCategory() {
        this.route.params.subscribe(params => {
            this.categoryId = +params['id'],
                this.service.getArticlesByCategory(this.categoryId).subscribe(res => {
                    this.articles = res;
                }, error => {
                    this.router.navigate(['/**']);
                });
        });
    }
    getNumberOfPages() {
        this.route.params.subscribe(params => {
            this.categoryId = +params['id'],
                this.service.getNumberOfPages(this.categoryId).subscribe(res => {
                    this.numberOfPages = res;
                    this.numbers = Array(this.numberOfPages).fill(0).map((x, i) => i + 1).slice(1);
                });
        });
    }
    nesto(x) {
        console.log(x + 1);
        this.selectedIndex = x;
    }
};
PageOneCategoryComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PageOneCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-one-category',
        template: __webpack_require__(/*! raw-loader!./page-one-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-one-category/page-one-category.component.html"),
        styles: [__webpack_require__(/*! ./page-one-category.component.css */ "./src/app/page-one-category/page-one-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PageOneCategoryComponent);



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n  html, body {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  #container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 25px;\r\n  }\r\n\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    width:1300px;\r\n    padding-left: 12px;\r\n  }\r\n\r\n  .card {\r\n     flex: 0 0 33%;\r\n     border:none;\r\n     margin-bottom: 30px;\r\n  }\r\n\r\n  .card {\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s;\r\n            animation: fadeIn 0.9s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n  }\r\n\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  .card:hover{\r\n    background-color: #f78429;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  \r\n  .card:hover > .text { color: white; cursor: default; }\r\n  .card:hover > .category { color: white; }\r\n  .card:hover > h1 { color: white; }\r\n\r\n   .card #center {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n  }\r\n  .card #image{\r\n    width:90%;\r\n    padding-top: 50.62%;\r\n    position: relative;\r\n  }\r\n\r\n  .card img, iframe {\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height:100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n\r\n  .card h1 {\r\n    font-size:1.313em;\r\n    color: #f78429;\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    margin-top: 25px;\r\n    cursor: pointer;\r\n\r\n  }\r\n\r\n  .card h1:hover{\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .text {\r\n    margin:15px 25px;\r\n    color: #606060;\r\n    font-size: 1.25em;\r\n    text-align: justify;\r\n\r\n\r\n  }\r\n\r\n  .category{\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    color:rgb(26, 25, 25);\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card .category:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n  #pag-center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n    margin:50px 0;\r\n  }\r\n\r\n .pagination {\r\n    display: inline-block;\r\n  }\r\n  .pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 5px 12px;\r\n    text-decoration: none;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    margin:0 4px;\r\n    border-bottom: 3px solid transparent;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .pagination a:hover { cursor: pointer; border-bottom: 3px solid #f78429;}\r\n\r\n    .activated {\r\n      background-color:#f78429 ;\r\n  }\r\n}\r\n\r\n\r\n  @media screen and (max-width: 1365px) {\r\n\r\n    .card-wrapper{\r\n      width:95%;\r\n      padding-left: 1%;;\r\n    }\r\n\r\n    .card h1{\r\n      font-size: 1.25em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.188em;\r\n    }\r\n\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 1023px) {\r\n\r\n    .card-wrapper{\r\n      padding-left: 0;\r\n    }\r\n\r\n    .card {\r\n      flex: 0 0 50%;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 767px) {\r\n    .card{\r\n      flex: 0 0 100%;\r\n    }\r\n\r\n    .card h1, .text, .category{\r\n      margin-left: 5%;\r\n    }\r\n\r\n    .pagination a {\r\n      font-size: 1.25em;\r\n    }\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 399px) {\r\n\r\n    .card h1 {\r\n      font-size: 1.125em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.0625em;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtLQUNHLGFBQWE7S0FDYixXQUFXO0tBQ1gsbUJBQW1CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjs7O0VBR0E7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7OztFQVBBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOzs7RUFHQSxzQkFBc0IsWUFBWSxFQUFFLGVBQWUsRUFBRTtFQUNyRCwwQkFBMEIsWUFBWSxFQUFFO0VBQ3hDLG1CQUFtQixZQUFZLEVBQUU7O0dBRWhDO0lBQ0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sS0FBSztJQUNMLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7OztFQUdyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztDQUVEO0lBQ0cscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7RUFDakI7O0VBRUEsc0JBQXNCLGVBQWUsRUFBRSxnQ0FBZ0MsQ0FBQzs7SUFFdEU7TUFDRSx5QkFBeUI7RUFDN0I7QUFDRjs7O0VBR0U7O0lBRUU7TUFDRSxTQUFTO01BQ1QsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztFQUVGOzs7RUFFQTs7SUFFRTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7RUFDRjs7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0Y7OztFQUVBOztJQUVFO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOzs7RUFHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwMHB4KSB7XHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDoxMzAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICAgZmxleDogMCAwIDMzJTtcclxuICAgICBib3JkZXI6bm9uZTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcblxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzg0Mjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBcclxuICAuY2FyZDpob3ZlciA+IC50ZXh0IHsgY29sb3I6IHdoaXRlOyBjdXJzb3I6IGRlZmF1bHQ7IH1cclxuICAuY2FyZDpob3ZlciA+IC5jYXRlZ29yeSB7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gIC5jYXJkOmhvdmVyID4gaDEgeyBjb2xvcjogd2hpdGU7IH1cclxuXHJcbiAgIC5jYXJkICNjZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmNhcmQgI2ltYWdle1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDUwLjYyJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkIGltZywgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkIGgxIHtcclxuICAgIGZvbnQtc2l6ZToxLjMxM2VtO1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY2FyZCBoMTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgbWFyZ2luOjE1cHggMjVweDtcclxuICAgIGNvbG9yOiAjNjA2MDYwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnl7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6cmdiKDI2LCAyNSwgMjUpO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuY2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAjcGFnLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46NTBweCAwO1xyXG4gIH1cclxuXHJcbiAucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowIDRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uIGE6aG92ZXIgeyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjc4NDI5O31cclxuXHJcbiAgICAuYWN0aXZhdGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjc4NDI5IDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xyXG5cclxuICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgIHdpZHRoOjk1JTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxJTs7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEuMTg4ZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcblxyXG4gICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgaDEsIC50ZXh0LCAuY2F0ZWdvcnl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbiBhIHtcclxuICAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xyXG5cclxuICAgIC5jYXJkIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDEuMDYyNWVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PageComponent = class PageComponent {
    constructor(service, http, route, router) {
        this.service = service;
        this.http = http;
        this.route = route;
        this.router = router;
        this.articles = [];
        this.getArticlesByCategoryandPage();
        this.getNumberOfPages();
    }
    ngOnInit() {
    }
    getArticlesByCategoryandPage() {
        this.route.params.subscribe(params => {
            this.categoryId = +params['id'],
                this.pageNumber = +params['pageNumber'];
            this.service.getArticlesByCategoryandPage(this.categoryId, this.pageNumber).subscribe(res => {
                this.articles = res;
            }, error => {
                this.router.navigate(['/**']);
            });
        });
    }
    getNumberOfPages() {
        this.route.params.subscribe(params => {
            this.categoryId = +params['id'],
                this.service.getNumberOfPages(this.categoryId).subscribe(res => {
                    this.numberOfPages = res;
                    this.numbers = Array(this.numberOfPages).fill(0).map((x, i) => i + 1);
                    this.firstNums = this.numbers.slice(0, this.pageNumber - 1);
                    this.secondNums = this.numbers.slice(this.pageNumber);
                });
        });
    }
    refresh() {
        window.location.reload();
    }
};
PageComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html"),
        styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PageComponent);



/***/ }),

/***/ "./src/app/pipe.ts":
/*!*************************!*\
  !*** ./src/app/pipe.ts ***!
  \*************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "./src/app/publish-or-modify-text/publish-or-modify-text.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/publish-or-modify-text/publish-or-modify-text.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top:50px;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 0.9s;\r\n          animation: fadeIn 0.9s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.container .title {\r\n  margin-bottom: 15px;\r\n  font-size: 2.2em;\r\n  color: #555555;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.container .category {\r\n  margin-bottom: 50px;\r\n  color:#f78429;\r\n  font-size:1.25em;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.container #text {\r\n font-size: 1.25em;\r\n line-height: 1.9;\r\n color: black;\r\n text-align: justify;\r\n margin-top: 40px;\r\n}\r\n\r\n:host ::ng-deep #text a {\r\n  color: #f78429;\r\n}\r\n\r\n.container .category:hover{\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.container #image{\r\n  width:50%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container img {\r\n  width:100%;\r\n  height:100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.container iframe {\r\n  width: 500px;\r\n  height: 300px;\r\n  \r\n}\r\n\r\n.container button {\r\n  background-color: white;\r\n  border: solid 3px #f78429;\r\n  color: #f78429;\r\n  padding: 5px 15px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n  margin-right: 70px;\r\n}\r\n\r\n.container button:hover {\r\n  background-color: #f78429;\r\n  color:white;\r\n}\r\n\r\n.container #button-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width:100%;\r\n  margin-top: 35px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaC1vci1tb2RpZnktdGV4dC9wdWJsaXNoLW9yLW1vZGlmeS10ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDViw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7QUFFZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHVibGlzaC1vci1tb2RpZnktdGV4dC9wdWJsaXNoLW9yLW1vZGlmeS10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciAudGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxuICBjb2xvcjogIzU1NTU1NTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2F0ZWdvcnkge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgY29sb3I6I2Y3ODQyOTtcclxuICBmb250LXNpemU6MS4yNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyICN0ZXh0IHtcclxuIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gbGluZS1oZWlnaHQ6IDEuOTtcclxuIGNvbG9yOiBibGFjaztcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI3RleHQgYSB7XHJcbiAgY29sb3I6ICNmNzg0Mjk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhdGVnb3J5OmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFpbmVyICNpbWFnZXtcclxuICB3aWR0aDo1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGlmcmFtZSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5jb250YWluZXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHNvbGlkIDNweCAjZjc4NDI5O1xyXG4gIGNvbG9yOiAjZjc4NDI5O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY29udGFpbmVyICNidXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/publish-or-modify-text/publish-or-modify-text.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/publish-or-modify-text/publish-or-modify-text.component.ts ***!
  \****************************************************************************/
/*! exports provided: PublishOrModifyTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishOrModifyTextComponent", function() { return PublishOrModifyTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");





let PublishOrModifyTextComponent = class PublishOrModifyTextComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.article = new _models__WEBPACK_IMPORTED_MODULE_2__["Article"]({
            title: "",
            text: "",
            description: "",
            mainImage: "",
            category: new _models__WEBPACK_IMPORTED_MODULE_2__["Category"]({})
        });
        this.show = false;
        this.getUnpublishedArticle();
    }
    ngOnInit() {
    }
    getUnpublishedArticle() {
        this.route.params.subscribe(params => {
            this.id = +params['id'],
                this.service.getUnpublishedArticle(this.id).subscribe(res => {
                    this.article = res;
                }, error => {
                    this.router.navigate(['/**']);
                });
        });
    }
    publishArticle() {
        this.service.publishArticle(this.id).subscribe(res => {
            this.article = res;
            alert("Vaš članak je uspešno objavljen!");
            this.router.navigate(['/admin/objavljeni_tekstovi']);
        });
    }
};
PublishOrModifyTextComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PublishOrModifyTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publish-or-modify-text',
        template: __webpack_require__(/*! raw-loader!./publish-or-modify-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/publish-or-modify-text/publish-or-modify-text.component.html"),
        styles: [__webpack_require__(/*! ./publish-or-modify-text.component.css */ "./src/app/publish-or-modify-text/publish-or-modify-text.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PublishOrModifyTextComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n  html, body {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  #container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 25px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    width:1300px;\r\n    padding-left: 12px;\r\n  }\r\n\r\n  .card {\r\n     flex: 0 0 33%;\r\n     border:none;\r\n     margin-bottom: 30px;\r\n  }\r\n\r\n  .card {\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s 1;\r\n            animation: fadeIn 0.9s 1;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n  }\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.0;\r\n    }\r\n    100% {\r\n      opacity: 1.0;\r\n    }\r\n  }\r\n\r\n  .card:hover{\r\n    background-color: #f78429;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card:hover > .text { color: white; }\r\n  .card:hover > .category { color: white; }\r\n  .card:hover > h1 { color: white; }\r\n\r\n   .card #center {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n  }\r\n  .card #image{\r\n    width:90%;\r\n    padding-top: 50.62%;\r\n    position: relative;\r\n  }\r\n\r\n  .card img, iframe {\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height:100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n\r\n  .card h1 {\r\n    font-size:1.313em;\r\n    color: #f78429;\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    margin-top: 25px;\r\n\r\n  }\r\n\r\n  .card h1:hover{\r\n    text-decoration: underline;\r\n  }\r\n\r\n   .text {\r\n    margin:15px 25px;\r\n    color: #606060;\r\n    font-size: 1.25em;\r\n    text-align: left;\r\n\r\n  }\r\n\r\n  .category{\r\n    text-align: start;\r\n    margin-left: 25px;\r\n    color:rgb(26, 25, 25);\r\n    font-size: 1em;\r\n  }\r\n\r\n  .card .category:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 1365px) {\r\n\r\n    .card-wrapper{\r\n      width:95%;\r\n      padding-left: 1%;;\r\n    }\r\n\r\n    .card h1{\r\n      font-size: 1.25em;\r\n    }\r\n\r\n    .card .text{\r\n      font-size: 1.188em;\r\n    }\r\n\r\n  }\r\n\r\n  @media screen and (max-width: 1023px) {\r\n\r\n    .card-wrapper{\r\n      padding-left: 0;\r\n    }\r\n\r\n    .card {\r\n      flex: 0 0 50%;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 767px) {\r\n    .card{\r\n      flex: 0 0 100%;\r\n    }\r\n\r\n    .card h1, .text, .category{\r\n      margin-left: 5%;\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0tBQ0csYUFBYTtLQUNiLFdBQVc7S0FDWCxtQkFBbUI7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQVBBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBLHNCQUFzQixZQUFZLEVBQUU7RUFDcEMsMEJBQTBCLFlBQVksRUFBRTtFQUN4QyxtQkFBbUIsWUFBWSxFQUFFOztHQUVoQztJQUNDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLEtBQUs7SUFDTCxVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7R0FFQztJQUNDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOzs7RUFHQTs7SUFFRTtNQUNFLFNBQVM7TUFDVCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7O0VBRUY7O0VBRUE7O0lBRUU7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7OztBQUdGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwMHB4KSB7XHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6MTMwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgIGZsZXg6IDAgMCAzMyU7XHJcbiAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjlzIDE7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMC4wO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODQyOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVyID4gLnRleHQgeyBjb2xvcjogd2hpdGU7IH1cclxuICAuY2FyZDpob3ZlciA+IC5jYXRlZ29yeSB7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gIC5jYXJkOmhvdmVyID4gaDEgeyBjb2xvcjogd2hpdGU7IH1cclxuXHJcbiAgIC5jYXJkICNjZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmNhcmQgI2ltYWdle1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDUwLjYyJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkIGltZywgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkIGgxIHtcclxuICAgIGZvbnQtc2l6ZToxLjMxM2VtO1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuY2FyZCBoMTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgIC50ZXh0IHtcclxuICAgIG1hcmdpbjoxNXB4IDI1cHg7XHJcbiAgICBjb2xvcjogIzYwNjA2MDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnl7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6cmdiKDI2LCAyNSwgMjUpO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuY2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NXB4KSB7XHJcblxyXG4gICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgd2lkdGg6OTUlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDElOztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMXtcclxuICAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgLnRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xODhlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuXHJcbiAgICAuY2FyZC13cmFwcGVye1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jYXJke1xyXG4gICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMSwgLnRleHQsIC5jYXRlZ29yeXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");




let SearchComponent = class SearchComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.articles = [];
        this.displayArticles = [];
        this.getArticles();
    }
    ngOnInit() {
    }
    getArticles() {
        this.route.params.subscribe(params => {
            this.keyWord = params['keyword'];
            this.service.search(this.keyWord).subscribe(res => {
                this.articles = res;
                for (var a of this.articles) {
                    var cleanTitle = a.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "DJ").replace(/đ/g, "dj");
                    var cleanText = a.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "DJ").replace(/đ/g, "dj");
                    var cleanKeyWord = this.keyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "DJ").replace(/đ/g, "dj");
                    if (cleanText.toLowerCase().includes(cleanKeyWord.toLowerCase())) {
                        var start = cleanText.toLowerCase().indexOf(cleanKeyWord.toLowerCase());
                        var end = cleanText.toLowerCase().indexOf(cleanKeyWord.toLowerCase()) + cleanKeyWord.length;
                        a.description = cleanText.replace(cleanText.substring(start, end), cleanText.substring(start, end).bold());
                    }
                    if (cleanTitle.toLowerCase().includes(cleanKeyWord.toLowerCase())) {
                        var start = cleanTitle.toLowerCase().indexOf(cleanKeyWord.toLowerCase());
                        var end = cleanTitle.toLowerCase().indexOf(cleanKeyWord.toLowerCase()) + cleanKeyWord.length;
                        a.title = cleanTitle.replace(cleanTitle.substring(start, end), cleanTitle.substring(start, end).fontcolor("#333").bold());
                    }
                }
            }, error => {
                this.router.navigate(['/**']);
            });
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/security/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/security/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    login(username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username, password }), { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            let token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        }));
    }
    getToken() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    isLoggedIn() {
        if (this.getToken() != '')
            return true;
        else
            return false;
    }
    getCurrentUser() {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__["JwtUtilsService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__["JwtUtilsService"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/security/can-activate-auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/can-activate-auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CanActivateAuthGuard = class CanActivateAuthGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
CanActivateAuthGuard.ctorParameters = () => [
    { type: _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CanActivateAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CanActivateAuthGuard);



/***/ }),

/***/ "./src/app/security/jwt-utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/jwt-utils.service.ts ***!
  \***********************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JwtUtilsService = class JwtUtilsService {
    constructor() { }
    getRoles(token) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(x => x.authority) || [];
    }
};
JwtUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JwtUtilsService);



/***/ }),

/***/ "./src/app/security/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");




let TokenInterceptorService = class TokenInterceptorService {
    constructor(inj) {
        this.inj = inj;
    }
    intercept(request, next) {
        let authenticationService = this.inj.get(_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': `${authenticationService.getToken()}`
            }
        });
        return next.handle(request);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/text/text.component.css":
/*!*****************************************!*\
  !*** ./src/app/text/text.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 8000px) {\r\n  html, body {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top:50px;\r\n  }\r\n\r\n  .container {\r\n    opacity: 0;\r\n    -webkit-animation: fadeIn 0.9s;\r\n            animation: fadeIn 0.9s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n  }\r\n\r\n    @-webkit-keyframes fadeIn {\r\n      0% {\r\n        opacity: 0.0;\r\n      }\r\n      100% {\r\n        opacity: 1.0;\r\n      }\r\n    }\r\n\r\n    @keyframes fadeIn {\r\n      0% {\r\n        opacity: 0.0;\r\n      }\r\n      100% {\r\n        opacity: 1.0;\r\n      }\r\n    }\r\n\r\n\r\n  .container .title {\r\n    margin-bottom: 15px;\r\n    font-size: 2.2em;\r\n    color: #555555;\r\n    font-weight: 500;\r\n    text-align: center;\r\n  }\r\n\r\n  .container .category {\r\n    margin-bottom: 50px;\r\n    color:#f78429;\r\n    font-size:1.25em;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .container #text {\r\n   font-size: 1.25em;\r\n   line-height: 1.9;\r\n   color: black;\r\n   text-align: justify;\r\n   margin-top: 40px;\r\n  }\r\n\r\n  :host ::ng-deep #text a {\r\n    color: #f78429;\r\n  }\r\n\r\n  .container .category:hover{\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n  }\r\n  .container #image{\r\n    width:50%;\r\n    height: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .container img {\r\n    width:100%;\r\n    height:100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n\r\n  .container iframe {\r\n    width: 500px;\r\n    height: 300px;\r\n    \r\n  }\r\n  .social {\r\n    display: inline-grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    margin-top:70px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .social a {\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    padding:4px 8px;\r\n    font-size:2em;\r\n    text-align: center;\r\n    color: #333;\r\n    margin-right: 15px;\r\n  }\r\n\r\n  .social a:hover {\r\n    color:#f78429;\r\n  }\r\n  }\r\n\r\n  @media screen and (max-width: 1199px) {\r\n\r\n    .container .title{\r\n      font-size: 2em;\r\n    }\r\n\r\n    .container #text {\r\n      font-size: 1.2em;\r\n    }\r\n\r\n    .social a {\r\n      font-size: 1.7em;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 899px) {\r\n\r\n    .container #image{\r\n      width:70%;\r\n      padding-top: 50.62%;\r\n      position: relative;\r\n    }\r\n\r\n    .container img {\r\n      position:absolute;\r\n      left:0;\r\n      top:0;\r\n      width:100%;\r\n      height:100%;\r\n      -o-object-fit: cover;\r\n         object-fit: cover;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 599px) {\r\n\r\n    .container .title {\r\n        font-size: 1.5em;\r\n      }\r\n\r\n      .container .category {\r\n        font-size: 1em;\r\n      }\r\n\r\n      .container #text{\r\n        font-size: 1.1em;\r\n      }\r\n\r\n      .container #image{\r\n        width:90%;\r\n        padding-top: 50.62%;\r\n        position: relative;\r\n      }\r\n      .social a {\r\n        font-size: 1.3em;\r\n      }\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC90ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjs7SUFFRTtNQUNFO1FBQ0UsWUFBWTtNQUNkO01BQ0E7UUFDRSxZQUFZO01BQ2Q7SUFDRjs7SUFQQTtNQUNFO1FBQ0UsWUFBWTtNQUNkO01BQ0E7UUFDRSxZQUFZO01BQ2Q7SUFDRjs7O0VBR0Y7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7R0FDQyxpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsZ0JBQWdCO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhOztFQUVmO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTs7RUFFQTs7SUFFRTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTs7SUFFRTtNQUNFLFNBQVM7TUFDVCxtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLE1BQU07TUFDTixLQUFLO01BQ0wsVUFBVTtNQUNWLFdBQVc7TUFDWCxvQkFBaUI7U0FBakIsaUJBQWlCO0lBQ25CO0VBQ0Y7O0VBR0E7O0lBRUU7UUFDSSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxjQUFjO01BQ2hCOztNQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsU0FBUztRQUNULG1CQUFtQjtRQUNuQixrQkFBa0I7TUFDcEI7TUFDQTtRQUNFLGdCQUFnQjtNQUNsQjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvdGV4dC90ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDAwcHgpIHtcclxuICBodG1sLCBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjlzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMDtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIC5jb250YWluZXIgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciAuY2F0ZWdvcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGNvbG9yOiNmNzg0Mjk7XHJcbiAgICBmb250LXNpemU6MS4yNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgI3RleHQge1xyXG4gICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN0ZXh0IGEge1xyXG4gICAgY29sb3I6ICNmNzg0Mjk7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIC5jYXRlZ29yeTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY29udGFpbmVyICNpbWFnZXtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgaWZyYW1lIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLnNvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIG1hcmdpbi10b3A6NzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsIGEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6NHB4IDhweDtcclxuICAgIGZvbnQtc2l6ZToyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwgYTpob3ZlciB7XHJcbiAgICBjb2xvcjojZjc4NDI5O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG5cclxuICAgIC5jb250YWluZXIgLnRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyICN0ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIGEge1xyXG4gICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcclxuXHJcbiAgICAuY29udGFpbmVyICNpbWFnZXtcclxuICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTAuNjIlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciBpbWcge1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICB0b3A6MDtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcblxyXG4gICAgLmNvbnRhaW5lciAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXIgLmNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhaW5lciAjdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyICNpbWFnZXtcclxuICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwLjYyJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLnNvY2lhbCBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/text/text.component.ts":
/*!****************************************!*\
  !*** ./src/app/text/text.component.ts ***!
  \****************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");





let TextComponent = class TextComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.article = new _models__WEBPACK_IMPORTED_MODULE_2__["Article"]({
            title: "",
            text: "",
            description: "",
            mainImage: "",
            category: new _models__WEBPACK_IMPORTED_MODULE_2__["Category"]({})
        });
        this.show = false;
        this.getArticle();
    }
    ngOnInit() {
    }
    getArticle() {
        this.route.params.subscribe(params => {
            this.id = +params['id'],
                this.service.getArticle(this.id).subscribe(res => {
                    this.article = res;
                }, error => {
                    this.router.navigate(['/**']);
                });
        });
    }
};
TextComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text',
        template: __webpack_require__(/*! raw-loader!./text.component.html */ "./node_modules/raw-loader/index.js!./src/app/text/text.component.html"),
        styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/text/text.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TextComponent);



/***/ }),

/***/ "./src/app/unpublished-articles/unpublished-articles.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/unpublished-articles/unpublished-articles.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn 0.9s;\r\n          animation: fadeIn 0.9s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0.0;\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n  }\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  height: 66px;\r\n  margin-bottom:50px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-left: 40px;\r\n}\r\n\r\n.list ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.list ul li {\r\n  color: #f78429;\r\n  display:inline-block;\r\n  width: auto;\r\n  font-size: 1.25em;\r\n  font-weight: 500;\r\n  margin-right: 50px;\r\n  cursor: pointer;\r\n  border: solid 3px #f78429;\r\n  padding: 10px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.list ul li:hover{\r\n background-color: #f78429;\r\n color: white;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n\r\n.table{\r\n  display: table;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 80%;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.table tr {\r\n  background-color:white;\r\n  font-size: 1.25em;\r\n}\r\n\r\n.table tr #action {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 5px;;\r\n  padding-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.table tr #action:hover {\r\n  color:#f78429;\r\n}\r\n\r\n.table td {\r\n  vertical-align: middle;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5wdWJsaXNoZWQtYXJ0aWNsZXMvdW5wdWJsaXNoZWQtYXJ0aWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDViw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUM7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUdDO0VBQ0MsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUM7RUFDQyxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUM7Q0FDQSx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVDO0VBQ0MsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUM7RUFDQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVDO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUM7RUFDQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC91bnB1Ymxpc2hlZC1hcnRpY2xlcy91bnB1Ymxpc2hlZC1hcnRpY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC45cztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgfVxyXG59XHJcblxyXG4gLmxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjZweDtcclxuICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuIC5saXN0IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4gLmxpc3QgdWwgbGkge1xyXG4gIGNvbG9yOiAjZjc4NDI5O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IHNvbGlkIDNweCAjZjc4NDI5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuIC5saXN0IHVsIGxpOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2Y3ODQyOTtcclxuIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gLnRhYmxle1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuIC50YWJsZSB0ciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxufVxyXG5cclxuIC50YWJsZSB0ciAjYWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy10b3A6IDVweDs7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gLnRhYmxlIHRyICNhY3Rpb246aG92ZXIge1xyXG4gIGNvbG9yOiNmNzg0Mjk7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/unpublished-articles/unpublished-articles.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/unpublished-articles/unpublished-articles.component.ts ***!
  \************************************************************************/
/*! exports provided: UnpublishedArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpublishedArticlesComponent", function() { return UnpublishedArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UnpublishedArticlesComponent = class UnpublishedArticlesComponent {
    constructor(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.articles = [];
        this.categories = [];
        this.category = new _models__WEBPACK_IMPORTED_MODULE_2__["Category"]({});
        this.getUnpublishedArticles();
    }
    ngOnInit() {
    }
    getCategories() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    getUnpublishedArticles() {
        this.service.getUnpublishedArticles().subscribe(res => {
            this.articles = res;
        });
    }
    deleteArticle(id) {
        if (confirm('Da li ste sigurni da želite da obrišete članak?')) {
            this.service.deleteArticle(id).subscribe(res => {
                this.deletedArticle = res;
                this.refresh();
            });
        }
    }
    refresh() {
        window.location.reload();
    }
};
UnpublishedArticlesComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UnpublishedArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unpublished-articles',
        template: __webpack_require__(/*! raw-loader!./unpublished-articles.component.html */ "./node_modules/raw-loader/index.js!./src/app/unpublished-articles/unpublished-articles.component.html"),
        styles: [__webpack_require__(/*! ./unpublished-articles.component.css */ "./src/app/unpublished-articles/unpublished-articles.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], UnpublishedArticlesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kristina\Desktop\svojom-glavom\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map