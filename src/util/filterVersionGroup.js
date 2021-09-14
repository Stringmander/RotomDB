export default function filterVersionGroup(arr, targetVersionGroup) {
  // filters moves based on targetGen
  const filteredArr = arr.filter(({ version_group_details }) => {
    const endpoint = version_group_details.filter(
      (property) => property.version_group.name === targetVersionGroup
    );
    return endpoint.length > 0;
  });

  return filteredArr;
}
