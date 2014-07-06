## setup user (only have to do once per machine)

  npm set init.author.name "Your Name"
  npm set init.author.email "your@email"
  npm set init.author.url "http://your.url"

then:

  npm adduser

## start a project

  npm init
  
## 

## tag a version

  git tag 0.0.0
  git push origin master --tags

## change a package version

  npm version path -m "version bump to %s"
  npm version minor -m "version bump to %s"
  npm version major -m "version bump to %s"

## publish a package

  npm publish
  
## find a license for your project

at http://opensource.org/licenses/alphabetical
