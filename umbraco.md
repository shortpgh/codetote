# Fixing Problematic Characters

Umbraco will gracefully handle bad characters in some places, but will throw exceptions in others. This is due to how it stores it's information in XML files. The bad characters are those that XML processors don't like.

Here is the query to run to find the nodes causing the problem:

  select distinct contentNodeId, path, text
  from [tablename].dbo.cmsPropertyData
  inner join [tablename].dbo.umbracoNode on umbracoNode.id = cmsPropertyData.contentNodeId
  where dataNtext like '%%'
  
Where you put the character inside of the %% to find instances of it.

This query will give you the ID of the affecting node. Change it using the backoffice interface if possible. I don't make changes to the database directly unless that is a last resort.
