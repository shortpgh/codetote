/**
Takes an array and recusrively removes any duplicates.

This uses all built in Javascript methods. No external libraries needed.
**/

function remove_dupes(data) {
    var ret = [];
    if (data.length <= 0) { return [] };
    var cur = data.pop();
    if (data.indexOf(cur) <= 0) {
        ret = [cur];
    }
    return ret.concat(remove_dups(data));
};
