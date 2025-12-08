# Coup de foudre

### Plugins
-**seo**
-**redactor**
-**minify**
-**link**

### Volumes
-**volumeHeaderImages**: volume, local folder

### Common
-**commonTitle**: plaintext, 128
-**commonDescription**: redactor, simple
-**commonLink**: link field
-**commonHeaderImage**: assets, volumeHeaderImages
-**commonSeo**: seo field
-**commonBody**: matrix
	-**textBlock**: matrixBlock
		- **mxBlockTitle**: plainText, 128
		- **mxBlockDescription**: redactor, simple
		- **mxTextContent**: redactor

### Home
-**homeBody**: matrix
	-**projectBlock**: matrixBlock
		- **mxProjectTitle**: plainText, 128
		- **mxProjectQuote**: plainText, 128
		- **mxProjectImage**: asset, limit 1
		- **mxProjectLink**: Link, entries + url

### Projects
-**projectsAssets**: assets test

### Section
-** Home (Single)
	-** Page **
		-**commonTitle**
		-**commonDescription**
	-** Body **
		-**commonBody**
	-** Seo **
		-**commonSeo**

** Contact (Single)
	-** Page **
		-**commonTitle**
		-**commonDescription**
	-** Seo **
		-**commonSeo**

** Projects (Channel)
	-** Page **
		-**commonTitle**
		-**commonDescription**
		-**commonLink**
	-** Body **
		-**projectsAssets**
	-** Seo **
		-**commonSeo**
** Pages (Channel)
	-** Page **
		-**commonTitle**
		-**commonDescription**
	-** Body **
		-**commonBody**
	-** Seo **
		-**commonSeo**

** mainNavigation (Structure)
	-**commonLink**

** footerNavigation (Structure)
	-**commonLink**
# studiocoupdefoudre-2026
