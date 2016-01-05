#https://coderwall.com/p/jmdgga/sass-compass-compile-two-different-files-for-development-and-production-environment

# Require any additional compass plugins here.

environment = :development
#environment = :production


# Set this to the root of your project when deployed:
http_path       = "/"
css_dir         = "assets/css"
sass_dir        = "scss"
images_dir      = "assets/gfx"
javascripts_dir = "assets/js"
cache_path      = 'scss/.sass-cache'
fonts_dir       = 'assets/fonts'


sourcemap       = false

if environment == :development
	line_comments = true
	output_style  = :expanded
else
	line_comments = false
	output_style  = :compressed
end

#output_style   = :expanded or :nested or :compact or :compressed
#output_style    = :compressed
#relative_assets = true

