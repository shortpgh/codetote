== Windows ==
=== Remove all non-committed code on Windows ===

powershell -Command "&{(svn status --no-ignore) -match '^[\?i]' -replace '^.\s+' | rm -recurse -force}"

=== Remove all deleted files ===

svn status | ? { $_ -match '^!\s+(.*)' } | % { svn rm $Matches[1] }

=== Add all untracked files ===

svn status | ? { $_ -match '^\?\s+(.*)' } | % { svn add $Matches[1] }
