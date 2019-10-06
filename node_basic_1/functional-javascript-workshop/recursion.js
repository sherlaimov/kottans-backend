function getDependencies(tree, depArray = []) {
  if (tree && tree.hasOwnProperty('dependencies')) {
    const { dependencies } = tree;
    Object.entries(dependencies).forEach(([key, value]) => {
      const depString = `${key}@${value['version']}`;
      if (depArray.includes(depString) === false) {
        depArray.push(depString);
      }
      return getDependencies(value, depArray);
    });
  }
  return depArray.sort();
}
module.exports = getDependencies;
