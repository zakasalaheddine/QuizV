import { Switch, TextAreaStyled, DeleteButton } from "./StyledTags";
import { motion } from "framer-motion";

export default function Answer({ isSelected, setIsSelected, defaultValue }) {
  return (
    <div className="col-lg-6 col-md-12 mb-4 d-flex justify-content-around align-items-center">
      <Switch isSelected={isSelected} animate onClick={() => setIsSelected(!isSelected)}>
        <motion.div animate />
      </Switch>
      <TextAreaStyled className="form-control">{defaultValue}</TextAreaStyled>
      <DeleteButton className="btn btn-danger">
        <i className="fas fa-ban"></i>
      </DeleteButton>
    </div>
  )
}