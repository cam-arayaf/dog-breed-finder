import { useEffect, useState } from "react";
import { shape, string } from "prop-types";
import { WrapperBreed } from "./styled";
import { Checkbox, Spinner } from "..";
import { useDogServices } from "../../contexts";

const BreedItem = ({ breedItem: { key, value } }) => {
  const { loadingSelectedBreed, setPressedBreed } = useDogServices();
  const [checked, setChecked] = useState(false);
  const [pressed, setPressed] = useState(false);
  const loading = key === loadingSelectedBreed;

  useEffect(() => {
    (() => checked && setPressed(true))();
    (() => pressed && setPressedBreed({ checked, key, value }))();
  }, [checked, key, pressed, setPressedBreed, value]);

  return (
    <WrapperBreed>
      <Checkbox checked={checked} disabled={loading} setChecked={setChecked}>
        {value}
      </Checkbox>
      {loading && <Spinner little margin="0 0 0 10px" />}
    </WrapperBreed>
  );
};

BreedItem.propTypes = {
  breedItem: shape({ key: string.isRequired, value: string.isRequired })
    .isRequired,
};

export default BreedItem;
