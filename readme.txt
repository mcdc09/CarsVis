Instructions:
For the project, the group used firefox when testing and implementing d3. In order to start the project, simply open up the html file contained within the zip. Then simply play with the filter, watch the US change from black to the selected states and have fun. Also, have an internet connection. 

Description:
The very core of the project relies on the displaying of the US Map, data which was taken from the linked project that is shown on the site. We found the project relatively early on and found that it acted as a perfect foundation for building an information visualization displaying the States from the United States. 

From there it was a matter of customization and the customization is quite extensive. First, the zoom-in functionality was left in, but the JSON itself was edited tediously in order to sort the data into a more manageable manner for any future projects using the us.json. The original project listed states in a random order and included some arcs for bits of land within the state section that were not needed . For example, the original ordering of the states were: Alaska, Hawaii, Random Path, Alabama, Arkansas, Arizona. Now both the IDs for the paths and the paths themselves are in an alphabetical state order. This allows for a simple iteration through the paths instead of trying to match states to random ids, which the original json forced you to do. 

After editing the json, the color highlighting functionality was replaced with an extensive heatmap for the populations within the United State, immediately evident when filtering the map. The range goes from blues, which have lower (cooler) populations to reds, which have the highest populations. Those that are not within range are simply colored black. From there, clicking on an object still zooms in, but data of both populations and the filter data is listed below in a tool tip, indicating the ranking of that states population over all, the population of that state, the state's name and the ranking of the population within the filter range, if the state lies within the current filter range (N|A otherwise). The dynamic query done when filtering slowly changes the colors as the colors are generated in relation to the max and min of the filter, not of the overall populations. The onclick function still contains much of the original highlighting code, but this was disabled in favor of the simple tooltips in the bottom and using the zoom-in as an indication of the selected state while leaving the heatmap color in tact. 

On another note, instead of having the overal G added in the original code contain the "states" id, the project also edited this in order to add a states class to each path for each state. The result of this allows easy selection of the states, for either removing the states class and adding a specialized one (say "states1-50") which would allow discrete colors to be chosen, or "states1-5" for coloring regions of states a specific color. This was deeemed much more flexible than the simple all encompassing "states" id which was used previously to color all the path elements at once. 





