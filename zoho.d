// Set the JIRA API URL
url = "https://mohammed-thalha.atlassian.net/rest/api/2";
params = Map();
connectionName = "jiratesting";
// GET ALL PROJECTS
tasks = invokeurl
[
	url : url + "/search"
	type : GET
	connection:"jiratesting"
];
elements = list();
// 
tasks = tasks.get("issues");
columns = list();
for each task in tasks
{
	col = task.get("fields").get("status").get("name");
	if(!columns.contains(col)){
		columns.add(col);
	}
}

for each val in columns
{
	elements.add({"type":"text","text": val});
}


// To get the current project record
currentprojectId = zoho.cliq.getRecords("currentproject").get("list").get(0).get("projectid");
if(currentprojectId != 0)
{
	// GET CURRENT PROJECT
	currentProject = invokeurl
	[
		url :url + "/project/" + currentprojectId
		type :GET
		connection:"jiratesting"
	];
	
	elements.add({"type":"text","text":currentProject.get("name")});
}
// DISPLAYING ALL THE PROJECTS
// for each  project in projects
// {
// 	projectId = project.get("id");
// 	projectKey = project.get("key");
// 	projectName = project.get("name");
// 	projectType = project.get("projectTypeKey");
// 	elements.add({"type":"text","text": currentprojectId});
// }
// 
sections = list();
sections.add({"id":1,"elements":elements});
return {"type":"applet","tabs":{{"label":"My Tasks","id":"homeTab"}},"active_tab":"homeTab","sections":sections};
