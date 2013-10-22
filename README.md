M3 Workshop
=====

An RWD Workshop for the [2013 M3 Conf](http://m3conf.com), presented by Kevin Mack and Ryan Bichon. 

* View presentation slides: [http://kevinmack18.github.io/M3-RWD-Workshop/presentation/Presentation.pptx](http://kevinmack18.github.io/M3-RWD-Workshop/presentation/Presentation.pptx)
* View final demo: [http://kevinmack18.github.io/M3-RWD-Workshop/](http://kevinmack18.github.io/M3-RWD-Workshop/)
* View the demo's toolkit: [http://kevinmack18.github.io/M3-RWD-Workshop/toolkit.html](http://kevinmack18.github.io/M3-RWD-Workshop/toolkit.html)

---

## Get Started

````
	cd *your-local-workspace*
	git clone https://github.com/kevinmack18/M3-RWD-Workshop.git
	cd M3-RWD-Workshop
````

### Dependencies

* PHP (version TBD)
* Ruby v1.8.7+ - [RubyInstaller](http://rubyinstaller.org/downloads/) for Windows, follow the Ruby instructions from the [HTML5 Starter Kit](http://stash/projects/VCL/repos/resource-html5-starter-kit/browse)
* Sass v3.2.5+ - Follow the Sass instructions from the [HTML5 Starter Kit](http://stash/projects/VCL/repos/resource-html5-starter-kit/browse)
* [Node](http://nodejs.org/) v0.10.17+
* [GruntJS](http://gruntjs.com/) v0.1.9+

---

## Running Locally

## Grunt

This project comes setup with a [Grunt](http://gruntjs.com/getting-started) script that builds the project into the "~/M3-RWD-Workshop/workshop/production" folder, compiles scss and minifies it, concatenates js/css files included in the index.html build blocks and minifies them along with gzip compression, optimizes all of the images (png,jpg,jpeg,webp), performs a direct copy of assets/fonts/, assets/media/ and assets/js/libs directories and updates all of the links in the index file to reference the new minified files.

### Grunt Installation

The Grunt task requires the following dependencies: [Node](http://nodejs.org/), [GruntJS](http://gruntjs.com/), and [Ruby](http://rubyinstaller.org/downloads/) (for Windows).

```
	cd M3-RWD-Workshop/workshop/development/build
	npm install

```

### Grunt Server - Run it!

Launch a node server that compiles scss and fires a new browser tab with livereload that transforms you into a ROCK STAR!!!

```
	cd M3-RWD-Workshop/workshop/development/build
	grunt server
```

#### Custom Port

By default the port is `8989` but you can override it by doing the following:

```
	grunt server --port <enter-port-number>
```

### Grunt Build

Builds the project into a _compiled folder, compiles scss and minifies it, concatenates js/css files included in the index.html build blocks and minifies them along with gzip compression, optimizes all of the images (png,jpg,jpeg,webp), performs a direct copy of assets/fonts/, assets/media/ and assets/js/libs directories into dist, and updates all of the links in the index file to reference the new minified files. By default, the build will output to: `_compiled/`

```
	cd MM3-RWD-Workshop/workshop/development/build
	grunt build
```

## Sass Setup

### Install Sass

Sass is written in Ruby, so you’ll need Ruby installed as well. If you're using OS X, it's already there. Windows users can get it via the [RubyInstaller](http://rubyinstaller.org/downloads/) for Windows. Linux users can install it with their package manager. Once you have Ruby installed, run the following from the command line to install Sass:

```
	gem install sass
```

### Sass --watch

Tell Sass to watch the file and update the CSS every time the Sass file changes:

```
	cd M3-RWD-Workshop/workshop/development/assets/
	sass --watch scss:css --style compressed
```

**`--style compressed` is not required for development, but it is recommended for production compile of your .scss files**. Read more about Sass compile styles and options: [http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#options](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html).

---

## PHP

Update your "extra/httpd-vhosts.conf" file in your Apache setup. Basic setup can look like:

```
	# Listen
	Listen 8989

	# NameVirtualHost
	NameVirtualHost *:8989

	# M3Conf RWD Workshop
	<VirtualHost *:8989>
    	ServerName m3-workshop
	    DocumentRoot "*your-local-workspace*/M3-RWD-Workshop/workshop/development"
	    <Directory "*your-local-workspace*/M3-RWD-Workshop/workshop/development">
	        Options Indexes FollowSymLinks Includes
	        AllowOverride All
	        Order allow,deny
	        Allow from all
	    </Directory>
	</VirtualHost>
```

Please note: If you want to use `ServerName`, you will have to update your HOSTS file on your OS. If not, just go to http://your-local-ip:8989 in the browser.

---

## Libraries

* [jQuery](http://jquery.com) [1.9.1] - [MIT License](https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt)

---

## Future Enhancements

* Future enhancements on starter kits, UI Tool Kits, and additional libraries, visit us on [Github](http://github.com/resource).

---

## Additional
* **[Columbus Web Group](http://www.meetup.com/Columbus-Web-Group/)** - Join us for more meet ups
* **[R.A.D.](https://facebook.com/groups/rad.sharing/)** - Socialize with some really awesome developers
* **[Kevin Mack](mailto:kmack@resource.com)** and **[Ryan Bichon](mailto:rbichon@resource.com)**
