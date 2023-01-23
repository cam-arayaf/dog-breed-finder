export const addBreedImages = (breedImages, images, key, value) =>
  breedImages.concat(
    images.map((link, index) => ({
      checked: true,
      key,
      lastPressed: true,
      link,
      value: `${value} ${index + 1}`,
    }))
  );

export const hasBreedImages = (breedImages, key) =>
  breedImages.some((breedImage) => breedImage.key === key);

export const hasBreedImagesChecked = (breedImages, { checked, key }) =>
  breedImages.some(
    (breedImage) =>
      breedImage.key === key && breedImage.checked === checked && checked
  );

export const getBreeds = (breedNames, breeds = []) =>
  !Object.values(breedNames).forEach((breedName, indexBreedName) =>
    breedName.length
      ? breedName.forEach((subBreedName) =>
          breeds.push({
            key: `${
              Object.keys(breedNames)[indexBreedName]
            }/${subBreedName}`.toLowerCase(),
            value: `${
              Object.keys(breedNames)[indexBreedName]
            } ${subBreedName}`.toLowerCase(),
          })
        )
      : breeds.push({
          key: Object.keys(breedNames)[indexBreedName].toLowerCase(),
          value: Object.keys(breedNames)[indexBreedName].toLowerCase(),
        })
  ) && breeds;

export const getMockResolvedValue = (ok, response) => ({
  ok,
  json: async () => response,
});

export const modifyBreedImages = (breedImages, checked, key) =>
  breedImages
    .map((breedImage) =>
      breedImage.key === key
        ? { ...breedImage, checked, lastPressed: true }
        : { ...breedImage, lastPressed: false }
    )
    .sort((a, b) => Number(b.lastPressed) - Number(a.lastPressed));
